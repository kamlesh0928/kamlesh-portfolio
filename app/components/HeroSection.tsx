"use client";

import dynamic from "next/dynamic";
import { AnimatedSection } from "./AnimatedSection";
import { IconArrowUpRight, IconDownload } from "./icons";

const HeroScene = dynamic(() => import("./three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const STATS = [
  { number: "2+", label: "Years Experience" },
  { number: "5+", label: "Projects Shipped" },
  { number: "10+", label: "Technologies" },
  { number: "100%", label: "Client Focused" },
];

const STACK = [
  "JAVA",
  "PYTHON",
  "REACT.JS",
  "NEXT.JS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "NODE.JS",
  "TAILWIND",
  "MONGODB",
  "FIREBASE",
  "GIT",
  "GITHUB",
];

export default function HeroSection() {
  return (
    <section id="home" className="hero-wrap">
      <div className="shell">
        <div className="hero-grid">
          {/* Left: headline */}
          <AnimatedSection>
            <div className="coord-tag" style={{ marginBottom: "28px" }}>
              <span className="dot" />
              AVAILABLE FOR FREELANCE &amp; FULL-TIME ROLES
            </div>

            <h1 className="display-xl">Full Stack</h1>
            <h1 className="display-xl">Developer</h1>
            <h1 className="display-outline" style={{ marginTop: "4px" }}>
              &amp; Product Builder
            </h1>

            <p
              style={{
                fontSize: "1.02rem",
                color: "var(--text-secondary)",
                maxWidth: "480px",
                lineHeight: 1.75,
                marginTop: "28px",
              }}
            >
              I build fast, reliable web applications end-to-end — from system
              architecture and APIs to interfaces people enjoy using. Currently
              taking on select freelance projects and full-time opportunities.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                marginTop: "36px",
                flexWrap: "wrap",
              }}
            >
              <a href="#contact" className="btn btn-primary">
                Hire Me
                <span className="btn-icon-box">
                  <IconArrowUpRight />
                </span>
              </a>
              <a href="#work" className="btn btn-ghost">
                View Work
              </a>
              <a href="/resume.pdf" download className="btn btn-ghost">
                <IconDownload />
                Resume
              </a>
            </div>

            <div className="hero-stats-row">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="hero-stat-number">{stat.number}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: 3D scene */}
          <AnimatedSection animation="animate-slide-right">
            <div className="hero-scene-frame">
              <div
                className="hero-scene-corner"
                style={{
                  top: "16px",
                  left: "16px",
                  borderRight: "none",
                  borderBottom: "none",
                }}
              />
              <div
                className="hero-scene-corner"
                style={{
                  top: "16px",
                  right: "16px",
                  borderLeft: "none",
                  borderBottom: "none",
                }}
              />
              <div
                className="hero-scene-corner"
                style={{
                  bottom: "16px",
                  left: "16px",
                  borderRight: "none",
                  borderTop: "none",
                }}
              />
              <div
                className="hero-scene-corner"
                style={{
                  bottom: "16px",
                  right: "16px",
                  borderLeft: "none",
                  borderTop: "none",
                }}
              />

              <div
                className="hero-scene-tag"
                style={{ top: "24px", left: "40px" }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "var(--signal-400)",
                  }}
                />
                NODE_CORE.OBJ
              </div>
              <div
                className="hero-scene-tag"
                style={{ bottom: "24px", right: "40px" }}
              >
                RENDER: WEBGL · REALTIME
              </div>

              <HeroScene />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Marquee */}
      <div style={{ marginTop: "80px" }}>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...STACK, ...STACK].map((item, i) => (
              <span className="marquee-item" key={`${item}-${i}`}>
                {item} <span className="sep">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
