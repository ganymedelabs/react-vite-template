import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
    const { VITE_PUBLIC_URL } = loadEnv(mode, process.cwd());
    return {
        server: {
            port: 3000,
        },

        base: VITE_PUBLIC_URL,

        build: {
            outDir: "build",
            assetsDir: ".",
        },

        plugins: [
            react(),
            VitePWA({
                registerType: "autoUpdate",
                workbox: {
                    clientsClaim: true,
                    skipWaiting: true,
                },
                devOptions: {
                    enabled: true,
                },
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
            }),
        ],
    };
});
