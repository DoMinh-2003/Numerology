/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        charis: ['"Charis SIL"', "serif"],
        inter: ['"Inter"', "sans-serif"],
        "lobster-two": ['"Lobster Two"', "cursive"],
      },
      screens: {
        "xs-max": { max: "580px" },
        "md-max": { max: "800px" },
        "lg-max": { max: "1200px" },
      },
      fontSize: {
        "13px": "13px",
      },
    },
  },
  plugins: [],
};
