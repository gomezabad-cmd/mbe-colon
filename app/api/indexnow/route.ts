import { NextRequest, NextResponse } from 'next/server'
import { submitUrls, BASE_URL } from '@/lib/indexnow'

// Secret header to protect the endpoint from public abuse
const INDEXNOW_SECRET = (process.env.INDEXNOW_SECRET ?? '').trim()

export async function POST(request: NextRequest) {
  if (INDEXNOW_SECRET) {
    const authHeader = request.headers.get('x-indexnow-secret')
    if (authHeader !== INDEXNOW_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  let urls: string[] = []

  try {
    const body = await request.json()

    if (typeof body.url === 'string') {
      urls = [body.url]
    } else if (Array.isArray(body.urls)) {
      urls = body.urls.filter((u: unknown) => typeof u === 'string')
    }
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (urls.length === 0) {
    return NextResponse.json({ error: 'No valid URLs provided' }, { status: 400 })
  }

  const invalidUrls = urls.filter((u) => !u.startsWith(BASE_URL))
  if (invalidUrls.length > 0) {
    return NextResponse.json(
      { error: 'All URLs must belong to this host', invalid: invalidUrls },
      { status: 400 }
    )
  }

  const results = await submitUrls(urls)
  const allOk = results.every((r) => r.ok)

  return NextResponse.json(
    { submitted: urls, results },
    { status: allOk ? 200 : 207 }
  )
}
