import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPostBySlug, getPosts, formatDate, featuredImage } from '@/lib/wordpress'
import { sanitizeHtml } from '@/lib/sanitize'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = await getPosts(50)
  return posts.map(p => ({ slug: p.slug }))
}

const TITLE_SUFFIX = ' | MBE Colón'
const FALLBACK_DESCRIPTION =
  'Artículos del blog de MBE Colón sobre casillero Miami, envíos internacionales, logística y compras por internet en Panamá.'

function plainText(html: string, max: number): string {
  const text = html.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim()
  if (text.length <= max) return text
  return text.slice(0, max).replace(/\s+\S*$/, '').trimEnd() + '…'
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  const title = plainText(post.title.rendered, 60 - TITLE_SUFFIX.length) + TITLE_SUFFIX
  const description = plainText(post.excerpt.rendered, 160) || FALLBACK_DESCRIPTION
  const image = featuredImage(post) || 'https://mbecolon.com/og-image.png'

  return {
    title,
    description,
    alternates: { canonical: `https://mbecolon.com/blog/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://mbecolon.com/blog/${slug}`,
      siteName: 'MBE Colón',
      locale: 'es_PA',
      type: 'article',
      images: [{ url: image, width: 1200, height: 630, alt: plainText(post.title.rendered, 90) }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const img = featuredImage(post)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title.rendered,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              '@type': 'Person',
              name: 'Carlos Gómez',
              jobTitle: 'Franquiciado de MBE Colón',
              url: 'https://mbecolon.com/nosotros',
              sameAs: ['https://www.instagram.com/mbecolon', 'https://www.tiktok.com/@mbecolon'],
              worksFor: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
            },
            publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: 'https://mbecolon.com' },
            url: `https://mbecolon.com/blog/${slug}`,
            image: img || 'https://mbecolon.com/og-image.png',
            mainEntityOfPage: `https://mbecolon.com/blog/${slug}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://mbecolon.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://mbecolon.com/blog' },
              { '@type': 'ListItem', position: 3, name: post.title.rendered, item: `https://mbecolon.com/blog/${slug}` },
            ],
          }),
        }}
      />
      <div>
        {/* Hero */}
        <section className="bg-mbe-dark py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-mbe-blue text-sm font-semibold hover:underline mb-6 inline-block">
              ← Blog
            </Link>
            <p className="text-mbe-red text-sm font-bold mb-3">{formatDate(post.date)}</p>
            <p className="text-gray-400 text-sm mb-3">
              Por <strong className="text-white">Carlos Gómez</strong> · Franquiciado de MBE Colón
            </p>
            <h1
              className="text-white text-3xl md:text-4xl font-black leading-tight"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.title.rendered) }}
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
          {plainText(post.excerpt.rendered, 400) && (
            <p className="text-mbe-dark text-lg font-medium leading-relaxed bg-mbe-light rounded-2xl p-6 border-l-4 border-mbe-red mb-8">
              {plainText(post.excerpt.rendered, 400)}
            </p>
          )}
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-mbe-dark prose-headings:font-black
              prose-p:text-mbe-gray prose-p:leading-relaxed
              prose-strong:text-mbe-dark
              prose-a:text-mbe-red prose-a:no-underline hover:prose-a:underline
              prose-ul:text-mbe-gray prose-li:marker:text-mbe-red"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content.rendered) }}
          />

          {/* CTA inline */}
          <div className="mt-12 bg-mbe-light rounded-xl p-6 text-center border-t-4 border-mbe-red">
            <p className="font-black text-mbe-dark text-lg mb-2">¿Listo para usar este servicio?</p>
            <p className="text-mbe-gray text-sm mb-4">Visítanos en Plaza Millenium F007, Colón, o escríbenos ahora.</p>
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
      </div>
    </>
  )
}
