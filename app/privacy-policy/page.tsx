import { buildMetadata } from '@/lib/seo';
import { siteUrl } from '@/lib/calculatorsConfig';

export const metadata = buildMetadata({
  title: 'Privacy policy',
  description: 'CalculatorCluster privacy policy describing data practices and AdSense compliance.',
  canonical: `${siteUrl}/privacy-policy`,
  keywords: ['privacy policy', 'CalculatorCluster privacy', 'data use'],
});

export default function PrivacyPolicyPage() {
  return (
    <section className="space-y-6 rounded-3xl bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-brand">Privacy Policy</h1>
      <p>Last updated: {new Date().getFullYear()}</p>
      <p>
        CalculatorCluster operates calculatorcluster.com as a static information resource for United States residents. We do
        not require account creation and we do not store calculator inputs on our servers. Any data typed into a calculator stays
        in your browser until you refresh the page. Aggregated analytics may collect anonymized usage data to help us improve
        usability.
      </p>
      <p>
        We participate in Google AdSense. If you consent to personalized ads via Google’s Consent Management Platform, Google may
        place cookies or use local storage for ad delivery and measurement. You can opt out of personalized ads by visiting
        Google’s Ads Settings page or by using industry opt-out tools maintained by the Digital Advertising Alliance.
      </p>
      <p>
        Our site links to third-party resources. Once you leave calculatorcluster.com, their policies control your data. We
        recommend reviewing the privacy statements of any external sites you visit.
      </p>
      <p>
        Questions about this policy may be sent to privacy@calculatorcluster.com. We respond to verified US residents within 30
        days.
      </p>
    </section>
  );
}
