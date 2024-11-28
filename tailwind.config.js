/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  plugins: [require("tw-elements/plugin.cjs")],
  theme: {
    extend: {},
  },
  plugins: [],
}

