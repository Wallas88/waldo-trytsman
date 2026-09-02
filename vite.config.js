import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative assets keep production builds portable, including GitHub Pages subpaths.
  base: './',
})
