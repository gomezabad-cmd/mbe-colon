import Link from 'next/link'

export const metadata = {
  title: 'Cuánto Cuesta Enviar un Paquete Internacional desde Colón, Panamá | MBE Colón',
  description: 'Descubre cuánto cuesta un envío internacional desde Colón con DHL, FedEx y UPS. Cotiza tu courier Panamá en Plaza Millenium F007 y ahorra en tu próximo envío.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/costo-envios-internacionales-desde-colon',
  },
}

const BASE_URL = 'https://mbe-colon.vercel.app'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '¿Cuánto cuesta enviar un paquete internacional desde Colón, Panamá?',
  description: 'Descubre cuánto cuesta un envío internacional desde Colón con DHL, FedEx y UPS. Cotiza tu courier Panamá en Plaza Millenium F007 y ahorra en tu próximo envío.',
  datePublished: '2026-07-23',
  dateModified: '2026-07-23',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/costo-envios-internacionales-desde-colon`,
  image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Costo de envíos internacionales', item: `${BASE_URL}/blog/costo-envios-internacionales-desde-colon` },
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
          <span className="text-mbe-dark font-medium">Costo de envíos internacionales</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Envíos</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          ¿Cuánto cuesta enviar un paquete internacional desde Colón, Panamá?
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Guía de precios para tus envíos internacionales
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si necesitas hacer un envío internacional desde Colón, lo primero que quieres saber es el precio.
            En MBE Colón trabajamos a diario con <strong>envíos internacionales Colón</strong> a través de un
            <strong> courier Panamá</strong> de confianza — DHL, FedEx y UPS — para que tus paquetes lleguen seguros
            a cualquier parte del mundo sin sorpresas en la factura final.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Cómo enviar paquetes internacionales desde Colón Panamá: qué determina el precio</h2>
          <p>
            El costo final de un envío no es un número fijo — depende de varias variables que el courier evalúa
            en el momento de cotizar. Antes de empacar, ten en cuenta lo siguiente:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Peso real vs. peso volumétrico</strong> — el courier cobra el que resulte mayor</li>
            <li><strong>Destino final</strong> — Estados Unidos, Europa o Latinoamérica tienen tarifas distintas</li>
            <li><strong>Tiempo de entrega</strong> — un envío express cuesta más que uno económico</li>
            <li><strong>Tipo de contenido</strong> — documentos, mercancía comercial o paquetería personal</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Mejor courier para envíos a USA desde Colón: comparando precios DHL, FedEx y UPS</h2>
          <p>
            No existe un único &ldquo;mejor&rdquo; courier — depende de tu paquete y tu presupuesto. DHL suele ser
            competitivo hacia Europa y documentos urgentes. FedEx tiene buena cobertura y tarifas atractivas hacia
            Estados Unidos. UPS destaca en envíos comerciales de mayor volumen. En MBE Colón cotizamos los tres al
            mismo tiempo, así que siempre te mostramos la opción más conveniente sin que tengas que investigar por
            tu cuenta — algo especialmente útil para empresas de la Zona Libre de Colón que despachan mercancía con
            regularidad hacia el extranjero.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Cotiza antes de empacar</p>
            <p className="text-gray-600 text-sm">
              Trae tu paquete ya pesado a Plaza Millenium F007, Colón, y te damos una cotización gratuita
              comparando DHL, FedEx y UPS en minutos, sin compromiso.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Listo para cotizar tu envío internacional?</h3>
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
