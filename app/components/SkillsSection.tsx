"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js / Next.js", value: 92 },
      { name: "JavaScript / TypeScript", value: 85 },
      { name: "Tailwind CSS", value: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", value: 84 },
      { name: "REST & API Design", value: 88 },
      { name: "MongoDB", value: 80 },
    ],
  },
];

const TOOLKIT = [
  "HTML5",
  "CSS3",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Git & GitHub",
  "REST APIs",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Vercel",
  "VS Code",
];

function SkillBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {SKILL_GROUPS.map((group) => (
        <div key={group.title} style={{ marginBottom: "36px" }}>
          <div className="coord-tag" style={{ marginBottom: "20px" }}>
            <span className="dot" />
            {group.title.toUpperCase()}
          </div>
          {group.skills.map((skill) => (
            <div className="skill-row" key={skill.name}>
              <div className="skill-row-top">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-value">{skill.value}%</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-fill"
                  style={{ width: triggered ? `${skill.value}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="shell">
        <div className="section-head-row">
          <AnimatedSection>
            <div className="eyebrow">Skills &amp; Toolkit</div>
            <h2 className="section-heading">The stack behind every build.</h2>
          </AnimatedSection>
          <AnimatedSection animation="animate-fade-in" className="delay-200">
            <p className="section-sub" style={{ margin: 0 }}>
              Tools and technologies I use to build modern web applications,
              from frontend to backend, and everything in between.
            </p>
          </AnimatedSection>
        </div>

        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          }}
        >
          <AnimatedSection>
            <SkillBars />
          </AnimatedSection>

          <AnimatedSection animation="animate-slide-right">
            <div className="panel panel-pad">
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  marginBottom: "22px",
                }}
              >
                FULL TOOLKIT
              </div>
              <div className="chip-grid">
                {TOOLKIT.map((tool) => (
                  <span className="chip" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
