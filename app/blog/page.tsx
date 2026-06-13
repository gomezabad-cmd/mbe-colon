import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | MBE Colón — Consejos de Envíos, Casillero y Logística',
  description: 'Artículos, consejos y guías sobre envíos internacionales, casillero Miami, aduana y logística para empresas en Colón, Panamá.',
  openGraph: {
    title: 'Blog MBE Colón — Consejos de Envíos y Logística en Colón, Panamá',
    description: 'Artículos sobre envíos, casillero Miami, trámites de aduana y más para empresas en Colón.',
    url: 'https://mbe-colon.vercel.app/blog',
  },
}

const POSTS = [
  {
    categoria: 'Bordados',
    badge: 'bg-mbe-blue',
    titulo: '¿Dónde bordar uniformes con tu logo en Colón, Panamá? Guía para empresas',
    desc: 'Bordados personalizados en uniformes, hoodies y gorras para empresas en Colón. Desde 1 unidad, alta durabilidad garantizada.',
    href: '/blog/bordados-personalizados-uniformes-colon',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Bordados personalizados en uniformes para empresas en Colón, Panamá',
  },
  {
    categoria: 'Envíos',
    badge: 'bg-mbe-red',
    titulo: '¿Cómo empacar correctamente tu paquete para envíos internacionales?',
    desc: 'Aprende las mejores técnicas de embalaje para proteger tus envíos con DHL, FedEx y UPS desde Colón, Panamá.',
    href: '/blog/como-empacar-paquetes',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Cajas de paquetes listos para envío internacional',
  },
  {
    categoria: 'Casillero',
    badge: 'bg-mbe-blue',
    titulo: 'Guía completa para comprar en Amazon y recibir en Colón',
    desc: 'Paso a paso: cómo usar tu casillero Miami MBE para traer tus compras de USA sin complicaciones.',
    href: '/blog/guia-compras-amazon-colon',
    img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Compras online en Amazon con casillero Miami MBE Colón',
  },
  {
    categoria: 'Aduana',
    badge: 'bg-mbe-red',
    titulo: 'Todo lo que debes saber sobre los trámites de aduana en Panamá',
    desc: 'Documentos necesarios, aranceles y tips para importar sin retrasos ni sorpresas en aduana.',
    href: '/blog/tramites-aduana-panama',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=280&fit=crop&q=80',
    imgAlt: 'Contenedores de carga en aduana de Panamá',
  },
]

export default function BlogPage() {
  return (
    <main className="pt-[88px]">

      {/* Hero */}
      <section className="bg-mbe-dark py-16 px-4 text-center">
        <p className="text-mbe-red font-bold text-sm uppercase tracking-widest mb-3">📰 Noticias y Consejos</p>
        <h1 className="text-white text-4xl md:text-5xl font-black mb-4">
          MBE <span className="text-mbe-red">Informa</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Tips de envíos, guías de compras internacionales y todo lo que necesitas saber para importar mejor desde Colón.
        </p>
      </section>

      {/* Grid de artículos */}
      <section className="bg-mbe-light py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-mbe-dark font-bold text-base leading-snug mb-3 flex-1 group-hover:text-mbe-red transition-colors">
                    {post.titulo}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {post.desc}
                  </p>
                  <span className="text-mbe-red text-sm font-bold">
                    Leer más →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mbe-red py-14 px-4 text-center">
        <h2 className="text-white text-2xl font-black mb-3">¿Tienes alguna pregunta?</h2>
        <p className="text-white opacity-90 mb-6">Estamos en Plaza Millenium F007, Colón. Escríbenos y te respondemos en minutos.</p>
        <a
          href="https://wa.me/50769495100"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-mbe-red font-black px-8 py-4 rounded-lg hover:bg-yellow-50 transition-colors"
        >
          💬 Escribir al WhatsApp
        </a>
      </section>

    </main>
  )
}
