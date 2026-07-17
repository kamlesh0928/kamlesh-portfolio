"use client";

import { IconGitHub, IconLinkedIn, IconTwitter } from "./icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          marginBottom: 20,
        }}
      >
        {[
          {
            icon: <IconGitHub />,
            href: "https://github.com/kamlesh0928",
            label: "GitHub",
          },
          {
            icon: <IconLinkedIn />,
            href: "https://www.linkedin.com/in/kamlesh5242/",
            label: "LinkedIn",
          },
          {
            icon: <IconTwitter />,
            href: "https://x.com/kamlesh09285242",
            label: "Twitter",
          },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="social-icon-terminal"
          >
            {s.icon}
          </a>
        ))}
      </div>
      <p className="footer-text">END_OF_FILE. 0x000000. SYSTEM HALTED.</p>
      <p className="footer-text" style={{ marginTop: 8, opacity: 0.35 }}>
        &copy; {new Date().getFullYear()} Kamlesh Prajapati. All rights
        reserved.
      </p>
    </footer>
  );
}
