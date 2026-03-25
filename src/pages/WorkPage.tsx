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
          {link.label}
        </a>
      ))}
    </div>
  )
}

export { WorkPage }
