"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TerminalWindow, {
  TerminalLine,
  TerminalCursor,
} from "./components/TerminalWindow";
import { AnimatedSection } from "./components/AnimatedSection";
import Magnetic from "./components/Magnetic";
import { IconArrowForward, IconDownload } from "./components/icons";

const BOOT_MESSAGES = [
  "Loading core modules... [OK]",
  "Establishing secure connection... [OK]",
  "Awaiting user input...",
  "Checking environment variables... [OK]",
  "Initializing dependencies... [OK]",
  "System Ready.",
];

export default function Home() {
  const [visibleLines, setVisibleLines] = useState(3);

  useEffect(() => {
    let idx = 3;
    const timer = setInterval(() => {
      if (idx < BOOT_MESSAGES.length) {
        idx++;
        setVisibleLines(idx);
      } else {
        clearInterval(timer);
      }
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - var(--topbar-height) - 160px)",
      }}
    >
      {/* Hero */}
      <AnimatedSection>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1 className="text-display" style={{ marginBottom: 8 }}>
            <span style={{ color: "var(--primary-green)" }}>sys</span>.init()
          </h1>
          <p
            className="text-label"
            style={{
              color: "var(--on-surface-variant)",
              letterSpacing: "0.2em",
              fontSize: 14,
            }}
          >
            FULL STACK DEVELOPER
          </p>
        </div>
      </AnimatedSection>

      {/* Terminal */}
      <AnimatedSection
        className="delay-200"
        style={{ width: "100%", maxWidth: 680 }}
      >
        <TerminalWindow title="bash - terminal">
          {BOOT_MESSAGES.slice(0, visibleLines).map((msg, i) => (
            <TerminalLine key={i}>{msg}</TerminalLine>
          ))}
          <div style={{ marginTop: 16 }}>
            <TerminalLine>
              <TerminalCursor />
            </TerminalLine>
          </div>
        </TerminalWindow>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="delay-400">
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Magnetic>
            <Link href="/connect" className="btn-glitch">
              <span>./RUN RESUME.SH</span>
              <IconArrowForward />
            </Link>
          </Magnetic>
          <Magnetic strength={0.25}>
            <a
              href="https://drive.google.com/file/d/1cw1yXTR_OQMqi7FiqcGJA7-W0zSrE0nJ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-terminal"
            >
              <IconDownload />
              DOWNLOAD CV
            </a>
          </Magnetic>
        </div>
      </AnimatedSection>

      {/* Status bar */}
      <AnimatedSection className="delay-600">
        <div
          style={{
            marginTop: 64,
            display: "flex",
            gap: 32,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { label: "PROJECTS_DEPLOYED", value: "10+" },
            { label: "UPTIME", value: "99.9%" },
            { label: "COMMITS", value: "500+" },
            { label: "CAFFEINE_LEVEL", value: "CRITICAL" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                className="text-headline-md glow-text"
                style={{ color: "var(--primary-green)", marginBottom: 4 }}
              >
                {stat.value}
              </div>
              <div
                className="text-label"
                style={{ color: "var(--on-surface-variant)", fontSize: 10 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
