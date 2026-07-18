import { cert, getApps, initializeApp, type App } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { getMessaging } from 'firebase-admin/messaging'

function getAdminApp(): App {
  if (getApps().length) return getApps()[0]

  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  if (!serviceAccountKey) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY no está configurada')
  }

  return initializeApp({ credential: cert(JSON.parse(serviceAccountKey)) })
}

export function getAdminFirestore() {
  return getFirestore(getAdminApp())
}

export function getAdminMessaging() {
  return getMessaging(getAdminApp())
}
