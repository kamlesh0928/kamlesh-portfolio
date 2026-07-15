import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kamlesh Prajapati | Full Stack Developer",
  description:
    "Kamlesh Prajapati is a Full Stack Developer building fast, scalable web applications with React, Next.js and Node.js. Available for freelance projects and full-time roles.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Portfolio",
    "Kamlesh Prajapati",
    "Hire Developer",
    "Web Developer India",
  ],
  authors: [{ name: "Kamlesh Prajapati" }],
  openGraph: {
    title: "Kamlesh Prajapati | Full Stack Developer",
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
