import type { Metadata } from "next";
import WorkShowcase from "@/components/WorkShowcase";
import BeforeAfterSection from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Project Gallery | Before & After Sealcoating Work",
  description:
    "Browse before and after photos of our asphalt sealcoating, crack filling, and line painting projects across Northwest Pennsylvania. See the Stone Quarry Sealing difference.",
  alternates: {
    canonical: "https://stonequarrysealing.com/gallery",
  },
  openGraph: {
    title: "Project Gallery | Stone Quarry Sealing",
    description:
      "Before and after photos of our sealcoating work in Northwest PA.",
    images: [
      {
        url: "/images/work/IMG_5471.jpeg",
        width: 1200,
        height: 630,
        alt: "Before and after sealcoating by Stone Quarry Sealing",
      },
    ],
  },
};

export default function GalleryPage() {
  return (
    <div className="pt-24 sm:pt-32">
      <div className="mb-8 text-center px-4">
        <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-copper">
          Our Portfolio
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Project <span className="text-gradient-copper">Gallery</span>
        </h1>
      </div>
      <BeforeAfterSection />
      <WorkShowcase />
    </div>
  );
}
