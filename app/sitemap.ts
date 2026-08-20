import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { getPosts } from '@/lib/wordpress'

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

function getBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), 'app', 'blog')
  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== '[slug]')
    .map((entry) => entry.name)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/servicios`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/tarifas`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/contacto`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ]

  const localBlogSlugs = new Set(getBlogSlugs())

  const localBlogRoutes: MetadataRoute.Sitemap = [...localBlogSlugs].map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

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
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...localBlogRoutes, ...wpBlogRoutes, ...serviceRoutes]
}
