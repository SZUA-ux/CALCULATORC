import type { MetadataRoute } from 'next';
import { calculatorsConfig, siteUrl } from '@/lib/calculatorsConfig';
import { guidesContent } from '@/lib/content/guidesContent';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/calculators', '/guides', '/privacy-policy', '/terms', '/disclaimer'];
  const calculatorUrls = calculatorsConfig.map((calculator) => calculator.path);
  const guideUrls = guidesContent.map((guide) => `/guides/${guide.slug}`);
  return [...pages, ...calculatorUrls, ...guideUrls].map((path) => ({
    url: `${siteUrl}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
