import { Link } from 'react-router'
import { projects } from '../data/projects'

function WorkPage() {
  return (
    <section>
      <h2>Work</h2>
      {projects.map((project) => (
        <div key={project.id} className="experience-entry single-col">
          <div className="entry-content">
            <div className="entry-title">
              <ProjectTitle project={project} />
            </div>
            <p className="entry-description">{project.description}</p>
            <ProjectLinks project={project} />
          </div>
        </div>
      ))}
    </section>
  )
}

function ProjectTitle({ project }: { project: typeof projects[number] }) {
  if (project.previewComponent === 'animation-gallery') {
    return <Link to="/animations">{project.name}</Link>
  }
  if (project.previewComponent === 'television') {
    return <Link to="/tv">{project.name}</Link>
  }
  if (project.liveUrls?.length) {
    return (
      <a href={project.liveUrls[0].url} target="_blank" rel="noopener noreferrer">
        {project.name}
      </a>
    )
  }
  return <span>{project.name}</span>
}

function ProjectLinks({ project }: { project: typeof projects[number] }) {
  const links: { label: string; url: string; external: boolean }[] = []

  if (project.previewComponent === 'animation-gallery') {
    return (
      <div className="project-links">
        <Link to="/animations">view gallery</Link>
      </div>
    )
  }
  if (project.previewComponent === 'television') {
    return (
      <div className="project-links">
        <Link to="/tv">watch television</Link>
      </div>
    )
  }

  if (project.liveUrls) {
    for (const liveUrl of project.liveUrls) {
      links.push({ label: liveUrl.name, url: liveUrl.url, external: true })
    }
  }

  if (project.githubUrl) {
    links.push({ label: 'GitHub', url: project.githubUrl, external: true })
  }
  if (project.npmUrl) {
    links.push({ label: 'npm', url: project.npmUrl, external: true })
  }
  if (project.storybookUrl) {
    links.push({ label: 'Storybook', url: project.storybookUrl, external: true })
  }
  if (project.appStoreUrl && project.appStoreUrl !== '#') {
    links.push({ label: 'App Store', url: project.appStoreUrl, external: true })
  }

  if (links.length === 0) return null

  return (
    <div className="project-links">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
        >
          {link.url.includes('apps.apple.com') && <AppleIcon />}
          {link.label}
        </a>
      ))}
    </div>
  )
}

function AppleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      width="14"
      height="14"
      fill="#888"
      style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

export { WorkPage }
