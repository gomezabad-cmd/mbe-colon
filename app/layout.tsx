import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  verification: {
    google: 'XJTYF-UNxocXnpVZHsyYYIziS9t6M88FE9EfBdD_gB4',
  },
  // ✅ 56 chars — within Google's ~60-char limit
  title: 'MBE Colón | Envíos, Casillero Miami e Impresión — Panamá',
  // ✅ 157 chars — within ~160-char limit, keeps address
  description: 'Mail Boxes Etc. en Colón, Panamá. Envíos con DHL, FedEx y UPS, casillero Miami, carga marítima, impresión, bordados y sellos. Plaza Millenium F007.',
  openGraph: {
    title: 'MBE Colón | Envíos, Casillero Miami e Impresión — Panamá',
    description: 'Envíos internacionales con DHL, FedEx y UPS. Casillero Miami, carga marítima, impresión, bordados y sellos en Colón, Panamá. Plaza Millenium F007.',
    type: 'website',
    locale: 'es_PA',
    url: 'https://mbe-colon.vercel.app',
    siteName: 'Mail Boxes Etc. Colón',
    images: [
      {
        // ✅ Self-hosted — no dependency on mbe-ca.com
        url: 'https://mbe-colon.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mail Boxes Etc. Colón — Envíos, Casillero Miami e Impresión en Colón, Panamá',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MBE Colón | Envíos, Casillero Miami e Impresión — Panamá',
    description: 'Envíos con DHL, FedEx y UPS. Casillero Miami, impresión, bordados y sellos en Colón, Panamá.',
    site: '@mbecolon',
    images: ['https://mbe-colon.vercel.app/og-image.png'],
  },
}

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://mbe-colon.vercel.app/#localbusiness',
      name: 'Mail Boxes Etc. Colón',
      description: 'Centro de envíos internacionales, casillero Miami, carga marítima, impresión profesional, bordados personalizados y sellos automáticos en Colón, Panamá.',
      image: 'https://mbe-colon.vercel.app/og-image.png',
      url: 'https://mbe-colon.vercel.app',
      telephone: '+507-474-5548',
      email: 'mbecolon@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plaza Millenium Local F007',
        addressLocality: 'Colón',
        addressRegion: 'Colón',
        addressCountry: 'PA',
      },
      hasMap: 'https://maps.google.com/?q=Plaza+Millenium+Colon+Panama',
      openingHours: ['Mo-Fr 08:00-17:00', 'Sa 09:00-13:00'],
      priceRange: '$$',
      sameAs: ['https://www.mbe-ca.com'],
    },
    {
      '@type': 'Organization',
      '@id': 'https://mbe-colon.vercel.app/#organization',
      name: 'Mail Boxes Etc. Colón',
      url: 'https://mbe-colon.vercel.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mbe-colon.vercel.app/og-image.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+507-474-5548',
        contactType: 'customer service',
        availableLanguage: 'Spanish',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://mbe-colon.vercel.app/#website',
      url: 'https://mbe-colon.vercel.app',
      name: 'Mail Boxes Etc. Colón',
      publisher: { '@id': 'https://mbe-colon.vercel.app/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://mbe-colon.vercel.app/blog?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
