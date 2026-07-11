"use client";

import { AnimatedSection } from "./AnimatedSection";
import {
  IconDownload,
  IconArrowUpRight,
  IconBriefcase,
  IconGraduationCap,
} from "./icons";

const EXPERIENCE = [
  {
    period: "2024 — PRESENT",
    title: "Freelance Full Stack Developer",
    org: "Self-employed",
    desc: "Designing and building web applications for clients across e-commerce, SaaS and internal tooling — from initial architecture to deployment.",
    icon: <IconBriefcase />,
  },
  {
    period: "2023 — 2024",
    title: "Full Stack Development",
    org: "Independent Projects",
    desc: "Shipped multiple full stack products covering real-time systems, AI integrations and e-commerce, focused on performance and clean architecture.",
    icon: <IconBriefcase />,
  },
  {
    period: "2021 — 2023",
    title: "Computer Science Fundamentals",
    org: "Education",
    desc: "Built a strong foundation in data structures, algorithms and system design that underpins how I approach every project.",
    icon: <IconGraduationCap />,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    desc: "Understanding goals, users and constraints before any design work begins.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Wireframes and visual direction that communicate intent clearly.",
  },
  {
    step: "03",
    title: "Develop",
    desc: "Clean, scalable code with testing built in from the start.",
  },
  {
    step: "04",
    title: "Deliver",
    desc: "Deployment, monitoring and a handover you can actually maintain.",
  },
];

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="section"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="shell">
        <div className="section-head-row">
          <AnimatedSection>
            <div className="eyebrow">Experience</div>
            <h2 className="section-heading">
              A track record built one shipped project at a time.
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="animate-fade-in" className="delay-200">
            <a href="/resume.pdf" download className="btn btn-ghost">
              <IconDownload />
              Download Full Resume
            </a>
          </AnimatedSection>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "64px",
            marginBottom: "80px",
          }}
          className="resume-grid"
        >
          <AnimatedSection>
            <div className="timeline">
              {EXPERIENCE.map((item) => (
                <div className="timeline-item" key={item.title}>
                  <span className="timeline-dot" />
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-org">{item.org}</div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="animate-slide-right">
            <div className="panel panel-pad">
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  marginBottom: "24px",
                }}
              >
                HOW I WORK
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "22px",
                }}
              >
                {PROCESS.map((step) => (
                  <div key={step.step} style={{ display: "flex", gap: "16px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        color: "var(--signal-400)",
                        paddingTop: "2px",
                      }}
                    >
                      {step.step}
                    </span>
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "0.92rem",
                          color: "var(--text-primary)",
                          marginBottom: "4px",
                        }}
                      >
                        {step.title}
                      </div>
                      <div
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.6,
                        }}
                      >
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="animate-scale-in">
          <div className="cta-panel">
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="eyebrow" style={{ justifyContent: "center" }}>
                Open to Work
              </div>
              <h2
                className="section-heading"
                style={{
                  margin: "0 auto",
                  maxWidth: "620px",
                  textAlign: "center",
                }}
              >
                Have a project in mind, or a role to fill? Let&apos;s build it
                together.
              </h2>
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  justifyContent: "center",
                  marginTop: "36px",
                  flexWrap: "wrap",
                }}
              >
                <a href="#contact" className="btn btn-primary">
                  Start a Project
                  <span className="btn-icon-box">
                    <IconArrowUpRight />
                  </span>
                </a>
                <a
                  href="mailto:kamleshprajapati0928@gmail.com"
                  className="btn btn-ghost"
                >
                  Email Me Directly
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .resume-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
