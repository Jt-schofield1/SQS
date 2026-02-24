import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get a Free Quote | Contact Us",
  description:
    "Request a free sealcoating, crack filling, or line painting estimate from Stone Quarry Sealing. Serving Waterford, Erie, Meadville, Edinboro & all of Erie and Crawford County, PA. Call (814) 722-5081.",
  keywords: [
    "free sealcoating estimate",
    "sealcoating quote Waterford PA",
    "asphalt sealing quote Erie PA",
    "contact Stone Quarry Sealing",
    "driveway sealing near me",
  ],
  alternates: {
    canonical: "https://stonequarrysealing.com/contact",
  },
  openGraph: {
    title: "Get a Free Quote | Stone Quarry Sealing",
    description:
      "Request a free sealcoating estimate in Erie County, Crawford County & Northwest PA. Call (814) 722-5081 or fill out our form.",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-32">
      <ContactForm />
    </div>
  );
}
