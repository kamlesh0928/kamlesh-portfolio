"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type FrameSequenceProps = {
  framePath?: string;
  frameCount?: number;
  padLength?: number;
  extension?: string;
  fps?: number;
};

export default function FrameSequenceHero({
  framePath = "../../public/frames/hero",
  frameCount = 60,
  padLength = 3,
  extension = "jpg",
  fps = 30,
}: FrameSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const scrubbingRef = useRef(false);
  const rafRef = useRef<number | undefined>(undefined);

  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [scrubbing, setScrubbing] = useState(false);

  const frameSrc = useCallback(
    (i: number) =>
      `${framePath}/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`,
    [framePath, padLength, extension],
  );

  // Preload every frame once
  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      img.onload = () => {
        if (cancelled) return;
        loadedCount += 1;
        setLoaded(loadedCount);
        if (loadedCount === frameCount) setReady(true);
      };
      img.onerror = () => {
        if (cancelled) return;
        setFailed(true);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;

    return () => {
      cancelled = true;
    };
  }, [frameCount, frameSrc]);

  const draw = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cw, ch);

    const scale = Math.max(cw / img.width, ch / img.height);
    const w = img.width * scale;
    const h = img.height * scale;
    ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
  }, []);

  // Autoplay loop
  useEffect(() => {
    if (!ready) return;
    let last = performance.now();
    const interval = 1000 / fps;

    const tick = (now: number) => {
      if (!scrubbingRef.current) {
        if (now - last >= interval) {
          currentFrameRef.current = (currentFrameRef.current + 1) % frameCount;
          draw(currentFrameRef.current);
          last = now;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [ready, fps, frameCount, draw]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!ready) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const index = Math.min(
      frameCount - 1,
      Math.floor((x / rect.width) * frameCount),
    );
    currentFrameRef.current = index;
    draw(index);
  };

  const handleEnter = () => {
    scrubbingRef.current = true;
    setScrubbing(true);
  };

  const handleLeave = () => {
    scrubbingRef.current = false;
    setScrubbing(false);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      style={{
        position: "absolute",
        inset: 0,
        cursor: ready ? "ew-resize" : "default",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          opacity: ready ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      />

      {!ready && !failed && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          <div className="frame-loader-ring" />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
            }}
          >
            LOADING FRAMES {loaded}/{frameCount}
          </span>
        </div>
      )}

      {failed && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "radial-gradient(circle at 50% 40%, rgba(139,92,246,0.1), transparent 65%)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              textAlign: "center",
              padding: "0 24px",
            }}
          >
            Add frame sequence to /public{framePath} — see SETUP.md
          </span>
        </div>
      )}

      {ready && (
        <div
          className="hero-scene-tag"
          style={{
            bottom: "24px",
            left: "40px",
            opacity: scrubbing ? 1 : 0.6,
            transition: "opacity 0.3s ease",
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "var(--signal-400)",
            }}
          />
          DRAG TO EXPLORE
        </div>
      )}
    </div>
  );
}
