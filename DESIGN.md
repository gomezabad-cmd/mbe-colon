---
name: MBE Colón
description: Sitio de marketing y blog SEO para la franquicia Mail Boxes ETC. en Colón, Panamá
colors:
  mbe-red: "#BE1E2D"
  mbe-blue: "#099CEA"
  mbe-dark: "#3A3A3A"
  mbe-gray: "#494C4F"
  mbe-light: "#F3F3F3"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.15em"
rounded:
  sm: "4px"
  md: "12px"
  lg: "16px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.mbe-red}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.mbe-red}"
  card:
    backgroundColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "16px"
---

# Design System: MBE Colón

## 1. Overview

**Creative North Star: "La Ventanilla Eficiente"**

MBE Colón existe para resolver algo puntual y llevar al visitante a una conversación de WhatsApp lo más rápido posible, no para impresionarlo con artificio visual. El sistema prioriza la iconografía clara sobre el adorno: cada servicio (casillero, envíos, carga marítima, impresión, bordados, sellos) se identifica de inmediato con un ícono trazado a mano, no un stock photo genérico. El rojo corporativo MBE marca sin ambigüedad dónde está la acción; el resto de la superficie se mantiene neutral y legible para no competir con esa señal.

Esto rechaza explícitamente el tono de agencia genérica sin personalidad y la frialdad corporativa distante: MBE Colón es el negocio de confianza del barrio, con el respaldo serio de una franquicia internacional, pero el trato debe sentirse cercano, no distante.

**Key Characteristics:**
- Iconografía trazada a mano en vez de stock photography para identificar servicios
- Un solo acento dominante (rojo) que marca acción; el azul queda en rol secundario de apoyo (stats, detalles de card)
- Elevación táctil: las cards responden al hover como si se pudiera levantar el paquete
- CTAs siempre apuntan a WhatsApp, nunca a un formulario genérico

## 2. Colors

Paleta restringida y funcional: dos acentos de marca sobre una base neutra, sin colores decorativos añadidos.

