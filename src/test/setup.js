// 测试设置文件
// 用于初始化测试环境和全局配置

import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react' // 清理测试后的 DOM
import '@testing-library/jest-dom' // 提供 DOM 匹配器

// 每个测试后清理 DOM，避免测试之间的干扰
afterEach(() => {
  cleanup()
})