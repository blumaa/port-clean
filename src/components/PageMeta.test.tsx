import { render } from '@testing-library/react'
import { PageMeta } from './PageMeta'

describe('PageMeta', () => {
  it('renders title element', () => {
    render(
      <PageMeta
        title="Test Page | Aaron Blum"
        description="A test description."
        path="/test"
      />,
    )
    const title = document.querySelector('title')
    expect(title).toHaveTextContent('Test Page | Aaron Blum')
  })

  it('renders meta description', () => {
    render(
      <PageMeta
        title="Test Page | Aaron Blum"
        description="A test description."
        path="/test"
      />,
    )
    const meta = document.querySelector('meta[name="description"]')
    expect(meta).toHaveAttribute('content', 'A test description.')
  })

  it('renders canonical link', () => {
    render(
      <PageMeta
        title="Test Page | Aaron Blum"
        description="A test description."
        path="/test"
      />,
    )
    const link = document.querySelector('link[rel="canonical"]')
    expect(link).toHaveAttribute('href', 'https://www.aaronblum.co/test')
  })

  it('renders Open Graph tags', () => {
    render(
      <PageMeta
        title="Test Page | Aaron Blum"
        description="A test description."
        path="/test"
      />,
    )
    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute(
      'content',
      'Test Page | Aaron Blum',
    )
    expect(document.querySelector('meta[property="og:description"]')).toHaveAttribute(
      'content',
      'A test description.',
    )
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute(
      'content',
      'https://www.aaronblum.co/test',
    )
    expect(document.querySelector('meta[property="og:type"]')).toHaveAttribute(
      'content',
      'website',
    )
    expect(document.querySelector('meta[property="og:site_name"]')).toHaveAttribute(
      'content',
      'Aaron Blum',
    )
  })

  it('renders Twitter Card tags', () => {
    render(
      <PageMeta
        title="Test Page | Aaron Blum"
        description="A test description."
        path="/test"
      />,
    )
    expect(document.querySelector('meta[name="twitter:card"]')).toHaveAttribute(
      'content',
      'summary',
    )
    expect(document.querySelector('meta[name="twitter:title"]')).toHaveAttribute(
      'content',
      'Test Page | Aaron Blum',
    )
    expect(document.querySelector('meta[name="twitter:description"]')).toHaveAttribute(
      'content',
      'A test description.',
    )
  })
})
