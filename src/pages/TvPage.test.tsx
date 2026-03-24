import { render, screen } from '@testing-library/react'
import { TvPage } from './TvPage'

vi.mock('../components/animations/TelevisionPreview', () => ({
  TelevisionPreview: () => <div data-testid="tv-preview">TV Preview</div>,
}))

describe('TvPage', () => {
  it('renders the TelevisionPreview', () => {
    render(<TvPage />)
    expect(screen.getByTestId('tv-preview')).toBeInTheDocument()
  })
})
