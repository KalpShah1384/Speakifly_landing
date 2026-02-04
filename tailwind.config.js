/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',
          primary: '#0F2854',   // Deep Navy
          secondary: '#1C4D8D', // Ocean Blue
          light: '#4988C4',     // Sky Blue
          mint: '#BDE8F5',      // Pale Azure

          // Aliases for backward compatibility
          900: '#0f172a',
          800: '#0F2854',
          700: '#1C4D8D',
          600: '#4988C4',
          accent: '#0F2854',
          teal: '#BDE8F5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
