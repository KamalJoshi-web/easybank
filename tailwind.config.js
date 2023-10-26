/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      DarkBlue: "hsl(233, 26%, 24%)",
      LimeGreen: "hsl(136, 65%, 51%)",
      BrightCyan: "hsl(192, 70%, 51%)",
      GrayishBlue: "hsl(233, 8%, 62%)",
      LightGrayishBlue: "hsl(220, 16%, 96%)",
      VeryLightGray: "hsl(0, 0%, 98%)",
      White: " hsl(0, 0%, 100%)",
    },

    fontFamily: {
      PublicSans: ["Public Sans", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "3xl": "hsl(233, 26%, 24%) 0px 180px 310px",
      },
      content: {
        deskGraphics: 'url("/src/assets/bg-intro-desktop.svg")',
        mobGraphics: 'url("/src/assets/bg-intro-mobile.svg")',
      },
      backgroundImage: {
        deskGraphics: 'url("/src/assets/bg-intro-desktop.svg")',
        mobGraphics: 'url("/src/assets/bg-intro-mobile.svg")',
      },
    },
  },
  plugins: [],
};
