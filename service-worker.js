const CACHE = "restaurantes-cache-v1";
const FILES = [
  "index.html",
  "manifest.json",
  "icon.png"
];

// Instalar SW
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

// Servir en offline
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
