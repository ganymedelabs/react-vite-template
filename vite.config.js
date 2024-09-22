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
            rollupOptions: {
                output: {
                    entryFileNames: "index.js",
                    assetFileNames: "index.css",
                },
            },
        },

        plugins: [
            react(),
            eslint(),
            VitePWA({
                registerType: "autoUpdate",
                filename: "service-worker.js",
                workbox: {
                    globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
                    cleanupOutdatedCaches: true,
                    clientsClaim: true,
                    skipWaiting: true,
                    runtimeCaching: [
                        {
                            urlPattern: /index\.(js|css)$/,
                            handler: "NetworkFirst",
                            options: {
                                cacheName: "static-resources",
                                expiration: {
                                    maxEntries: 10,
                                    maxAgeSeconds: 10,
                                },
                            },
                        },
                    ],
                },
                devOptions: {
                    enabled: true,
                    navigateFallback: "index.html",
                    suppressWarnings: true,
                    type: "module",
                },
            }),
        ],
    };
});
