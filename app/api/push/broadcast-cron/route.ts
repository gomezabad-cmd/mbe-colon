import { NextRequest, NextResponse } from 'next/server'
import { getAdminFirestore, getAdminMessaging } from '@/lib/firebase-admin'
import { getCampaignForWeek } from '@/lib/push-campaigns'

const FCM_BATCH_SIZE = 500
const BROADCAST_COOLDOWN_MS = 3 * 24 * 60 * 60 * 1000

// Called by Vercel Cron — authenticated via CRON_SECRET header injected by Vercel
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const campaign = getCampaignForWeek()
  const now = Date.now()

  const db = getAdminFirestore()
  const snapshot = await db.collection('push_subscribers').get()

  if (snapshot.empty) {
    return NextResponse.json({ sent: 0 })
  }

  const eligibleDocs = snapshot.docs.filter(doc => {
    const lastBroadcast = doc.data().lastBroadcastAt ?? 0
    return now - lastBroadcast >= BROADCAST_COOLDOWN_MS
  })

  const skipped = snapshot.size - eligibleDocs.length
  const tokens: string[] = eligibleDocs.map(doc => doc.data().token as string).filter(Boolean)

  if (tokens.length === 0) {
    console.log(`[broadcast-cron] all ${skipped} subscriber(s) in cooldown, skipped`)
    return NextResponse.json({ sent: 0, skipped })
  }

  let totalSent = 0
  let totalFailed = 0
  const invalidTokens: string[] = []
  const sentTokens: string[] = []

  for (let i = 0; i < tokens.length; i += FCM_BATCH_SIZE) {
    const batch = tokens.slice(i, i + FCM_BATCH_SIZE)

    const response = await getAdminMessaging().sendEachForMulticast({
      tokens: batch,
      notification: {
        title: campaign.title,
        body: campaign.body,
      },
      webpush: {
        fcmOptions: { link: campaign.link },
        notification: {
          icon: '/icon-192x192.png',
          badge: '/icon-192x192.png',
          requireInteraction: true,
        },
      },
    })

    totalSent += response.successCount
    totalFailed += response.failureCount

    response.responses.forEach((res, idx) => {
      if (res.success) {
        sentTokens.push(batch[idx])
      } else if (res.error?.code === 'messaging/registration-token-not-registered') {
        invalidTokens.push(batch[idx])
      }
    })
  }

  if (sentTokens.length > 0) {
    const updateBatch = db.batch()
    sentTokens.forEach(token => {
      updateBatch.set(
        db.collection('push_subscribers').doc(token),
        { lastBroadcastAt: now },
        { merge: true }
      )
    })
    await updateBatch.commit().catch(() => {})
  }

  if (invalidTokens.length > 0) {
    const cleanBatch = db.batch()
    invalidTokens.forEach(token => {
      cleanBatch.delete(db.collection('push_subscribers').doc(token))
    })
    await cleanBatch.commit().catch(() => {})
  }

  console.log(`[broadcast-cron] sent=${totalSent} skipped=${skipped} failed=${totalFailed} cleaned=${invalidTokens.length} campaign="${campaign.title}"`)

  return NextResponse.json({ sent: totalSent, skipped, failed: totalFailed, cleaned: invalidTokens.length })
}
