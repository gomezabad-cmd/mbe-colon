import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { CONTACT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Tarifas de Casillero Miami y Envíos desde Colón | MBE Colón',
  description:
    'Tarifas de casillero Miami y envíos desde Colón: aéreo desde $3.00/lb, marítimo desde $3.00/ft³, sellos desde $8.00, bordados desde $3.75. Cotiza por WhatsApp.',
  alternates: {
    canonical: 'https://mbecolon.com/tarifas',
  },
  openGraph: {
    title: 'Tarifas de Casillero Miami y Envíos desde Colón | MBE Colón',
    description:
      'Precios de referencia de casillero Miami, envíos aéreos y marítimos, sellos, bordados e impresión en Colón, Panamá. Cotización exacta por WhatsApp.',
    url: 'https://mbecolon.com/tarifas',
    images: [
      {
        url: 'https://mbecolon.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tarifas de casillero Miami y envíos desde Colón, Panamá — MBE Colón',
        type: 'image/png',
      },
    ],
  },
}

const BASE_URL = 'https://mbecolon.com'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Tarifas', item: `${BASE_URL}/tarifas` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta traer un paquete de USA a Colón, Panamá?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Con el casillero Miami de MBE Colón, el envío aéreo cuesta desde $3.00 por libra y el marítimo desde $3.00 por pie cúbico. La tarifa final depende del peso, el volumen y el tipo de contenido.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El casillero Miami tiene cuota mensual?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Abrir tu casillero Miami en MBE Colón es completamente gratis, sin cuota mensual ni comisión de activación. Solo pagas por el flete cuando traes tus paquetes a Colón.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un sello automático en Colón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los sellos de goma cuestan desde $8.00 y los sellos automáticos Trodat o Colop desde $15.00, según tamaño y diseño. Incluyen tinta y entrega en 24-48 horas hábiles.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta bordar un logo en una prenda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El bordado de un polo con logo comienza desde $3.75 por pieza según cantidad y complejidad del diseño. La digitalización del logotipo está incluida.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda un envío aéreo de Miami a Colón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El envío aéreo express tarda entre 24 y 72 horas, y el estándar de 3 a 7 días hábiles desde que el paquete llega a nuestra bodega en Miami. El marítimo tarda de 7 a 15 días hábiles.',
      },
    },
  ],
}

