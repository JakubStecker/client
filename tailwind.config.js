module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cinnabar': {
         '50': '#fdf5f4', 
         '100': '#fbeaea', 
         '200': '#f5cbca', 
         '300': '#efabaa', 
         '400': '#e36c6b', 
         '500': '#d72d2b', 
         '600': '#c22927', 
         '700': '#a12220', 
         '800': '#811b1a', 
         '900': '#691615'
         },
       'white-linen': {
         '50': '#fffefe', 
         '100': '#fefefd', 
         '200': '#fdfbfa', 
         '300': '#fbf9f7', 
         '400': '#f8f5f0', 
         '500': '#f5f0ea', 
         '600': '#ddd8d3', 
         '700': '#b8b4b0', 
         '800': '#93908c', 
         '900': '#787673'
         },
       'light-black': {
         '500': '#18191a'
         },
       'light-gray': {
         '500': '#808080'
         },
       // 'yellow': {
       //   '500': '#F8B508'
       // }
     },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
