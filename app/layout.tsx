import type { Metadata } from 'next'
import Script from 'next/script'
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
  manifest: '/manifest.json',
  title: 'MBE Colón | Casillero Miami, Envíos Internacionales y Impresión — Panamá',
  description: 'Mail Boxes Etc. en Colón, Panamá: Casillero Miami GRATIS, envíos con DHL/FedEx/UPS, carga marítima, impresión, bordados y sellos. 18+ años de experiencia. Plaza Millenium F007.',
  keywords: ['casillero Miami Colón Panamá', 'envíos internacionales Colón', 'courier Colón', 'MBE Colón', 'casillero Miami gratis', 'envíos DHL Colón', 'envíos FedEx Panamá', 'compras Amazon Panamá'],
  openGraph: {
    title: 'MBE Colón | Casillero Miami, Envíos Internacionales y Impresión — Panamá',
    description: 'Casillero Miami GRATIS, envíos con DHL/FedEx/UPS, carga marítima, impresión, bordados y sellos en Colón, Panamá. 18+ años de experiencia.',
    url: 'https://mbecolon.com',
    siteName: 'MBE Colón',
    locale: 'es_PA',
    type: 'website',
    images: [
      {
        url: 'https://mbecolon.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MBE Colón — Casillero Miami, Envíos Internacionales e Impresión en Colón, Panamá',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MBE Colón | Casillero Miami y Envíos — Panamá',
    description: 'Casillero Miami GRATIS, envíos internacionales con DHL, FedEx y UPS desde Colón, Panamá.',
    site: '@mbecolon',
    creator: '@mbecolon',
    images: ['https://mbecolon.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://mbecolon.com',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta el casillero Miami en Panamá?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El casillero Miami en MBE Colón es GRATIS. No pagas por la dirección en Miami. Solo pagas cuando envías tus compras a Panamá. Paquetes pequeños desde $15.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda un paquete de Miami a Colón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DHL Express: 3-5 días hábiles. FedEx International: 4-7 días hábiles. UPS Standard: 5-10 días hábiles. Todos incluyen tracking en tiempo real.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo funciona el casillero Miami de MBE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1. Registra tu casillero gratis. 2. Recibes una dirección en Miami. 3. Compras en Amazon, eBay, Shein o cualquier tienda de USA. 4. Nosotros enviamos tu paquete a Colón.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo comprar en Amazon usando el casillero MBE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, puedes comprar en Amazon, eBay, Shein, Walmart, Target, Nike y cualquier tienda online de USA. Solo usa tu dirección MBE Miami como dirección de envío.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuáles son las tarifas de envío internacional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DHL Express desde $35. FedEx International desde $30. UPS Standard desde $25. Carga marítima desde $5 por libra. Solicita cotización personalizada.',
      },
    },
  ],
}

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://mbecolon.com/#localbusiness',
      name: 'Mail Boxes Etc. Colón',
      alternateName: 'MBE Colón',
      description: 'Centro de envíos internacionales, casillero Miami, carga marítima, impresión profesional, bordados personalizados y sellos automáticos en Colón, Panamá. Más de 18 años de experiencia.',
      image: 'https://mbecolon.com/og-image.png',
      logo: 'https://mbecolon.com/og-image.png',
      url: 'https://mbecolon.com',
      telephone: '+5074745548',
      email: 'mbecolon@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plaza Millenium Local F007',
        addressLocality: 'Colón',
        addressRegion: 'Colón',
        postalCode: '0301',
        addressCountry: 'PA',
      },
      hasMap: 'https://www.google.com/maps/place/Plaza+Millennium/@9.3450748,-79.8928769,17z',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 9.3450748,
        longitude: -79.8928769,
      },
      openingHours: ['Mo-Fr 08:00-17:00', 'Sa 09:00-13:00'],
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
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: 9.3450748, longitude: -79.8928769 },
        geoRadius: '50000',
      },
      priceRange: '$$',
      currenciesAccepted: 'USD, PAB',
      paymentAccepted: 'Cash, Credit Card, Debit Card, Bank Transfer',
      sameAs: [
        'https://www.mbe-ca.com',
        'https://www.instagram.com/mbecolon',
        'https://www.tiktok.com/@mbecolon',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.7',
        reviewCount: '83',
        bestRating: '5',
        worstRating: '1',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios MBE Colón',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Envíos Internacionales', description: 'Envíos con DHL, FedEx y UPS desde Colón a todo el mundo.', url: 'https://mbecolon.com/servicios/envios-internacionales' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Casillero Miami', description: 'Dirección gratuita en Miami para recibir compras de Amazon, eBay y tiendas de USA.', url: 'https://mbecolon.com/servicios/casillero' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compras por Internet', description: 'Compra en tiendas de USA con tu casillero Miami MBE.', url: 'https://mbecolon.com/servicios/compras-internet' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carga Marítima', description: 'Envío de contenedores y carga consolidada desde Miami y China a Panamá.', url: 'https://mbecolon.com/servicios/carga-maritima' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Impresión Profesional', description: 'Tarjetas, brochures, banners, planos y fotocopias con calidad profesional.', url: 'https://mbecolon.com/servicios/impresion' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bordados Personalizados', description: 'Uniformes, hoodies, gorras y polos con logo bordado.', url: 'https://mbecolon.com/servicios/bordados' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sellos Automáticos', description: 'Sellos personalizados Trodat y Colop para profesionales.', url: 'https://mbecolon.com/servicios/sellos' } },
        ],
      },
      knowsAbout: ['Envíos internacionales', 'Casillero Miami', 'Carga marítima', 'Impresión profesional', 'Bordados personalizados', 'Sellos automáticos'],
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
        telephone: '+5074745548',
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
        <GoogleAnalytics gaId="G-6T4HQRJ1J0" />

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
        <PushNotificationOptIn />
        <Script
          src="https://forja-starter-261c87.carlosgomezabadpty.workers.dev/widget.js"
          strategy="afterInteractive"
          data-color="#be1e2d"
          data-saludo="¡Hola! ¿En qué te puedo ayudar? Cotiza envíos, casillero Miami y más."
        />
      </body>
    </html>
  )
}
