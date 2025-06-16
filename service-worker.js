const CACHE_NAME = "memoria-cache-v1";
const urlsToCache = [
    "/",
    "/memoria.html",
    "/manifest.json",
    "/icon-192.png",
    "/icon-512.png",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Cacheando arquivos')
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
  );
});
