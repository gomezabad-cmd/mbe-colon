import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mbe-ca.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/promo',
        destination: '/',
        permanent: false,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      // ---- Mapeo de URLs legacy (WordPress) → rutas nuevas (Next.js) ----
      // Evita 404 y conserva la autoridad de enlaces/índice de las URLs viejas.
      // Cada entrada existe en variante con y sin barra final.
      { source: '/envios-internacionales', destination: '/servicios/envios-internacionales', permanent: true },
      { source: '/envios-internacionales/', destination: '/servicios/envios-internacionales', permanent: true },
      { source: '/compras-por-internet', destination: '/servicios/compras-internet', permanent: true },
      { source: '/compras-por-internet/', destination: '/servicios/compras-internet', permanent: true },
      { source: '/casillero', destination: '/servicios/casillero', permanent: true },
      { source: '/casillero/', destination: '/servicios/casillero', permanent: true },
      { source: '/centro-de-imprenta', destination: '/servicios/impresion', permanent: true },
      { source: '/centro-de-imprenta/', destination: '/servicios/impresion', permanent: true },
      { source: '/quienes-somos', destination: '/nosotros', permanent: true },
      { source: '/quienes-somos/', destination: '/nosotros', permanent: true },
      { source: '/faq', destination: '/preguntas-frecuentes', permanent: true },
      { source: '/faq/', destination: '/preguntas-frecuentes', permanent: true },
      { source: '/solicitud-de-casillero', destination: '/casillero-miami-colon', permanent: true },
      { source: '/solicitud-de-casillero/', destination: '/casillero-miami-colon', permanent: true },
      { source: '/politica-de-articulos-prohibidos', destination: '/servicios/envios-internacionales', permanent: true },
      { source: '/politica-de-articulos-prohibidos/', destination: '/servicios/envios-internacionales', permanent: true },
      { source: '/localizador-de-centros', destination: '/contacto', permanent: true },
      { source: '/localizador-de-centros/', destination: '/contacto', permanent: true },
      { source: '/aviso-de-privacidad', destination: '/', permanent: true },
      { source: '/aviso-de-privacidad/', destination: '/', permanent: true },
      { source: '/terminos-y-condiciones', destination: '/', permanent: true },
      { source: '/terminos-y-condiciones/', destination: '/', permanent: true },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'www.mbecolon.com',
          },
        ],
        destination: 'https://mbecolon.com',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.mbecolon.com',
          },
        ],
        destination: 'https://mbecolon.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'mbe-colon.vercel.app',
          },
        ],
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(self), camera=(), microphone=(), payment=(), usb=(), fullscreen=(self)',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net https://www.google-analytics.com https://www.gstatic.com; style-src 'self' 'unsafe-inline'; img-src 'self' https://lh3.googleusercontent.com https://www.facebook.com https://maps.google.com data: blob:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net https://firebaseinstallations.googleapis.com https://fcmregistrations.googleapis.com https://fcm.googleapis.com https://firestore.googleapis.com https://ipwho.is; frame-src 'self' https://www.openstreetmap.org; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
