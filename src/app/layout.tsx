import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CyberBackground from "@/components/CyberBackground";
import ScrollRestorationFix from "@/components/ScrollRestorationFix";
import Chatbot from "@/components/Chatbot";
import "./globals.css";

export const metadata: Metadata = {
  title: "Usama Puward | Portfolio",
  description: "AI/ML Engineer & Software Developer Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
