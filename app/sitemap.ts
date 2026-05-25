import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rifa-portofolio.vercel.app",
      lastModified: new Date(),
    },
  ];
}
