import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote1',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button.jsx',
        './Page1': './src/pages/Page1.jsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5001,
    strictPort: true,
    cors: true
  },
  preview: {
    port: 5001,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
})
