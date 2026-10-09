import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Black Friday con Casillero Miami en Colón | MBE Colón',
  description: 'Casillero Miami para Black Friday en Colón, Panamá: activación gratis, aéreo desde $3.00/lb y entrega en 24-48h desde Miami. Prepara tus compras USA.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/black-friday-casillero-miami-colon',
  },
  openGraph: {
    title: 'Black Friday con Casillero Miami en Colón | MBE Colón',
    description: 'Casillero Miami para Black Friday en Colón, Panamá: activación gratis, aéreo desde $3.00/lb y entrega en 24-48h desde Miami. Prepara tus compras USA.',
    url: 'https://mbecolon.com/blog/black-friday-casillero-miami-colon',
    siteName: 'MBE Colón',
    locale: 'es_PA',
    type: 'article',
    images: [
      { url: 'https://mbecolon.com/images/blog/photo-1607082348824-0a96f2a4b9da.jpg', width: 1200, height: 630, alt: 'Bolsas de compra rojas y negras de Black Friday con casillero Miami en Colón, Panamá' },
    ],
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Black Friday con Casillero Miami: Cómo Comprar en USA y Recibir en Colón, Panamá',
  description: 'Casillero Miami para Black Friday en Colón, Panamá: activación gratis, aéreo desde $3.00/lb y entrega en 24-48h desde Miami. Prepara tus compras USA.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  author: {
    '@type': 'Person',
    name: 'Carlos Gómez',
    jobTitle: 'Franquiciado de MBE Colón',
    url: 'https://mbecolon.com/nosotros',
    worksFor: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
    sameAs: ['https://www.linkedin.com/in/carlos-gomez-ab217930/', 'https://www.instagram.com/mbecolon', 'https://www.tiktok.com/@mbecolon'],
  },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/black-friday-casillero-miami-colon`,
  image: 'https://mbecolon.com/images/blog/photo-1607082348824-0a96f2a4b9da.jpg',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Black Friday con Casillero', item: `${BASE_URL}/blog/black-friday-casillero-miami-colon` },
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
          <span className="text-mbe-dark font-medium">Black Friday con Casillero</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Casillero</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Black Friday con Casillero Miami: Cómo Comprar en USA y Recibir en Colón, Panamá
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6 flex items-center gap-3">
          <Image src="/images/carlos-gomez.jpg" alt="Carlos Gómez, Franquiciado de MBE Colón" width={44} height={44} className="w-11 h-11 rounded-full object-cover shrink-0" />
          Por <strong className="text-mbe-dark">Carlos Gómez</strong> · Franquiciado de MBE Colón · Compras USA Panamá en temporada de ofertas
        </p>
        <p className="text-mbe-dark text-lg font-medium leading-relaxed bg-mbe-light rounded-2xl p-6 border-l-4 border-mbe-red mb-8">
          Con un casillero Miami activado antes del Black Friday compras en tiendas de USA y recibes tus paquetes en Colón, Panamá. La activación es gratis, el flete aéreo parte desde $3.00 por libra y tus compras llegan en 24 a 48 horas desde Miami a Plaza Millenium F007.
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            El Black Friday es la mejor época para las <strong>compras USA Panamá</strong>: laptops, celulares, ropa
            y juguetes con descuentos que en Colón casi nunca se ven. Pero muchas tiendas no envían a Panamá, y ahí
            es donde tu <strong>casillero Miami</strong> marca la diferencia: compras con una dirección de Estados
            Unidos y nosotros te lo traemos hasta Plaza Millenium, sin que tengas que viajar ni depender de
            intermediarios.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Casillero Miami gratis para comprar en USA desde Colón</h2>
          <p>
            Activar tu <strong>casillero Colón</strong> con MBE no cuesta nada: sin cuota mensual ni comisión de
            activación. Solo pagas el flete cuando llega tu mercancía. Hazlo antes de noviembre para tener tu
            dirección lista cuando empiecen las ofertas:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Dirección en Miami</strong> — 2250 NW 114th Ave Unit 1P, Miami, FL 33172</li>
            <li><strong>Aéreo desde $3.00/lb</strong> — la opción rápida para tecnología y ropa</li>
            <li><strong>Marítimo desde $6.00/ft³</strong> — conveniente para artículos grandes o pesados</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Cómo recibir paquetes de Amazon en Colón Panamá en Black Friday</h2>
          <p>
            Compra en Amazon, eBay o Shein usando tu dirección de Miami como dirección de envío. Cuando el paquete
            llega a nuestra bodega te avisamos y lo enviamos a Colón. La
            entrega desde Miami toma de 24 a 48 horas.
          </p>
          <p>
            En fechas de alto volumen los paquetes pueden tardar más en llegar a Miami, así que compra con margen y
            evita dejar los regalos para la última semana. Recuerda que al importar a Panamá se paga el arancel según
            la categoría del producto más el ITBMS del 7%, y MBE Colón gestiona la documentación aduanera por ti.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para Black Friday</p>
            <p className="text-gray-600 text-sm">
              Haz una lista de compras y revisa el peso aproximado de cada artículo antes de pagar: el flete se
              calcula por libra. Si tienes dudas, pasa por Plaza Millenium F007, Colón, y te ayudamos a estimar el costo.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">Activa tu casillero antes del Black Friday</h3>
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
