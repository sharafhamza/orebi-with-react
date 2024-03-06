/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1600px",
        1400: "1400px",
        1200: "1200px",
        1000: "1000px",
        920: "900px",
        700: "700px",
        370: "370",
      },
      height: {
        50: "50px",
      },
      width: {},
      colors: {
        primary: "#6D6D6D",
        sectionBg: "#F5F5F3",
        blackBg: "#262626",
        offWhite: "rgba(255, 255, 255, 0.7)",
        dropBorder: "#2D2D2D",
        border: "#F0F0F0",
        bannerBg: "#F5F7F9",
        overly: "rgba(0,0,0, 0.7)",
        menuColor: "#767676",
        arrowBg: "rgba(0,0,0, 0.2)",
      },
      fontFamily: {
        dm: "DM Sans, sans-serif",
      },
      screens: {
        1640: "1640px",
        1440: "1440px",
        1100: "1100px",
        940: "940px",
        724: "724px",
        590: "590px",
        440: "440px",
      },
    },
  },
  plugins: [],
};
