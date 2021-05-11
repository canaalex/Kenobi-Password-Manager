module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkgrey: '#2C2929',
      lightgrey: '#3C3F43',
      white:'#FFFAFA',
      orange:'#E59B2C',
      red:'#FF0000',
      whiteshade:'#FFCEC',
      green:'#4D774E',
      gray:'#A3BCB6',
    },
    fontfamily:{
      actor:['Actor']

    }
  },
  scale:['active'],
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
