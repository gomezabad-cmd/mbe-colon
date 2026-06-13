import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getPostBySlug, getPosts, formatDate, featuredImage } from '@/lib/wordpress'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = await getPosts(50)
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title.rendered} | Blog MBE Colón`,
    openGraph: { title: post.title.rendered, url: `https://mbe-colon.vercel.app/blog/${slug}` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const img = featuredImage(post)

  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        {/* Hero */}
        <section className="bg-mbe-dark py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-mbe-blue text-sm font-semibold hover:underline mb-6 inline-block">
              ← Blog
            </Link>
            <p className="text-mbe-red text-sm font-bold mb-3">{formatDate(post.date)}</p>
            <h1
              className="text-white text-3xl md:text-4xl font-black leading-tight"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </div>
        </section>

        {/* Featured image */}
        {img && (
          <div className="relative w-full h-72 md:h-96 bg-mbe-light">
            <Image src={img} alt={post.title.rendered} fill className="object-cover" priority />
          </div>
        )}

        {/* Content */}
        <article className="max-w-3xl mx-auto px-4 py-12">
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-mbe-dark prose-headings:font-black
              prose-p:text-mbe-gray prose-p:leading-relaxed
              prose-strong:text-mbe-dark
              prose-a:text-mbe-red prose-a:no-underline hover:prose-a:underline
              prose-ul:text-mbe-gray prose-li:marker:text-mbe-red"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* CTA inline */}
          <div className="mt-12 bg-mbe-light rounded-xl p-6 text-center border-t-4 border-mbe-red">
            <p className="font-black text-mbe-dark text-lg mb-2">¿Listo para usar este servicio?</p>
            <p className="text-mbe-gray text-sm mb-4">Visítanos en Los Cuatro Altos, Colón, o escríbenos ahora.</p>
            <a
              href="https://wa.me/50769495100"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-mbe-red text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              💬 Cotizar por WhatsApp
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link href="/blog" className="text-mbe-red font-bold hover:underline text-sm">
              ← Ver todos los artículos
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
