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

/**
 * FAQ general del negocio. Vivía en el layout y se inyectaba en TODAS las rutas,
 * lo que generaba dos entidades FAQPage en las páginas que ya tenían su propia
 * FAQ (servicios, artículos, tarifas…). Ahora queda solo en la home.
 */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo puedo enviar un paquete desde Colón, Panamá?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visítanos en Plaza Millenium Local F007, Colón. Llevamos tu paquete, cotizamos al instante con DHL, FedEx o UPS, y te damos un número de rastreo para seguirlo en tiempo real.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el casillero Miami de MBE Colón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es una dirección en Miami, Florida que te asignamos gratis para que puedas comprar en Amazon, eBay, Shein y otras tiendas de USA. Nosotros recibimos tus paquetes y los enviamos a Colón en 24-48 horas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es el horario de atención de MBE Colón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atendemos de lunes a viernes de 8:00 AM a 5:00 PM y sábados de 9:00 AM a 1:00 PM. Los domingos estamos cerrados. También puedes contactarnos por WhatsApp al 6949-5100.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Dónde están ubicados en Colón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Estamos en Plaza Millenium Local F007, Colón, Panamá. Es fácil de encontrar en el centro comercial más importante de la provincia de Colón.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hacen bordados personalizados en Colón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Bordamos uniformes, hoodies, gorras, polos y más con el logo de tu empresa. Trabajamos para PYMEs, equipos y particulares en toda la provincia de Colón y Panamá.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
                Los precios de referencia son desde $3.00 por libra en envío aéreo y desde $6.00 por pie cúbico en marítimo,
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
