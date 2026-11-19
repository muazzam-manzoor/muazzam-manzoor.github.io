import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      className="experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-shell">
        <div className="experience-heading">
          <div>
            <span className="section-kicker">Experience / 04</span>
            <h2 id="experience-title">
              The work
              <em> so far.</em>
            </h2>
          </div>
          <p>Professional experience in web development and full-stack roles.</p>
        </div>

        <ol className="experience-timeline">
          {experience.map(({ role, company, period, current }, index) => (
            <li className="timeline-entry" key={`${company}-${role}`}>
              <span className="timeline-index" aria-hidden="true">
                0{index + 1}
              </span>
              <span className="timeline-period">{period}</span>
              <div className="timeline-role">
                <h3>{role}</h3>
                <p>{company}</p>
              </div>
              {current ? <span className="timeline-current">Current</span> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
