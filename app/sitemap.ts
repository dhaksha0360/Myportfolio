import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://portfolio.example.com"; return [{ url: base, lastModified: new Date() }, ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date() }))]; }
