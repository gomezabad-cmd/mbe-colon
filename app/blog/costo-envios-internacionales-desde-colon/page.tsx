import Link from 'next/link'

export const metadata = {
  title: 'CuÃ¡nto Cuesta Enviar un Paquete Internacional desde ColÃ³n, PanamÃ¡ | MBE ColÃ³n',
  description: 'Descubre cuÃ¡nto cuesta un envÃ­o internacional desde ColÃ³n con DHL, FedEx y UPS. Cotiza tu courier PanamÃ¡ en Plaza Millenium F007 y ahorra en tu prÃ³ximo envÃ­o.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/costo-envios-internacionales-desde-colon',
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Â¿CuÃ¡nto cuesta enviar un paquete internacional desde ColÃ³n, PanamÃ¡?',
  description: 'Descubre cuÃ¡nto cuesta un envÃ­o internacional desde ColÃ³n con DHL, FedEx y UPS. Cotiza tu courier PanamÃ¡ en Plaza Millenium F007 y ahorra en tu prÃ³ximo envÃ­o.',
  datePublished: '2026-07-23',
  dateModified: '2026-07-23',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n', url: BASE_URL },
  url: `${BASE_URL}/blog/costo-envios-internacionales-desde-colon`,
  image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Costo de envÃ­os internacionales', item: `${BASE_URL}/blog/costo-envios-internacionales-desde-colon` },
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
          <span className="text-mbe-dark font-medium">Costo de envÃ­os internacionales</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">EnvÃ­os</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Â¿CuÃ¡nto cuesta enviar un paquete internacional desde ColÃ³n, PanamÃ¡?
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE ColÃ³n</strong> Â· GuÃ­a de precios para tus envÃ­os internacionales
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si necesitas hacer un envÃ­o internacional desde ColÃ³n, lo primero que quieres saber es el precio.
            En MBE ColÃ³n trabajamos a diario con <strong>envÃ­os internacionales ColÃ³n</strong> a travÃ©s de un
            <strong> courier PanamÃ¡</strong> de confianza â€” DHL, FedEx y UPS â€” para que tus paquetes lleguen seguros
            a cualquier parte del mundo sin sorpresas en la factura final.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">CÃ³mo enviar paquetes internacionales desde ColÃ³n PanamÃ¡: quÃ© determina el precio</h2>
          <p>
            El costo final de un envÃ­o no es un nÃºmero fijo â€” depende de varias variables que el courier evalÃºa
            en el momento de cotizar. Antes de empacar, ten en cuenta lo siguiente:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Peso real vs. peso volumÃ©trico</strong> â€” el courier cobra el que resulte mayor</li>
            <li><strong>Destino final</strong> â€” Estados Unidos, Europa o LatinoamÃ©rica tienen tarifas distintas</li>
            <li><strong>Tiempo de entrega</strong> â€” un envÃ­o express cuesta mÃ¡s que uno econÃ³mico</li>
            <li><strong>Tipo de contenido</strong> â€” documentos, mercancÃ­a comercial o paqueterÃ­a personal</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Mejor courier para envÃ­os a USA desde ColÃ³n: comparando precios DHL, FedEx y UPS</h2>
          <p>
            No existe un Ãºnico &ldquo;mejor&rdquo; courier â€” depende de tu paquete y tu presupuesto. DHL suele ser
            competitivo hacia Europa y documentos urgentes. FedEx tiene buena cobertura y tarifas atractivas hacia
            Estados Unidos. UPS destaca en envÃ­os comerciales de mayor volumen. En MBE ColÃ³n cotizamos los tres al
            mismo tiempo, asÃ­ que siempre te mostramos la opciÃ³n mÃ¡s conveniente sin que tengas que investigar por
            tu cuenta â€” algo especialmente Ãºtil para empresas de la Zona Libre de ColÃ³n que despachan mercancÃ­a con
            regularidad hacia el extranjero.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">ðŸ’¡ Cotiza antes de empacar</p>
            <p className="text-gray-600 text-sm">
              Trae tu paquete ya pesado a Plaza Millenium F007, ColÃ³n, y te damos una cotizaciÃ³n gratuita
              comparando DHL, FedEx y UPS en minutos, sin compromiso.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">Â¿Listo para cotizar tu envÃ­o internacional?</h3>
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
