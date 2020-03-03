module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [

    function({ addBase, config}){
      addBase({
        'h1': { fontSize: config('theme.fontSize.2x1')},
        'h2':{fontSize: config('theme.fontSize.xl')},
        'h3':{fontSize: config('theme.fontSize.lg')},
      })
    },
  ]
}
