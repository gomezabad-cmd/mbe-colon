import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import ServicesBar from '@/components/ServicesBar'
import UrgencySection from '@/components/UrgencySection'
import USAShoppingSection from '@/components/USAShoppingSection'
import PymeSection from '@/components/PymeSection'
import WhyUsSection from '@/components/WhyUsSection'
import BlogSection from '@/components/BlogSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

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
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
