import { Icon } from '../components/atoms/Icon'
import { ExternalLink } from '../components/atoms/ExternalLink'

function HomePage() {
  return (
    <div className="home-bio">
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
