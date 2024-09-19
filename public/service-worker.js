/* eslint-disable no-restricted-globals */

self.addEventListener("install", (event) => {
    console.log("Service Worker installed", event);
});

self.addEventListener("activate", (event) => {
    console.log("Service Worker activated", event);
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
