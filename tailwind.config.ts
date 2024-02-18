import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "links" : '509px',
        'hero' : '440px'
      },
      height: {
        "educators" : '838px'
      },
      fontFamily: {
        georama: ["Georama", "sans-serif"],
        koulen: ["Koulen", "sans-serif"],
      },
      fontSize: {
        'title': '11.25rem',
        'small-text': '0.625rem',
      },
      colors: {
        'primary': '#f0ab4b',
        'secondary' : '#162b5b ',
        'snow': '#FAFAFA',
        'black' : '#252525',
        'gray': '#5a5a5a',
        'light-blue':'#273c70'
      },
      boxShadow:{
        'nuemorphic':'7px 7px 14px #d1d1d1, -7px -7px 14px #ebebeb',
        'nuemorphic-sgd':'7px 7px 14px #cc9140, -7px -7px 14px #ffc556',
      },
      backgroundImage:{
        'educators': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"1512\" height=\"833\" viewBox=\"0 0 1512 833\" fill=\"none\"%3E%3Cpath d=\"M-59 50C-59 22.3858 -36.6142 0 -9 0H1627.65C1661.63 0 1685.71 33.1606 1675.2 65.4703L1448.09 763.464C1433.92 807.001 1392 835.358 1346.32 832.299L-12.3398 741.344C-38.5989 739.586 -59 717.774 -59 691.456V50Z\" fill=\"%232A3A63\" fill-opacity=\"0.47\"/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [
    
  ],
};
export default config;
