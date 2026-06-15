import Link from 'next/link'

const POSTS = [
  {
    categoria: 'Sellos',
    titulo: '¿Dónde hacer sellos automáticos personalizados en Colón, Panamá?',
    desc: 'Sellos automáticos para abogados, médicos y empresas en Colón. Modelos Trodat y Colop, entrega en 24-48h.',
    badge: 'bg-mbe-red',
    href: '/blog/sellos-automaticos-personalizados-colon',
    img: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Sellos automáticos personalizados para empresas en Colón, Panamá',
  },
  {
    categoria: 'Bordados',
    titulo: '¿Dónde bordar uniformes con tu logo en Colón, Panamá? Guía para empresas',
    desc: 'Bordados personalizados en uniformes, hoodies y gorras para empresas en Colón. Desde 1 unidad.',
    badge: 'bg-mbe-blue',
    href: '/blog/bordados-personalizados-uniformes-colon',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Bordados personalizados en uniformes para empresas en Colón, Panamá',
  },
  {
    categoria: 'Envíos',
    titulo: '¿Cómo empacar correctamente tu paquete para envíos internacionales?',
    desc: 'Aprende las mejores técnicas de embalaje para proteger tus envíos con DHL, FedEx y UPS.',
    badge: 'bg-mbe-red',
    href: '/blog/como-empacar-paquetes',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Cajas de paquetes listos para envío internacional',
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
                <img
                  src={post.img}
                  alt={post.imgAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
