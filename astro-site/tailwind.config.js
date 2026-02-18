/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.astro"
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors (used across components)
        'primary-dark': '#0a1929',
        'primary-blue': '#0e4377',
        'primary-light': '#e6f1ff',
        'primary-color': '#0066FF',  // Main primary color used in buttons/links
        
        // Accents
        'accent-blue': '#00a8ff',
        'accent-purple': '#9c27b0',
        'accent-teal': '#00bcd4',
        'accent-color': '#00C2FF',   // Secondary accent
        'gold': '#FFD700',
        'gold-light': '#FFD700',
        'gold-dark': '#B8860B',

        // Neutrals
        'dark-bg': '#080C14',
        'dark-surface': '#0E1420',
        'dark-color': '#0a1020',     // Footer/header background
        'dark-border': 'rgba(255, 255, 255, 0.06)',
        'darker-bg': '#080C14',
        'gray-light': '#94A3B8',
        'text-light': '#94A3B8',
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
        'card': '0 15px 30px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 15px 35px rgba(0, 0, 0, 0.3)',
      },
      transitionDuration: {
        'fast': '0.2s',
        'normal': '0.3s',
        'slow': '0.5s',
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out',
        'fade-down': 'fade-down 0.8s ease-out',
        'fade-left': 'fade-left 0.8s ease-out',
        'fade-right': 'fade-right 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-left': {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-right': {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #0066FF, #00C2FF)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700, #FF8C00, #FFA500)',
        'gradient-purple': 'linear-gradient(135deg, #9c27b0, #e040fb)',
      },
    },
  },
  plugins: [],
}