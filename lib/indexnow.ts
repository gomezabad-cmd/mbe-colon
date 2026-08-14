const BASE_URL = 'https://mbecolon.com'
const INDEXNOW_KEY = '7f3e2b1c4d8f9a0b3c6d1e4f7a2b5c8e'
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`

const SEARCH_ENGINES = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
  'https://search.seznam.cz/indexnow',
] as const

export { INDEXNOW_KEY, BASE_URL }

export function buildBlogUrl(slug: string): string {
  return `${BASE_URL}/blog/${slug}`
}

export function buildServiceUrl(slug: string): string {
  return `${BASE_URL}/servicios/${slug}`
}

export async function submitUrls(urls: string[]): Promise<{ engine: string; ok: boolean }[]> {
  if (urls.length === 0) return []

  const body = JSON.stringify({
    host: new URL(BASE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  })

  const results = await Promise.allSettled(
    SEARCH_ENGINES.map(async (engine) => {
      const res = await fetch(engine, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body,
        signal: AbortSignal.timeout(8000),
      })
      return { engine, ok: res.ok || res.status === 202 }
    })
  )

  return results.map((r, i) =>
    r.status === 'fulfilled'
      ? r.value
      : { engine: SEARCH_ENGINES[i], ok: false }
  )
}

export async function submitUrl(url: string): Promise<{ engine: string; ok: boolean }[]> {
  return submitUrls([url])
}
