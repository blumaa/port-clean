import type { ReactNode } from 'react'

interface ListEntryProps {
  label: string
  children: ReactNode
}

function ListEntry({ label, children }: ListEntryProps) {
  return (
    <div className="list-entry">
      <div className="list-date">{label}</div>
      <div className="list-content">{children}</div>
    </div>
  )
}

export { ListEntry }
