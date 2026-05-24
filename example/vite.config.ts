import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@weeii/sdk'],
  },
  server: {
    watch: {
      ignored: ['!**/node_modules/@weeii/sdk/dist/**'],
    },
  },
});
