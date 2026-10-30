import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pillar: z.enum(['hotmart', 'skool', 'claude']),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional().default([]),
    sources: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .optional()
      .default([]),
    verifiedDate: z.coerce.date().optional(),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional()
      .default([]),
  }),
});

export const collections = { blog };
