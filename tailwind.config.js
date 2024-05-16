/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Radio Canada', 'sans-serif'],
      'mono': ['Fira Code']
    }
  },
  plugins: [require('@tailwindcss/typography')],
}

