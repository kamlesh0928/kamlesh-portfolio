"use client";

import { useState, useEffect } from "react";
import { IconChevronUp } from "./icons";
import { NAV_LINKS } from "./Navbar";

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      style={{
        padding: "48px 24px",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <a
          href="#home"
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            textDecoration: "none",
          }}
          className="gradient-text-static"
        >
          Kamlesh Prajapati
        </a>

        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.875rem",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div
          style={{
            width: "80px",
            height: "1px",
            background: "rgba(255,255,255,0.08)",
          }}
        />

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.85rem",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Kamlesh Prajapati. Crafted with{" "}
          <span style={{ color: "#fbbf24" }}>♥</span> and code.
        </p>
      </div>

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          style={{
            position: "fixed",
            bottom: "32px",
            right: "32px",
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "rgba(251, 191, 36, 0.15)",
            border: "1px solid rgba(251, 191, 36, 0.3)",
            color: "#fbbf24",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            transition: "all 0.3s ease",
            animation: "fadeInUp 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(251, 191, 36, 0.25)";
            e.currentTarget.style.transform = "translateY(-4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(251, 191, 36, 0.15)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <IconChevronUp />
        </button>
      )}
    </footer>
  );
}
