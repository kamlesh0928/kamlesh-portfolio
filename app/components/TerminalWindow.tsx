"use client";

import { type ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({
  title = "bash - terminal",
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div className={`terminal ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot terminal-dot--red" />
          <div className="terminal-dot terminal-dot--yellow" />
          <div className="terminal-dot terminal-dot--green" />
        </div>
        <div className="terminal-title">{title}</div>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}

export function TerminalLine({
  prompt = "$",
  children,
  className = "",
}: {
  prompt?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`terminal-line ${className}`}>
      <span className="terminal-prompt">{prompt}</span>
      <span className="terminal-text">{children}</span>
    </div>
  );
}

export function TerminalCursor() {
  return <span className="terminal-cursor" />;
}
