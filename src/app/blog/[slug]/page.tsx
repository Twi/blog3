import { MDXContent } from "@content-collections/mdx/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "content-collections";
import type { Post } from "content-collections";
import { author } from "@/data/site";
import { Navbar, NavbarCrumb, NavbarLink } from "@/components/navbar";

export interface PageParams {
  slug?: string;
}

const getPost = (slug: string): Post | null => {
  for (const post of allPosts) {
    if (post.slug == slug) {
      return post;
    }
  }

  return null;
};

export default async function Page({ params }: { params: PageParams }) {
  const post = getPost(params.slug!);

  if (!post) notFound();

  return (
    <>
      <Navbar>
        <NavbarLink title="Home" target="/" />
        <NavbarCrumb />
        <NavbarLink title="Blog" target="/blog" />
        <NavbarCrumb />
        <NavbarLink title={post.slug} />
      </Navbar>
      <article>
        <div className="prose prose-slate dark:prose-invert prose-img:rounded-xl max-w-none">
          <h1>{post.title}</h1>
        </div>
        {post.image ? (
          <img className="my-4 object-contain rounded-xl" src={post.image!} />
        ) : (
          <></>
        )}
        <div className="prose prose-slate dark:prose-invert prose-img:rounded-xl max-w-none">
          <small>
            Published on {post.date.toLocaleDateString("en-US")} -{" "}
            {post.readingTime} ({post.wordCount} words, {post.tokenCount}{" "}
            tokens)
          </small>
          <MDXContent code={post.mdx} components={{}} />
        </div>
      </article>
    </>
  );
}

export async function generateStaticParams() {
  return allPosts.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: PageParams }) {
  const page = getPost(params.slug!);

  if (!page) notFound();

  return {
    title: page.title,
    description: page.summary,
    authors: [
      {
        name: author.name,
      },
    ],
    openGraph: {
      //@ts-expect-error Twi\ Type systems are broke as fuck sometimes
      images: page.image !== null ? [page.imageURL] : [],
    },
  } satisfies Metadata;
}
