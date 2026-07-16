/* Service Worker — Guia IBS/CBS (PWA) */
const CACHE = 'ibscbs-pwa-v24';
const CORE = [
  './index.html',
  './app.js',
  './docs-data.js',
  './reforma-tributaria.html',
  './manifest.webmanifest'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => Promise.all(
      CORE.map(u => c.add(u).catch(() => {}))   // ignora individual que falhar
    )).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (_) { return; }
  if (url.pathname.endsWith('.env')) return;              // NUNCA cachear a chave
  const sameOrigin = url.origin === self.location.origin;
  const isCdn = url.host.includes('cdnjs') || url.host.includes('fonts.g');
  if (!sameOrigin && !isCdn) return;                      // deixa passar direto (ex.: APIs de IA)

  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && res.status === 200) { const clone = res.clone(); caches.open(CACHE).then(c => c.put(req, clone)); }
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
