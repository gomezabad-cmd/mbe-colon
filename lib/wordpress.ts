const WP_API = 'https://mbe-ca.com/wp-json/wp/v2'

export type WPPost = {
  id: number
  slug: string
  date: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>
  }
}

export async function getPosts(perPage = 10): Promise<WPPost[]> {
  try {
    const res = await fetch(
      `${WP_API}/posts?_embed&per_page=${perPage}&status=publish&orderby=date&order=desc`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `${WP_API}/posts?_embed&slug=${encodeURIComponent(slug)}&status=publish`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return null
    const posts: WPPost[] = await res.json()
    return posts[0] ?? null
  } catch {
    return null
  }
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-PA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&[a-z]+;/gi, ' ').trim()
}

export function featuredImage(post: WPPost): string | null {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null
}
