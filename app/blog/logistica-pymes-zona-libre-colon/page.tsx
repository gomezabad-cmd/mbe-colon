import Link from 'next/link'

export const metadata = {
  title: 'Logística para PYMEs y empresas de la Zona Libre de Colón | MBE Colón',
  description: 'Servicios de logística en Colón para PYMEs y operadores de la Zona Libre. Carga marítima Miami-Panamá, DHL, FedEx y UPS con entrega en 24-48h a Colón.',
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Logística para PYMEs y empresas de la Zona Libre de Colón',
  description: 'Servicios de logística en Colón para PYMEs y operadores de la Zona Libre. Carga marítima Miami-Panamá, DHL, FedEx y UPS con entrega en 24-48h a Colón.',
  datePublished: '2026-06-29',
  dateModified: '2026-06-29',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/logistica-pymes-zona-libre-colon`,
  image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Logística PYMEs Zona Libre', item: `${BASE_URL}/blog/logistica-pymes-zona-libre-colon` },
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
          <span className="text-mbe-dark font-medium">Logística PYMEs Zona Libre</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Logística</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Logística en Colón para PYMEs y operadores de la Zona Libre: todo en un solo lugar
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Soluciones de logística Colón para importar desde Miami con DHL, FedEx y UPS
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si tienes una empresa en <strong>Colón, Panamá</strong> o eres operador de la <strong>Zona Libre de Colón</strong>, sabes que la logística puede marcar la diferencia entre crecer o estancarte. <strong>Mail Boxes Etc. Colón</strong> es tu aliado logístico local: recibimos tu mercancía en Miami, la enviamos a Colón en 24 a 48 horas, y te damos acceso a los principales couriers internacionales — DHL, FedEx y UPS.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Qué servicios de logística para empresas en la Zona Libre de Colón ofrece MBE?</h2>

          <p>
            Las PYMEs y empresas de la <strong>Zona Libre de Colón</strong> necesitan rapidez, volumen y confiabilidad. En MBE Colón diseñamos soluciones adaptadas a negocios que importan desde Estados Unidos, Europa y Asia. Ya sea que muevas una sola caja o gestiones múltiples embarques al mes, tenemos el servicio adecuado para ti.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Casillero empresarial en Miami</strong> — dirección: 2250 NW 114th Ave Unit 1P, Miami FL 33172 (Tel: 786-272-7070)</li>
            <li><strong>Envíos express 24-48h</strong> — de Miami a Colón, Panamá, con tracking en tiempo real</li>
            <li><strong>Couriers certificados</strong> — DHL, FedEx y UPS según urgencia, peso y destino</li>
            <li><strong>Embalaje industrial profesional</strong> — para textiles, maquinaria, electrónica y repuestos</li>
            <li><strong>Asesoría en importación</strong> — te orientamos sobre documentación y costos de aduana en Panamá</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Carga marítima Miami-Panamá para empresas: logística en Colón sin complicaciones</h2>

          <p>
            Si tu empresa en <strong>Colón, Panamá</strong> mueve volúmenes que justifican carga marítima, MBE Colón te conecta con el canal logístico más eficiente entre Miami y el Puerto de Colón. Gestionamos el tránsito, coordinamos la documentación y te damos visibilidad en tiempo real del estado de tu carga.
          </p>

          <p>
            La <strong>importación en Colón</strong> puede ser compleja, pero con un socio experimentado al lado, los tiempos de tránsito se reducen y los errores en aduana también. Nuestro equipo conoce la realidad de la Zona Libre y trabaja contigo para que cada embarque llegue limpio y a tiempo.
          </p>

          <p>
            Además, si necesitas <strong>carga marítima Panamá</strong> para volúmenes mayores, te asesoramos en la consolidación de carga para reducir el costo por unidad importada — una ventaja competitiva real para PYMEs que compiten en precio en la Zona Libre.
          </p>

          <div className="bg-white rounded-2xl p-6 mt-8 shadow-sm ring-1 ring-black/5">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para importadores en Colón</p>
            <p className="text-gray-600 text-sm">Abre tu cuenta de casillero empresarial en MBE Colón sin cuota mensual. Recibe tus pedidos en Miami y los traemos a <strong>Colón, Panamá</strong> en 24-48 horas. Visítanos en <strong>Plaza Millenium F007, Colón</strong> para asesorarte sin compromiso.</p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Tu empresa necesita un aliado logístico en Colón?</h3>
          <p className="text-gray-400 text-sm mb-6">Visítanos en Plaza Millenium F007, Colón — o escríbenos y te respondemos en minutos.</p>
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