export default function TarifasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="pt-[88px]">
        {/* Hero */}
        <section className="bg-mbe-dark py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-sm text-gray-400 mb-6 flex items-center justify-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>›</span>
              <span className="text-gray-300">Tarifas</span>
            </nav>
            <h1 className="text-white text-4xl md:text-5xl font-black mb-4">
              Tarifas de envíos y casillero <span className="text-mbe-red">desde Colón</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Precios de referencia de casillero Miami, envíos aéreos y marítimos, sellos, bordados e impresión. La cotización exacta la confirmas por WhatsApp en minutos.
            </p>
          </div>
        </section>

        {/* Cómo se calcula */}
        <section className="bg-white py-14 px-4">
          <div className="max-w-4xl mx-auto space-y-5 text-mbe-gray leading-relaxed">
            <h2 className="text-mbe-dark text-2xl md:text-3xl font-black text-center mb-6">¿Cómo funcionan nuestras tarifas?</h2>
            <p>
              En MBE Colón la tarifa del <strong className="text-mbe-dark">casillero Miami</strong> se calcula según el peso real (aéreo) o el volumen en pies cúbicos (marítimo). El trámite aduanero está incluido en el flete: tú solo pagas el envío, sin comisiones ocultas ni cargos por activación. Abrir tu <Link href="/servicios/casillero" className="text-mbe-red font-semibold hover:underline">casillero</Link> es 100% gratis y no tiene cuota mensual.
            </p>
            <p>
              Para <strong className="text-mbe-dark">envíos internacionales</strong> con DHL, FedEx y UPS la tarifa es a medida, según peso, dimensiones y destino. Te entregamos la cotización final en minutos por WhatsApp y la confirmas antes de que enviemos. En <strong className="text-mbe-dark">sellos, bordados e impresión</strong> los precios varían según modelo, cantidad y diseño; por eso publicamos un precio de referencia y confirmamos el total exacto según tu pedido.
            </p>
            <p>
              Si mueves volúmenes altos, pregunta por <strong className="text-mbe-dark">tarifas preferenciales para empresas</strong> y comercios de la Zona Libre de Colón. Todas nuestras tarifas incluyen asesoría personalizada: te explicamos el costo antes de comprometerte con cualquier trámite.
            </p>
          </div>
        </section>

        {/* Tabla de tarifas */}
        <section className="bg-mbe-light py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-mbe-dark text-2xl md:text-3xl font-black mb-8 text-center">Precios de referencia</h2>

            <div className="overflow-x-auto rounded-2xl shadow-md">
              <table className="w-full text-left text-sm bg-white">
                <thead>
                  <tr className="bg-mbe-red text-white">
                    <th className="px-4 py-3 font-bold">Servicio</th>
                    <th className="px-4 py-3 font-bold">Tipo</th>
                    <th className="px-4 py-3 font-bold">Precio</th>
                    <th className="px-4 py-3 font-bold">Tiempo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-4 font-semibold text-mbe-dark">Casillero Miami — Aéreo</td>
                    <td className="px-4 py-4 text-mbe-gray">Por libra (peso real)</td>
                    <td className="px-4 py-4 text-mbe-red font-bold">desde $3.00/lb</td>
                    <td className="px-4 py-4 text-mbe-gray">24–72 h (express) · 3–7 días hábiles</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold text-mbe-dark">Casillero Miami — Marítimo</td>
                    <td className="px-4 py-4 text-mbe-gray">Por pie cúbico</td>
                    <td className="px-4 py-4 text-mbe-red font-bold">desde $3.00/ft³</td>
                    <td className="px-4 py-4 text-mbe-gray">7–15 días hábiles</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold text-mbe-dark">Carga marítima (volumen alto)</td>
                    <td className="px-4 py-4 text-mbe-gray">Consolidación / contenedor</td>
                    <td className="px-4 py-4 text-mbe-red font-bold">hasta $10.00/ft³</td>
                    <td className="px-4 py-4 text-mbe-gray">Según ruta y volumen</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold text-mbe-dark">Envíos internacionales (DHL, FedEx, UPS)</td>
                    <td className="px-4 py-4 text-mbe-gray">Cotización por peso y destino</td>
                    <td className="px-4 py-4 text-mbe-red font-bold">a medida</td>
                    <td className="px-4 py-4 text-mbe-gray">USA 2–5 días · Europa 7–15 días</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold text-mbe-dark">Sellos de goma</td>
                    <td className="px-4 py-4 text-mbe-gray">Personalizados</td>
                    <td className="px-4 py-4 text-mbe-red font-bold">desde $8.00</td>
                    <td className="px-4 py-4 text-mbe-gray">24–48 h hábiles</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold text-mbe-dark">Sellos automáticos (Trodat, Colop)</td>
                    <td className="px-4 py-4 text-mbe-gray">Bolsillo y mesa</td>
                    <td className="px-4 py-4 text-mbe-red font-bold">desde $15.00</td>
                    <td className="px-4 py-4 text-mbe-gray">24–48 h hábiles</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold text-mbe-dark">Bordados personalizados</td>
                    <td className="px-4 py-4 text-mbe-gray">Por prenda y diseño</td>
                    <td className="px-4 py-4 text-mbe-red font-bold">desde $3.75</td>
                    <td className="px-4 py-4 text-mbe-gray">5–10 días hábiles</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold text-mbe-dark">Impresión (tarjetas, brochures, banners)</td>
                    <td className="px-4 py-4 text-mbe-gray">Según formato y cantidad</td>
                    <td className="px-4 py-4 text-mbe-red font-bold">a medida</td>
                    <td className="px-4 py-4 text-mbe-gray">Mismo día · 24–48 h</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center max-w-2xl mx-auto">
              * Precios de referencia de mercado. La cotización exacta depende del peso, volumen, destino y especificaciones de cada pedido. Los trámites aduanales están incluidos en el flete de casillero. Confirma tu tarifa final por WhatsApp.
            </p>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-mbe-light rounded-2xl p-6">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="font-bold text-mbe-dark mb-2">Casillero gratis</h3>
              <p className="text-mbe-gray text-sm">Abrir tu dirección en Miami no cuesta nada. Sin mensualidad ni comisión.</p>
            </div>
            <div className="bg-mbe-light rounded-2xl p-6">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="font-bold text-mbe-dark mb-2">Tracking en tiempo real</h3>
              <p className="text-mbe-gray text-sm">Sigue tu paquete en cada etapa y recibe notificaciones por WhatsApp.</p>
            </div>
            <div className="bg-mbe-light rounded-2xl p-6">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-mbe-dark mb-2">Trámites aduanales incluidos</h3>
              <p className="text-mbe-gray text-sm">Nos encargamos de la documentación para que no tengas complicaciones.</p>
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes sobre tarifas */}
        <section className="bg-mbe-light py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-mbe-dark text-2xl md:text-3xl font-black mb-8 text-center">Preguntas frecuentes sobre tarifas</h2>
            <div className="space-y-4">
              <details className="bg-white rounded-lg p-6 shadow-sm group">
                <summary className="cursor-pointer font-bold text-mbe-dark text-lg flex justify-between items-center">
                  ¿Cuánto cuesta traer un paquete de USA a Colón, Panamá?
                  <span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-mbe-gray mt-4 leading-relaxed">Con el casillero Miami de MBE Colón, el envío aéreo cuesta desde $3.00 por libra y el marítimo desde $3.00 por pie cúbico. La tarifa final depende del peso, el volumen y el tipo de contenido.</p>
              </details>
              <details className="bg-white rounded-lg p-6 shadow-sm group">
                <summary className="cursor-pointer font-bold text-mbe-dark text-lg flex justify-between items-center">
                  ¿El casillero Miami tiene cuota mensual?
                  <span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-mbe-gray mt-4 leading-relaxed">No. Abrir tu casillero Miami en MBE Colón es completamente gratis, sin cuota mensual ni comisión de activación. Solo pagas por el flete cuando traes tus paquetes a Colón.</p>
              </details>
              <details className="bg-white rounded-lg p-6 shadow-sm group">
                <summary className="cursor-pointer font-bold text-mbe-dark text-lg flex justify-between items-center">
                  ¿Cuánto cuesta un sello automático en Colón?
                  <span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-mbe-gray mt-4 leading-relaxed">Los sellos de goma cuestan desde $8.00 y los sellos automáticos Trodat o Colop desde $15.00, según tamaño y diseño. Incluyen tinta y entrega en 24-48 horas hábiles.</p>
              </details>
              <details className="bg-white rounded-lg p-6 shadow-sm group">
                <summary className="cursor-pointer font-bold text-mbe-dark text-lg flex justify-between items-center">
                  ¿Cuánto cuesta bordar un logo en una prenda?
                  <span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-mbe-gray mt-4 leading-relaxed">El bordado de un polo con logo comienza desde $3.75 por pieza según cantidad y complejidad del diseño. La digitalización del logotipo está incluida.</p>
              </details>
              <details className="bg-white rounded-lg p-6 shadow-sm group">
                <summary className="cursor-pointer font-bold text-mbe-dark text-lg flex justify-between items-center">
                  ¿Cuánto tarda un envío aéreo de Miami a Colón?
                  <span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-mbe-gray mt-4 leading-relaxed">El envío aéreo express tarda entre 24 y 72 horas, y el estándar de 3 a 7 días hábiles desde que el paquete llega a nuestra bodega en Miami. El marítimo tarda de 7 a 15 días hábiles.</p>
              </details>
            </div>
            <p className="text-sm text-gray-500 mt-8 text-center">
              ¿Compras online y quieres saber qué impuestos pagar? Lee <Link href="/blog/cuanto-se-paga-impuesto-comprar-internet-panama" className="text-mbe-red font-semibold hover:underline">cuánto se paga de impuesto al comprar por internet en Panamá</Link> o consulta la <Link href="/blog/como-comprar-por-internet-desde-colon-panama" className="text-mbe-red font-semibold hover:underline">guía completa para comprar desde Colón</Link>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-mbe-red py-16 px-4 text-center">
          <h2 className="text-white text-3xl font-black mb-4">¿Listo para tu cotización exacta?</h2>
          <p className="text-white opacity-90 mb-8">Escríbenos por WhatsApp y en minutos tienes tu precio final. Estamos en Plaza Millenium F007, Colón.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-mbe-red font-black px-8 py-4 rounded-lg hover:bg-yellow-50 transition-colors"
            >
              💬 Cotizar por WhatsApp
            </a>
            <Link href="/contacto" className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-mbe-red transition-colors">
              Ver contacto
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}