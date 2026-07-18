import Link from 'next/link'

export const metadata = {
  title: 'Carga Marítima Miami-Panamá para Empresas en Colón | MBE Colón',
  description: 'Servicio de carga marítima Miami-Panamá para empresas en Colón, Panamá. Logística confiable para PYMEs y la Zona Libre de Colón. Cotiza en Plaza Millenium F007.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/carga-maritima-miami-panama-empresas-colon',
  },
}

const BASE_URL = 'https://mbe-colon.vercel.app'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Carga Marítima Miami-Panamá para Empresas en Colón',
  description: 'Servicio de carga marítima Miami-Panamá para empresas en Colón, Panamá. Logística confiable para PYMEs y la Zona Libre de Colón. Cotiza en Plaza Millenium F007.',
  datePublished: '2026-07-13',
  dateModified: '2026-07-13',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/carga-maritima-miami-panama-empresas-colon`,
  image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Carga marítima para empresas', item: `${BASE_URL}/blog/carga-maritima-miami-panama-empresas-colon` },
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
          <span className="text-mbe-dark font-medium">Carga marítima para empresas</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Logística</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Carga marítima Miami-Panamá para empresas en Colón
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Logística de volumen para PYMEs y la Zona Libre de Colón
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si tu empresa importa mercancía desde Estados Unidos con regularidad, la <strong>carga marítima Panamá</strong> es
            la forma más económica de mover volumen hasta Colón. En MBE Colón ofrecemos <strong>logística Colón</strong> integral
            para PYMEs y operadores de la Zona Libre, desde la recepción en Miami hasta la entrega final en Plaza Millenium F007.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Carga marítima Miami-Panamá para empresas: cómo funciona</h2>
          <p>
            Tus proveedores en Estados Unidos envían la mercancía a nuestro almacén en Miami, donde consolidamos tu carga junto
            con otros pedidos para reducir costos de flete. Desde ahí coordinamos el transporte marítimo hacia Panamá y el
            despacho aduanero correspondiente, con seguimiento durante todo el proceso de <strong>importación Colón</strong>.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Costo por volumen</strong> — ideal para pedidos grandes que no requieren la rapidez del aéreo.</li>
            <li><strong>Consolidación</strong> — agrupamos varios envíos de proveedores distintos en un solo contenedor.</li>
            <li><strong>Acompañamiento aduanero</strong> — te orientamos en la documentación necesaria para importar a Panamá.</li>
            <li><strong>Entrega en Colón</strong> — recoges en Plaza Millenium F007 o coordinamos entrega directa a tu empresa.</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Servicios de logística para empresas en la Zona Libre de Colón</h2>
          <p>
            Además de la carga marítima, en MBE Colón brindamos <strong>servicios de logística para empresas en la Zona Libre
            de Colón</strong>: recepción y almacenaje temporal de mercancía, envíos nacionales con DHL, FedEx y UPS, y soporte
            administrativo para operadores que mueven inventario constantemente entre Miami, Panamá y Colón. Trabajamos con
            negocios de todos los tamaños, desde PYMEs que importan por primera vez hasta empresas establecidas en la Zona Libre.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Consejo para importadores</p>
            <p className="text-gray-600 text-sm">
              Antes de enviar tu primer contenedor, visítanos en Plaza Millenium F007, Colón, para revisar juntos el volumen,
              los tiempos y el presupuesto de tu operación. Así evitas sorpresas en aduana y planificas mejor tu logística
              hacia Panamá.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Necesitas mover carga desde Miami a Colón?</h3>
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
