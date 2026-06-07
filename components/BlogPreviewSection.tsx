import Link from 'next/link'
import { getPosts, formatDate, stripHtml, featuredImage } from '@/lib/wordpress'

export default async function BlogPreviewSection() {
  const posts = await getPosts(3)
  if (posts.length === 0) return null

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-mbe-red font-bold text-sm uppercase tracking-widest mb-2">Blog</p>
            <h2 className="text-mbe-dark text-3xl font-black">Últimos Artículos</h2>
          </div>
          <Link href="/blog" className="text-mbe-red font-bold text-sm hover:underline hidden md:block">
            Ver todos →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map(post => {
            const img = featuredImage(post)
            const excerpt = stripHtml(post.excerpt.rendered).slice(0, 120) + '…'
            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className={`h-40 flex items-center justify-center overflow-hidden relative ${!img ? 'bg-mbe-red' : ''}`}>
                  {img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={img}
                      alt={post.title.rendered}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-4xl">📦</span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-mbe-blue font-semibold mb-2">{formatDate(post.date)}</p>
                  <h3
                    className="font-bold text-mbe-dark text-sm leading-snug mb-2 group-hover:text-mbe-red transition-colors"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <p className="text-mbe-gray text-xs leading-relaxed">{excerpt}</p>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/blog" className="text-mbe-red font-bold text-sm hover:underline">
            Ver todos los artículos →
          </Link>
        </div>
      </div>
    </section>
  )
}
