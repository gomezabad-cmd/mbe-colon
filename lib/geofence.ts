export const STORE_LOCATION = { lat: 9.3450748, lng: -79.8928769 }

export const GEOFENCE_RADIUS_METERS = 400

export const NOTIFICATION_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000

export function distanceInMeters(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number }
): number {
  const EARTH_RADIUS_METERS = 6371000
  const toRad = (deg: number) => (deg * Math.PI) / 180

  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const lat1 = toRad(a.lat)
  const lat2 = toRad(b.lat)

  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2

  return 2 * EARTH_RADIUS_METERS * Math.asin(Math.sqrt(h))
}
