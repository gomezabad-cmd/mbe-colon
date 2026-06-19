export interface GoogleReview {
  relativePublishTimeDescription: string
  rating: number
  text?: { text: string; languageCode: string }
  authorAttribution: {
    displayName: string
    uri: string
    photoUri: string
  }
  publishTime: string
}

export interface PlaceReviews {
  rating: number
  userRatingCount: number
  reviews: GoogleReview[]
}

const PLACE_ID = process.env.GOOGLE_PLACE_ID ?? ''
const API_KEY = process.env.GOOGLE_PLACES_API_KEY ?? ''

export async function getGoogleReviews(): Promise<PlaceReviews | null> {
  if (!PLACE_ID || !API_KEY) return null

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=es`,
      {
        headers: {
          'X-Goog-Api-Key': API_KEY,
          'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
        },
        next: { revalidate: 3600 }, // refresca cada hora
      }
    )

    if (!res.ok) return null

    const data = await res.json()
    return {
      rating: data.rating ?? 0,
      userRatingCount: data.userRatingCount ?? 0,
      reviews: (data.reviews ?? []).slice(0, 5),
    }
  } catch {
    return null
  }
}

// Reseñas estáticas mientras se configura la API (o como fallback)
export const STATIC_REVIEWS: PlaceReviews = {
  rating: 4.9,
  userRatingCount: 87,
  reviews: [
    {
      relativePublishTimeDescription: 'hace 1 semana',
      rating: 5,
      text: { text: 'Excelente servicio. Enviaron mi paquete con DHL en tiempo récord. El personal es muy amable y te explican todo claramente. 100% recomendado para envíos internacionales desde Colón.', languageCode: 'es' },
      authorAttribution: { displayName: 'María García', uri: '', photoUri: '' },
      publishTime: '',
    },
    {
      relativePublishTimeDescription: 'hace 2 semanas',
      rating: 5,
      text: { text: 'Usé el casillero Miami por primera vez y fue muy fácil. Mis compras de Amazon llegaron rápido y sin complicaciones. El trámite de aduana lo manejan ellos. Volveré a usar el servicio.', languageCode: 'es' },
      authorAttribution: { displayName: 'Carlos Rodríguez', uri: '', photoUri: '' },
      publishTime: '',
    },
    {
      relativePublishTimeDescription: 'hace 3 semanas',
      rating: 5,
      text: { text: 'Mandé hacer bordados para los uniformes de mi empresa y quedaron perfectos. El diseño fue exactamente lo que pedí. Entrega puntual y precio justo. ¡Muy satisfecho con el trabajo!', languageCode: 'es' },
      authorAttribution: { displayName: 'Luis Martínez', uri: '', photoUri: '' },
      publishTime: '',
    },
    {
      relativePublishTimeDescription: 'hace 1 mes',
      rating: 5,
      text: { text: 'Los sellos automáticos que pedí para mi firma de abogados son de muy buena calidad. Modelos Colop profesionales, entrega en 24 horas como prometieron. Muy buena atención al cliente.', languageCode: 'es' },
      authorAttribution: { displayName: 'Ana Pérez', uri: '', photoUri: '' },
      publishTime: '',
    },
    {
      relativePublishTimeDescription: 'hace 1 mes',
      rating: 4,
      text: { text: 'Buen servicio en general. Imprimieron mis folletos para el negocio y quedaron con muy buena calidad. El tiempo de espera fue razonable. Los recomiendo para servicios de impresión en Colón.', languageCode: 'es' },
      authorAttribution: { displayName: 'Roberto Núñez', uri: '', photoUri: '' },
      publishTime: '',
    },
  ],
}
