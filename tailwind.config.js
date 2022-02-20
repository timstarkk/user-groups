const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        mono: colors.slate,
        primary: colors.orange,
        secondary: colors.blue,
        card: '#181a1b',
        lightGrey: '#c8c3bc',
        tanGrey: '#776E61',
        cardText: '#a49c90'
      },
      fontFamily: {
        sans: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
