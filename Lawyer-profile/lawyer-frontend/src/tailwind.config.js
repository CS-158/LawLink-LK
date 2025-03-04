/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          blue: {
            DEFAULT: '#042cc7', // This will set the default blue color to #042cc7
          },
        },
      },
    },
    plugins: [],
  };
  