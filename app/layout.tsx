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
  title: 'MBE Colón | Envíos, Casillero Miami e Impresión — Panamá',
  description: 'Mail Boxes Etc. en Colón, Panamá. Envíos con DHL, FedEx y UPS, casillero Miami, carga marítima, impresión, bordados y sellos. Plaza Millenium F007.',
  openGraph: {
    description: 'Envíos internacionales con DHL, FedEx y UPS. Casillero Miami, carga marítima, impresión, bordados y sellos en Colón, Panamá. Plaza Millenium F007.',
    type: 'website',
    locale: 'es_PA',
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
