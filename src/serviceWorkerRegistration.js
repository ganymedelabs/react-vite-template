const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
        window.location.hostname === "[::1]" ||
        window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

// Register the service worker
function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
            // When an update is found
            // eslint-disable-next-line no-param-reassign
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker == null) {
                    return;
                }
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === "installed") {
                        if (navigator.serviceWorker.controller) {
                            // New content is available
                            console.log(
                                "New content is available and will be used when all " +
                                    "tabs for this page are closed. See https://cra.link/PWA."
                            );

                            if (config && config.onUpdate) {
                                config.onUpdate(registration);
                            }
                        } else {
                            // Content is cached for offline use
                            console.log("Content is cached for offline use.");

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

// Check if the service worker is valid
function checkValidServiceWorker(swUrl, config) {
    fetch(swUrl, {
        headers: { "Service-Worker": "script" },
    })
        .then((response) => {
            const contentType = response.headers.get("content-type");
            if (response.status === 404 || (contentType != null && contentType.indexOf("javascript") === -1)) {
                // Service worker not found, reload the page
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {
                // Register the service worker
                registerValidSW(swUrl, config);
            }
        })
        .catch(() => {
            console.log("No internet connection found. App is running in offline mode.");
        });
}

// Register the service worker if in production environment
export function register(config) {
    if (import.meta.env.VITE_NODE_ENV === "production" && "serviceWorker" in navigator) {
        const publicUrl = new URL(import.meta.env.VITE_PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            return;
        }

        window.addEventListener("load", () => {
            const swUrl = `${import.meta.env.VITE_PUBLIC_URL}/service-worker.js`;

            if (isLocalhost) {
                // Check if the service worker is valid in localhost
                checkValidServiceWorker(swUrl, config);

                navigator.serviceWorker.ready.then(() => {
                    console.log(
                        "This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA"
                    );
                });
            } else {
                // Register the service worker in production
                registerValidSW(swUrl, config);
            }
        });
    }
}

// Unregister the service worker
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
