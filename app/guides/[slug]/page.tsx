import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AdSlot } from '@/components/AdSlot';
import { FAQSection } from '@/components/FAQSection';
import { StructuredData } from '@/components/StructuredData';
import { guidesContent, type GuideContent } from '@/lib/content/guidesContent';
import { calculatorsConfig } from '@/lib/calculatorsConfig';
import { buildMetadata } from '@/lib/seo';

interface Params {
  slug: GuideContent['slug'];
}

export async function generateStaticParams() {
  return guidesContent.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const guide = guidesContent.find((item) => item.slug === params.slug);
  if (!guide) {
    return {};
  }
  return buildMetadata({
    title: `${guide.title} | US Guide`,
    description: guide.description,
    canonical: guide.canonical,
    keywords: guide.keywords,
  });
}

export default function GuidePage({ params }: { params: Params }) {
  const guide = guidesContent.find((item) => item.slug === params.slug);
  if (!guide) {
    notFound();
  }
  const relatedGuides = guide.relatedGuides
    .map((slug) => guidesContent.find((item) => item.slug === slug))
    .filter(Boolean);
  const relatedCalculators = guide.relatedCalculators
    .map((path) => calculatorsConfig.find((calculator) => calculator.path === path))
    .filter(Boolean);

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: guide.title,
      description: guide.description,
      url: guide.canonical,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: guide.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ];

  return (
    <article className="space-y-8">
      <StructuredData data={structuredData} />
      <nav className="text-sm text-slate-500">
        <Link href="/">Home</Link> › <Link href="/guides">Guides</Link> › <span>{guide.title}</span>
      </nav>
      <header className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-wide text-accent">US knowledge hub</p>
        <h1 className="mt-2 text-3xl font-bold text-brand">{guide.title}</h1>
        <p className="mt-4 text-slate-600">{guide.hero}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-accent">
          <Link href={guide.calculatorPath} className="rounded-full bg-accent px-4 py-2 text-white">
            Use this calculator
          </Link>
          <Link href="/calculators" className="rounded-full border border-accent px-4 py-2 text-accent">
            Browse all calculators
          </Link>
        </div>
      </header>
      <AdSlot />
      {guide.sections.map((section) => (
        <section key={section.heading} className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-brand">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-slate-600">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand">Common mistakes & pitfalls</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
          {guide.mistakes.map((mistake) => (
            <li key={mistake}>{mistake}</li>
          ))}
        </ul>
      </section>
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand">Related guides</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {relatedGuides.map((item) => (
            <Link key={item!.slug} href={`/guides/${item!.slug}`} className="rounded-2xl border border-slate-100 p-4">
              <h3 className="text-xl font-semibold text-brand">{item!.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item!.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand">Related calculators</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {relatedCalculators.map((item) => (
            <Link key={item!.slug} href={item!.path} className="rounded-2xl border border-slate-100 p-4">
              <h3 className="text-xl font-semibold text-brand">{item!.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item!.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <FAQSection faqs={guide.faqs} />
      <AdSlot />
    </article>
  );
}
