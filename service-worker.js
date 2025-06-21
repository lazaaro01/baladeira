const cacheName = "capi-valley-v1";
const assetsToCache = [
  "/welcome.html",
  "/select.html",
  "/quiz.html",
  "/quebra-cabeca.html",
  "/resgate.html",
  "/memoria.html",
  "/manifest.json",
  "/qb0.jpg",
  "/qb1.jpg",
  "/sucesso.jpg",
  "/selecao.jpg",
  "/quiz.png",
  "/RESGATE DO CACÁO.png",
  "/QUEBRA CABEÇA.png",
  "/qual nome do personagem.png",
  "/personagem baladeira.png",
  "/memoria1.jpg",
    "/memoria2.jpg",
    "/memoria3.jpg",
    "/memoria4.jpg",
    "/memoria5.jpg",
    "/memoria6.jpg",
    "/memoria.png",
    "/lixo_plastico.png",
  "/lixo_papel.png",
  "/lixo_vidro.png",
  "/lixo_metal.png",
  "/falha.jpg",
  "/basememoria.png",
  "/Capitu.png",
  "/Cacáo.png",
  "/cacaimg.jpg",
  "/capa de carregamento.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
