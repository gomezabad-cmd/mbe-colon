import { NextResponse } from 'next/server'

export async function GET() {
  const body = `
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: '${process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? ''}',
  authDomain: '${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? ''}',
  projectId: '${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? ''}',
  storageBucket: '${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? ''}',
  messagingSenderId: '${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? ''}',
  appId: '${process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? ''}',
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification || {}
  self.registration.showNotification(title || 'MBE Colón', {
    body: body || '',
    icon: '/images/mbe-panama-logo.png',
  })
})
`

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/javascript',
      'Service-Worker-Allowed': '/',
      'Cache-Control': 'no-cache',
    },
  })
}
