/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        "special-elite": ["Special Elite", "cursive"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      colors: {
        "brand-color": "#c01111",
        "primary-text": "#f8f6f2",
      },
    },
  },
  plugins: [],
};
