import { render, screen } from '@testing-library/react'
import { ListEntry } from './ListEntry'

describe('ListEntry', () => {
  it('renders label and children', () => {
    render(<ListEntry label="English">Native</ListEntry>)
    expect(screen.getByText('English')).toBeInTheDocument()
    expect(screen.getByText('Native')).toBeInTheDocument()
  })

  it('applies list-entry class', () => {
    const { container } = render(<ListEntry label="Spanish">C1</ListEntry>)
    expect(container.querySelector('.list-entry')).toBeInTheDocument()
  })
})
