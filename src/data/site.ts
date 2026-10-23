export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const;

export const expertise = [
  {
    number: '01',
    title: 'Backend systems',
    description: 'APIs and services that stay understandable as products and teams grow.',
    tools: ['TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    number: '02',
    title: 'Frontend craft',
    description: 'Interfaces with a clear point of view, fast feedback, and considered details.',
    tools: ['Astro', 'CSS', 'Web platform'],
  },
  {
    number: '03',
    title: 'Architecture',
    description: 'Boundaries, decisions, and systems designed around the real shape of a problem.',
    tools: ['DDD', 'Event flows', 'Documentation'],
  },
  {
    number: '04',
    title: 'Infrastructure',
    description: 'Deployment paths that make shipping boring, observable, and repeatable.',
    tools: ['Docker', 'CI/CD', 'Linux'],
  },
] as const;

export const experience = [
  {
    period: 'APR 2024 — PRESENT',
    company: 'United Capital Puesto de Bolsa, S.A.',
    role: 'Software Engineer',
    location: 'Santo Domingo, Dominican Republic',
    description: [
      'Development of enterprise applications and financial platforms.',
      'Digital onboarding, customer management and transactional workflows.',
      'Backend architecture, REST APIs, automation, auditing and enterprise integrations.',
    ],
    technologies: ['Next.js', 'React', 'NestJS', 'TypeScript', 'SQL Server', 'Azure'],
  },
  {
    period: 'SEP 2022 — APR 2024',
    company: 'Liga Municipal Dominicana',
    role: 'Full-Stack Developer',
    location: 'Santo Domingo, Dominican Republic',
    description: [
      'Development of software solutions for municipal administration.',
      'Backend development using C# and .NET.',
      'Development of DocuTracker, a document tracking and transfer system using Next.js.',
      'REST APIs, SQL Server and internal process automation.',
    ],
    technologies: ['C#', '.NET', 'Next.js', 'REST APIs', 'SQL Server'],
  },
] as const;

export const process = [
  ['01', 'Frame', 'Make the problem, constraints, and definition of done explicit.'],
  ['02', 'Shape', 'Explore the smallest useful system and make trade-offs visible.'],
  ['03', 'Build', 'Work in tight loops: a solid foundation, useful increments, clean edges.'],
  ['04', 'Refine', 'Remove friction, document the why, and leave the next step clearer.'],
] as const;
