/* GeoPromo — popup de promos por geolocalización para mbecolon.com
   Port autocontenido de la demo mbecolon-geo-promo (geo.js + popup.js + analytics.js)
   - Clases con prefijo gp- para no chocar con los estilos del sitio (Tailwind)
   - IDs originales (promoModal, promoForm, promoEmail…) para reutilizar tests/e2e
   - Promo por IP (ipwho.is) → haversine → promo default; override ?city=<id>
   - Modal automático a los 2s (no vuelve en 7 días); pill flotante para reabrir
   - Formulario → POST /api/send-promo (Brevo) · CTA WhatsApp · GPS opt-in
   - geoTrack() empuja eventos al dataLayer del GA4 del sitio (G-6T4HQRJ1J0)
*/
(function () {
  "use strict";
  if (window.__gpLoaded) return;
  window.__gpLoaded = true;

  var $ = function (id) { return document.getElementById(id); };
  var PROMOS = null;
  var detected = null;   // {ip, city, country, lat, lng}
  var overrideId = null; // id de ciudad forzada por ?city=
  var currentPromo = null; // {city, promo, source}
  var DISMISS_KEY = "gp_dismissed_at";
  var DISMISS_MS = 7 * 24 * 60 * 60 * 1000;

  var params = new URLSearchParams(location.search);
  var MOCK = params.get("mock") === "1";

  /* ================================================================
     GA4 — encola en el dataLayer del sitio. El sitio define su stub
     en lazyOnload (ga-init); si aún no existe, creamos uno idéntico
     para no perder eventos tempranos (los reemplaza ga-init igual).
     ================================================================ */
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function () { window.dataLayer.push(arguments); };
  }

  var utm = {};
  try {
    ["utm_source", "utm_medium", "utm_campaign"].forEach(function (k) {
      var v = params.get(k);
      if (v) utm[k] = v;
    });
  } catch { /* noop */ }

  function geoTrack(name, eventParams) {
    eventParams = eventParams || {};
    Object.keys(utm).forEach(function (k) {
      if (eventParams[k] === undefined) eventParams[k] = utm[k];
    });
    window.gtag("event", name, eventParams);
  }

  /* ================================================================
     CSS inyectado (prefijo gp-). Mismo look que la demo: modal oscuro
     con acento rojo MBE (#be1e2d). z-index altísimo para quedar por
     encima de navbar (z-50), widget Forja y botón de WhatsApp.
     ================================================================ */
  var css = [
    ".gp-pill{position:fixed;left:18px;bottom:18px;z-index:99999;background:linear-gradient(135deg,#22d3a6,#0ea5a0);color:#04241c;border:0;border-radius:999px;padding:12px 18px;font-weight:800;font-size:.92rem;font-family:inherit;line-height:1.3;cursor:pointer;box-shadow:0 20px 60px rgba(0,0,0,.45);animation:gp-pop .3s ease}",
    "@keyframes gp-pop{from{transform:scale(.8);opacity:0}}",
    "@keyframes gp-fade{from{opacity:0}}",
    "@keyframes gp-rise{from{transform:translateY(24px) scale(.97);opacity:0}}",
    ".gp-modal{position:fixed;inset:0;z-index:2147483646;display:grid;place-items:center;padding:20px;box-sizing:border-box}",
    ".gp-modal[hidden]{display:none}",
    ".gp-backdrop{position:absolute;inset:0;background:rgba(4,7,18,.78);backdrop-filter:blur(6px);animation:gp-fade .25s ease}",
    ".gp-card{position:relative;width:min(460px,100%);max-height:calc(100vh - 40px);overflow-y:auto;background:linear-gradient(180deg,#1a2450,#131a38);border:1px solid rgba(120,150,255,.25);border-radius:22px;padding:30px 26px 26px;box-shadow:0 20px 60px rgba(0,0,0,.45);color:#eef1ff;animation:gp-rise .3s cubic-bezier(.2,.9,.3,1.2);box-sizing:border-box}",
    ".gp-close{position:absolute;top:10px;right:14px;background:none;border:0;color:#9aa3c7;font-size:1.7rem;cursor:pointer;line-height:1;padding:0}",
    ".gp-close:hover{color:#fff}",
    ".gp-badge{display:inline-flex;background:rgba(34,211,166,.14);color:#22d3a6;border:1px solid rgba(34,211,166,.35);font-size:.8rem;font-weight:700;padding:5px 12px;border-radius:999px;margin-bottom:14px}",
    ".gp-title{font-size:1.6rem;line-height:1.2;letter-spacing:-.01em;margin:0;color:#eef1ff}",
    ".gp-sub{color:#9aa3c7;margin-top:8px;font-size:.95rem}",
    ".gp-code{margin-top:14px;background:rgba(79,140,255,.12);border:1px dashed rgba(79,140,255,.5);border-radius:10px;padding:10px 14px;text-align:center;font-size:.95rem}",
    ".gp-code strong{color:#9fc1ff;letter-spacing:.12em}",
    ".gp-form{margin-top:18px;display:grid;gap:10px}",
    ".gp-input{width:100%;background:#0c1230;border:1px solid rgba(255,255,255,.09);color:#eef1ff;border-radius:12px;padding:14px 16px;font-size:1rem;font-family:inherit;outline:none;transition:border-color .15s ease;box-sizing:border-box}",
    ".gp-input:focus{border-color:#be1e2d}",
    ".gp-input.is-invalid{border-color:#ff6b6b}",
    ".gp-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;border-radius:12px;padding:13px 22px;font-weight:700;font-size:.95rem;font-family:inherit;cursor:pointer;text-decoration:none;border:1px solid transparent;transition:transform .15s ease,box-shadow .15s ease,background .15s ease}",
    ".gp-btn:active{transform:translateY(1px)}",
    ".gp-btn--primary{background:linear-gradient(135deg,#be1e2d,#8f1621);color:#fff;box-shadow:0 10px 30px rgba(190,30,45,.35)}",
    ".gp-btn--primary:hover{box-shadow:0 12px 36px rgba(190,30,45,.5)}",
    ".gp-btn--primary:disabled{opacity:.6;cursor:wait}",
    ".gp-btn--ghost{background:transparent;color:#eef1ff;border-color:rgba(255,255,255,.09);width:auto}",
    ".gp-btn--ghost:hover{background:rgba(255,255,255,.05)}",
    ".gp-btn--wa{background:rgba(37,211,102,.12);border:1px solid rgba(37,211,102,.5);color:#8ceebb}",
    ".gp-btn--wa:hover{background:rgba(37,211,102,.2)}",
    ".gp-error{color:#ff6b6b;font-size:.85rem;margin:0}",
    ".gp-fineprint{color:#9aa3c7;font-size:.78rem;text-align:center;display:grid;gap:6px;margin:0}",
    ".gp-success{text-align:center;padding:8px 0;animation:gp-rise .3s ease}",
    ".gp-success-icon{font-size:2.6rem}",
    ".gp-success h3{margin:10px 0 6px;font-size:1.15rem;color:#eef1ff}",
    ".gp-success p{color:#9aa3c7;font-size:.93rem;margin:6px 0 0}",
    ".gp-success .gp-btn{margin-top:16px}",
    ".gp-toast{position:fixed;bottom:20px;right:20px;z-index:2147483647;background:#10352b;border:1px solid rgba(34,211,166,.5);color:#c9fff1;padding:12px 18px;border-radius:12px;font-size:.9rem;font-family:inherit;box-shadow:0 20px 60px rgba(0,0,0,.45);animation:gp-rise .25s ease}",
    ".gp-toast--err{background:#3a1420;border-color:rgba(255,107,107,.55);color:#ffd7d7}",
    ".gp-sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}",
    ".gp-linklike{background:none;border:0;color:#ff9aa8;cursor:pointer;font-size:inherit;font-family:inherit;text-decoration:underline;padding:0}",
    "@media (max-width:640px){.gp-card{padding:26px 20px 22px}}"
  ].join("");

  var styleEl = document.createElement("style");
  styleEl.id = "gp-style";
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ================================================================
     Markup — mismos IDs que la demo (tests/e2e), clases con prefijo gp-
     ================================================================ */
  document.body.insertAdjacentHTML("beforeend",
    '<button class="gp-pill" id="promoPill" type="button" hidden>🎁 <span id="promoPillText">Ver mi promo</span></button>' +
    '<div class="gp-modal" id="promoModal" hidden role="dialog" aria-modal="true" aria-labelledby="promoTitle">' +
      '<div class="gp-backdrop" data-close></div>' +
      '<div class="gp-card">' +
        '<button class="gp-close" type="button" data-close aria-label="Cerrar">×</button>' +
        '<div class="gp-badge" id="promoBadge">📍 Colón</div>' +
        '<h2 class="gp-title" id="promoTitle">Promo</h2>' +
        '<p class="gp-sub" id="promoSubtitle"></p>' +
        '<div class="gp-code" id="promoCode">Código: <strong></strong></div>' +
        '<form class="gp-form" id="promoForm" novalidate>' +
          '<label class="gp-sr-only" for="promoEmail">Tu correo</label>' +
          '<input class="gp-input" id="promoEmail" name="email" type="email" placeholder="tucorreo@email.com" autocomplete="email" required>' +
          '<button class="gp-btn gp-btn--primary" type="submit" id="promoSubmit">Quiero mi promo</button>' +
          '<button class="gp-btn gp-btn--wa" type="button" id="promoWhatsapp">💬 Consultar por WhatsApp</button>' +
          '<p class="gp-error" id="promoError" hidden></p>' +
          '<p class="gp-fineprint">Al enviar aceptas que te contactemos con esta promo. Sin spam.<br>' +
            '<button type="button" class="gp-linklike" id="gpsBtn">📍 Usar ubicación exacta</button>' +
          '</p>' +
        '</form>' +
        '<div class="gp-success" id="promoSuccess" hidden>' +
          '<div class="gp-success-icon">✅</div>' +
          '<h3>¡Enviado! Revisa tu correo</h3>' +
          '<p>Te enviamos la promo con tu código a <strong id="successEmail"></strong>.</p>' +
          '<p class="gp-code">Código: <strong id="successCode"></strong></p>' +
          '<button class="gp-btn gp-btn--ghost" type="button" data-close>Seguir navegando</button>' +
        '</div>' +
      '</div>' +
    '</div>'
  );

  var modal = $("promoModal");

  /* ================================================================
     Utilidades UI
     ================================================================ */
  function toast(msg, isErr) {
    var t = document.createElement("div");
    t.className = "gp-toast" + (isErr ? " gp-toast--err" : "");
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 4200);
  }

  function validEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  }

  /* ================================================================
     Geolocalización — ipwho.is → haversine → promo default
     ================================================================ */
  function haversineKm(aLat, aLng, bLat, bLng) {
    var R = 6371;
    var dLat = (bLat - aLat) * Math.PI / 180;
    var dLng = (bLng - aLng) * Math.PI / 180;
    var s = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(aLat * Math.PI / 180) * Math.cos(bLat * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * R * Math.asin(Math.sqrt(s));
  }

  function matchCity(lat, lng) {
    if (!PROMOS) return null;
    var best = null, bestDist = Infinity;
    PROMOS.cities.forEach(function (c) {
      var d = haversineKm(lat, lng, c.lat, c.lng);
      if (d <= c.radius_km && d < bestDist) { best = c; bestDist = d; }
    });
    return best;
  }

  function detectByIp() {
    return fetch("https://ipwho.is/")
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (!d || !d.success) throw new Error("ipwho.is falló");
        detected = { ip: d.ip, city: d.city || "", country: d.country_code || d.country || "", lat: d.latitude, lng: d.longitude };
        return detected;
      });
  }

  function resolve() {
    if (overrideId && overrideId !== "auto") {
      var byId = PROMOS.cities.filter(function (c) { return c.id === overrideId; })[0];
      if (byId) return { city: byId, source: "selector", detected: detected };
    }
    if (detected && typeof detected.lat === "number") {
      var m = matchCity(detected.lat, detected.lng);
      if (m) return { city: m, source: "ip", detected: detected };
      return { city: null, source: "ip", detected: detected };
    }
    return { city: null, source: "none", detected: null };
  }

  /* ================================================================
     Modal
     ================================================================ */
  function fillModal(cityName, promo) {
    $("promoBadge").textContent = "📍 " + cityName;
    $("promoTitle").textContent = promo.title;
    $("promoSubtitle").textContent = promo.subtitle;
    $("promoCode").innerHTML = "Código: <strong>" + promo.code + "</strong>";
    $("promoSubmit").textContent = promo.buttonLabel || ("Quiero mi " + promo.discount + " OFF");
  }

  function applyResolution(res) {
    if (res.city) {
      currentPromo = { city: res.city, promo: res.city.promo, source: res.source };
      fillModal(res.city.name, res.city.promo);
      $("promoPillText").textContent = "🎁 Ver promo " + res.city.name;
    } else {
      var def = PROMOS.default;
      currentPromo = { city: null, promo: def.promo, source: "default" };
      fillModal("online", def.promo);
      $("promoPillText").textContent = "🎁 Ver mi promo";
    }
    geoTrack("geo_resolved", {
      city_id: currentPromo.city ? currentPromo.city.id : "default",
      city_name: currentPromo.city ? currentPromo.city.name : "online",
      source: currentPromo.source,
      detected_ip_city: res.detected && res.detected.city ? res.detected.city : "n/d"
    });
  }

  function wasRecentlyDismissed() {
    var at = parseInt(localStorage.getItem(DISMISS_KEY) || "0", 10);
    return (Date.now() - at) < DISMISS_MS;
  }

  function openModal(reason) {
    if (!currentPromo) return;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    $("promoForm").hidden = false;
    $("promoSuccess").hidden = true;
    $("promoError").hidden = true;
    setTimeout(function () { $("promoEmail").focus(); }, 150);
    geoTrack("promo_shown", {
      city_id: currentPromo.city ? currentPromo.city.id : "default",
      promo_code: currentPromo.promo.code,
      reason: reason || "auto"
    });
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
    $("promoPill").hidden = false;
    geoTrack("promo_dismissed", { promo_code: currentPromo ? currentPromo.promo.code : "n/a" });
  }

  modal.addEventListener("click", function (e) {
    if (e.target.hasAttribute && e.target.hasAttribute("data-close")) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });
  $("promoPill").addEventListener("click", function () {
    $("promoPill").hidden = true;
    openModal("pill");
  });

  /* ================================================================
     CTA WhatsApp (mensaje prellenado con la promo activa)
     ================================================================ */
  $("promoWhatsapp").addEventListener("click", function () {
    var wa = (PROMOS && PROMOS.brand && PROMOS.brand.whatsapp) || "50769495100";
    var promo = currentPromo ? currentPromo.promo : null;
    var msg = promo
      ? "Hola! Estoy en mbecolon.com y me interesa la promo " + promo.code + " — " + promo.title
      : "Hola! Estoy en mbecolon.com y quiero una cotización";
    geoTrack("promo_whatsapp_click", { promo_code: promo ? promo.code : "none" });
    window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });

  /* ================================================================
     Formulario → correo real vía /api/send-promo (Brevo)
     ================================================================ */
  $("promoForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var email = $("promoEmail").value.trim().toLowerCase();
    var err = $("promoError");

    if (!validEmail(email)) {
      $("promoEmail").classList.add("is-invalid");
      err.textContent = "Escribe un correo válido (ej. nombre@dominio.com).";
      err.hidden = false;
      geoTrack("promo_email_invalid", { promo_code: currentPromo.promo.code });
      return;
    }
    $("promoEmail").classList.remove("is-invalid");
    err.hidden = true;

    var btn = $("promoSubmit");
    btn.disabled = true;
    btn.textContent = "Enviando…";

    geoTrack("promo_submit", {
      promo_code: currentPromo.promo.code,
      city_id: currentPromo.city ? currentPromo.city.id : "default"
    });

    var payload = {
      email: email,
      cityId: currentPromo.city ? currentPromo.city.id : "default",
      promoCode: currentPromo.promo.code,
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || ""
    };

    var req = MOCK
      ? Promise.resolve({ ok: true, json: function () { return Promise.resolve({ ok: true, mock: true }); } })
      : fetch("/api/send-promo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

    req.then(function (r) { return r.json().then(function (j) { return { ok: r.ok, body: j }; }); })
      .then(function (res) {
        if (!res.ok || !res.body.ok) throw new Error(res.body && res.body.error ? res.body.error : "Error al enviar");
        $("promoForm").hidden = true;
        $("successEmail").textContent = email;
        $("successCode").textContent = currentPromo.promo.code;
        $("promoSuccess").hidden = false;
        localStorage.setItem(DISMISS_KEY, String(Date.now()));
        geoTrack("promo_email_captured", {
          promo_code: currentPromo.promo.code,
          city_id: currentPromo.city ? currentPromo.city.id : "default",
          mock: !!MOCK
        });
        geoTrack("promo_email_sent", { promo_code: currentPromo.promo.code });
        toast("✅ Promo enviada a " + email);
      })
      .catch(function (e2) {
        err.textContent = "No se pudo enviar: " + e2.message;
        err.hidden = false;
        geoTrack("promo_email_error", { error: e2.message });
      })
      .finally(function () {
        btn.disabled = false;
        btn.textContent = currentPromo.promo.buttonLabel || ("Quiero mi " + currentPromo.promo.discount + " OFF");
      });
  });

  /* ================================================================
     GPS opt-in (Permissions-Policy: geolocation=(self) ya lo permite)
     ================================================================ */
  $("gpsBtn").addEventListener("click", function () {
    if (!navigator.geolocation) { toast("Tu navegador no soporta GPS", true); return; }
    geoTrack("gps_prompt", {});
    navigator.geolocation.getCurrentPosition(function (pos) {
      var lat = pos.coords.latitude, lng = pos.coords.longitude;
      var match = null, best = Infinity;
      PROMOS.cities.forEach(function (c) {
        var d = haversineKm(lat, lng, c.lat, c.lng);
        if (d <= c.radius_km && d < best) { match = c; best = d; }
      });
      geoTrack("gps_granted", {
        city_id: match ? match.id : "no_match",
        distance_km: match ? Math.round(best) : null
      });
      if (match) {
        fillModal(match.name, match.promo);
        currentPromo = { city: match, promo: match.promo, source: "gps" };
        toast("📍 Ubicación exacta: " + match.name + " → promo aplicada");
      } else {
        toast("📍 Estás fuera de las zonas con promo activa", true);
      }
    }, function () {
      geoTrack("gps_denied", {});
      toast("Permiso de ubicación denegado (se mantiene promo por IP)", true);
    }, { timeout: 10000, maximumAge: 60000 });
  });

  /* ================================================================
     Init
     ================================================================ */
  var saved = params.get("city") || localStorage.getItem("gp_city");
  if (saved) overrideId = saved;

  fetch("/geo-promo/promos.json")
    .then(function (r) { return r.json(); })
    .then(function (data) {
      PROMOS = data;
      return detectByIp().catch(function (e) {
        detected = null;
        console.warn("[GeoPromo] Detección IP no disponible:", e.message);
        return null;
      });
    })
    .then(function () {
      if (!PROMOS) return;
      var res = resolve();
      applyResolution(res);
      if (!wasRecentlyDismissed()) {
        setTimeout(function () { openModal("auto_2s"); }, 2000);
      } else {
        $("promoPill").hidden = false;
      }
    })
    .catch(function (e) {
      console.warn("[GeoPromo] No se pudo iniciar:", e.message);
    });
})();
