import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path"
import tsconfigPaths from "vite-tsconfig-paths"
import EnvironmentPlugin from "vite-plugin-environment"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), EnvironmentPlugin('all', { prefix: 'VITE_' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
