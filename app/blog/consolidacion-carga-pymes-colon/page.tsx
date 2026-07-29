import Link from 'next/link'

export const metadata = {
  title: 'Consolidación de carga para PYMEs en Colón: reduce tus costos de importación | MBE Colón',
  description: 'Descubre cómo la consolidación de carga reduce costos de importación para PYMEs en Colón, Panamá. Logística confiable para la Zona Libre de Colón.',
}

const BASE_URL = 'https://mbe-colon.vercel.app'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Consolidación de carga para PYMEs en Colón: reduce tus costos de importación',
  description: 'Descubre cómo la consolidación de carga reduce costos de importación para PYMEs en Colón, Panamá. Logística confiable para la Zona Libre de Colón.',
  datePublished: '2026-07-29',
  dateModified: '2026-07-29',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/consolidacion-carga-pymes-colon`,
  image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Consolidación de carga PYMEs', item: `${BASE_URL}/blog/consolidacion-carga-pymes-colon` },
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
          <span className="text-mbe-dark font-medium">Consolidación de carga PYMEs</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Logística</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Consolidación de carga para PYMEs en Colón: reduce tus costos de importación
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Logística inteligente para empresas de la Zona Libre de Colón
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Importar mercancía no debería significar pagar de más por cada contenedor a medio llenar.
            En <strong>MBE Colón</strong> ayudamos a PYMEs y operadores de la Zona Libre de Colón a mejorar su <strong>logística Colón</strong> mediante consolidación de carga, agrupando envíos de varios clientes para que cada importación rinda más.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Cómo reducir costos de importación para PYMEs en Colón</h2>
          <p>
            La <strong>consolidación de carga para empresas en Panamá</strong> combina mercancía de distintos proveedores en un solo embarque.
            En vez de pagar un flete completo por un volumen pequeño, tu empresa comparte el espacio del contenedor y solo paga por lo que realmente usa.
            Para negocios que operan en Colón, Panamá, esto significa menos costo por unidad importada y más previsibilidad en el presupuesto mensual.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Ahorro directo</strong> — pagas solo el espacio de carga que ocupa tu mercancía, no el contenedor completo</li>
            <li><strong>Mayor frecuencia de embarques</strong> — no necesitas esperar a llenar un contenedor propio para importar</li>
            <li><strong>Menos riesgo</strong> — la carga se maneja con la misma trazabilidad que un envío individual</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Servicios de logística para empresas en Zona Libre de Colón</h2>
          <p>
            Nuestro servicio de <strong>carga marítima Panamá</strong> incluye coordinación de recogida en Miami, consolidación en bodega y entrega puerta a puerta en Colón.
            Trabajamos con PYMEs, comercios de Plaza Millenium y operadores de la Zona Libre de Colón que necesitan importar volúmenes medianos sin comprometer su capital de trabajo en fletes completos.
            El resultado es una cadena logística más eficiente para tu empresa en Panamá, con tiempos de tránsito claros desde el primer día.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Consejo práctico</p>
            <p className="text-gray-600 text-sm">
              Antes de tu próxima importación, pasa por Plaza Millenium F007, Colón, y pídenos una cotización de consolidación de carga.
              Comparamos tu volumen actual contra un embarque compartido y te mostramos el ahorro real en Colón, Panamá.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Listo para importar pagando menos?</h3>
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
