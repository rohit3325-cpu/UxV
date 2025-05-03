/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      textShadow: {
        glow: '0 0 10px #F4D03F, 0 0 20px #F4D03F, 0 0 30px #F4D03F',
        redGlow: '0 0 10px red, 0 0 20px red, 0 0 30px red', // Add a red shadow option
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-glow': {
          textShadow: '0 0 10px #F4D03F, 0 0 20px #F4D03F, 0 0 30px #F4D03F',
        },
        '.text-shadow-red-glow': { // Custom utility for red text shadow
          textShadow: '0 0 10px red, 0 0 20px red, 0 0 30px red',
        },
      });
    },
  ],
}


