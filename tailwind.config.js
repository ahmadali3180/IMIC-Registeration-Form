/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 6px 10px 1px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        primary: "#f13a01",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs: "376px",
    },
  },
  plugins: [],
};
