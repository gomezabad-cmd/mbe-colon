import { NextRequest, NextResponse } from 'next/server'
import promos from '@/public/geo-promo/promos.json'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type City = (typeof promos.cities)[number]
type Promo = City['promo']

function findPromo(cityId: string): { cityName: string; promo: Promo } {
  if (cityId && cityId !== 'default') {
    const city = promos.cities.find((c) => c.id === cityId)
    if (city) return { cityName: city.name, promo: city.promo }
  }
  return { cityName: promos.default.name, promo: promos.default.promo }
}

function buildHtml(promo: Promo, cityName: string, email: string, channel: string): string {
  const brand = promos.brand
  const year = new Date().getFullYear()
  return `<!DOCTYPE html>
<html lang="es">
<body style="margin:0;padding:0;background:#f2f4fa;font-family:Segoe UI,Roboto,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f4fa;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0b1020;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="background:linear-gradient(135deg,#be1e2d,#8f1621);padding:28px 32px;">
            <div style="font-size:14px;color:#ffd9de;letter-spacing:2px;text-transform:uppercase;">Promoción exclusiva</div>
            <div style="font-size:26px;font-weight:800;color:#ffffff;margin-top:6px;">${brand.name}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <div style="display:inline-block;background:rgba(34,211,166,.15);border:1px solid rgba(34,211,166,.5);color:#22d3a6;font-size:13px;font-weight:700;padding:5px 12px;border-radius:999px;">📍 ${cityName}</div>
            <h1 style="color:#eef1ff;font-size:24px;margin:18px 0 10px;line-height:1.25;">${promo.title}</h1>
            <p style="color:#9aa3c7;font-size:15px;line-height:1.6;margin:0;">${promo.subtitle}</p>
            <div style="margin:24px 0;background:#161f3f;border:1px dashed #be1e2d;border-radius:12px;padding:18px;text-align:center;">
              <div style="color:#9aa3c7;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Tu código de descuento</div>
              <div style="color:#ff9aa8;font-size:28px;font-weight:800;letter-spacing:4px;margin-top:6px;">${promo.code}</div>
            </div>
            <a href="${brand.website}?utm_source=geopromo&utm_medium=email&utm_campaign=${promo.code}${channel ? '&utm_content=' + encodeURIComponent(channel) : ''}"
               style="display:block;background:linear-gradient(135deg,#be1e2d,#8f1621);color:#fff;text-align:center;text-decoration:none;font-weight:700;padding:15px 20px;border-radius:12px;font-size:16px;">
              Usar mi descuento ahora
            </a>
            ${brand.whatsapp ? `<p style="text-align:center;margin:14px 0 0;"><a href="https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hola! Vengo del correo de la promo ' + promo.code)}" style="color:#8fa3d9;font-size:13px;text-decoration:none;">💬 o escríbenos por WhatsApp</a></p>` : ''}
            <div style="margin-top:16px;background:#161f3f;border:1px solid #2a3560;border-radius:12px;padding:12px 16px;text-align:center;color:#cfe0ff;font-size:13px;line-height:1.5;">
              🚚 Despachos a todo Panamá (interior incluido)<br>
              <strong style="color:#ff9aa8;">Envío GRATIS</strong> en pedidos que lo incluyan — te lo confirmamos al cotizar.
            </div>
            <p style="color:#5f6a99;font-size:12px;margin-top:18px;line-height:1.6;">
              Enviado a ${email} porque estuviste en ${cityName}. Válido 30 días · No respondas a este correo.
              <br>Si no quieres recibir más promos, avísanos y te damos de baja.
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:#070b18;padding:16px 32px;">
            <div style="color:#5f6a99;font-size:12px;">© ${year} ${brand.name} · ${brand.website}</div>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function POST(request: NextRequest) {
  let payload: Record<string, unknown>
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'JSON inválido' }, { status: 400 })
  }

  const email = String(payload.email ?? '').trim().toLowerCase()
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'Correo inválido' }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    console.error('BREVO_API_KEY no configurada en el proyecto de Vercel')
    return NextResponse.json(
      { ok: false, error: 'El envío de correos no está disponible ahora. Escríbenos por WhatsApp.' },
      { status: 500 },
    )
  }

  // La promo se resuelve SIEMPRE en servidor; lo que mande el navegador solo elige ciudad.
  const cityId = typeof payload.cityId === 'string' ? payload.cityId : 'default'
  const { cityName, promo } = findPromo(cityId)
  const brand = promos.brand
  const utmSource = typeof payload.utmSource === 'string' ? payload.utmSource.slice(0, 40) : ''

  const body = {
    sender: { name: brand.senderName, email: brand.senderEmail },
    to: [{ email }],
    subject: promo.emailSubject,
    htmlContent: buildHtml(promo, cityName, email, utmSource),
    tags: ['geopromo', promo.code],
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', accept: 'application/json', 'api-key': apiKey },
      body: JSON.stringify(body),
    })
    const data = (await res.json().catch(() => ({}))) as { messageId?: string; message?: string }
    if (!res.ok) {
      console.error('Brevo error:', res.status, JSON.stringify(data))
      const retryable = res.status === 401 || res.status === 403
      return NextResponse.json(
        {
          ok: false,
          error: retryable
            ? 'El servicio de correo rechazó el envío temporalmente. Intenta de nuevo en unos minutos.'
            : 'No se pudo enviar el correo ahora mismo. Intenta de nuevo en unos minutos.',
          retryable,
        },
        { status: 502 },
      )
    }
    console.log('Brevo enviado:', email, promo.code, data.messageId)
    return NextResponse.json({ ok: true, messageId: data.messageId, promo: promo.code, city: cityName })
  } catch (err) {
    console.error('Fallo de red con Brevo:', err instanceof Error ? err.message : err)
    return NextResponse.json({ ok: false, error: 'No se pudo contactar el servicio de correo' }, { status: 502 })
  }
}
