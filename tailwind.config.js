/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slowSpin': 'spin 3s linear infinite',
      },
      backgroundImage: {
        'youtubeChannel': "url('src/assets/images/bg-youtube-ad.jpg')",
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Baskerville: ['Baskerville'],
      },
      colors: {
        'primary': '#7ACAD2',
        'secondary': '#D1E7E0',
        'semi-light-gray': '#b4b4b4',
        'light-gray': '#898989',
        'dark-green': '#324B4E',
      },
      keyframes: {
        slowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      screens: {
        'xs': "425px"
      }
    },
  },
  plugins: [],
}