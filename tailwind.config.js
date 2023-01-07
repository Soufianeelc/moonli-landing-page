/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      screens:{
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        'beige-100': "#f3f3f3",
        'green-primary': "#b8ff65"
      },
      fontFamily: {
        'interBlack': ["Inter-Black","Poppins"],
        'interBold': ["Inter-Bold"],
        'interRegular': ["Inter-Regular"],
        'interLight': ["Inter-Light"]
      }
    },
  },
  plugins: [],
}
