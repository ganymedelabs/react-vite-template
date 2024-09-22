import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        server: {
            port: 3000,
        },

        base: "/react-vite-template/",

        build: {
            outDir: "build",
            assetsDir: ".",
        },

        plugins: [
            react(),
            eslint(),
            VitePWA({
                registerType: "autoUpdate",
                injectRegister: false,
                filename: "service-worker.js",
                workbox: {
                    globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
                    cleanupOutdatedCaches: true,
                    clientsClaim: true,
                    skipWaiting: true,
                },
                injectManifest: {
                    globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
                },
                devOptions: {
                    enabled: false,
                    navigateFallback: "index.html",
                    suppressWarnings: true,
                    type: "module",
                },
            }),
        ],
    };
});
