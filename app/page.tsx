import type { Metadata } from 'next'
import HeroBanner from '@/components/HeroBanner'
import ServicesBar from '@/components/ServicesBar'
import UrgencySection from '@/components/UrgencySection'
import USAShoppingSection from '@/components/USAShoppingSection'
import PymeSection from '@/components/PymeSection'
import WhyUsSection from '@/components/WhyUsSection'
import ReviewsSection from '@/components/ReviewsSection'
import NosotrosSection from '@/components/NosotrosSection'
import BlogSection from '@/components/BlogSection'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  description: 'Mail Boxes Etc. en Colón, Panamá. Envíos con DHL, FedEx y UPS, casillero Miami, carga marítima, impresión, bordados y sellos. Plaza Millenium F007.',
  alternates: {
    canonical: 'https://mbecolon.com',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://mbecolon.com' },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="pt-[88px]">
        <HeroBanner />
        <ServicesBar />
        <UrgencySection />
        <USAShoppingSection />
        <PymeSection />
        <WhyUsSection />
        <ReviewsSection />
        <NosotrosSection />
        <BlogSection />
        <ContactSection />
      </main>
    </>
  )
}
