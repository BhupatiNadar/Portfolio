import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',  // 👈 for GitHub Pages
  build: {
    outDir: 'docs',     // 👈 so output goes into docs/
  },
})
