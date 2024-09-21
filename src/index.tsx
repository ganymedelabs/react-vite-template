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

// if ("serviceWorker" in navigator) {
//     window.addEventListener("load", () => {
//         window.addEventListener("error", (event) => {
//             const { filename } = event;
//             const isCSSorJS = filename.endsWith(".css") || filename.endsWith(".js");

//             if (isCSSorJS) {
//                 console.error(`Error loading cached file: ${filename}. Unregistering service worker.`);

//                 navigator.serviceWorker.getRegistrations().then((registrations) => {
//                     registrations.forEach((registration) => {
//                         registration.unregister().then(() => {
//                             console.log("Service worker unregistered.");
//                         });
//                     });
//                 });
//             }
//         });

//         navigator.serviceWorker.ready.then((registration) => {
//             registration.update().catch(() => {
//                 console.log("Service worker update failed");
//             });
//         });
//     });
// }
