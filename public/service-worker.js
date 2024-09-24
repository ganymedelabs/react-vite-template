importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js");

self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

workbox.routing.registerRoute(
    ({ request }) => request.mode === "navigate",
    new workbox.strategies.NetworkFirst({
        cacheName: "pages",
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
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
                statuses: [0, 200],
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
                statuses: [0, 200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
            }),
        ],
    })
);

workbox.routing.registerRoute(
    ({ url }) => url.origin === "https://fonts.googleapis.com",
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
    })
);

workbox.routing.registerRoute(
    ({ url }) => url.origin === "https://fonts.gstatic.com",
    new workbox.strategies.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                maxEntries: 30,
            }),
        ],
    })
);
