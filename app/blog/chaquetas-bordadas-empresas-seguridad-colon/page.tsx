import Link from 'next/link'

export const metadata = {
  title: 'Chaquetas y Camisas Bordadas para Empresas de Seguridad en Colón, Panamá | MBE Colón',
  description: 'Bordados Colón para empresas de seguridad: chaquetas y camisas con logo bordado, alta durabilidad. Entrega rápida en Plaza Millenium F007, Panamá.',
}

const BASE_URL = 'https://mbe-colon.vercel.app'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Chaquetas y Camisas Bordadas para Empresas de Seguridad en Colón, Panamá',
  description: 'Bordados Colón para empresas de seguridad: chaquetas y camisas con logo bordado, alta durabilidad. Entrega rápida en Plaza Millenium F007, Panamá.',
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/chaquetas-bordadas-empresas-seguridad-colon`,
  image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=1200&h=630&fit=crop&q=80',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Bordados para Seguridad', item: `${BASE_URL}/blog/chaquetas-bordadas-empresas-seguridad-colon` },
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
          <span className="text-mbe-dark font-medium">Bordados para Seguridad</span>
        </nav>

        <span className="bg-mbe-blue text-white text-xs font-bold px-3 py-1 rounded-full">Bordados</span>

        <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
          Chaquetas y Camisas Bordadas para Empresas de Seguridad en Colón, Panamá
        </h1>

        <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          Por <strong className="text-mbe-dark">MBE Colón</strong> · Uniformes bordados de alta durabilidad para empresas de vigilancia
        </p>

        <div className="space-y-6 text-mbe-gray leading-relaxed">

          <p>
            Las empresas de seguridad y vigilancia necesitan uniformes que se vean profesionales turno tras turno.
            Los <strong>bordados Colón</strong> son la opción más resistente para identificar a tu personal en la calle,
            en edificios corporativos o en la Zona Libre de Colón, Panamá, sin que el logo se agriete o se despegue
            con el uso diario.
          </p>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Dónde bordar uniformes de seguridad con logo en Colón, Panamá</h2>
          <p>
            En MBE Colón bordamos chaquetas, camisas tipo polo y gorras para empresas de vigilancia con hilo de alta
            resistencia, ideal para turnos largos, lluvia y sol. Trabajamos con logos de una o varias tintas y
            entregamos pedidos corporativos completos para tu empresa en Colón, Panamá.
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Durabilidad superior</strong> — el bordado no se cuartea ni se desvanece con lavados frecuentes.</li>
            <li><strong>Imagen profesional</strong> — un logo bordado transmite más seriedad que uno estampado en clientes y visitantes.</li>
            <li><strong>Pedidos desde 1 unidad</strong> — perfecto para reemplazar prendas dañadas sin esperar un lote grande.</li>
          </ul>

          <h2 className="text-mbe-dark text-xl font-black mt-8">Chaquetas bordadas vs. estampadas: por qué elegir bordado para vigilancia</h2>
          <p>
            A diferencia del vinil estampado, el <strong>bordado personalizado</strong> resiste fricción constante con
            chalecos, radios y cinturones tácticos. Por eso, empresas de seguridad en Colón y en toda Panamá prefieren
            uniformes bordados para su personal de campo: el logo se mantiene intacto durante todo el ciclo de vida
            de la prenda, reduciendo el costo de reposición.
          </p>

          <p>
            Si tu empresa opera en la Zona Libre de Colón o brinda seguridad a edificios comerciales en Panamá, tener
            <strong> uniformes bordados</strong> consistentes en todo tu equipo refuerza la confianza de tus clientes
            desde el primer contacto visual.
          </p>

          <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
            <p className="font-bold text-mbe-dark mb-2">💡 Tip para empresas de seguridad</p>
            <p className="text-gray-600 text-sm">
              Trae tu logo en alta resolución y te asesoramos sobre la mejor ubicación de bordado (pecho, manga o
              espalda) para máxima visibilidad. Visítanos en Plaza Millenium F007, Colón, o coordina la recogida de
              tu pedido corporativo.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
          <h3 className="text-white font-black text-xl mb-2">¿Necesitas uniformes bordados para tu empresa de seguridad?</h3>
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
