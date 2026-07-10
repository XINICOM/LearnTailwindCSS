/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "media",
    theme: {
        extend: {
        fontFamily: {
            serif: ['宋体', 'SimSun', 'Songti SC', 'serif'],
            mono: ['Consolas', 'ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        },
        colors: {
            border:{
                light:'#E5E5E5',
                dark:'#888888',
            },
            textContent:{
                light: '#121212',
                dark: '#D6D2CD',
            },
            textPrimary:{
                light: '#000000',
                dark: '#FFFFFF',
            },
            textSecondary:{
                light: '#666666',
                dark: '#ABABAB',
            },
            bg0:{
                light:'#FFFFFF',
                dark:'#121212',
            },
            bg1:{
                light:'#FAFAFA',
                dark:'#272727',
            }
        },
        },
    },
    plugins: [],
}

