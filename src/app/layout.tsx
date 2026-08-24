import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CyberBackground from "@/components/CyberBackground";
import ScrollRestorationFix from "@/components/ScrollRestorationFix";
import Chatbot from "@/components/Chatbot";
import { getSiteUrl, generatePersonSchema, generateWebSiteSchema } from "@/lib/seo";
import "./globals.css";

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: "#00f0ff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Usama Puward | AI/ML Engineer & Full-Stack Developer",
    template: "%s | Usama Puward",
  },
  description:
    "Computer Science Graduate, AI/ML Engineer, and Full-Stack Software Developer specializing in Machine Learning, Deep Learning, FastAPI, Next.js, and Multi-Agent AI systems.",
  keywords: [
    "Usama Puward",
    "Usama Fuward",
    "AI/ML Engineer",
    "Software Developer",
    "Machine Learning Engineer",
    "Artificial Intelligence",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "FastAPI",
    "Python",
    "TensorFlow",
    "Colombo Sri Lanka",
    "Cyberpunk Portfolio",
    "LLM Systems",
    "Deep Learning",
  ],
  authors: [{ name: "Usama Puward", url: siteUrl }],
  creator: "Usama Puward",
  publisher: "Usama Puward",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    title: "Usama Puward | AI/ML Engineer & Full-Stack Developer",
    description:
      "Explore the cyberpunk developer portfolio of Usama Puward — featuring AI/ML architectures, high-performance web applications, verified credentials, and interactive career timeline.",
    siteName: "Usama Puward Portfolio",
    firstName: "Usama",
    lastName: "Puward",
    username: "usamapuward",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usama Puward | AI/ML Engineer & Full-Stack Developer",
    description:
      "Explore the cyberpunk developer portfolio of Usama Puward — AI/ML Engineer, Full-Stack Developer, and Machine Learning Specialist.",
    creator: "@usamafuward",
    site: "@usamafuward",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = generatePersonSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body>
        <ScrollRestorationFix />
        <CyberBackground />
        <Navbar />
        <main style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
          {children}
          <Footer />
        </main>
        <Chatbot />
      </body>
    </html>
  );
}
