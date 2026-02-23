import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import Image from "next/image";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.jpg"
              alt="Stone Quarry Sealing"
              width={200}
              height={55}
              className="mb-4 h-14 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Family-owned and operated asphalt sealcoating company serving
              Northwest Pennsylvania since 2023. Dependable, professional
              service you can trust.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-copper-light">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-copper-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-copper-light">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-muted">Asphalt Sealcoating</span>
              </li>
              <li>
                <span className="text-sm text-muted">Crack Filling</span>
              </li>
              <li>
                <span className="text-sm text-muted">Line Painting</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-copper-light">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-copper-light"
                >
                  <Phone size={16} className="shrink-0 text-copper" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.emailHref}
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-copper-light"
                >
                  <Mail size={16} className="shrink-0 text-copper" />
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-muted">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-copper" />
                  <span>{BUSINESS.fullAddress}</span>
                </div>
              </li>
              <li>
                <a
                  href={BUSINESS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-copper-light"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook size={16} className="shrink-0 text-copper" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-dark">
              &copy; {new Date().getFullYear()} Stone Quarry Sealing. All rights
              reserved.
            </p>
            <p className="text-xs text-muted-dark">
              Serving Northwest Pennsylvania since 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
