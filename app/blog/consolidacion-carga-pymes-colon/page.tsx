import Link from 'next/link'

export const metadata = {
  title: 'ConsolidaciÃ³n de carga para PYMEs en ColÃ³n: reduce tus costos de importaciÃ³n | MBE ColÃ³n',
  description: 'Descubre cÃ³mo la consolidaciÃ³n de carga reduce costos de importaciÃ³n para PYMEs en ColÃ³n, PanamÃ¡. LogÃ­stica confiable para la Zona Libre de ColÃ³n.',
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'ConsolidaciÃ³n de carga para PYMEs en ColÃ³n: reduce tus costos de importaciÃ³n',
  description: 'Descubre cÃ³mo la consolidaciÃ³n de carga reduce costos de importaciÃ³n para PYMEs en ColÃ³n, PanamÃ¡. LogÃ­stica confiable para la Zona Libre de ColÃ³n.',
  datePublished: '2026-07-29',
  dateModified: '2026-07-29',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n', url: BASE_URL },
  url: `${BASE_URL}/blog/consolidacion-carga-pymes-colon`,
  image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'ConsolidaciÃ³n de carga PYMEs', item: `${BASE_URL}/blog/consolidacion-carga-pymes-colon` },
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
          <span className="text-mbe-dark font-medium">ConsolidaciÃ³n de carga PYMEs</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">LogÃ­stica</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          ConsolidaciÃ³n de carga para PYMEs en ColÃ³n: reduce tus costos de importaciÃ³n
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE ColÃ³n</strong> Â· LogÃ­stica inteligente para empresas de la Zona Libre de ColÃ³n
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Importar mercancÃ­a no deberÃ­a significar pagar de mÃ¡s por cada contenedor a medio llenar.
            En <strong>MBE ColÃ³n</strong> ayudamos a PYMEs y operadores de la Zona Libre de ColÃ³n a mejorar su <strong>logÃ­stica ColÃ³n</strong> mediante consolidaciÃ³n de carga, agrupando envÃ­os de varios clientes para que cada importaciÃ³n rinda mÃ¡s.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">CÃ³mo reducir costos de importaciÃ³n para PYMEs en ColÃ³n</h2>
          <p>
            La <strong>consolidaciÃ³n de carga para empresas en PanamÃ¡</strong> combina mercancÃ­a de distintos proveedores en un solo embarque.
            En vez de pagar un flete completo por un volumen pequeÃ±o, tu empresa comparte el espacio del contenedor y solo paga por lo que realmente usa.
            Para negocios que operan en ColÃ³n, PanamÃ¡, esto significa menos costo por unidad importada y mÃ¡s previsibilidad en el presupuesto mensual.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Ahorro directo</strong> â€” pagas solo el espacio de carga que ocupa tu mercancÃ­a, no el contenedor completo</li>
            <li><strong>Mayor frecuencia de embarques</strong> â€” no necesitas esperar a llenar un contenedor propio para importar</li>
            <li><strong>Menos riesgo</strong> â€” la carga se maneja con la misma trazabilidad que un envÃ­o individual</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Servicios de logÃ­stica para empresas en Zona Libre de ColÃ³n</h2>
          <p>
            Nuestro servicio de <strong>carga marÃ­tima PanamÃ¡</strong> incluye coordinaciÃ³n de recogida en Miami, consolidaciÃ³n en bodega y entrega puerta a puerta en ColÃ³n.
            Trabajamos con PYMEs, comercios de Plaza Millenium y operadores de la Zona Libre de ColÃ³n que necesitan importar volÃºmenes medianos sin comprometer su capital de trabajo en fletes completos.
            El resultado es una cadena logÃ­stica mÃ¡s eficiente para tu empresa en PanamÃ¡, con tiempos de trÃ¡nsito claros desde el primer dÃ­a.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">ðŸ’¡ Consejo prÃ¡ctico</p>
            <p className="text-gray-600 text-sm">
              Antes de tu prÃ³xima importaciÃ³n, pasa por Plaza Millenium F007, ColÃ³n, y pÃ­denos una cotizaciÃ³n de consolidaciÃ³n de carga.
              Comparamos tu volumen actual contra un embarque compartido y te mostramos el ahorro real en ColÃ³n, PanamÃ¡.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">Â¿Listo para importar pagando menos?</h3>
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
