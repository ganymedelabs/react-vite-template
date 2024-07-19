/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    "Open Sans",
                    "Helvetica Neue",
                    "sans-serif",
                ],
            },
            colors: {
                primary: "#89b2ef",
                secondary: "#1b3a6d",
            },
            animation: {
                "spin-infinite": "spin 4s linear infinite",
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
