const CACHE_NAME = 'my-app-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/developer-paths',
  '/about',
  '/contact',
  '/frontend-developer',
  '/backend-developer',
  '/api-developer',
  '/database-developer',
  '/data-scientist',
  '/fullstack-developer',
  '/cloud-architect',
  '/blockchain-developer',
  '/uxui-designer',
  '/cybersecurity',
  '/machine-learning',
  '/python-developer',
  '/java-developer',
  '/cpp-developer',
  '/devops-engineer',
  '/ios-developer',
  '/android-developer',
  '/game-developer',
  '/iot-developer',
  // Add more paths as necessary
];

// Install event - cache the URLs
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Fetch event - serve from cache if available, otherwise fetch from network
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (URLS_TO_CACHE.includes(url.pathname)) {
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(event.request)
            .then((response) => {
              if (response && response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(event.request, responseClone);
                });
              }
              return response;
            });
        })
    );
  } else {
    // Serve other requests directly from the network
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          return cachedResponse || fetch(event.request);
        })
    );
  }
});

// Activate event - remove old caches if needed
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});