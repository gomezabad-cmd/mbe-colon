import Link from 'next/link'
import { CONTACT } from '@/lib/constants'

export const metadata = {
  title: 'Guía completa para comprar en Amazon y recibir en Colón | MBE Colón',
  description: 'Paso a paso: cómo usar tu casillero Miami MBE para comprar en Amazon, eBay y Shein y recibir en Colón, Panamá sin complicaciones.',
}

export default function BlogPost2() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-14">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-mbe-red transition-colors">Inicio</Link>
        <span>›</span>
        <Link href="/#blog" className="hover:text-mbe-red transition-colors">Blog</Link>
        <span>›</span>
        <span className="text-mbe-dark font-medium">Guía Amazon en Colón</span>
      </nav>

      {/* Badge */}
      <span className="bg-mbe-blue text-white text-xs font-bold px-3 py-1 rounded-full">Casillero</span>

      {/* Título */}
      <h1 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mt-4 mb-6">
        Guía completa para comprar en Amazon y recibir en Colón
      </h1>

      <p className="text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
        Por <strong className="text-mbe-dark">MBE Colón</strong> · Guía de casillero Miami
      </p>

      <div className="space-y-6 text-mbe-gray leading-relaxed">

        <p className="text-lg">
          Con tu casillero Miami MBE puedes comprar en cualquier tienda de Estados Unidos y recibir tus paquetes directamente en Colón, Panamá. Aquí te explicamos cómo funciona paso a paso.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">¿Qué es el casillero Miami MBE?</h2>
        <p>
          Es una dirección de envío en Miami, Florida que MBE te asigna para que las tiendas de USA puedan enviarte sus productos. Una vez que el paquete llega a Miami, nosotros lo procesamos y lo trasladamos a nuestra oficina en Colón.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">Paso 1 — Activa tu casillero gratis</h2>
        <p>
          Visítanos en Plaza Millenium F007 o escríbenos por WhatsApp. El registro es completamente gratuito y toma solo 5 minutos. Recibirás tu dirección personal en Miami con el siguiente formato:
        </p>
        <div className="bg-gray-100 rounded-xl p-4 font-mono text-sm text-mbe-dark">
          Tu Nombre<br />
          [Tu código MBE]<br />
          8300 NW 53rd St, Suite 100<br />
          Doral, FL 33166, USA
        </div>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">Paso 2 — Compra en tus tiendas favoritas</h2>
        <p>Usa tu dirección Miami en la sección de envío de cualquier tienda online de USA:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Amazon.com</strong> — busca productos con envío a Florida</li>
          <li><strong>eBay</strong> — filtra por vendedores que envían dentro de USA</li>
          <li><strong>Shein, Fashion Nova, H&M</strong> — tiendas de moda con envío a USA</li>
          <li><strong>Best Buy, Walmart, Target</strong> — electrónicos y hogar</li>
        </ul>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">Paso 3 — Te notificamos cuando llega</h2>
        <p>
          Cuando tu paquete llega a nuestro almacén en Miami, te enviamos una notificación por WhatsApp con el detalle del paquete, el peso y la tarifa de flete para traerlo a Colón.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">Paso 4 — Paga el flete y recibe en Colón</h2>
        <p>
          Aprobado el flete, coordinamos el transporte del paquete a nuestra oficina en Plaza Millenium. El proceso toma entre 5 y 10 días hábiles desde que el paquete llega a Miami.
        </p>

        <h2 className="text-mbe-dark text-2xl font-black mt-8 mb-3">¿Qué está incluido?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Dirección en Miami sin costo mensual</li>
          <li>Trazabilidad en tiempo real</li>
          <li>Tramitación de aduana en Panamá</li>
          <li>Notificaciones por WhatsApp</li>
          <li>Asesoría en restricciones de importación</li>
        </ul>

        <div className="bg-mbe-light rounded-2xl p-6 mt-8 border-l-4 border-mbe-blue">
          <p className="font-bold text-mbe-dark mb-2">⚠️ Artículos que NO se pueden importar</p>
          <p className="text-gray-600 text-sm">
            Alimentos perecederos, medicamentos, armas, fuegos artificiales, animales vivos y cualquier artículo prohibido por la legislación panameña. Ante dudas, consúltanos antes de comprar.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-mbe-dark rounded-2xl p-8 text-center">
        <h3 className="text-white font-black text-xl mb-2">Abre tu casillero Miami gratis hoy</h3>
        <p className="text-gray-400 text-sm mb-6">Sin cuota mensual. Regístrate en minutos por WhatsApp.</p>
        <a
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-mbe-red text-white font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity"
        >
          💬 Activar casillero por WhatsApp →
        </a>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-mbe-red text-sm font-bold hover:underline">← Volver al inicio</Link>
      </div>
    </article>
  )
}
