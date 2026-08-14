import { NextRequest, NextResponse } from 'next/server'
import { submitUrls, buildBlogUrl, buildServiceUrl, BASE_URL } from '@/lib/indexnow'

// Set this secret in WordPress: Settings → Permalinks or a custom plugin option
const WP_WEBHOOK_SECRET = process.env.WP_WEBHOOK_SECRET ?? ''

type WPWebhookPayload = {
  secret?: string
  post_type?: string
  post_status?: string
  slug?: string
  url?: string
}

export async function POST(request: NextRequest) {
  let payload: WPWebhookPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (WP_WEBHOOK_SECRET && payload.secret !== WP_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (payload.post_status && payload.post_status !== 'publish') {
    return NextResponse.json({ skipped: true, reason: 'post not published' })
  }

  const urls: string[] = []

  if (payload.url && payload.url.startsWith(BASE_URL)) {
    urls.push(payload.url)
  } else if (payload.slug) {
    const postType = payload.post_type ?? 'post'
    if (postType === 'post') {
      urls.push(buildBlogUrl(payload.slug))
    } else if (postType === 'page') {
      urls.push(`${BASE_URL}/${payload.slug}`)
    } else {
      urls.push(buildServiceUrl(payload.slug))
    }
  }

  // Always re-submit the homepage and blog index on any publish
  urls.push(BASE_URL, `${BASE_URL}/blog`)

  const results = await submitUrls([...new Set(urls)])

  return NextResponse.json({ submitted: urls, results })
}
