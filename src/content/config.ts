import { object } from "astro/zod";
import { defineCollection, z } from "astro:content";

// Homepage schema
const homepage = defineCollection({
  schema: z.object({
    banner: z.object({
      title: z.string().optional(),
      image: z.string().optional(),
      link: z.object({
        label:z.string().optional(),
        href:z.string().optional()
      })
    }).optional(),
    brands: z.array(z.string()).optional(),
    features: z.object({
      title:z.string().optional(),
      sub_title:z.string().optional(),
      description:z.string().optional(),
      list:z.array(
        z.object({
          icon:z.string().optional(),
          title:z.string().optional(),
          content:z.string().optional()
        })
      )
    }),
    intro:z.object({
      title:z.string().optional(),
      subtitle:z.string().optional(),
      description:z.string().optional(),
      thumbnail:z.string().optional(),
      video_id:z.string().optional(),
    }),
    service:z.array(z.object({
      title:z.string().optional(),
      subtitle:z.string().optional(),
      description:z.string().optional(),
      image:z.string().optional(),
    })),
    testimonial: z.object({
      title:z.string().optional(),
      subtitle:z.string().optional(),
      description:z.string().optional(),
      right_thumbnail:z.string().optional(),
      left_thumbnail:z.string().optional(),
      list:z.array(
        z.object({
          author:z.string().optional(),
          avatar:z.string().optional(),
          profession:z.string().optional(),
          content:z.string().optional(),
        })
      )
    }),


  }),
});

// Post collection schema
const postsCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    authors: z.array(z.string()).default(["admin"]),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .object({
        facebook: z.string().optional(),
        twitter: z.string().optional(),
        instagram: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  homepage: homepage,
  posts: postsCollection,
  pages: pagesCollection,
  authors: authorsCollection,
};
