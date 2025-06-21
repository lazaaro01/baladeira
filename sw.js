const cacheName = 'capivalley-cache-v1';
const assets = [
  './',
  '/welcome.html',
  '/resgate.html',
  '/select.html',
  '/quiz.html',
  '/quebra-cabeca.html',
  '/memoria.html',
  '/manifest.json',
  '/capa de carregamento.jpg',
  '/capa de carregamento.jpg',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
