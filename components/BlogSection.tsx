import Link from 'next/link'
import Image from 'next/image'

const POSTS = [
  {
    categoria: 'Logística',
    titulo: 'Consolidación de carga para PYMEs en Colón: reduce tus costos de importación',
    desc: 'Cómo la consolidación de carga reduce costos de importación para PYMEs en la Zona Libre de Colón, Panamá.',
    badge: 'bg-mbe-blue',
    href: '/blog/consolidacion-carga-pymes-colon',
    img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Consolidación de carga marítima para PYMEs en Colón, Panamá',
  },
  {
    categoria: 'Sellos',
    titulo: 'Kit de identidad corporativa para nuevas empresas en Colón, Panamá',
    desc: 'Sellos automáticos, carnets PVC y papelería membretada para tu nueva empresa en Colón. Todo en un solo lugar, Plaza Millenium F007.',
    badge: 'bg-mbe-red',
    href: '/blog/kit-identidad-corporativa-empresas-colon',
    img: 'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Sello automático y carnet corporativo para nueva empresa en Colón, Panamá',
  },
  {
    categoria: 'Envíos',
    titulo: '¿Cuánto cuesta enviar un paquete internacional desde Colón, Panamá?',
    desc: 'Guía de precios para tus envíos internacionales Colón: qué determina el costo y cómo comparar DHL, FedEx y UPS.',
    badge: 'bg-mbe-red',
    href: '/blog/costo-envios-internacionales-desde-colon',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Cajas de paquetes listas para envío internacional desde Colón, Panamá',
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
