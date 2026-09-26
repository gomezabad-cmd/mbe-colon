import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { POSTS } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog | MBE Colón — Consejos de Envíos, Casillero y Logística',
  description: 'Blog MBE Colón: guías de envíos internacionales, casillero Miami, logística para PYMEs y consejos de compras online. Artículos útiles y actualizados.',
  alternates: {
    canonical: 'https://mbecolon.com/blog',
  },
  openGraph: {
    title: 'Blog MBE Colón — Consejos de Envíos y Logística en Colón, Panamá',
    description: 'Artículos sobre envíos, casillero Miami y logística para empresas en Colón.',
    url: 'https://mbecolon.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://mbecolon.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Blog MBE Colón — Envíos, Casillero Miami y Logística',
        type: 'image/png',
      },
    ],
    siteName: 'MBE Colón',
    locale: 'es_PA',},
}

export default function BlogPage() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-mbe-dark py-16 px-4 text-center">
        <Breadcrumbs items={[
          { label: 'Inicio', href: '/' },
          { label: 'Blog' },
        ]} />
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
                  <Image
                    src={post.img}
                    alt={post.imgAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-mbe-red text-sm font-bold">
                      Leer más →
                    </span>
                    {post.datePublished && (
                      <time 
                        dateTime={post.dateModified || post.datePublished}
                        className="text-gray-400 text-xs"
                      >
                        {new Date(post.dateModified || post.datePublished).toLocaleDateString('es-PA', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                        {post.dateModified && post.dateModified !== post.datePublished && (
                          <span className="italic"> (actualizado)</span>
                        )}
                      </time>
                    )}
                  </div>
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

    </div>
  )
}
