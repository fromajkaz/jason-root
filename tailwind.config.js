/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Noto: ['Noto Serif', 'system-ui'],
        Playwrite: ['Playwrite CU', 'sans-serif'],
      },
    },
  },
  plugins: [],
}