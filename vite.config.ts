import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr(),
    tsconfigPaths(),
  ],
  define: {
    global: 'window',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  preview: {
    port: 5173,
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://farmon-be.site',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
