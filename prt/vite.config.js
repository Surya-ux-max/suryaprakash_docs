import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    // Keep assets as separate cacheable files — don't inline as base64
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Rolldown (Vite 8) requires manualChunks as a function
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/motion')) return 'motion';
          if (id.includes('node_modules/gsap'))   return 'gsap';
          if (id.includes('node_modules/lucide-react') || id.includes('node_modules/@tabler')) {
            return 'icons';
          }
        }
      }
    }
  }
})

