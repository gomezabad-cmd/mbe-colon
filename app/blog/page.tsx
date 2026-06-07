import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getPosts, formatDate, stripHtml, featuredImage } from '@/lib/wordpress'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Mail Boxes Etc. Colón — Consejos de Envíos, Logística y Más',
  description: 'Artículos, consejos y novedades sobre envíos internacionales, casillero Miami, impresión y logística para empresas en Colón, Panamá.',
  openGraph: {
    title: 'Blog MBE Colón — Consejos de Envíos y Logística en Colón, Panamá',
    description: 'Artículos sobre envíos, casillero Miami, impresión de planos, sellos y carnets PVC para empresas en Colón.',
    url: 'https://mbe-colon.vercel.app/blog',
  },
}

export default async function BlogPage() {
  const posts = await getPosts(12)

  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        {/* Hero */}
        <section className="bg-mbe-dark py-16 px-4 text-center">
          <p className="text-mbe-red font-bold text-sm uppercase tracking-widest mb-3">Blog MBE Colón</p>
          <h1 className="text-white text-4xl md:text-5xl font-black mb-4">
            Consejos de Envíos,<br />Logística e Impresión
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Recursos útiles para emprendedores y empresas de la provincia de Colón, Panamá.
          </p>
        </section>

        {/* Posts grid */}
        <section className="bg-mbe-light py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-mbe-gray text-lg">Próximamente publicaremos artículos aquí.</p>
                <Link href="/" className="mt-6 inline-block text-mbe-red font-bold hover:underline">← Volver al inicio</Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => {
                  const img = featuredImage(post)
                  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 140) + '…'
                  return (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                    >
                      {img ? (
                        <div className="relative h-44 w-full overflow-hidden">
                          <Image
                            src={img}
                            alt={post.title.rendered}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="h-44 bg-mbe-red flex items-center justify-center">
                          <span className="text-5xl">📦</span>
                        </div>
                      )}
                      <div className="p-5">
                        <p className="text-xs text-mbe-blue font-semibold mb-2">{formatDate(post.date)}</p>
                        <h2
                          className="font-black text-mbe-dark text-lg leading-snug mb-3 group-hover:text-mbe-red transition-colors"
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        <p className="text-mbe-gray text-sm leading-relaxed">{excerpt}</p>
                        <span className="mt-4 inline-block text-mbe-red text-sm font-bold">
                          Leer más →
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-mbe-red py-14 px-4 text-center">
          <h2 className="text-white text-2xl font-black mb-3">¿Tienes alguna pregunta?</h2>
          <p className="text-white opacity-90 mb-6">Estamos en Los Cuatro Altos, Colón. Escríbenos y te respondemos en minutos.</p>
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
      <Footer />
      <WhatsAppButton />
    </>
  )
}
