import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../components/Home'

describe('Home Component', () => {
  it('应该渲染标题', () => {
    render(<Home />)
    const title = screen.getByText('Home Page')
    expect(title).toBeInTheDocument()
  })

  it('应该渲染欢迎信息', () => {
    render(<Home />)
    const message = screen.getByText(/welcome to the home page/i)
    expect(message).toBeInTheDocument()
  })
})