import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { getPosts } from '@/lib/wordpress'
import { POSTS } from '@/lib/posts'

const BASE_URL = 'https://mbecolon.com'

const SERVICE_SLUGS = [
  'compras-internet',
  'carga-maritima',
  'envios-internacionales',
  'impresion',
  'casillero',
  'bordados',
  'sellos',
]

const PAGE_LAST_MODIFIED: Record<string, string> = {
  '/': '2026-09-25',
  '/servicios': '2026-08-30',
  '/tarifas': '2026-09-25',
  '/preguntas-frecuentes': '2026-09-19',
  '/contacto': '2026-09-24',
  '/blog': '2026-09-24',
  '/nosotros': '2026-09-25',
  '/casillero-miami-colon': '2026-09-19',
  '/servicios/compras-internet': '2026-09-24',
  '/servicios/carga-maritima': '2026-09-24',
  '/servicios/envios-internacionales': '2026-09-24',
  '/servicios/impresion': '2026-09-24',
  '/servicios/casillero': '2026-09-24',
  '/servicios/bordados': '2026-09-24',
  '/servicios/sellos': '2026-09-24',
}

const POST_LAST_MODIFIED = new Map(
  POSTS.map((post) => [post.href, post.dateModified] as const),
)

const FALLBACK_DATE = '2026-09-25'
const LAST_CONTENT_EDIT = '2026-09-25'

function latest(a: string, b: string): string {
  return a >= b ? a : b
}

function lastModified(pathname: string): Date {
  const date = PAGE_LAST_MODIFIED[pathname] ?? FALLBACK_DATE
  return new Date(`${date}T00:00:00.000Z`)
}

function getBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), 'app', 'blog')
  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== '[slug]')
    .map((entry) => entry.name)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: lastModified('/'), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/servicios`, lastModified: lastModified('/servicios'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/tarifas`, lastModified: lastModified('/tarifas'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/preguntas-frecuentes`, lastModified: lastModified('/preguntas-frecuentes'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contacto`, lastModified: lastModified('/contacto'), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: lastModified('/blog'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/nosotros`, lastModified: lastModified('/nosotros'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/casillero-miami-colon`, lastModified: lastModified('/casillero-miami-colon'), changeFrequency: 'weekly', priority: 0.95 },
  ]

  const localBlogSlugs = new Set(getBlogSlugs())

  const localBlogRoutes: MetadataRoute.Sitemap = [...localBlogSlugs].map((slug) => {
    const date = latest(POST_LAST_MODIFIED.get(`/blog/${slug}`) ?? FALLBACK_DATE, LAST_CONTENT_EDIT)
    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(`${date}T00:00:00.000Z`),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  })

  const wpPosts = await getPosts(50)
  const wpBlogRoutes: MetadataRoute.Sitemap = wpPosts
    .filter((post) => !localBlogSlugs.has(post.slug))
    .map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.8,
    }))

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/servicios/${slug}`,
    lastModified: lastModified(`/servicios/${slug}`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...localBlogRoutes, ...wpBlogRoutes, ...serviceRoutes]
}
