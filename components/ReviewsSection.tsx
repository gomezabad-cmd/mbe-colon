import { getGoogleReviews, STATIC_REVIEWS, type PlaceReviews } from '@/lib/google-reviews'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i <= rating ? '#FBBC04' : '#E5E7EB'}
          className="w-4 h-4"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ name, photoUri }: { name: string; photoUri: string }) {
  if (photoUri) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={photoUri} alt={name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
  }
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
  const colors = ['bg-mbe-red', 'bg-mbe-blue', 'bg-emerald-600', 'bg-amber-600', 'bg-purple-600']
  const color = colors[name.charCodeAt(0) % colors.length]
  return (
    <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
      {initials}
    </div>
  )
}

function ReviewCard({ review }: { review: PlaceReviews['reviews'][0] }) {
  const text = review.text?.text ?? ''
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <Avatar name={review.authorAttribution.displayName} photoUri={review.authorAttribution.photoUri} />
        <div className="min-w-0">
          <p className="font-semibold text-mbe-dark text-sm truncate">{review.authorAttribution.displayName}</p>
          <p className="text-gray-400 text-xs">{review.relativePublishTimeDescription}</p>
        </div>
        {/* Google icon */}
        <svg viewBox="0 0 24 24" className="w-5 h-5 ml-auto shrink-0" aria-label="Google">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>

      <Stars rating={review.rating} />

      {text && (
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{text}</p>
      )}
    </div>
  )
}

export default async function ReviewsSection() {
  const live = await getGoogleReviews()
  const data = live ?? STATIC_REVIEWS
  const mapsUrl = `https://www.google.com/maps/search/Mail+Boxes+Etc+Col%C3%B3n+Panam%C3%A1`

  return (
    <section className="bg-mbe-light py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-10">
          <div className="text-mbe-red text-xs font-bold tracking-widest uppercase mb-3">
            ⭐ Opiniones de Clientes
          </div>
          <h2 className="text-mbe-dark text-3xl md:text-4xl font-black mb-3">
            Lo que dicen nuestros <span className="text-mbe-red">clientes</span>
          </h2>

          {/* Rating global */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2.5 shadow-sm border border-gray-100 mt-2">
            <span className="text-3xl font-black text-mbe-dark">{data.rating.toFixed(1)}</span>
            <div className="flex flex-col items-start gap-0.5">
              <Stars rating={Math.round(data.rating)} />
              <span className="text-gray-500 text-xs">{data.userRatingCount} reseñas en Google</span>
            </div>
            <svg viewBox="0 0 24 24" className="w-7 h-7" aria-label="Google">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {data.reviews.slice(0, 6).map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

        {/* CTA a Google Maps */}
        <div className="text-center">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-mbe-dark text-mbe-dark font-bold px-6 py-3 rounded-lg hover:bg-mbe-dark hover:text-white transition-colors text-sm"
          >
            Ver todas las reseñas en Google Maps
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
