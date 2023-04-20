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
        poppins_100: 'Poppins_100Thin',
        poppins_100_italic: 'Poppins_100Thin_Italic',
        poppins_200: 'Poppins_200ExtraLight',
        poppins_200_italic: 'Poppins_200ExtraLight_Italic',
        poppins_300: 'Poppins_300Light',
        poppins_300_italic: 'Poppins_300Light_Italic',
        poppins_400: 'Poppins_400Regular',
        poppins_400_italic: 'Poppins_400Regular_Italic',
        poppins_500: 'Poppins_500Medium',
        poppins_500_italic: 'Poppins_500Medium_Italic',
        poppins_600: 'Poppins_600SemiBold',
        poppins_600_italic: 'Poppins_600SemiBold_Italic',
        poppins_700: 'Poppins_700Bold',
        poppins_700_italic: 'Poppins_700Bold_Italic',
        poppins_800: 'Poppins_800ExtraBold',
        poppins_800_italic: 'Poppins_800ExtraBold_Italic',
        poppins_900: 'Poppins_900Black',
        poppins_900_italic: 'Poppins_900Black_Italic',
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
