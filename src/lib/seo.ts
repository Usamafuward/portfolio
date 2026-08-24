import { portfolioData } from "@/constants/portfolioData";

export const DEFAULT_SITE_URL = "https://usamapuward.netlify.app";

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.URL) {
    // Netlify deploy URL
    return process.env.URL;
  }
  return DEFAULT_SITE_URL;
}

export function generatePersonSchema() {
  const siteUrl = getSiteUrl();
  const sameAs = portfolioData.socialLinks
    .filter((s) => s.link && !s.link.startsWith("mailto:"))
    .map((s) => s.link);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: portfolioData.personalInfo.name,
    alternateName: ["Usama Fuward", "Usama", "usamapuward"],
    jobTitle: portfolioData.personalInfo.title,
    description: portfolioData.personalInfo.bio,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    email: `mailto:${portfolioData.personalInfo.email}`,
    telephone: portfolioData.personalInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colombo",
      addressCountry: "LK",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University of Colombo School of Computing",
        url: "https://ucsc.cmb.ac.lk",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Full-Stack Web Development",
      "Next.js",
      "React",
      "Python",
      "FastAPI",
      "Node.js",
      "TypeScript",
      "Docker",
      "PostgreSQL",
      "MongoDB",
    ],
    sameAs,
  };
}

export function generateWebSiteSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Usama Puward | AI/ML Engineer & Full-Stack Developer",
    alternateName: "Usama Puward Portfolio",
    description: portfolioData.personalInfo.bio,
    inLanguage: "en-US",
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; item: string }[]
) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${siteUrl}${item.item}`,
    })),
  };
}

export function generateProjectsSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Key Engineering & AI Projects by Usama Puward",
    description: "Featured full-stack, machine learning, and AI application projects.",
    itemListElement: portfolioData.projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareSourceCode",
        name: project.title,
        description: project.description,
        programmingLanguage: project.technologies,
        codeRepository: project.to.startsWith("http") ? project.to : undefined,
        url: project.to.startsWith("http") ? project.to : `${siteUrl}/projects`,
        author: {
          "@id": `${siteUrl}/#person`,
        },
      },
    })),
  };
}

export function generateCertificationsSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Professional & Academic Certifications - Usama Puward",
    description: "Verified credentials from Meta, DeepLearning.AI, Stanford University, IBM, and Microsoft.",
    itemListElement: portfolioData.certifications.map((cert, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "EducationalOccupationalCredential",
        name: cert.title,
        description: cert.description,
        recognizedBy: {
          "@type": "Organization",
          name: cert.organization,
        },
        url: cert.to,
        credentialCategory: "Certificate",
      },
    })),
  };
}
