import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes de Casillero y Envíos | MBE Colón',
  description: 'Resolvemos tus dudas sobre casillero Miami, envíos internacionales, tarifas, tiempos de entrega y servicios en MBE Colón, Panamá. Respuestas directas de expertos.',
  keywords: ['preguntas frecuentes casillero Miami', 'FAQ envíos internacionales Panamá', 'dudas casillero MBE', 'tarifas envíos Colón'],
  alternates: {
    canonical: 'https://mbecolon.com/preguntas-frecuentes',
  },
  openGraph: {
    title: 'Preguntas Frecuentes — Casillero Miami y Envíos | MBE Colón',
    description: 'Resolvemos tus dudas sobre casillero Miami, envíos internacionales, tarifas y servicios en Colón, Panamá.',
    url: 'https://mbecolon.com/preguntas-frecuentes',
    type: 'website',
    images: [
      { url: 'https://mbecolon.com/og-image.png', width: 1200, height: 630, alt: 'Preguntas Frecuentes — Casillero Miami, Envíos y Servicios' },
    ],
    siteName: 'MBE Colón',
    locale: 'es_PA',
  },
}

const faqData = [
  {
    category: 'Casillero Miami',
    questions: [
      {
        q: '¿Cuánto cuesta el casillero Miami en Panamá?',
        a: 'El casillero Miami en MBE Colón es GRATIS. No pagas por la dirección en Miami. Solo pagas cuando envías tus compras a Panamá. Paquetes pequeños (hasta 2 libras) desde $15. Paquetes medianos (2-10 libras) desde $25.',
      },
      {
        q: '¿Cuánto tarda un paquete de Miami a Colón, Panamá?',
        a: 'El tiempo de entrega depende del servicio elegido: DHL Express: 3-5 días hábiles. FedEx International: 4-7 días hábiles. UPS Standard: 5-10 días hábiles. Todos los servicios incluyen tracking en tiempo real.',
      },
      {
        q: '¿Cómo funciona el casillero Miami de MBE?',
        a: '1. Registra tu casillero gratis en mbecolon.com. 2. Recibes una dirección personalizada en Miami. 3. Compras en cualquier tienda online de USA. 4. Usa tu dirección MBE Miami como dirección de envío. 5. Cuando tu paquete llega a Miami, lo registramos y te notificamos. 6. Enviamos tu paquete a Colón.',
      },
      {
        q: '¿Puedo comprar en Amazon usando el casillero MBE?',
        a: 'Sí, absolutamente. Puedes comprar en Amazon, eBay, Shein, Walmart, Target, Nike, Adidas y cualquier tienda online de USA. Solo necesitas usar la dirección de envío que te proporcionamos en Miami.',
      },
      {
        q: '¿Qué productos NO se pueden enviar desde USA a Panamá?',
        a: 'Algunos productos restringidos incluyen: baterías de litio sueltas, líquidos inflamables, aerosoles, productos farmacéuticos sin receta, armas, drogas, productos animales vivos y alimentos perecederos.',
      },
    ],
  },
  {
    category: 'Envíos Internacionales',
    questions: [
      {
        q: '¿Cuáles son las tarifas de envío internacional desde Colón?',
        a: 'DHL Express desde $35 (documentos) y desde $45 (paquetes). FedEx International desde $30 (documentos) y desde $40 (paquetes). UPS Standard desde $25 (documentos) y desde $35 (paquetes). Carga marítima desde $5 por libra.',
      },
      {
        q: '¿Envían a la Zona Libre de Colón?',
        a: 'Sí, realizamos envíos a toda la Zona Libre de Colón y área de servicio. La Zona Libre tiene reglas aduaneras especiales. Trabajamos directamente con las aduanas para agilizar el proceso.',
      },
      {
        q: '¿Cómo puedo rastrear mi paquete?',
        a: 'Una vez que tu paquete está en tránsito, recibes un número de tracking por WhatsApp o email. Puedes rastrearlo en los sitios de DHL, FedEx o UPS. También puedes escribirnos al WhatsApp 474-5548.',
      },
      {
        q: '¿Cuál es la diferencia entre DHL, FedEx y UPS?',
        a: 'DHL: Más rápido (3-5 días), ideal para documentos urgentes. FedEx: Buen balance entre velocidad y costo (4-7 días). UPS: Opción más económica para paquetes grandes (5-10 días).',
      },
      {
        q: '¿Puedo enviar desde Shein, Temu o AliExpress?',
        a: 'Sí, puedes comprar en Shein, Temu, AliExpress y cualquier tienda online que envíe a direcciones en USA. Usa tu dirección MBE Miami.',
      },
    ],
  },
  {
    category: 'Otros Servicios',
    questions: [
      {
        q: '¿Cuánto tardan los bordados personalizados?',
        a: 'Uniformes individuales: 5-7 días hábiles. Pedidos corporativos grandes (50+ unidades): 10-15 días hábiles. Gorras y gorros: 3-5 días hábiles. Ofrecemos servicio urgente con recargo del 30%.',
      },
      {
        q: '¿Hacen envíos a todo Panamá o solo en Colón?',
        a: 'Realizamos envíos internacionales desde Colón a todo el mundo. Para envíos dentro de Panamá, trabajamos con servicios de courier local.',
      },
      {
        q: '¿Qué es la consolidación de paquetes?',
        a: 'La consolidación es cuando juntamos varios paquetes pequeños en un solo envío grande. Esto reduce significativamente el costo del flete. Ahorra hasta 40% en costos de envío.',
      },
      {
        q: '¿Aceptan pagos con tarjeta de crédito?',
        a: 'Aceptamos efectivo (USD y Balboas), tarjeta de crédito (Visa, Mastercard, Amex), tarjeta de débito, transferencia bancaria y facturación mensual para empresas.',
      },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.flatMap((section) =>
    section.questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  ),
}

export default function PreguntasFrecuentesPage() {
  return (
    <main className="min-h-screen bg-white pt-[88px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Preguntas Frecuentes</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Resolvemos tus dudas sobre casillero Miami, envíos internacionales, tarifas y servicios.
        </p>

        {faqData.map((section) => (
          <div key={section.category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#be1e2d]">{section.category}</h2>
            <div className="space-y-4">
              {section.questions.map((item) => (
                <details
                  key={item.q}
                  className="group border border-gray-200 rounded-lg overflow-hidden"
                >
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-lg pr-4">{item.q}</span>
                    <span className="text-[#be1e2d] group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="p-4 pt-0 text-gray-700 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">¿No encontraste tu respuesta?</h2>
          <p className="text-gray-600 mb-6">Escríbenos por WhatsApp o visita nuestra tienda.</p>
          <a
            href="https://wa.me/5074745548"
            className="inline-block bg-[#be1e2d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a01825] transition-colors"
          >
            WhatsApp: 474-5548
          </a>
          <p className="mt-4 text-gray-600">
            📍 Plaza Millenium Local F007, Colón, Panamá
          </p>
        </div>
      </section>
    </main>
  )
}
