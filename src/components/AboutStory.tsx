"use client";

import Image from "next/image";
import { Users, MapPin, Calendar } from "lucide-react";
import { useInView } from "@/lib/useInView";

const aboutStats = [
  { icon: Calendar, label: "Founded", value: "2023" },
  { icon: MapPin, label: "Service Area", value: "Northwest PA" },
  { icon: Users, label: "Ownership", value: "Family-Owned" },
];

export default function AboutStory() {
  const heading = useInView<HTMLDivElement>();
  const text = useInView<HTMLDivElement>();
  const image = useInView<HTMLDivElement>();
  const stats = useInView<HTMLDivElement>();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-24 sm:py-32 lg:py-40"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-copper/[0.03] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-copper/[0.04] blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div ref={heading.ref} className={`reveal ${heading.inView ? "in-view" : ""}`}>
              <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-copper">
                Our Story
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Family-Owned.{" "}
                <span className="text-gradient-copper">Community-Driven.</span>
              </h2>
            </div>

            <div ref={text.ref} className={`reveal mt-8 space-y-5 ${text.inView ? "in-view" : ""}`} style={{ transitionDelay: "150ms" }}>
              <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                Based in Waterford, PA, Stone Quarry Sealing is a family-owned
                and operated business specializing in asphalt seal coating and
                line painting.
              </p>
              <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                With years of hands-on experience in the asphalt industry and a
                deep understanding of the need for high-quality, affordable seal
                coating in Northwest PA, we proudly launched our company in 2023
                to serve our community with dependable, professional service.
              </p>
              <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                Installing an asphalt driveway is a big investment &mdash; why
                not protect it? Sealcoating creates a protective layer that
                blocks water, vehicle fluids, and damaging UV rays.
                Sealcoating can increase the life of your asphalt by{" "}
                <span className="font-semibold text-copper-light">
                  20+ years
                </span>{" "}
                when done regularly.
              </p>
            </div>

            <div ref={stats.ref} className={`reveal-stagger mt-10 grid grid-cols-3 gap-4 sm:gap-6 ${stats.inView ? "in-view" : ""}`}>
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/5 bg-surface p-4 text-center sm:p-5"
                >
                  <stat.icon size={22} className="mx-auto mb-2 text-copper" />
                  <div className="font-display text-lg font-bold text-white sm:text-xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={image.ref} className={`reveal-right relative ${image.inView ? "in-view" : ""}`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/work/IMG_5471.jpeg"
                alt="Beautifully sealed winding driveway through rural Northwest Pennsylvania property"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-copper/20 bg-surface p-4 shadow-2xl sm:-bottom-6 sm:-left-6 sm:p-6">
              <div className="font-display text-3xl font-bold text-copper-light sm:text-4xl">
                Est. 2023
              </div>
              <div className="text-xs text-muted sm:text-sm">Waterford, PA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
