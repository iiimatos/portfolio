export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
] as const;

export const contact = {
  email: 'ivanmatosvillar@gmail.com',
  github: 'https://github.com/iiimatos',
  linkedin: 'https://www.linkedin.com/in/ivan-ernesto-matos-villar-a00b581b3/',
} as const;

export const expertise = [
  {
    number: '01',
    title: 'Backend Engineering',
    description: 'APIs, business logic, enterprise integrations, relational databases, and reliable backend services.',
    tools: ['TypeScript', 'Node.js', 'NestJS', 'C#', '.NET', 'PostgreSQL'],
  },
  {
    number: '02',
    title: 'Frontend Engineering',
    description: 'Modern web applications, component architecture, accessible interfaces, and user experience.',
    tools: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'React', 'Next.js', 'Astro'],
  },
  {
    number: '03',
    title: 'Software Architecture',
    description: 'Domain modeling, Clean Architecture, modular systems, and maintainable technical decisions.',
    tools: ['Clean Architecture', 'DDD', 'SOLID', 'Event-Driven Architecture', 'RBAC'],
  },
  {
    number: '04',
    title: 'Infrastructure & Delivery',
    description: 'Containerization, CI/CD, deployment workflows, and application operations.',
    tools: ['Docker', 'Git', 'Linux', 'GitHub', 'GitHub Actions', 'Dokploy', 'Oracle Cloud'],
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

export const approach = [
  ['01', 'Understand the problem', 'Good software starts with understanding what needs to be solved.'],
  ['02', 'Design with intention', 'Architecture should support the product, not complicate it.'],
  ['03', 'Build for evolution', 'Reliable systems are designed to adapt as requirements change.'],
] as const;
