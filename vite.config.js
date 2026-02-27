import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/expenseTracker2/', 
  plugins: [react()],
})