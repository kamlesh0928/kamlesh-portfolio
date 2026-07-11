"use client";

import { useMemo } from "react";

export function FloatingParticles({ count = 18 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 14 + Math.random() * 10,
        delay: Math.random() * -20,
        opacity: 0.15 + Math.random() * 0.25,
      })),
    [count],
  );

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            bottom: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: p.id % 3 === 0 ? "#2dd4bf" : "#a78bfa",
            opacity: p.opacity,
            animation: `floatUp ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes floatUp {
          from { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-50vh) translateX(12px); }
          to { transform: translateY(-100vh) translateX(-8px); }
        }
      `}</style>
    </div>
  );
}
