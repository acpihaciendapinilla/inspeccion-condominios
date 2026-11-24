// Guarda la app en el teléfono para que abra sin señal.
// La página, el Google Sheet de configuración y los logos se buscan primero en internet,
// así los cambios llegan a todos; si no hay señal, se usa la última copia guardada.
const CACHE = "inspeccion-hp-v6";
const BASE = ["./", "./index.html", "./configuracion.json", "./manifest.json", "./icon-192.png", "./icon-512.png",
  "./logos/hacienda-pinilla.jpg",
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).catch(()=>{})); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  const fresco = url.origin === location.origin || url.hostname === "docs.google.com" || url.hostname === "lh3.googleusercontent.com";
  if (fresco) {
    const key = url.origin !== location.origin ? req.url : (req.mode === "navigate" ? "./index.html" : url.pathname);
    e.respondWith(fetch(req).then(r => {
      if (r.ok || r.type === "opaque") { const cp = r.clone(); caches.open(CACHE).then(c => c.put(key, cp)); }
      return r;
    }).catch(() => caches.match(key).then(hit => hit || caches.match(req))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok || r.type === "opaque") { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
    return r;
  })));
});
