import Container from "@/components/container";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="w-full pt-10 pb-4">
      <Container>
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} {site.copyrightName} •{" "}
            <a className="hover:text-underline" href={site.viewSourceURL}>
              View Source
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
