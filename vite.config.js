import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
// import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(() => {
    return {
        server: {
            port: 3000,
        },

        base: "/react-vite-template",

        build: {
            outDir: "build",
            assetsDir: ".",
            // rollupOptions: {
            //     output: {
            //         entryFileNames: "index.js",
            //         assetFileNames: "[name]-[hash].[ext]",
            //     },
            // },
        },

        plugins: [
            react(),
            eslint(),
            // VitePWA({
            //     registerType: "autoUpdate",
            //     includeAssets: [
            //         "favicon.ico",
            //         "logo.png",
            //         "android-chrome-192x192.png",
            //         "android-chrome-512x512.png",
            //         "apple-touch-icon.png",
            //         "favicon-16x16.png",
            //         "favicon-32x32.png",
            //     ],
            //     devOptions: {
            //         enabled: true,
            //     },
            //     workbox: {
            //         cleanupOutdatedCaches: true,
            //         clientsClaim: true,
            //         skipWaiting: true,
            //     },
            // }),
        ],
    };
});
