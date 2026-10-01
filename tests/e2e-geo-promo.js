/* E2E GeoPromo en mbecolon.com (preview)
   Uso (Playwright NO es dependencia del repo; apuntar NODE_PATH a una instalación local):
     NODE_PATH=<...>\pwtest\node_modules node tests/e2e-geo-promo.js "<url-preview>?city=miami"
   Verifica: popup automático → correo → éxito + evento promo_email_sent en dataLayer
   (el sitio empuja eventos como Arguments de gtag: ('event', name, params)).
*/
/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require('playwright');
const os = require('os');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', e => consoleErrors.push('PAGEERROR: ' + e.message));

  const gaHits = [];
  page.on('request', req => {
    const u = req.url();
    if (u.includes('/g/collect') || u.includes('google-analytics.com/g/collect')) gaHits.push(u);
  });

  const url = process.argv[2];
  if (!url) { console.error('Falta la URL: node tests/e2e-geo-promo.js "<url>?city=miami"'); process.exit(2); }

  console.log('1. Abriendo landing (' + url + ')...');
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });

  console.log('2. Esperando popup automático (+2s)...');
  await page.waitForSelector('#promoModal:not([hidden])', { timeout: 20000 });
  console.log('   ✓ Popup ABIERTO');
  const badge = (await page.textContent('#promoBadge')).trim();
  console.log('   badge:', badge);

  console.log('3. Llenando correo geo1@uberip.com y enviando...');
  await page.fill('#promoEmail', 'geo1@uberip.com');
  await page.click('#promoSubmit');

  console.log('4. Esperando resultado (success o error, hasta 45s, con reintentos)...');
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await page.waitForFunction(() => {
        const s = document.getElementById('promoSuccess');
        const e = document.getElementById('promoError');
        return !s.hidden || !e.hidden;
      }, { timeout: 45000 });
      break;
    } catch {
      const btnText = await page.textContent('#promoSubmit');
      const errHidden = await page.evaluate(() => document.getElementById('promoError').hidden);
      console.log(`   intento ${attempt}: timeout. btn="${btnText.trim()}" errHidden=${errHidden} → reintentando click`);
      if (attempt < 3) {
        await page.evaluate(() => { document.getElementById('promoError').hidden = true; document.getElementById('promoSubmit').disabled = false; });
        await page.click('#promoSubmit');
      }
    }
  }

  // los hits de GA pueden tardar en flushear
  await page.waitForTimeout(3000);

  const result = await page.evaluate(() => ({
    modalHidden: document.getElementById('promoModal').hidden,
    formHidden: document.getElementById('promoForm').hidden,
    successHidden: document.getElementById('promoSuccess').hidden,
    successEmail: document.getElementById('successEmail').textContent,
    successCode: document.getElementById('successCode').textContent,
    btn: document.getElementById('promoSubmit').textContent.trim(),
    errHidden: document.getElementById('promoError').hidden,
    errText: document.getElementById('promoError').hidden ? '' : document.getElementById('promoError').textContent,
    // dataLayer del sitio: items son Arguments de gtag ('event', name, params) u objetos planos
    dataLayer: window.dataLayer.map(e => {
      if (!e) return null;
      try {
        if (typeof e === 'object' && 'event' in e && typeof e.event === 'string') return e.event;
        if (e[0] === 'event' && typeof e[1] === 'string') return e[1];
      } catch { /* Arguments raro */ }
      return null;
    }).filter(Boolean),
  }));

  const shot = path.join(os.tmpdir(), 'geo-promo-e2e.png');
  await page.screenshot({ path: shot, fullPage: false });

  console.log('=== RESULTADO UI ===');
  console.log(JSON.stringify(result, null, 2));
  const gaSent = gaHits.filter(u => u.includes('en=promo_email_sent'));
  console.log('hits g/collect:', gaHits.length, '| con en=promo_email_sent:', gaSent.length);
  console.log('screenshot:', shot);
  console.log('console errors:', consoleErrors.length ? consoleErrors : 'ninguno');

  const ok = !result.successHidden
    && result.successEmail.includes('geo1@uberip.com')
    && result.dataLayer.includes('promo_email_sent');
  console.log(ok ? 'E2E: PASS ✓' : 'E2E: FAIL ✗');
  await browser.close();
  process.exit(ok ? 0 : 1);
})().catch(e => { console.error('FATAL:', e.message); process.exit(2); });
