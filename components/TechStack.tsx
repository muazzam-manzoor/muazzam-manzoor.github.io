import { technologies } from "@/data/skills";

export default function TechStack() {
  return (
    <section
      className="engineering-section"
      id="engineering"
      aria-labelledby="engineering-title"
    >
      <div className="section-shell">
        <div className="engineering-intro">
          <div>
            <span className="section-kicker">Engineering / 03</span>
            <h2 id="engineering-title">
              A connected
              <em> toolkit.</em>
            </h2>
          </div>
          <p>
            Explore the technologies and platforms I work with. Select a node for a little
            more context.
          </p>
        </div>

        <div className="constellation" aria-label="Interactive technology constellation">
          <svg
            className="constellation-lines"
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M75 100 230 220 380 100 510 250 670 100 830 220 940 100" />
            <path d="M75 100 120 400 230 220 340 410 510 250 620 410 830 220 890 410 940 100" />
            <path d="M120 400 340 410 620 410 890 410" />
          </svg>
          <div className="technology-nodes">
            {technologies.map((technology, index) => (
              <details
                className={`technology-node${index % 4 === 1 ? " node-accent" : ""}`}
                key={technology.name}
              >
                <summary>
                  <span className="technology-node-dot" aria-hidden="true" />
                  <span className="technology-node-name">{technology.name}</span>
                  <span className="technology-node-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </summary>
                <span className="technology-detail">
                  <span>{technology.category}</span>
                  {technology.detail}
                </span>
              </details>
            ))}
          </div>
        </div>

        <div className="engineering-footnote">
          <span>JavaScript / TypeScript</span>
          <span>Frontend / Backend / Data / Integrations</span>
          <span>15 technologies</span>
        </div>
      </div>
    </section>
  );
}
