'use client'

import { getApp, getApps, initializeApp } from 'firebase/app'
import { getMessaging, getToken, isSupported, type Messaging } from 'firebase/messaging'
import { firebaseConfig } from './firebase-config'

function getFirebaseApp() {
  return getApps().length ? getApp() : initializeApp(firebaseConfig)
}

export async function getFcmToken(): Promise<string | null> {
  if (!(await isSupported())) return null

  const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js')
  const messaging: Messaging = getMessaging(getFirebaseApp())

  try {
    return await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
      serviceWorkerRegistration: registration,
    })
  } catch {
    return null
  }
}
