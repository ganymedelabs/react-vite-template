// src/serviceWorkerRegistration.js
const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === "[::1]" ||
        // 127.0.0.1/8 is considered localhost for IPv4.
        window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
            // eslint-disable-next-line no-param-reassign
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker == null) {
                    return;
                }
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === "installed") {
                        if (navigator.serviceWorker.controller) {
                            // New content is available and will be used when all tabs for this page are closed.
                            console.log("New content is available and will be used when all tabs are closed.");

                            // Execute a callback for updates
                            if (config && config.onUpdate) {
                                config.onUpdate(registration);
                            }
                        } else {
                            // Content is cached for offline use.
                            console.log("Content is cached for offline use.");

                            // Execute a callback for success
                            if (config && config.onSuccess) {
                                config.onSuccess(registration);
                            }
                        }
                    }
                };
            };
        })
        .catch((error) => {
            console.error("Error during service worker registration:", error);
        });
}

function checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If it can't, reload the page.
    fetch(swUrl, {
        headers: { "Service-Worker": "script" },
    })
        .then((response) => {
            // Ensure the service worker exists, and that we really are getting a JS file.
            const contentType = response.headers.get("content-type");
            if (response.status === 404 || (contentType != null && contentType.indexOf("javascript") === -1)) {
                // No service worker found. Probably a different app. Reload the page.
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {
                // Service worker found. Proceed as normal.
                registerValidSW(swUrl, config);
            }
        })
        .catch(() => {
            console.log("No internet connection found. App is running in offline mode.");
        });
}

export function register(config) {
    if (import.meta.env.VITE_NODE_ENV === "production" && "serviceWorker" in navigator) {
        const publicUrl = new URL(import.meta.env.VITE_PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            // Service worker won't work if PUBLIC_URL is on a different origin
            return;
        }

        window.addEventListener("load", () => {
            const swUrl = `${import.meta.env.VITE_PUBLIC_URL}/service-worker.js`;

            if (isLocalhost) {
                // This is running on localhost. Let's check if a service worker still exists or not.
                checkValidServiceWorker(swUrl, config);

                // Add some additional logging to localhost, pointing developers to the service worker/PWA documentation.
                navigator.serviceWorker.ready.then(() => {
                    console.log("This web app is being served cache-first by a service worker.");
                });
            } else {
                // Register the service worker in production
                registerValidSW(swUrl, config);
            }
        });
    }
}

export function unregister() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => {
                registration.unregister();
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
}
