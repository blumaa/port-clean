import { Link } from 'react-router'
import type { Project } from '../../data/projects'
import { Icon } from '../atoms/Icon'
import { ExternalLink } from '../atoms/ExternalLink'

function ProjectLinks({ project }: { project: Project }) {
  const links: { label: string; url: string }[] = []

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
      links.push({ label: liveUrl.name, url: liveUrl.url })
    }
  }

  if (project.githubUrl) {
    links.push({ label: 'GitHub', url: project.githubUrl })
  }
  if (project.npmUrl) {
    links.push({ label: 'npm', url: project.npmUrl })
  }
  if (project.storybookUrl) {
    links.push({ label: 'Storybook', url: project.storybookUrl })
  }
  if (project.appStoreUrl && project.appStoreUrl !== '#') {
    links.push({ label: 'App Store', url: project.appStoreUrl })
  }

  if (links.length === 0) return null

  return (
    <div className="project-links">
      {links.map((link) => (
        <ExternalLink key={link.url} href={link.url}>
          {link.url.includes('apps.apple.com') && <Icon name="apple" size={14} className="apple-icon" />}
          {link.label}
        </ExternalLink>
      ))}
    </div>
  )
}

export { ProjectLinks }
