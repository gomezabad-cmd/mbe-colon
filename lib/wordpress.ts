const WP_API = 'https://mbe-ca.com/wp-json/wp/v2'

/**
 * Artículos que sirve la matriz (mbe-ca.com) y que aquí se renderizaban idénticos.
 * Google los consolidaba hacia el dominio original y marcaba nuestras URLs como
 * "Duplicada: eligió una canónica distinta", así que devolvemos 404 y no se
 * publican en el sitemap. Ver diagnóstico de canónicas 2026-09.
 */
export const MIRRORED_SLUGS = new Set([
  'que-son-los-incoterms-y-para-que-sirven',
  'las-fechas-mas-importantes-para-comprar-por-internet',
])

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
