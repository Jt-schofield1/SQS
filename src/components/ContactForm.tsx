"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Phone, Mail, MapPin, Facebook, Send, CheckCircle, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { useInView } from "@/lib/useInView";

export default function ContactForm() {
  const heading = useInView<HTMLDivElement>();
  const form = useInView<HTMLDivElement>();
  const info = useInView<HTMLDivElement>();
  const [state, handleSubmit] = useForm("xykdbook");
  const [service, setService] = useState("");

  const inputClasses =
    "w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder-muted transition-all duration-300 focus:border-copper/50 focus:outline-none focus:ring-1 focus:ring-copper/30 sm:text-base";

  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal py-24 sm:py-32 lg:py-40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-copper/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-copper/[0.04] blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={heading.ref} className={`reveal mb-16 text-center sm:mb-20 ${heading.inView ? "in-view" : ""}`}>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-copper">Get Started</span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Request a <span className="text-gradient-copper">Free Quote</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
            Ready to protect your asphalt? Fill out the form or give us a call &mdash; we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div ref={form.ref} className={`reveal-left lg:col-span-3 ${form.inView ? "in-view" : ""}`}>
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-copper/30 bg-surface p-12 text-center">
                <CheckCircle size={48} className="mb-4 text-copper-light" />
                <h3 className="font-display text-2xl font-bold">Message Sent!</h3>
                <p className="mt-2 text-muted">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">Full Name *</label>
                    <input type="text" id="name" name="name" required className={inputClasses} placeholder="John Smith" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-xs text-red-400" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">Email Address *</label>
                    <input type="email" id="email" name="email" required className={inputClasses} placeholder="john@example.com" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-400" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className={inputClasses} placeholder="(814) 555-0123" />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-white/80">Service Needed</label>
                    <select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)} className={`${inputClasses} appearance-none`}>
                      <option value="">Select a service...</option>
                      <option value="Sealcoating">Sealcoating</option>
                      <option value="Crack Filling">Crack Filling</option>
                      <option value="Line Painting">Line Painting</option>
                      <option value="Multiple Services">Multiple Services</option>
                      <option value="Not Sure">Not Sure / Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="mb-2 block text-sm font-medium text-white/80">Property Address</label>
                  <input type="text" id="address" name="address" className={inputClasses} placeholder="123 Main St, Waterford, PA" />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">Message / Details *</label>
                  <textarea id="message" name="message" required rows={5} className={`${inputClasses} resize-none`} placeholder="Tell us about your project — driveway or parking lot size, any cracks, when you'd like the work done, etc." />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-red-400" />
                </div>

                <button type="submit" disabled={state.submitting} className="group flex w-full items-center justify-center gap-2 rounded-lg bg-copper px-8 py-4 text-base font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-copper-light hover:shadow-[0_0_30px_rgba(184,118,62,0.4)] disabled:opacity-50 sm:w-auto">
                  {state.submitting ? "Sending..." : "Send Message"}
                  <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

          <div ref={info.ref} className={`reveal-right lg:col-span-2 ${info.inView ? "in-view" : ""}`}>
            <div className="space-y-6">
              <div className="rounded-xl border border-white/5 bg-surface p-6">
                <h3 className="mb-4 font-display text-lg font-bold uppercase tracking-wide">Contact Info</h3>
                <ul className="space-y-4">
                  <li><a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-copper-light sm:text-base"><Phone size={18} className="shrink-0 text-copper" />{BUSINESS.phone}</a></li>
                  <li><a href={BUSINESS.emailHref} className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-copper-light sm:text-base"><Mail size={18} className="shrink-0 text-copper" />{BUSINESS.email}</a></li>
                  <li><div className="flex items-start gap-3 text-sm text-muted sm:text-base"><MapPin size={18} className="mt-0.5 shrink-0 text-copper" />{BUSINESS.fullAddress}</div></li>
                  <li><a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-copper-light sm:text-base"><Facebook size={18} className="shrink-0 text-copper" />Follow us on Facebook</a></li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/5 bg-surface p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={18} className="text-copper" />
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide">Season</h3>
                </div>
                <p className="text-sm text-muted sm:text-base">
                  We operate from <strong className="text-white/80">May through October</strong>. Sealcoating requires overnight temps above 55°F and no rain in the 24-hour forecast.
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border border-white/5">
                <iframe
                  src="https://maps.google.com/maps?q=2510+Stone+Quarry+Rd,+Waterford,+PA+16441&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Stone Quarry Sealing location - Waterford, PA" className="grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
