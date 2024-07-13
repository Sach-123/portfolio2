/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary_background: "#0A0B1D",
        primary: "#C778DD",
        dimWhite: "#ABB2BF",
      },
      fontFamily: {
        Fira_code: ["Fira Code", "monospace"],
      },
      backgroundImage: {
        "radial-custom":
          "radial-gradient(circle, rgba(118, 60, 172, 1) 0%, rgba(50, 15, 133, 0) 70%)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      sm_md: "850px",
      md: "1060px",
      lg: "1200px",
      lg_xl: "1280px",
      xl: "1700px",
    },
  },
  plugins: [],
};
