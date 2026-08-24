import type { Metadata } from "next";
import ExperiencesClient from "@/components/views/ExperiencesClient";
import { getSiteUrl, generateBreadcrumbSchema } from "@/lib/seo";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Work Experiences & Career Timeline",
  description:
    "Explore the professional career journey of Usama Puward — AI/SE Engineer at Kainovation Technologies, previous roles in full-stack development, machine learning research, and computer vision projects.",
  alternates: {
    canonical: `${siteUrl}/experiences`,
  },
  openGraph: {
    title: "Work Experiences & Career Timeline | Usama Puward",
    description:
      "Explore the professional engineering journey, full-stack achievements, and AI/ML production deployments of Usama Puward.",
    url: `${siteUrl}/experiences`,
  },
  twitter: {
    title: "Work Experiences & Career Timeline | Usama Puward",
    description:
      "Explore the professional engineering journey, full-stack achievements, and AI/ML production deployments of Usama Puward.",
  },
};

export default function ExperiencesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Experiences", item: "/experiences" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ExperiencesClient />
    </>
  );
}
