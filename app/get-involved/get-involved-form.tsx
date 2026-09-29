"use client";

import { useState } from "react";
import { HiCheckCircle, HiUserGroup, HiSparkles, HiArrowRight, HiMapPin } from "react-icons/hi2";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { HeroPattern } from "@/app/components/hero-pattern";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { captureEvent } from "@/lib/posthog";

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT - Abuja", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
  "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
  "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

export default function GetInvolvedForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "Lagos",
    lga: "",
    ward: "",
    roleInterest: "Healthcare Volunteer",
    message: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      captureEvent("volunteer_form_submit", {
        volunteer_role: formData.roleInterest,
        state: formData.state,
        source: "get_involved_page",
      });

      const website = new FormData(e.currentTarget).get("website");
      const response = await fetch("/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website }),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(result?.error || "The registration could not be submitted.");
      }

      captureEvent("volunteer_form_submit_success", {
        volunteer_role: formData.roleInterest,
        state: formData.state,
      });
      setSubmitted(true);
    } catch (submissionError) {
      const message = submissionError instanceof Error ? submissionError.message : "The registration could not be submitted.";
      captureEvent("volunteer_form_submit_failed", {
        volunteer_role: formData.roleInterest,
        state: formData.state,
        error_message: message,
      });
      setError(message);
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
          <div className="max-w-[850px]">
            <span className="mb-4 block w-12 h-1 bg-[#de232b]" />
            <p className="mb-4 text-[0.75rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
              Mobilization & Membership
            </p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] w-full font-extrabold leading-[0.98] tracking-[-0.05em] text-white">
              Be a part of the movement for grassroots empowerment.
            </h1>
          </div>
        </div>
      </section>

      {/* ── FORM & WAYS TO PARTICIPATE ───────────────────────────────── */}
      <section className="mx-auto max-w-[1240px] px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Ways to Participate */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal>
              <div>
                <span className="mb-3 block w-10 h-1 bg-[#de232b]" />
                <h2 className="text-3xl font-extrabold text-[#1e4544] tracking-tight mb-4">
                  How you can contribute
                </h2>
                <p className="text-[0.95rem] leading-[1.7] text-[#60736d]">
                  APC CARES relies on dedicated volunteers across Nigeria&apos;s 8,809 wards to identify needs, verify beneficiaries, and drive local impact.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-xl border border-[#c9d8d1]/60 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eaf1ed] text-[#1e4544]">
                  <HiUserGroup className="text-2xl text-[#39a452]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#1e4544] text-lg mb-1">Ward Volunteer Champion</h3>
                  <p className="text-xs text-[#60736d] leading-relaxed">
                    You can volunteer to work in a wing that matches your skills and interests, helping to mobilize resources and support for local communities.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-xl border border-[#c9d8d1]/60 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eaf1ed] text-[#1e4544]">
                  <SiHomeassistantcommunitystore className="text-2xl text-[#de232b]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#1e4544] text-lg mb-1">Refer a community</h3>
                  <p className="text-xs text-[#60736d] leading-relaxed">
                    You can contact us directly to refer a community that needs support and we will connect you with the appropriate wing to facilitate assistance.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-xl border border-[#c9d8d1]/60 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eaf1ed] text-[#1e4544]">
                  <HiSparkles className="text-2xl text-[#5cc3e6]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#1e4544] text-lg mb-1">Lead as a coordinator</h3>
                  <p className="text-xs text-[#60736d] leading-relaxed">
                    If you have prior experience in community mobilization, project management, or volunteer coordination, you can lead a team of volunteers in a state or Wing.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Registration Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={150}>
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#c9d8d1]/60">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f7ec] text-[#39a452] mx-auto text-3xl">
                      <HiCheckCircle />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#1e4544]">
                      Registration Received!
                    </h3>
                    <p className="text-[#60736d] text-sm max-w-[440px] mx-auto leading-relaxed">
                      Thank you for registering with APC CARES, <strong className="text-[#1e4544]">{formData.fullName}</strong>. Your details have been submitted to the National Mobilization Directorate. Our coordinator for <strong className="text-[#1e4544]">{formData.state} State</strong> will reach out to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 bg-[#1e4544] px-6 py-3 rounded-lg text-xs font-extrabold text-white uppercase tracking-wider hover:bg-[#123333]"
                    >
                      Register Another Volunteer
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
                        Volunteer Registration Form
                      </h3>
                      <p className="text-xs text-[#60736d] mb-6">
                        Complete your details below to join the official APC CARES volunteer roster.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="volunteer-name" className="block text-xs font-extrabold uppercase tracking-wider text-[#1e4544] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="volunteer-name"
                          required
                          placeholder="e.g. Babatunde Usman"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full rounded-lg border border-[#c9d8d1] px-4 py-3 text-sm focus:border-[#1e4544] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label htmlFor="volunteer-phone" className="block text-xs font-extrabold uppercase tracking-wider text-[#1e4544] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="volunteer-phone"
                          required
                          placeholder="08012345678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-lg border border-[#c9d8d1] px-4 py-3 text-sm focus:border-[#1e4544] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="volunteer-email" className="block text-xs font-extrabold uppercase tracking-wider text-[#1e4544] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="volunteer-email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border border-[#c9d8d1] px-4 py-3 text-sm focus:border-[#1e4544] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label htmlFor="volunteer-state" className="block text-xs font-extrabold uppercase tracking-wider text-[#1e4544] mb-2">
                          State of Residence *
                        </label>
                        <select
                          id="volunteer-state"
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full rounded-lg border border-[#c9d8d1] px-4 py-3 text-sm focus:border-[#1e4544] focus:outline-none bg-white"
                        >
                          {nigerianStates.map((state) => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="volunteer-lga" className="block text-xs font-extrabold uppercase tracking-wider text-[#1e4544] mb-2">
                          LGA
                        </label>
                        <input
                          type="text"
                          id="volunteer-lga"
                          placeholder="Your LGA"
                          value={formData.lga}
                          onChange={(e) => setFormData({ ...formData, lga: e.target.value })}
                          className="w-full rounded-lg border border-[#c9d8d1] px-4 py-3 text-sm focus:border-[#1e4544] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label htmlFor="volunteer-ward" className="block text-xs font-extrabold uppercase tracking-wider text-[#1e4544] mb-2">
                          Ward
                        </label>
                        <input
                          type="text"
                          id="volunteer-ward"
                          placeholder="Ward / Community"
                          value={formData.ward}
                          onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
                          className="w-full rounded-lg border border-[#c9d8d1] px-4 py-3 text-sm focus:border-[#1e4544] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="volunteer-role" className="block text-xs font-extrabold uppercase tracking-wider text-[#1e4544] mb-2">
                        Area of Interest
                      </label>
                      <select
                        id="volunteer-role"
                        value={formData.roleInterest}
                        onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                        className="w-full rounded-lg border border-[#c9d8d1] px-4 py-3 text-sm focus:border-[#1e4544] focus:outline-none bg-white"
                      >
                        <option value="Healthcare Volunteer">Healthcare Volunteer</option>
                        <option value="Education Volunteer">Education Volunteer</option>
                        <option value="Women & Youth Support">Women & Youth Support</option>
                        <option value="Community Mobilization">Community Mobilization</option>
                        <option value="Infrastructure & Advocacy">Infrastructure & Advocacy</option>
                        <option value="Media & Communications">Media & Communications</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="volunteer-message" className="block text-xs font-extrabold uppercase tracking-wider text-[#1e4544] mb-2">
                        Tell us how you can help *
                      </label>
                      <textarea
                        id="volunteer-message"
                        required
                        rows={5}
                        placeholder="Briefly describe your skills, interests, or community needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg border border-[#c9d8d1] px-4 py-3 text-sm focus:border-[#1e4544] focus:outline-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="volunteer-consent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-[#c9d8d1] text-[#1e4544] focus:ring-[#1e4544]"
                        required
                      />
                      <label htmlFor="volunteer-consent" className="text-xs leading-relaxed text-[#60736d]">
                        I consent to being contacted by APC CARES regarding volunteer opportunities and grassroots engagement.
                      </label>
                    </div>

                    {error && (
                      <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-3 bg-[#1e4544] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-[#123333] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer rounded-[80px]"
                    >
                      {isSubmitting ? "Submitting..." : "Register as Volunteer"}
                      <HiArrowRight className="text-lg" />
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
