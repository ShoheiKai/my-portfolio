import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-color": "#001433",
        "dark-light": "#FFDD8C",
        "dark-color":"#EBEBEB",
        // background: {
        //   light: "var(--background-light)",
        //   dark: "var(--background-dark)",
        // },
      },
      backgroundColor: {
        "custom-light": "#FEF8EA",
        "custom-dark": "#021F4D",
        "custom-dark-light": "#FFDD8C",
        "regal-blue": "#243c5a",
        "sum-content": "#F8FBFF",
      },
      fontFamily: {
        shipmincho: ["var(--font-shipmincho)"],
        notojp: ["var(--font-notojp)"],
      },
      cursor: {
        daruma: "url(/daurma-drop.cur), pointer",
      },
    },
  },
  // darkMode: 'class', 
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [require("tailwindcss-animated")],
};
export default config;


