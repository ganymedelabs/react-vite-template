import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Router basename="/react-vite-template/">
            <App />
        </Router>
    </React.StrictMode>
);

if ("serviceWorker" in navigator && import.meta.env.VITE_NODE_ENV === "production") {
    navigator.serviceWorker
        .register(`${import.meta.env.VITE_PUBLIC_URL}/service-worker.js`, { type: "module" })
        .then((registration) => {
            console.log("Service Worker registered with scope:", registration.scope);
        })
        .catch((error) => {
            console.error("Service Worker registration failed:", error);
        });
}
