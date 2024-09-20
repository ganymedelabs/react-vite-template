import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(() => {
    return {
        server: {
            port: 3000,
        },

        base: "/react-vite-template",

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
                },
            }),
        ],
    };
});
