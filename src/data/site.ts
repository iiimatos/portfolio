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
    period: 'ADD DATES',
    company: 'Verified experience placeholder',
    role: 'Add your role and company',
    description: 'Replace this entry with a verified role, scope, and outcome. No experience or metrics have been invented.',
  },
  {
    period: 'ADD DATES',
    company: 'Verified experience placeholder',
    role: 'Add your role and company',
    description: 'Keep this section factual: describe the product context, your contribution, and the decisions you owned.',
  },
] as const;

export const process = [
  ['01', 'Frame', 'Make the problem, constraints, and definition of done explicit.'],
  ['02', 'Shape', 'Explore the smallest useful system and make trade-offs visible.'],
  ['03', 'Build', 'Work in tight loops: a solid foundation, useful increments, clean edges.'],
  ['04', 'Refine', 'Remove friction, document the why, and leave the next step clearer.'],
] as const;
