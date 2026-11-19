import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import SystemDiagram from "@/components/SystemDiagram";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-topline">
        <span>Independent developer</span>
        <span className="hero-topline-center">Digital artefact <i>—</i> software, made useful</span>
        <span>PK / 01</span>
      </div>

      <div className="hero-main">
        <div className="hero-identity">
          <span className="eyebrow"><i /> Full-stack developer</span>
          <h1 className="hero-name" id="hero-title">
            Muazzam
            <em>Manzoor</em>
          </h1>
          <div className="hero-manifesto">
            <span className="manifesto-index">01 — The work</span>
            <p>
              I turn complex business workflows into <em>practical software.</em>
            </p>
          </div>
        </div>

        <SystemDiagram />
      </div>

      <div className="hero-bottom">
        <p className="hero-description">
          I build business applications, backend services and API integrations using modern
          web technologies.
        </p>
        <div className="hero-location">
          <MapPin size={14} aria-hidden="true" />
          Lahore, Pakistan
        </div>
        <div className="hero-actions">
          <a className="text-link text-link-light" href="#work">
            View selected work <ArrowDownRight size={17} aria-hidden="true" />
          </a>
          <a className="text-link text-link-muted" href="#contact">
            Contact <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/muazzam-manzoor" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={12} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/muazzam-manzoor/" target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        </div>
      </div>

      <span className="hero-vertical-note" aria-hidden="true">
        BUSINESS SOFTWARE / BACKEND / INTEGRATIONS
      </span>
    </section>
  );
}
