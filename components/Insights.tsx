import { ArrowDownRight, NotebookPen } from "lucide-react";

export default function Insights() {
  return (
    <section className="insights-section" id="insights" aria-labelledby="insights-title">
      <div className="section-shell insights-layout">
        <div>
          <span className="section-kicker section-kicker-light">Insights / 05</span>
          <h2 id="insights-title">
            Notes from
            <em> the practice.</em>
          </h2>
        </div>
        <div className="insights-empty">
          <span className="insights-icon"><NotebookPen size={21} /></span>
          <p className="insights-status">No published articles yet</p>
          <p className="insights-description">
            Technical notes will appear here as they are written. No draft articles or
            placeholders are published.
          </p>
          <a className="text-link text-link-dark" href="#contact">
            Ask me about my work <ArrowDownRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="insights-index" aria-hidden="true">
        WRITING / WHEN THERE&apos;S SOMETHING WORTH SHARING
      </div>
    </section>
  );
}
