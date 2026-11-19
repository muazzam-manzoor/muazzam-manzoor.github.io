"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Engineering", href: "#engineering" },
  { label: "Experience", href: "#experience" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        const current = visibleSections.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
        )[0];

        if (current) setActiveSection(current.target.id);
      },
      { rootMargin: "-18% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const renderLinks = (mobile = false) =>
    links.map((link) => (
      <a
        aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
        className="nav-link"
        href={link.href}
        key={link.href}
        onClick={() => mobile && setMenuOpen(false)}
      >
        {link.label}
        <span className="nav-link-index" aria-hidden="true">
          {String(links.indexOf(link) + 1).padStart(2, "0")}
        </span>
      </a>
    ));

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Muazzam Manzoor home">
          <span className="brand-mark" aria-hidden="true">
            M<span>M</span>
          </span>
          <span className="brand-name">
            Muazzam Manzoor
            <small>Full-stack developer</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {renderLinks()}
        </nav>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {menuOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="mobile-menu"
          id="mobile-navigation"
        >
          <span className="mobile-menu-label">Index / 00—06</span>
          {renderLinks(true)}
        </nav>
      ) : null}
    </header>
  );
}
