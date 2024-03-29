/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        '150px': '150px',
        '600px': '600px',
        '180px': '180px',
        '350px': '350px',
      },
      colors: {
        'facebook-blue': '#316FF6',
        'instagram-purple-violet': '#8a3ab9',
        'instagram-red-violet': '#bc2a8d',
        'instagram-yellow': '#fccc63',
        'instagram-orange': '#fbad50',
      },
    },
  },
  plugins: [],
}