import Link from 'next/link';
import { guidesContent } from '@/lib/content/guidesContent';
import { buildMetadata } from '@/lib/seo';
import { siteUrl } from '@/lib/calculatorsConfig';

export const metadata = buildMetadata({
  title: 'US Calculator Guides Library',
  description: 'Long-form US-focused guides that expand on each calculator with detailed explanations, FAQs, and schema markup.',
  canonical: `${siteUrl}/guides`,
  keywords: ['US calculator guides', 'technical seo guides', 'finance education USA'],
});

export default function GuidesIndexPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-wide text-accent">Guided learning</p>
        <h1 className="text-3xl font-bold text-brand">United States calculator guides</h1>
        <p className="mt-4 text-slate-600">
          Every calculator ships with a companion guide that digs into formulas, compliance, and real-world case studies. Browse
          the complete collection below and jump directly to the matching calculator when you are ready to crunch numbers.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {guidesContent.map((guide) => (
          <article key={guide.slug} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-accent">{guide.keywords[0]}</p>
            <h2 className="mt-2 text-2xl font-semibold text-brand">{guide.title}</h2>
            <p className="mt-2 text-slate-600">{guide.description}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href={`/guides/${guide.slug}`} className="font-semibold text-accent">
                Read guide →
              </Link>
              <Link href={guide.calculatorPath} className="text-slate-500 hover:text-brand">
                Open calculator
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
