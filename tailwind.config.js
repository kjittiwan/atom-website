/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Mulish',
    },
    extend: {
      backgroundImage : {
        'building': "url('./src/images/home/building.jpg')",
        'aboutHero': "url('./src/images/about/hero.jpg')",
        'darkBg': "url('./src/images/about/dark.jpg')",
      },
      colors: {
        primary: '#0E1112',
        grey: '#777777',
        light: '#F1F1F1',
        dark: '#111111'
      }
    },
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1192px',
  },
  plugins: [],
}
