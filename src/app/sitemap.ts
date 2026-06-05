import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://lilyliang.design";
  const now = new Date();

  return [
    { url: base,                                     lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`,                          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects`,                       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/resume`,                         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/projects/tempo`,                 lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    { url: `${base}/projects/little-autonomy`,       lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    { url: `${base}/projects/circa`,                 lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    { url: `${base}/projects/medegg`,                lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${base}/projects/anyi`,                  lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${base}/projects/horizon`,               lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${base}/projects/wash-bus`,              lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${base}/projects/summit-ware`,           lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${base}/projects/color-mixing-marker`,   lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
  ];
}
