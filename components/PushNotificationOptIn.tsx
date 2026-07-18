'use client'

import { useEffect, useState } from 'react'
import { CONTACT } from '@/lib/constants'
import { getFcmToken } from '@/lib/firebase-client'
import { GEOFENCE_RADIUS_METERS, STORE_LOCATION, distanceInMeters } from '@/lib/geofence'

const TOKEN_KEY = 'mbe-push-token'
const DISMISSED_KEY = 'mbe-push-dismissed'
const LAST_PING_KEY = 'mbe-push-last-ping'
const PING_COOLDOWN_MS = 6 * 60 * 60 * 1000

function startWatching(token: string) {
  navigator.geolocation.watchPosition(
    (position) => {
      const distance = distanceInMeters(
        { lat: position.coords.latitude, lng: position.coords.longitude },
        STORE_LOCATION
      )
      if (distance <= GEOFENCE_RADIUS_METERS) pingGeofence(token)
    },
    () => {},
    { enableHighAccuracy: false, maximumAge: 5 * 60 * 1000 }
  )
}

function pingGeofence(token: string) {
  const lastPing = Number(localStorage.getItem(LAST_PING_KEY) ?? 0)
  if (Date.now() - lastPing < PING_COOLDOWN_MS) return

  localStorage.setItem(LAST_PING_KEY, String(Date.now()))
  fetch('/api/push/geofence-ping', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  }).catch(() => {})
}

export default function PushNotificationOptIn() {
  const [visible, setVisible] = useState(false)
  const [activating, setActivating] = useState(false)

  useEffect(() => {
    const supported = 'Notification' in window && 'serviceWorker' in navigator && 'geolocation' in navigator
    if (!supported) return

    const existingToken = localStorage.getItem(TOKEN_KEY)
    if (existingToken && Notification.permission === 'granted') {
      startWatching(existingToken)
      return
    }

    if (Notification.permission === 'default' && !localStorage.getItem(DISMISSED_KEY)) {
      // Reveal is browser-only (Notification API doesn't exist during SSR), so this
      // can't be computed in the initial render without a hydration mismatch.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true)
    }
  }, [])

  async function handleActivate() {
    setActivating(true)
    const permission = await Notification.requestPermission()

    if (permission === 'granted') {
      const token = await getFcmToken()
      if (token) {
        localStorage.setItem(TOKEN_KEY, token)
        fetch('/api/push/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        }).catch(() => {})
        startWatching(token)
      }
    }

    setVisible(false)
    setActivating(false)
  }

  function handleDismiss() {
    localStorage.setItem(DISMISSED_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-40 bg-white border border-mbe-light shadow-lg rounded-xl p-4">
      <p className="text-sm text-mbe-dark font-medium">
        🔔 Activa notificaciones y recibe una promoción cuando estés cerca de {CONTACT.shortName}
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={handleActivate}
          disabled={activating}
          className="bg-mbe-red text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-60"
        >
          {activating ? 'Activando…' : 'Activar'}
        </button>
        <button onClick={handleDismiss} className="text-sm text-mbe-gray px-4 py-2">
          Ahora no
        </button>
      </div>
    </div>
  )
}
