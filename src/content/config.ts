import { defineCollection, z } from 'astro:content';

const commonSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date().optional(),
  thumbnail: z.string().optional(),
  thumbnail_caption: z.string().optional(),
  card_thumbnail: z.string().optional(),
  image_position: z.string().optional(),
  external_url: z.string().optional(),
  templateKey: z.string().optional(),
  // Add other fields as discovered
  image: z.string().optional(),
  featuredimage: z.string().optional(),
  heading: z.string().optional(),
  subheading: z.string().optional(),
  number: z.number().optional(),
  pagetype: z.array(z.string()).optional(),
  gallery_captions: z.record(z.string()).optional(),
  in_progress: z.boolean().optional(),
  in_progress_message: z.string().optional(),
  do_not_show: z.boolean().optional(),
}).partial();

const work = defineCollection({
  type: 'content',
  schema: commonSchema,
});

const pages = defineCollection({
  type: 'content',
  schema: commonSchema,
});

export const collections = {
  work,
  pages,
};
