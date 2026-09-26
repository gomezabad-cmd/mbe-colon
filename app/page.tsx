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
        <section className="bg-white py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-mbe-dark text-2xl md:text-3xl font-black mb-5">
              ¿Qué es MBE Colón y qué servicios ofrece?
            </h2>
            <div className="text-mbe-gray leading-relaxed space-y-4 text-lg">
              <p>
                MBE Colón, o Mail Boxes Etc. Colón, es un centro de logística y servicios de oficina ubicado en Plaza Millenium
                Local F007, Colón, Panamá. Ofrece casillero Miami gratis para comprar en Amazon, eBay o Shein y recibir en Colón
                en 24 a 72 horas por vía aérea, envíos internacionales con DHL, FedEx y UPS, carga marítima Miami–Panamá y
                China–Panamá, impresión profesional, bordados personalizados y sellos automáticos, todo desde el mismo local.
              </p>
              <p>
                Los precios de referencia son DESDE $3.00 por libra en envío aéreo y DESDE $3.00 por pie cúbico en marítimo,
                con los trámites aduaneros incluidos en el flete. MBE Colón forma parte de la red internacional Mail Boxes Etc.
                con más
                de 18 años de experiencia y 34 centros en Panamá, y atiende de lunes a viernes de 8:00 AM a 5:00 PM y los sábados
                de 9:00 AM a 1:00 PM.
              </p>
            </div>
          </div>
        </section>
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
