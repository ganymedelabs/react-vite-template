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

const cacheAndUpdate = async ({ request }) => {
    const cache = await caches.open("assets");
    const cachedResponse = await cache.match(request);
    const networkResponse = await fetch(request);

    if (networkResponse && networkResponse.status === 200) {
        // Store the new version in the cache
        await cache.put(request, networkResponse.clone());

        // Clean up old cache entries that match the filename pattern but have a different hash
        const cacheKeys = await cache.keys();
        const requestUrl = new URL(request.url);
        const fileNamePattern = requestUrl.pathname.split("/").pop().split(".")[0]; // "index" in index-[hash].js
        console.log({ cacheKeys, requestUrl, fileNamePattern });

        for (const cacheKey of cacheKeys) {
            const cachedUrl = new URL(cacheKey.url);
            console.log({ cacheKey, cachedUrl });

            // Match files with the same base name but different hashes
            if (
                cachedUrl.pathname.includes(fileNamePattern) && // Check if it matches the base filename
                cachedUrl.href !== requestUrl.href // Check if it's a different hash
            ) {
                await cache.delete(cacheKey);
                console.log(`Deleted outdated file from cache: ${cachedUrl.href}`);
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
