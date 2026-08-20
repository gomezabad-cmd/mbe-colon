import Link from 'next/link'

export const metadata = {
  title: 'Delantales y Chaquetas Bordadas para Restaurantes y Hoteles en ColÃ³n, PanamÃ¡ | MBE ColÃ³n',
  description: 'Bordamos delantales, chaquetas y uniformes para restaurantes y hoteles en ColÃ³n, PanamÃ¡. Calidad profesional y entrega rÃ¡pida en Plaza Millenium F007.',
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Delantales y Chaquetas Bordadas para Restaurantes y Hoteles en ColÃ³n, PanamÃ¡',
  description: 'Bordamos delantales, chaquetas y uniformes para restaurantes y hoteles en ColÃ³n, PanamÃ¡. Calidad profesional y entrega rÃ¡pida en Plaza Millenium F007.',
  datePublished: '2026-08-10',
  dateModified: '2026-08-10',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. ColÃ³n', url: BASE_URL },
  url: `${BASE_URL}/blog/bordados-delantales-restaurantes-hoteles-colon`,
  image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Bordados para restaurantes', item: `${BASE_URL}/blog/bordados-delantales-restaurantes-hoteles-colon` },
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
          <span className="text-mbe-dark font-medium">Bordados para restaurantes</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Bordados</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Delantales y Chaquetas Bordadas para Restaurantes y Hoteles en ColÃ³n, PanamÃ¡
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE ColÃ³n</strong> Â· Bordados personalizados para el sector gastronÃ³mico y hotelero
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si administras un restaurante, cafeterÃ­a u hotel en ColÃ³n, la imagen de tu personal habla de tu marca antes que el menÃº.
            Con nuestros <strong>bordados ColÃ³n</strong> convertimos delantales, chaquetas de cocina y camisas de servicio en uniformes
            con identidad propia, listos para usar todos los dÃ­as en tu negocio en PanamÃ¡.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">DÃ³nde bordar delantales para restaurantes en ColÃ³n, PanamÃ¡</h2>
          <p>
            En MBE ColÃ³n trabajamos con hilos de alta durabilidad, resistentes a lavados frecuentes y al calor de cocina.
            Bordamos el logo de tu restaurante u hotel directamente sobre delantales, chaquetas y mandiles, sin importar
            si necesitas 3 unidades para un local pequeÃ±o o 50 para una cadena en la Zona Libre de ColÃ³n.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Delantales de cocina</strong> â€” bordado resistente a manchas y lavados industriales</li>
            <li><strong>Chaquetas de chef</strong> â€” logo bordado en pecho o espalda, colores a elegir</li>
            <li><strong>Camisas de servicio y recepciÃ³n</strong> â€” imagen uniforme para todo el equipo de hoteles en PanamÃ¡</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Chaquetas bordadas para hoteles y negocios de comida en PanamÃ¡</h2>
          <p>
            No solo bordamos <strong>uniformes bordados PanamÃ¡</strong> para cocina: tambiÃ©n hacemos chalecos para meseros,
            gorras para personal de limpieza y polos para recepciÃ³n. Todo con el mismo estÃ¡ndar de calidad que ya usan
            empresas y PYMEs de ColÃ³n para sus equipos de trabajo.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">ðŸ’¡ Tip para tu negocio</p>
            <p className="text-gray-600 text-sm">
              Trae tu logo en alta resoluciÃ³n y te asesoramos sobre el mejor tipo de hilo segÃºn la tela.
              VisÃ­tanos en Plaza Millenium F007, ColÃ³n, y llÃ©vate tu primera muestra bordada el mismo dÃ­a.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">Dale identidad a tu equipo de trabajo</h3>
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
