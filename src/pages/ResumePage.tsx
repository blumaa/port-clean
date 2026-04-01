import { experiences, education } from '../data/experience'
import { skills, skillCategories, type SkillCategory } from '../data/skills'
import { Icon } from '../components/atoms/Icon'
import { SectionHeading } from '../components/atoms/SectionHeading'
import { ExperienceEntry } from '../components/molecules/ExperienceEntry'
import { ListEntry } from '../components/molecules/ListEntry'

function ResumePage() {
  const codingJobs = experiences.filter((e) => e.category === 'coding')
  const teachingJobs = experiences.filter((e) => e.category === 'teaching')
  const otherJobs = experiences.filter((e) => e.category === 'other')
  const allJobs = [...codingJobs, ...teachingJobs, ...otherJobs]

  const categories = Object.entries(skillCategories) as [SkillCategory, string][]

  return (
    <>
      <section>
        <SectionHeading>
          Experience
          <a
            href="/Aaron_Blum_CV.pdf"
            download
            className="cv-download"
            aria-label="Download CV"
          >
            <Icon name="download" size={18} />
          </a>
        </SectionHeading>
        {allJobs.map((job) => (
          <ExperienceEntry
            key={job.id}
            date={`${job.startDate} — ${job.endDate}`}
            company={job.company}
            role={job.role}
            roleLink={job.link}
            description={job.description}
            achievements={job.achievements}
          />
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {education.map((edu) => (
          <ListEntry key={edu.id} label={`${edu.startDate} — ${edu.endDate}`}>
            <div>{edu.role}</div>
            <div className="sub">{edu.company}</div>
          </ListEntry>
        ))}
      </section>

      <section>
        <h2>Languages</h2>
        <ListEntry label="English">Native</ListEntry>
        <ListEntry label="Spanish">C1</ListEntry>
        <ListEntry label="German">B1</ListEntry>
      </section>

      <section>
        <h2>Skills</h2>
        {categories.map(([category, label]) => {
          const categorySkills = skills.filter((s) => s.category === category)
          if (categorySkills.length === 0) return null
          return (
            <ListEntry key={category} label={label}>
              {categorySkills.map((s) => s.name).join(', ')}
            </ListEntry>
          )
        })}
      </section>
    </>
  )
}

export { ResumePage }
