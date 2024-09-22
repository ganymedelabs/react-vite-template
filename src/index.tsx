import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Router basename="/react-vite-template">
            <App />
        </Router>
    </React.StrictMode>
);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.getRegistration().then((registration) => {
            if (registration) {
                registration.update();
            }
        });

        window.addEventListener("error", (event) => {
            if (event.message.includes("net::ERR_ABORTED") || event.message.includes("404")) {
                console.warn("Service worker error detected, unregistering...");

                navigator.serviceWorker.getRegistrations().then((registrations) => {
                    registrations.forEach((registration) => registration.unregister());
                });

                if ("caches" in window) {
                    caches.keys().then((cacheNames) => {
                        cacheNames.forEach((cacheName) => caches.delete(cacheName));
                    });
                }
            }
        });
    });
}
