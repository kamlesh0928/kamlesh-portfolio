"use client";

import { type ReactNode } from "react";
import { AnimatedSection, useInView } from "./AnimatedSection";
import { IconCode, IconBriefcase, IconGraduationCap } from "./icons";

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: { name: string; level: number }[];
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const { ref, inView } = useInView(0.3);

  return (
    <div ref={ref}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "6px",
        }}
      >
        <span
          style={{ fontSize: "0.875rem", fontWeight: 500, color: "#d4d4d4" }}
        >
          {name}
        </span>
        <span
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#fbbf24",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: "6px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "3px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: inView ? `${level}%` : "0%",
            background: "linear-gradient(90deg, #d97706, #fbbf24)",
            borderRadius: "3px",
            transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 0 10px rgba(251, 191, 36, 0.3)",
          }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const categories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: <IconCode />,
      skills: [
        { name: "React / Next.js", level: 92 },
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "HTML / CSS / Tailwind", level: 95 },
        { name: "React Native / Flutter", level: 78 },
      ],
    },
    {
      title: "Backend",
      icon: <IconBriefcase />,
      skills: [
        { name: "Node.js / Express", level: 88 },
        { name: "Python / Django / Flask", level: 82 },
        { name: "Java / Spring Boot", level: 75 },
        { name: "REST APIs / GraphQL", level: 85 },
      ],
    },
    {
      title: "Database & DevOps",
      icon: <IconGraduationCap />,
      skills: [
        { name: "MongoDB / PostgreSQL / MySQL", level: 86 },
        { name: "Docker / Kubernetes", level: 72 },
        { name: "Git / GitHub", level: 92 },
        { name: "CI/CD & Cloud (AWS/GCP)", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="section bg-grid">
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
            My Expertise
          </p>
          <h2 className="section-title">
            Technical <span className="gradient-text-static">Skills</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            A curated set of technologies I use to build exceptional digital
            products.
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {categories.map((cat, catIdx) => (
            <AnimatedSection
              key={cat.title}
              animation="animate-fade-in-up"
              className={`delay-${(catIdx + 1) * 200}`}
            >
              <div
                className="glass-card"
                style={{ padding: "32px", height: "100%" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "28px",
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
                    {cat.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#f5f5f5",
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {cat.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
