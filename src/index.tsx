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
        navigator.serviceWorker.ready
            .then((registration) => {
                // Periodically check for updates to the service worker
                registration.update();

                // Listen for updates to the service worker
                registration.addEventListener("updatefound", () => {
                    const newWorker = registration.installing;

                    newWorker!.addEventListener("statechange", () => {
                        if (newWorker!.state === "installed") {
                            if (navigator.serviceWorker.controller) {
                                // Notify the user that a new version is available
                                // eslint-disable-next-line no-restricted-globals, no-alert
                                const updateNotification = confirm(
                                    "A new version is available. Would you like to update?"
                                );
                                if (updateNotification) {
                                    window.location.reload();
                                }
                            }
                        }
                    });
                });
            })
            .catch((err) => {
                console.error("Error during service worker registration:", err);
            });
    });
}
