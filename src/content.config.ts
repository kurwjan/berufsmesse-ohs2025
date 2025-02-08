import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const index = defineCollection({
  loader: glob({ pattern: "index.md", base: "./src/content" }),
  schema: z.object({
    title: z.string(),
    heading: z
      .object({
        format: z.enum(["normal", "colored"] as const),
        text: z.string(),
        newline: z.boolean().optional(),
      })
      .array(),
  }),
});

const exhibitors = defineCollection({
  loader: file("./src/content/exhibitors.yaml"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      partner: z.boolean().optional(),
      image: image(),
      link: z.string(),
      jobs: z.string().array().optional(),
      education: z.string().array().optional(),
      descriptionList: z.string().array().optional(),
      description: z.string().optional(),
      other: z.string().array().optional(),
    }),
});

const greetings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/greetings" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      profession: z.string(),
      image: image(),
    }),
});

const partners = defineCollection({
  loader: file("./src/content/partners.yaml"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      link: z.string(),
      image: image(),
      height: z.number().optional(),
    }),
});

const workshops = defineCollection({
  loader: file("./src/content/workshops.yaml"),
  schema: ({ image }) =>
    z.object({
      time: z.string(),
      workshops: z
        .object({
          company: z.string(),
          partner: z.boolean().optional(),
          room: z.string(),
          subject: z.string(),
          image: image(),
        })
        .array(),
    }),
});

const license = defineCollection({
  loader: glob({ pattern: "license.md", base: "./src/content" }),
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = {
  index,
  exhibitors,
  greetings,
  partners,
  workshops,
  license,
};
