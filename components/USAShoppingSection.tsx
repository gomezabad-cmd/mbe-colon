import { CONTACT } from '@/lib/constants'

const STORES = [
  { name: 'Amazon', emoji: '📦' },
  { name: 'eBay', emoji: '🛒' },
  { name: 'Shein', emoji: '👗' },
  { name: 'AliExpress', emoji: '🛍️' },
  { name: 'IKEA', emoji: '🪑' },
  { name: 'Fashion Nova', emoji: '👠' },
  { name: 'Walmart', emoji: '🏪' },
  { name: 'Target', emoji: '🎯' },
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
              ¡Compra como si<br />
              <span className="text-mbe-red">vivieras en USA</span><br />
              y recíbelo en Colón!
            </h2>
            <p className="text-mbe-gray text-base mb-6 leading-relaxed">
              Con tu casillero MBE en Miami, tienes una dirección de envío en Estados Unidos. Compra en cualquier tienda online y nosotros te lo traemos directamente a Colón.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-mbe-gray">
              <li className="flex items-center gap-2">✅ Dirección en Miami incluida</li>
              <li className="flex items-center gap-2">✅ Consolidación de paquetes</li>
              <li className="flex items-center gap-2">✅ Tramitación de aduana</li>
              <li className="flex items-center gap-2">✅ Notificación por WhatsApp cuando llega</li>
            </ul>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-mbe-red text-white font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Abre tu casillero GRATIS →
            </a>
          </div>

          {/* Store grid */}
          <div>
            <div className="text-mbe-gray text-sm font-semibold mb-4 text-center">Compra en tus tiendas favoritas:</div>
            <div className="grid grid-cols-4 gap-3">
              {STORES.map(store => (
                <div
                  key={store.name}
                  className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl mb-1">{store.emoji}</div>
                  <div className="text-xs font-semibold text-mbe-dark leading-tight">{store.name}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-white rounded-lg p-4 border-l-4 border-mbe-blue text-sm text-mbe-gray">
              <strong className="text-mbe-dark">💡 Tip de aduana:</strong> Te ayudamos con toda la documentación para importar tus compras sin complicaciones.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
