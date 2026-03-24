import { experiences, education } from '../data/experience'
import { skills, skillCategories, type SkillCategory } from '../data/skills'

function ResumePage() {
  const codingJobs = experiences.filter((e) => e.category === 'coding')
  const teachingJobs = experiences.filter((e) => e.category === 'teaching')
  const otherJobs = experiences.filter((e) => e.category === 'other')
  const allJobs = [...codingJobs, ...teachingJobs, ...otherJobs]

  const categories = Object.entries(skillCategories) as [SkillCategory, string][]

  return (
    <>
      <section>
        <h2>Experience</h2>
        {allJobs.map((job) => (
          <div key={job.id} className="experience-entry">
            <div className="entry-meta">
              <div className="entry-date">{job.startDate} — {job.endDate}</div>
              <div className="entry-company">{job.company}</div>
            </div>
            <div className="entry-content">
              <div className="entry-title">
                {job.link ? (
                  <a href={job.link} target="_blank" rel="noopener noreferrer">
                    {job.role}
                  </a>
                ) : (
                  job.role
                )}
              </div>
              {job.description && (
                <p className="entry-description">{job.description}</p>
              )}
              {job.achievements.length > 0 && (
                <ul className="entry-bullets">
                  {job.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {education.map((edu) => (
          <div key={edu.id} className="list-entry">
            <div className="list-date">{edu.startDate} — {edu.endDate}</div>
            <div className="list-content">
              <div>{edu.role}</div>
              <div className="sub">{edu.company}</div>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
        {categories.map(([category, label]) => {
          const categorySkills = skills.filter((s) => s.category === category)
          if (categorySkills.length === 0) return null
          return (
            <div key={category} className="list-entry">
              <div className="list-date">{label}</div>
              <div className="list-content">
                {categorySkills.map((s) => s.name).join(', ')}
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export { ResumePage }
