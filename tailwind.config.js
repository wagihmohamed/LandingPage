/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        primaryhover: '#818cf8',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
