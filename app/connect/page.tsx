"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { AnimatedSection } from "../components/AnimatedSection";
import TerminalWindow, {
  TerminalLine,
  TerminalCursor,
} from "../components/TerminalWindow";
import {
  IconMail,
  IconMapPin,
  IconCable,
  IconPhone,
} from "../components/icons";

type Status = "idle" | "sending" | "success" | "error";

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const validateForm = () => {
    let isValid = true;
    const errors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      errors.name = "[ERROR] IDENTIFIER_STRING is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "[ERROR] RETURN_ADDRESS is required.";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "[ERROR] Invalid format for RETURN_ADDRESS.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "[ERROR] TRANSMIT_PAYLOAD cannot be empty.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if custom validation fails
    }

    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env vars missing");
      setStatus("error");
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, formData, { publicKey });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setFormErrors({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      {/* Header */}
      <AnimatedSection>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <IconCable />
          </div>
          <h1 className="text-display" style={{ marginBottom: 16 }}>
            Sudo_Connect
          </h1>
          <div
            className="text-code"
            style={{ color: "var(--on-surface-variant)" }}
          >
            Initiating secure protocol... Awaiting input parameters.
            <TerminalCursor />
          </div>
        </div>
      </AnimatedSection>

      <div className="grid-2" style={{ gap: 48, marginBottom: 64 }}>
        {/* Contact Info */}
        <AnimatedSection>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <div
                className="text-label"
                style={{ color: "var(--primary-green)", marginBottom: 16 }}
              >
                // DIRECT_COMMUNICATION
              </div>
              <a
                href="mailto:kamleshprajapati0928@gmail.com"
                className="link-arrow"
                style={{
                  fontSize: 16,
                  textTransform: "none",
                  letterSpacing: "normal",
                }}
              >
                <IconMail />
                kamleshprajapati0928@gmail.com
              </a>
            </div>

            <div>
              <div
                className="text-label"
                style={{ color: "var(--primary-green)", marginBottom: 16 }}
              >
                // VOICE_COMMUNICATION
              </div>
              <a
                href="tel:+917385011844"
                className="link-arrow"
                style={{
                  fontSize: 16,
                  textTransform: "none",
                  letterSpacing: "normal",
                }}
              >
                <IconPhone />
                +91 73850 11844
              </a>
            </div>

            <div>
              <div
                className="text-label"
                style={{ color: "var(--primary-green)", marginBottom: 16 }}
              >
                // LOCATION_DATA
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "var(--on-surface)",
                }}
              >
                <IconMapPin />
                Based in India &middot; Working Worldwide
              </div>
            </div>

            <div>
              <div
                className="text-label"
                style={{ color: "var(--primary-green)", marginBottom: 16 }}
              >
                // SOCIAL_NETWORKS
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <a
                  href="https://github.com/kamlesh0928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >
                  GITHUB.com/kamlesh0928
                </a>
                <a
                  href="https://www.linkedin.com/in/kamlesh5242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >
                  LINKEDIN.com/in/kamlesh5242
                </a>
                <a
                  href="https://x.com/kamlesh09285242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >
                  X.com/kamlesh09285242
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Form Terminal */}
        <AnimatedSection animation="animate-slide-right">
          <TerminalWindow title="/usr/bin/connect --interactive">
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
            >
              <div>
                <TerminalLine>SET IDENTIFIER_STRING</TerminalLine>
                <input
                  type="text"
                  placeholder="[Enter your name]"
                  className="terminal-input"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (formErrors.name)
                      setFormErrors({ ...formErrors, name: "" });
                  }}
                  style={{
                    borderColor: formErrors.name
                      ? "var(--error-red)"
                      : undefined,
                  }}
                />
                {formErrors.name && (
                  <div
                    style={{
                      color: "var(--error-red)",
                      fontSize: 12,
                      marginTop: 4,
                    }}
                  >
                    {formErrors.name}
                  </div>
                )}
              </div>

              <div>
                <TerminalLine>SET RETURN_ADDRESS</TerminalLine>
                <input
                  type="email"
                  placeholder="[Enter your email]"
                  className="terminal-input"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (formErrors.email)
                      setFormErrors({ ...formErrors, email: "" });
                  }}
                  style={{
                    borderColor: formErrors.email
                      ? "var(--error-red)"
                      : undefined,
                  }}
                />
                {formErrors.email && (
                  <div
                    style={{
                      color: "var(--error-red)",
                      fontSize: 12,
                      marginTop: 4,
                    }}
                  >
                    {formErrors.email}
                  </div>
                )}
              </div>

              <div>
                <TerminalLine>TRANSMIT_PAYLOAD</TerminalLine>
                <textarea
                  rows={4}
                  placeholder="[Enter your message...]"
                  className="terminal-input"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (formErrors.message)
                      setFormErrors({ ...formErrors, message: "" });
                  }}
                  style={{
                    borderColor: formErrors.message
                      ? "var(--error-red)"
                      : undefined,
                  }}
                />
                {formErrors.message && (
                  <div
                    style={{
                      color: "var(--error-red)",
                      fontSize: 12,
                      marginTop: 4,
                    }}
                  >
                    {formErrors.message}
                  </div>
                )}
              </div>

              <div style={{ marginTop: 16 }}>
                <button
                  type="submit"
                  className="btn-glitch"
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    opacity: status === "sending" ? 0.7 : 1,
                  }}
                >
                  <span>
                    {status === "sending"
                      ? "TRANSMITTING..."
                      : "EXECUTE_TRANSMISSION"}
                  </span>
                </button>
              </div>

              {status === "success" && (
                <div
                  style={{
                    color: "var(--primary-green)",
                    textAlign: "center",
                    fontSize: 14,
                  }}
                >
                  [SUCCESS] Payload delivered. I will respond shortly.
                </div>
              )}
              {status === "error" && (
                <div
                  style={{
                    color: "var(--error-red)",
                    textAlign: "center",
                    fontSize: 14,
                  }}
                >
                  [ERROR] Transmission failed. Please use direct email.
                </div>
              )}
            </form>
          </TerminalWindow>
        </AnimatedSection>
      </div>
    </div>
  );
}
