"use client";

import { IconTerminalIcon, IconSensors, IconPower, IconMenu, IconX } from "./icons";

interface TopBarProps {
  onMenuToggle: () => void;
  menuOpen: boolean;
}

export default function TopBar({ onMenuToggle, menuOpen }: TopBarProps) {
  return (
    <header className="topbar">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button
          className="mobile-menu-btn"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconX /> : <IconMenu />}
        </button>
        <span className="topbar-title">THE_DEVELOPER_JOURNEY</span>
      </div>
      <div className="topbar-actions">
        <button className="topbar-icon-btn" aria-label="Terminal">
          <IconTerminalIcon />
        </button>
        <button className="topbar-icon-btn" aria-label="Status">
          <IconSensors />
        </button>
        <button className="topbar-icon-btn" aria-label="Power">
          <IconPower />
        </button>
      </div>
    </header>
  );
}
