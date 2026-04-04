import { Icon } from '../components/atoms/Icon'
import { ExternalLink } from '../components/atoms/ExternalLink'
import { PageMeta } from '../components/PageMeta'

function HomePage() {
  return (
    <div className="home-bio">
      <PageMeta
        title="Aaron Blum — Frontend Developer in Berlin"
        description="Aaron Blum is a frontend developer in Berlin specializing in design systems, React apps, and SVG animations."
        path="/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Aaron Blum',
        url: 'https://www.aaronblum.co',
        jobTitle: 'Frontend Developer',
        email: 'blumaa@gmail.com',
        address: { '@type': 'PostalAddress', addressLocality: 'Berlin', addressCountry: 'DE' },
        sameAs: [
          'https://github.com/blumaa',
          'https://www.linkedin.com/in/aaron-blum-0904/',
        ],
        knowsAbout: ['React', 'TypeScript', 'Design Systems', 'SVG Animation', 'GSAP', 'Frontend Development'],
      }) }} />
      <h1 className="home-h1">Aaron Blum</h1>
      <p>
        I'm a frontend developer who lives in that sweet spot between design and engineering. I build design systems, component libraries, web apps, and
        SVG animations— aiming to create products that are accessible, inviting, and engage the user.
      </p>
      <p>
        Before coding, I was an ESL teacher, musician, and community organizer
        in Minneapolis. That background shapes how I approach software: with
        empathy, clarity, and a focus on the people using what I build.
      </p>
      <p>
        I'm passionate about component-driven development, design tokens, and
        making the bridge between design and engineering as seamless as possible.
      </p>
      <p className="ai-blurb">
        It's 2026 and I've got a team of AI agents working for me with some caveats.
        I refuse to compromise code quality for speed. AI is capable of writing code
        that is solid, tested, secure, and beautiful if we teach it well--
        which is right up my pedagogical alley.
      </p>
      <p className="contact-line">
        How do you think about development and design nowadays?
      </p>
      <p className="contact-line">
        Reach me at
        <a href="mailto:blumaa@gmail.com">blumaa@gmail.com</a>
        <ExternalLink href="https://github.com/blumaa" className="social-icon" aria-label="GitHub">
          <Icon name="github" />
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/aaron-blum-0904/" className="social-icon" aria-label="LinkedIn">
          <Icon name="linkedin" />
        </ExternalLink>
      </p>
    </div>
  )
}

export { HomePage }
