"use client";

import { AnimatedSection } from "./AnimatedSection";

interface DevLifeProps {
  level?: "info" | "warn" | "error" | "debug";
  children: React.ReactNode;
}

export default function DevLifeInterstitial({
  level = "info",
  children,
}: DevLifeProps) {
  const levelClass = `interstitial-${level}`;
  const levelLabelClass = `interstitial-level--${level}`;
  const labelMap = {
    info: "INFO",
    warn: "WARN",
    error: "ERROR",
    debug: "DEBUG",
  };

  return (
    <AnimatedSection>
      <div className="interstitial dev-text-hover-container">
        <div className={`interstitial-card ${levelClass}`}>
          <div className={`interstitial-level ${levelLabelClass}`}>
            [{labelMap[level]}]
          </div>
          <div>{children}</div>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* Pre-built dev-life scenarios with animated hover text */

export function BugDisappeared() {
  return (
    <DevLifeInterstitial level="error">
      <span className="hover-glitch-text">
        Bug disappeared during debugging. Schrodinger&apos;s Bug detected.
      </span>
      <br />
      <span style={{ color: "var(--on-surface-variant)", fontSize: 12 }}>
        $ console.log(&quot;here?&quot;) // Bug vanishes. Remove log. Bug
        returns.
      </span>
    </DevLifeInterstitial>
  );
}

export function ClientChangedRequirements() {
  return (
    <DevLifeInterstitial level="warn">
      <span className="hover-glitch-text">
        Client changed requirements. Again. Iteration #47.
      </span>
      <br />
      <span style={{ color: "var(--on-surface-variant)", fontSize: 12 }}>
        $ git stash &amp;&amp; git checkout -b feature/v48-final-FINAL-v2
      </span>
    </DevLifeInterstitial>
  );
}

export function WorksOnMyMachine() {
  return (
    <DevLifeInterstitial level="debug">
      $ diff expected.txt reality.txt
      <br />
      <span style={{ color: "var(--error-red)", fontSize: 12 }}>
        - &quot;works on my machine&quot;
      </span>
      <br />
      <span
        className="hover-glitch-text"
        style={{ color: "var(--primary-green)", fontSize: 12 }}
      >
        + &quot;works in production&quot; // (never)
      </span>
    </DevLifeInterstitial>
  );
}

export function MissingSemicolon() {
  return (
    <DevLifeInterstitial level="info">
      <span className="hover-glitch-text">
        Spent 4 hours debugging. Fix: missing semicolon on line 247.
      </span>
      <br />
      <span style={{ color: "var(--on-surface-variant)", fontSize: 12 }}>
        $ git commit -m &quot;fix: add missing semicolon that broke
        everything&quot;
      </span>
    </DevLifeInterstitial>
  );
}
