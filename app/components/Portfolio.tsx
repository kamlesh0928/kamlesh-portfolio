"use client";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ResumeSection from "./ResumeSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Portfolio() {
  return (
    <>
      <div className="blueprint-grid" />
      <div className="noise-overlay" />
      <Navbar />
      <main style={{ position: "relative", zIndex: 2 }}>
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
