import Link from 'next/link'

export const metadata = {
  title: 'Seguro para EnvÃ­os Internacionales desde ColÃ³n, PanamÃ¡ | MBE ColÃ³n',
  description: 'CÃ³mo asegurar tu paquete internacional desde ColÃ³n, PanamÃ¡. Protege tus envÃ­os con DHL, FedEx y UPS y evita pÃ©rdidas en tu courier.',
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Seguro para tus EnvÃ­os Internacionales: Protege tus Paquetes desde ColÃ³n, PanamÃ¡',
  description: 'CÃ³mo asegurar tu paquete internacional desde ColÃ³n, PanamÃ¡. Protege tus envÃ­os con DHL, FedEx y UPS y evita pÃ©rdidas en tu courier.',
  datePublished: '2026-08-05',
  dateModified: '2026-08-05',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n', url: BASE_URL },
  url: `${BASE_URL}/blog/seguro-envios-internacionales-colon`,
  image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Seguro de envÃ­os', item: `${BASE_URL}/blog/seguro-envios-internacionales-colon` },
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
          <span className="text-mbe-dark font-medium">Seguro de envÃ­os</span>
        </nav>

        <span className="bg-mbe-blue text-white text-xs font-bold px-3 py-1 rounded-full">EnvÃ­os</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Seguro para tus EnvÃ­os Internacionales: Protege tus Paquetes desde ColÃ³n, PanamÃ¡
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE ColÃ³n</strong> Â· CÃ³mo asegurar tu paquete internacional y evitar pÃ©rdidas en tu courier
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Cada semana recibimos la misma pregunta en ColÃ³n, PanamÃ¡: <strong>&quot;Â¿quÃ© pasa si mi paquete se pierde o llega daÃ±ado?&quot;</strong>.
            Para tus <strong>envÃ­os internacionales ColÃ³n</strong>, la respuesta es simple: un seguro de envÃ­o bien elegido evita
            dolores de cabeza y pÃ©rdidas econÃ³micas cuando algo sale mal en el camino.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">CÃ³mo asegurar mi paquete internacional desde ColÃ³n PanamÃ¡</h2>
          <p>
            Todo envÃ­o con <strong>courier PanamÃ¡</strong> â€”ya sea DHL, FedEx o UPSâ€” permite declarar un valor asegurado.
            En MBE ColÃ³n te ayudamos a calcular la cobertura correcta segÃºn el valor real de tu mercancÃ­a, para que
            no pagues de mÃ¡s ni te quedes corto si necesitas reclamar.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Declara el valor real</strong> â€” subestimar el paquete reduce tu compensaciÃ³n en caso de pÃ©rdida.</li>
            <li><strong>Guarda evidencia fotogrÃ¡fica</strong> â€” fotos del contenido y del empaque antes de sellar la caja.</li>
            <li><strong>Conserva tu comprobante</strong> â€” factura o recibo de compra para respaldar cualquier reclamo.</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Mejor courier para envÃ­os a USA desde ColÃ³n</h2>
          <p>
            No todos los couriers manejan igual los reclamos por daÃ±o o pÃ©rdida. En MBE ColÃ³n trabajamos con
            <strong> DHL ColÃ³n</strong>, FedEx y UPS, y te orientamos sobre cuÃ¡l ofrece el mejor tiempo de respuesta
            y cobertura segÃºn el destino de tu envÃ­o internacional.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">ðŸ’¡ QuÃ© hacer si mi paquete se pierde o daÃ±a en el envÃ­o</p>
            <p className="text-gray-600 text-sm">
              RepÃ³rtalo de inmediato en Plaza Millenium F007, ColÃ³n. Entre mÃ¡s rÃ¡pido abramos el caso con el courier,
              mÃ¡s rÃ¡pida es la resoluciÃ³n y el reembolso.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">EnvÃ­a con la tranquilidad de estar protegido</h3>
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
