/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#0033cc', // Royal blue for the sidebar
          'primary-dark': '#0026a3',
          'secondary': '#f0f2f5', // Light gray for the background
          'accent': '#4d69fa', // Accent blue for buttons
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }