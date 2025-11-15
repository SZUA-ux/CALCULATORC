interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
}

export function FAQSection({ title = 'Frequently asked questions', faqs }: FAQSectionProps) {
  return (
    <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-brand">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <summary className="cursor-pointer text-base font-semibold text-brand">{faq.question}</summary>
            <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
