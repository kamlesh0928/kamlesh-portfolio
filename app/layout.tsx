import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "./components/AppShell";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kamlesh Prajapati | THE_DEVELOPER_JOURNEY",
  description:
    "Kamlesh Prajapati is a Full Stack Developer building fast, scalable web applications. Explore the developer journey through projects, skills, and experience.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Portfolio",
    "Kamlesh Prajapati",
    "Developer Journey",
    "Web Developer India",
  ],
  authors: [{ name: "Kamlesh Prajapati" }],
  openGraph: {
    title: "Kamlesh Prajapati | THE_DEVELOPER_JOURNEY",
    description:
      "Full Stack Developer building fast, scalable web applications with React, Next.js and Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${sora.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
