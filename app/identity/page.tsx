"use client";

import TerminalWindow, { TerminalLine, TerminalCursor } from "../components/TerminalWindow";
import { AnimatedSection } from "../components/AnimatedSection";
import { IconDownload } from "../components/icons";
import { BugDisappeared, ClientChangedRequirements } from "../components/DevLifeInterstitial";

const EXPERIENCE = [
  {
    period: "Mar 2026 - June 2026",
    title: "Freelance Full Stack Developer",
    org: "Technavyug Pvt. Ltd.",
    desc: "Developed Full Stack production platform that combines a Learning Management System (LMS), E-commerce, and Content Management System (CMS). Users can purchase courses, products, and services through a unified platform, while administrators manage content, users, orders, and learning activities from a centralized dashboard.",
  },
  {
    period: "May 2025 - Aug 2025",
    title: "Full Stack Developer Intern",
    org: "Nextute EdTech Pvt. Ltd.",
    desc: "Developed the complete backend infrastructure from scratch, designing scalable REST APIs and database architecture for a production-ready application. Built the backend using Node.js, Express.js, PostgreSQL, and Prisma ORM, optimized database performance, and collaborated with a 7+ member frontend team to deliver features through an Agile development workflow.",
  },
];

const PROCESS = [
  { step: "01", title: "Discover", desc: "Understanding goals, users and constraints before any design work begins." },
  { step: "02", title: "Design", desc: "Wireframes and visual direction that communicate intent clearly." },
  { step: "03", title: "Develop", desc: "Clean, scalable code with testing built in from the start." },
  { step: "04", title: "Deliver", desc: "Deployment, monitoring and a handover you can actually maintain." },
];

export default function IdentityPage() {
  return (
    <div>
      {/* Header */}
      <AnimatedSection>
        <div className="section-header">
          <div className="text-label" style={{ color: "var(--primary-green)", marginBottom: 12 }}>
            // IDENTITY.md
          </div>
          <h1 className="text-headline-lg">System Identity</h1>
        </div>
      </AnimatedSection>

      {/* About Terminal */}
      <div className="grid-2" style={{ marginBottom: 48 }}>
        <AnimatedSection>
          <TerminalWindow title="cat /var/log/developer/identity.txt">
            <TerminalLine>cat /var/log/developer/identity.txt</TerminalLine>
            <div style={{ marginTop: 16, color: "var(--on-surface)", lineHeight: 1.8 }}>
              <p style={{ marginBottom: 16 }}>
                I&apos;m <span style={{ color: "var(--primary-green)" }}>Kamlesh Prajapati</span>,
                a Full Stack Developer based in India.
              </p>
              <p style={{ marginBottom: 16 }}>
                I build fast, scalable, and user-friendly products that solve
                real-world problems. I handle everything from backend architecture
                to frontend design, ensuring a seamless experience for users.
              </p>
              <p>
                My goal is to create products that not only look good but also
                perform exceptionally well.
              </p>
            </div>
            <div style={{ marginTop: 16 }}>
              <TerminalCursor />
            </div>
          </TerminalWindow>
        </AnimatedSection>

        <AnimatedSection animation="animate-slide-right">
          <div className="card-terminal" style={{ padding: 24, height: "100%" }}>
            <div className="card-terminal-glow" />
            <div className="text-label" style={{ color: "var(--on-surface-variant)", marginBottom: 20 }}>
              CORE_CAPABILITIES
            </div>
            {[
              "1 year shipping production web applications",
              "End-to-end ownership: architecture through deployment",
              "Clear communication, honest timelines, no surprises",
              "System architecture and API design",
              "Frontend engineering with React/Next.js",
              "Database design and optimization",
            ].map((point, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ color: "var(--primary-green)", fontSize: 14, flexShrink: 0, marginTop: 2 }}>
                  &gt;
                </span>
                <span className="text-code" style={{ color: "var(--on-surface)" }}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Dev Life Moment */}
      <BugDisappeared />

      {/* Execution Log (Experience) */}
      <AnimatedSection>
        <div className="section-divider" />
        <div style={{ marginBottom: 32 }}>
          <div className="text-label" style={{ color: "var(--primary-green)", marginBottom: 12 }}>
            // EXECUTION_LOG
          </div>
          <h2 className="text-headline-md">A track record built one shipped project at a time.</h2>
          <div style={{ marginTop: 16 }}>
            <a
              href="https://drive.google.com/file/d/1cw1yXTR_OQMqi7FiqcGJA7-W0zSrE0nJ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-terminal"
            >
              <IconDownload />
              DOWNLOAD_FULL_RESUME
            </a>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid-2" style={{ marginBottom: 48 }}>
        {/* Timeline */}
        <AnimatedSection>
          <div className="timeline-terminal">
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

        {/* How I Work */}
        <AnimatedSection animation="animate-slide-right">
          <div className="card-terminal" style={{ padding: 24 }}>
            <div className="card-terminal-glow" />
            <div className="text-label" style={{ color: "var(--on-surface-variant)", marginBottom: 24 }}>
              PIPELINE_PROCESS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {PROCESS.map((step) => (
                <div key={step.step} style={{ display: "flex", gap: 16 }}>
                  <span
                    className="text-code"
                    style={{ color: "var(--primary-green)", flexShrink: 0, paddingTop: 2, fontWeight: 700 }}
                  >
                    {step.step}
                  </span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 700, color: "var(--on-surface)", marginBottom: 4 }}>
                      {step.title}
                    </div>
                    <div className="text-code" style={{ color: "var(--on-surface-variant)", lineHeight: 1.6 }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Dev Life Moment */}
      <ClientChangedRequirements />
    </div>
  );
}
