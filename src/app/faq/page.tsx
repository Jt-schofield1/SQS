import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import { FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ | Asphalt Sealcoating Questions Answered",
  description:
    "Find answers to common questions about asphalt sealcoating, crack filling, dry times, and more from Stone Quarry Sealing. Serving Waterford, Erie, Meadville & all of Erie and Crawford County, PA.",
  keywords: [
    "sealcoating FAQ",
    "asphalt sealing questions",
    "crack filling FAQ",
    "driveway sealing how long",
    "sealcoating Waterford PA",
    "asphalt maintenance Erie County",
  ],
  alternates: {
    canonical: "https://stonequarrysealing.com/faq",
  },
  openGraph: {
    title: "FAQ | Stone Quarry Sealing",
    description:
      "Common questions about sealcoating, crack filling, and asphalt maintenance in Northwest PA — answered by local experts.",
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
