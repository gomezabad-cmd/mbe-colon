import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mail Boxes Etc. Colón | Envíos, Impresión y Casillero en Colón, Panamá',
  description: 'Centro MBE en Colón, Panamá. Envíos internacionales con DHL, FedEx y UPS. Compras desde USA, carga marítima, impresión profesional y casillero Miami. Plaza Millenium F007.',
  keywords: 'MBE Colón, Mail Boxes Etc Colón, envíos Colón Panamá, casillero Miami Colón, impresión Colón, carga marítima Panamá',
  openGraph: {
    title: 'Mail Boxes Etc. Colón — Tu centro de envíos y logística',
    description: 'Envíos internacionales, compras USA, impresión y carga marítima en Colón, Panamá.',
    type: 'website',
    locale: 'es_PA',
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
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plaza Millenium Local F007",
                "addressLocality": "Colón",
                "addressCountry": "PA"
              },
              "telephone": "+507-474-5548",
              "email": "mbecolon@gmail.com",
              "openingHours": ["Mo-Fr 08:00-17:00", "Sa 09:00-13:00"],
              "url": "https://mbe-colon.vercel.app"
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
