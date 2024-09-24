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

async function cacheAndUpdate({ request }) {
    const cache = await caches.open("assets");
    const cachedResponse = await cache.match(request);
    const networkResponse = await fetch(request);

    if (networkResponse && networkResponse.status === 200) {
        await cache.put(request, networkResponse.clone());

        const cacheKeys = await cache.keys();
        const requestUrl = new URL(request.url);

        for (const cacheKey of cacheKeys) {
            const cachedUrl = new URL(cacheKey.url);

            if (
                cachedUrl.pathname.split(".").at(-1) === requestUrl.pathname.split(".").at(-1) &&
                cachedUrl.pathname.includes("index") &&
                requestUrl.pathname.includes("index") &&
                cachedUrl.href !== requestUrl.href
            ) {
                await cache.delete(cacheKey);
                console.log(`Deleted outdated file from cache: ${cachedUrl.href}`);
            }
        }

        console.log(`Caching new file: ${request.url}`);
        return networkResponse;
    }

    return cachedResponse || networkResponse;
}

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
