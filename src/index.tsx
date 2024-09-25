import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Router basename="/react-vite-template/">
            <App />
        </Router>
    </React.StrictMode>
);

serviceWorkerRegistration.register();
