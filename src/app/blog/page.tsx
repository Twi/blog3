import { Navbar, NavbarCrumb, NavbarLink } from "@/components/navbar";
import { Metadata } from "next";
import { allPosts } from "content-collections";

const postsSortedByDate = allPosts.toSorted(
  (a, b) => b.date.getTime() - a.date.getTime()
);

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogIndex() {
  return (
    <>
      <Navbar>
        <NavbarLink title="Home" target="/" />
        <NavbarCrumb />
        <NavbarLink title="Blog" />
      </Navbar>
      <section className="prose prose-slate dark:prose-invert max-w-none prose-code:font-[family-name:var(--font-geist-mono)]">
        <h1>Blog</h1>
        <p>Here you can find my wisdom.</p>
        <ul>
          {postsSortedByDate.map((post) => (
            <li key={post.slug}>
              <span className="font-[family-name:var(--font-geist-mono)]">
                {post.date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </span>
              {" - "}
              <a
                className="text-blue-400 transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:active:text-blue-600"
                href={`/blog/${post.slug}`}
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
