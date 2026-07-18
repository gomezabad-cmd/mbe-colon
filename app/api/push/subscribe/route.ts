import { NextRequest, NextResponse } from 'next/server'
import { getAdminFirestore } from '@/lib/firebase-admin'

export async function POST(request: NextRequest) {
  const { token } = await request.json()

  if (!token || typeof token !== 'string') {
    return NextResponse.json({ error: 'Token inválido' }, { status: 400 })
  }

  const db = getAdminFirestore()
  await db
    .collection('push_subscribers')
    .doc(token)
    .set({ token, updatedAt: Date.now() }, { merge: true })

  return NextResponse.json({ ok: true })
}
