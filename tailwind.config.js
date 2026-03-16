/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './public/index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#05050C',
          900: '#070A14',
          800: '#0B1226',
          700: '#111D3D',
          600: '#18295C',
        },
        electric: {
          300: '#6AD7FF',
          400: '#2CC2FF',
          500: '#00A3FF',
          600: '#007FDB',
          700: '#005EAA',
        },
      },
      boxShadow: {
        glass: '0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 60px rgba(0,0,0,0.55)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    function glassmorphismPlugin({ addUtilities, theme }) {
      const utils = {
        '.glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          borderColor: 'rgba(255, 255, 255, 0.10)',
          borderWidth: '1px',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        },
        '.glass-card': {
          backgroundColor: 'rgba(255, 255, 255, 0.055)',
          borderColor: 'rgba(255, 255, 255, 0.12)',
          borderWidth: '1px',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          boxShadow: theme('boxShadow.glass'),
        },
        '.bg-mesh': {
          backgroundImage:
            'radial-gradient(900px 600px at 15% 10%, rgba(0,163,255,0.18), transparent 60%), radial-gradient(900px 600px at 85% 25%, rgba(106,215,255,0.10), transparent 60%), radial-gradient(900px 700px at 55% 90%, rgba(0,163,255,0.12), transparent 62%)',
        },
      };
      addUtilities(utils);
    },
  ],
};

