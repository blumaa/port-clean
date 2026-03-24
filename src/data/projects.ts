export interface Project {
  id: string
  name: string
  description: string
  previewComponent?: 'animation-gallery' | 'television'
  liveUrls?: { name: string; url: string }[]
  githubUrl?: string
  npmUrl?: string
  storybookUrl?: string
  appStoreUrl?: string
}

export const projects: Project[] = [
  {
    id: 'padel-point-berlin',
    name: 'Padel Point Berlin',
    description:
      'A PWA and web app that aggregates open padel matches across Berlin. Features D3/Recharts analytics dashboards and cron-based polling with GitHub Actions.',
    liveUrls: [{ name: 'view site', url: 'https://padel-point-berlin.vercel.app/' }],
    githubUrl: 'https://github.com/blumaa/padel-point-berlin',
  },
  {
    id: 'berlin-demo-finder',
    name: 'Berlin Demo Finder',
    description:
      'A web app that aggregates registered demonstrations, protests, and rallies across Berlin on an interactive map. Features category filtering, date-based search, event detail popups, and multilingual support.',
    liveUrls: [{ name: 'view site', url: 'https://berlin-demo-finder.vercel.app/' }],
    githubUrl: 'https://github.com/blumaa/berlin-demo-finder',
  },
  {
    id: 'mond',
    name: 'Mond Design System',
    description:
      'A monorepo housing 35+ accessible, themeable React components built with TypeScript and Design Tokens. Implements atomic design principles for maximum reusability and consistency.',
    githubUrl: 'https://github.com/blumaa/mond-design-system',
    npmUrl: 'https://www.npmjs.com/package/@mond-design-system/theme',
    storybookUrl: 'https://mond-design-system-component-lib.vercel.app/',
  },
  {
    id: 'xclues',
    name: 'xClues games',
    description:
      'A connections-style puzzle game engine powering three domains (music, film, literature) from a single codebase. Features Zustand state management, TanStack Query caching, build-time SEO generation per domain, and the Mond Design System. Deployed as a PWA and native iOS app via Capacitor.',
    liveUrls: [
      { name: 'musiclues', url: 'https://musiclues.space' },
      { name: 'filmclues', url: 'https://filmclues.space' },
      { name: 'litclues', url: 'https://litclues.space' },
    ],
  },
  {
    id: 'bird-poo',
    name: 'Bird Poo',
    description:
      'An arcade game built on a custom SVG rendering engine with GSAP-powered character animations, game state machine via useReducer, and a real-time leaderboard on Supabase. Deployed as a PWA and native iOS app via Capacitor.',
    appStoreUrl: 'https://apps.apple.com/app/id6760347219',
    liveUrls: [{ name: 'Play', url: 'https://bird-poo.vercel.app/' }],
    githubUrl: 'https://github.com/blumaa/bird-poo',
  },
  {
    id: 'animation-gallery',
    name: 'Animation Gallery',
    description:
      'A collection of interactive SVG animations created with GSAP. Each animation demonstrates advanced animation techniques.',
    previewComponent: 'animation-gallery',
  },
  {
    id: 'television',
    name: 'Retro Television',
    description:
      'A nostalgic retro television component with power button, channel switching, and static effects. Click the power button to turn it on, then change channels to view different animations.',
    previewComponent: 'television',
  },
]
