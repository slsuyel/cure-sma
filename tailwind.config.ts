module.exports = {
  theme: {
    extend: {
      colors: {
        pColor: '#08A268',
        yColor: '#FFD600',
        rColor: '#ED1C24',
        btnColor: '#C1E8D9',
        bColor: '#222222',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'tiro-bangla': ['Tiro Bangla', 'serif'],
      },
    },
  },
  daisyui: {
    themes: ['light'],
  },
  plugins: [require('daisyui')],
};
