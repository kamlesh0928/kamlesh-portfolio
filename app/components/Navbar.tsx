"use client";

import { useState, useEffect } from "react";
import { IconMenu, IconX } from "./icons";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar"
      style={{
        background: scrolled ? "rgba(3, 3, 4, 0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border-subtle)"
          : "1px solid transparent",
      }}
    >
      <div className="nav-inner">
        <div></div>
        <div
          className="nav-desktop"
          style={{ gap: "4px", alignItems: "center" }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  color: isActive
                    ? "var(--violet-400)"
                    : "var(--text-secondary)",
                  background: isActive
                    ? "rgba(167, 139, 250, 0.08)"
                    : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                {isActive ? "> " : ""}
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{
              padding: "10px 20px",
              marginLeft: "12px",
              fontSize: "0.82rem",
            }}
          >
            Hire Me
          </a>
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "10px",
            color: "var(--text-primary)",
            cursor: "pointer",
            padding: "8px",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="animate-fade-in"
          style={{
            background: "rgba(3, 3, 4, 0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "12px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="nav-link"
              style={{
                color:
                  activeSection === link.href.replace("#", "")
                    ? "var(--violet-400)"
                    : "var(--text-secondary)",
                padding: "13px 14px",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn btn-primary"
            style={{ justifyContent: "center", marginTop: "10px" }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
