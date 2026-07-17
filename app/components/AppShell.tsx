"use client";

import { useState, useCallback } from "react";
import Loader from "./Loader";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from "./Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLoaderDone = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loader onDone={handleLoaderDone} />}

      {/* Ambient effects */}
      <div className="grid-bg" />
      <div className="scanline-overlay" />
      <div className="vignette" />

      {/* App shell */}
      <div
        className="app-shell"
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.5s ease 0.1s",
        }}
      >
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="main-area">
          <TopBar
            onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
            menuOpen={sidebarOpen}
          />
          <main className="page-content page-enter">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
