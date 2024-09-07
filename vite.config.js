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
                    entryFileNames: "index.js",
                    assetFileNames: "[name][extname]",
                },
            },
        },

        plugins: [
            react(),
            eslint(),
            VitePWA({
                devOptions: {
                    enabled: true,
                },
            }),
        ],
    };
});
