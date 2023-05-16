/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('/img/winetop.jpg')",
      },
    },
  },
  plugins: [],
};
