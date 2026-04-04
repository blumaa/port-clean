import { render, screen } from '@testing-library/react'
import { TvPage } from './TvPage'

vi.mock('../components/animations/TelevisionPreview', () => ({
  TelevisionPreview: () => <div data-testid="tv-preview">TV Preview</div>,
}))

describe('TvPage', () => {
  it('sets the page title', () => {
    render(<TvPage />)
    expect(document.title).toBe('Retro Television | Aaron Blum')
  })

  it('renders the TelevisionPreview', () => {
    render(<TvPage />)
    expect(screen.getByTestId('tv-preview')).toBeInTheDocument()
  })
})
