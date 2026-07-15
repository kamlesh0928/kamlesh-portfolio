"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { AnimatedSection } from "./AnimatedSection";
import Magnetic from "./Magnetic";
import {
  IconGitHub,
  IconLinkedIn,
  IconTwitter,
  IconMail,
  IconMapPin,
  IconSend,
} from "./icons";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env vars missing — see SETUP.md");
      setStatus("error");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        { publicKey },
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
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
                    <Magnetic key={social.label} strength={0.3}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="social-icon"
                      >
                        {social.icon}
                      </a>
                    </Magnetic>
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
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "16px",
                    opacity: status === "sending" ? 0.7 : 1,
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "sending" && "Sending..."}
                  {status === "success" && "Message Sent ✓"}
                  {status === "idle" && (
                    <>
                      Send Message
                      <IconSend />
                    </>
                  )}
                  {status === "error" && "Failed — Try Again"}
                </button>

                {status === "error" && (
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#f87171",
                      textAlign: "center",
                    }}
                  >
                    Something went wrong. Please email me directly at{" "}
                    <a
                      href="mailto:kamleshprajapati0928@gmail.com"
                      style={{ color: "#f87171", textDecoration: "underline" }}
                    >
                      kamleshprajapati0928@gmail.com
                    </a>
                    .
                  </p>
                )}
                {status === "success" && (
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--status-live)",
                      textAlign: "center",
                    }}
                  >
                    Thanks — I&apos;ll get back to you within 24 hours.
                  </p>
                )}
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
