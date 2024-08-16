import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      Rubik: ['Rubik', 'sans-serif']
    },
    extend: {
      colors: {
        background: "rgb(228, 228, 228)",
        black: "rgb(34, 34, 37)",
        primary: "rgb(142, 200, 255)",
        secondary: "rgb(75, 142, 206)",
        danger: "rgb(255, 169, 169)",
        success: "rgb(169, 255, 169)",
        warning: "rgb(249, 255, 169)",
      },
    },
  },
  plugins: [],
};
export default config;
