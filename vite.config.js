import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { VitePWA } from "vite-plugin-pwa";

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
                devOptions: {
                    enabled: true,
                },
                workbox: {
                    globPatterns: ["**/*.{js,css,html,png,svg}"],
                    cleanupOutdatedCaches: true,
                    clientsClaim: true,
                    skipWaiting: true,
                    runtimeCaching: [
                        {
                            urlPattern: ({ url }) => url.pathname.endsWith(".css"),
                            handler: "StaleWhileRevalidate",
                            options: {
                                cacheName: "css-cache",
                                expiration: {
                                    maxEntries: 20,
                                    maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
                                },
                            },
                        },
                        {
                            urlPattern: ({ url }) => url.pathname.endsWith(".js"),
                            handler: "StaleWhileRevalidate",
                            options: {
                                cacheName: "js-cache",
                                expiration: {
                                    maxEntries: 20,
                                    maxAgeSeconds: 60 * 60 * 24 * 30, //  30 days
                                },
                            },
                        },
                    ],
                },
            }),
        ],
    };
});
