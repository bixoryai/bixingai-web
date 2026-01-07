/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.astro"
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'primary-dark': '#0a1929',
        'primary-blue': '#0e4377',
        'primary-light': '#e6f1ff',

        // Accents
        'accent-blue': '#00a8ff',
        'accent-purple': '#9c27b0',
        'accent-teal': '#00bcd4',
        'gold': '#FFD700',

        // Neutrals
        'dark-bg': '#121212',
        'dark-surface': '#1e1e1e',
        'gray-light': '#a0a0a0',
        'white': '#ffffff',

        // Functional
        'success': '#4caf50',
        'warning': '#ff9800',
        'error': '#f44336',
      },
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
        'secondary': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      spacing: {
        'xs': '0.25rem',   // 4px
        'sm': '0.5rem',    // 8px
        'md': '1rem',      // 16px
        'lg': '2rem',      // 32px
        'xl': '3rem',      // 48px
        '2xl': '4rem',     // 64px
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 8px rgba(0, 0, 0, 0.12)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
      transitionDuration: {
        'fast': '0.2s',
        'normal': '0.3s',
        'slow': '0.5s',
      },
    },
  },
  plugins: [],
}