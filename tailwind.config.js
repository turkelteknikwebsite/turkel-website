/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        navy: '#0A2F5A',
        orange: '#E67510',
        beige: '#E8E3DF',
        grey: '#636363',
        black: '#202020',
      },
      fontFamily: {
        'hanken': ['Hanken Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['120px', { lineHeight: '1.083', fontWeight: '500' }],
        'h2': ['110px', { lineHeight: '1.091', fontWeight: '500' }],
        'h4': ['32px', { lineHeight: '1.313', fontWeight: '500' }],
        'h5': ['40px', { lineHeight: '1.25', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '1.625', fontWeight: '400' }],
        'nav': ['16px', { lineHeight: '1.21', fontWeight: '600' }],
      },
      maxWidth: {
        'container': '1720px',
      },
      spacing: {
        'section': '6rem',
        'section-lg': '8rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
