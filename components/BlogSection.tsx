import Link from 'next/link'
import Image from 'next/image'

const POSTS = [
  {
    categoria: 'Bordados',
    titulo: 'Gorras y polos bordados con logo para empresas en Colón, Panamá',
    desc: 'Bordados de calidad en Colón: gorras y polos con logo para empresas y PYMEs, desde 1 unidad. Plaza Millenium F007.',
    badge: 'bg-mbe-blue',
    href: '/blog/bordados-gorras-polos-empresas-colon',
    img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Gorras y polos bordados con logo para empresas en Colón, Panamá',
  },
  {
    categoria: 'Envíos',
    titulo: 'Envíos internacionales desde Colón: ¿DHL, FedEx o UPS? Guía para elegir tu courier',
    desc: 'Compara DHL, FedEx y UPS para tus envíos internacionales desde Colón, Panamá según destino, peso y presupuesto.',
    badge: 'bg-mbe-red',
    href: '/blog/envios-internacionales-dhl-fedex-ups-colon',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Cajas de paquetes para envíos internacionales desde Colón, Panamá',
  },
  {
    categoria: 'Logística',
    titulo: 'Logística en Colón para PYMEs y operadores de la Zona Libre: todo en un solo lugar',
    desc: 'Carga marítima Miami-Panamá, DHL, FedEx y UPS con entrega en 24-48h. Tu aliado logístico en Colón, Panamá.',
    badge: 'bg-mbe-blue',
    href: '/blog/logistica-pymes-zona-libre-colon',
    img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Almacén logístico para empresas y PYMEs en Colón, Panamá',
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="bg-mbe-light py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Título de sección */}
        <div className="text-center mb-10">
          <div className="text-mbe-red text-xs font-bold tracking-widest uppercase mb-3">
            📰 Noticias y Consejos
          </div>
          <h2 className="text-mbe-dark text-3xl md:text-4xl font-black mb-4">
            MBE <span className="text-mbe-red">Informa</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Tips de envíos, novedades logísticas, guías de compras internacionales y todo lo que necesitas saber para importar mejor desde Colón.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map(post => (
            <Link
              key={post.href}
              href={post.href}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Imagen */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.imgAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 text-xs font-bold text-white ${post.badge} px-3 py-1 rounded-full`}>
                  {post.categoria}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-mbe-dark font-bold text-base leading-snug mb-2 flex-1 group-hover:text-mbe-red transition-colors">
                  {post.titulo}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {post.desc}
                </p>
                <span className="text-mbe-red text-sm font-bold inline-flex items-center gap-1">
                  Leer más →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
