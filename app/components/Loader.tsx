"use client";

import { useEffect, useState, useCallback } from "react";

const BOOT_LINES = [
  { text: "Loading core modules...", status: "ok", delay: 300 },
  { text: "Establishing secure connection...", status: "ok", delay: 400 },
  { text: "Checking environment variables...", status: "ok", delay: 350 },
  { text: "Initializing dependencies...", status: "ok", delay: 500 },
  {
    text: "Searching for missing semicolons... found 42",
    status: "warn",
    delay: 600,
  },
  { text: "Compiling developer_journey.tsx...", status: "ok", delay: 400 },
  { text: "git blame -- it was you all along", status: "info", delay: 300 },
  { text: "System Ready.", status: "done", delay: 200 },
];

export default function Loader({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [hiding, setHiding] = useState(false);
  const [progress, setProgress] = useState(0);

  const onDoneStable = useCallback(onDone, [onDone]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let currentLine = 0;

    const showNext = () => {
      if (currentLine < BOOT_LINES.length) {
        currentLine++;
        setVisibleLines(currentLine);
        setProgress(Math.round((currentLine / BOOT_LINES.length) * 100));
        timeoutId = setTimeout(showNext, BOOT_LINES[currentLine - 1].delay);
      } else {
        timeoutId = setTimeout(() => {
          setHiding(true);
          setTimeout(onDoneStable, 600);
        }, 400);
      }
    };

    timeoutId = setTimeout(showNext, 500);
    return () => clearTimeout(timeoutId);
  }, [onDoneStable]);

  const totalBlocks = 20;
  const filledBlocks = Math.round((progress / 100) * totalBlocks);
  const progressBar =
    "[" +
    "=".repeat(filledBlocks) +
    (filledBlocks < totalBlocks ? ">" : "") +
    " ".repeat(Math.max(0, totalBlocks - filledBlocks - 1)) +
    "]";

  return (
    <div className={`boot-loader ${hiding ? "boot-hiding" : ""}`}>
      <div className="grid-bg" style={{ opacity: 0.5 }} />
      <div
        className="boot-terminal"
        style={{ position: "relative", zIndex: 1 }}
      >
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <div className="boot-line" key={i}>
            <span className="prompt">$</span>
            <span>
              {line.text}
              {line.status === "ok" && <span className="ok"> [OK]</span>}
              {line.status === "warn" && <span className="warn"> [WARN]</span>}
              {line.status === "done" && <span className="ok"> _</span>}
            </span>
          </div>
        ))}

        {visibleLines > 0 && visibleLines < BOOT_LINES.length && (
          <div className="boot-line" style={{ marginTop: 8 }}>
            <span className="prompt">$</span>
            <span className="terminal-cursor" />
          </div>
        )}

        <div className="boot-progress" style={{ marginTop: 24 }}>
          <div style={{ marginBottom: 4, letterSpacing: "0.15em" }}>
            {progressBar} {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}
