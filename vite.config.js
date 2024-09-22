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
            // VitePWA({
            //     registerType: "autoUpdate",
            //     devOptions: {
            //         enabled: true,
            //         type: "module",
            //     },
            //     workbox: {
            //         globPatterns: ["**/*.{js,css,html,png,svg}"],
            //         cleanupOutdatedCaches: true,
            //         clientsClaim: true,
            //         skipWaiting: true,
            //         runtimeCaching: [
            //             {
            //                 urlPattern: ({ url }) => url.pathname.endsWith(".js") || url.pathname.endsWith(".css"),
            //                 handler: "NetworkFirst",
            //                 options: {
            //                     cacheName: "react-vite-template-v5",
            //                     expiration: {
            //                         maxEntries: 20,
            //                         maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
            //                     },
            //                 },
            //             },
            //         ],
            //     },
            // }),
            VitePWA({
                strategies: "generateSW",
                registerType: "prompt",
                injectRegister: false,
                pwaAssets: { disabled: false, config: true, htmlPreset: "2024", overrideManifestIcons: true },
                manifest: {
                    short_name: "React Vite Template",
                    name: "React Vite Template",
                    description:
                        "This is a React template created with Vite and configured with TypeScript, TailwindCSS, ESLint, Prettier, Docker, and PWA support using Workbox. It is ready to be deployed on GitHub Pages and is set up to enforce code quality and styling guidelines.",
                    icons: [
                        {
                            src: "/react-vite-template/favicon.ico",
                            sizes: "64x64 32x32 24x24 16x16",
                            type: "image/x-icon",
                        },
                        {
                            src: "/react-vite-template/images/favicons/android-chrome-192x192.png",
                            sizes: "192x192",
                            type: "image/png",
                        },
                        {
                            src: "/react-vite-template/images/favicons/android-chrome-512x512.png",
                            sizes: "512x512",
                            type: "image/png",
                        },
                    ],
                    scope: "/react-vite-template/",
                    start_url: "/react-vite-template/",
                    display: "standalone",
                    orientation: "portrait",
                    theme_color: "#000000",
                    background_color: "#000000",
                },
                workbox: {
                    globPatterns: ["**/*.{js,css,html,svg,png,svg,ico}"],
                    cleanupOutdatedCaches: true,
                    clientsClaim: true,
                },
                injectManifest: {
                    globPatterns: ["**/*.{js,css,html,svg,png,svg,ico}"],
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
