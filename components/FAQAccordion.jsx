'use client';
import { useState } from 'react';

export default function FAQAccordion({ faqs, schemaId }) {
  const [openIndex, setOpenIndex] = useState(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-border-color rounded-lg overflow-hidden">
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full px-4 py-4 text-left flex items-center justify-between min-h-[44px] hover:bg-bg-card/50 transition-colors">
              <span className="font-medium text-sm pr-4">{faq.question}</span>
              <svg className={`w-5 h-5 shrink-0 text-text-secondary transition-transform ${openIndex === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 text-sm text-text-secondary animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
