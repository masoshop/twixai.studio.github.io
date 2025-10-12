
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For a repository named `<username>.github.io`, the base path must be '/'.
  // This ensures assets are loaded correctly from the root domain.
  base: '/',
})