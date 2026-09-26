import Link from "next/link";
import { HiArrowRight, HiShieldCheck } from "react-icons/hi2";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { HeroPattern } from "@/app/components/hero-pattern";

export const metadata = {
  title: "Terms of Use | APC CARES — Official Terms & Governance",
  description:
    "Read the terms of use, code of conduct, and governance guidelines for APC CARES support group members and website visitors.",
};

export default function TermsPage() {
  return (
    <main className="bg-[#f7f8f3]">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0e2726] py-14 md:py-20 text-white">
        <HeroPattern />
        <div className="relative z-10 mx-auto max-w-[1240px] px-6">
          <div className="max-w-[780px]">
            <span className="mb-4 block w-12 h-1 bg-[#de232b]" />
            <p className="mb-4 text-[0.75rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
              Governance & Compliance
            </p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-white">
              Terms of Use
            </h1>
          </div>
        </div>
      </section>

      {/* ── CONTENT SECTION ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1240px] px-6 py-16">
        <ScrollReveal>
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#c9d8d1]/60 space-y-8 text-[#60736d]">
            <div className="pb-6 border-b border-[#c9d8d1]/60 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#de232b]">
                  Effective Date: September 20, 2026
                </p>
                <p className="text-sm font-bold text-[#1e4544] mt-1">
                  APC CARES Support Group Governance Guidelines
                </p>
              </div>
              <span className="inline-flex items-center gap-2 bg-[#eaf1ed] px-4 py-2 rounded-lg text-xs font-extrabold text-[#1e4544]">
                <HiShieldCheck className="text-[#39a452] text-lg" /> Official Governance
              </span>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-extrabold text-[#1e4544] mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-[0.95rem] leading-[1.75]">
                By accessing this website or registering as a volunteer, coordinator, or member of APC CARES (&quot;Community Access to Resources & Empowerment Services&quot;), you agree to comply with these Terms of Use and our official Support Group Code of Conduct.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-extrabold text-[#1e4544] mb-3">
                2. Support Group Mandate & Alignment
              </h2>
              <p className="text-[0.95rem] leading-[1.75]">
                APC CARES is an officially approved All Progressives Congress support group. All activities, outreaches, and publications conducted by members must align with party policies, national executive directives, and the vision of community empowerment under the Renewed Hope Agenda.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-extrabold text-[#1e4544] mb-3">
                3. Code of Conduct for Volunteers & Coordinators
              </h2>
              <p className="text-[0.95rem] leading-[1.75] mb-3">
                Members representing APC CARES across all 36 states, 774 LGAs, and Wards must adhere to the following standards:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[0.92rem] leading-[1.7]">
                <li>Integrity & Accountability: Ensure all community empowerment resources reach intended beneficiaries without diversion.</li>
                <li>Respect & Inclusivity: Serve citizens across all wards regardless of background, ethnicity, or gender.</li>
                <li>Authorized Representation: Only designated executive officers may issue press statements or enter official contracts on behalf of APC CARES.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-extrabold text-[#1e4544] mb-3">
                4. Intellectual Property & Brand Integrity
              </h2>
              <p className="text-[0.95rem] leading-[1.75]">
                The APC CARES name, official logo, brand assets, and published materials are protected trademarks and intellectual property. Unauthorized use or misrepresentation for unofficial commercial or political activities is strictly prohibited.
              </p>
            </div>

            {/* Section 5 */}
            <div className="pt-6 border-t border-[#c9d8d1]/60">
              <h2 className="text-xl font-extrabold text-[#1e4544] mb-3">
                5. Governance & Compliance Inquiries
              </h2>
              <p className="text-[0.95rem] leading-[1.75] mb-4">
                For questions regarding official support group governance, executive appointments, or compliance matters, please reach out to the National Secretariat.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1e4544] px-6 py-3 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white hover:bg-[#123333] transition-colors"
              >
                Contact Secretariat <HiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
