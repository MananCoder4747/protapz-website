import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    minify: 'terser',  // Better minification than esbuild
    cssMinify: 'lightningcss',
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console.logs
        drop_debugger: true,
      },
    },
    cssCodeSplit: true,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'icons': ['lucide-react'],
        },
      },
    },
  },
  css: {
    devSourcemap: false,
  },
  server: {
    warmup: {
      clientFiles: ['./src/main.jsx', './src/App.jsx'],
    },
  },
})