export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "work" | "education";
  category?: "coding" | "teaching" | "other";
  startDate: string;
  endDate: string | "Present";
  location: string;
  description: string;
  achievements: string[];
  techStack?: string[];
  link?: string;
}

export const experiences: Experience[] = [
  // Coding jobs
  {
    id: "fluege",
    company: "fluege.de",
    role: "Frontend Developer",
    type: "work",
    category: "coding",
    startDate: "Feb 2024",
    endDate: "Feb 2026",
    location: "Remote / Leipzig",
    description:
      "Web components + Lit is an amazing dev experience. I really got to know the native browser elements, the shadow dom, builds, ci pipelines.",
    achievements: [
      "Helped walk the design team through the creation of design tokens and implemented flight ticket pipeline improvements.",
    ],
    techStack: ["Web Components", "TypeScript", "Lit", "Storybook"],
    link: "https://go.fluege.de/",
  },
  {
    id: "localyze",
    company: "localyze.com",
    role: "Frontend Developer",
    type: "work",
    category: "coding",
    startDate: "Jun 2022",
    endDate: "Dec 2023",
    location: "Remote / Hamburg",
    description:
      "JavaScript frontend (React and Next.js), Ruby on Rails backend. Coding to help automate the tasks of case managers who assisted employees in global mobility.",
    achievements: [
      "Helped develop the Pluto design system, worked on pipeline to help automate case manager workloads.",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Ruby on Rails",
      "Storybook",
      "Chromatic",
    ],
    link: "https://localyze.com/",
  },
  {
    id: "xion",
    company: "x-ion.de",
    role: "Junior Frontend Developer",
    type: "work",
    category: "coding",
    startDate: "Jun 2020",
    endDate: "Feb 2022",
    location: "Remote / Hamburg",
    description: "Built products for health insurance company software",
    achievements: ["Full stack development with Javascript and Ruby"],
    techStack: ["React", "Ruby on Rails", "TypeScript"],
    link: "https://www.x-ion.de/",
  },
  // Teaching jobs
  {
    id: "south-high",
    company: "South High School",
    role: "ESL Teacher",
    type: "work",
    category: "teaching",
    startDate: "Oct 2016",
    endDate: "Jun 2019",
    location: "Minneapolis, MN",
    description:
      "Wrote, designed, and taught 10th, 11th, and 12th grade curriculum oriented towards racial and social justice.",
    achievements: [
      "Helped over 1000 students learn English as a second language.",
      "Coordinated a team of 10 teachers.",
      "Boosted cultural relevance using 21st century apps and technology.",
    ],
    link: "https://south.mpls.k12.mn.us/",
  },
  {
    id: "mps",
    company: "Minneapolis Public Schools",
    role: "Project Specialist - Community Education",
    type: "work",
    category: "other",
    startDate: "Sep 2012",
    endDate: "2014",
    location: "Minneapolis, MN",
    description:
      "Helped to coordinate after school programming for thousands of children in the Minneapolis area. Maintained, updated, and developed the community education websites.",
    achievements: [],
    link: "https://commed.mpls.k12.mn.us/",
  },
  {
    id: "porchfest",
    company: "Powderhorn Porchfest",
    role: "Co-founder & Organizer",
    type: "work",
    category: "other",
    startDate: "2012",
    endDate: "2014",
    location: "Minneapolis, MN",
    description:
      "Together with Niky Duxbury, founded Powderhorn Porchfest - a free, neighborhood-based music festival that brought people together and highlighted local musicians, food vendors, and artists. Still going strong to this day.",
    achievements: [],
    link: "https://www.ppna.org/porchfest",
  },
];

export const education: Experience[] = [
  {
    id: "flatiron",
    company: "Flatiron School",
    role: "Full Stack Web Development",
    type: "education",
    startDate: "2019",
    endDate: "2019",
    location: "Chicago, IL",
    description: "Full-stack web development bootcamp",
    achievements: [],
  },
  {
    id: "umn-masters",
    company: "University of Minnesota",
    role: "M.Ed. TESOL",
    type: "education",
    startDate: "2014",
    endDate: "2015",
    location: "Minneapolis, MN",
    description:
      "Master of Education in Teaching English to Speakers of Other Languages",
    achievements: [],
  },
  {
    id: "umn-bachelor",
    company: "University of Minnesota",
    role: "B.A. Creative Writing, English, Philosophy",
    type: "education",
    startDate: "2003",
    endDate: "2007",
    location: "Minneapolis, MN",
    description: "Triple major in humanities",
    achievements: [],
  },
];
