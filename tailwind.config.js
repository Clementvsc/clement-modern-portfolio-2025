/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      // Custom color palette for modern 2025 design
      colors: {
        // Primary brand colors
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Accent colors
        accent: {
          purple: '#8b5cf6',
          pink: '#ec4899',
          orange: '#f97316',
          emerald: '#10b981',
          cyan: '#06b6d4',
        },
        // Glassmorphism colors
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          'white-light': 'rgba(255, 255, 255, 0.05)',
          'white-medium': 'rgba(255, 255, 255, 0.15)',
          'white-strong': 'rgba(255, 255, 255, 0.25)',
          black: 'rgba(0, 0, 0, 0.1)',
          'black-light': 'rgba(0, 0, 0, 0.05)',
          'black-medium': 'rgba(0, 0, 0, 0.15)',
          'black-strong': 'rgba(0, 0, 0, 0.25)',
        },
        // Modern gradients base colors
        gradient: {
          'purple-pink': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          'blue-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          'ocean': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          'sunset': 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
          'emerald': 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        }
      },
      // Custom fonts
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      // Extended spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      // Custom border radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      // Backdrop filters for glassmorphism
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      // Custom box shadows
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-inset': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'mesh': '0 0 0 1px rgba(255, 255, 255, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 8px 16px 0 rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(139, 92, 246, 0.4)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      // Animation extensions
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'gradient': 'gradient 15s ease infinite',
        'mesh-1': 'mesh1 20s ease infinite',
        'mesh-2': 'mesh2 25s ease infinite',
        'mesh-3': 'mesh3 30s ease infinite',
      },
      // Custom keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        mesh1: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-30px) rotate(120deg)' },
          '66%': { transform: 'translateY(30px) rotate(240deg)' },
        },
        mesh2: {
          '0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
          '33%': { transform: 'translateX(30px) rotate(-120deg)' },
          '66%': { transform: 'translateX(-30px) rotate(-240deg)' },
        },
        mesh3: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
      },
      // Background size for gradients
      backgroundSize: {
        '300%': '300% 300%',
        '400%': '400% 400%',
      },
      // Custom filters
      brightness: {
        25: '.25',
        175: '1.75',
      },
      // Z-index scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    // Custom utility classes
    function({ addUtilities, theme }) {
      const newUtilities = {
        // Glassmorphism utilities
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-strong': {
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        },
        '.glass-subtle': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        // Mesh gradient utilities
        '.mesh-gradient-1': {
          background: 'radial-gradient(circle at 20% 50%, #667eea 0%, transparent 50%), radial-gradient(circle at 80% 20%, #764ba2 0%, transparent 50%), radial-gradient(circle at 40% 80%, #f093fb 0%, transparent 50%)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        },
        '.mesh-gradient-2': {
          background: 'radial-gradient(circle at 25% 25%, #ff7e5f 0%, transparent 50%), radial-gradient(circle at 75% 75%, #feb47b 0%, transparent 50%), radial-gradient(circle at 50% 50%, #ff6b6b 0%, transparent 50%)',
          backgroundSize: '300% 300%',
          animation: 'gradient 20s ease infinite',
        },
        '.mesh-gradient-3': {
          background: 'radial-gradient(circle at 10% 20%, #11998e 0%, transparent 50%), radial-gradient(circle at 80% 80%, #38ef7d 0%, transparent 50%), radial-gradient(circle at 60% 20%, #3b82f6 0%, transparent 50%)',
          backgroundSize: '400% 400%',
          animation: 'gradient 25s ease infinite',
        },
        // Text gradients
        '.text-gradient': {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient-rainbow': {
          background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe)',
          backgroundSize: '400% 400%',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          animation: 'gradient 8s ease infinite',
        },
        // Modern card styles
        '.card-modern': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        },
        // Scrollbar utilities
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(255, 255, 255, 0.1)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '2px',
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
