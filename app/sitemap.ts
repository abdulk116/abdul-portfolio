import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/experience`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/skills`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/projects`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map(
    (project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [...staticPages, ...projectPages];
}