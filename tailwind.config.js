/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        kenia: ["kenia"],
      },
      height: {
        '90': "360px",
      },
    },
  },
  plugins: [],
};
