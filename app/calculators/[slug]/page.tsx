import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AdSlot } from '@/components/AdSlot';
import { FAQSection } from '@/components/FAQSection';
import { StructuredData } from '@/components/StructuredData';
import { calculatorComponents, type CalculatorSlug } from '@/components/calculators';
import { calculatorContent } from '@/lib/content/calculatorContent';
import { calculatorsConfig, getCalculator, siteUrl } from '@/lib/calculatorsConfig';
import { buildMetadata } from '@/lib/seo';

interface Params {
  slug: CalculatorSlug;
}

export async function generateStaticParams() {
  return calculatorsConfig.map((calculator) => ({ slug: calculator.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const calculator = getCalculator(params.slug);
  if (!calculator) {
    return {};
  }
  return buildMetadata({
    title: `${calculator.title} | USA Focused Tool`,
    description: calculator.description,
    canonical: calculator.canonical,
    keywords: [calculator.primaryKeyword, ...calculator.secondaryKeywords],
  });
}

export default function CalculatorPage({ params }: { params: Params }) {
  const calculator = getCalculator(params.slug);
  if (!calculator) {
    notFound();
  }
  const slug = calculator.slug as CalculatorSlug;
  const CalculatorComponent = calculatorComponents[slug];
  const content = calculatorContent[slug];
  if (!CalculatorComponent || !content) {
    notFound();
  }
  const related = calculator.relatedSlugs
    .map((relatedSlug) => calculatorsConfig.find((item) => item.slug === relatedSlug))
    .filter(Boolean);
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: calculator.title,
      applicationCategory: 'Calculator',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      provider: {
        '@type': 'Organization',
        name: 'CalculatorCluster',
        url: siteUrl,
      },
      version: '1.0.0',
      url: calculator.canonical,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: calculator.title,
      description: calculator.description,
      url: calculator.canonical,
      isPartOf: {
        '@type': 'WebSite',
        url: siteUrl,
        name: 'CalculatorCluster',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: content.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ];

  const guidePath = `/guides/${slug}`;

  return (
    <article className="space-y-8">
      <StructuredData data={structuredData} />
      <nav className="text-sm text-slate-500">
        <Link href="/">Home</Link> › <Link href="/calculators">All calculators</Link> › <span>{calculator.title}</span>
      </nav>
      <header className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-wide text-accent">{calculator.primaryKeyword}</p>
        <h1 className="mt-2 text-3xl font-bold text-brand">{calculator.title}</h1>
        {content.intro.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-slate-600">
            {paragraph}
          </p>
        ))}
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-accent">
          <Link href={guidePath}>Learn more in the detailed guide →</Link>
        </div>
      </header>
      <AdSlot />
      <section className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand">Interactive calculator</h2>
        <CalculatorComponent />
      </section>
      <AdSlot />
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand">How this calculator works</h2>
        {content.howItWorks.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-slate-600">
            {paragraph}
          </p>
        ))}
      </section>
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand">Formula used</h2>
        <div className="mt-4 space-y-3">
          {content.formulas.map((formula) => (
            <pre key={formula} className="whitespace-pre-wrap rounded-2xl bg-slate-900/90 p-4 text-sm text-white">
              {formula}
            </pre>
          ))}
        </div>
      </section>
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand">Real-world examples</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {content.examples.map((example) => (
            <article key={example.title} className="rounded-2xl border border-slate-100 p-4">
              <h3 className="text-xl font-semibold text-brand">{example.title}</h3>
              <p className="mt-2 text-slate-600">{example.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand">Limitations</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
          {content.limitations.map((limitation) => (
            <li key={limitation}>{limitation}</li>
          ))}
        </ul>
        <h3 className="mt-6 text-xl font-semibold text-brand">Additional tips</h3>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
          {content.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>
      <FAQSection faqs={content.faqs} />
      <AdSlot />
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand">Related calculators</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {related.map((item) => (
            <Link
              key={item!.slug}
              href={item!.path}
              className="rounded-2xl border border-slate-100 p-4 text-left text-slate-700 hover:border-accent"
            >
              <h3 className="text-lg font-semibold text-brand">{item!.title}</h3>
              <p className="mt-2 text-sm">{item!.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