### Primary
- **Rojo Sello Corporativo** (#BE1E2D): domina CTAs, la barra superior de contacto, el borde de énfasis en cards y los íconos de `ServicesBar`. Es la señal inequívoca de "aquí se actúa" (cotizar, contactar, ver servicio).

### Secondary
- **Azul Casillero** (#099CEA): rol de apoyo — acento en stats ("34 centros"), tinte en cards alternas de `WhyUsSection`. Nunca compite con el rojo por atención primaria.

### Neutral
- **Gris Carbón** (#3A3A3A — `mbe-dark`): texto de cuerpo y titulares; también fondo de la barra de estadísticas.
- **Gris Medio** (#494C4F — `mbe-gray`): texto secundario, soporte.
- **Gris Niebla** (#F3F3F3 — `mbe-light`): fondos de hover en menús y separadores suaves.
- **Blanco** (#FFFFFF): superficie base de navegación, cards y secciones.

### Named Rules
**La Regla del Acento Único.** El rojo marca acción; el azul marca dato o apoyo. Nunca se usan ambos como CTA en el mismo componente — evita la ambigüedad de "¿cuál botón es el importante?".

## 3. Typography

**Display Font:** Inter (con fallback sans-serif)
**Body Font:** Inter (con fallback sans-serif)

**Character:** Una sola familia tipográfica llevada en pesos extremos (400 a 900) hace el trabajo de jerarquía completo, sin necesidad de una segunda fuente. Los titulares en negro extremo (900) leen como sello o estampado, reforzando el North Star de "ventanilla eficiente y seria".

### Hierarchy
- **Display** (900, `clamp(1.875rem, 4vw, 2.25rem)`, line-height 1.1): títulos de sección ("¿Por qué elegir MBE Colón?").
- **Title** (700, 1.125rem–1.25rem, line-height 1.3): nombres de servicio, títulos de card.
- **Body** (400, 1rem, line-height 1.6): párrafos descriptivos de servicio y blog; máximo ~65-75ch en columnas de texto largo.
- **Label** (700, 0.75rem, letter-spacing 0.15em, uppercase): eyebrows como "Nuestras Ventajas", texto de navegación secundaria.

### Named Rules
**La Regla del Peso Extremo.** La jerarquía se resuelve con peso tipográfico (400 → 700 → 900), no con una segunda familia de fuente. Introducir una serif o una segunda sans rompe la sobriedad de "ventanilla eficiente".

## 4. Elevation

El sitio usa elevación táctil y viva: las cards son planas en reposo pero responden con sombra pronunciada y desplazamiento vertical al hover, como si el usuario pudiera levantar físicamente el paquete o servicio. No es un sistema de capas tonales sutiles — la sombra es notoria y el movimiento es parte de la señal de interactividad, no un adorno discreto.

### Shadow Vocabulary
- **Reposo** (`box-shadow: 0 1px 3px rgba(0,0,0,0.1)` — Tailwind `shadow-sm`/`shadow-md`): estado base de cards y barra de navegación.
- **Hover activo** (`box-shadow: 0 20px 25px rgba(0,0,0,0.15)` — Tailwind `shadow-xl`, combinado con `-translate-y-2`): estado de interacción en cards de `WhyUsSection` y `ServicesBar`.

### Named Rules
**La Regla del Levantamiento.** Toda card interactiva debe subir físicamente (`translateY` negativo) al mismo tiempo que su sombra se intensifica. Una sombra que crece sin movimiento se siente muerta; no cumple el North Star táctil.

## 5. Components

### Buttons
- **Shape:** esquinas ligeramente redondeadas (4px, Tailwind `rounded`), nunca completamente cuadradas ni pill-shaped.
- **Primary:** fondo Rojo Sello Corporativo (#BE1E2D), texto blanco, peso 700, padding `8px 16px` (desktop) / `12px 16px` (CTA móvil de ancho completo).
- **Hover / Focus:** `opacity: 0.9` en desktop; sin necesidad de cambio de color, la opacidad basta para señalar interactividad sin diluir la marca.
- **Ghost (nav links):** texto `mbe-dark`, transición de color a `mbe-red` en hover, sin fondo ni borde.

### Cards / Containers
- **Corner Style:** 12–16px (`rounded-xl` / `rounded-2xl`).
- **Background:** blanco sólido; overlay de color al 30% de opacidad sobre imagen cuando aplica.
- **Shadow Strategy:** ver Elevación — reposo sutil, hover pronunciado con levantamiento.
- **Border:** borde superior de 4px en el color de rol (`border-t-4 border-mbe-red` o `border-mbe-blue`) como firma de categoría; nunca un borde lateral (`border-left`) — esa variante está prohibida por regla general de diseño.
- **Internal Padding:** 16px.

### Navigation
- **Style:** barra fija de dos niveles — franja superior roja con contacto directo (dirección, teléfono, WhatsApp), franja principal blanca con logo y enlaces.
- **Typography:** enlaces en `text-sm font-medium`, color `mbe-dark` con transición a `mbe-red` en hover.
- **Estados:** el CTA final de la barra ("Cotizar ahora →") siempre en rojo sólido, nunca como link de texto.
- **Mobile:** colapsa a hamburguesa; el CTA de WhatsApp se convierte en botón de ancho completo al fondo del menú desplegado, nunca se pierde.

### Signature Component: TiltBox (ServicesBar)
Cada servicio se representa como una caja cuadrada roja con ícono SVG trazado a mano (no stock icons de librería) que se inclina en 3D siguiendo el cursor (`perspective(600px) rotateX/rotateY`, rango ±15°) y escala ligeramente al hover. Es la pieza más juguetona del sistema, deliberadamente contenida a esta única sección para no romper la seriedad general.

## 6. Do's and Don'ts

### Do:
- **Do** usar el rojo (#BE1E2D) exclusivamente para la acción principal de cada componente (CTA, ícono de servicio activo).
- **Do** mantener toda jerarquía tipográfica dentro de la familia Inter, variando solo el peso (400/700/900).
- **Do** acompañar todo hover de card con sombra creciente + `translateY` negativo (Regla del Levantamiento).
- **Do** dirigir cada CTA de servicio a una conversación de WhatsApp pre-llenada, nunca a un formulario genérico.
- **Do** usar el borde superior de color (`border-t-4`) como firma de categoría en cards.

### Don't:
- **Don't** usar `border-left` o `border-right` como acento de color en cards o callouts — usar el borde superior o el fondo en su lugar.
- **Don't** introducir una segunda familia tipográfica; la jerarquía se resuelve solo con peso.
- **Don't** dejar que el azul secundario compita con el rojo como color de CTA en el mismo componente.
- **Don't** adoptar un tono corporativo frío o distante — el trato debe sentirse del negocio de confianza del barrio, no de una franquicia impersonal.
- **Don't** usar stock photography genérica para representar servicios cuando existe ya un ícono SVG propio para ese servicio.
