// service-worker.js

const CACHE_NAME = 'green-haven-cache';
const urlsToCache = [
  '/',
  '/index.html',
  'src/html/about-us.html',
  'src/html/article.html',
  'src/html/detail-article.html',
  'src/html/detail-plant.html',
  'src/html/gallery.html',
  'src/html/garden.html',
  'src/html/history-survey.html',
  'src/html/survey-result.html',
  'src/html/survey.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
