import { getGoogleReviews, STATIC_REVIEWS } from './google-reviews'

export interface ReviewSummary {
  rating: number
  count: number
}

export async function getReviewSummary(): Promise<ReviewSummary> {
  const data = (await getGoogleReviews()) ?? STATIC_REVIEWS
  return {
    rating: data.rating,
    count: data.userRatingCount,
  }
}

export function buildAggregateRating(reviews: ReviewSummary) {
  return {
    '@type': 'AggregateRating',
    ratingValue: String(reviews.rating),
    reviewCount: String(reviews.count),
    bestRating: '5',
    worstRating: '1',
  }
}

export function buildReview(reviews: ReviewSummary) {
  return {
    '@type': 'Review',
    author: { '@type': 'Person', name: 'Cliente MBE Colón' },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(reviews.rating),
      bestRating: '5',
      worstRating: '1',
    },
  }
}
