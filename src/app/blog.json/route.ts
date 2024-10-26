import { author, site } from "@/data/site";
import { allPosts, Post } from "content-collections";
import { compareDesc, setHours } from "date-fns";
import { Feed } from "feed";

const baseUrl = "https://friendshipcastle.zip";

const createPostUrl = (url: string) => {
  return url + "?utm_campaign=feed&utm_source=blog.rss";
};

const createContent = (post: Post, url: string) => `<p>${post.summary}</p>
<p>Read the full article on <a href="${url}">friendshipcastle.zip</a></p>`;

const createFeed = () => {
  const feed = new Feed({
    title: site.title,
    description: site.description,
    id: baseUrl,
    link: baseUrl,
    language: "en",
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Twilight Sparkle (Nicole Brennan)`,
    generator: "blog3",
    author: {
      name: author.name,
      email: author.email,
      link: baseUrl,
    },
  });

  allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .forEach((post) => {
      const id = `${baseUrl}/${post.urlPath}`;
      const url = createPostUrl(id);
      feed.addItem({
        title: post.title,
        id: id,
        link: url,
        description: post.summary,
        content: createContent(post, url),
        author: [
          {
            name: author.name,
          }
        ],
        date: setHours(post.date, 13),
        image: post.image !== undefined ? `https://friendshipcastle.zip${post.image!}` : undefined,
      });
    });

  return feed.json1();
};

export const GET = async () => {
  const feed = await createFeed();
  return new Response(feed, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};