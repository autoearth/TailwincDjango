module.exports = {
  content: [
    "../blog/templates/blog/*.{html,js}",
    '../**/templates/*.html',
    '../**/templates/**/*.html'
  ],
  theme: {
    extend: {
        fontFamily: {
          sans: ['Prompt','Ubuntu']
        }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
