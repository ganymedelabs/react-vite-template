importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js");

const assetsCacheName = "assets";

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.open(assetsCacheName).then((cache) => {
            return cache.keys().then((cachedRequests) => {
                // Get only entries for JS/CSS files with hashes in the "assets" cache
                const cachedAssets = cachedRequests.filter(
                    (request) => request.url.match(/index-\w+\.js$/) || request.url.match(/index-\w+\.css$/)
                );

                // Object to track the latest version of each asset type (e.g., "index.js", "index.css")
                const latestAssets = {};

                // Iterate through cached assets and track the latest version based on the URL hash
                cachedAssets.forEach((request) => {
                    const url = new URL(request.url);
                    const baseName = url.pathname.split("/").pop().split("-")[0]; // Extract the base name (e.g., "index")

                    // If this is the first version of the file or the current one is newer, store it
                    if (!latestAssets[baseName] || request.url > latestAssets[baseName].url) {
                        latestAssets[baseName] = request;
                    }
                });

                // Identify outdated assets (any asset that isn't the latest version)
                const outdatedAssets = cachedAssets.filter((request) => !Object.values(latestAssets).includes(request));

                // Delete outdated assets
                return Promise.all(outdatedAssets.map((outdatedRequest) => cache.delete(outdatedRequest)));
            });
        })
    );
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
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: assetsCacheName,
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
