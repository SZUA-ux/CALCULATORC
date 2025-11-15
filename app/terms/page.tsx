import { buildMetadata } from '@/lib/seo';
import { siteUrl } from '@/lib/calculatorsConfig';

export const metadata = buildMetadata({
  title: 'Terms of service',
  description: 'Usage terms for CalculatorCluster, including disclaimers and acceptable use.',
  canonical: `${siteUrl}/terms`,
  keywords: ['terms of service', 'calculator terms', 'acceptable use'],
});

export default function TermsPage() {
  return (
    <section className="space-y-6 rounded-3xl bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-brand">Terms of Service</h1>
      <p>
        CalculatorCluster provides free tools for personal, educational, and business reference in the United States. By using
        the site you agree not to reverse engineer the code, overload our infrastructure, or use the calculators for unlawful
        activity. All content is provided “as is” without warranties of accuracy or fitness for a particular purpose.
      </p>
      <p>
        Calculations are illustrative and not a substitute for licensed financial, legal, tax, or medical advice. Consult a
        professional before making decisions. You accept sole responsibility for verifying numbers before submitting tax forms,
        applying for loans, or making healthcare choices.
      </p>
      <p>
        We may update these terms to address new calculators, structured data changes, or regulatory requirements. Updates will
        be posted on this page with a new effective date. Continued use after updates constitutes acceptance of the revised
        terms.
      </p>
      <p>
        If any clause is held unenforceable, the remaining terms stay in effect. Direct questions to legal@calculatorcluster.com.
      </p>
    </section>
  );
}
