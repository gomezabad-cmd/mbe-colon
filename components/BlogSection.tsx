import Link from 'next/link'
import Image from 'next/image'

const POSTS = [
  {
    categoria: 'Casillero',
    titulo: 'Black Friday con Casillero Miami: Cómo Comprar en USA y Recibir en Colón, Panamá',
    desc: 'Casillero Miami para Black Friday: activación gratis, aéreo desde $3.00/lb y entrega en Colón en 24-48h.',
    badge: 'bg-mbe-red',
    href: '/blog/black-friday-casillero-miami-colon',
    img: '/images/blog/photo-1607082348824-0a96f2a4b9da.jpg',
    imgAlt: 'Bolsas de compra rojas y negras de Black Friday con casillero Miami en Colón, Panamá',
  },
  {
    categoria: 'Logística',
    titulo: 'Carga Marítima Panamá: Contenedor Completo (FCL) o Consolidado (LCL) en Colón, Panamá',
    desc: 'Carga marítima Panamá: compara contenedor completo (FCL) y carga consolidada (LCL) para tu empresa en Colón. Tránsito de 5 a 10 días, seguro desde 1%.',
    badge: 'bg-mbe-blue',
    href: '/blog/lcl-o-fcl-carga-maritima-colon',
    img: '/images/blog/photo-1590496793907-4d66e2994b4d.jpg',
    imgAlt: 'Buque portacontenedores siendo cargado en puerto para carga marítima Panamá, Colón',
  },
  {
    categoria: 'Sellos',
    titulo: 'Sellos Fechadores y de Recibido para Empresas en Colón, Panamá',
    desc: 'Sellos automáticos Colón: fechadores, de recibido y pagado con tu logo para oficinas y Zona Libre. Entrega 24-48h.',
    badge: 'bg-mbe-red',
    href: '/blog/sellos-fechadores-recibido-empresas-colon',
    img: '/images/blog/photo-1603057190473-f3b6422b6320.jpg',
    imgAlt: 'Sello de goma de oficina para recibido y control de documentos en Colón, Panamá',
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
