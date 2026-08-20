import Link from 'next/link'

export const metadata = {
  title: '¿Cuánto cuesta el casillero Miami en 2026? | MBE Colón',
  description:
    'Precios reales del casillero Miami en MBE Colón: aéreo desde $3.00/lb y marítimo desde $3.00/ft³. Ejemplos de costos y qué impuestos pagas al importar a Colón.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/cuanto-cuesta-casillero-miami-envio-colon',
  },
  openGraph: {
    title: '¿Cuánto cuesta el casillero Miami y traer un paquete a Colón en 2026?',
    description:
      'Precios del casillero Miami en MBE Colón: aéreo desde $3.00/lb y marítimo desde $3.00/ft³, con ejemplos de costos e impuestos.',
    url: 'https://mbecolon.com/blog/cuanto-cuesta-casillero-miami-envio-colon',
    images: [
      {
        url: 'https://mbecolon.com/og-image.png',
        width: 1200,
        height: 630,
        alt: '¿Cuánto cuesta el casillero Miami y el envío a Colón, Panamá? — MBE Colón',
        type: 'image/png',
      },
    ],
  },
}

const BASE_URL = 'https://mbecolon.com'
const SLUG = 'cuanto-cuesta-casillero-miami-envio-colon'
const IMG = 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=630&fit=crop&q=80'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '¿Cuánto cuesta el casillero Miami y traer un paquete a Colón en 2026?',
  description:
    'Precios reales del casillero Miami en MBE Colón: aéreo desde $3.00 por libra y marítimo desde $3.00 por pie cúbico, con ejemplos de costos e impuestos.',
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
    { '@type': 'ListItem', position: 3, name: 'Cuánto cuesta el casillero Miami', item: `${BASE_URL}/blog/${SLUG}` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿El casillero Miami de MBE Colón es gratis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Abrir tu casillero Miami es 100% gratis, sin cuota mensual ni comisión de activación. Solo pagas por el flete cuando decides traer tus paquetes a Colón.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta traer un paquete de Miami a Colón por vía aérea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El envío aéreo del casillero cuesta desde $3.00 por libra de peso real. Un paquete de 5 libras ronda los $15.00 y uno de 10 libras los $30.00, más el trámite aduanal que ya está incluido en el flete.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta el envío marítimo de Miami a Colón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El envío marítimo se cobra desde $3.00 por pie cúbico de volumen. Es ideal para muebles, electrodomésticos grandes o cargas voluminosas, y tarda entre 7 y 15 días hábiles.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué impuestos pago al importar con mi casillero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los paquetes que ingresan a Panamá por courier pagan un impuesto de importación que combina el arancel según la categoría del producto con el ITBMS (7%). MBE Colón gestiona toda la documentación aduanera por ti.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué el costo depende del peso o del volumen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las aerolíneas y navieras cobran por peso o por volumen, lo que sea mayor. Por eso los artículos ligeros pero grandes (colchones, muebles) conviene enviarlos por marítimo, que se cobra por pie cúbico.',
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
          <span className="text-mbe-dark font-medium">Cuánto cuesta el casillero Miami</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Casillero · Precios</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          ¿Cuánto cuesta el casillero Miami y traer un paquete a Colón en 2026?
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">Equipo de Logística de MBE Colón</strong> · Actualizado agosto 2026
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si buscas <strong>traer compras de USA a Colón, Panamá</strong>, esta es la respuesta corta: el <strong>casillero Miami</strong> de MBE Colón es <strong>gratis de abrir</strong>, el envío <strong>aéreo cuesta desde $3.00 por libra</strong> y el <strong>marítimo desde $3.00 por pie cúbico</strong>. Lo que pagas depende del peso, el volumen y el contenido de tu paquete. A continuación te explicamos con ejemplos reales.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 En resumen</p>
            <p className="text-gray-600 text-sm">
              Abrir el casillero: $0. Aéreo: desde $3.00/lb (24-72 h). Marítimo: desde $3.00/ft³ (7-15 días). Trámite aduanal incluido en el flete. Sin mensualidad ni comisión.
            </p>
          </div>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Cuánto cuesta abrir un casillero Miami en Colón?</h2>
          <p>
            <strong>Nada.</strong> La activación es 100% gratis en MBE Colón y no cobramos cuota mensual ni comisión. Recibes una dirección personal en Miami, Florida, para usarla en Amazon, Shein, eBay y cientos de tiendas más. Pagas únicamente por el flete cuando decides traer tus paquetes a Panamá. <Link href="/servicios/casillero" className="text-mbe-red font-semibold hover:underline">Activa tu casillero gratis</Link>.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Tarifas del casillero Miami desde Colón</h2>
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
                  <td className="px-4 py-3 font-semibold text-mbe-dark">✈️ Aéreo</td>
                  <td className="px-4 py-3 text-mbe-red font-bold">desde $3.00/lb</td>
                  <td className="px-4 py-3 text-mbe-gray">24–72 h express · 3–7 días estándar</td>
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

          <h2 className="text-mbe-dark text-xl font-black mt-8">Ejemplos de costos reales</h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Ropa de Shein (2-3 lb):</strong> flete aéreo de unos <strong>$6.00–$9.00</strong>.</li>
            <li><strong>Laptop o celular (5-7 lb):</strong> flete aéreo de unos <strong>$15.00–$21.00</strong>.</li>
            <li><strong>Electrodoméstico pequeño (15 lb):</strong> flete aéreo de unos <strong>$45.00</strong> o marítimo según volumen.</li>
            <li><strong>Muebles o carga grande:</strong> marítimo desde <strong>$3.00/ft³</strong> — el costo final depende del volumen ocupado.</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Qué incluye el flete y qué pagas aparte</h2>
          <p>
            El flete del casillero incluye la <strong>gestion aduanal</strong>: nosotros presentamos tu paquete ante la Dirección General de Aduanas y no tienes que hacer trámites. Lo único que debes considerar es el <strong>impuesto de importación</strong> (arancel según la categoría del producto + ITBMS del 7%), que se calcula sobre el valor declarado. Lee cuánto se paga de impuesto al comprar por internet en Panamá para calcularlo con exactitud.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Por qué el peso o el volumen cambian el precio?</h2>
          <p>
            Las aerolíneas y navieras cobran por el <strong>mayor entre peso y volumen</strong>. Un artículo ligero pero enorme (un colchón, un mueble) ocupa espacio sin pesar: por eso conviene marítimo. Un artículo pesado pero compacto (un motor) conviene por aéreo. En MBE Colón te asesoramos gratis para elegir la opción que más te convenga antes de enviar.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Preguntas frecuentes sobre el costo del casillero</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg p-5 shadow-sm group border border-gray-200">
              <summary className="cursor-pointer font-bold text-mbe-dark flex justify-between items-center">
                ¿El casillero Miami de MBE Colón es gratis?<span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm">Sí. Abrir tu casillero Miami es 100% gratis, sin cuota mensual ni comisión. Solo pagas el flete cuando traes tus paquetes a Colón.</p>
            </details>
            <details className="bg-white rounded-lg p-5 shadow-sm group border border-gray-200">
              <summary className="cursor-pointer font-bold text-mbe-dark flex justify-between items-center">
                ¿Cuánto cuesta traer un paquete de Miami a Colón por vía aérea?<span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm">Desde $3.00 por libra de peso real. Un paquete de 5 libras ronda los $15.00 y uno de 10 libras los $30.00, con el trámite aduanal incluido.</p>
            </details>
            <details className="bg-white rounded-lg p-5 shadow-sm group border border-gray-200">
              <summary className="cursor-pointer font-bold text-mbe-dark flex justify-between items-center">
                ¿Cuánto cuesta el envío marítimo de Miami a Colón?<span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm">Desde $3.00 por pie cúbico. Ideal para muebles o cargas voluminosas; tarda de 7 a 15 días hábiles.</p>
            </details>
            <details className="bg-white rounded-lg p-5 shadow-sm group border border-gray-200">
              <summary className="cursor-pointer font-bold text-mbe-dark flex justify-between items-center">
                ¿Qué impuestos pago al importar con mi casillero?<span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm">El arancel según la categoría del producto más el ITBMS (7%). MBE Colón gestiona toda la documentación aduanera por ti.</p>
            </details>
            <details className="bg-white rounded-lg p-5 shadow-sm group border border-gray-200">
              <summary className="cursor-pointer font-bold text-mbe-dark flex justify-between items-center">
                ¿Hay descuentos por consolidar varios paquetes?<span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm">Sí. Si compras en varias tiendas, consolidamos tus paquetes en un solo envío. En promedio, consolidar 3-5 paquetes pequeños ahorra entre 30% y 40% del flete.</p>
            </details>
          </div>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Sigue leyendo</h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><Link href="/blog/cuanto-tarda-envio-miami-colon" className="text-mbe-red font-semibold hover:underline">¿Cuánto tarda un envío de Miami a Colón, Panamá?</Link></li>
            <li><Link href="/blog/cuanto-se-paga-impuesto-comprar-internet-panama" className="text-mbe-red font-semibold hover:underline">¿Cuánto se paga de impuesto al comprar por internet en Panamá?</Link></li>
            <li><Link href="/tarifas" className="text-mbe-red font-semibold hover:underline">Ver todas las tarifas de MBE Colón</Link></li>
          </ul>

          <div className="bg-mbe-dark rounded-2xl p-8 text-center mt-8">
            <h3 className="text-white font-black text-xl mb-2">Cotiza tu envío hoy mismo</h3>
            <p className="text-gray-400 text-sm mb-6">Escríbenos por WhatsApp con el peso o las medidas de tu paquete y te damos el precio final en minutos. Estamos en Plaza Millenium F007, Colón.</p>
            <a
              href="https://wa.me/50769495100"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-mbe-red text-white font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              💬 Cotizar por WhatsApp →
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