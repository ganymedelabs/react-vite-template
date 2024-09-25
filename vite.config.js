import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { resolve } from "path";

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
                input: { main: resolve(__dirname, "index.html"), 404: resolve(__dirname, "public/404.html") },
                output: {
                    entryFileNames: "index.js",
                    assetFileNames: "index.css",
                },
            },
        },

        plugins: [react(), eslint()],
    };
});
