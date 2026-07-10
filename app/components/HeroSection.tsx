"use client";

import { TypingEffect } from "./TypingEffect";
import { IconArrowDown, IconGitHub, IconLinkedIn, IconTwitter } from "./icons";

export function HeroSection() {
  return (
    <section
      id="home"
      className="section bg-grid"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-40%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <p
          className="animate-fade-in-up delay-100"
          style={{
            fontSize: "1.1rem",
            color: "#a0a0a0",
            marginBottom: "12px",
            fontWeight: 400,
          }}
        >
          Hello, I&apos;m
        </p>

        <h1
          className="animate-fade-in-up delay-200"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          <span className="gradient-text">Kamlesh</span>
          <br />
          <span style={{ color: "#f5f5f5" }}>Prajapati</span>
        </h1>

        <div
          className="animate-fade-in-up delay-300"
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            color: "#a0a0a0",
            marginBottom: "40px",
            fontWeight: 400,
            minHeight: "40px",
          }}
        >
          <TypingEffect
            words={[
              "Full Stack Developer",
              "React & Next.js Expert",
              "Backend Architect",
              "UI/UX Enthusiast",
              "Mobile App Developer",
            ]}
          />
        </div>

        <div
          className="animate-fade-in-up delay-400"
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#projects" className="glow-btn">
            View My Work
            <IconArrowDown />
          </a>
          <a href="#contact" className="ghost-btn">
            Get In Touch
          </a>
        </div>

        <div
          className="animate-fade-in-up delay-500"
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            marginTop: "48px",
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
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#a0a0a0",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fbbf24";
                e.currentTarget.style.borderColor = "rgba(251, 191, 36, 0.3)";
                e.currentTarget.style.background = "rgba(251, 191, 36, 0.06)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#a0a0a0";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div
        className="animate-fade-in delay-700"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "#666",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(180deg, #fbbf24, transparent)",
            animation: "fadeInUp 1.5s ease infinite",
          }}
        />
      </div>
    </section>
  );
}
