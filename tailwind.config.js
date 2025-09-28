/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}",
    "./src/public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'ocean-blue': '#006994',
        'sky-blue': '#4FC3F7',
        'sand': '#F5E6D3',
        'beach-tan': '#D4A574',
        'seafoam': '#84C7B8',
        'coral': '#FF7F50',
        'sunset-orange': '#FF6B35',
        'palm-green': '#2E7D32',
        'driftwood': '#8D6E63',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'beach-gradient': 'linear-gradient(135deg, #4FC3F7 0%, #006994 100%)',
        'ocean-gradient': 'linear-gradient(135deg, #006994 0%, #4FC3F7 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #FF6B35 0%, #FF7F50 100%)',
      },
      boxShadow: {
        'beach': '0 4px 6px -1px rgba(0, 105, 148, 0.1), 0 2px 4px -1px rgba(0, 105, 148, 0.06)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}