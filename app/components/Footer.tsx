"use client";

import { useState, useEffect } from "react";
import Magnetic from "./Magnetic";
import {
  IconChevronUp,
  IconMail,
  IconPhone,
  IconMapPin,
  IconGitHub,
  IconLinkedIn,
  IconTwitter,
} from "./icons";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const PHONE_NUMBER = "+91 00000 00000";
const PHONE_HREF = "tel:+910000000000";

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
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <div className="shell" style={{ padding: "72px 24px 0" }}>
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <a
                href="#home"
                className="gradient-text-static"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                KP<span style={{ color: "var(--signal-400)" }}>.</span>
              </a>
              <p
                style={{
                  fontSize: "0.86rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginTop: "16px",
                  maxWidth: "260px",
                }}
              >
                Full Stack Developer building fast, reliable web applications.
                Open to freelance projects and full-time roles.
              </p>
              <div style={{ display: "flex", gap: "10px", marginTop: "22px" }}>
                {[
                  {
                    icon: <IconGitHub />,
                    href: "http://github.com/kamlesh0928",
                    label: "GitHub",
                  },
                  {
                    icon: <IconLinkedIn />,
                    href: "https://www.linkedin.com/in/kamlesh5242/",
                    label: "LinkedIn",
                  },
                  {
                    icon: <IconTwitter />,
                    href: "https://x.com/kamlesh09285242",
                    label: "Twitter",
                  },
                ].map((social) => (
                  <Magnetic key={social.label} strength={0.3}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="social-icon"
                      style={{ width: "40px", height: "40px" }}
                    >
                      {social.icon}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <div className="footer-col-label">Navigate</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {QUICK_LINKS.map((link) => (
                  <a key={link.href} href={link.href} className="footer-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact — includes phone */}
            <div>
              <div className="footer-col-label">Get in Touch</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <a
                  href="mailto:kamleshprajapati0928@gmail.com"
                  className="footer-contact-row"
                >
                  <IconMail className="footer-contact-icon" />
                  kamleshprajapati0928@gmail.com
                </a>
                <a href={PHONE_HREF} className="footer-contact-row">
                  <IconPhone className="footer-contact-icon" />
                  {PHONE_NUMBER}
                </a>
                <div
                  className="footer-contact-row"
                  style={{ cursor: "default" }}
                >
                  <IconMapPin className="footer-contact-icon" />
                  Based in India · Working Worldwide
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--border-subtle)",
              marginTop: "56px",
              padding: "24px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <span className="footer-tagline" style={{ textAlign: "left" }}>
              &lt;/&gt; Code is my craft, design is my voice.
            </span>
            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} Kamlesh Prajapati. All rights
              reserved.
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

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1fr;
          gap: 48px;
        }
        .footer-col-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 20px;
        }
        .footer-link {
          font-size: 0.88rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.25s ease;
          width: fit-content;
        }
        .footer-link:hover { color: var(--violet-400); }
        .footer-contact-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.86rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .footer-contact-row:hover { color: var(--text-primary); }
        .footer-contact-icon { color: var(--violet-400); flex-shrink: 0; }

        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </>
  );
}
