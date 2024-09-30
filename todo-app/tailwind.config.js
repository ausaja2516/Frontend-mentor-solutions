/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Josefin: "Josefin Sans, sans-serif",
      },
      colors: {
        P_brightBlue: "hsl(220, 98%, 61%)",
        check_P_bgClr: "hsl(192, 100%, 67%)",
        check_S_bgClr: "hsl(280, 87%, 65%)",
        // LightTheme (LT)
        LT_veryLightGray: "hsl(0, 0%, 98%)",
        LT_veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        LT_lightGrayishBlue: "hsl(233, 11%, 84%)",
        LT_darkGrayishBlue: "hsl(236, 9%, 61%)",
        LT_veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        // DarkTheme (DT)
        DT_veryDarkBlue: "hsl(235, 21%, 11%)",
        DT_veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        DT_lightGrayishBlue: "hsl(234, 39%, 85%)",
        DT_lightGrayishBlueHover: "hsl(236, 33%, 92%)",
        DT_darkGrayishBlue: "hsl(234, 11%, 52%)",
        DT_veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
        DT_veryDarkGrayishBlue: "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [],
};
