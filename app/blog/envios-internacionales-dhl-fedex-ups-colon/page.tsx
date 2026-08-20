import Link from 'next/link'

export const metadata = {
  title: 'Envíos Internacionales desde Colón: ¿DHL, FedEx o UPS? | MBE Colón',
  description: 'Compara DHL, FedEx y UPS para tus envíos internacionales desde Colón, Panamá. Descubre cuál courier conviene según tu paquete, destino y presupuesto.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/envios-internacionales-dhl-fedex-ups-colon',
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Envíos internacionales desde Colón: ¿DHL, FedEx o UPS? Guía para elegir tu courier',
  description: 'Compara DHL, FedEx y UPS para tus envíos internacionales desde Colón, Panamá. Descubre cuál courier conviene según tu paquete, destino y presupuesto.',
  datePublished: '2026-07-03',
  dateModified: '2026-07-03',
  author: {
    '@type': 'Person',
    name: 'Equipo de Logística de MBE Colón',
    jobTitle: 'Servicio de logística y envíos',
    worksFor: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/envios-internacionales-dhl-fedex-ups-colon`,
  image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'DHL, FedEx o UPS', item: `${BASE_URL}/blog/envios-internacionales-dhl-fedex-ups-colon` },
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
          <span className="text-mbe-dark font-medium">DHL, FedEx o UPS</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Envíos</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Envíos internacionales desde Colón: ¿DHL, FedEx o UPS? Guía para elegir tu courier
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">Equipo de Logística de MBE Colón</strong> · Cómo elegir el mejor courier para tus envíos internacionales
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si necesitas mandar documentos o mercancía fuera de Panamá, elegir bien el courier marca la diferencia
            entre un envío puntual y uno con dolores de cabeza. En MBE Colón trabajamos a diario con
            <strong> envíos internacionales Colón</strong> y sabemos que cada courier tiene sus fortalezas según el destino,
            el peso y la urgencia del paquete.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Cómo enviar paquetes internacionales desde Colón, Panamá</h2>
          <p>
            Antes de escoger courier, define tres cosas: destino, tiempo de entrega que necesitas y tipo de contenido
            (documentos, mercancía comercial o paquetería personal). Con eso, en Plaza Millenium F007 te ayudamos a
            armar el envío correcto desde Colón hacia cualquier parte del mundo.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>DHL</strong> — fuerte en Europa, Asia y documentos urgentes con seguimiento detallado</li>
            <li><strong>FedEx</strong> — buena opción para Estados Unidos con tarifas competitivas en paquetería</li>
            <li><strong>UPS</strong> — ideal para envíos comerciales y mercancía de mayor volumen</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Cuál es el mejor courier para envíos a USA desde Colón?</h2>
          <p>
            Para la ruta Colón–Estados Unidos, tanto FedEx como UPS suelen ofrecer los mejores tiempos y costos, mientras
            que DHL es útil cuando el destino final está fuera de USA. En MBE Colón comparamos tarifas de los tres
            couriers en cada envío, así que siempre te damos la opción más conveniente sin que tengas que investigar
            por tu cuenta. Esto aplica igual para empresas de la Zona Libre de Colón que despachan mercancía a clientes
            en el extranjero, y para quien envía un paquete personal desde Panamá.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip de courier Panamá</p>
            <p className="text-gray-600 text-sm">
              Trae tu paquete ya pesado y con la dirección de destino lista. En Plaza Millenium F007, Colón, cotizamos
              DHL, FedEx y UPS en el momento y te decimos cuál conviene según tu presupuesto.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Listo para tu próximo envío internacional?</h3>
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
