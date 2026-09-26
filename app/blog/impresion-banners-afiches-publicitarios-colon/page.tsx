import Link from 'next/link'

export const metadata = {
  title: 'Impresión de banners y afiches publicitarios | MBE Colón',
  description: 'Impresión de banners publicitarios en Colón Panamá para tu negocio. Afiches, pendones y vinil de alta calidad, entrega en 24-48h en Plaza Millenium F007.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/impresion-banners-afiches-publicitarios-colon',
  },
  openGraph: {
    title: 'Impresión de banners y afiches publicitarios | MBE Colón',
    description: 'Impresión de banners publicitarios en Colón Panamá para tu negocio. Afiches, pendones y vinil de alta calidad, entrega en 24-48h en Plaza Millenium F007.',
    url: 'https://mbecolon.com/blog/impresion-banners-afiches-publicitarios-colon',
    siteName: 'MBE Colón',
    locale: 'es_PA',
    type: 'article',
    images: [
      { url: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=1200&h=630&fit=crop&q=80', width: 1200, height: 630, alt: 'Impresión de Banners y Afiches Publicitarios en Colón, Panamá' },
    ],
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Impresión de Banners y Afiches Publicitarios en Colón, Panamá',
  description: 'Impresión de banners publicitarios en Colón Panamá para tu negocio. Afiches, pendones y vinil de alta calidad, entrega en 24-48h en Plaza Millenium F007.',
  datePublished: '2026-07-31',
  dateModified: '2026-09-24',
  author: {
    '@type': 'Person',
    name: 'Carlos Gómez',
    jobTitle: 'Franquiciado de MBE Colón',
    url: 'https://mbecolon.com/nosotros',
    sameAs: ['https://www.instagram.com/mbecolon', 'https://www.tiktok.com/@mbecolon'],
    worksFor: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/impresion-banners-afiches-publicitarios-colon`,
  image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Banners y afiches', item: `${BASE_URL}/blog/impresion-banners-afiches-publicitarios-colon` },
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
          <span className="text-mbe-dark font-medium">Banners y afiches</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Impresión</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Impresión de Banners y Afiches Publicitarios en Colón, Panamá
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">Carlos Gómez</strong> · Franquiciado de MBE Colón · Guía para promocionar tu negocio con impresión de alto impacto
        </p>
        <p className="text-mbe-dark text-lg font-medium leading-relaxed bg-mbe-light rounded-2xl p-6 border-l-4 border-mbe-red mb-8">
          MBE Colón imprime banners, afiches, pendones y vinil publicitario en Colón con impresión a color y acabado profesional. Los trabajos de impresión se entregan el mismo día en formatos estándar y en 24 a 48 horas en los mayores, y el precio se cotiza por formato y cantidad desde Plaza Millenium F007.
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Un buen <strong>banner publicitario</strong> vende antes de que el cliente entre a tu local. Si buscas
            <strong> impresión Colón</strong> para promociones, aperturas o eventos, en MBE Colón producimos banners,
            pendones y afiches con calidad profesional y entrega rápida en Panamá.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Dónde imprimir banners publicitarios en Colón Panamá</h2>
          <p>
            Muchas empresas en Colón pierden ventas por usar material promocional de baja calidad o por depender de
            proveedores lentos. Nuestro centro de impresión en <strong>Plaza Millenium F007</strong> resuelve esto con
            producción local, sin esperar envíos desde Ciudad de Panamá.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Banners en vinil</strong> — resistentes a sol y lluvia, ideales para exteriores en Colón</li>
            <li><strong>Pendones roll-up</strong> — perfectos para ferias, congresos y puntos de venta</li>
            <li><strong>Afiches y posters</strong> — full color, distintos tamaños según tu presupuesto</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Banners publicitarios Panamá: calidad que representa tu marca</h2>
          <p>
            Trabajamos con tintas de alta durabilidad y acabados profesionales para que tu banner se vea impecable
            desde el primer día hasta el último evento. Ya sea para una promoción temporal o señalización permanente
            de tu negocio en Colón, ajustamos el material según el uso.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para tu próxima campaña</p>
            <p className="text-gray-600 text-sm">
              Trae tu diseño en alta resolución (o pídenos ayuda con el arte) y retira tu banner listo en 24-48h.
              Visítanos en Plaza Millenium F007, Colón, Panamá.
            </p>
          </div>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Tamaños de banner y afiche: cómo elegir el correcto</h2>
          <p>
            El tamaño se define por dónde se va a colocar y a qué distancia se lee, no por el gusto
            personal. Antes de mandar a imprimir, mide el espacio real y comprueba desde dónde verá
            el mensaje tu cliente.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Vinil de 1 × 2 m o 2 × 3 m</strong> — fachadas, bardas y cercas en Colón; se ve desde la acera opuesta</li>
            <li><strong>Roll-up de 0,85 × 2 m</strong> — ferias, congresos y punto de venta; va en su estuche y se arma en segundos</li>
            <li><strong>Afiche de 50 × 70 cm</strong> — interiores, vitrinas y avisos de promoción en el local</li>
            <li><strong>Tablero de 60 × 90 cm</strong> — señalización interna, horarios y directorio de oficina</li>
          </ul>

          <p>
            Para exteriores añade ojales y refuerzo en los bordes: en Colón la humedad y el viento
            caribbeanos desgastan rápido cualquier material sin reforzar.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Qué necesitas para imprimir en MBE Colón</h2>
          <p>
            Solo necesitas tu archivo en PDF, AI, PSD o PNG con buena resolución y las medidas del
            soporte. Si el archivo está en baja resolución, nuestro equipo de diseño lo rehace por ti
            sin costo adicional para que el banner salga nítido y no pixelado.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Formato</strong> — PDF o AI preferible, con tipografías convertidas a curvas</li>
            <li><strong>Resolución</strong> — 150 dpi al tamaño final para piezas de gran formato</li>
            <li><strong>Margen</strong> — 3 cm de sangrado para no cortar texto ni logos</li>
            <li><strong>Color</strong> — si necesitas el color exacto de tu marca, envíanos el código Pantone</li>
          </ul>

          <p>
            Además de banners, en <Link href="/servicios/impresion" className="text-mbe-red font-semibold hover:underline">nuestro
            servicio de impresión</Link> producimos <Link href="/blog/etiquetas-stickers-personalizados-colon" className="text-mbe-red font-semibold hover:underline">etiquetas
            y stickers</Link>, <Link href="/blog/impresion-tarjetas-embalaje-profesional-colon" className="text-mbe-red font-semibold hover:underline">tarjetas
            de negocio</Link> y <Link href="/blog/impresion-planos-brochures-colon" className="text-mbe-red font-semibold hover:underline">planos
            y brochures</Link>, así puedes surtir toda tu papelería en un solo lugar.
          </p>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Listo para imprimir tu banner?</h3>
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
