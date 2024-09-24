importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js");

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

workbox.core.clientsClaim();

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(
    ({ request }) => request.mode === "navigate",
    new workbox.strategies.NetworkFirst({
        cacheName: "pages",
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [200],
            }),
        ],
    })
);

workbox.routing.registerRoute(
    ({ request }) =>
        request.destination === "style" || request.destination === "script" || request.destination === "worker",
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "assets",
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [200],
            }),
        ],
    })
);

workbox.routing.registerRoute(
    ({ request }) => request.destination === "image",
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
            }),
        ],
    })
);
