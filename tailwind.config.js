/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Roboto', sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/line-clamp")],
};
