import Link from "next/link";
import { HiArrowRight, HiShieldCheck } from "react-icons/hi2";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { HeroPattern } from "@/app/components/hero-pattern";

export const metadata = {
  title: "Privacy Policy | APC CARES — Data Protection & Privacy",
  description:
    "Learn about APC CARES data protection guidelines, volunteer privacy commitments, and information stewardship.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#f7f8f3]">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0e2726] py-14 md:py-20 text-white">
        <HeroPattern />
        <div className="relative z-10 mx-auto max-w-[1240px] px-6">
          <div className="max-w-[780px]">
            <span className="mb-4 block w-12 h-1 bg-[#de232b]" />
            <p className="mb-4 text-[0.75rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
              Data Protection & Privacy
            </p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-white">
              Privacy Policy
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
                  APC CARES National Secretariat Privacy Commitment
                </p>
              </div>
              <span className="inline-flex items-center gap-2 bg-[#eaf1ed] px-4 py-2 rounded-lg text-xs font-extrabold text-[#1e4544]">
                <HiShieldCheck className="text-[#39a452] text-lg" /> Verified Protection
              </span>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-extrabold text-[#1e4544] mb-3">
                1. Overview & Data Stewardship
              </h2>
              <p className="text-[0.95rem] leading-[1.75]">
                APC CARES (&quot;Community Access to Resources & Empowerment Services&quot;) is committed to respecting and protecting the privacy of our volunteers, community members, coordinators, and visitors. This Privacy Policy outlines how we collect, store, and process personal information submitted through our official website and volunteer portals.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-extrabold text-[#1e4544] mb-3">
                2. Information We Collect
              </h2>
              <p className="text-[0.95rem] leading-[1.75] mb-3">
                When you register as a volunteer, request community assistance, or send an inquiry through our platform, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[0.92rem] leading-[1.7]">
                <li>Contact Information: Full name, phone number, email address.</li>
                <li>Geopolitical Details: State of residence, Local Government Area (LGA), and Ward name/number.</li>
                <li>Engagement Preferences: Preferred volunteer role, skill categories, and optional messages.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-extrabold text-[#1e4544] mb-3">
                3. How We Use Your Information
              </h2>
              <p className="text-[0.95rem] leading-[1.75] mb-3">
                Personal information collected by APC CARES is strictly utilized for support group operations, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[0.92rem] leading-[1.7]">
                <li>Connecting volunteer champions with their respective State and LGA coordination steering teams.</li>
                <li>Verifying beneficiaries for official empowerment schemes, medical outreaches, and educational grants.</li>
                <li>Sending official support group announcements, press releases, and town-hall invitations.</li>
              </ul>
              <p className="text-[0.95rem] leading-[1.75] mt-3 font-bold text-[#1e4544]">
                We do NOT sell, rent, or trade personal data to any third-party commercial entities under any circumstances.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-extrabold text-[#1e4544] mb-3">
                4. Data Security & Confidentiality
              </h2>
              <p className="text-[0.95rem] leading-[1.75]">
                APC CARES maintains technical and organizational measures to safeguard submitted data against unauthorized access, loss, or alteration. All volunteer registries are managed directly by authorized officers at the National Secretariat.
              </p>
            </div>

            {/* Section 5 */}
            <div className="pt-6 border-t border-[#c9d8d1]/60">
              <h2 className="text-xl font-extrabold text-[#1e4544] mb-3">
                5. Contact Secretariat Regarding Your Data
              </h2>
              <p className="text-[0.95rem] leading-[1.75] mb-4">
                If you wish to update your volunteer details, request removal from our database, or ask questions regarding our privacy practices, please contact our National Secretariat.
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
