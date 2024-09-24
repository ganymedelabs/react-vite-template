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

// Custom handler to remove outdated cached assets and replace them with new ones
const cacheAndUpdate = async ({ request }) => {
    const cache = await caches.open("assets");
    const cachedResponse = await cache.match(request);
    const networkResponse = await fetch(request);

    if (networkResponse && networkResponse.status === 200) {
        // Store the new version in the cache
        await cache.put(request, networkResponse.clone());

        if (cachedResponse) {
            // Delete old cached version if the URL is different (hash has changed)
            const cachedUrl = new URL(cachedResponse.url);
            const requestUrl = new URL(request.url);

            if (cachedUrl.href !== requestUrl.href) {
                await cache.delete(cachedResponse.url);
                console.log(`Deleted outdated file from cache: ${cachedResponse.url}`);
            }
        }

        console.log(`Caching new file: ${request.url}`);
        return networkResponse;
    }

    // Return the cached version if available and network response failed
    return cachedResponse || networkResponse;
};

// Register the route for scripts, styles, and worker files with the custom handler
workbox.routing.registerRoute(
    ({ request }) =>
        request.destination === "style" || request.destination === "script" || request.destination === "worker",
    cacheAndUpdate
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
