import Link from 'next/link'

export const metadata = {
  title: 'Gorras y Polos Bordados con Logo para Empresas en Colón, Panamá | MBE Colón',
  description: '¿Buscas bordados en Colón para tu empresa? Gorras y polos bordados con logo, alta calidad y entrega rápida en Plaza Millenium F007, Panamá.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/bordados-gorras-polos-empresas-colon',
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Gorras y Polos Bordados con Logo para Empresas en Colón, Panamá',
  description: '¿Buscas bordados en Colón para tu empresa? Gorras y polos bordados con logo, alta calidad y entrega rápida en Plaza Millenium F007, Panamá.',
  datePublished: '2026-07-06',
  dateModified: '2026-07-06',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
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
          <span>›</span>
          <Link href="/blog" className="hover:text-mbe-red transition-colors">Blog</Link>
          <span>›</span>
          <span className="text-mbe-dark font-medium">Gorras y Polos Bordados</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Bordados</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Gorras y polos bordados con logo para empresas en Colón, Panamá
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Bordados corporativos de alta calidad para tu equipo
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si buscas <strong>bordados en Colón</strong> que realmente representen la imagen de tu empresa,
            las gorras y polos bordados con logo son una de las formas más efectivas de uniformar a tu equipo
            en Panamá. En MBE Colón digitalizamos tu logo y lo bordamos con precisión sobre gorras, polos y
            uniformes para negocios de todos los tamaños.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Dónde bordar uniformes con logo en Colón, Panamá</h2>
          <p>
            Muchas empresas en Colón, Panamá no saben dónde conseguir un bordado profesional sin pedir
            grandes cantidades mínimas. En nuestro local de Plaza Millenium F007 bordamos desde 1 unidad,
            ideal para PYMEs, comercios de la Zona Libre y equipos pequeños que necesitan verse profesionales
            desde el primer pedido.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Gorras bordadas para empresas en Panamá</strong> — logo a todo color, ajuste cómodo y acabado duradero.</li>
            <li><strong>Polos bordados con logo para empresas en Colón</strong> — algodón piqué en tallas S a XXL para todo tu personal.</li>
            <li><strong>Uniformes bordados</strong> para personal de ventas, seguridad, recepción y operaciones en Colón y el resto de Panamá.</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Bordado de gorras y uniformes corporativos en Panamá: calidad que dura</h2>
          <p>
            A diferencia de la impresión o el vinil, el bordado resiste lavados constantes sin desgastarse,
            por lo que es la opción preferida por empresas en Colón que renuevan uniformes cada año. Guardamos
            el diseño digitalizado de tu logo, así que futuros pedidos de gorras o polos se producen más rápido
            y con la misma calidad.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para empresas en Colón</p>
            <p className="text-gray-600 text-sm">
              Trae tu logo en alta resolución (o dinos tu nombre comercial) y te mostramos una muestra digital
              antes de bordar. Visítanos en Plaza Millenium F007, Colón, o coordina tu pedido por WhatsApp.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">Uniforma a tu equipo con bordados de calidad</h3>
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
