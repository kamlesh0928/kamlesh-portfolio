"use client";

import { useState, useEffect } from "react";
import { IconMenu, IconX } from "./icons";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 24px" : "20px 24px",
        background: scrolled ? "rgba(5, 5, 5, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#home"
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            textDecoration: "none",
            letterSpacing: "-0.03em",
          }}
          className="gradient-text-static"
        >
          K<span style={{ color: "#f5f5f5" }}>.</span>
        </a>

        <div
          className="nav-desktop"
          style={{
            gap: "8px",
            alignItems: "center",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                padding: "8px 16px",
                fontSize: "0.875rem",
                fontWeight: 500,
                color:
                  activeSection === link.href.replace("#", "")
                    ? "#fbbf24"
                    : "#a0a0a0",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                background:
                  activeSection === link.href.replace("#", "")
                    ? "rgba(251, 191, 36, 0.08)"
                    : "transparent",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== link.href.replace("#", "")) {
                  e.currentTarget.style.color = "#f5f5f5";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.href.replace("#", "")) {
                  e.currentTarget.style.color = "#a0a0a0";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#f5f5f5",
            cursor: "pointer",
            padding: "8px",
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(5, 5, 5, 0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
          className="animate-fade-in"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                padding: "12px 16px",
                fontSize: "0.95rem",
                fontWeight: 500,
                color:
                  activeSection === link.href.replace("#", "")
                    ? "#fbbf24"
                    : "#a0a0a0",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
