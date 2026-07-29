import { NextRequest, NextResponse } from 'next/server'
import { getAdminFirestore, getAdminMessaging } from '@/lib/firebase-admin'
import { getCampaignForWeek, getCampaignByIndex } from '@/lib/push-campaigns'

const BROADCAST_SECRET = process.env.BROADCAST_SECRET
const FCM_BATCH_SIZE = 500
// Minimum gap between broadcasts to the same subscriber (3 days)
const BROADCAST_COOLDOWN_MS = 3 * 24 * 60 * 60 * 1000

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (!BROADCAST_SECRET || authHeader !== `Bearer ${BROADCAST_SECRET}`) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const body = await request.json().catch(() => ({}))
  const campaignIndex = typeof body.campaignIndex === 'number' ? body.campaignIndex : undefined
  const force = body.force === true
  const campaign = campaignIndex !== undefined
    ? getCampaignByIndex(campaignIndex)
    : getCampaignForWeek()

  const db = getAdminFirestore()
  const snapshot = await db.collection('push_subscribers').get()

  if (snapshot.empty) {
    return NextResponse.json({ sent: 0, message: 'Sin suscriptores' })
  }

  const now = Date.now()

  // Filter out subscribers in cooldown (unless force=true)
  const eligibleDocs = force
    ? snapshot.docs
    : snapshot.docs.filter(doc => {
        const lastBroadcast = doc.data().lastBroadcastAt ?? 0
        return now - lastBroadcast >= BROADCAST_COOLDOWN_MS
      })

  const skipped = snapshot.size - eligibleDocs.length
  const tokens: string[] = eligibleDocs.map(doc => doc.data().token as string).filter(Boolean)

  if (tokens.length === 0) {
    return NextResponse.json({ sent: 0, skipped, message: 'Todos en cooldown' })
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

  // Update lastBroadcastAt for successfully sent tokens
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

  // Clean up invalid tokens
  if (invalidTokens.length > 0) {
    const cleanBatch = db.batch()
    invalidTokens.forEach(token => {
      cleanBatch.delete(db.collection('push_subscribers').doc(token))
    })
    await cleanBatch.commit().catch(() => {})
  }

  return NextResponse.json({
    sent: totalSent,
    skipped,
    failed: totalFailed,
    cleaned: invalidTokens.length,
    campaign: campaign.title,
  })
}
