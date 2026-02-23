import type { Metadata } from "next";
import Image from "next/image";
import {
  Paintbrush,
  Wrench,
  Ruler,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services | Sealcoating, Crack Filling & Line Painting",
  description:
    "Professional asphalt sealcoating, hot rubberized crack filling, and parking lot line painting services in Waterford, PA and Northwest Pennsylvania. Get a free estimate.",
  alternates: {
    canonical: "https://stonequarrysealing.com/services",
  },
  openGraph: {
    title: "Our Services | Stone Quarry Sealing",
    description:
      "Professional asphalt sealcoating, crack filling, and line painting in Northwest PA.",
    images: [
      {
        url: "/images/work/IMG_5471.jpeg",
        width: 1200,
        height: 630,
        alt: "Stone Quarry Sealing services",
      },
    ],
  },
};

const iconMap = {
  Paintbrush,
  Wrench,
  Ruler,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES.map((service, i) => ({
    "@type": "Service",
    position: i + 1,
    name: service.title,
    description: service.fullDesc,
    provider: {
      "@type": "LocalBusiness",
      name: "Stone Quarry Sealing",
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-copper">
              What We Do
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Our <span className="text-gradient-copper">Services</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
              From residential driveways to commercial parking lots, we deliver
              professional results that protect and transform your asphalt.
            </p>
          </div>

          <div className="space-y-20 sm:space-y-28">
            {SERVICES.map((service, i) => {
              const Icon =
                iconMap[service.icon as keyof typeof iconMap] || Paintbrush;
              const isReversed = i % 2 !== 0;

              return (
                <article
                  key={service.id}
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    isReversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={service.image}
                        alt={`${service.title} service by Stone Quarry Sealing in Northwest PA`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  <div className={isReversed ? "lg:order-1" : ""}>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-copper/30 bg-copper/10">
                      <Icon size={28} className="text-copper-light" />
                    </div>
                    <h2 className="font-display text-2xl font-bold uppercase tracking-wide sm:text-3xl lg:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                      {service.fullDesc}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {service.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-3 text-sm text-white/70 sm:text-base"
                        >
                          <CheckCircle
                            size={18}
                            className="mt-0.5 shrink-0 text-copper"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="/contact"
                      className="group mt-8 inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-copper-light hover:shadow-[0_0_30px_rgba(184,118,62,0.4)]"
                    >
                      Get a Quote
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
