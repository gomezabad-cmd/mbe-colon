import { NextRequest, NextResponse } from 'next/server'
import { getAdminFirestore, getAdminMessaging } from '@/lib/firebase-admin'
import { getCampaignForWeek } from '@/lib/push-campaigns'

const FCM_BATCH_SIZE = 500

// Called by Vercel Cron — authenticated via CRON_SECRET header injected by Vercel
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const campaign = getCampaignForWeek()

  const db = getAdminFirestore()
  const snapshot = await db.collection('push_subscribers').get()

  if (snapshot.empty) {
    return NextResponse.json({ sent: 0 })
  }

  const tokens: string[] = snapshot.docs.map(doc => doc.data().token as string).filter(Boolean)

  let totalSent = 0
  let totalFailed = 0
  const invalidTokens: string[] = []

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
      if (!res.success && res.error?.code === 'messaging/registration-token-not-registered') {
        invalidTokens.push(batch[idx])
      }
    })
  }

  if (invalidTokens.length > 0) {
    const dbBatch = db.batch()
    invalidTokens.forEach(token => {
      dbBatch.delete(db.collection('push_subscribers').doc(token))
    })
    await dbBatch.commit().catch(() => {})
  }

  console.log(`[broadcast-cron] sent=${totalSent} failed=${totalFailed} cleaned=${invalidTokens.length} campaign="${campaign.title}"`)

  return NextResponse.json({ sent: totalSent, failed: totalFailed, cleaned: invalidTokens.length })
}
