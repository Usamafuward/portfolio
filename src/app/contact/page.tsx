import type { Metadata } from "next";
import ContactClient from "@/components/views/ContactClient";
import { getSiteUrl, generateBreadcrumbSchema } from "@/lib/seo";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Contact & Transmission Portal",
  description:
    "Get in touch with Usama Puward — AI/ML Engineer and Software Developer. Inquire about freelance collaborations, full-stack architectures, or AI solutions.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact & Transmission Portal | Usama Puward",
    description:
      "Get in touch with Usama Puward — AI/ML Engineer and Full-Stack Developer for projects, consultations, or engineering collaborations.",
    url: `${siteUrl}/contact`,
  },
  twitter: {
    title: "Contact & Transmission Portal | Usama Puward",
    description:
      "Get in touch with Usama Puward — AI/ML Engineer and Full-Stack Developer for projects, consultations, or engineering collaborations.",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact#contactpage`,
    url: `${siteUrl}/contact`,
    name: "Contact Usama Puward",
    description:
      "Get in touch with Usama Puward regarding software engineering, AI/ML models, or technical collaborations.",
    mainEntity: {
      "@id": `${siteUrl}/#person`,
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClient />
    </>
  );
}
