import { MetadataRoute } from 'next';

const host = "https://const-max.com";
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: host,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          ru: `${host}/ru`,
          //pl: `${host}/pl`,
        },
      },
    }
  ]
}