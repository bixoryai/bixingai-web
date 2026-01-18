import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: undefined,
  integrations: [tailwind()],
  build: {
    outDir: './dist',
    // Enable asset inlining for small files
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      // Minify CSS and JS
      minify: 'esbuild',
      // Code splitting
      rollupOptions: {
        output: {
          // Chunk files for better caching
          manualChunks: {
            // Vendor chunk for external libraries
          }
        }
      }
    },
    // CSS optimization
    css: {
      devSourcemap: false
    }
  },
  // Compress HTML output
  compressHTML: true
});