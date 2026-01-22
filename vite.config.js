import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const base = process.env.BASE_PATH ?? '/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  server: {
    port: 3000,
    open: true
  }
})
