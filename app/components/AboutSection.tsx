"use client";

import { AnimatedSection } from "./AnimatedSection";
import { IconLayout, IconCode, IconTarget, IconZap } from "./icons";

const SERVICES = [
  {
    icon: <IconLayout />,
    title: "Web Design",
    desc: "Interfaces that are intuitive, accessible, and visually appealing, designed to delight users.",
  },
  {
    icon: <IconCode />,
    title: "Full Stack Development",
    desc: "Production-grade apps with React.js, Next.js and Node.js, built to scale from day one.",
  },
  {
    icon: <IconTarget />,
    title: "Product Strategy",
    desc: "Turning a rough idea or brief into a scoped, buildable plan before a line of code ships.",
  },
  {
    icon: <IconZap />,
    title: "Performance & SEO",
    desc: "Sub-second loads, clean Core Web Vitals, and structure search engines can actually read.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: "64px",
          }}
          className="about-grid"
        >
          <AnimatedSection>
            <div className="eyebrow">About</div>
            <h2 className="section-heading">
              I build products, not just pages.
            </h2>
            <p className="section-sub">
              I&apos;m Kamlesh Prajapati, a Full Stack Developer based in India.
              I build fast, scalable, and user-friendly products that solve
              real-world problems. I handle everything from backend architecture
              to frontend design, ensuring a seamless experience for users. My
              goal is to create products that not only look good but also
              perform exceptionally well.
            </p>

            <div
              style={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              {[
                "1 year shipping production web applications",
                "End-to-end ownership architecture through deployment",
                "Clear communication, honest timelines, no surprises",
              ].map((point) => (
                <div
                  key={point}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--signal-400)",
                      marginTop: "8px",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
            className="services-grid"
          >
            {SERVICES.map((service, idx) => (
              <AnimatedSection
                key={service.title}
                animation="animate-fade-in-up"
                className={`delay-${(idx + 1) * 100}`}
              >
                <div className="panel panel-pad" style={{ height: "100%" }}>
                  <div className="feature-icon-box">{service.icon}</div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "10px",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {service.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
