const cacheName = 'prayer-counter-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './images/jesus.png',
  './images/mary.png',
  './images/dove.png',
  './images/icons/icon-192.png',
  './images/icons/icon-512.png'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== cacheName).map(k => caches.delete(k))
      )
    )
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
