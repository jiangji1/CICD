import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 设置 base 路径，确保在 GitHub Pages 上正常访问
  // 请将 'rectVite' 替换为你的 GitHub 仓库名称
  base: '/rectVite/',
})
