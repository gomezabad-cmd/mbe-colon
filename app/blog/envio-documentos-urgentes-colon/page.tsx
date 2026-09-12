import Link from 'next/link'

export const metadata = {
  title: 'Cómo Enviar Documentos Urgentes desde Colón, Panamá | MBE Colón',
  description: 'Envía documentos urgentes desde Colón, Panamá con DHL, FedEx y UPS. Guía de envíos internacionales Colón: tiempos, precios y el mejor courier.',
}

const BASE_URL = 'https://mbe-colon.vercel.app'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Cómo Enviar Documentos Urgentes desde Colón, Panamá al Mundo',
  description: 'Envía documentos urgentes desde Colón, Panamá con DHL, FedEx y UPS. Guía de envíos internacionales Colón: tiempos, precios y el mejor courier.',
  datePublished: '2026-09-11',
  dateModified: '2026-09-11',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/envio-documentos-urgentes-colon`,
  image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Documentos urgentes', item: `${BASE_URL}/blog/envio-documentos-urgentes-colon` },
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
          <span className="text-mbe-dark font-medium">Documentos urgentes</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Envíos</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Cómo enviar documentos urgentes desde Colón, Panamá al mundo
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Guía de envíos internacionales Colón para contratos, títulos y trámites legales
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Contratos, títulos de propiedad, visas o trámites legales no pueden esperar.
            Si necesitas un <strong>courier Panamá</strong> confiable para mover papeles importantes,
            en MBE Colón procesamos tus <strong>envíos internacionales Colón</strong> el mismo día en que los recibes.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Cómo enviar documentos urgentes desde Colón Panamá sin perder tiempo</h2>
          <p>
            El mayor riesgo al enviar documentos no es el costo, es el retraso.
            Un formulario mal llenado o una guía incompleta puede dejar tu paquete detenido en aduana
            durante días. En Plaza Millenium F007 revisamos cada envío antes de despacharlo para evitar ese problema.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Revisión previa</strong> — verificamos que el documento y su empaque cumplan los requisitos del destino.</li>
            <li><strong>Elección del courier</strong> — te asesoramos sobre el mejor courier para envíos a USA desde Colón según urgencia y presupuesto.</li>
            <li><strong>Seguimiento en línea</strong> — recibes el número de guía para rastrear tu envío en tiempo real.</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">DHL, FedEx o UPS: ¿cuál conviene para tus documentos?</h2>
          <p>
            No todos los couriers ofrecen los mismos tiempos ni cobertura desde Colón, Panamá.
            <strong>DHL Colón</strong> suele ser la opción más rápida para Centroamérica y Europa,
            mientras que FedEx y UPS destacan en rutas hacia Estados Unidos y Asia.
            Nosotros comparamos las tres para tu envío express de documentos desde Colón, Panamá y te damos la opción más conveniente.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip antes de enviar</p>
            <p className="text-gray-600 text-sm">
              Lleva tu documento en un sobre resistente y con una copia de identificación.
              En nuestra oficina de Plaza Millenium F007, en Colón, te ayudamos a empacarlo
              correctamente para que llegue sin contratiempos.
            </p>
          </div>

          <p>
            Ya sea un solo documento o varios paquetes para tu empresa, en Colón, Panamá
            tienes un aliado que conoce cómo enviar paquetes internacionales desde Colón Panamá sin demoras
            innecesarias.
          </p>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Necesitas enviar un documento urgente hoy?</h3>
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
