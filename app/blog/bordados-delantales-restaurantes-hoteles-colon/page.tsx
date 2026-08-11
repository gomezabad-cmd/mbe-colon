import Link from 'next/link'

export const metadata = {
  title: 'Delantales y Chaquetas Bordadas para Restaurantes y Hoteles en Colón, Panamá | MBE Colón',
  description: 'Bordamos delantales, chaquetas y uniformes para restaurantes y hoteles en Colón, Panamá. Calidad profesional y entrega rápida en Plaza Millenium F007.',
}

const BASE_URL = 'https://mbe-colon.vercel.app'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Delantales y Chaquetas Bordadas para Restaurantes y Hoteles en Colón, Panamá',
  description: 'Bordamos delantales, chaquetas y uniformes para restaurantes y hoteles en Colón, Panamá. Calidad profesional y entrega rápida en Plaza Millenium F007.',
  datePublished: '2026-08-10',
  dateModified: '2026-08-10',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
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
          <span>›</span>
          <Link href="/blog" className="hover:text-mbe-red transition-colors">Blog</Link>
          <span>›</span>
          <span className="text-mbe-dark font-medium">Bordados para restaurantes</span>
        </nav>

        <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Bordados</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Delantales y Chaquetas Bordadas para Restaurantes y Hoteles en Colón, Panamá
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Bordados personalizados para el sector gastronómico y hotelero
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Si administras un restaurante, cafetería u hotel en Colón, la imagen de tu personal habla de tu marca antes que el menú.
            Con nuestros <strong>bordados Colón</strong> convertimos delantales, chaquetas de cocina y camisas de servicio en uniformes
            con identidad propia, listos para usar todos los días en tu negocio en Panamá.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Dónde bordar delantales para restaurantes en Colón, Panamá</h2>
          <p>
            En MBE Colón trabajamos con hilos de alta durabilidad, resistentes a lavados frecuentes y al calor de cocina.
            Bordamos el logo de tu restaurante u hotel directamente sobre delantales, chaquetas y mandiles, sin importar
            si necesitas 3 unidades para un local pequeño o 50 para una cadena en la Zona Libre de Colón.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Delantales de cocina</strong> — bordado resistente a manchas y lavados industriales</li>
            <li><strong>Chaquetas de chef</strong> — logo bordado en pecho o espalda, colores a elegir</li>
            <li><strong>Camisas de servicio y recepción</strong> — imagen uniforme para todo el equipo de hoteles en Panamá</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Chaquetas bordadas para hoteles y negocios de comida en Panamá</h2>
          <p>
            No solo bordamos <strong>uniformes bordados Panamá</strong> para cocina: también hacemos chalecos para meseros,
            gorras para personal de limpieza y polos para recepción. Todo con el mismo estándar de calidad que ya usan
            empresas y PYMEs de Colón para sus equipos de trabajo.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para tu negocio</p>
            <p className="text-gray-600 text-sm">
              Trae tu logo en alta resolución y te asesoramos sobre el mejor tipo de hilo según la tela.
              Visítanos en Plaza Millenium F007, Colón, y llévate tu primera muestra bordada el mismo día.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">Dale identidad a tu equipo de trabajo</h3>
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
