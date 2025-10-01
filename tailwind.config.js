/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#E8B4D6',
        'soft-blue': '#87CEEB',
        'light-pink': '#F8E8F2',
        'text-dark': '#2c2c2c',
        'text-light': '#666',
        'soft-gray': '#f5f5f5',
      },
      animation: {
        'fadeInUp': 'fadeInUp 1s ease',
        'borderRotate': 'borderRotate 3s linear infinite',
        'borderPulse': 'borderPulse 1.5s infinite',
        'scrollLoop': 'scrollLoop 25s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        borderRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        borderPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(180, 51, 132, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(180, 51, 132, 0)' }
        },
        scrollLoop: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}