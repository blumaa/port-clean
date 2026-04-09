import { projects, projectCategories, type ProjectCategory } from '../data/projects'
import { ProjectTitle } from '../components/molecules/ProjectTitle'
import { ProjectLinks } from '../components/molecules/ProjectLinks'
import { PageMeta } from '../components/PageMeta'

const categoryOrder: ProjectCategory[] = ['ai', 'apps', 'games', 'animations', 'systems']

function WorkPage() {
  return (
    <>
      <PageMeta
        title="Projects | Aaron Blum"
        description="Web apps, games, design systems, and SVG animations by Aaron Blum."
        path="/work"
      />
      <nav id="top" className="category-nav">
        {categoryOrder.map((category) => (
          <a key={category} href={`#${category}`}>
            {projectCategories[category]}
          </a>
        ))}
      </nav>
      {categoryOrder.map((category) => {
        const categoryProjects = projects.filter((p) => p.category === category)
        if (categoryProjects.length === 0) return null
        return (
          <section key={category} id={category}>
            <div className="section-heading">
              <h2>{projectCategories[category]}</h2>
              <a href="#top" className="back-to-top" aria-label="Back to top">&uarr;</a>
            </div>
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
