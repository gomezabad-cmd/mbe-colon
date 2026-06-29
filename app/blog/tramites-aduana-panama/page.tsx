import Link from 'next/link'
import { CONTACT } from '@/lib/constants'

export const metadata = {
  title: 'Todo lo que debes saber sobre trámites de aduana en Panamá | MBE Colón',
  description: 'Guía completa sobre documentos, aranceles y tips para importar en Panamá sin retrasos. MBE Colón te ayuda con todos los trámites aduaneros en Colón.',
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Todo lo que debes saber sobre trámites de aduana en Panamá',
  description: 'Guía completa sobre documentos, aranceles y tips para importar en Panamá sin retrasos. MBE Colón te ayuda con todos los trámites aduaneros en Colón.',
  datePublished: '2025-03-05',
  dateModified: '2026-06-12',
  author: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón' },
  publisher: { '@type': 'Organization', name: 'Mail Boxes Etc. Colón', url: BASE_URL },
  url: `${BASE_URL}/blog/tramites-aduana-panama`,
  image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&h=630&fit=crop',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Trámites de Aduana en Panamá', item: `${BASE_URL}/blog/tramites-aduana-panama` },
  ],
}

export default function BlogPost3() {
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
        <span className="text-mbe-dark font-medium">Trámites de aduana en Panamá</span>
      </nav>

      {/* Badge */}
      <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Aduana</span>

      {/* Título */}
      <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
        Todo lo que debes saber sobre los trámites de aduana en Panamá
      </h1>

      <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
        Por <strong className="text-mbe-dark">MBE Colón</strong> · Guía de importación en Panamá
      </p>

      <div className="space-y-6 text-mbe-gray leading-relaxed">

        <p className="text-lg">
          Importar desde Estados Unidos o China a Panamá puede parecer complicado, pero con la información correcta el proceso es ágil. En MBE Colón gestionamos los trámites por ti, pero es útil que conozcas cómo funciona.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">¿Qué es la aduana y por qué existe?</h2>
        <p>
          La Autoridad Nacional de Aduanas de Panamá (ANA) controla la entrada y salida de mercancías para proteger la economía local, recaudar impuestos y evitar el contrabando. Todo paquete que ingrese al país pasa por este proceso.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">Documentos necesarios para importar</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Cédula de identidad o pasaporte vigente</li>
          <li>Factura comercial del producto (invoice) con valor, descripción y peso</li>
          <li>Lista de empaque (packing list) para envíos múltiples</li>
          <li>Conocimiento de embarque (Bill of Lading) para carga marítima</li>
          <li>Guía aérea (Airway Bill) para envíos por avión</li>
        </ul>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">¿Cuánto se paga de impuestos?</h2>
        <p>
          Los aranceles en Panamá dependen del tipo de producto y su clasificación arancelaria. En términos generales:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse mt-2">
            <thead>
              <tr className="bg-mbe-dark text-white">
                <th className="p-3 text-left rounded-tl-lg">Tipo de envío</th>
                <th className="p-3 text-left">Exoneración</th>
                <th className="p-3 text-left rounded-tr-lg">Impuesto aprox.</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-100">
                <td className="p-3">Paquetes hasta $200 USD</td>
                <td className="p-3 text-green-600 font-medium">Generalmente libre</td>
                <td className="p-3">$0</td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-100">
                <td className="p-3">Ropa y calzado</td>
                <td className="p-3">No</td>
                <td className="p-3">15% – 20%</td>
              </tr>
              <tr className="bg-white border-b border-gray-100">
                <td className="p-3">Electrónicos</td>
                <td className="p-3">Parcial</td>
                <td className="p-3">0% – 15%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3">Alimentos procesados</td>
                <td className="p-3">No</td>
                <td className="p-3">15% – 30%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">* Los valores son referenciales. MBE Colón te da la tarifa exacta antes de importar.</p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">Tips para agilizar tu importación</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Declara el valor real del producto — subdeclarar puede causar retención y multas</li>
          <li>Guarda siempre la factura original de tu compra</li>
          <li>Evita importar más de una unidad del mismo artículo para uso personal</li>
          <li>Para importaciones comerciales, requieres RUC activo y registro de importador</li>
          <li>Productos como alimentos, cosméticos y suplementos requieren permisos de MINSA</li>
        </ul>

        <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
          <p className="font-bold text-mbe-dark mb-2">🛡️ MBE Colón gestiona todo por ti</p>
          <p className="text-gray-600 text-sm">
            Nuestro equipo tiene más de 18 años de experiencia en trámites aduaneros en Panamá. Nos encargamos de toda la documentación, coordinación con la ANA y entrega en tu puerta. Tú solo esperas tu paquete.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
        <h3 className="text-white font-black text-xl mb-2">¿Tienes un envío pendiente en aduana?</h3>
        <p className="text-gray-400 text-sm mb-6">Escríbenos ahora y te ayudamos a liberarlo rápidamente.</p>
        <a
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-mbe-red text-white font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity"
        >
          💬 Consultar por WhatsApp →
        </a>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-mbe-red text-sm font-bold hover:underline">← Volver al inicio</Link>
      </div>
    </article>
    </>
  )
}
