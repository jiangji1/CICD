// Vitest 配置文件
// 用于配置测试环境和测试行为

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 使用 React 插件，支持 JSX 语法
  plugins: [react()],
  
  // 测试配置
  test: {
    // 启用全局变量（如 describe, it, expect 等）
    globals: true,
    // 使用 jsdom 作为测试环境，模拟浏览器 DOM
    environment: 'jsdom',
    // 测试设置文件，用于初始化测试环境
    setupFiles: './src/test/setup.js',
    // 启用 CSS 支持
    css: true,
  },
})