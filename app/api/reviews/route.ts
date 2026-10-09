import { NextResponse } from 'next/server'

export const revalidate = 86400 // cache 24h

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return NextResponse.json({ ratingValue: '4.9', reviewCount: '87' })
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount&key=${apiKey}`
    const res = await fetch(url, { next: { revalidate: 86400 } })

    if (!res.ok) throw new Error(`Places API ${res.status}`)

    const data = await res.json()
    return NextResponse.json({
      ratingValue: String(data.rating?.toFixed(1) ?? '4.9'),
      reviewCount: String(data.userRatingCount ?? '87'),
    })
  } catch {
    return NextResponse.json({ ratingValue: '4.9', reviewCount: '87' })
  }
}
