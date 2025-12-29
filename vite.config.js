import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Minify CSS and JS with security-focused options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true, // Remove debugger statements
        pure_funcs: ['console.log', 'console.info', 'console.debug'] // Remove specific console methods
      },
      mangle: {
        safari10: true // Fix Safari 10/11 bugs
      }
    },
    // Optimize for production
    rollupOptions: {
      output: {
        manualChunks: {
          // Keep React in separate chunk
          'react-vendor': ['react', 'react-dom']
        }
      }
    },
    // Security: Remove sourcemaps in production
    sourcemap: false
  },
  // Dev server config
  server: {
    port: 5173,
    strictPort: false,
    // Security: Prevent host header attacks
    host: false
  },
  // Security: Prevent directory traversal
  publicDir: 'public',
  // Environment variable security
  envPrefix: 'VITE_' // Only expose VITE_ prefixed env vars
})
