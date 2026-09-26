import Link from 'next/link'

export const metadata = {
  title: 'Seguro para Envíos Internacionales desde Colón, Panamá | MBE Colón',
  description: 'Cómo asegurar tu paquete internacional desde Colón, Panamá. Protege tus envíos con DHL, FedEx y UPS y evita pérdidas en tu courier.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/seguro-envios-internacionales-colon',
  },
  openGraph: {
    title: 'Seguro para Envíos Internacionales desde Colón, Panamá | MBE Colón',
    description: 'Cómo asegurar tu paquete internacional desde Colón, Panamá. Protege tus envíos con DHL, FedEx y UPS y evita pérdidas en tu courier.',
    url: 'https://mbecolon.com/blog/seguro-envios-internacionales-colon',
    siteName: 'MBE Colón',
    locale: 'es_PA',
    type: 'article',
    images: [
      { url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=630&fit=crop&q=80', width: 1200, height: 630, alt: 'Seguro para Envíos Internacionales desde Colón, Panamá' },
    ],
  },}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Seguro para tus Envíos Internacionales: Protege tus Paquetes desde Colón, Panamá',
  description: 'Cómo asegurar tu paquete internacional desde Colón, Panamá. Protege tus envíos con DHL, FedEx y UPS y evita pérdidas en tu courier.',
  datePublished: '2026-08-05',
  dateModified: '2026-09-24',
  author: {
    '@type': 'Person',
    name: 'Equipo de Logística de MBE Colón',
    jobTitle: 'Servicio de logística y envíos',
    worksFor: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/seguro-envios-internacionales-colon`,
  image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Seguro de envíos', item: `${BASE_URL}/blog/seguro-envios-internacionales-colon` },
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
          <span className="text-mbe-dark font-medium">Seguro de envíos</span>
        </nav>

        <span className="bg-mbe-blue text-white text-xs font-bold px-3 py-1 rounded-full">Envíos</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Seguro para tus Envíos Internacionales: Protege tus Paquetes desde Colón, Panamá
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">Equipo de Logística de MBE Colón</strong> · Cómo asegurar tu paquete internacional y evitar pérdidas en tu courier
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Cada semana recibimos la misma pregunta en Colón, Panamá: <strong>&quot;¿qué pasa si mi paquete se pierde o llega dañado?&quot;</strong>.
            Para tus <strong>envíos internacionales Colón</strong>, la respuesta es simple: un seguro de envío bien elegido evita
            dolores de cabeza y pérdidas económicas cuando algo sale mal en el camino.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Cómo asegurar mi paquete internacional desde Colón Panamá</h2>
          <p>
            Todo envío con <strong>courier Panamá</strong> —ya sea DHL, FedEx o UPS— permite declarar un valor asegurado.
            En MBE Colón te ayudamos a calcular la cobertura correcta según el valor real de tu mercancía, para que
            no pagues de más ni te quedes corto si necesitas reclamar.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Declara el valor real</strong> — subestimar el paquete reduce tu compensación en caso de pérdida.</li>
            <li><strong>Guarda evidencia fotográfica</strong> — fotos del contenido y del empaque antes de sellar la caja.</li>
            <li><strong>Conserva tu comprobante</strong> — factura o recibo de compra para respaldar cualquier reclamo.</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Mejor courier para envíos a USA desde Colón</h2>
          <p>
            No todos los couriers manejan igual los reclamos por daño o pérdida. En MBE Colón trabajamos con
            <strong> DHL Colón</strong>, FedEx y UPS, y te orientamos sobre cuál ofrece el mejor tiempo de respuesta
            y cobertura según el destino de tu envío internacional.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Qué hacer si mi paquete se pierde o daña en el envío</p>
            <p className="text-gray-600 text-sm">
              Repórtalo de inmediato en Plaza Millenium F007, Colón. Entre más rápido abramos el caso con el courier,
              más rápida es la resolución y el reembolso.
            </p>
          </div>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Cuánto cuesta asegurar un envío internacional</h2>
          <p>
            El valor asegurado se declara sobre el <strong>costo real</strong> de la mercancía, no sobre el
            precio que pensaste pagar. Si declara menos de lo que vale tu paquete, la compensación en caso
            de siniestro se reduce en la misma proporción: un envío declarado en la mitad de su valor real
            solo se reembolsa hasta la mitad.
          </p>
          <p>
            Antes de enviar, revisa el <Link href="/blog/costo-envios-internacionales-desde-colon" className="text-mbe-red font-semibold hover:underline">costo
            de envío internacional desde Colón</Link> y suma el seguro a tu presupuesto. En MBE Colón te
            cotizamos la cobertura junto con el flete para que sepas el total antes de despachar.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Qué NO cubre el seguro de envío</h2>
          <p>
            Conviene saber los límites antes de reclamar. La cobertura estándar de los couriers suele
            excluir una lista corta de casos:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Documentos y valores</strong> — efectivo, cheques, tarjetas y joyas van por otra vía</li>
            <li><strong>Bienes perecederos</strong> — alimentos sin conservación, plantas y flores</li>
            <li><strong>Embalaje inadecuado</strong> — si la caja no protege el contenido, el reclamo se rechaza</li>
            <li><strong>Daño por contenido mal declarado</strong> — líquidos o frágiles que no se identificaron al despachar</li>
          </ul>

          <p>
            Por eso el empaque es parte del seguro: un artículo bien embalado reduce el riesgo de daño y
            respalda tu reclamo si ocurre. Consulta <Link href="/blog/como-empacar-paquetes" className="text-mbe-red font-semibold hover:underline">cómo
            empacar paquetes</Link> antes de enviar.
          </p>

          <p>
            Si tu envío es por barco, revisa también la <Link href="/servicios/envios-internacionales" className="text-mbe-red font-semibold hover:underline">cobertura
            de nuestros envíos internacionales</Link> y las opciones de <Link href="/servicios/carga-maritima" className="text-mbe-red font-semibold hover:underline">carga
            marítima</Link> para mercancía de mayor volumen.
          </p>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">Envía con la tranquilidad de estar protegido</h3>
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
