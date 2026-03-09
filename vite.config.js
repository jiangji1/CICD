import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 设置 base 路径为相对路径，确保在 GitHub Pages 上正常访问
  base: './',
})
