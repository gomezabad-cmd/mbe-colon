import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  const nonce = btoa(String.fromCharCode(...array))

  const csp = [
    `default-src 'self'`,
    // nonce covers inline scripts (JSON-LD, Meta Pixel init) and GTM
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://www.googletagmanager.com https://connect.facebook.net https://www.google-analytics.com https://www.gstatic.com https://forja-starter-261c87.carlosgomezabadpty.workers.dev`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' https://images.unsplash.com https://www.facebook.com https://maps.google.com data: blob: https://www.mbe-ca.com`,
    `font-src 'self' data:`,
    `connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net https://firebaseinstallations.googleapis.com https://fcmregistrations.googleapis.com https://fcm.googleapis.com https://firestore.googleapis.com`,
    `frame-src 'self' https://www.openstreetmap.org`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `upgrade-insecure-requests`,
  ].join('; ')

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('x-csp', csp)

  const response = NextResponse.next({ request: { headers: requestHeaders } })
  response.headers.set('Content-Security-Policy', csp)
  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|webp|avif|svg|ico|woff2?|ttf|eot|otf)).*)',
  ],
}
