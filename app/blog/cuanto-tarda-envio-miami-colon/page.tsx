import Link from 'next/link'

export const metadata = {
  title: '¿Cuánto tarda un envío de Miami a Colón? | MBE Colón',
  description:
    'Tiempos reales del casillero Miami en MBE Colón: aéreo express 24-72 horas, aéreo estándar 3-7 días y marítimo 7-15 días hábiles. Qué afecta la entrega.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/cuanto-tarda-envio-miami-colon',
  },
  openGraph: {
    title: '¿Cuánto tarda un envío de Miami a Colón, Panamá?',
    description:
      'Aéreo express 24-72 horas, aéreo estándar 3-7 días y marítimo 7-15 días hábiles. Tiempos reales de tu casillero en MBE Colón.',
    url: 'https://mbecolon.com/blog/cuanto-tarda-envio-miami-colon',
    images: [
      {
        url: 'https://mbecolon.com/og-image.png',
        width: 1200,
        height: 630,
        alt: '¿Cuánto tarda un envío de Miami a Colón, Panamá? — MBE Colón',
        type: 'image/png',
      },
    ],
  },
}

const BASE_URL = 'https://mbecolon.com'
const SLUG = 'cuanto-tarda-envio-miami-colon'
const IMG = 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=630&fit=crop&q=80'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '¿Cuánto tarda un envío de Miami a Colón, Panamá?',
  description:
    'Tiempos reales de tu casillero Miami: aéreo express 24-72 horas, estándar 3-7 días y marítimo 7-15 días hábiles. Qué factores afectan la entrega.',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Cuánto tarda un envío de Miami a Colón', item: `${BASE_URL}/blog/${SLUG}` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto tarda el envío aéreo de Miami a Colón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El envío aéreo express tarda entre 24 y 72 horas, y el estándar de 3 a 7 días hábiles, contando desde que tu paquete llega a nuestra bodega en Miami.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda el envío marítimo de Miami a Colón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El envío marítimo tarda entre 7 y 15 días hábiles, dependiendo del calendario de navegación. Es la opción más económica para cargas grandes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El tiempo cuenta desde que compro en la tienda o desde que llega a Miami?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desde que el paquete llega a nuestra bodega en Miami. El tiempo de la tienda a Miami es responsabilidad del vendedor; en MBE Colón te notificamos por WhatsApp apenas lo recibimos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué puede retrasar mi envío?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los retrasos más comunes son días feriados en USA o Panamá, paquetes con documentación aduanera incompleta, artículos restringidos y condiciones climáticas. Te mantenemos informado por WhatsApp en cada etapa.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo dar seguimiento a mi paquete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Te enviamos el código de rastreo por WhatsApp y puedes ver el estado de tu paquete en tiempo real en cada etapa del proceso.',
      },
    },
  ],
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-14">

        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-mbe-red transition-colors">Inicio</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-mbe-red transition-colors">Blog</Link>
          <span>›</span>
          <span className="text-mbe-dark font-medium">Cuánto tarda un envío de Miami a Colón</span>
        </nav>

        <span className="bg-mbe-blue text-white text-xs font-bold px-3 py-1 rounded-full">Casillero · Tiempos</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          ¿Cuánto tarda un envío de Miami a Colón, Panamá?
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">Equipo de Logística de MBE Colón</strong> · Actualizado agosto 2026
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            La respuesta corta: el envío <strong>aéreo express de Miami a Colón tarda 24-72 horas</strong>, el <strong>aéreo estándar de 3 a 7 días hábiles</strong> y el <strong>marítimo de 7 a 15 días hábiles</strong>. El tiempo se cuenta desde que tu paquete llega a nuestra bodega en Miami, no desde que compras en la tienda. A continuación te explicamos cada opción y qué puede acelerar o retrasar tu entrega.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 border-l-4 border-mbe-blue">
            <p className="font-bold text-mbe-dark mb-2">💡 En resumen</p>
            <p className="text-gray-600 text-sm">
              Aéreo express: 24-72 h. Aéreo estándar: 3-7 días. Marítimo: 7-15 días. Te avisamos por WhatsApp cuando tu paquete llega a Miami y en cada etapa del viaje.
            </p>
          </div>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Tiempos de entrega según el tipo de envío</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-mbe-dark text-white">
                  <th className="px-4 py-3 font-bold">Tipo de envío</th>
                  <th className="px-4 py-3 font-bold">Tiempo</th>
                  <th className="px-4 py-3 font-bold">Precio</th>
                  <th className="px-4 py-3 font-bold">Ideal para</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                <tr>
                  <td className="px-4 py-3 font-semibold text-mbe-dark">✈️ Aéreo Express</td>
                  <td className="px-4 py-3 text-mbe-red font-bold">24–72 horas</td>
                  <td className="px-4 py-3 text-mbe-gray">desde $3.00/lb</td>
                  <td className="px-4 py-3 text-mbe-gray">Lo urgente: medicinas, repuestos, documentos</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-mbe-dark">✈️ Aéreo Estándar</td>
                  <td className="px-4 py-3 text-mbe-red font-bold">3–7 días hábiles</td>
                  <td className="px-4 py-3 text-mbe-gray">desde $3.00/lb</td>
                  <td className="px-4 py-3 text-mbe-gray">Ropa, calzado, electrónica</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-mbe-dark">🚢 Marítimo</td>
                  <td className="px-4 py-3 text-mbe-red font-bold">7–15 días hábiles</td>
                  <td className="px-4 py-3 text-mbe-gray">desde $3.00/ft³</td>
                  <td className="px-4 py-3 text-mbe-gray">Muebles, electrodomésticos, cargas grandes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-mbe-dark text-xl font-black mt-8">El tiempo se cuenta desde que llega a Miami</h2>
          <p>
            Cuando compras en Amazon, Shein o eBay, primero el vendedor envía tu paquete a la <strong>dirección Miami</strong> de tu casillero. Ese primer tramo puede tomar de 1 a 5 días hábiles según la tienda. Apenas tu paquete llega a nuestra bodega, <strong>te notificamos por WhatsApp</strong>. Desde ese momento empiezan a contar las 24-72 horas del express o los 3-7 días del estándar.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Qué puede retrasar mi envío a Colón?</h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Días feriados</strong> en Panamá o en Estados Unidos.</li>
            <li><strong>Documentación aduanera incompleta</strong> o declaraciones de valor pendientes.</li>
            <li><strong>Artículos restringidos</strong> (líquidos, baterías de litio, aerosoles) que requieren revisión adicional.</li>
            <li><strong>Condiciones climáticas</strong> o cierres de puertos y aeropuertos.</li>
          </ul>
          <p>
            En MBE Colón gestionamos toda la <strong>documentación aduanal</strong> para que tu paquete no se quede retenido. Y si algo se retrasa, no te enteras solo: te avisamos por WhatsApp en cada etapa.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Consejos para que tu envío llegue más rápido</h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Elige aéreo express</strong> para lo urgente: 24-72 horas desde Miami.</li>
            <li><strong>Verifica el peso estimado</strong> antes de comprar para evitar sorpresas con el flete.</li>
            <li><strong>Consolida tus paquetes</strong>: reunimos tus compras de varias tiendas y las enviamos juntas para ahorrarte flete.</li>
            <li><strong>Evita feriados</strong>: los envíos en diciembre y antes de Semana Santa suelen tardar más por la demanda.</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Preguntas frecuentes sobre tiempos de entrega</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg p-5 shadow-sm group border border-gray-200">
              <summary className="cursor-pointer font-bold text-mbe-dark flex justify-between items-center">
                ¿Cuánto tarda el envío aéreo de Miami a Colón?<span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm">Express: 24-72 horas. Estándar: 3-7 días hábiles, desde que el paquete llega a nuestra bodega en Miami.</p>
            </details>
            <details className="bg-white rounded-lg p-5 shadow-sm group border border-gray-200">
              <summary className="cursor-pointer font-bold text-mbe-dark flex justify-between items-center">
                ¿Cuánto tarda el envío marítimo de Miami a Colón?<span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm">Entre 7 y 15 días hábiles, dependiendo del calendario de navegación. Es la opción más económica para cargas grandes.</p>
            </details>
            <details className="bg-white rounded-lg p-5 shadow-sm group border border-gray-200">
              <summary className="cursor-pointer font-bold text-mbe-dark flex justify-between items-center">
                ¿El tiempo cuenta desde que compro o desde que llega a Miami?<span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm">Desde que el paquete llega a nuestra bodega en Miami. El tiempo de la tienda a Miami depende del vendedor.</p>
            </details>
            <details className="bg-white rounded-lg p-5 shadow-sm group border border-gray-200">
              <summary className="cursor-pointer font-bold text-mbe-dark flex justify-between items-center">
                ¿Puedo dar seguimiento a mi paquete?<span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm">Sí. Te enviamos el código de rastreo por WhatsApp y puedes ver el estado de tu paquete en tiempo real.</p>
            </details>
          </div>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Sigue leyendo</h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><Link href="/blog/cuanto-cuesta-casillero-miami-envio-colon" className="text-mbe-red font-semibold hover:underline">¿Cuánto cuesta el casillero Miami y traer un paquete a Colón?</Link></li>
            <li><Link href="/servicios/casillero" className="text-mbe-red font-semibold hover:underline">Activa tu casillero Miami gratis</Link></li>
            <li><Link href="/tarifas" className="text-mbe-red font-semibold hover:underline">Ver tarifas de casillero y envíos</Link></li>
          </ul>

          <div className="bg-mbe-dark rounded-2xl p-8 text-center mt-8">
            <h3 className="text-white font-black text-xl mb-2">¿Cuándo quieres recibir tu paquete?</h3>
            <p className="text-gray-400 text-sm mb-6">Escríbenos por WhatsApp, te indicamos la opción de envío más rápida y el precio final. Estamos en Plaza Millenium F007, Colón.</p>
            <a
              href="https://wa.me/50769495100"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-mbe-red text-white font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              💬 Consultar mi envío →
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="text-mbe-red text-sm font-bold hover:underline">← Volver al blog</Link>
        </div>

      </article>
    </>
  )
}