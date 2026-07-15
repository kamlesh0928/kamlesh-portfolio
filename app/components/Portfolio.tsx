"use client";

import { useState } from "react";
import Loader from "./Loader";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ResumeSection from "./ResumeSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}

      <div className="blueprint-grid" />
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <main
        style={{
          position: "relative",
          zIndex: 2,
          opacity: loading ? 0 : 1,
          transition: "opacity 0.6s ease 0.1s",
        }}
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
