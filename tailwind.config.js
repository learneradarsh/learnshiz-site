// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            blue:   { DEFAULT: '#1E40AF', dark: '#1E3A8A' }, // primary
            cream:  '#FAF9F6',                                // background
            accent: { DEFAULT: '#F97316', hover: '#EA580C' }  // CTA
          }
        }
      }
    },
    plugins: []
  }
  