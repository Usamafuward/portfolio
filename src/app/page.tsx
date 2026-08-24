import type { Metadata } from "next";
import HomeClient from "@/components/views/HomeClient";
import { getSiteUrl } from "@/lib/seo";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Usama Puward | AI/ML Engineer & Full-Stack Developer",
  description:
    "Cyberpunk developer portfolio of Usama Puward — Computer Science graduate, AI/ML Engineer, and Full-Stack Developer specializing in Machine Learning, Deep Learning, FastAPI, Next.js, and Multi-Agent AI systems.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Usama Puward | AI/ML Engineer & Full-Stack Developer",
    description:
      "Explore the futuristic cyberpunk portfolio of Usama Puward — AI/ML architectures, high-performance web applications, verified credentials, and interactive career journey.",
    url: siteUrl,
  },
  twitter: {
    title: "Usama Puward | AI/ML Engineer & Full-Stack Developer",
    description:
      "Explore the futuristic cyberpunk portfolio of Usama Puward — AI/ML architectures, high-performance web applications, and verified credentials.",
  },
};

export default function HomePage() {
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: "Usama Puward | AI/ML Engineer & Full-Stack Developer Portfolio",
    mainEntity: {
      "@id": `${siteUrl}/#person`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <HomeClient />
    </>
  );
}
