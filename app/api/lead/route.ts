import { NextRequest, NextResponse } from 'next/server'
import { getAdminFirestore } from '@/lib/firebase-admin'

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
  }

  const { nombre, whatsapp, email } = body

  if (!nombre || typeof nombre !== 'string' || !nombre.trim()) {
    return NextResponse.json({ error: 'Nombre requerido' }, { status: 400 })
  }
  if ((!whatsapp || typeof whatsapp !== 'string') && (!email || typeof email !== 'string')) {
    return NextResponse.json({ error: 'WhatsApp o email requerido' }, { status: 400 })
  }

  const servicio = typeof body.servicio === 'string' ? body.servicio : 'Cotización general'

  try {
    const db = getAdminFirestore()
    await db.collection('leads').add({
      servicio,
      tipoEnvio: body.tipoEnvio ?? null,
      peso: body.peso ?? null,
      piesCubicos: body.piesCubicos ?? null,
      estimado: body.estimado ?? null,
      detalle: body.detalle ?? null,
      nombre: nombre.trim(),
      whatsapp: typeof whatsapp === 'string' ? whatsapp.trim() : '',
      email: typeof email === 'string' ? email.trim() : '',
      pagina: body.pagina ?? null,
      createdAt: new Date().toISOString(),
      createdTs: Date.now(),
      estado: 'nuevo',
    })
  } catch (err) {
    console.error('Error guardando lead en Firestore:', err)
    return NextResponse.json({ error: 'No se pudo guardar el lead' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}