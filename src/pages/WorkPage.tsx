import { projects, projectCategories, type ProjectCategory } from '../data/projects'
import { ProjectTitle } from '../components/molecules/ProjectTitle'
import { ProjectLinks } from '../components/molecules/ProjectLinks'
import { PageMeta } from '../components/PageMeta'

const categoryOrder: ProjectCategory[] = ['apps', 'games', 'animations', 'systems']

function WorkPage() {
  return (
    <>
      <PageMeta
        title="Projects | Aaron Blum"
        description="Web apps, games, design systems, and SVG animations by Aaron Blum."
        path="/work"
      />
      {categoryOrder.map((category) => {
        const categoryProjects = projects.filter((p) => p.category === category)
        if (categoryProjects.length === 0) return null
        return (
          <section key={category}>
            <h2>{projectCategories[category]}</h2>
            {categoryProjects.map((project) => (
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
      })}
    </>
  )
}

export { WorkPage }
