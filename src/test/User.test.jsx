import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import User from '../components/User'

describe('User Component', () => {
  it('应该渲染标题', () => {
    render(<User />)
    const title = screen.getByText('User Page')
    expect(title).toBeInTheDocument()
  })

  it('应该渲染描述信息', () => {
    render(<User />)
    const message = screen.getByText(/this is the user page/i)
    expect(message).toBeInTheDocument()
  })
})