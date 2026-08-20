import Link from 'next/link'

export const metadata = {
  title: 'Cómo comprar en Shein y eBay desde Colón con tu casillero Miami | MBE Colón',
  description: 'Guía para comprar en Shein y eBay y recibir tus paquetes en Colón, Panamá con el casillero Miami de MBE. Rápido, seguro y sin complicaciones.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/casillero-miami-shein-ebay-colon',
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Cómo comprar en Shein y eBay desde Colón con tu casillero Miami',
  description: 'Guía para comprar en Shein y eBay y recibir tus paquetes en Colón, Panamá con el casillero Miami de MBE. Rápido, seguro y sin complicaciones.',
  datePublished: '2026-07-20',
  dateModified: '2026-07-20',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/casillero-miami-shein-ebay-colon`,
  image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Shein y eBay con casillero Miami', item: `${BASE_URL}/blog/casillero-miami-shein-ebay-colon` },
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
          <span className="text-mbe-dark font-medium">Shein y eBay con casillero Miami</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Casillero</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Cómo comprar en Shein y eBay desde Colón con tu casillero Miami
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Compras USA Panamá sin complicaciones
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Comprar en Shein, eBay o cualquier tienda de USA ya no es solo para quien viaja seguido a Miami. Con tu <strong>casillero Miami</strong> de MBE puedes comprar en cientos de tiendas americanas y recibir todo directo en Colón, Panamá, sin pagar envíos internacionales por separado ni depender de terceros.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Cómo recibir paquetes de Shein en Colón, Panamá</h2>
          <p>
            El proceso es simple: te registras, usas tu dirección de casillero en Miami como dirección de envío al comprar en Shein o eBay, y nosotros consolidamos tus pedidos. Cuando el paquete llega a nuestra bodega en Miami, lo enviamos a Colón en 24 a 48 horas.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Una sola dirección para todo</strong> — Amazon, Shein, eBay y más tiendas usan el mismo casillero.</li>
            <li><strong>Consolidación de paquetes</strong> — varios pedidos se agrupan en un solo envío a Colón.</li>
            <li><strong>Seguimiento en línea</strong> — sabes en qué etapa está tu paquete desde que llega a Miami.</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Casillero Miami gratis para comprar en USA desde Colón</h2>
          <p>
            Abrir tu casillero Miami con MBE Colón no tiene costo de inscripción. Solo pagas por el envío cuando decides traer tus paquetes a Panamá. Así puedes aprovechar ofertas de eBay, comparar precios en Shein y comprar tecnología, ropa o repuestos sin las restricciones de las tiendas locales.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para tus compras USA Panamá</p>
            <p className="text-gray-600 text-sm">
              Antes de comprar en Shein o eBay, revisa el peso y tamaño estimado del paquete: te ayuda a calcular el costo de envío a Colón con anticipación. Si tienes dudas, pasa por Plaza Millenium F007 y te asesoramos en persona.
            </p>
          </div>

          <p>
            Ya sea que compres ropa en Shein, artículos de colección en eBay o cualquier producto disponible solo en USA, tu casillero Miami en Colón, Panamá te da acceso directo al mercado americano. MBE Colón se encarga de la logística para que tú solo te preocupes por elegir qué comprar.
          </p>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">Abre tu casillero Miami hoy mismo</h3>
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
