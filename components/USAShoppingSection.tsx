import Image from 'next/image'
import Link from 'next/link'
import { CONTACT } from '@/lib/constants'

const STORES = [
  {
    name: 'Amazon',
    logo: '/images/stores/amazon.png',
  },
  {
    name: 'eBay',
    logo: '/images/stores/ebay.png',
  },
  {
    name: 'Shein',
    logo: '/images/stores/shein.png',
  },
  {
    name: 'AliExpress',
    logo: '/images/stores/aliexpress.png',
  },
  {
    name: 'IKEA',
    logo: '/images/stores/ikea.png',
  },
  {
    name: 'Fashion Nova',
    logo: '/images/stores/fashion-nova.png',
  },
  {
    name: 'Etsy',
    logo: '/images/stores/etsy.png',
  },
  {
    name: 'H&M',
    logo: '/images/stores/hm.png',
  },
]

export default function USAShoppingSection() {
  return (
    <section className="bg-mbe-light py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <div className="text-mbe-red text-xs font-bold tracking-widest uppercase mb-3">
              🇺🇸 Casillero Miami
            </div>
            <h2 className="text-mbe-dark text-3xl md:text-4xl font-black leading-tight mb-4">
              Casillero Miami en Colón:<br />
              <span className="text-mbe-red">compras por Internet en USA</span><br />
              con entrega directa en Panamá.
            </h2>
            <p className="text-mbe-gray text-base mb-6 leading-relaxed">
              Con tu casillero Miami MBE, obtienes una dirección de envío en Estados Unidos. Compra en cualquier tienda online de USA y nosotros gestionamos el traslado directamente a Colón, Panamá de forma rápida y segura.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-mbe-gray">
              <li className="flex items-center gap-2">✅ Dirección en Miami incluida</li>
              <li className="flex items-center gap-2">✅ Trazabilidad en tiempo real</li>
              <li className="flex items-center gap-2">✅ Entregas rápidas y seguras</li>
              <li className="flex items-center gap-2">✅ Notificación por WhatsApp cuando llega</li>
            </ul>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-mbe-red text-white font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity"
              >
                Abre tu casillero GRATIS →
              </a>
              <Link
                href="/tarifas"
                className="inline-block border-2 border-mbe-red text-mbe-red font-bold px-6 py-3 rounded hover:bg-mbe-red hover:text-white transition-colors"
              >
                Ver tarifas de envíos →
              </Link>
            </div>
          </div>

          {/* Store grid */}
          <div>
            <div className="text-mbe-gray text-sm font-semibold mb-4 text-center">Compra en tus tiendas favoritas:</div>
            <div className="grid grid-cols-4 gap-3">
              {STORES.map(store => (
                <div
                  key={store.name}
                  className="bg-white rounded-lg p-3 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow h-16"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={store.logo}
                      alt={`Compra en ${store.name} desde Panamá con Casillero MBE Colón`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 25vw, 12vw"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-white rounded-lg p-4 border-l-4 border-mbe-blue text-sm text-mbe-gray">
              <strong className="text-mbe-dark">💡 Tip de ahorro:</strong> Consolida tus paquetes con nosotros para ahorrar en el flete internacional.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
