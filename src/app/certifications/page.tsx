import type { Metadata } from "next";
import CertificationsClient from "@/components/views/CertificationsClient";
import { getSiteUrl, generateCertificationsSchema, generateBreadcrumbSchema } from "@/lib/seo";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Verified Certifications & Credentials",
  description:
    "Explore verified professional certifications earned by Usama Puward — including Meta React Specialization, DeepLearning.AI Machine Learning Specializations, Stanford University courses, IBM Back-End certification, and Microsoft Azure AI.",
  alternates: {
    canonical: `${siteUrl}/certifications`,
  },
  openGraph: {
    title: "Verified Certifications & Credentials | Usama Puward",
    description:
      "Explore verified professional credentials from Meta, DeepLearning.AI, Stanford University, IBM, and Microsoft earned by Usama Puward.",
    url: `${siteUrl}/certifications`,
  },
  twitter: {
    title: "Verified Certifications & Credentials | Usama Puward",
    description:
      "Explore verified professional credentials from Meta, DeepLearning.AI, Stanford University, IBM, and Microsoft earned by Usama Puward.",
  },
};

export default function CertificationsPage() {
  const certificationsSchema = generateCertificationsSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Certifications", item: "/certifications" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(certificationsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CertificationsClient />
    </>
  );
}
