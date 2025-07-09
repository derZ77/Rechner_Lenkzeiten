
const CACHE_NAME = 'rechner-lenkzeiten-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './version.json',
  './libs/jquery.min.js',
  './libs/jspdf.min.js',
  './libs/html2canvas.min.js',
  './libs/jspdf.plugin.autotable.min.js',
  './service-worker.js'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(response => {
      return response || fetch(evt.request);
    })
  );
});

self.addEventListener('message', evt => {
  if (evt.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
