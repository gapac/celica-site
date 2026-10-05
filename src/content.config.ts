import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Notes are the public engineering log. Files live in src/content/notes/<lang>/,
// so the language is the first segment of the entry id.
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
