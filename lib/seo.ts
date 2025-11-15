import type { Metadata } from 'next';
import { siteUrl } from './calculatorsConfig';

interface BuildMetadataArgs {
  title: string;
  description: string;
  canonical: string;
  keywords: string[];
  openGraphImage?: string;
  type?: 'website' | 'article';
}

export function buildMetadata({ title, description, canonical, keywords, openGraphImage, type = 'article' }: BuildMetadataArgs): Metadata {
  const image = openGraphImage || `${siteUrl}/logo.svg`;
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'CalculatorCluster',
      type,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
