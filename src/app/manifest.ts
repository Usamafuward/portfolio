import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Usama Puward | AI/ML Engineer & Full-Stack Developer",
    short_name: "Usama Puward",
    description:
      "Cyberpunk HUD Portfolio of Usama Puward — AI/ML Engineer, Full-Stack Developer, and Machine Learning Specialist.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0c0e",
    theme_color: "#00f0ff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
