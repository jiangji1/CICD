// User 组件测试文件
// 测试 User 组件的渲染和功能

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react' // 渲染组件和查询 DOM
import User from '../components/User' // 导入待测试的组件

describe('User Component', () => {
  it('应该渲染标题', () => {
    // 渲染 User 组件
    render(<User />)
    // 查找标题元素
    const title = screen.getByText('User Page')
    // 验证标题是否在 DOM 中
    expect(title).toBeInTheDocument()
  })

  it('应该渲染描述信息', () => {
    // 渲染 User 组件
    render(<User />)
    // 查找描述信息（使用正则表达式忽略大小写）
    const message = screen.getByText(/this is the user page/i)
    // 验证描述信息是否在 DOM 中
    expect(message).toBeInTheDocument()
  })
})