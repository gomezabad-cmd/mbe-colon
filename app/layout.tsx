import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mail Boxes Etc. Colón | Envíos, Impresión y Casillero en Colón, Panamá',
  description: 'Centro MBE en Colón, Panamá. Envíos internacionales con DHL, FedEx y UPS. Casillero Miami, carga marítima, impresión profesional, bordados y sellos. Plaza Millenium F007.',
  keywords: 'MBE Colón, Mail Boxes Etc Colón, envíos Colón Panamá, envíos internacionales Panamá, casillero Miami Panamá, casillero Miami Colón, carga marítima Panamá, impresión Colón Panamá, bordados uniformes Panamá, sellos automáticos Panamá, compras internet Colón, DHL Colón Panamá, FedEx Panamá, UPS Panamá, paquetería Colón, logística provincia de Colón, Zona Libre Colón logística',
  openGraph: {
    title: 'Mail Boxes Etc. Colón — Envíos, Casillero Miami e Impresión en Colón, Panamá',
    description: 'Envíos internacionales con DHL, FedEx y UPS. Casillero Miami, carga marítima, impresión, bordados y sellos personalizados en Colón, Panamá. Plaza Millenium F007.',
    type: 'website',
    locale: 'es_PA',
    url: 'https://mbe-colon.vercel.app',
    siteName: 'Mail Boxes Etc. Colón',
    images: [
      {
        url: 'https://www.mbe-ca.com/wp-content/uploads/2023/07/mbe-panama-logo.png',
        width: 1200,
        height: 630,
        alt: 'Mail Boxes Etc. Colón — Envíos Internacionales, Casillero Miami e Impresión en Colón, Panamá',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mail Boxes Etc. Colón — Envíos, Casillero Miami e Impresión en Colón, Panamá',
    description: 'Envíos internacionales con DHL, FedEx y UPS. Casillero Miami, carga marítima, impresión, bordados y sellos en Colón, Panamá.',
    images: ['https://www.mbe-ca.com/wp-content/uploads/2023/07/mbe-panama-logo.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Mail Boxes Etc. Colón",
              "description": "Centro de envíos internacionales, casillero Miami, carga marítima, impresión profesional, bordados personalizados y sellos automáticos en Colón, Panamá.",
              "image": "https://www.mbe-ca.com/wp-content/uploads/2023/07/mbe-panama-logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plaza Millenium Local F007",
                "addressLocality": "Colón",
                "addressRegion": "Colón",
                "addressCountry": "PA"
              },
              "hasMap": "https://maps.google.com/?q=Plaza+Millenium+Colon+Panama",
              "telephone": "+507-474-5548",
              "email": "mbecolon@gmail.com",
              "openingHours": ["Mo-Fr 08:00-17:00", "Sa 09:00-13:00"],
              "priceRange": "$$",
              "url": "https://mbe-colon.vercel.app",
              "sameAs": [
                "https://www.mbe-ca.com"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
