"use client";

import { AnimatedSection } from "./AnimatedSection";
import { IconGitHub, IconExternalLink } from "./icons";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  gradient: string;
  icon: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="glass-card"
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        style={{
          height: "160px",
          background: project.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)",
          }}
        />
        <span style={{ fontSize: "3.5rem", position: "relative", zIndex: 1 }}>
          {project.icon}
        </span>
      </div>

      <div
        style={{
          padding: "28px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "#f5f5f5",
            marginBottom: "12px",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            marginBottom: "20px",
            flex: 1,
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "20px",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="skill-tag"
              style={{ fontSize: "0.75rem", padding: "4px 12px" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#a0a0a0",
                fontSize: "0.85rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a0a0a0")}
            >
              <IconGitHub className="" /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#a0a0a0",
                fontSize: "0.85rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a0a0a0")}
            >
              <IconExternalLink /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, product catalog, shopping cart, Stripe integration, and an admin dashboard for managing products and orders.",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "https://github.com/kamlesh0928",
      live: "#",
      gradient: "linear-gradient(135deg, #d97706, #92400e)",
      icon: "🛒",
    },
    {
      title: "Real-Time Chat App",
      description:
        "A real-time messaging application with WebSocket support, typing indicators, read receipts, file sharing, and group chat functionality with end-to-end encryption.",
      tags: ["React", "Socket.io", "Express", "PostgreSQL", "Redis"],
      github: "https://github.com/kamlesh0928",
      live: "#",
      gradient: "linear-gradient(135deg, #b45309, #78350f)",
      icon: "💬",
    },
    {
      title: "AI Task Manager",
      description:
        "An intelligent task management tool that uses AI to auto-prioritize tasks, suggest optimal schedules, and provide productivity analytics with natural language processing.",
      tags: ["Python", "Django", "React", "OpenAI API", "Docker"],
      github: "https://github.com/kamlesh0928",
      live: "#",
      gradient: "linear-gradient(135deg, #a16207, #713f12)",
      icon: "🤖",
    },
    {
      title: "Fitness Tracker Mobile App",
      description:
        "A cross-platform mobile application for tracking workouts, nutrition, and health goals with social features, leaderboards, and personalized training plans.",
      tags: ["React Native", "Firebase", "Node.js", "MongoDB"],
      github: "https://github.com/kamlesh0928",
      gradient: "linear-gradient(135deg, #ca8a04, #854d0e)",
      icon: "💪",
    },
  ];

  return (
    <section
      id="projects"
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
            My Work
          </p>
          <h2 className="section-title">
            Featured <span className="gradient-text-static">Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            A selection of projects that showcase my skills and passion for
            building impactful applications.
          </p>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project, idx) => (
            <AnimatedSection
              key={project.title}
              animation="animate-fade-in-up"
              className={`delay-${(idx + 1) * 100}`}
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
