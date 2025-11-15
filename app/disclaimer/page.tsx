import { buildMetadata } from '@/lib/seo';
import { siteUrl } from '@/lib/calculatorsConfig';

export const metadata = buildMetadata({
  title: 'Disclaimer',
  description: 'Legal disclaimer for CalculatorCluster calculators and guides.',
  canonical: `${siteUrl}/disclaimer`,
  keywords: ['calculator disclaimer', 'financial disclaimer', 'medical disclaimer'],
});

export default function DisclaimerPage() {
  return (
    <section className="space-y-6 rounded-3xl bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-brand">Disclaimer</h1>
      <p>
        CalculatorCluster provides calculators and educational guides for general informational purposes only. We do not offer
        individualized tax, legal, investment, fertility, or medical advice. Always consult a licensed professional before acting
        on the outputs shown on this site.
      </p>
      <p>
        While we strive for accuracy, formulas rely on user-supplied inputs and public data sources that may change without
        notice. We cannot guarantee outcomes or liability for losses incurred from using our tools. Use of CalculatorCluster
        indicates acceptance of this disclaimer.
      </p>
    </section>
  );
}
