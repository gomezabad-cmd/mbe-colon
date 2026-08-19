import Link from 'next/link'
import { CONTACT } from '@/lib/constants'

export const metadata = {
  title: 'Trámites de aduana en Panamá para compras online y casillero | MBE Colón',
  description: 'Guía de trámites de aduana en Panamá para clientes de casillero y courier: documentos, proceso ante la ANA, aranceles e ITBMS y errores comunes. MBE Colón te lo gestiona.',
  alternates: {
    canonical: 'https://mbecolon.com/blog/tramites-aduana-panama',
  },
}

const BASE_URL = 'https://mbecolon.com'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Trámites de aduana en Panamá para compras online y casillero',
  description: 'Guía de trámites de aduana en Panamá para clientes de casillero y courier: documentos, proceso ante la ANA, aranceles e ITBMS y errores comunes.',
  datePublished: '2025-03-05',
  dateModified: '2026-08-19',
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
    { '@type': 'ListItem', position: 3, name: 'Trámites de aduana en Panamá', item: `${BASE_URL}/blog/tramites-aduana-panama` },
  ],
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-14">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-mbe-red transition-colors">Inicio</Link>
        <span>›</span>
        <Link href="/blog" className="hover:text-mbe-red transition-colors">Blog</Link>
        <span>›</span>
        <span className="text-mbe-dark font-medium">Trámites de aduana en Panamá</span>
      </nav>

      {/* Badge */}
      <span className="bg-mbe-red text-white text-xs font-bold px-3 py-1 rounded-full">Casillero y Aduana</span>

      {/* Título */}
      <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
        Trámites de aduana en Panamá para compras online y casillero
      </h1>

      <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
        Por <strong className="text-mbe-dark">MBE Colón</strong> · Guía para clientes de casillero y courier
      </p>

      <div className="space-y-6 text-mbe-gray leading-relaxed">

        <p className="text-lg">
          Si compras en Amazon, eBay o Shein y recibes tus paquetes en Colón con un casillero, el trámite de aduana ya es parte de tu rutina — aunque casi nunca lo notes. Aquí te explicamos cómo funciona realmente, qué paga tu paquete, qué documentos importan y qué errores evitan retrasos. Pensado para importaciones pequeñas y de courier, no para importación comercial masiva.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">¿Qué es la aduana y por qué existe?</h2>
        <p>
          La <strong>Autoridad Nacional de Aduanas (ANA)</strong> de Panamá controla la entrada y salida de mercancías para proteger la economía local, recaudar impuestos y evitar el contrabando. Cada paquete que cruza la frontera pasa por un proceso de declaración y verificación. En el caso del courier y los casilleros, la operadora de carga — como MBE Colón — se encarga de presentar esa declaración ante la ANA por ti.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">Documentos necesarios para importar</h2>
        <p>Para una importación personal o de courier, los documentos son pocos y sencillos. Tenlos a la mano para que tu paquete no se detenga:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Cédula de identidad o pasaporte vigente</strong> — identifica al importador</li>
          <li><strong>Factura comercial (invoice)</strong> — con valor, descripción y peso del producto</li>
          <li><strong>Lista de empaque (packing list)</strong> — cuando tu envío trae varios artículos</li>
          <li><strong>Guía aérea (Airway Bill)</strong> — para envíos por avión y courier</li>
          <li><strong>Conocimiento de embarque (Bill of Lading)</strong> — solo si usas <Link href="/servicios/carga-maritima" className="text-mbe-red font-semibold hover:underline">carga marítima</Link></li>
        </ul>
        <p>
          No necesitas RUC ni registro de importador para uso personal. Solo si piensas importar para vender o revender necesitas RUC activo y registro de importador ante la ANA.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">Proceso paso a paso ante la ANA</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          <li><strong>Tu paquete llega al puerto o aeropuerto</strong> — con tu casillero, primero llega a Miami y luego viaja a Panamá.</li>
          <li><strong>La operadora presenta la declaración</strong> — MBE Colón registra el envío ante la ANA con los datos del importador y la factura.</li>
          <li><strong>La ANA evalúa el envío</strong> — se aplican aranceles e ITBMS según el valor y tipo de mercancía.</li>
          <li><strong>Se pagan los impuestos</strong> — el monto se cubre y la ANA libera la mercancía.</li>
          <li><strong>Entrega en Colón</strong> — el paquete se despacha a la oficina o a tu puerta.</li>
        </ol>
        <p>
          La mayoría de los envíos por casillero se liberan sin inspección física. La selección de inspección es aleatoria o por sospecha de subdeclaración.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">¿Cuánto se paga? Aranceles e ITBMS</h2>
        <p>
          En Panamá se pagan dos impuestos principales al importar: el <strong>arancel</strong> (varía según el tipo de producto) y el <strong>ITBMS</strong> (7% sobre la base imponible). Para envíos de courier y casillero, Panamá mantiene una exoneración para paquetes de bajo valor. Valores referenciales:
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
                <td className="p-3">Paquetes de bajo valor (courier)</td>
                <td className="p-3 text-green-600 font-medium">Exonerados</td>
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
                <td className="p-3">Alimentos procesados y cosméticos</td>
                <td className="p-3">No</td>
                <td className="p-3">15% – 30% (requieren permiso MINSA)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">* Los valores son referenciales. MBE Colón te da la tarifa exacta de tu paquete antes de traerlo a Panamá.</p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">Con tu casillero Miami, la aduana la gestionamos nosotros</h2>
        <p>
          Al usar tu <Link href="/servicios/casillero" className="text-mbe-red font-semibold hover:underline">casillero Miami</Link> en MBE Colón, no tienes que ir a ninguna oficina ni llenar formularios. Nosotros consolidamos tus compras, las enviamos a Panamá y tramitamos la declaración ante la ANA. Tú solo pagas el flete y, si aplica, los impuestos que te informamos antes de la entrega.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">¿Y si mi envío es más grande o para mi negocio?</h2>
        <p>
          Para volúmenes mayores o mercancía comercial, el proceso cambia: se usan documentos de importación formales y conviene una operadora con experiencia. Ofrecemos <Link href="/servicios/carga-maritima" className="text-mbe-red font-semibold hover:underline">carga marítima Miami–Panamá</Link> y <Link href="/servicios/envios-internacionales" className="text-mbe-red font-semibold hover:underline">envíos internacionales con DHL, FedEx y UPS</Link> para cuando necesitas mover carga de forma profesional y sin retrasos.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">Errores comunes que retrasan tu paquete</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Declarar un valor menor al real</strong> — la subdeclaración es la causa #1 de retención y multas</li>
          <li><strong>No guardar la factura original</strong> — la ANA la puede pedir en cualquier momento</li>
          <li><strong>Importar varias unidades del mismo artículo</strong> — levanta sospecha de reventa y exige registro de importador</li>
          <li><strong>Traer alimentos, cosméticos o suplementos sin permiso MINSA</strong> — son de los más retenidos</li>
          <li><strong>Mezclar productos nuevos con usados</strong> — complica la clasificación arancelaria</li>
        </ul>

        <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-red">
          <p className="font-bold text-mbe-dark mb-2">🛡️ MBE Colón gestiona tu aduana por ti</p>
          <p className="text-gray-600 text-sm">
            Con más de 18 años de experiencia en logística y trámites aduaneros en Panamá, nos encargamos de la documentación y la coordinación con la ANA para que tu compra llegue sin sorpresas a Colón.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
        <h3 className="text-white font-black text-xl mb-2">¿Tienes un paquete en camino?</h3>
        <p className="text-gray-400 text-sm mb-6">Activa tu casillero Miami o consúltanos tus trámites de aduana por WhatsApp.</p>
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
        <Link href="/blog" className="text-mbe-red text-sm font-bold hover:underline">← Volver al blog</Link>
      </div>
    </article>
    </>
  )
}