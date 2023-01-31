/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      backgroundImage: {
        'background': "url('/src/assets/bg_seeAhead.png')"
      }
    },
  },
  plugins: [],
}
