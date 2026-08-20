import Link from 'next/link'

export const metadata = {
  title: 'Gorras y Polos Bordados con Logo para Empresas en ColÃ³n, PanamÃ¡ | MBE ColÃ³n',
  description: 'Â¿Buscas bordados en ColÃ³n para tu empresa? Gorras y polos bordados con logo, alta calidad y entrega rÃ¡pida en Plaza Millenium F007, PanamÃ¡.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/bordados-gorras-polos-empresas-colon',
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Gorras y Polos Bordados con Logo para Empresas en ColÃ³n, PanamÃ¡',
  description: 'Â¿Buscas bordados en ColÃ³n para tu empresa? Gorras y polos bordados con logo, alta calidad y entrega rÃ¡pida en Plaza Millenium F007, PanamÃ¡.',
  datePublished: '2026-07-06',
  dateModified: '2026-07-06',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n', url: BASE_URL },
  url: `${BASE_URL}/blog/bordados-gorras-polos-empresas-colon`,
  image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Gorras y Polos Bordados', item: `${BASE_URL}/blog/bordados-gorras-polos-empresas-colon` },
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
          <span className="text-mbe-dark font-medium">Gorras y Polos Bordados</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Bordados</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Gorras y polos bordados con logo para empresas en ColÃ³n, PanamÃ¡
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE ColÃ³n</strong> Â· Bordados corporativos de alta calidad para tu equipo
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si buscas <strong>bordados en ColÃ³n</strong> que realmente representen la imagen de tu empresa,
            las gorras y polos bordados con logo son una de las formas mÃ¡s efectivas de uniformar a tu equipo
            en PanamÃ¡. En MBE ColÃ³n digitalizamos tu logo y lo bordamos con precisiÃ³n sobre gorras, polos y
            uniformes para negocios de todos los tamaÃ±os.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">DÃ³nde bordar uniformes con logo en ColÃ³n, PanamÃ¡</h2>
          <p>
            Muchas empresas en ColÃ³n, PanamÃ¡ no saben dÃ³nde conseguir un bordado profesional sin pedir
            grandes cantidades mÃ­nimas. En nuestro local de Plaza Millenium F007 bordamos desde 1 unidad,
            ideal para PYMEs, comercios de la Zona Libre y equipos pequeÃ±os que necesitan verse profesionales
            desde el primer pedido.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Gorras bordadas para empresas en PanamÃ¡</strong> â€” logo a todo color, ajuste cÃ³modo y acabado duradero.</li>
            <li><strong>Polos bordados con logo para empresas en ColÃ³n</strong> â€” algodÃ³n piquÃ© en tallas S a XXL para todo tu personal.</li>
            <li><strong>Uniformes bordados</strong> para personal de ventas, seguridad, recepciÃ³n y operaciones en ColÃ³n y el resto de PanamÃ¡.</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Bordado de gorras y uniformes corporativos en PanamÃ¡: calidad que dura</h2>
          <p>
            A diferencia de la impresiÃ³n o el vinil, el bordado resiste lavados constantes sin desgastarse,
            por lo que es la opciÃ³n preferida por empresas en ColÃ³n que renuevan uniformes cada aÃ±o. Guardamos
            el diseÃ±o digitalizado de tu logo, asÃ­ que futuros pedidos de gorras o polos se producen mÃ¡s rÃ¡pido
            y con la misma calidad.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">ðŸ’¡ Tip para empresas en ColÃ³n</p>
            <p className="text-gray-600 text-sm">
              Trae tu logo en alta resoluciÃ³n (o dinos tu nombre comercial) y te mostramos una muestra digital
              antes de bordar. VisÃ­tanos en Plaza Millenium F007, ColÃ³n, o coordina tu pedido por WhatsApp.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">Uniforma a tu equipo con bordados de calidad</h3>
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
