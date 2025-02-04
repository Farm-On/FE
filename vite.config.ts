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
  server: {
    proxy: {
      '/api': {
        target: 'http://43.201.137.131:8080',
        changeOrigin: true,
        ws: true,
        secure: false,
      },
    },
  },
});
