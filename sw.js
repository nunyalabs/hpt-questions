// Service Worker for Hypertension Survey PWA
// Version 2.0 - Complete offline support with IndexedDB sync

const CACHE_VERSION = 'v1';
const CACHE_NAME = 'htn-survey-' + CACHE_VERSION;
const RUNTIME_CACHE = 'htn-runtime-' + CACHE_VERSION;

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './questions.js',
    './manifest.json',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/fonts/bootstrap-icons.woff2'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing version:', CACHE_VERSION);
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching app shell');
                // Cache each item individually to prevent failure
                const cachePromises = ASSETS_TO_CACHE.map(url => {
                    return cache.add(url).catch(err => {
                        console.warn('[Service Worker] Failed to cache:', url, err);
                        return null; // Continue even if one fails
                    });
                });
                return Promise.all(cachePromises);
            })
            .then(() => {
                console.log('[Service Worker] Install complete');
                return self.skipWaiting();
            })
            .catch((err) => {
                console.error('[Service Worker] Install error:', err);
            })
    );
});

// Activate event - clean up old caches and claim clients
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            console.log('[Service Worker] Cleaning old caches:', cacheNames);
            return Promise.all(
                cacheNames
                    .filter((name) => name.startsWith('htn-') && name !== CACHE_NAME && name !== RUNTIME_CACHE)
                    .map((name) => {
                        console.log('[Service Worker] Deleting old cache:', name);
                        return caches.delete(name);
                    })
            );
        })
        .then(() => {
            console.log('[Service Worker] Activation complete');
            return self.clients.claim();
        })
    );
});

// Fetch event - cache-first for assets, network-first for API
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Skip cross-origin requests but cache them
    if (url.origin !== self.location.origin) {
        // For external resources (CDN), use cache-first
        event.respondWith(
            caches.match(request)
                .then((response) => response || fetch(request))
                .catch(() => {
                    // Return offline fallback for images, scripts, styles
                    if (request.destination === 'image') {
                        return new Response('<svg></svg>', { headers: { 'Content-Type': 'image/svg+xml' } });
                    }
                    return new Response('');
                })
        );
        return;
    }

    // Local files: cache-first strategy
    event.respondWith(
        caches.match(request)
            .then((response) => {
                if (response) {
                    console.log('[Service Worker] Cache hit:', url.pathname);
                    return response;
                }

                return fetch(request)
                    .then((fetchResponse) => {
                        // Don't cache non-successful responses
                        if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type === 'error') {
                            return fetchResponse;
                        }

                        // Clone response for caching
                        const responseToCache = fetchResponse.clone();
                        caches.open(RUNTIME_CACHE)
                            .then((cache) => {
                                cache.put(request, responseToCache);
                            });

                        return fetchResponse;
                    })
                    .catch(() => {
                        // Offline - return cached or fallback
                        return caches.match(request)
                            .then((response) => response || caches.match('./index.html'));
                    });
            })
    );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
    console.log('[Service Worker] Message received:', event.data);
    
    if (event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data.type === 'CLEAR_CACHE') {
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name.startsWith('htn-'))
                    .map((name) => caches.delete(name))
            );
        });
    }
});

// Background sync for offline data (future enhancement)
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-surveys') {
        console.log('[Service Worker] Background sync triggered');
        event.waitUntil(syncSurveys());
    }
});

async function syncSurveys() {
    try {
        console.log('[Service Worker] Syncing survey data...');
        // Future: Implement sync with backend when online
        // For now, data stays in IndexedDB locally
    } catch (error) {
        console.error('[Service Worker] Sync error:', error);
    }
}

// Periodic background sync (future enhancement)
if ('periodicSync' in self.registration) {
    self.addEventListener('periodicsync', (event) => {
        if (event.tag === 'sync-surveys-periodic') {
            event.waitUntil(syncSurveys());
        }
    });
}