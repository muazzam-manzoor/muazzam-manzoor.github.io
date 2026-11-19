import { ArrowUpRight, Layers3 } from "lucide-react";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

function ProjectLink({ project }: { project: Project }) {
  return (
    <a
      className="project-repo"
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${project.name} source on GitHub`}
    >
      Repository <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

function CimsVisual() {
  return (
    <div
      className="project-visual project-visual-cims"
      role="img"
      aria-label="Abstract CIMS concept preview representing inventory, sales, and financial records; not an application screenshot"
    >
      <div className="cims-orbit cims-orbit-outer" aria-hidden="true" />
      <div className="cims-orbit cims-orbit-inner" aria-hidden="true" />
      <div className="cims-interface">
        <div className="cims-interface-top">
          <span className="cims-interface-brand">CIMS <i>/</i> MANAGEMENT</span>
          <span className="cims-interface-status">VISUAL CONCEPT</span>
        </div>
        <div className="cims-interface-body">
          <div className="cims-rail">
            <span className="rail-current">01 <b>Inventory</b></span>
            <span>02 <b>Sales</b></span>
            <span>03 <b>Finance</b></span>
            <span>04 <b>Reports</b></span>
          </div>
          <div className="cims-main-panel">
            <div className="cims-panel-title">
              <span>Business records</span>
              <span className="cims-panel-mark">↗</span>
            </div>
            <div className="cims-panel-columns">
              <div className="cims-record">
                <i className="record-block block-copper" />
                <span>Inventory</span>
              </div>
              <div className="cims-record">
                <i className="record-block block-chartreuse" />
                <span>Payments</span>
              </div>
              <div className="cims-record">
                <i className="record-block block-lavender" />
                <span>Financial records</span>
              </div>
            </div>
            <div className="cims-chart" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>
      <span className="project-visual-note">Visual concept · no project screenshot supplied</span>
      <span className="project-visual-index">{projects[0].monogram}</span>
    </div>
  );
}

function LearningVisual({ project, variant }: { project: Project; variant: "learn" | "hotel" }) {
  return (
    <div
      className={`project-visual project-visual-${variant}`}
      role="img"
      aria-label={`Abstract ${project.name} concept preview; not an application screenshot`}
    >
      <div className="learning-geometry" aria-hidden="true">
        <span className="geometry-back" />
        <span className="geometry-middle" />
        <span className="geometry-front">
          <Layers3 size={28} strokeWidth={1.2} />
        </span>
        {variant === "learn" ? (
          <span className="geometry-label">LEARN / PRACTICE / REPEAT</span>
        ) : (
          <span className="geometry-label">ARRIVE / STAY / RETURN</span>
        )}
      </div>
      <span className="project-visual-note">Visual concept · no project screenshot supplied</span>
      <span className="project-visual-index">{project.monogram}</span>
    </div>
  );
}

export default function Projects() {
  const [featured, ...otherProjects] = projects;

  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="section-shell">
        <div className="work-heading">
          <div>
            <span className="section-kicker section-kicker-dark">Selected work / 02</span>
            <h2 id="work-title">
              Software for
              <em> real-world</em> work.
            </h2>
          </div>
          <p>
            Customer work, an independent product, and a learning project—each presented in
            its own context.
          </p>
        </div>

        <article className="featured-project">
          <CimsVisual />
          <div className="featured-copy">
            <div className="project-overline">
              <span>01</span>
              <span>{featured.kind}</span>
              <span className="project-line" />
            </div>
            <h3>{featured.name}</h3>
            <p className="featured-description">{featured.description}</p>
            <p className="project-context">
              Independently developed alongside professional work.
            </p>
            <ul className="feature-list">
              {featured.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="project-techline">
              <span>Built with</span>
              <p>{featured.technologies.join(" · ")}</p>
            </div>
            <ProjectLink project={featured} />
          </div>
        </article>

        <div className="project-pair">
          {otherProjects.map((project, index) => {
            const visualVariant = index === 0 ? "learn" : "hotel";
            return (
              <article
                className={`project-study project-study-${visualVariant}`}
                key={project.name}
              >
                <LearningVisual project={project} variant={visualVariant} />
                <div className="study-copy">
                  <div className="project-overline">
                    <span>{project.monogram}</span>
                    <span>{project.kind}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="study-techline">
                    <span>{project.technologies.join(" · ")}</span>
                  </div>
                  <ProjectLink project={project} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
