import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

export const metadata: Metadata = {
  verification: {
    google: 'U78gqD99Re9-TqbAf378UvKVhPLuGKyIfNvsA9urxgM',
    other: { 'facebook-domain-verification': 'hib6i0wjvflddmfmtlnvgvdaqy3fgu' },
  },
  metadataBase: new URL('https://mbecolon.com'),
  alternates: {
    canonical: 'https://mbecolon.com',
  },
  title: 'MBE Colón | Envíos, Casillero Miami e Impresión — Panamá',
  description: 'Mail Boxes Etc. en Colón, Panamá. Envíos con DHL, FedEx y UPS, casillero Miami, carga marítima, impresión, bordados y sellos. Plaza Millenium F007.',
  openGraph: {
    title: 'MBE Colón | Envíos, Casillero Miami e Impresión — Panamá',
    description: 'Envíos internacionales con DHL, FedEx y UPS. Casillero Miami, carga marítima, impresión, bordados y sellos en Colón, Panamá. Plaza Millenium F007.',
    type: 'website',
    locale: 'es_PA',
    url: 'https://mbecolon.com',
    siteName: 'Mail Boxes Etc. Colón',
    images: [
      {
        url: 'https://mbecolon.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mail Boxes Etc. Colón — Envíos, Casillero Miami e Impresión en Colón, Panamá',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MBE Colón | Envíos, Casillero Miami e Impresión — Panamá',
    description: 'Envíos con DHL, FedEx y UPS. Casillero Miami, impresión, bordados y sellos en Colón, Panamá.',
    site: '@mbecolon',
    creator: '@mbecolon',
    images: ['https://mbecolon.com/og-image.png'],
  },
}

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://mbecolon.com/#localbusiness',
      name: 'Mail Boxes Etc. Colón',
      description: 'Centro de envíos internacionales, casillero Miami, carga marítima, impresión profesional, bordados personalizados y sellos automáticos en Colón, Panamá.',
      image: 'https://mbecolon.com/og-image.png',
      url: 'https://mbecolon.com',
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
      '@id': 'https://mbecolon.com/#organization',
      name: 'Mail Boxes Etc. Colón',
      url: 'https://mbecolon.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mbecolon.com/og-image.png',
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
      '@id': 'https://mbecolon.com/#website',
      url: 'https://mbecolon.com',
      name: 'Mail Boxes Etc. Colón',
      publisher: { '@id': 'https://mbecolon.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://mbecolon.com/blog?q={search_term_string}',
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
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: 'https://mbecolon.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Servicios',
      item: 'https://mbecolon.com/#servicios'
    }
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6T4HQRJ1J0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6T4HQRJ1J0');
          `}
        </Script>

        {META_PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        {children}
      </body>
    </html>
  )
}
