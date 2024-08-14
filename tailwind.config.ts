import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(214, 214, 214)",
        black: "rgb(34, 34, 37)",
        primary: "rgb(84, 152, 255)",
        secondary: "rgb(169, 204, 255)",
        danger: "rgb(255, 169, 169)",
        success: "rgb(169, 255, 169)",
        warning: "rgb(249, 255, 169)",
      },
    },
  },
  plugins: [],
};
export default config;
