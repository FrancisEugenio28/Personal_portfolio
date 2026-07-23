import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VERCEL ? '/' : '/Personal_portfolio/',
  define: {
    __BASENAME__: JSON.stringify(process.env.VERCEL ? '/' : '/Personal_portfolio'),
  },
  plugins: [react()],
})
