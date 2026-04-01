import type { ReactNode } from 'react'
import { ExternalLink } from '../atoms/ExternalLink'

interface ExperienceEntryProps {
  date: string
  company: string
  role: string
  roleLink?: string
  description?: string
  achievements?: string[]
  singleCol?: boolean
  children?: ReactNode
}

function ExperienceEntry({
  date,
  company,
  role,
  roleLink,
  description,
  achievements,
  singleCol,
  children,
}: ExperienceEntryProps) {
  const className = singleCol ? 'experience-entry single-col' : 'experience-entry'

  return (
    <div className={className}>
      {!singleCol && (
        <div className="entry-meta">
          <div className="entry-date">{date}</div>
          <div className="entry-company">{company}</div>
        </div>
      )}
      <div className="entry-content">
        <div className="entry-title">
          {roleLink ? (
            <ExternalLink href={roleLink}>{role}</ExternalLink>
          ) : (
            role
          )}
        </div>
        {description && <p className="entry-description">{description}</p>}
        {achievements && achievements.length > 0 && (
          <ul className="entry-bullets">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </div>
  )
}

export { ExperienceEntry }
