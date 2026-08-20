import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { CONTACT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Comprar por Internet desde Colón en 2026 | Guía MBE Colón',
  description:
    'Guía paso a paso para comprar por internet desde Panamá: casillero Miami gratis, compras en Amazon, Shein y eBay, tarifas aéreas y marítimas desde Colón.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/como-comprar-por-internet-desde-colon-panama',
  },
  openGraph: {
    title: 'Cómo comprar por internet desde Colón, Panamá en 2026 | MBE Colón',
    description:
      'Aprende a comprar en Amazon, Shein y eBay y recibir tus paquetes en Colón con tu casillero Miami gratis. Tarifas, tiempos y tips de ahorro.',
    url: 'https://mbecolon.com/blog/como-comprar-por-internet-desde-colon-panama',
    images: [
      {
        url: 'https://mbecolon.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cómo comprar por internet desde Colón, Panamá — Guía MBE Colón',
        type: 'image/png',
      },
    ],
  },
}

const BASE_URL = 'https://mbecolon.com'
const SLUG = 'como-comprar-por-internet-desde-colon-panama'
const IMG = 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=630&fit=crop&q=80'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Cómo comprar por internet desde Colón, Panamá en 2026: guía completa',
  description:
    'Guía paso a paso para comprar por internet en Panamá: casillero Miami gratis, compras en Amazon, Shein y eBay, tarifas aéreas y marítimas desde Colón.',
  datePublished: '2026-08-20',
  dateModified: '2026-08-20',
  author: {
    '@type': 'Person',
    name: 'Equipo de Logística de MBE Colón',
    jobTitle: 'Servicio de logística y envíos',
    worksFor: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/${SLUG}`,
  image: IMG,
  mainEntityOfPage: `${BASE_URL}/blog/${SLUG}`,
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo comprar por internet desde Colón, Panamá',
  description:
    'Pasos para comprar en tiendas de USA y recibir tus paquetes en Colón, Panamá usando el casillero Miami de MBE Colón.',
  totalTime: 'PT24H',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Abre tu casillero Miami gratis', text: 'Regístrate en MBE Colón para recibir tu dirección personal en Miami, Florida. No tiene costo ni mensualidad.' },
    { '@type': 'HowToStep', position: 2, name: 'Usa tu dirección Miami al comprar', text: 'En Amazon, Shein, eBay o cualquier tienda de USA, usa tu dirección Miami como destino de envío.' },
    { '@type': 'HowToStep', position: 3, name: 'Consolida tus paquetes', text: 'Si compras en varias tiendas, consolidamos tus paquetes en un solo envío para ahorrar flete.' },
    { '@type': 'HowToStep', position: 4, name: 'Elige aéreo o marítimo', text: 'Aéreo desde $3.00/lb para entrega rápida, o marítimo desde $3.00/ft³ para ahorrar en cargas grandes.' },
    { '@type': 'HowToStep', position: 5, name: 'Recibe en Colón', text: 'Te avisamos por WhatsApp cuando llega y lo retiras en Plaza Millenium F007 o coordinamos entrega.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo comprar por internet en Panamá?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para comprar por internet en Panamá necesitas una dirección de envío en USA que acepten las tiendas. Con el casillero Miami de MBE Colón obtienes esa dirección gratis: compras en Amazon, Shein, eBay y cientos de tiendas más, y nosotros llevamos tu paquete hasta Colón.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta traer un paquete de USA a Colón, Panamá?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El envío aéreo cuesta desde $3.00 por libra y el marítimo desde $3.00 por pie cúbico. Los trámites aduanales están incluidos y el costo final depende del peso, volumen y destino.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El casillero Miami de MBE Colón es gratis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La activación es gratis, sin cuota mensual ni comisión. Solo pagas el flete cuando decides traer tus paquetes a Colón.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda en llegar un paquete de Miami a Colón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aéreo express: 24-72 horas. Aéreo estándar: 3-7 días hábiles. Marítimo: 7-15 días hábiles. Te notificamos por WhatsApp en cada etapa.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo comprar en Shein y Temu desde Panamá?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Con tu dirección Miami puedes comprar en Shein, Temu, AliExpress, Amazon, eBay y cualquier tienda que envíe a USA. Consolidamos todos tus pedidos en un solo envío a Colón.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué hago si no tengo tarjeta de crédito americana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puedes usar tu tarjeta de débito o crédito local en la mayoría de tiendas que aceptan pagos internacionales. Si tienes dudas, en MBE Colón te asesoramos para completar tu compra sin problemas.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Cómo comprar por internet desde Colón', item: `${BASE_URL}/blog/${SLUG}` },
  ],
}

const stores = ['Amazon', 'eBay', 'Shein', 'Temu', 'AliExpress', 'IKEA', 'Nike', 'Sephora', 'Target', 'Walmart', 'Best Buy', 'Fashion Nova']

export default function HubPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="pt-[88px]">
        <article className="max-w-3xl mx-auto px-4 py-14">
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-mbe-red transition-colors">Inicio</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-mbe-red transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-mbe-dark font-medium">Compras por internet</span>
          </nav>

          <span className="bg-mbe-blue text-white text-xs font-bold px-3 py-1 rounded-full">Casillero · Compras USA</span>

          <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
            Cómo comprar por internet desde Colón, Panamá en 2026: guía completa
          </h1>

          <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
            Por <strong className="text-mbe-dark">Equipo de Logística de MBE Colón</strong> · Actualizado agosto 2026
          </p>

          <div className="space-y-6 text-mbe-gray leading-relaxed">
            <p>
              Comprar por internet desde <strong>Colón, Panamá</strong> es más fácil de lo que parece. La mayoría de las tiendas online de USA (Amazon, Shein, eBay, Temu y cientos más) no envían directamente a Panamá. La solución es un <strong>casillero Miami</strong>: una dirección física en Estados Unidos que recibes gratis y desde donde llevamos tus compras hasta Colón.
            </p>

            <div className="bg-mbe-light rounded-2xl p-6 border-l-4 border-mbe-red">
              <p className="font-bold text-mbe-dark mb-2">💡 En resumen</p>
              <p className="text-gray-600 text-sm">
                Abre tu casillero gratis → compra en cualquier tienda de USA con tu dirección Miami → consolidamos tus paquetes → eliges aéreo o marítimo → recibes en Colón en 24-72 h (aéreo express). Así de simple.
              </p>
            </div>

            <h2 className="text-mbe-dark text-xl font-black mt-8">Paso 1: Abre tu casillero Miami gratis</h2>
            <p>
              En MBE Colón la activación de tu casillero es <strong>100% gratis</strong>, sin cuota mensual ni comisión. Al registrarte recibes una dirección personal en Miami, Florida, que puedes usar como dirección de envío en cualquier tienda online de USA. Solo pagas por el flete cuando decides traer tus paquetes a Colón.
            </p>

            <h2 className="text-mbe-dark text-xl font-black mt-8">Paso 2: Compra con tu dirección Miami</h2>
            <p>
              Al pagar en Amazon, Shein, eBay o cualquier tienda de USA, usa tu dirección Miami como destino de envío. El paquete llega a nuestra bodega y te notificamos por WhatsApp al instante. Puedes comprar en varias tiendas; no hay límite de paquetes al mes.
            </p>

            <div className="bg-mbe-light rounded-2xl p-6">
              <p className="font-bold text-mbe-dark mb-3">Tiendas donde puedes comprar desde Colón:</p>
              <div className="flex flex-wrap gap-2">
                {stores.map((s) => (
                  <span key={s} className="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-mbe-gray">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="text-mbe-dark text-xl font-black mt-8">Paso 3: Consolida tus paquetes y ahorra</h2>
            <p>
              ¿Compraste 3 paquetes en tiendas distintas? Los <strong>consolidamos en un solo envío</strong>. Re-embalamos profesionalmente y enviamos todo junto a Colón. En promedio, consolidar 3-5 paquetes pequeños ahorra entre 30% y 40% del flete frente a enviarlos por separado.
            </p>

            <h2 className="text-mbe-dark text-xl font-black mt-8">Paso 4: Elige aéreo o marítimo</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-mbe-dark text-white">
                    <th className="px-4 py-3 font-bold">Tipo de envío</th>
                    <th className="px-4 py-3 font-bold">Precio</th>
                    <th className="px-4 py-3 font-bold">Tiempo</th>
                    <th className="px-4 py-3 font-bold">Ideal para</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-mbe-dark">✈️ Aéreo Express</td>
                    <td className="px-4 py-3 text-mbe-red font-bold">desde $3.00/lb</td>
                    <td className="px-4 py-3 text-mbe-gray">24–72 horas</td>
                    <td className="px-4 py-3 text-mbe-gray">Ropa, electrónica, repuestos</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-mbe-dark">🚢 Marítimo</td>
                    <td className="px-4 py-3 text-mbe-red font-bold">desde $3.00/ft³</td>
                    <td className="px-4 py-3 text-mbe-gray">7–15 días hábiles</td>
                    <td className="px-4 py-3 text-mbe-gray">Muebles, cargas grandes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400">
              * Precios de referencia; la cotización exacta depende del peso, volumen y destino. Trámites aduanales incluidos en el flete.
            </p>

            <h2 className="text-mbe-dark text-xl font-black mt-8">Paso 5: Recibe en Colón</h2>
            <p>
              Cuando tu envío llega, te avisamos por WhatsApp con el código de rastreo. Retiras en <strong>Plaza Millenium Local F007, Colón</strong> o coordinamos entrega. El personal te asesora en cada paso: somos la franquicia MBE con más de 18 años en la provincia de Colón.
            </p>

            <div className="bg-mbe-light rounded-2xl p-6 border-l-4 border-mbe-blue">
              <p className="font-bold text-mbe-dark mb-2">🛒 ¿Necesitas ayuda para comprar?</p>
              <p className="text-gray-600 text-sm">
                Si no tienes tarjeta o prefieres no comprar tú mismo, te ayudamos con el servicio de compras por internet: cotizamos el producto, lo compramos por ti y te lo entregamos en Colón.
              </p>
            </div>

            <h2 className="text-mbe-dark text-xl font-black mt-8">Consejos para ahorrar en tus compras USA–Panamá</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>Consolida:</strong> junta varios pedidos en un solo envío para pagar un solo flete.</li>
              <li><strong>Aprovecha fechas clave:</strong> Black Friday, Cyber Monday y Prime Day suelen tener mejores precios; planifica tus envíos.</li>
              <li><strong>Verifica el peso estimado</strong> del producto antes de comprar para calcular el flete.</li>
              <li><strong>Elige marítimo</strong> para muebles y cargas grandes; aéreo para lo urgente.</li>
            </ul>

            <h2 className="text-mbe-dark text-xl font-black mt-8">Sigue leyendo</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><Link href="/blog/casillero-miami-shein-ebay-colon" className="text-mbe-red font-semibold hover:underline">Cómo comprar en Shein y eBay desde Colón</Link> — paso a paso para las tiendas más usadas.</li>
              <li><Link href="/servicios/casillero" className="text-mbe-red font-semibold hover:underline">Tu casillero Miami gratis en MBE Colón</Link> — dirección en USA, notificación por WhatsApp y retiro en Colón.</li>
              <li><Link href="/tarifas" className="text-mbe-red font-semibold hover:underline">Tarifas de casillero y envíos desde Colón</Link> — precios de referencia aéreo y marítimo.</li>
            </ul>

            <div className="bg-mbe-dark rounded-2xl p-8 text-center mt-8">
              <h3 className="text-white font-black text-xl mb-2">Abre tu casillero Miami hoy mismo</h3>
              <p className="text-gray-400 text-sm mb-6">Es gratis y toma 5 minutos. Visítanos en Plaza Millenium F007, Colón, o escríbenos ahora.</p>
              <a
                href={`${CONTACT.whatsappHref}?text=${encodeURIComponent('Hola, quiero abrir mi casillero Miami gratis en MBE Colón.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-mbe-red text-white font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                💬 Abrir casillero gratis →
              </a>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/blog" className="text-mbe-red text-sm font-bold hover:underline">← Volver al blog</Link>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}