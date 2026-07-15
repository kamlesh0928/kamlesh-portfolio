"use client";

import { useEffect, useState } from "react";

export default function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const duration = 1800;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setHiding(true);
          setTimeout(onDone, 700);
        }, 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "var(--bg-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: hiding ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.7s cubic-bezier(0.76, 0, 0.24, 1)",
      }}
    >
      <div className="blueprint-grid" style={{ opacity: 0.6 }} />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <svg
          width="88"
          height="88"
          viewBox="0 0 88 88"
          style={{ marginBottom: "28px" }}
        >
          <polygon
            points="44,6 78,25 78,63 44,82 10,63 10,25"
            fill="none"
            stroke="var(--violet-500)"
            strokeWidth="1.4"
            strokeDasharray="260"
            strokeDashoffset={260 - (260 * progress) / 100}
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
          />
          <text
            x="44"
            y="50"
            textAnchor="middle"
            fontFamily="var(--font-display)"
            fontSize="22"
            fontWeight={700}
            fill="var(--text-primary)"
          >
            KP
          </text>
        </svg>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            letterSpacing: "0.14em",
            color: "var(--text-muted)",
            marginBottom: "14px",
          }}
        >
          INITIALIZING PORTFOLIO
          <span className="loader-dots" />
        </div>

        <div
          style={{
            width: "220px",
            height: "2px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "2px",
            overflow: "hidden",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background:
                "linear-gradient(90deg, var(--violet-500), var(--signal-400))",
              transition: "width 0.1s linear",
            }}
          />
        </div>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "1.6rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            marginTop: "18px",
          }}
        >
          {progress}%
        </div>
      </div>

      <style>{`
        .loader-dots::after {
          content: '';
          animation: loaderDots 1.4s steps(4, end) infinite;
        }
        @keyframes loaderDots {
          0% { content: ''; }
          25% { content: '.'; }
          50% { content: '..'; }
          75% { content: '...'; }
          100% { content: ''; }
        }
      `}</style>
    </div>
  );
}
