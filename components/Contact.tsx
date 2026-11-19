import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="section-shell contact-layout">
        <div className="contact-heading">
          <span className="section-kicker">Contact / 06</span>
          <h2 id="contact-title">
            Let&apos;s make
            <em> useful things.</em>
          </h2>
          <p>Have a business workflow to untangle or a system to connect? Get in touch.</p>
          <a className="contact-email" href="mailto:muazzamkhokhar.mk@gmail.com">
            <span>muazzamkhokhar.mk@gmail.com</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="contact-aside">
          <span className="contact-index">OPEN CHANNELS / PK</span>
          <a href="mailto:muazzamkhokhar.mk@gmail.com">
            <Mail size={17} aria-hidden="true" />
            <span>Email</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/muazzam-manzoor/"
            target="_blank"
            rel="noreferrer"
          >
            <BriefcaseBusiness size={17} aria-hidden="true" />
            <span>LinkedIn</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href="https://github.com/muazzam-manzoor" target="_blank" rel="noreferrer">
            <Code2 size={17} aria-hidden="true" />
            <span>GitHub</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a className="contact-back-top" href="#top">
            Back to the beginning <ArrowDownRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="contact-mark" aria-hidden="true">
        MM
      </div>
    </section>
  );
}
