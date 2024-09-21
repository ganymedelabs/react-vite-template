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
            rollupOptions: {
                output: {
                    entryFileNames: "[name].[hash].js",
                    chunkFileNames: "[name].[hash].js",
                    assetFileNames: "[name].[hash].[ext]",
                },
            },
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
                            urlPattern: url.pathname.endsWith(".js") || url.pathname.endsWith(".css"),
                            handler: "StaleWhileRevalidate",
                            options: {
                                cacheName: "react-vite-template-v3",
                                expiration: {
                                    maxEntries: 20,
                                    maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
                                },
                            },
                        },
                    ],
                },
            }),
        ],
    };
});
