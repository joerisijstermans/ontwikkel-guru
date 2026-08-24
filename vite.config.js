import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/ontwikkel-guru/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        aanbod: resolve(__dirname, 'aanbod.html'),
        'over-ons': resolve(__dirname, 'over-ons.html'),
        contact: resolve(__dirname, 'contact.html'),
        'coming-soon': resolve(__dirname, 'coming-soon.html'),
      }
    }
  }
})
