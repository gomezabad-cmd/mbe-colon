import Link from 'next/link'

export const metadata = {
  title: 'Carga MarÃ­tima Miami-PanamÃ¡ para Empresas en ColÃ³n | MBE ColÃ³n',
  description: 'Servicio de carga marÃ­tima Miami-PanamÃ¡ para empresas en ColÃ³n, PanamÃ¡. LogÃ­stica confiable para PYMEs y la Zona Libre de ColÃ³n. Cotiza en Plaza Millenium F007.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/carga-maritima-miami-panama-empresas-colon',
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Carga MarÃ­tima Miami-PanamÃ¡ para Empresas en ColÃ³n',
  description: 'Servicio de carga marÃ­tima Miami-PanamÃ¡ para empresas en ColÃ³n, PanamÃ¡. LogÃ­stica confiable para PYMEs y la Zona Libre de ColÃ³n. Cotiza en Plaza Millenium F007.',
  datePublished: '2026-07-13',
  dateModified: '2026-07-13',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n', url: BASE_URL },
  url: `${BASE_URL}/blog/carga-maritima-miami-panama-empresas-colon`,
  image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Carga marÃ­tima para empresas', item: `${BASE_URL}/blog/carga-maritima-miami-panama-empresas-colon` },
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
          <span className="text-mbe-dark font-medium">Carga marÃ­tima para empresas</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">LogÃ­stica</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Carga marÃ­tima Miami-PanamÃ¡ para empresas en ColÃ³n
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE ColÃ³n</strong> Â· LogÃ­stica de volumen para PYMEs y la Zona Libre de ColÃ³n
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si tu empresa importa mercancÃ­a desde Estados Unidos con regularidad, la <strong>carga marÃ­tima PanamÃ¡</strong> es
            la forma mÃ¡s econÃ³mica de mover volumen hasta ColÃ³n. En MBE ColÃ³n ofrecemos <strong>logÃ­stica ColÃ³n</strong> integral
            para PYMEs y operadores de la Zona Libre, desde la recepciÃ³n en Miami hasta la entrega final en Plaza Millenium F007.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Carga marÃ­tima Miami-PanamÃ¡ para empresas: cÃ³mo funciona</h2>
          <p>
            Tus proveedores en Estados Unidos envÃ­an la mercancÃ­a a nuestro almacÃ©n en Miami, donde consolidamos tu carga junto
            con otros pedidos para reducir costos de flete. Desde ahÃ­ coordinamos el transporte marÃ­timo hacia PanamÃ¡ y el
            despacho aduanero correspondiente, con seguimiento durante todo el proceso de <strong>importaciÃ³n ColÃ³n</strong>.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Costo por volumen</strong> â€” ideal para pedidos grandes que no requieren la rapidez del aÃ©reo.</li>
            <li><strong>ConsolidaciÃ³n</strong> â€” agrupamos varios envÃ­os de proveedores distintos en un solo contenedor.</li>
            <li><strong>AcompaÃ±amiento aduanero</strong> â€” te orientamos en la documentaciÃ³n necesaria para importar a PanamÃ¡.</li>
            <li><strong>Entrega en ColÃ³n</strong> â€” recoges en Plaza Millenium F007 o coordinamos entrega directa a tu empresa.</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Servicios de logÃ­stica para empresas en la Zona Libre de ColÃ³n</h2>
          <p>
            AdemÃ¡s de la carga marÃ­tima, en MBE ColÃ³n brindamos <strong>servicios de logÃ­stica para empresas en la Zona Libre
            de ColÃ³n</strong>: recepciÃ³n y almacenaje temporal de mercancÃ­a, envÃ­os nacionales con DHL, FedEx y UPS, y soporte
            administrativo para operadores que mueven inventario constantemente entre Miami, PanamÃ¡ y ColÃ³n. Trabajamos con
            negocios de todos los tamaÃ±os, desde PYMEs que importan por primera vez hasta empresas establecidas en la Zona Libre.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">ðŸ’¡ Consejo para importadores</p>
            <p className="text-gray-600 text-sm">
              Antes de enviar tu primer contenedor, visÃ­tanos en Plaza Millenium F007, ColÃ³n, para revisar juntos el volumen,
              los tiempos y el presupuesto de tu operaciÃ³n. AsÃ­ evitas sorpresas en aduana y planificas mejor tu logÃ­stica
              hacia PanamÃ¡.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">Â¿Necesitas mover carga desde Miami a ColÃ³n?</h3>
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
