import { Link } from 'react-router'
import type { Project } from '../../data/projects'
import { ExternalLink } from '../atoms/ExternalLink'

function ProjectTitle({ project }: { project: Project }) {
  if (project.previewComponent === 'animation-gallery') {
    return <Link to="/animations">{project.name}</Link>
  }
  if (project.previewComponent === 'television') {
    return <Link to="/tv">{project.name}</Link>
  }
  if (project.liveUrls?.length) {
    return (
      <ExternalLink href={project.liveUrls[0].url}>
        {project.name}
      </ExternalLink>
    )
  }
  return <span>{project.name}</span>
}

export { ProjectTitle }
