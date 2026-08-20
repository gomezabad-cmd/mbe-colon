import Link from 'next/link'

export const metadata = {
  title: 'Impuestos al comprar por internet en Panamá | MBE Colón',
  description:
    'Qué impuestos pagas al importar con tu casillero Miami: arancel por categoría + ITBMS del 7%, cómo se calcula sobre el valor y cómo MBE Colón gestiona tu trámite.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/cuanto-se-paga-impuesto-comprar-internet-panama',
  },
  openGraph: {
    title: '¿Cuánto se paga de impuesto al comprar por internet en Panamá en 2026?',
    description:
      'Arancel por categoría + ITBMS del 7% sobre el valor de tu compra. Cómo se calcula y cómo MBE Colón gestiona tu trámite aduanal.',
    url: 'https://mbecolon.com/blog/cuanto-se-paga-impuesto-comprar-internet-panama',
    images: [
      {
        url: 'https://mbecolon.com/og-image.png',
        width: 1200,
        height: 630,
        alt: '¿Cuánto se paga de impuesto al comprar por internet en Panamá? — MBE Colón',
        type: 'image/png',
      },
    ],
  },
}

const BASE_URL = 'https://mbecolon.com'
const SLUG = 'cuanto-se-paga-impuesto-comprar-internet-panama'
const IMG = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop&q=80'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '¿Cuánto se paga de impuesto al comprar por internet en Panamá en 2026?',
  description:
    'Qué impuestos pagas al importar con tu casillero Miami: arancel según la categoría del producto más ITBMS del 7%, y cómo MBE Colón gestiona tu trámite aduanal.',
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
    { '@type': 'ListItem', position: 3, name: 'Impuestos al comprar por internet en Panamá', item: `${BASE_URL}/blog/${SLUG}` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué impuestos se pagan al importar un paquete por courier en Panamá?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los paquetes que ingresan por courier pagan un impuesto de importación que combina el arancel (según la categoría del producto) con el ITBMS del 7%. Se calcula sobre el valor de la mercancía más los gastos de envío y seguro.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El ITBMS es del 7% siempre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El ITBMS general en Panamá es del 7%. El arancel, en cambio, varía según el tipo de producto: algunos bienes tienen arancel del 0%, otros entre 5% y 15%, y ciertos artículos tienen tasas más altas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Quién paga los impuestos, el cliente o la empresa de casillero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El impuesto lo paga el cliente final, pero MBE Colón gestiona todo el trámite ante la Dirección General de Aduanas (DGA). Tú no tienes que hacer gestiones ni presentarte en la aduana: nosotros te avisamos el monto exacto cuando tu paquete llega.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede evitar pagar impuestos al comprar por internet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los impuestos de importación son obligatorios por ley y se aplican según el valor declarado de la mercancía. Declarar un valor menor al real es ilegal y puede generar multas. En MBE Colón te asesoramos para que tu trámite sea transparente y sin complicaciones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo pedir una cotización que incluya los impuestos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Escríbenos por WhatsApp con la descripción y el valor del producto, y te damos una estimación del flete y de los impuestos aproximados antes de que compres, para que no tengas sorpresas.',
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
          <span className="text-mbe-dark font-medium">Impuestos al comprar por internet</span>
        </nav>

        <span className="bg-mbe-blue text-white text-xs font-bold px-3 py-1 rounded-full">Importaciones · Aduana</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          ¿Cuánto se paga de impuesto al comprar por internet en Panamá en 2026?
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">Equipo de Logística de MBE Colón</strong> · Actualizado agosto 2026
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Cuando traes tus compras de USA con un <strong>casillero Miami</strong>, tu paquete paga un <strong>impuesto de importación</strong> ante la Dirección General de Aduanas (DGA) de Panamá. Ese impuesto combina dos partes: el <strong>arancel</strong> (que varía según la categoría del producto) y el <strong>ITBMS del 7%</strong> (el impuesto general de consumo en Panamá). Se calcula sobre el valor de la mercancía más los gastos de envío y seguro.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 border-l-4 border-mbe-blue">
            <p className="font-bold text-mbe-dark mb-2">💡 En resumen</p>
            <p className="text-gray-600 text-sm">
              Impuesto = arancel (0% a 15% según el producto) + ITBMS (7%), calculado sobre el valor + flete + seguro. MBE Colón gestiona todo el trámite por ti y te avisa el monto exacto.
            </p>
          </div>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Cómo se calcula el impuesto?</h2>
          <p>
            La base imponible se forma con el <strong>valor de tu compra</strong> + el <strong>flete</strong> + el <strong>seguro</strong> de tu envío. Sobre esa base se aplica el <strong>arancel</strong> correspondiente a la categoría del producto y luego el <strong>ITBMS del 7%</strong>. Como el arancel depende del tipo de mercancía, el porcentaje total varía de un producto a otro: una camisa no tributa igual que un electrodoméstico.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Ejemplo práctico</h2>
          <p>
            Imagina que compras ropa por <strong>$50.00</strong> en una tienda de USA. Valor $50 + flete aéreo estimado $9 = base $59. Según la categoría, la ropa suele tributar un arancel bajo; sumando el ITBMS del 7%, el impuesto aproximado rondaría los <strong>$5.00–$8.00</strong>. El resultado exacto depende del arancel de tu producto, por eso lo mejor es pedirnos la estimación antes de comprar.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Quién gestiona el trámite aduanal?</h2>
          <p>
            En MBE Colón, el <strong>trámite ante la DGA está incluido en el flete</strong>. Nosotros presentamos tu paquete, preparamos la documentación y te avisamos por WhatsApp el monto de impuestos cuando tu paquete llega. Tú solo pagas el flete + los impuestos correspondientes y retiras en <strong>Plaza Millenium F007, Colón</strong>. No tienes que visitar la aduana ni contratar un agente por separado.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Consejos para calcular tu impuesto antes de comprar</h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Suma valor + flete estimado:</strong> la base imponible incluye ambos, no solo el precio del producto.</li>
            <li><strong>Conoce la categoría:</strong> electrónica, ropa y cosméticos suelen tener aranceles distintos.</li>
            <li><strong>Consolida tus compras:</strong> juntar varios paquetes en un envío reduce el flete y, con ello, la base sobre la que se calcula el impuesto.</li>
            <li><strong>Pide una estimación:</strong> escríbenos por WhatsApp con el producto y el valor, y te adelantamos el impuesto aproximado.</li>
          </ul>

          <div className="bg-mbe-light rounded-2xl p-6 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">⚖️ Importante</p>
            <p className="text-gray-600 text-sm">
              Los impuestos de importación son obligatorios por ley y se aplican sobre el valor declarado. Declarar un valor menor al real es ilegal y puede generar multas y retenciones. En MBE Colón trabajamos con total transparencia para que tu compra llegue sin sorpresas.
            </p>
          </div>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Preguntas frecuentes sobre impuestos de importación</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg p-5 shadow-sm group border border-gray-200">
              <summary className="cursor-pointer font-bold text-mbe-dark flex justify-between items-center">
                ¿Qué impuestos se pagan al importar un paquete por courier en Panamá?<span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm">Arancel según la categoría del producto + ITBMS del 7%, calculados sobre el valor + flete + seguro.</p>
            </details>
            <details className="bg-white rounded-lg p-5 shadow-sm group border border-gray-200">
              <summary className="cursor-pointer font-bold text-mbe-dark flex justify-between items-center">
                ¿El ITBMS es del 7% siempre?<span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm">El ITBMS general en Panamá es del 7%. El arancel varía según el producto: algunos bienes tributan 0% y otros entre 5% y 15%.</p>
            </details>
            <details className="bg-white rounded-lg p-5 shadow-sm group border border-gray-200">
              <summary className="cursor-pointer font-bold text-mbe-dark flex justify-between items-center">
                ¿Quién paga los impuestos, el cliente o la empresa de casillero?<span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm">El impuesto lo paga el cliente final, pero MBE Colón gestiona todo el trámite ante la DGA. Tú no tienes que hacer gestiones en la aduana.</p>
            </details>
            <details className="bg-white rounded-lg p-5 shadow-sm group border border-gray-200">
              <summary className="cursor-pointer font-bold text-mbe-dark flex justify-between items-center">
                ¿Se puede evitar pagar impuestos al comprar por internet?<span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm">No. Los impuestos de importación son obligatorios por ley y se aplican sobre el valor declarado. Evitar o falsear la declaración es ilegal.</p>
            </details>
            <details className="bg-white rounded-lg p-5 shadow-sm group border border-gray-200">
              <summary className="cursor-pointer font-bold text-mbe-dark flex justify-between items-center">
                ¿Puedo pedir una cotización que incluya los impuestos?<span className="text-mbe-red group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm">Sí. Escríbenos por WhatsApp con la descripción y el valor del producto y te damos una estimación del flete y los impuestos antes de que compres.</p>
            </details>
          </div>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Sigue leyendo</h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><Link href="/blog/cuanto-cuesta-casillero-miami-envio-colon" className="text-mbe-red font-semibold hover:underline">¿Cuánto cuesta el casillero Miami y traer un paquete a Colón?</Link></li>
            <li><Link href="/servicios/casillero" className="text-mbe-red font-semibold hover:underline">Activa tu casillero Miami gratis</Link></li>
            <li><Link href="/tarifas" className="text-mbe-red font-semibold hover:underline">Ver tarifas de casillero y envíos</Link></li>
          </ul>

          <div className="bg-mbe-dark rounded-2xl p-8 text-center mt-8">
            <h3 className="text-white font-black text-xl mb-2">¿Quieres saber cuánto pagarías?</h3>
            <p className="text-gray-400 text-sm mb-6">Escríbenos por WhatsApp con tu producto y su valor, y te adelantamos el flete y los impuestos aproximados. Estamos en Plaza Millenium F007, Colón.</p>
            <a
              href="https://wa.me/50769495100"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-mbe-red text-white font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              💬 Consultar por WhatsApp →
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