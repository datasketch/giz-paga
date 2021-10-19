module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: ['./layouts/**/*.html'],
    options: {
      safelist: []
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'body': '#201E1E',
        'grey-dark': '#333333',
        'blue': '#166095',
        'blue-dark': '#2F335D',
        'blue-light': '#5ABAFF',
        'orange': '#E4602A',
        'orange-light': '#EF9726'
      },
      fontFamily: {
        'Gotham': ['"Gotham"', 'sans-serif']
      },
      backgroundImage: {}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
