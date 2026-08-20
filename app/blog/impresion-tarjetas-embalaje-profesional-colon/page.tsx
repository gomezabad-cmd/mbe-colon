import Link from 'next/link'

export const metadata = {
  title: 'ImpresiÃ³n de Tarjetas de PresentaciÃ³n y Embalaje Profesional en ColÃ³n | MBE ColÃ³n',
  description: 'ImpresiÃ³n de tarjetas de presentaciÃ³n y embalaje profesional para empresas en ColÃ³n, PanamÃ¡. Calidad, rapidez y entrega en 24-48h en Plaza Millenium F007.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/impresion-tarjetas-embalaje-profesional-colon',
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Tarjetas de presentaciÃ³n y embalaje profesional para tu empresa en ColÃ³n, PanamÃ¡',
  description: 'ImpresiÃ³n de tarjetas de presentaciÃ³n y embalaje profesional para empresas en ColÃ³n, PanamÃ¡. Calidad, rapidez y entrega en 24-48h en Plaza Millenium F007.',
  datePublished: '2026-07-17',
  dateModified: '2026-07-17',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n', url: BASE_URL },
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
          <span>â€º</span>
          <Link href="/blog" className="hover:text-mbe-red transition-colors">Blog</Link>
          <span>â€º</span>
          <span className="text-mbe-dark font-medium">Tarjetas y embalaje</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">ImpresiÃ³n</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Tarjetas de presentaciÃ³n y embalaje profesional para tu empresa en ColÃ³n, PanamÃ¡
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE ColÃ³n</strong> Â· DÃ³nde imprimir tarjetas de presentaciÃ³n en ColÃ³n, PanamÃ¡ y embalar tus envÃ­os como un profesional
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Una buena primera impresiÃ³n empieza con una tarjeta bien hecha. Si buscas <strong>impresiÃ³n ColÃ³n</strong> de
            calidad para tu negocio, en MBE ColÃ³n producimos tarjetas de presentaciÃ³n con acabados profesionales,
            ademÃ¡s de servicio de embalaje para que tus envÃ­os lleguen intactos a cualquier destino desde PanamÃ¡.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">DÃ³nde imprimir tarjetas de presentaciÃ³n en ColÃ³n, PanamÃ¡</h2>
          <p>
            Muchos emprendedores y PYMEs de ColÃ³n buscan un lugar confiable para imprimir su imagen corporativa sin
            depender de la capital. En Plaza Millenium F007 ofrecemos impresiÃ³n de <strong>tarjetas de presentaciÃ³n PanamÃ¡</strong> con
            papel de alta calidad, acabados mate, brillante o con laminado, y entrega en 24 a 48 horas.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>DiseÃ±o incluido</strong> â€” si no tienes tu tarjeta lista, te ayudamos a crearla desde cero</li>
            <li><strong>MÃºltiples acabados</strong> â€” mate, brillante, texturizado o con relieve</li>
            <li><strong>Entrega rÃ¡pida</strong> â€” pedidos listos en 24-48h en ColÃ³n, PanamÃ¡</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Servicio de embalaje profesional para envÃ­os en ColÃ³n</h2>
          <p>
            AdemÃ¡s de impresiÃ³n, contamos con <strong>embalaje profesional ColÃ³n</strong> para proteger tus paquetes antes de
            enviarlos por DHL, FedEx o UPS. Usamos cajas reforzadas, plÃ¡stico burbuja y esquineros de cartÃ³n segÃºn
            el tipo de producto, ya sea documentos, electrÃ³nicos o artÃ­culos frÃ¡giles.
          </p>
          <p>
            Este servicio es ideal para empresas de la Zona Libre de ColÃ³n que necesitan enviar muestras o productos
            terminados a clientes en PanamÃ¡ o en el exterior, garantizando que lleguen en perfecto estado.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">ðŸ’¡ Tip para tu empresa</p>
            <p className="text-gray-600 text-sm">
              Combina tus tarjetas de presentaciÃ³n con brochures o banners en un solo pedido y ahorra tiempo.
              VisÃ­tanos en Plaza Millenium F007, ColÃ³n, o pide una cotizaciÃ³n por WhatsApp antes de pasar por tu material.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">Â¿Necesitas imprimir o embalar algo esta semana?</h3>
          <p className="text-gray-400 text-sm mb-6">VisÃ­tanos en Plaza Millenium F007, ColÃ³n â€” o escrÃ­benos ahora.</p>
          <a
            href="https://wa.me/50769495100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-mbe-red text-white font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity"
          >
            ðŸ’¬ Escribir al WhatsApp â†’
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog" className="text-mbe-red text-sm font-bold hover:underline">â† Volver al blog</Link>
        </div>

      </article>
    </>
  )
}
