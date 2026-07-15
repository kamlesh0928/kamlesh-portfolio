"use client";

import dynamic from "next/dynamic";
import { AnimatedSection } from "./AnimatedSection";
import Magnetic from "./Magnetic";
import { IconArrowUpRight, IconDownload } from "./icons";

const FrameSequenceHero = dynamic(() => import("./frames/FrameSequenceHero"), {
  ssr: false,
  loading: () => null,
});

const STACK = [
  "JAVA",
  "PYTHON",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "DATA STRUCTURES AND ALGORITHMS",
  "OOPS",
  "NODE.JS",
  "REACT.JS",
  "NEXT.JS",
  "FLASK",
  "TAILWIND",
  "MYSQL",
  "MONGODB",
  "POSTGRESQL",
  "GIT",
  "GITHUB",
  "DOCKER",
  "KUBERNETES",
  "CI/CD",
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
              I develop efficient and trustworthy web apps from start to finish,
              beginning with system architecture, APIs, and working all the way
              up to interfaces with which users genuinely fall in love with.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                marginTop: "36px",
                flexWrap: "wrap",
              }}
            >
              <Magnetic>
                <a href="#contact" className="btn btn-primary">
                  Hire Me
                  <span className="btn-icon-box">
                    <IconArrowUpRight />
                  </span>
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a href="#work" className="btn btn-ghost">
                  View Work
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a
                  href="https://drive.google.com/file/d/1cw1yXTR_OQMqi7FiqcGJA7-W0zSrE0nJ/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <IconDownload />
                  Resume
                </a>
              </Magnetic>
            </div>
          </AnimatedSection>

          {/* Right: interactive frame-sequence visual */}
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
                SEQUENCE_CORE
              </div>

              <FrameSequenceHero
                framePath="/frames/hero"
                frameCount={60}
                padLength={4}
                extension="webp"
                fps={24}
              />
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
