importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js");

const CACHE_NAMES = {
    pages: "pages",
    assets: "assets",
    images: "images",
};

const CURRENT_CACHE_VERSION = "v1";

// Skip waiting during the install phase
self.addEventListener("install", () => {
    self.skipWaiting();
});

// Claim control over the clients in the activate phase
self.addEventListener("activate", (event) => {
    event.waitUntil(
        // Get all cache keys and delete those that don't match the current version
        caches
            .keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        function getCacheNamesToDelete() {
                            return Object.values(CACHE_NAMES).map((cache) => `${cache}-${CURRENT_CACHE_VERSION}`);
                        }

                        // Delete old caches if they don't match the current cache version
                        if (!getCacheNamesToDelete().includes(cacheName)) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                return self.clients.claim();
            })
    );
});

// Cache pages with a NetworkFirst strategy
workbox.routing.registerRoute(
    ({ request }) => request.mode === "navigate",
    new workbox.strategies.NetworkFirst({
        cacheName: `${CACHE_NAMES.pages}-${CURRENT_CACHE_VERSION}`,
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    })
);

// Cache assets (CSS, JS, etc.) with a StaleWhileRevalidate strategy
workbox.routing.registerRoute(
    ({ request }) =>
        request.destination === "style" || request.destination === "script" || request.destination === "worker",
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: `${CACHE_NAMES.assets}-${CURRENT_CACHE_VERSION}`,
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    })
);

// Cache images with a CacheFirst strategy and expiration control
workbox.routing.registerRoute(
    ({ request }) => request.destination === "image",
    new workbox.strategies.CacheFirst({
        cacheName: `${CACHE_NAMES.images}-${CURRENT_CACHE_VERSION}`,
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
            }),
        ],
    })
);
