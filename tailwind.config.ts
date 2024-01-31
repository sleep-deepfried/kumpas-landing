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
        'primary': '#f0ab4b',
        'secondary' : '#162b5b ',
        'snow': '#FAFAFA',
        'black' : '#252525',
        'gray': '#5a5a5a'
      },
      boxShadow:{
        'nuemorphic':'7px 7px 14px #d1d1d1, -7px -7px 14px #ebebeb',
      },
    },
  },
  plugins: [],
};
export default config;
