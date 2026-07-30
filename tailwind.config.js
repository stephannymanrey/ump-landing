/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          salmon: '#FF8C82',
          gold: '#D4AF37',
          brown: '#4A3428',
          gray: '#6B6B6B',
          beige: '#F8F4EF',
          dark: '#1A1110',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
