import { render } from '@testing-library/react'
import { Icon } from './Icon'

describe('Icon', () => {
  it.each(['github', 'linkedin', 'download', 'apple'] as const)(
    'renders %s icon as an SVG',
    (name) => {
      const { container } = render(<Icon name={name} />)
      expect(container.querySelector('svg')).toBeInTheDocument()
    }
  )

  it('applies custom size', () => {
    const { container } = render(<Icon name="github" size={32} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '32')
    expect(svg).toHaveAttribute('height', '32')
  })

  it('applies custom className', () => {
    const { container } = render(<Icon name="github" className="custom" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('custom')
  })

  it('uses default size of 20 when not specified', () => {
    const { container } = render(<Icon name="github" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '20')
  })
})
