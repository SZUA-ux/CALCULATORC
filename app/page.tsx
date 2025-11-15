import Link from 'next/link';
import { CalculatorCard } from '@/components/CalculatorCard';
import { AdSlot } from '@/components/AdSlot';
import { StructuredData } from '@/components/StructuredData';
import { calculatorsConfig, siteUrl, type CalculatorConfig } from '@/lib/calculatorsConfig';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Free Online Calculators for Smart Everyday Decisions',
  description: 'CalculatorCluster delivers US-focused tax, finance, health, and science calculators built for Lighthouse-perfect performance and SEO.',
  canonical: `${siteUrl}/`,
  keywords: ['US calculators', 'online calculator hub', 'American finance tools', 'SEO optimized calculators'],
  openGraphImage: `${siteUrl}/logo.svg`,
  type: 'website',
});

const categories = Array.from(
  calculatorsConfig.reduce((map, calculator) => {
    if (!map.has(calculator.category)) {
      map.set(calculator.category, [] as CalculatorConfig[]);
    }
    map.get(calculator.category)?.push(calculator);
    return map;
  }, new Map<string, CalculatorConfig[]>())
);

export default function HomePage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'CalculatorCluster',
      url: siteUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/search?q={query}`,
        'query-input': 'required name=query',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'CalculatorCluster',
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      sameAs: ['https://www.linkedin.com'],
    },
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-wide text-accent">United States focused</p>
        <h1 className="mt-2 text-3xl font-bold text-brand">Free Online Calculators for Smart Everyday Decisions</h1>
        <p className="mt-4 text-lg text-slate-600">
          Explore lightweight, export-ready calculators covering US payroll, taxes, inflation, fertility, and temperature conversions.
          Every tool is static, fast, and enriched with structured data for technical SEO dominance.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/calculators" className="rounded-full bg-accent px-4 py-2 font-semibold text-white">
            Browse all calculators
          </Link>
          <Link href="/guides/us-take-home-pay-calculator" className="rounded-full border border-accent px-4 py-2 font-semibold text-accent">
            Read expert guides
          </Link>
        </div>
      </section>
      <AdSlot />
      <section className="mt-10 space-y-8">
        {categories.map(([category, calculators]) => (
          <div key={category}>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-brand">{category}</h2>
              <Link href="/calculators" className="text-sm font-semibold text-accent">
                See all
              </Link>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {calculators.map((calculator) => (
                <CalculatorCard key={calculator.slug} calculator={calculator} />
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="mt-12 grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-brand">Floodgate SEO baked in</h2>
          <p className="mt-3 text-slate-600">
            Every calculator includes canonical tags, FAQPage schema, SoftwareApplication markup, and internal links that keep crawl depth shallow.
            Metadata is generated programmatically so you never ship duplicate titles or descriptions.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brand">Content clusters</h3>
          <p className="mt-3 text-slate-600">
            Each tool links to a matching guide so readers can dive deeper into US tax law, retirement strategies, fertility planning, or scientific conversions.
            Search engines see a comprehensive topical map anchored on CalculatorCluster.com.
          </p>
        </div>
      </section>
    </>
  );
}
