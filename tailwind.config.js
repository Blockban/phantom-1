/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'portal-open': 'portalOpen 1.5s ease-in-out infinite',
      },
      keyframes: {
        portalOpen: {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '50%': { transform: 'scaleX(1)', opacity: '1' },
          '100%': { transform: 'scaleX(0)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};