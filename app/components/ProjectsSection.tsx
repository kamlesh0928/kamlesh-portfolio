"use client";

import { useRef, type MouseEvent } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { IconGitHub, IconExternalLink, IconArrowUpRight } from "./icons";

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack · Web Application",
    tags: ["NEXT.JS", "STRIPE", "MONGODB"],
    image: "/images/project_ecommerce_1783777291317.png",
    github: "https://github.com/kamlesh0928",
    live: "#",
  },
  {
    title: "Real-Time Chat App",
    category: "Full Stack · WebSockets",
    tags: ["REACT", "SOCKET.IO", "NODE.JS"],
    image: "/images/project_chatapp_1783777301171.png",
    github: "https://github.com/kamlesh0928",
    live: "#",
  },
  {
    title: "AI Task Manager",
    category: "AI-Powered Web App",
    tags: ["NEXT.JS", "OPENAI API", "FIREBASE"],
    image: "/images/project_taskmanager_1783777332375.png",
    github: "https://github.com/kamlesh0928",
    live: "#",
  },
];

function TiltCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`;
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="project-media">
        <img
          src={project.image}
          alt={project.title}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            if (target.parentElement) {
              target.parentElement.style.background =
                "linear-gradient(135deg, #120a24 0%, #030304 100%)";
            }
          }}
        />
        <div className="project-media-overlay" />
      </div>

      <div className="project-body">
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "12px",
          }}
        >
          <div>
            <h3 className="project-title">{project.title}</h3>
            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                marginBottom: "16px",
              }}
            >
              {project.category}
            </p>
          </div>
        </div>
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="View source on GitHub"
          >
            <IconGitHub />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="View live project"
          >
            <IconExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <div className="section-head-row">
          <AnimatedSection>
            <div className="eyebrow">Selected Work</div>
            <h2 className="section-heading">
              Projects built to solve real problems.
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="animate-fade-in" className="delay-200">
            <a
              href="https://github.com/kamlesh0928"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              All Projects
              <span className="btn-icon-box">
                <IconArrowUpRight />
              </span>
            </a>
          </AnimatedSection>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="projects-grid"
        >
          {PROJECTS.map((project, idx) => (
            <AnimatedSection
              key={project.title}
              animation="animate-fade-in-up"
              className={`delay-${(idx + 1) * 100}`}
            >
              <TiltCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
