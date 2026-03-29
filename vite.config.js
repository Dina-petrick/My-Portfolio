import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'spa-404-fallback',
      closeBundle() {
        const indexHtml = resolve(__dirname, 'dist/index.html')
        copyFileSync(indexHtml, resolve(__dirname, 'dist/404.html'))
      },
    },
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  assetsInclude: ['**/*.PNG', '**/*.png', '**/*.JPG', '**/*.jpg', '**/*.JPEG', '**/*.jpeg']
})
