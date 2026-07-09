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

      },

    },
  },
  plugins: [],
}

