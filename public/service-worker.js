importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js");

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

workbox.core.clientsClaim();

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
    new workbox.strategies.CacheFirst({
        cacheName: "assets",
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

async function cleanOldAssets() {
    const cache = await caches.open("assets");
    const keys = await cache.keys();
    const assetsToKeep = new Map();

    for (const request of keys) {
        const url = new URL(request.url);
        const baseNameMatch = url.pathname.match(/(index)-(\w+)\.(css|js)/);

        if (baseNameMatch) {
            const [_, baseName, hash, ext] = baseNameMatch;
            const key = `${baseName}.${ext}`;

            if (!assetsToKeep.has(key)) {
                assetsToKeep.set(key, request);
            } else {
                const existingRequest = assetsToKeep.get(key);
                if (existingRequest.url < request.url) {
                    await cache.delete(existingRequest);
                    assetsToKeep.set(key, request);
                } else {
                    await cache.delete(request);
                }
            }
        }
    }
}

self.addEventListener("activate", (event) => {
    event.waitUntil(cleanOldAssets().then(() => self.clients.claim()));
});
