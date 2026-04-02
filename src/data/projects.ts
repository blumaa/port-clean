export type ProjectCategory = 'apps' | 'games' | 'animations' | 'systems'

export const projectCategories: Record<ProjectCategory, string> = {
  apps: 'Web Apps',
  games: 'Game Apps',
  animations: 'Animations',
  systems: 'Systems & Tools',
}

export interface Project {
  id: string
  name: string
  description: string
  category: ProjectCategory
  previewComponent?: 'animation-gallery' | 'television'
  liveUrls?: { name: string; url: string }[]
  githubUrl?: string
  npmUrl?: string
  storybookUrl?: string
  appStoreUrl?: string
}

export const projects: Project[] = [
  {
    id: 'xclues',
    name: 'xClues games',
    category: 'games',
    description:
    'A connections-style puzzle game engine powering three domains (music, film, literature) from a single codebase. Features Zustand state management, TanStack Query caching, build-time SEO generation per domain, and the Mond Design System. Deployed as a PWA and native iOS app via Capacitor.',
    liveUrls: [
      { name: 'musiclues', url: 'https://musiclues.space' },
      { name: 'filmclues', url: 'https://filmclues.space' },
      { name: 'litclues', url: 'https://litclues.space' },
      { name: 'App store', url: 'https://apps.apple.com/app/xclues/id6760401987' },
    ],
  },
  {
    id: 'missing-agent-2031',
    name: 'Missing Agent 2031',
    category: 'games',
    description:
      'A narrative mystery game set in 2031. Built with React and deployed as a PWA and native iOS app via Capacitor.',
    liveUrls: [{ name: 'play', url: 'https://missing-agent-2031.vercel.app/' }],
    githubUrl: 'https://github.com/blumaa/missing-agent-2031',
    appStoreUrl: 'https://apps.apple.com/us/app/missing-agent-2031/id6760582943',
  },
  {
    id: 'padel-point-berlin',
    name: 'Padel Point Berlin',
    category: 'apps',
    description:
      'A PWA and web app that aggregates open padel matches across Berlin. Features D3/Recharts analytics dashboards and cron-based polling with GitHub Actions.',
    liveUrls: [{ name: 'view site', url: 'https://padel-point-berlin.vercel.app/' }],
    githubUrl: 'https://github.com/blumaa/padel-point-berlin',
  },
  {
    id: 'berlin-demo-finder',
    name: 'Berlin Demo Finder',
    category: 'apps',
    description:
      'A web app that aggregates registered demonstrations, protests, and rallies across Berlin on an interactive map. Features category filtering, date-based search, event detail popups, and multilingual support.',
    liveUrls: [{ name: 'view site', url: 'https://berlin-demo-finder.vercel.app/' }],
    githubUrl: 'https://github.com/blumaa/berlin-demo-finder',
  },
  {
    id: 'scrabblish',
    name: 'Scrabblish',
    category: 'games',
    description:
      'In an attempt to address board game monolingualism, Scrabblish is a word game for multi-lingual people and players. Built with React, GSAP, Supabase. Meant to be played as a PWA or iOS app. Features system notifications.',
    liveUrls: [{ name: 'play', url: 'https://scrabblish.vercel.app/' }],
    appStoreUrl: 'https://apps.apple.com/app/scrabblish/id6761420873',
  },
  {
    id: 'bird-poo',
    name: 'Bird Poo',
    category: 'games',
    description:
      'An arcade game built on a custom SVG rendering engine with GSAP-powered character animations, game state machine via useReducer, and a real-time leaderboard on Supabase. Deployed as a PWA and native iOS app via Capacitor.',
    appStoreUrl: 'https://apps.apple.com/app/id6760347219',
    liveUrls: [{ name: 'play', url: 'https://bird-poo.vercel.app/' }],
    githubUrl: 'https://github.com/blumaa/bird-poo',
  },
  {
    id: 'mond',
    name: 'Mond Design System',
    category: 'systems',
    description:
      'A monorepo housing 35+ accessible, themeable React components built with TypeScript and Design Tokens. Implements atomic design principles for maximum reusability and consistency.',
    githubUrl: 'https://github.com/blumaa/mond-design-system',
    npmUrl: 'https://www.npmjs.com/package/@mond-design-system/theme',
    storybookUrl: 'https://mond-design-system-component-lib.vercel.app/',
  },
  {
    id: 'animation-gallery',
    name: 'Animation Gallery',
    category: 'animations',
    description:
      'A collection of interactive SVG animations created with GSAP. Each animation demonstrates advanced animation techniques.',
    previewComponent: 'animation-gallery',
  },
  {
    id: 'television',
    name: 'Retro Television',
    category: 'animations',
    description:
      'A nostalgic retro television component with power button, channel switching, and static effects. Click the power button to turn it on, then change channels to view different animations.',
    previewComponent: 'television',
  },
]
