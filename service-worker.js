const CACHE_NAME = "cacanicks-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/manifest.json",
    "/icon-192.png",
    "/icon-512.png",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});
