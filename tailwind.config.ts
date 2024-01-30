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
      width: {
        "links" : '509px'
      },
      fontFamily: {
        georama: ["Georama", "sans-serif"],
        koulen: ["Koulen", "sans-serif"]
      },
      fontSize: {
        'title': '11.25rem',
      },
      colors: {
        'yellow': '#f0ab4b',
        'blue' : '#162b5b ',
        'snow': '#FAFAFA',
        'black' : '#252525'
      },
    },
  },
  plugins: [],
};
export default config;
