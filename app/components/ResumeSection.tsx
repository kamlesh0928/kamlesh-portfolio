"use client";

import { AnimatedSection } from "./AnimatedSection";
import { IconDownload, IconBriefcase, IconGraduationCap } from "./icons";

export function ResumeSection() {
  const experience = [
    {
      role: "Full Stack Developer",
      company: "Freelance / Open Source",
      period: "2024 — Present",
      description:
        "Building full-stack web applications for clients and contributing to open-source projects. Specializing in React, Next.js, and Node.js ecosystems.",
      highlights: ["React & Next.js", "Node.js APIs", "MongoDB & PostgreSQL"],
    },
    {
      role: "Frontend Developer Intern",
      company: "Tech Startup",
      period: "2023 — 2024",
      description:
        "Developed responsive user interfaces and collaborated with design teams to implement modern web experiences with optimal performance.",
      highlights: [
        "UI/UX Implementation",
        "Performance Optimization",
        "Agile Development",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      school: "Computer Science & Engineering",
      period: "2021 — 2025",
      description:
        "Focused on software engineering, data structures, algorithms, and full-stack web development. Active member of the coding club and hackathon participant.",
    },
  ];

  return (
    <section id="resume" className="section bg-grid">
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
            My Journey
          </p>
          <h2 className="section-title">
            Resume & <span className="gradient-text-static">Experience</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            My professional journey and educational background that shaped my
            career.
          </p>
        </AnimatedSection>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <AnimatedSection className="text-center">
            <a
              href="#"
              className="glow-btn"
              style={{ display: "inline-flex" }}
              onClick={(e) => {
                e.preventDefault();
                alert(
                  "Add your resume PDF to /public/resume.pdf and update this link!",
                );
              }}
            >
              <IconDownload />
              Download Resume
            </a>
          </AnimatedSection>
        </div>

        <div
          className="grid-resume"
          style={{
            gap: "48px",
          }}
        >
          <AnimatedSection animation="animate-slide-left">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(251, 191, 36, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fbbf24",
                }}
              >
                <IconBriefcase />
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>
                Experience
              </h3>
            </div>

            <div style={{ position: "relative", paddingLeft: "32px" }}>
              <div className="timeline-line" />
              {experience.map((exp, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: i < experience.length - 1 ? "32px" : 0,
                    position: "relative",
                  }}
                >
                  <div
                    className="timeline-dot"
                    style={{
                      position: "absolute",
                      left: "-37px",
                      top: "6px",
                    }}
                  />
                  <div className="glass-card" style={{ padding: "24px" }}>
                    <span
                      style={{
                        color: "#fbbf24",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      {exp.period}
                    </span>
                    <h4
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        marginBottom: "4px",
                      }}
                    >
                      {exp.role}
                    </h4>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.9rem",
                        marginBottom: "12px",
                        fontWeight: 500,
                      }}
                    >
                      {exp.company}
                    </p>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        marginBottom: "12px",
                      }}
                    >
                      {exp.description}
                    </p>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                    >
                      {exp.highlights.map((h) => (
                        <span
                          key={h}
                          className="skill-tag"
                          style={{ fontSize: "0.75rem", padding: "4px 10px" }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="animate-slide-right">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(251, 191, 36, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fbbf24",
                }}
              >
                <IconGraduationCap />
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>Education</h3>
            </div>

            <div style={{ position: "relative", paddingLeft: "32px" }}>
              <div className="timeline-line" />
              {education.map((edu, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <div
                    className="timeline-dot"
                    style={{
                      position: "absolute",
                      left: "-37px",
                      top: "6px",
                    }}
                  />
                  <div className="glass-card" style={{ padding: "24px" }}>
                    <span
                      style={{
                        color: "#fbbf24",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      {edu.period}
                    </span>
                    <h4
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        marginBottom: "4px",
                      }}
                    >
                      {edu.degree}
                    </h4>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.9rem",
                        marginBottom: "12px",
                        fontWeight: 500,
                      }}
                    >
                      {edu.school}
                    </p>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "48px" }}>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  marginBottom: "16px",
                }}
              >
                Certifications & Achievements
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Full Stack Web Development — Udemy",
                  "React & Next.js Advanced — Coursera",
                  "AWS Cloud Practitioner — Amazon",
                  "HackerRank Problem Solving (Gold)",
                ].map((cert) => (
                  <div
                    key={cert}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      background: "rgba(255,255,255,0.02)",
                      borderRadius: "10px",
                      border: "1px solid var(--border-subtle)",
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span style={{ color: "#fbbf24", fontSize: "1.1rem" }}>
                      ✦
                    </span>
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
