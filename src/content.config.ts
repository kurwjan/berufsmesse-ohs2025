import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const index = defineCollection({
    loader: glob({ pattern: "index.md", base: "./src/content" }),
    schema: z.object({
        title: z.string(),
        heading: z.object({
            format: z.enum(["normal", "colored"] as const),
            text: z.string()
        }).array(),
    })
});

export const collections = { index };