import type { Config } from "tailwindcss";
// const { blackA, mauve, violet } = require("@radix-ui/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   ...blackA,
      //   ...mauve,
      //   ...violet,
      // },
    },
  },
  plugins: [],
};
export default config;
