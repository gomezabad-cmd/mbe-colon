import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
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
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  description: 'Mail Boxes Etc. en Colón, Panamá. Envíos con DHL, FedEx y UPS, casillero Miami, carga marítima, impresión, bordados y sellos. Plaza Millenium F007.',
  alternates: {
    canonical: 'https://mbecolon.com',
  },
}

export default function Home() {
  return (
    <>
      <Navbar />
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
      <Footer />
      <WhatsAppButton />
    </>
  )
}
