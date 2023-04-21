// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/navigators/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/app.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins-100': 'Poppins_100Thin',
        'poppins-100-italic': 'Poppins_100Thin_Italic',
        'poppins-200': 'Poppins_200ExtraLight',
        'poppins-200-italic': 'Poppins_200ExtraLight_Italic',
        'poppins-300': 'Poppins_300Light',
        'poppins-300-italic': 'Poppins_300Light_Italic',
        'poppins-400': 'Poppins_400Regular',
        'poppins-400-italic': 'Poppins_400Regular_Italic',
        'poppins-500': 'Poppins_500Medium',
        'poppins-500-italic': 'Poppins_500Medium_Italic',
        'poppins-600': 'Poppins_600SemiBold',
        'poppins-600-italic': 'Poppins_600SemiBold_Italic',
        'poppins-700': 'Poppins_700Bold',
        'poppins-700-italic': 'Poppins_700Bold_Italic',
        'poppins-800': 'Poppins_800ExtraBold',
        'poppins-800-italic': 'Poppins_800ExtraBold_Italic',
        'poppins-900': 'Poppins_900Black',
        'poppins-900-italic': 'Poppins_900Black_Italic',
      },
      colors: {
        rmate: {
          blue: '#003DA5',
          black: '#424242',
          yellow: '#FFB81C',
          brown: '#DE783F',
          gray: '#8F8F8F',
          white: '#FFFFFF',
          lightgray: '#CDCDCD',
          offwhite: '#F5F5F5',
        },
      },
    },
  },
  plugins: [],
};
