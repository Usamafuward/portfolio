import type { Metadata } from "next";
import ProjectsClient from "@/components/views/ProjectsClient";
import { getSiteUrl, generateProjectsSchema, generateBreadcrumbSchema } from "@/lib/seo";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Key Projects",
  description:
    "Explore AI/ML and software engineering projects by Usama Puward — including multi-agent coding assistants, real-time computer vision systems, full-stack platforms, and machine learning models.",
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: "Key Projects | Usama Puward",
    description:
      "Explore AI/ML architectures, autonomous multi-agent systems, and scalable full-stack applications built by Usama Puward.",
    url: `${siteUrl}/projects`,
  },
  twitter: {
    title: "Key Projects | Usama Puward",
    description:
      "Explore AI/ML architectures, autonomous multi-agent systems, and scalable full-stack applications built by Usama Puward.",
  },
};

export default function ProjectsPage() {
  const projectsSchema = generateProjectsSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Projects", item: "/projects" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProjectsClient />
    </>
  );
}
