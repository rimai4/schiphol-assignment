/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['sans-serif'],
    },
    extend: {
      transitionProperty: {
        height: 'height',
      },
      colors: {
        'schiphol-blue': 'var(--schiphol-blue)',
        'afternoon-blue': 'var(--afternoon-blue)',
        'dark-red': 'var(--dark-red)',
        'grey-few': 'var(--grey-few)',
      },
    },
  },
};
