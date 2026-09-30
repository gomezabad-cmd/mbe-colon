import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Sellos Fechadores y de Recibido en Colón | MBE Colón',
  description: 'Sellos automáticos Colón: fechadores, de recibido y pagado con el logo de tu empresa. Trodat y Colop desde $15, entrega 24-48h en Plaza Millenium, Panamá.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/sellos-fechadores-recibido-empresas-colon',
  },
  openGraph: {
    title: 'Sellos Fechadores y de Recibido en Colón | MBE Colón',
    description: 'Sellos automáticos Colón: fechadores, de recibido y pagado con el logo de tu empresa. Trodat y Colop desde $15, entrega 24-48h en Plaza Millenium, Panamá.',
    url: 'https://mbecolon.com/blog/sellos-fechadores-recibido-empresas-colon',
    siteName: 'MBE Colón',
    locale: 'es_PA',
    type: 'article',
    images: [
      { url: 'https://mbecolon.com/images/blog/photo-1603057190473-f3b6422b6320.jpg', width: 1200, height: 630, alt: 'Sello de goma de oficina para recibido y control de documentos en Colón, Panamá' },
    ],
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Sellos Fechadores y de Recibido para Empresas en Colón, Panamá',
  description: 'Sellos automáticos Colón: fechadores, de recibido y pagado con el logo de tu empresa. Trodat y Colop desde $15, entrega 24-48h en Plaza Millenium, Panamá.',
  datePublished: '2026-09-30',
  dateModified: '2026-09-30',
  author: {
    '@type': 'Person',
    name: 'Carlos Gómez',
    jobTitle: 'Franquiciado de MBE Colón',
    url: 'https://mbecolon.com/nosotros',
    worksFor: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
    sameAs: ['https://www.linkedin.com/in/carlos-gomez-ab217930/', 'https://www.instagram.com/mbecolon', 'https://www.tiktok.com/@mbecolon'],
  },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/sellos-fechadores-recibido-empresas-colon`,
  image: 'https://mbecolon.com/images/blog/photo-1603057190473-f3b6422b6320.jpg',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Sellos Fechadores', item: `${BASE_URL}/blog/sellos-fechadores-recibido-empresas-colon` },
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
          <span className="text-mbe-dark font-medium">Sellos Fechadores</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Sellos</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Sellos Fechadores y de Recibido para Empresas en Colón, Panamá
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6 flex items-center gap-3">
          <Image src="/images/carlos-gomez.jpg" alt="Carlos Gómez, Franquiciado de MBE Colón" width={44} height={44} className="w-11 h-11 rounded-full object-cover shrink-0" />
          Por <strong className="text-mbe-dark">Carlos Gómez</strong> · Franquiciado de MBE Colón · Sellos automáticos para control de facturas, documentos y mercancía
        </p>
        <p className="text-mbe-dark text-lg font-medium leading-relaxed bg-mbe-light rounded-2xl p-6 border-l-4 border-mbe-red mb-8">
          MBE Colón fabrica sellos fechadores y de recibido con el nombre y logo de tu empresa en Colón, Panamá. Los sellos automáticos Trodat y Colop arrancan desde $15.00, los de goma desde $8.00, e incluyen tinta inicial. Se entregan en 24 a 48 horas hábiles en Plaza Millenium F007.
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            En una oficina con movimiento diario, cada factura, guía o nota de entrega necesita un registro claro de
            cuándo llegó y quién la recibió. Los <strong>sellos automáticos Colón</strong> con fecha resuelven esa
            tarea en un segundo y le dan a tu empresa un control documental ordenado y profesional.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Dónde hacer sellos automáticos personalizados en Colón, Panamá para tu oficina</h2>
          <p>
            En MBE Colón fabricamos <strong>sellos fechadores</strong> y sellos administrativos con los datos de tu
            negocio. Son ideales para contabilidad, bodegas, recepción y compras, las áreas que más papeles manejan.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Sello de recibido con fecha</strong> — registra el día exacto en que entra cada documento o factura.</li>
            <li><strong>Sello de pagado</strong> — evita pagos duplicados y facilita las auditorías contables.</li>
            <li><strong>Sello de copia u original</strong> — distingue documentos al archivar o enviar a clientes.</li>
            <li><strong>Sello de despachado</strong> — confirma la salida de mercancía en bodegas y almacenes.</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Sello de recibido con fecha para empresas de la Zona Libre de Colón</h2>
          <p>
            Los operadores de la Zona Libre de Colón procesan cada semana facturas comerciales, listas de empaque y
            guías de carga. Un <strong>sello fechador personalizado</strong> con el nombre de la empresa y un espacio
            para firma agiliza la recepción de mercancía y deja evidencia clara ante proveedores y aduana.
          </p>
          <p>
            También hacemos <strong>sellos personalizados Panamá</strong> para PYMEs, clínicas, colegios y despachos
            contables. Si buscas sellos para abogados y empresas en Colón, puedes combinar en un solo pedido el sello
            de firma, el fechador y el sello con el RUC de tu negocio.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">¿Qué modelo de sello fechador elegir?</h2>
          <p>
            Trabajamos modelos automáticos <strong>Trodat</strong> y <strong>Colop</strong> autoentintables, que
            resisten miles de impresiones. Para uso intensivo recomendamos fechadores con banda de fecha ajustable y
            placa de texto fija: cambias el día con una rueda y el diseño de tu empresa se mantiene igual.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para tu departamento administrativo</p>
            <p className="text-gray-600 text-sm">
              Pide tu fechador con una línea para iniciales o firma: así sabes no solo cuándo llegó el documento, sino
              quién lo recibió. Trae tu logo en alta resolución a Plaza Millenium F007, Colón, y revisamos contigo el
              diseño antes de fabricarlo.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Necesitas sellos fechadores para tu empresa?</h3>
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
