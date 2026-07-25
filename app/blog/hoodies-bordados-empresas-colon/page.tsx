import Link from 'next/link'

export const metadata = {
  title: 'Hoodies Bordados con Logo para Empresas en Colón, Panamá | MBE Colón',
  description: 'Bordados personalizados para empresas en Colón Panamá: hoodies con logo de alta calidad, entrega rápida en Plaza Millenium F007. Cotiza desde 1 unidad.',
}

const BASE_URL = 'https://mbe-colon.vercel.app'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Hoodies Bordados con Logo para Empresas en Colón, Panamá',
  description: 'Bordados personalizados para empresas en Colón Panamá: hoodies con logo de alta calidad, entrega rápida en Plaza Millenium F007. Cotiza desde 1 unidad.',
  datePublished: '2026-07-25',
  dateModified: '2026-07-25',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/hoodies-bordados-empresas-colon`,
  image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Hoodies bordados empresas', item: `${BASE_URL}/blog/hoodies-bordados-empresas-colon` },
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
          <span className="text-mbe-dark font-medium">Hoodies bordados empresas</span>
        </nav>

        <span className="bg-mbe-blue text-white text-xs font-bold px-3 py-1 rounded-full">Bordados</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Hoodies bordados con logo para empresas en Colón, Panamá
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Guía de bordados corporativos para uniformar tu equipo con estilo
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Cada vez más empresas en <strong>Colón</strong> buscan una alternativa más cómoda y moderna al polo tradicional
            para uniformar a su equipo. Los <strong>bordados Colón</strong> en hoodies con logo se han vuelto una opción
            popular para oficinas, agencias de courier, talleres y negocios de la Zona Libre que quieren proyectar una
            imagen profesional sin sacrificar comodidad, especialmente en los días más frescos de <strong>Panamá</strong>.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">
            Dónde bordar hoodies con logo para empresas en Panamá
          </h2>
          <p>
            En MBE Colón bordamos directamente sobre la prenda que nos traigas, o te ayudamos a conseguir hoodies de buena
            calidad si aún no tienes proveedor. El bordado se hace en máquina industrial, lo que garantiza que el logo de
            tu empresa se mantenga nítido lavada tras lavada, sin las grietas ni el desgaste típico de la serigrafía.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Alta durabilidad</strong> — el hilo bordado resiste lavados constantes sin perder color ni forma</li>
            <li><strong>Desde 1 unidad</strong> — ideal si necesitas uniformar solo a un equipo pequeño o probar antes de escalar</li>
            <li><strong>Diseño incluido</strong> — digitalizamos tu logo para bordado sin costo adicional</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">
            Uniformes bordados con logo para empresas en Panamá: más que hoodies
          </h2>
          <p>
            Además de hoodies, en MBE Colón también bordamos gorras, polos y chaquetas para que tu equipo tenga un look
            uniforme completo. Muchas empresas en <strong>Colón, Panamá</strong> combinan hoodies para el personal
            administrativo con gorras y polos bordados para el equipo operativo, manteniendo la misma identidad de marca
            en toda la organización.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para tu próximo pedido</p>
            <p className="text-gray-600 text-sm">
              Trae tu logo en formato vectorial (AI, EPS o PNG de alta resolución) para un bordado más limpio. Visítanos
              en Plaza Millenium F007, Colón, y te asesoramos sobre el tamaño y ubicación ideal del bordado en tu hoodie.
            </p>
          </div>

          <p>
            Ya sea que necesites 5 o 50 hoodies bordados, en MBE Colón trabajamos con tiempos de entrega ágiles para que
            tu empresa en Panamá luzca profesional sin largas esperas. Cotiza tu diseño hoy mismo.
          </p>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Listo para uniformar a tu equipo?</h3>
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
