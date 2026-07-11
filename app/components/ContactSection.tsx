"use client";

import { useState, type FormEvent } from "react";
import { AnimatedSection } from "./AnimatedSection";
import {
  IconGitHub,
  IconLinkedIn,
  IconTwitter,
  IconMail,
  IconMapPin,
  IconSend,
} from "./icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <div className="shell">
        <AnimatedSection>
          <div className="eyebrow">Contact</div>
          <h2 className="section-heading" style={{ marginBottom: "56px" }}>
            Let&apos;s talk about your next project.
          </h2>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: "40px",
          }}
          className="contact-grid"
        >
          <AnimatedSection>
            <div className="panel panel-pad" style={{ height: "100%" }}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <a
                  href="mailto:kamleshprajapati0928@gmail.com"
                  className="contact-item"
                >
                  <div className="contact-icon">
                    <IconMail />
                  </div>
                  <span>kamleshprajapati0928@gmail.com</span>
                </a>
                <a
                  href="https://kamlesh-portfolio.vercel.app"
                  className="contact-item"
                >
                  <div className="contact-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <span>kamlesh-portfolio.vercel.app</span>
                </a>
                <div className="contact-item" style={{ cursor: "default" }}>
                  <div className="contact-icon">
                    <IconMapPin />
                  </div>
                  <span>Based in India · Working Worldwide</span>
                </div>
              </div>

              <div
                style={{
                  marginTop: "36px",
                  paddingTop: "28px",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "18px",
                  }}
                >
                  Find me elsewhere
                </p>
                <div style={{ display: "flex", gap: "12px" }}>
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
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="social-icon"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="animate-slide-right">
            <div className="panel panel-pad">
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                  }}
                  className="form-row"
                >
                  <div>
                    <label className="form-label" htmlFor="contact-name">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      className="form-input"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      id="contact-name"
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-email">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="form-input"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      id="contact-email"
                    />
                  </div>
                </div>
                <div>
                  <label className="form-label" htmlFor="contact-message">
                    Project details
                  </label>
                  <textarea
                    placeholder="Tell me about the project or role..."
                    required
                    className="form-input"
                    rows={6}
                    style={{ resize: "vertical" }}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    id="contact-message"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "16px",
                  }}
                >
                  {submitted ? (
                    "Message Sent"
                  ) : (
                    <>
                      Send Message
                      <IconSend />
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
