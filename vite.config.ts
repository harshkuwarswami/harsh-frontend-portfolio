import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Support both GitHub Pages (relative base) and Vercel root deployments
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          icons: ['lucide-react']
        }
      }
    }
  }
});
