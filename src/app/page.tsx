import { Navbar, NavbarLink } from "@/components/navbar";
import { author, site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Navbar>
        <NavbarLink title="Home" />
        <NavbarLink title="Blog" target="/blog" />
      </Navbar>
      <section className="prose prose-slate dark:prose-invert max-w-none">
        <h1>{site.title}</h1>
        <img
          className="rounded-xl"
          src="/images/landscape.jpg"
          alt="A picture of a happy grass field with butterflies"
        />

        <span className="flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow md:flex-row max-w-full dark:border-gray-700 dark:bg-gray-800">
          <span className="pl-4"></span>
          <img
            className="max-w-24 max-h-24 rounded-full"
            src="/images/avatar.jpg"
            alt={author.avatarDesc}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <span className="font-extrabold text-xl">Twilight Sparkle</span>
            <span>
              Blogger, shitposter, wife, tech worker, noun. Twi works tirelessly
              to make sure that technology doesn{"'"}t enslave you. This blog
              contains her musings and wisdom.
            </span>
          </div>
        </span>

        <h2 className="font-bold">Welcome</h2>

        <p>
          Hi everypony! Welcome to Twilight Sparkle{"'"}s Friendship Castle! We
          {"'"}re going to have so much fun learning fun things about such fun
          topics!
          <br />
          <br />
          This is my hot take zone. Reader discretion advised. Before commenting
          on one of these articles, take a moment to consider if you{"'"}re
          being an asshat because I won{"'"}t read asshat comments.
        </p>
      </section>
    </>
  );
}
