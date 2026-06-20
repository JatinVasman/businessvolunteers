import type { MetadataRoute } from "next";
import { INDUSTRY_DATA, LOCATIONS, getAllBlogs, getAllCaseStudies, slugify } from "../lib/data";

const BASE = "https://businessvolunteers.online";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]) =>
    ({ url: `${BASE}${path}`, lastModified: now, changeFrequency, priority });

  const staticPages = [
    u("/", 1.0, "weekly"),
    u("/about/", 0.7, "monthly"),
    u("/services/", 0.9, "monthly"),
    u("/pricing/", 0.9, "monthly"),
    u("/portfolio/", 0.8, "monthly"),
    u("/industries/", 0.8, "monthly"),
    u("/case-studies/", 0.8, "weekly"),
    u("/blog/", 0.8, "weekly"),
    u("/contact/", 0.7, "yearly"),
    u("/founder/", 0.5, "yearly"),
    u("/co-founder/", 0.5, "yearly"),
    u("/why/", 0.5, "yearly"),
    u("/team/", 0.5, "yearly"),
  ];

  const industries = Object.keys(INDUSTRY_DATA).map((id) => u(`/industries/${id}/`, 0.7, "monthly"));
  const cityPages = LOCATIONS.map((l: any) => u(`/digital-marketing-services-${l.id}/`, 0.6, "monthly"));

  const seenB = new Set<string>();
  const blogs = getAllBlogs().flatMap((b: any) => {
    const s = slugify(b.title); if (seenB.has(s)) return []; seenB.add(s);
    return [u(`/blog/${s}/`, 0.5, "monthly")];
  });
  const seenC = new Set<string>();
  const cases = getAllCaseStudies().flatMap((c: any) => {
    const s = slugify(c.title); if (seenC.has(s)) return []; seenC.add(s);
    return [u(`/case-studies/${s}/`, 0.5, "monthly")];
  });

  return [...staticPages, ...industries, ...cityPages, ...blogs, ...cases];
}
