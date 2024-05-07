/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',

        'background': '#FAFAFA',
        'card': '#F3F2F2',
        'input': '#EDEDED',
        'button': '#E6E5E5',
        'hover': '#D7D5D5',
        'label': '#8D8686',
        'text': '#574F4D',
        'subtitle': '#403937',
        'title': '#272221',

        'title-dark': '#E0E0E0',

        'yellow-normal': '#DBAC2C',
        'yellow-light': '#F1E9C9',
        'yellow-dark': '#C47F17',

        'purple-normal': '#8047F8',
        'purple-light': '#EBE5F9',
        'purple-dark': '#4B2995',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'gradient-pattern': 'url(/src/assets/background.svg)'
      },
      backgroundOpacity: ['active'],
    },
  },
  plugins: []
}

