
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

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});

self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
