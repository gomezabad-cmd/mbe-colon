import Link from 'next/link'

export const metadata = {
  title: 'Impresión de Etiquetas y Stickers Personalizados en Colón, Panamá | MBE Colón',
  description: 'Impresión Colón de etiquetas y stickers personalizados para tu negocio en Panamá: productos, envíos y packaging. Entrega rápida en Plaza Millenium F007.',
}

const BASE_URL = 'https://mbe-colon.vercel.app'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Impresión de Etiquetas y Stickers Personalizados en Colón, Panamá',
  description: 'Impresión Colón de etiquetas y stickers personalizados para tu negocio en Panamá: productos, envíos y packaging. Entrega rápida en Plaza Millenium F007.',
  datePublished: '2026-09-11',
  dateModified: '2026-09-11',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/etiquetas-stickers-personalizados-colon`,
  image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Etiquetas y stickers', item: `${BASE_URL}/blog/etiquetas-stickers-personalizados-colon` },
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
          <span className="text-mbe-dark font-medium">Etiquetas y stickers</span>
        </nav>

        <span className="bg-mbe-blue text-white text-xs font-bold px-3 py-1 rounded-full">Impresión</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Impresión de etiquetas y stickers personalizados para tu negocio en Colón, Panamá
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Guía de impresión de etiquetas para productos y packaging
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si vendes productos, envías pedidos o simplemente quieres darle una imagen más profesional a tu marca, la
            <strong> impresión Colón</strong> de etiquetas y stickers personalizados es una de las formas más rápidas
            de lograrlo. En MBE Colón imprimimos etiquetas para productos, sellos de garantía, cajas de envío y
            packaging para negocios de todos los tamaños en <strong>Panamá</strong>.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">
            Dónde imprimir stickers y etiquetas para mi negocio en Colón, Panamá
          </h2>
          <p>
            No necesitas un pedido enorme para empezar. Trabajamos con emprendedores de la Zona Libre de Colón,
            tiendas online y pequeños talleres que necesitan etiquetas de calidad sin comprometerse a miles de
            unidades. Solo trae tu logo o diseño y te ayudamos a dejarlo listo para imprimir.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Varios acabados</strong> — mate, brillante o transparente, según el look que busques</li>
            <li><strong>Distintos tamaños y formas</strong> — redondas, cuadradas o cortadas a la medida de tu producto</li>
            <li><strong>Resistentes al agua</strong> — ideales para envíos internacionales y productos de exterior</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">
            Etiquetas personalizadas para emprendedores en Panamá
          </h2>
          <p>
            Si compras mercancía a través de tu <strong>casillero Miami</strong> para revender en Colón, unas
            etiquetas propias con tu marca y datos de contacto le dan a tus productos un toque profesional que los
            diferencia de la competencia. También imprimimos etiquetas de envío, códigos y sellos de calidad para
            complementar tu operación logística.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para tu próximo pedido</p>
            <p className="text-gray-600 text-sm">
              Trae tu diseño en alta resolución (PDF o PNG) para un resultado más nítido. Visítanos en Plaza Millenium
              F007, Colón, y te asesoramos sobre el material y acabado ideal para tu producto.
            </p>
          </div>

          <p>
            Desde etiquetas para tu primer lote de productos hasta pedidos recurrentes para tu empresa, en MBE Colón
            te ayudamos a imprimir en Panamá con tiempos de entrega rápidos y precios claros. Cotiza tu diseño hoy.
          </p>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Listo para imprimir tus etiquetas?</h3>
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
