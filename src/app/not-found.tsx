import { Navbar, NavbarLink } from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found!",
};

export function ServerCodePage(props: {
  serverCode: number;
  codeDescription: string;
}) {
  return (
    <>
      <Navbar>
        <NavbarLink title="Home" target="/" />
      </Navbar>
      <section className="w-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-9xl font-extrabold">
            {props.serverCode}
          </h1>

          <p className="p-4 text-2xl md:text-3xl">{props.codeDescription}</p>

          <p className="p-4">
            <a href="/" className="hover:underline">
              Back to the Homepage
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default function PageNotFound() {
  return (
    <ServerCodePage
      serverCode={404}
      codeDescription={"We couldn't find the page you're looking for."}
    />
  );
}
