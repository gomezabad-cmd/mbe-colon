import { NextRequest, NextResponse } from 'next/server'
import { getAdminFirestore, getAdminMessaging } from '@/lib/firebase-admin'
import { getCampaignForWeek, getCampaignByIndex } from '@/lib/push-campaigns'

const BROADCAST_SECRET = process.env.BROADCAST_SECRET
const FCM_BATCH_SIZE = 500

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (!BROADCAST_SECRET || authHeader !== `Bearer ${BROADCAST_SECRET}`) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const body = await request.json().catch(() => ({}))
  const campaignIndex = typeof body.campaignIndex === 'number' ? body.campaignIndex : undefined
  const campaign = campaignIndex !== undefined
    ? getCampaignByIndex(campaignIndex)
    : getCampaignForWeek()

  const db = getAdminFirestore()
  const snapshot = await db.collection('push_subscribers').get()

  if (snapshot.empty) {
    return NextResponse.json({ sent: 0, message: 'Sin suscriptores' })
  }

  const tokens: string[] = snapshot.docs.map(doc => doc.data().token as string).filter(Boolean)

  // FCM multicast en batches de 500
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

    // Collect invalid tokens for cleanup
    response.responses.forEach((res, idx) => {
      if (!res.success && res.error?.code === 'messaging/registration-token-not-registered') {
        invalidTokens.push(batch[idx])
      }
    })
  }

  // Clean up invalid tokens in background
  if (invalidTokens.length > 0) {
    const dbBatch = db.batch()
    invalidTokens.forEach(token => {
      dbBatch.delete(db.collection('push_subscribers').doc(token))
    })
    await dbBatch.commit().catch(() => {})
  }

  return NextResponse.json({
    sent: totalSent,
    failed: totalFailed,
    cleaned: invalidTokens.length,
    campaign: campaign.title,
  })
}
