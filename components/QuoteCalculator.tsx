'use client'

import { useState } from 'react'
import { CONTACT } from '@/lib/constants'
import { trackLead } from '@/lib/pixel'

const RATE_AEREO = 3.0
const RATE_MARITIMO_MIN = 3.0
const RATE_MARITIMO_MAX = 10.0

type Variant = 'casillero' | 'general'

interface QuoteCalculatorProps {
  variant?: Variant
  title?: string
  subtitle?: string
}

export default function QuoteCalculator({
  variant = 'casillero',
  title = 'Calcula el costo de tu envío',
  subtitle = 'Elige el tipo de envío, indica el peso y obtén una estimación inmediata. Sin compromiso.',
}: QuoteCalculatorProps) {
  const [modo, setModo] = useState<'aereo' | 'maritimo'>('aereo')
  const [peso, setPeso] = useState<string>('5')
  const [piesCubicos, setPiesCubicos] = useState<string>('1')
  const [tipoGeneral, setTipoGeneral] = useState('Sellos automáticos')
  const [detalle, setDetalle] = useState('')

  const [nombre, setNombre] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const isCasillero = variant === 'casillero'

  const pesoNum = parseFloat(peso) || 0
  const piesNum = parseFloat(piesCubicos) || 0

  const estimado =
    isCasillero && modo === 'aereo'
      ? pesoNum * RATE_AEREO
      : isCasillero
        ? piesNum * RATE_MARITIMO_MIN
        : null

  const estimadoTexto = isCasillero
    ? `desde $${(estimado ?? 0).toFixed(2)} USD`
    : 'Cotización personalizada'

  const modoLabel = isCasillero && modo === 'aereo' ? 'Aéreo Express' : isCasillero ? 'Marítimo' : tipoGeneral

  function buildWhatsAppMessage(): string {
    const lines = [
      'Hola, quiero una cotización de MBE Colón:',
      `• Servicio: ${isCasillero ? `Casillero Miami (${modoLabel})` : tipoGeneral}`,
    ]
    if (isCasillero && modo === 'aereo') lines.push(`• Peso: ${pesoNum} lb`)
    if (isCasillero && modo === 'maritimo') lines.push(`• Volumen: ${piesNum} ft³`)
    if (!isCasillero && detalle) lines.push(`• Detalle: ${detalle}`)
    lines.push(`• Estimación: ${estimadoTexto}`)
    if (nombre) lines.push(`• Me llamo: ${nombre}`)
    if (whatsapp) lines.push(`• Mi WhatsApp: ${whatsapp}`)
    return encodeURIComponent(lines.join('\n'))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!nombre.trim()) {
      setError('Por favor escribe tu nombre.')
      return
    }
    if (!whatsapp.trim() && !email.trim()) {
      setError('Indica tu WhatsApp o email para contactarte.')
      return
    }

    setLoading(true)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          servicio: isCasillero ? `Casillero Miami (${modoLabel})` : tipoGeneral,
          tipoEnvio: isCasillero ? modo : null,
          peso: isCasillero && modo === 'aereo' ? pesoNum : null,
          piesCubicos: isCasillero && modo === 'maritimo' ? piesNum : null,
          estimado: isCasillero ? estimado : null,
          detalle: isCasillero ? null : detalle,
          nombre,
          whatsapp,
          email,
          pagina: window.location.pathname,
        }),
      })
    } catch {
      // El lead se sigue enviando por WhatsApp aunque falle el guardado.
    } finally {
      setLoading(false)
      setSubmitted(true)
      trackLead(`quote_calculator_${isCasillero ? 'casillero' : 'general'}`)
    }
  }

  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=${buildWhatsAppMessage()}`

  return (
    <section className="bg-mbe-light py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-mbe-dark text-2xl md:text-3xl font-black mb-3">{title}</h2>
          <p className="text-mbe-gray max-w-xl mx-auto">{subtitle}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Selector de modo */}
          {isCasillero ? (
            <div className="grid grid-cols-2 gap-0 border-b border-gray-100">
              <button
                type="button"
                onClick={() => setModo('aereo')}
                className={`py-3 text-sm font-bold transition-colors ${modo === 'aereo' ? 'bg-mbe-red text-white' : 'bg-white text-mbe-gray hover:bg-mbe-light'}`}
              >
                ✈️ Aéreo Express
              </button>
              <button
                type="button"
                onClick={() => setModo('maritimo')}
                className={`py-3 text-sm font-bold transition-colors ${modo === 'maritimo' ? 'bg-mbe-red text-white' : 'bg-white text-mbe-gray hover:bg-mbe-light'}`}
              >
                🚢 Marítimo
              </button>
            </div>
          ) : (
            <div className="px-6 pt-6">
              <label className="block text-xs font-bold text-mbe-dark uppercase tracking-wider mb-2">Servicio</label>
              <select
                value={tipoGeneral}
                onChange={(e) => setTipoGeneral(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-mbe-gray focus:outline-none focus:ring-2 focus:ring-mbe-red"
              >
                <option>Sellos automáticos</option>
                <option>Bordados personalizados</option>
                <option>Impresión (tarjetas, brochures, banners)</option>
                <option>Envío internacional (DHL, FedEx, UPS)</option>
                <option>Carga marítima</option>
                <option>Compras por internet</option>
                <option>Otro</option>
              </select>
            </div>
          )}

          <div className="p-6 space-y-4">
            {isCasillero ? (
              modo === 'aereo' ? (
                <div>
                  <label className="block text-xs font-bold text-mbe-dark uppercase tracking-wider mb-2">Peso del paquete (libras)</label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-mbe-gray focus:outline-none focus:ring-2 focus:ring-mbe-red"
                    placeholder="Ej. 5"
                  />
                  <div className="mt-2 h-1 bg-mbe-light rounded-full overflow-hidden">
                    <div
                      className="h-full bg-mbe-red transition-all"
                      style={{ width: `${Math.min(100, (pesoNum / 50) * 100)}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-mbe-dark uppercase tracking-wider mb-2">Volumen (pies cúbicos)</label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={piesCubicos}
                    onChange={(e) => setPiesCubicos(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-mbe-gray focus:outline-none focus:ring-2 focus:ring-mbe-red"
                    placeholder="Ej. 1"
                  />
                  <p className="text-xs text-gray-400 mt-2">
                    Tarifa marítima desde ${RATE_MARITIMO_MIN}/ft³ hasta ${RATE_MARITIMO_MAX}/ft³ según volumen consolidado.
                  </p>
                </div>
              )
            ) : (
              <div>
                <label className="block text-xs font-bold text-mbe-dark uppercase tracking-wider mb-2">Describe lo que necesitas</label>
                <textarea
                  value={detalle}
                  onChange={(e) => setDetalle(e.target.value)}
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-mbe-gray focus:outline-none focus:ring-2 focus:ring-mbe-red resize-none"
                  placeholder="Ej. 2 sellos con logo, 20 polos bordados, 500 tarjetas…"
                />
              </div>
            )}

            {/* Estimación */}
            <div className="bg-mbe-light rounded-xl p-4 flex items-center justify-between">
              <span className="text-sm text-mbe-gray font-medium">Estimación:</span>
              <span className="text-mbe-red font-black text-xl">{estimadoTexto}</span>
            </div>
            {isCasillero && (
              <p className="text-xs text-gray-400 -mt-2">
                * Precio de referencia. La cotización exacta depende del peso, volumen y destino. Confírmala por WhatsApp.
              </p>
            )}

            {/* Formulario de lead */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-mbe-dark uppercase tracking-wider mb-1">Nombre</label>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-mbe-gray focus:outline-none focus:ring-2 focus:ring-mbe-red"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-mbe-dark uppercase tracking-wider mb-1">WhatsApp</label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-mbe-gray focus:outline-none focus:ring-2 focus:ring-mbe-red"
                      placeholder="+507 6XXX-XXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-mbe-dark uppercase tracking-wider mb-1">Email (opcional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-mbe-gray focus:outline-none focus:ring-2 focus:ring-mbe-red"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
                {error && <p className="text-mbe-red text-sm font-semibold">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-mbe-red text-white font-black py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {loading ? 'Enviando…' : 'Cotizar por WhatsApp →'}
                </button>
                <p className="text-xs text-center text-gray-400">
                  Al cotizar nos autorizas a contactarte para darte tu cotización exacta.
                </p>
              </form>
            ) : (
              <div className="pt-2 text-center">
                <p className="font-bold text-mbe-dark mb-2">¡Listo! Gracias, {nombre.split(' ')[0]} 👋</p>
                <p className="text-sm text-mbe-gray mb-4">
                  Te contactaremos en menos de 24 h. Mientras tanto, abre WhatsApp con tu cotización lista:
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLead('whatsapp_quote_calculator')}
                  className="inline-block bg-green-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-600 transition-colors"
                >
                  💬 Abrir WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}