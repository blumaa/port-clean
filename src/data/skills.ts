export interface Skill {
  name: string
  category: SkillCategory
}

export type SkillCategory =
  | 'frontend'
  | 'state'
  | 'testing'
  | 'design'
  | 'backend'
  | 'devtools'
  | 'ai'
  | 'projectMgmt'
  | 'principles'

export const skillCategories: Record<SkillCategory, string> = {
  frontend: 'Frontend Core',
  state: 'State & Data',
  testing: 'Testing & Quality',
  design: 'Design Systems',
  backend: 'Backend',
  devtools: 'DevTools',
  ai: 'AI & Workflows',
  projectMgmt: 'Project Management',
  principles: 'Principles',
}

export const skills: Skill[] = [
  // Frontend Core
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'Tailwind', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },
  { name: 'GSAP', category: 'frontend' },
  { name: 'SVGs', category: 'frontend' },

  // State & Data
  { name: 'Redux', category: 'state' },
  { name: 'TanStack Query', category: 'state' },
  { name: 'SWR', category: 'state' },
  { name: 'zustand', category: 'state' },

  // Testing & Quality
  { name: 'React Testing Library', category: 'testing' },
  { name: 'Jest', category: 'testing' },
  { name: 'Cypress', category: 'testing' },
  { name: 'Playwright', category: 'testing' },
  { name: 'MSW', category: 'testing' },
  { name: 'Chromatic', category: 'testing' },

  // Design Systems
  { name: 'Storybook', category: 'design' },
  { name: 'Style Dictionary', category: 'design' },
  { name: 'Design Tokens', category: 'design' },
  { name: 'Figma Console MCP', category: 'design' },
  { name: 'Atomic Design', category: 'design' },

  // Backend
  { name: 'Ruby', category: 'backend' },
  { name: 'Ruby on Rails', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'SQL', category: 'backend' },
  { name: 'Supabase', category: 'backend' },
  { name: 'Firebase', category: 'backend' },

  // DevTools
  { name: 'nvim', category: 'devtools' },
  { name: 'Git', category: 'devtools' },
  { name: 'Docker', category: 'devtools' },
  { name: 'K8s', category: 'devtools' },
  { name: 'CI/CD Pipelines', category: 'devtools' },

  // AI & Workflows
  { name: 'AI Coding Assistants', category: 'ai' },
  { name: 'Claude Code', category: 'ai' },
  { name: 'Agentic Workflows', category: 'ai' },

  // Project Management
  { name: 'Linear', category: 'projectMgmt' },
  { name: 'Jira', category: 'projectMgmt' },
  { name: 'A/B Testing', category: 'projectMgmt' },
  { name: 'Split Testing', category: 'projectMgmt' },

  // Principles
  { name: 'Accessibility', category: 'principles' },
  { name: 'Reusability', category: 'principles' },
  { name: 'SOLID/DRY/KISS', category: 'principles' },
]

export const getSkillsByCategory = (category: SkillCategory): Skill[] =>
  skills.filter((skill) => skill.category === category)
