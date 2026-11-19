import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-rail" aria-hidden="true">
        About / 01
      </div>
      <div className="section-shell about-layout">
        <div className="about-heading">
          <span className="section-kicker section-kicker-light">A little about my work</span>
          <h2 id="about-title">
            Good software
            <em> meets real life.</em>
          </h2>
        </div>
        <div className="about-story">
          <p className="about-lead">
            I build practical business applications, backend services and API integrations.
          </p>
          <p>
            My experience spans MERN stack development, Next.js, PHP, MySQL, and
            database-driven systems. I enjoy the point where a real business process becomes
            clear software: shaping the interface, the data, and the connections between
            services.
          </p>
          <p>
            My approach is pragmatic: understand the workflow, build the useful parts
            carefully, and make the result straightforward to work with.
          </p>
          <a className="text-link text-link-dark" href="#engineering">
            Explore my engineering toolkit <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="about-bottomline section-shell" aria-hidden="true">
        <span>Business applications</span>
        <span>Backend systems</span>
        <span>Third-party integrations</span>
      </div>
    </section>
  );
}
