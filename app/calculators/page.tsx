import Link from 'next/link';
import { CalculatorCard } from '@/components/CalculatorCard';
import { calculatorsConfig, siteUrl, type CalculatorConfig } from '@/lib/calculatorsConfig';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'All Calculators | United States Focused Index',
  description: 'Browse every CalculatorCluster tool across payroll, taxes, fertility, and science with tight internal linking and structured data.',
  canonical: `${siteUrl}/calculators`,
  keywords: ['US calculator index', 'best online calculators', 'finance calculator library', 'SEO calculators list'],
  type: 'website',
});

const categories = calculatorsConfig.reduce<Record<string, CalculatorConfig[]>>((acc, calculator) => {
  if (!acc[calculator.category]) {
    acc[calculator.category] = [];
  }
  acc[calculator.category].push(calculator);
  return acc;
}, {});

export default function CalculatorsIndex() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-brand">Explore every CalculatorCluster tool</h1>
        <p className="mt-4 text-slate-600">
          Click depth stays under two links for every experience. Use this index to jump directly to a calculator, read matching guides, or copy canonical URLs for your sitemap submissions.
        </p>
      </div>
      {Object.entries(categories).map(([category, calculators]) => (
        <div key={category} className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-brand">{category}</h2>
            <Link href="#top" className="text-sm font-semibold text-accent">
              Back to top
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {calculators.map((calculator) => (
              <CalculatorCard key={calculator.slug} calculator={calculator} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
