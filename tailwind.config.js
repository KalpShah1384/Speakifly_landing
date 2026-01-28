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
          dark: '#0f172a', // Slate 900 for high contrast text
          primary: '#3674B5', // User's Dark Blue
          secondary: '#578FCA', // User's Mediun Blue
          light: '#A1E3F9', // User's Light Blue
          mint: '#D1F8EF', // User's Mint

          // Aliases for backward compatibility with my previous code, ensuring they map to the new palette
          900: '#0f172a',
          800: '#3674B5', // Map old slate-800 mostly to primary for colored backgrounds
          700: '#578FCA',
          600: '#578FCA',
          accent: '#3674B5', // Old accent -> Primary
          teal: '#A1E3F9',  // Old teal -> Light Blue (or Mint?)
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
