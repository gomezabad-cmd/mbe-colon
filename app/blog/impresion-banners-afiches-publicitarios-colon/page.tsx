import Link from 'next/link'

export const metadata = {
  title: 'Impresión de Banners y Afiches Publicitarios en Colón, Panamá | MBE Colón',
  description: 'Impresión de banners publicitarios en Colón Panamá para tu negocio. Afiches, pendones y vinil de alta calidad, entrega en 24-48h en Plaza Millenium F007.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/impresion-banners-afiches-publicitarios-colon',
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Impresión de Banners y Afiches Publicitarios en Colón, Panamá',
  description: 'Impresión de banners publicitarios en Colón Panamá para tu negocio. Afiches, pendones y vinil de alta calidad, entrega en 24-48h en Plaza Millenium F007.',
  datePublished: '2026-07-31',
  dateModified: '2026-07-31',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/impresion-banners-afiches-publicitarios-colon`,
  image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Banners y afiches', item: `${BASE_URL}/blog/impresion-banners-afiches-publicitarios-colon` },
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
          <span className="text-mbe-dark font-medium">Banners y afiches</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Impresión</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Impresión de Banners y Afiches Publicitarios en Colón, Panamá
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Guía para promocionar tu negocio con impresión de alto impacto
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Un buen <strong>banner publicitario</strong> vende antes de que el cliente entre a tu local. Si buscas
            <strong> impresión Colón</strong> para promociones, aperturas o eventos, en MBE Colón producimos banners,
            pendones y afiches con calidad profesional y entrega rápida en Panamá.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Dónde imprimir banners publicitarios en Colón Panamá</h2>
          <p>
            Muchas empresas en Colón pierden ventas por usar material promocional de baja calidad o por depender de
            proveedores lentos. Nuestro centro de impresión en <strong>Plaza Millenium F007</strong> resuelve esto con
            producción local, sin esperar envíos desde Ciudad de Panamá.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Banners en vinil</strong> — resistentes a sol y lluvia, ideales para exteriores en Colón</li>
            <li><strong>Pendones roll-up</strong> — perfectos para ferias, congresos y puntos de venta</li>
            <li><strong>Afiches y posters</strong> — full color, distintos tamaños según tu presupuesto</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Banners publicitarios Panamá: calidad que representa tu marca</h2>
          <p>
            Trabajamos con tintas de alta durabilidad y acabados profesionales para que tu banner se vea impecable
            desde el primer día hasta el último evento. Ya sea para una promoción temporal o señalización permanente
            de tu negocio en Colón, ajustamos el material según el uso.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para tu próxima campaña</p>
            <p className="text-gray-600 text-sm">
              Trae tu diseño en alta resolución (o pídenos ayuda con el arte) y retira tu banner listo en 24-48h.
              Visítanos en Plaza Millenium F007, Colón, Panamá.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Listo para imprimir tu banner?</h3>
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
