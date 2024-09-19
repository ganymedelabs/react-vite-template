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

console.log(import.meta.env.VITE_PUBLIC_URL);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register(`${import.meta.env.VITE_PUBLIC_URL}/service-worker.js`)
            .then((registration) => {
                console.log("Service Worker registered: ", registration);
            })
            .catch((registrationError) => {
                console.error("Service Worker registration failed: ", registrationError);
            });
    });
}
