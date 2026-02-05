/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                maize: "#F5A71E",
                maizeDark: "#DF7B20",
                maizeLight: "#F5B111",
                agroGreen: "#429D10",
                whitePure: "#FFFFFF",
            },
        },
    },
    plugins: [],
};

