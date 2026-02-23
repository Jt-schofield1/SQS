import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get a Free Quote | Contact Us",
  description:
    "Request a free sealcoating estimate from Stone Quarry Sealing. Serving Waterford, PA and all of Northwest Pennsylvania. Call (814) 722-5081 or fill out our form.",
  alternates: {
    canonical: "https://stonequarrysealing.com/contact",
  },
  openGraph: {
    title: "Get a Free Quote | Stone Quarry Sealing",
    description:
      "Request a free sealcoating estimate. Call (814) 722-5081 or fill out our form.",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-32">
      <ContactForm />
    </div>
  );
}
