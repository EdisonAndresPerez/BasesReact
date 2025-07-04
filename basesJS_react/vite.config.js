import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // 👈 Necesario para pruebas de React
    setupFiles: './test/setupTests.js', // 👈 Solo si usas jest-dom
    globals: true, // Opcional si quieres usar describe/test/expect sin importar desde vitest
  },
});