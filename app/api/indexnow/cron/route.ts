import { NextRequest, NextResponse } from 'next/server'
import { getPosts } from '@/lib/wordpress'
import { submitUrls, buildBlogUrl, BASE_URL } from '@/lib/indexnow'

const CRON_SECRET = (process.env.CRON_SECRET ?? '').trim()

// Submits recently published/modified WordPress posts + static pages to IndexNow.
// Called by Vercel Cron on schedule — also callable manually with the CRON_SECRET header.
export async function GET(request: NextRequest) {
  const auth = request.headers.get('authorization')
  if (CRON_SECRET && auth !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Fetch the 20 most recent posts from WordPress
  const posts = await getPosts(20)
  const cutoffHours = 25 // slightly more than 24h to avoid gaps between runs

  const cutoff = new Date(Date.now() - cutoffHours * 60 * 60 * 1000)

  const recentPosts = posts.filter((p) => new Date(p.date) >= cutoff)

  const urls: string[] = [
    BASE_URL,
    `${BASE_URL}/blog`,
    `${BASE_URL}/servicios`,
    ...recentPosts.map((p) => buildBlogUrl(p.slug)),
  ]

  const uniqueUrls = [...new Set(urls)]
  const results = await submitUrls(uniqueUrls)
  const enginesOk = results.filter((r) => r.ok).length

  return NextResponse.json({
    ran_at: new Date().toISOString(),
    recent_posts: recentPosts.length,
    submitted: uniqueUrls,
    engines_ok: `${enginesOk}/${results.length}`,
  })
}
