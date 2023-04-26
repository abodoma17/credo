/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: '#F4F3EE',
        navy: '#02394A',
        green: '#2DA95C',
      },
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},   
  },
  darkMode: 'class',
  plugins:[
    require('flowbite/plugin')
  ]
}

