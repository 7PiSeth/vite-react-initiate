import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // This works for local development
  },
  base: '/vite-react-initiate/ending on your deployment path',
  build: {
    outDir: 'dist', // Output directory for build
  },
  publicDir: 'public', // Ensures static assets are in the "public" folder
});
