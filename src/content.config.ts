import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    year: z.string(),
    role: z.string(),
    type: z.enum(['Professional', 'Personal']),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    accent: z.enum(['violet', 'blue']).default('violet'),
    externalUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };
