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
  const labelMap = { info: "INFO", warn: "WARN", error: "ERROR", debug: "DEBUG" };

  return (
    <AnimatedSection>
      <div className="interstitial">
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

/* Pre-built dev-life scenarios */
export function BugDisappeared() {
  return (
    <DevLifeInterstitial level="error">
      Bug disappeared during debugging. Schrodinger&apos;s Bug detected.
      <br />
      <span style={{ color: "var(--on-surface-variant)", fontSize: 12 }}>
        $ console.log(&quot;here?&quot;) // Bug vanishes. Remove log. Bug returns.
      </span>
    </DevLifeInterstitial>
  );
}

export function ClientChangedRequirements() {
  return (
    <DevLifeInterstitial level="warn">
      Client changed requirements. Again. Iteration #47.
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
      <span style={{ color: "var(--primary-green)", fontSize: 12 }}>
        + &quot;works in production&quot; // (never)
      </span>
    </DevLifeInterstitial>
  );
}

export function MissingSemicolon() {
  return (
    <DevLifeInterstitial level="info">
      Spent 4 hours debugging. Fix: missing semicolon on line 247.
      <br />
      <span style={{ color: "var(--on-surface-variant)", fontSize: 12 }}>
        $ git commit -m &quot;fix: add missing semicolon that broke everything&quot;
      </span>
    </DevLifeInterstitial>
  );
}

export function MergeConflict() {
  return (
    <DevLifeInterstitial level="error">
      Merge conflict detected in every. single. file.
      <br />
      <span style={{ color: "var(--on-surface-variant)", fontSize: 12 }}>
        {`<<<<<<< HEAD`}
        <br />
        {`your_sanity.js (deleted)`}
        <br />
        {`=======`}
        <br />
        {`// TODO: fix later`}
        <br />
        {`>>>>>>> origin/chaos`}
      </span>
    </DevLifeInterstitial>
  );
}

export function BrokeProduction() {
  return (
    <DevLifeInterstitial level="error">
      $ git push --force origin main
      <br />
      <span style={{ color: "var(--error-red)", fontSize: 12 }}>
        [FATAL] You just broke production with a &quot;tiny CSS change.&quot;
      </span>
      <br />
      <span style={{ color: "var(--on-surface-variant)", fontSize: 12 }}>
        $ git revert HEAD &amp;&amp; pretend nothing happened
      </span>
    </DevLifeInterstitial>
  );
}

export function NpmInstall() {
  return (
    <DevLifeInterstitial level="warn">
      $ npm install
      <br />
      <span style={{ color: "var(--on-surface)", fontSize: 12 }}>
        added 1,247 packages in 12m
      </span>
      <br />
      <span style={{ color: "var(--tertiary-container)", fontSize: 12 }}>
        42 vulnerabilities (12 moderate, 28 high, 2 critical)
      </span>
      <br />
      <span style={{ color: "var(--on-surface-variant)", fontSize: 12 }}>
        $ // This is fine. Everything is fine.
      </span>
    </DevLifeInterstitial>
  );
}
