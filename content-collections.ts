import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { readingTime } from "reading-time-estimator";
import { count as tokenCount } from "gpt-3-token-count";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const posts = defineCollection({
  name: "posts",
  directory: "src/data/blog/",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    image: z.string().optional(),
  }),
  transform: async (document, context) => {
    const rt = readingTime(document.content);
    const tokens = tokenCount(document.content);
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [rehypeHighlight, rehypeAutolinkHeadings],
    });
    return {
      ...document,
      mdx,
      urlPath: `blog/${document._meta.path}`,
      slug: document._meta.path,
      date: new Date(document.date),
      readingTime: rt.text,
      wordCount: rt.words,
      tokenCount: tokens,
    };
  },
});

export default defineConfig({
  collections: [posts],
});