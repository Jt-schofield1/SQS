import Hero from "@/components/Hero";
import AboutStory from "@/components/AboutStory";
import ServicesShowcase from "@/components/ServicesShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import BeforeAfterSection from "@/components/BeforeAfterSlider";
import StatsCounter from "@/components/StatsCounter";
import CTABanner from "@/components/CTABanner";
import WorkShowcase from "@/components/WorkShowcase";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <AboutStory />
      <ServicesShowcase />
      <ProcessTimeline />
      <BeforeAfterSection />
      <StatsCounter />
      <CTABanner />
      <WorkShowcase />
      <FAQAccordion />
      <ContactForm />
    </>
  );
}
