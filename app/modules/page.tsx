"use client";

import { useEffect, useState } from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import TerminalWindow, { TerminalLine, TerminalCursor } from "../components/TerminalWindow";
import { NpmInstall, MissingSemicolon } from "../components/DevLifeInterstitial";

const SKILL_GROUPS = [
  {
    title: "Frontend / Client",
    skills: [
      { name: "React.js / Next.js", value: 92, status: "OPTIMAL" },
      { name: "JavaScript / TypeScript", value: 85, status: "STABLE" },
      { name: "Tailwind CSS", value: 90, status: "OPTIMAL" },
    ],
  },
  {
    title: "Backend / Server",
    skills: [
      { name: "Node.js", value: 84, status: "STABLE" },
      { name: "REST & API Design", value: 88, status: "OPTIMAL" },
      { name: "Python", value: 75, status: "COMPILING" },
    ],
  },
  {
    title: "Database / DevOps",
    skills: [
      { name: "MySQL / PostgreSQL", value: 80, status: "STABLE" },
      { name: "MongoDB", value: 82, status: "STABLE" },
      { name: "Docker / Kubernetes", value: 70, status: "LOADING" },
    ],
  },
];

const TOOLKIT = [
  "HTML5", "CSS3", "Java", "Python", "JavaScript", "TypeScript",
  "React.js", "Next.js", "Node.js", "Express.js", "MySQL", "MongoDB",
  "PostgreSQL", "Tailwind CSS", "Git", "GitHub", "REST APIs",
  "Docker", "Kubernetes", "CI/CD", "Vercel", "VS Code"
];

const TERMINAL_LOGS = [
  "[SYS] Initializing skill assessment module...",
  "[INFO] Loading frontend dependencies... OK",
  "[WARN] Caffeine levels dropping. Performance may degrade.",
  "[INFO] Compiling backend logic... OK",
  "[DEBUG] Checking database connections... 0ms latency",
  "[SYS] All modules operational.",
  "[INFO] Calculating uptime metrics... > Uptime: 99.9%",
  "> Successfully Deployed: 10+ Projects",
];

function CicdProgressBar({ value, triggered }: { value: number; triggered: boolean }) {
  const totalSegments = 10;
  const activeSegments = Math.round((value / 100) * totalSegments);

  return (
    <div className="progress-bar-cicd">
      {Array.from({ length: totalSegments }).map((_, i) => (
        <div
          key={i}
          className={`progress-segment ${
            triggered && i < activeSegments
              ? "progress-segment--filled"
              : "progress-segment--empty"
          }`}
          style={{ transitionDelay: `${i * 100}ms` }}
        />
      ))}
    </div>
  );
}

export default function ModulesPage() {
  const [triggered, setTriggered] = useState(false);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    // Trigger progress bars after mount
    const timer = setTimeout(() => setTriggered(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Type out terminal logs
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev < TERMINAL_LOGS.length ? prev + 1 : prev));
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Header */}
      <AnimatedSection>
        <div className="section-header">
          <div className="text-label" style={{ color: "var(--primary-green)", marginBottom: 12 }}>
            // MODULES.bin
          </div>
          <h1 className="text-headline-lg">System Modules</h1>
          <p className="text-body-md" style={{ color: "var(--on-surface-variant)", marginTop: 16, maxWidth: 600 }}>
            Tools and technologies I use to build modern web applications,
            from frontend to backend, and everything in between.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid-2" style={{ marginBottom: 48 }}>
        {/* Left Column: Skill Bars */}
        <div>
          {SKILL_GROUPS.map((group, groupIdx) => (
            <AnimatedSection key={group.title} className={`delay-${groupIdx * 100}`}>
              <div style={{ marginBottom: 40 }}>
                <div className="text-label" style={{ color: "var(--on-surface-variant)", marginBottom: 16 }}>
                  [{group.title}]
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 8 }}>
                        <div>
                          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--on-surface)" }}>
                            {skill.name}
                          </div>
                          <div className="text-label" style={{ color: skill.status === "OPTIMAL" ? "var(--primary-green)" : (skill.status === "COMPILING" ? "var(--tertiary-container)" : "var(--on-surface-variant)"), fontSize: 10, marginTop: 4 }}>
                            Status: {skill.status}
                          </div>
                        </div>
                        <div className="text-code" style={{ color: "var(--primary-green)" }}>
                          {skill.value}%
                        </div>
                      </div>
                      <CicdProgressBar value={skill.value} triggered={triggered} />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Right Column: Terminal & Toolkit */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {/* Terminal Log */}
          <AnimatedSection animation="animate-slide-right">
            <TerminalWindow title="sys_logs.sh">
              {TERMINAL_LOGS.slice(0, logIndex).map((log, i) => (
                <TerminalLine key={i} prompt={log.startsWith(">") ? ">" : ""}>
                  <span style={{ 
                    color: log.includes("[WARN]") ? "var(--tertiary-container)" : 
                           log.includes("[ERROR]") ? "var(--error-red)" : 
                           log.includes("OK") ? "var(--primary-green)" : 
                           "var(--on-surface)" 
                  }}>
                    {log.startsWith(">") ? log.substring(1).trim() : log}
                  </span>
                </TerminalLine>
              ))}
              {logIndex < TERMINAL_LOGS.length && (
                <TerminalLine prompt="">
                  <TerminalCursor />
                </TerminalLine>
              )}
            </TerminalWindow>
          </AnimatedSection>

          {/* Full Toolkit */}
          <AnimatedSection animation="animate-slide-right" className="delay-200">
            <div className="card-terminal" style={{ padding: 24 }}>
              <div className="card-terminal-glow" />
              <div className="text-label" style={{ color: "var(--on-surface-variant)", marginBottom: 20 }}>
                FULL_TOOLKIT.json
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {TOOLKIT.map((tool) => (
                  <span key={tool} className="chip-terminal" style={{ color: "var(--on-surface-variant)", borderColor: "var(--outline-variant)", background: "transparent" }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Dev Life Moments */}
      <NpmInstall />
      <div style={{ marginTop: 24 }}>
        <MissingSemicolon />
      </div>
    </div>
  );
}
