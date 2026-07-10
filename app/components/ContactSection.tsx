"use client";

import { useState, type FormEvent } from "react";
import { AnimatedSection } from "./AnimatedSection";
import {
  IconMail,
  IconMapPin,
  IconGitHub,
  IconLinkedIn,
  IconTwitter,
  IconSend,
} from "./icons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="section"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <AnimatedSection className="text-center">
          <p
            style={{
              color: "#fbbf24",
              fontSize: "0.85rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "8px",
            }}
          >
            Get In Touch
          </p>
          <h2 className="section-title">
            Let&apos;s Work{" "}
            <span className="gradient-text-static">Together</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            build something amazing together.
          </p>
        </AnimatedSection>

        <div
          className="grid-contact"
          style={{
            gap: "48px",
          }}
        >
          <AnimatedSection animation="animate-slide-left">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {[
                {
                  icon: <IconMail />,
                  label: "Email",
                  value: "kamleshprajapati0928@gmail.com",
                  href: "mailto:kamleshprajapati0928@gmail.com",
                },
                {
                  icon: <IconMapPin />,
                  label: "Location",
                  value: "India",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="glass-card"
                  style={{
                    padding: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(251, 191, 36, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fbbf24",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        marginBottom: "2px",
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </p>
                    <p style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "8px",
                }}
              >
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
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#a0a0a0",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fbbf24";
                      e.currentTarget.style.borderColor =
                        "rgba(251, 191, 36, 0.3)";
                      e.currentTarget.style.background =
                        "rgba(251, 191, 36, 0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#a0a0a0";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="animate-slide-right">
            <form
              onSubmit={handleSubmit}
              className="glass-card"
              style={{ padding: "36px" }}
            >
              <div
                className="form-grid-2col"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="form-input"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  id="contact-name"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="form-input"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  id="contact-email"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                required
                className="form-input"
                style={{ marginBottom: "16px" }}
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                id="contact-subject"
              />
              <textarea
                placeholder="Your Message"
                required
                className="form-input"
                rows={6}
                style={{ marginBottom: "24px", resize: "vertical" }}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                id="contact-message"
              />

              <button
                type="submit"
                className="glow-btn"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "1rem",
                  padding: "16px",
                }}
              >
                {submitted ? (
                  "Message Sent! ✓"
                ) : (
                  <>
                    Send Message
                    <IconSend />
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
