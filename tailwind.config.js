/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'orange': '#FF6200',
      'white': "#FFFFFF",
      'sleekwhite': '#878787',
      'black': '#000000',
      'nearwhite': '#EDEDED',
      'closewhite': '#F6F6F6',
      'darkgrey': '#707070',
      'nearblue': '#007BC7',
      'closeblue': '#006AAC',
      'paleblue': '#055A92',
      'navyblue': '#084C77',
      'darkblue': '#0C3D5D',
      'torquise': '#072635',
      'green': '#0BD984',
      'lightgreen': '#01F0D0',
      'lighergreen': '#D8FCF7',
      'faintgrey': '#F6F7F8',
      'lightergrey': '#CBC8D4',
      'purple': '#705AAA',
      "lilac": "#F4F0FE",
      "pink": "#FFE6F1",
      "skyblue": "#E0F3FA",
      "ekene": "#D8FCF7"
    },
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      width: {
        'custom': 'min(95%, 70rem)',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      fontWeight: {
        '800': '800',
        'normal': 'normal',
        'bold': 'bold',
      },
      fontSize: {
        '14': '14px',
        '18': '18px',
        '24': '24px',
      },
      lineHeight: {
        '19': '19px',
        '24': '24px',
        '33': '33px',
      },
      letterSpacing: {
        '0': '0px',
      },
      textTransform: {
        'titlecase': 'titlecase',
      },
    },
  },
  plugins: [],
};
