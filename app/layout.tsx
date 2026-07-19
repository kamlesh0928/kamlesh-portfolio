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
    "Software Engineer",
    "Unique Portfolio",
    "Animated Portfolio",
  ],
  authors: [{ name: "Kamlesh Prajapati" }],
  openGraph: {
    title: "Kamlesh Prajapati | THE_DEVELOPER_JOURNEY",
    description:
      "Full Stack Developer building fast, scalable web applications with React, Next.js and Node.js.",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23121214' rx='24'/><path d='M 25 30 L 45 50 L 25 70' fill='none' stroke='%2300e639' stroke-width='12' stroke-linecap='round' stroke-linejoin='round'/><line x1='55' y1='70' x2='80' y2='70' stroke='%2300e639' stroke-width='12' stroke-linecap='round'/></svg>",
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
