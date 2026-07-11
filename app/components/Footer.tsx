"use client";

import { useState, useEffect } from "react";
import { IconChevronUp } from "./icons";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer
        style={{ padding: "40px 0 48px", position: "relative", zIndex: 1 }}
      >
        <div className="shell">
          <div
            style={{
              borderTop: "1px solid var(--border-subtle)",
              paddingTop: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--text-primary)",
              }}
            >
              Kamlesh Prajapati
            </span>
            <span className="footer-tagline" style={{ textAlign: "left" }}>
              &lt;/&gt; Code is my craft, design is my voice.
            </span>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} · Built from scratch
            </span>
          </div>
        </div>
      </footer>

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="back-to-top"
        >
          <IconChevronUp />
        </button>
      )}
    </>
  );
}
