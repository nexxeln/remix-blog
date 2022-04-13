module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        'Karla': ['Karla', 'sans-serif'],
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
