/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                serif: ['宋体', 'SimSun', 'Songti SC', 'serif'],
                mono: ['Consolas', 'ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
            },
            colors: {
                border: {
                    light: '#E0E0E0',
                    dark: '#404040',
                },
                textPrimary: {
                    light: '#000000',
                    dark: '#F3F3F3',
                },
                textContent: {
                    light: '#121212',
                    dark: '#E4E4E4',
                },
                textSecondary: {
                    light: '#666666',
                    dark: '#ABABAB',
                },
                bg0: {
                    light: '#FFFFFF',
                    dark: '#121212',
                },
                bg1: {
                    dark: '#1E1E1E',
                },
                bg2: {
                    dark: '#242424',
                }
            },
        },
    },
    plugins: [],
}

