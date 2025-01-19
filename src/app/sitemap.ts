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
          en: `${host}/en`,
          pl: `${host}/pl`,
        },
      },
    },
    {
      url: `${host}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          ru: `${host}/ru/privacy`,
          en: `${host}/en/privacy`,
          pl: `${host}/pl/privacy`,
        },
      },
    }
  ]
}