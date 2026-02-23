"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "glass py-3"
            : "bg-transparent py-5"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="relative z-[101] flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Stone Quarry Sealing"
              width={180}
              height={50}
              className={`transition-all duration-500 ${
                scrolled ? "h-10 w-auto" : "h-12 w-auto"
              }`}
              priority
            />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium tracking-wide text-white/80 transition-colors duration-300 hover:text-copper-light after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-copper after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 rounded-full border border-copper/30 bg-copper/10 px-5 py-2.5 text-sm font-semibold text-copper-light transition-all duration-300 hover:border-copper hover:bg-copper/20 hover:shadow-[0_0_20px_rgba(184,118,62,0.3)]"
            >
              <Phone size={16} />
              {BUSINESS.phone}
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[101] flex h-12 w-12 items-center justify-center rounded-lg transition-colors lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[99] bg-background/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-3xl font-display font-bold tracking-wider text-white/90 transition-all duration-300 hover:text-copper-light"
              style={{
                transitionDelay: isOpen ? `${i * 80}ms` : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {link.label}
            </a>
          ))}
          <div
            className="mt-8 flex flex-col items-center gap-4"
            style={{
              transitionDelay: isOpen ? `${NAV_LINKS.length * 80}ms` : "0ms",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.3s ease-out",
            }}
          >
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 rounded-full border border-copper bg-copper/20 px-8 py-3 text-lg font-semibold text-copper-light"
            >
              <Phone size={20} />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
