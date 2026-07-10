"use client";

import { AnimatedSection } from "./AnimatedSection";
import { IconDownload } from "./icons";

export function AboutSection() {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "5+", label: "Projects Completed" },
    { number: "10+", label: "Technologies" },
    { number: "5+", label: "Happy Clients" },
  ];

  return (
    <section
      id="about"
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
            About Me
          </p>
          <h2 className="section-title">
            Crafting{" "}
            <span className="gradient-text-static">Digital Experiences</span>
          </h2>
          <div className="section-divider" />
        </AnimatedSection>

        <div
          className="grid-about"
          style={{
            gap: "64px",
            marginTop: "64px",
          }}
        >
          <AnimatedSection animation="animate-slide-left">
            <div className="glass-card" style={{ padding: "40px" }}>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                I&apos;m a passionate{" "}
                <strong style={{ color: "#fbbf24" }}>
                  Full Stack Developer
                </strong>{" "}
                with a deep love for building elegant, performant, and
                user-centric web applications. I specialize in modern JavaScript
                ecosystems and love turning complex problems into simple,
                beautiful solutions.
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginBottom: "32px",
                }}
              >
                From responsive frontends with React and Next.js to robust
                backends with Node.js and Python, I bring a holistic approach to
                software development. I&apos;m always exploring new technologies
                and pushing the boundaries of what&apos;s possible on the web.
              </p>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="#contact"
                  className="glow-btn"
                  style={{ fontSize: "0.85rem", padding: "12px 24px" }}
                >
                  Let&apos;s Connect
                </a>
                <a
                  href="#resume"
                  className="ghost-btn"
                  style={{ fontSize: "0.85rem", padding: "12px 24px" }}
                >
                  <IconDownload />
                  Download CV
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="animate-slide-right">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                height: "100%",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="glass-card"
                  style={{
                    padding: "32px 24px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <span
                    className="gradient-text-static"
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      marginBottom: "8px",
                      display: "block",
                    }}
                  >
                    {stat.number}
                  </span>
                  <span
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
