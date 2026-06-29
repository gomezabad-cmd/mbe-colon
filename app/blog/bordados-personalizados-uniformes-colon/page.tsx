import Link from 'next/link'

export const metadata = {
  title: 'Bordados Personalizados en Uniformes y Gorras para Empresas | MBE Colón, Panamá',
  description: 'Servicio de bordados personalizados en Colón, Panamá. Uniformes, hoodies, gorras y polos con tu logo bordado para empresas y equipos. Plaza Millenium F007.',
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '¿Dónde bordar uniformes con tu logo en Colón, Panamá? Guía para empresas',
  description: 'Servicio de bordados personalizados en Colón, Panamá. Uniformes, hoodies, gorras y polos con tu logo bordado para empresas y equipos. Plaza Millenium F007.',
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/bordados-personalizados-uniformes-colon`,
  image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Bordados personalizados en Colón', item: `${BASE_URL}/blog/bordados-personalizados-uniformes-colon` },
  ],
}

export default function BlogBordados() {
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
          <span className="text-mbe-dark font-medium">Bordados en Colón</span>
        </nav>

        <span className="bg-mbe-blue text-white text-xs font-bold px-3 py-1 rounded-full">Bordados</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          ¿Dónde bordar uniformes con tu logo en Colón, Panamá? Guía para empresas
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Tu guía para uniformes bordados profesionales en la provincia de Colón
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si tu empresa en <strong>Colón, Panamá</strong> necesita uniformes con logo, gorras bordadas o hoodies personalizados, el servicio de <strong>bordados en MBE Colón</strong> es la opción más completa y rápida de la provincia. Atendemos desde una sola unidad hasta pedidos corporativos grandes.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Qué prendas puedes bordar?</h2>
          <p>En <strong>Plaza Millenium F007, Colón</strong>, bordamos prácticamente cualquier prenda textil:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Uniformes empresariales</strong> — camisas, polos y chaquetas con tu logo</li>
            <li><strong>Hoodies y sudaderas</strong> — perfectas para equipos y temporada de lluvia en Panamá</li>
            <li><strong>Gorras personalizadas</strong> — bordado en 2D y 3D de alta definición</li>
            <li><strong>Delantales y uniformes de cocina</strong> — para restaurantes y cafeterías en Colón</li>
            <li><strong>Camisetas deportivas</strong> — para equipos y torneos en la provincia</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Por qué elegir bordado en lugar de serigrafía?</h2>
          <p>
            El <strong>bordado personalizado</strong> ofrece ventajas claras frente a otras técnicas de personalización textil:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Alta durabilidad</strong> — el hilo bordado no se descascara ni desvanece con el lavado</li>
            <li><strong>Acabado profesional</strong> — ideal para representar la imagen corporativa de tu empresa en Panamá</li>
            <li><strong>Textura en relieve</strong> — da un aspecto premium que diferencia tu marca</li>
            <li><strong>Resistente al sol y la humedad</strong> — fundamental en el clima de Colón</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Cómo es el proceso?</h2>
          <p>Pedir tus <strong>uniformes bordados en Colón</strong> es muy sencillo:</p>
          <ol className="list-decimal list-inside space-y-2 pl-2">
            <li>Envíanos tu logo por WhatsApp o tráelo en USB a <strong>Plaza Millenium F007</strong></li>
            <li>Digitalizamos el diseño y te enviamos una prueba para aprobación</li>
            <li>Confirmás cantidad y tipo de prenda — pedidos desde 1 unidad</li>
            <li>Producción y entrega en pocos días hábiles en Colón</li>
          </ol>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para empresas en Colón</p>
            <p className="text-gray-600 text-sm">
              Si tienes una empresa en la <strong>Zona Libre de Colón</strong> o en el área metropolitana, los uniformes bordados con tu logo refuerzan la identidad de marca y generan confianza en tus clientes. Pregúntanos por descuentos en pedidos de 10 unidades o más.
            </p>
          </div>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Palabras clave que buscan tus clientes</h2>
          <p>
            Si alguien en <strong>Panamá</strong> busca <em>"dónde bordar uniformes con logo en Colón"</em>, <em>"gorras bordadas para empresas en Panamá"</em> o <em>"uniformes bordados Colón Panamá"</em>, en MBE Colón tenemos la solución. Somos el centro de <strong>bordados personalizados</strong> más completo de la provincia.
          </p>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Listo para bordar tu logo en Colón?</h3>
          <p className="text-gray-400 text-sm mb-6">Visítanos en Plaza Millenium F007, Colón — o escríbenos ahora y cotizamos sin compromiso.</p>
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
