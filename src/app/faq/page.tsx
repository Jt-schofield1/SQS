import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import { FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ | Asphalt Sealcoating Questions Answered",
  description:
    "Find answers to common questions about asphalt sealcoating, crack filling, application process, dry times, and more. Stone Quarry Sealing serves Northwest Pennsylvania.",
  alternates: {
    canonical: "https://stonequarrysealing.com/faq",
  },
  openGraph: {
    title: "FAQ | Stone Quarry Sealing",
    description:
      "Common questions about sealcoating, crack filling, and asphalt maintenance answered.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="pt-24 sm:pt-32">
        <FAQAccordion />
      </div>
    </>
  );
}
