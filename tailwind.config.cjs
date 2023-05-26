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
      fontSize: {
        small: "15px",
        base: "18px",
        large: "23px",
        xlarge: "28px",
        xxlarge: "35px",
        xxxlarge: "55px",
        xxxxlarge: "85px",
      },

      colors: {
        "brand-color": "#c01111",
        "primary-text": "#f8f6f2",
        "primary-color": "#f8f6f2",
        "secondary-color": "#0e0e10",
        "tertiary-color": "#9da3ae",
      },

      spacing: {
        xxsmall: "2px",
        xsmall: "4px",
        small: "8px",
        base: "16px",
        large: "32px",
        xlarge: "64px",
        xxlarge: "128px",
        xxxlarge: "256px",
      },
    },
  },
  plugins: [],
};
