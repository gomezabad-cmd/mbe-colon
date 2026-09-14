import type { Metadata } from 'next'
import Script from 'next/script'
import { headers } from 'next/headers'
import { GoogleAnalytics } from '@next/third-parties/google'
import PushNotificationOptIn from '@/components/PushNotificationOptIn'
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
  manifest: '/manifest.json',
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
      alternateName: 'MBE Colón',
      description: 'Centro de envíos y logística en Colón, Panamá con más de 13 años de experiencia. Agentes autorizados de DHL, FedEx y UPS. Casillero Miami gratis, carga marítima desde Miami y China, bordados personalizados, impresión profesional y sellos automáticos.',
      image: 'https://mbecolon.com/og-image.png',
      url: 'https://mbecolon.com',
      telephone: '+507-474-5548',
      email: 'mbecolon@gmail.com',
      foundingDate: '2012',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plaza Millenium Local F007',
        addressLocality: 'Colón',
        addressRegion: 'Colón',
        postalCode: '0401',
        addressCountry: 'PA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '9.3547',
        longitude: '-79.9003',
      },
      hasMap: 'https://maps.google.com/?q=Plaza+Millenium+Colon+Panama',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '13:00',
        },
      ],
      priceRange: '$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Debit Card',
      sameAs: [
        'https://www.mbe-ca.com',
        'https://www.facebook.com/mbecolon',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios MBE Colón',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Casillero Miami Gratis',
              description: 'Dirección personal en Miami, Florida para recibir compras de Amazon, eBay y Shein. Activación gratis, sin cuota mensual.',
              url: 'https://mbecolon.com/servicios/casillero',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Envíos Internacionales DHL FedEx UPS',
              description: 'Envíos internacionales a cualquier país con cotización inmediata, rastreo en tiempo real y seguro incluido.',
              url: 'https://mbecolon.com/servicios/envios-internacionales',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Carga Marítima Miami–Colón',
              description: 'Contenedores completos y carga consolidada desde Miami y China hacia la Zona Libre de Colón.',
              url: 'https://mbecolon.com/servicios/carga-maritima',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Bordados Personalizados',
              description: 'Bordados en uniformes, hoodies, gorras y prendas corporativas con logo empresarial. Desde 1 pieza.',
              url: 'https://mbecolon.com/servicios/bordados',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Impresión Profesional',
              description: 'Tarjetas de presentación, brochures, banners en gran formato y planos arquitectónicos.',
              url: 'https://mbecolon.com/servicios/impresion',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Sellos Automáticos Personalizados',
              description: 'Sellos Trodat y Colop para empresas y profesionales. Entrega en 24-48 horas.',
              url: 'https://mbecolon.com/servicios/sellos',
            },
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '87',
        bestRating: '5',
        worstRating: '1',
      },
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const nonce = headersList.get('x-nonce') ?? undefined

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body>
        <GoogleAnalytics gaId="G-6T4HQRJ1J0" />

        {META_PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive" nonce={nonce}>
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
        <PushNotificationOptIn />
      </body>
    </html>
  )
}
