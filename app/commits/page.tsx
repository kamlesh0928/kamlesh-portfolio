"use client";

import { AnimatedSection } from "../components/AnimatedSection";
import { IconExternalLink, IconBranch } from "../components/icons";
import { WorksOnMyMachine } from "../components/DevLifeInterstitial";

const PROJECTS = [
  {
    hash: "a1b2c3d",
    branch: "feature/aidentify",
    title: "AIdentify",
    category: "Full Stack · Web Application",
    tags: ["NEXT.JS", "PYTHON", "GOOGLE GEMINI"],
    image: "/images/AIdentify.png",
    github: "https://github.com/kamlesh0928/aidentify",
    live: "https://aidentify-frontend.vercel.app/",
    description:
      "A platform leveraging AI to identify whether image, video or audio is AI generated or not. Built with Next.js for a seamless frontend experience and Python for backend processing, integrating Google Gemini for advanced analysis capabilities.",
  },
  {
    hash: "f4e5d6c",
    branch: "feature/code-parivartan",
    title: "Code Parivartan",
    category: "Full Stack · Agentic AI",
    tags: ["PYTHON", "NEXT.JS", "REDIS"],
    image: "/images/CodeParivartan.png",
    github: "https://github.com/kamlesh0928/code-parivartan",
    live: "https://www.linkedin.com/posts/kamlesh5242_ai-agenticai-codemodernization-activity-7378337340907315200-KKbp/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEZnC4QBSZDCKkS0VmrXEZQJO2JiVqM_l1A&utm_campaign=whatsapp",
    description:
      "An Agentic AI application designed for code modernization and transformation. It uses Python for backend processing, Next.js for the frontend interface, and Redis for efficient data caching and retrieval.",
  },
  {
    hash: "b9a8c7d",
    branch: "feature/finora",
    title: "Finora",
    category: "Mobile App · FinTech",
    tags: ["DART", "FLUTTER", "PYTHON"],
    image: "/images/Finora.png",
    github: "https://github.com/kamlesh0928/finora-frontend",
    live: "https://github.com/kamlesh0928/finora-frontend",
    description:
      "A FinTech mobile application developed to understand and manage personal finances. Built with Flutter for cross-platform mobile development, Dart for application logic, and Python for backend services.",
  },
];

export default function CommitsPage() {
  return (
    <div>
      {/* Header */}
      <AnimatedSection>
        <div className="section-header">
          <div
            className="text-label"
            style={{ color: "var(--primary-green)", marginBottom: 12 }}
          >
            // COMMITS.git
          </div>
          <h1 className="text-headline-lg">Selected Work</h1>
          <p
            className="text-body-md"
            style={{
              color: "var(--on-surface-variant)",
              marginTop: 16,
              maxWidth: 600,
            }}
          >
            Projects built to solve real problems. A log of my most significant
            pushes to the main branch.
          </p>
        </div>
      </AnimatedSection>

      {/* Projects Grid */}
      <div className="grid-2" style={{ marginBottom: 48 }}>
        {PROJECTS.map((project, idx) => (
          <AnimatedSection
            key={project.title}
            className={`delay-${(idx + 1) * 100}`}
          >
            <div className="commit-card">
              {/* Commit Header */}
              <div className="commit-card-header">
                <div style={{ display: "flex", gap: 8 }}>
                  <div className="terminal-dot terminal-dot--red" />
                  <div className="terminal-dot terminal-dot--yellow" />
                  <div className="terminal-dot terminal-dot--green" />
                </div>
                <div>commit: {project.hash}</div>
              </div>

              {/* Commit Body */}
              <div className="commit-card-body">
                <div className="commit-branch">
                  <IconBranch /> {project.branch}
                </div>

                <h3 className="text-headline-md" style={{ marginBottom: 4 }}>
                  {project.title}
                </h3>
                <div
                  className="text-label"
                  style={{
                    color: "var(--on-surface-variant)",
                    marginBottom: 20,
                  }}
                >
                  {project.category}
                </div>

                <div className="commit-visual">
                  <img src={project.image} alt={project.title} />
                </div>

                <p
                  className="text-code"
                  style={{
                    color: "var(--on-surface-variant)",
                    marginBottom: 24,
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginBottom: 24,
                  }}
                >
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip-terminal">
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    borderTop: "1px solid var(--outline-variant)",
                    paddingTop: 16,
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow"
                  >
                    VIEW_SOURCE <IconExternalLink />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow"
                  >
                    LIVE_DEMO <IconExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}

        {/* View More CTA placed inside grid as 4th item */}
        <AnimatedSection className="delay-400">
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "300px",
            }}
          >
            <a
              href="https://github.com/kamlesh0928"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-terminal"
            >
              VIEW_ALL_COMMITS <IconExternalLink />
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Interstitial */}
      <WorksOnMyMachine />
    </div>
  );
}
