import { NextRequest, NextResponse } from 'next/server'
import { getAdminFirestore, getAdminMessaging } from '@/lib/firebase-admin'
import { NOTIFICATION_COOLDOWN_MS } from '@/lib/geofence'

export async function POST(request: NextRequest) {
  const { token } = await request.json()

  if (!token || typeof token !== 'string') {
    return NextResponse.json({ error: 'Token inválido' }, { status: 400 })
  }

  const db = getAdminFirestore()
  const ref = db.collection('push_subscribers').doc(token)
  const snapshot = await ref.get()
  const lastNotifiedAt = snapshot.data()?.lastNotifiedAt ?? 0

  if (Date.now() - lastNotifiedAt < NOTIFICATION_COOLDOWN_MS) {
    return NextResponse.json({ sent: false, reason: 'cooldown' })
  }

  await getAdminMessaging().send({
    token,
    notification: {
      title: '📦 Estás cerca de MBE Colón',
      body: 'Visítanos en Plaza Millenium Local F007 — escríbenos por WhatsApp y te atendemos al instante.',
    },
    webpush: {
      fcmOptions: { link: 'https://wa.me/50769495100?text=Hola!%20Vi%20la%20notificaci%C3%B3n%20de%20MBE%20Col%C3%B3n%2C%20estoy%20cerca%20del%20local.' },
    },
  })

  await ref.set({ lastNotifiedAt: Date.now() }, { merge: true })

  return NextResponse.json({ sent: true })
}
