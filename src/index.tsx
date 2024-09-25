import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
    {
        path: "/react-vite-template/",
        element: <App />,
        children: [
            {
                path: "/react-vite-template/",
                element: <Home />,
            },
            {
                path: "/react-vite-template/*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

if ("serviceWorker" in navigator) {
    const publicUrl = import.meta.env.VITE_PUBLIC_URL;

    navigator.serviceWorker
        .register(`${publicUrl}/service-worker.js`, { scope: `${publicUrl}/` })
        .then((registration) => {
            console.log("Service Worker registered with scope:", registration.scope);
        })
        .catch((error) => {
            console.error("Service Worker registration failed:", error);
        });
}
