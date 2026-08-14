import Link from 'next/link'
import Image from 'next/image'

const POSTS = [
  {
    categoria: 'Sellos',
    titulo: 'Sellos para notarías y bufetes de abogados en Colón, Panamá',
    desc: 'Sellos automáticos para notarías y bufetes de abogados en Colón, Panamá: sello de idóneo, notarial y de constancia. Entrega en 24-48h.',
    badge: 'bg-mbe-red',
    href: '/blog/sellos-notarias-bufetes-abogados-colon',
    img: 'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Sello automático para notaría y bufete de abogados en Colón, Panamá',
  },
  {
    categoria: 'Bordados',
    titulo: 'Delantales y Chaquetas Bordadas para Restaurantes y Hoteles en Colón, Panamá',
    desc: 'Bordamos delantales, chaquetas y uniformes para restaurantes y hoteles en Colón, Panamá. Entrega rápida en Plaza Millenium F007.',
    badge: 'bg-mbe-blue',
    href: '/blog/bordados-delantales-restaurantes-hoteles-colon',
    img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Delantal bordado con logo para restaurante en Colón, Panamá',
  },
  {
    categoria: 'Envíos',
    titulo: 'Seguro para tus Envíos Internacionales: Protege tus Paquetes desde Colón, Panamá',
    desc: 'Cómo asegurar tu paquete internacional desde Colón, Panamá. Protege tus envíos con DHL, FedEx y UPS y evita pérdidas en tu courier.',
    badge: 'bg-mbe-blue',
    href: '/blog/seguro-envios-internacionales-colon',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Paquete asegurado listo para envío internacional desde Colón, Panamá',
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
