import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from '../components/About'

describe('About Component', () => {
  it('应该渲染标题', () => {
    render(<About />)
    const title = screen.getByText('About Page')
    expect(title).toBeInTheDocument()
  })

  it('应该渲染描述信息', () => {
    render(<About />)
    const message = screen.getByText(/this is the about page/i)
    expect(message).toBeInTheDocument()
  })
})