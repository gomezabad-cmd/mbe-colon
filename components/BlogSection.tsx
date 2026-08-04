import Link from 'next/link'
import Image from 'next/image'

const POSTS = [
  {
    categoria: 'Casillero',
    titulo: 'Cómo Comprar Electrónicos y Gadgets en USA con tu Casillero Miami desde Colón',
    desc: 'Compra laptops, celulares y gadgets en Amazon, Best Buy y B&H con tu casillero Miami. Recíbelos en Colón, Panamá en 24-48h.',
    badge: 'bg-mbe-blue',
    href: '/blog/casillero-miami-electronicos-gadgets-colon',
    img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Compra de laptops y gadgets electrónicos con casillero Miami MBE Colón, Panamá',
  },
  {
    categoria: 'Impresión',
    titulo: 'Impresión de Banners y Afiches Publicitarios en Colón, Panamá',
    desc: 'Impresión de banners publicitarios en Colón Panamá: vinil, pendones roll-up y afiches. Entrega en 24-48h en Plaza Millenium F007.',
    badge: 'bg-mbe-blue',
    href: '/blog/impresion-banners-afiches-publicitarios-colon',
    img: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Impresión de banner publicitario en vinil para negocio en Colón, Panamá',
  },
  {
    categoria: 'Logística',
    titulo: 'Consolidación de carga para PYMEs en Colón: reduce tus costos de importación',
    desc: 'Cómo la consolidación de carga reduce costos de importación para PYMEs en la Zona Libre de Colón, Panamá.',
    badge: 'bg-mbe-blue',
    href: '/blog/consolidacion-carga-pymes-colon',
    img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Consolidación de carga marítima para PYMEs en Colón, Panamá',
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
