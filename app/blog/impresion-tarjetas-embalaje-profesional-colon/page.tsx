import Link from 'next/link'

export const metadata = {
  title: 'Impresión de Tarjetas de Presentación y Embalaje Profesional en Colón | MBE Colón',
  description: 'Impresión de tarjetas de presentación y embalaje profesional para empresas en Colón, Panamá. Calidad, rapidez y entrega en 24-48h en Plaza Millenium F007.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/impresion-tarjetas-embalaje-profesional-colon',
  },
}

const BASE_URL = 'https://mbe-colon.vercel.app'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Tarjetas de presentación y embalaje profesional para tu empresa en Colón, Panamá',
  description: 'Impresión de tarjetas de presentación y embalaje profesional para empresas en Colón, Panamá. Calidad, rapidez y entrega en 24-48h en Plaza Millenium F007.',
  datePublished: '2026-07-17',
  dateModified: '2026-07-17',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/impresion-tarjetas-embalaje-profesional-colon`,
  image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Tarjetas y embalaje', item: `${BASE_URL}/blog/impresion-tarjetas-embalaje-profesional-colon` },
  ],
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-14">

        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-mbe-red transition-colors">Inicio</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-mbe-red transition-colors">Blog</Link>
          <span>›</span>
          <span className="text-mbe-dark font-medium">Tarjetas y embalaje</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Impresión</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Tarjetas de presentación y embalaje profesional para tu empresa en Colón, Panamá
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Dónde imprimir tarjetas de presentación en Colón, Panamá y embalar tus envíos como un profesional
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Una buena primera impresión empieza con una tarjeta bien hecha. Si buscas <strong>impresión Colón</strong> de
            calidad para tu negocio, en MBE Colón producimos tarjetas de presentación con acabados profesionales,
            además de servicio de embalaje para que tus envíos lleguen intactos a cualquier destino desde Panamá.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Dónde imprimir tarjetas de presentación en Colón, Panamá</h2>
          <p>
            Muchos emprendedores y PYMEs de Colón buscan un lugar confiable para imprimir su imagen corporativa sin
            depender de la capital. En Plaza Millenium F007 ofrecemos impresión de <strong>tarjetas de presentación Panamá</strong> con
            papel de alta calidad, acabados mate, brillante o con laminado, y entrega en 24 a 48 horas.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Diseño incluido</strong> — si no tienes tu tarjeta lista, te ayudamos a crearla desde cero</li>
            <li><strong>Múltiples acabados</strong> — mate, brillante, texturizado o con relieve</li>
            <li><strong>Entrega rápida</strong> — pedidos listos en 24-48h en Colón, Panamá</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Servicio de embalaje profesional para envíos en Colón</h2>
          <p>
            Además de impresión, contamos con <strong>embalaje profesional Colón</strong> para proteger tus paquetes antes de
            enviarlos por DHL, FedEx o UPS. Usamos cajas reforzadas, plástico burbuja y esquineros de cartón según
            el tipo de producto, ya sea documentos, electrónicos o artículos frágiles.
          </p>
          <p>
            Este servicio es ideal para empresas de la Zona Libre de Colón que necesitan enviar muestras o productos
            terminados a clientes en Panamá o en el exterior, garantizando que lleguen en perfecto estado.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para tu empresa</p>
            <p className="text-gray-600 text-sm">
              Combina tus tarjetas de presentación con brochures o banners en un solo pedido y ahorra tiempo.
              Visítanos en Plaza Millenium F007, Colón, o pide una cotización por WhatsApp antes de pasar por tu material.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Necesitas imprimir o embalar algo esta semana?</h3>
          <p className="text-gray-400 text-sm mb-6">Visítanos en Plaza Millenium F007, Colón — o escríbenos ahora.</p>
          <a
            href="https://wa.me/50769495100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-mbe-red text-white font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity"
          >
            💬 Escribir al WhatsApp →
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog" className="text-mbe-red text-sm font-bold hover:underline">← Volver al blog</Link>
        </div>

      </article>
    </>
  )
}
