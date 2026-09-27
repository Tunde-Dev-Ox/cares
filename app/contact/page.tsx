"use client";

import { useState } from "react";
import { HiCheckCircle, HiEnvelope, HiArrowRight, HiChatBubbleLeftRight } from "react-icons/hi2";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { HeroPattern } from "../components/hero-pattern";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    category: "General Inquiry",
    message: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const website = new FormData(e.currentTarget).get("website");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website }),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(result?.error || "The message could not be sent.");
      }

      setSubmitted(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "The message could not be sent.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#f7f8f3]">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0e2726] py-14 md:py-20 text-white">
        <HeroPattern />
        <div className="relative z-10 mx-auto max-w-[1240px] px-6">
          <div className="max-w-[780px]">
            <span className="mb-4 block w-12 h-1 bg-[#de232b]" />
            <p className="mb-4 text-[0.75rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
              National Secretariat
            </p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-white">
              Get in touch with APC CARES.
            </h1>
          </div>
        </div>
      </section>

      {/* ── CONTACT CARDS & FORM ─────────────────────────────────────── */}
      <section className="mx-auto max-w-[1240px] px-6 pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Secretariat Information */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal>
              <span className="mb-3 block w-10 h-1 bg-[#de232b]" />
              <h2 className="text-3xl font-extrabold text-[#1e4544] tracking-tight mb-4">
                National Secretariat
              </h2>
              <p className="text-[0.95rem] leading-[1.7] text-[#60736d] mb-8">
                Official contact channels for party members, community representatives, media, and general public inquiries.
              </p>
            </ScrollReveal>
            {/* 
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-xl border border-[#c9d8d1]/60 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eaf1ed] text-[#1e4544]">
                  <HiMapPin className="text-2xl text-[#de232b]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#1e4544] text-base mb-1">Secretariat Office</h3>
                  <p className="text-xs text-[#60736d] leading-relaxed">
                    APC CARES National Secretariat, Federal Capital Territory (FCT), Abuja, Nigeria.
                  </p>
                </div>
              </div>
            </ScrollReveal> */}

            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-xl border border-[#c9d8d1]/60 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eaf1ed] text-[#1e4544]">
                  <HiEnvelope className="text-2xl text-[#39a452]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#1e4544] text-base mb-1">Official Emails</h3>
                  <p className="text-xs text-[#60736d] leading-relaxed">
                    Secretariat: <strong className="text-[#1e4544]">info@apccares.org</strong>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-xl border border-[#c9d8d1]/60 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eaf1ed] text-[#1e4544]">
                  <HiChatBubbleLeftRight className="text-2xl text-[#5cc3e6]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#1e4544] text-base mb-1">Response Commitment</h3>
                  <p className="text-xs text-[#60736d] leading-relaxed">
                    Our Secretariat desk aims to respond to all official inquiries within 24 to 48 business hours.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={150}>
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#c9d8d1]/60">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f7ec] text-[#39a452] mx-auto text-3xl">
                      <HiCheckCircle />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#1e4544]">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-[#60736d] text-sm max-w-[440px] mx-auto leading-relaxed">
                      Thank you for contacting APC CARES Secretariat. Your message regarding <strong className="text-[#1e4544]">{form.subject || form.category}</strong> has been logged.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 bg-[#1e4544] px-6 py-3 rounded-lg text-xs font-extrabold text-white uppercase tracking-wider hover:bg-[#123333]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="absolute h-px w-px overflow-hidden opacity-0"
                    />
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#1e4544] tracking-tight mb-1">
                        Send a Message
                      </h3>
                      <p className="text-xs text-[#60736d] mb-6">
                        Fill out the form below to reach the APC CARES Secretariat.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-extrabold uppercase tracking-wider text-[#1e4544] mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          required
                          placeholder="Your Full Name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-lg border border-[#c9d8d1] px-4 py-3 text-sm focus:border-[#1e4544] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-extrabold uppercase tracking-wider text-[#1e4544] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          required
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-lg border border-[#c9d8d1] px-4 py-3 text-sm focus:border-[#1e4544] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-category" className="block text-xs font-extrabold uppercase tracking-wider text-[#1e4544] mb-2">
                        Inquiry Category
                      </label>
                      <select
                        value={form.category}
                        id="contact-category"
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className="w-full rounded-lg border border-[#c9d8d1] px-4 py-3 text-sm focus:border-[#1e4544] focus:outline-none bg-white"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Community Needs Request">Community Needs Request / Audit</option>
                        <option value="State & LGA Coordination">State & LGA Coordination</option>
                        <option value="Media & Press Inquiry">Media & Press Inquiry</option>
                        <option value="Partnership & Sponsorship">Partnership & Sponsorship</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-extrabold uppercase tracking-wider text-[#1e4544] mb-2">
                        Subject Line
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        placeholder="Brief summary of your inquiry..."
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full rounded-lg border border-[#c9d8d1] px-4 py-3 text-sm focus:border-[#1e4544] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-extrabold uppercase tracking-wider text-[#1e4544] mb-2">
                        Your Message *
                      </label>
                      <textarea
                        rows={4}
                        id="contact-message"
                        required
                        placeholder="Type your message or details here..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-lg border border-[#c9d8d1] px-4 py-3 text-sm focus:border-[#1e4544] focus:outline-none"
                      />
                    </div>

                    <label className="flex items-start gap-3 text-xs leading-relaxed text-[#60736d]">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-[#1e4544]"
                        required
                      />
                      <span>I agree that APC CARES may use these details to respond to my inquiry.</span>
                    </label>

                    {error && (
                      <p role="alert" className="text-sm font-bold text-[#de232b]">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1e4544] py-4 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#123333] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && <HiArrowRight size={18} />}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
