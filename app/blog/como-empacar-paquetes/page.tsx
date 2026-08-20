import Link from 'next/link'
import { CONTACT } from '@/lib/constants'

export const metadata = {
  title: '¿Cómo empacar correctamente tu paquete para envíos internacionales? | MBE Colón',
  description: 'Cómo empacar correctamente tu paquete para envíos internacionales. Técnicas profesionales para proteger tus envíos con DHL, FedEx y UPS. MBE Colón.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/como-empacar-paquetes',
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '¿Cómo empacar correctamente tu paquete para envíos internacionales?',
  description: 'Aprende las mejores técnicas de embalaje para proteger tus envíos internacionales con DHL, FedEx y UPS desde Colón, Panamá.',
  datePublished: '2025-01-15',
  dateModified: '2026-06-12',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/como-empacar-paquetes`,
  image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=630&fit=crop',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: '¿Cómo empacar tu paquete?', item: `${BASE_URL}/blog/como-empacar-paquetes` },
  ],
}

export default function BlogPost1() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-14">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-mbe-red transition-colors">Inicio</Link>
        <span>›</span>
        <Link href="/#blog" className="hover:text-mbe-red transition-colors">Blog</Link>
        <span>›</span>
        <span className="text-mbe-dark font-medium">Cómo empacar tu paquete</span>
      </nav>

      {/* Badge */}
      <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Envíos</span>

      {/* Título */}
      <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
        ¿Cómo empacar correctamente tu paquete para envíos internacionales?
      </h1>

      <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
        Por <strong className="text-mbe-dark">MBE Colón</strong> · Consejos de embalaje profesional
      </p>

      {/* Contenido */}
      <div className="prose prose-gray max-w-none space-y-6 text-mbe-gray leading-relaxed">

        <p className="text-lg">
          Un embalaje adecuado es la primera línea de defensa para que tu paquete llegue en perfectas condiciones a cualquier parte del mundo. En MBE Colón hemos manejado miles de envíos y queremos compartirte los mejores consejos.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">1. Elige la caja correcta</h2>
        <p>
          La caja debe ser lo suficientemente grande para que el contenido quede protegido con material de relleno, pero no tan grande que el artículo se mueva dentro. Usa siempre cajas de cartón corrugado doble para objetos pesados o frágiles.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Caja nueva o en excelente estado — sin dobladuras ni humedad</li>
          <li>El tamaño ideal deja 5–7 cm de espacio en cada lado para el relleno</li>
          <li>Para objetos frágiles, considera doble caja (caja dentro de caja)</li>
        </ul>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">2. Protege el contenido con relleno</h2>
        <p>
          El relleno absorbe los impactos durante el transporte. Las opciones más efectivas son:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Papel burbuja:</strong> ideal para objetos frágiles como electrónicos o cristalería</li>
          <li><strong>Espuma de poliestireno:</strong> perfecta para artículos irregulares</li>
          <li><strong>Papel kraft:</strong> económico y efectivo para objetos no frágiles</li>
          <li>Evita el papel periódico — puede manchar y no amortigua bien</li>
        </ul>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">3. Sella correctamente</h2>
        <p>
          Usa cinta de embalaje resistente (mínimo 5 cm de ancho) y aplica la técnica en “H”: sella las juntas del centro y los bordes en ambos extremos de la caja. Nunca uses cinta de oficina normal — se desprende fácilmente.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">4. Etiqueta bien el paquete</h2>
        <p>
          Coloca la dirección del destinatario claramente visible en la parte superior de la caja. Incluye también tu dirección de remitente. Si el artículo es frágil, coloca etiquetas de “FRÁGIL” y “ESTE LADO ARRIBA” en al menos dos caras de la caja.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">5. Documentación para envíos internacionales</h2>
        <p>
          Para envíos internacionales con DHL, FedEx o UPS desde Colón necesitas tener listos:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Nombre completo y dirección del destinatario</li>
          <li>Descripción detallada del contenido (en español e inglés)</li>
          <li>Valor declarado del paquete</li>
          <li>Cédula o pasaporte del remitente</li>
        </ul>

        <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
          <p className="font-bold text-mbe-dark mb-2">💡 Consejo MBE Colón</p>
          <p className="text-gray-600 text-sm">
            Si no tienes experiencia empacando o el artículo es muy valioso, visítanos en Plaza Millenium F007 y nuestro equipo se encarga del embalaje profesional por ti. Garantizamos la protección total de tu paquete.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
        <h3 className="text-white font-black text-xl mb-2">¿Listo para enviar tu paquete?</h3>
        <p className="text-gray-400 text-sm mb-6">Visítanos en Plaza Millenium F007, Colón — o cotiza ahora por WhatsApp.</p>
        <a
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-mbe-red text-white font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity"
        >
          💬 Cotizar por WhatsApp →
        </a>
      </div>

      {/* Volver */}
      <div className="mt-8 text-center">
        <Link href="/" className="text-mbe-red text-sm font-bold hover:underline">← Volver al inicio</Link>
      </div>
    </article>
    </>
  )
}
