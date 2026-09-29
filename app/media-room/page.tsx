import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiNewspaper, HiArrowDownTray, HiCheckCircle, HiEnvelope, HiCalendar } from "react-icons/hi2";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { HeroPattern } from "@/app/components/hero-pattern";

export const metadata = {
  title: "Media Room | APC CARES — Official Press Statements & News",
  description:
    "Official press center, announcements, and media statements from APC CARES following official approval as a recognized APC support group.",
};

const pressReleases = [
  {
    id: "official-approval",
    title: "APC CARES Receives Official Approval as Recognized APC Support Group",
    date: "September 2026",
    category: "Official Statement",
    featured: true,
    excerpt:
      "The national leadership of the All Progressives Congress (APC) has formally granted approval and recognition to APC CARES as an official party support group. The foundation is authorized to coordinate grassroots mobilization, citizen empowerment, and policy outreach across Nigeria's 36 states and 774 Local Government Areas.",
    readTime: "3 min read",
  },
];

export default function MediaRoomPage() {
  return (
    <main className="overflow-x-hidden bg-[#f7f8f3]">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0e2726] py-14 md:py-20 text-white">
        <HeroPattern />
        <div className="relative z-10 mx-auto max-w-[1240px] px-6">
          <div className="max-w-[780px]">
            <span className="mb-4 block w-12 h-1 bg-[#de232b]" />
            <p className="mb-4 text-[0.75rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
              Media Room & Press Center
            </p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-white">
              Official statements, press releases & brand assets.
            </h1>
          </div>
        </div>
      </section>

      {/* ── FEATURED ANNOUNCEMENT (Official Approval Milestone) ─────── */}
      <section className="mx-auto max-w-[1240px] px-6 py-16">
        <ScrollReveal>
          <div className="bg-[#1e4544] rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-[840px]">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#de232b] text-white text-[0.72rem] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full">
                  Official Milestone
                </span>
                <span className="text-xs font-bold text-[#5cc3e6] flex items-center gap-1">
                  <HiCalendar /> Approved on the 20th of September, 2026
                </span>
              </div>

              <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold leading-[1.05] tracking-tight text-white mb-6">
                APC CARES Receives Official Approval as Recognized All Progressives Congress Support Group
              </h2>

              <p className="text-[1.05rem] leading-[1.75] text-[#c5d7d1] mb-8">
                The national leadership of the All Progressives Congress (APC) has formally granted approval and recognition to APC CARES as an official party support group. Following rigorous vetting of organizational structure, executive compliance, and community outreach frameworks, APC CARES is now officially authorized to mobilize grassroots energy across Nigeria&apos;s 36 states and 774 Local Government Areas.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 border-t border-white/10">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 px-4 py-2 rounded-[80px]">
                  <HiCheckCircle className="text-[#39a452] text-lg" /> Official Recognition Granted
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 px-4 py-2 rounded-[80px]">
                  <HiCheckCircle className="text-[#5cc3e6] text-lg" /> 774 LGA Authorization
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── PRESS RELEASES LIST ──────────────────────────────────────── */}
      <section className="mx-auto max-w-[1240px] px-6 py-12">
        <ScrollReveal>
          <div className="mb-12">
            <h3 className="text-2xl font-extrabold text-[#1e4544] tracking-tight mb-2">
              Recent Statements & Press Releases
            </h3>
            <p className="text-[#60736d] text-sm">
              Official publications from the APC CARES Directorate of Media & Public Affairs.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {pressReleases.map((news, idx) => (
            <ScrollReveal key={news.id} delay={idx * 100}>
              <article className="bg-white p-6 md:p-8 rounded-xl border border-[#c9d8d1]/60 shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#1e4544] flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-[760px]">
                  <div className="flex items-center gap-3 text-xs font-bold text-[#60736d] mb-2">
                    <span className="text-[#de232b] uppercase tracking-wider">{news.category}</span>
                    <span>•</span>
                    <span>{news.date}</span>
                    <span>•</span>
                    <span>{news.readTime}</span>
                  </div>
                  <h4 className="text-xl font-extrabold text-[#1e4544] tracking-tight mb-3">
                    {news.title}
                  </h4>
                  <p className="text-[0.92rem] leading-[1.65] text-[#60736d]">
                    {news.excerpt}
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-2 text-xs font-extrabold text-[#1e4544] bg-[#eaf1ed] px-4 py-2 rounded-[80px]">
                    Full Release <HiArrowRight size={16} />
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── MEDIA CONTACT BANNER ──────────────────────────────────────── */}
      <section className="bg-[#0e2726] py-16 px-6 text-white text-center">
        <div className="mx-auto max-w-[640px]">
          <ScrollReveal>
            <HiEnvelope className="text-4xl text-[#5cc3e6] mx-auto mb-4" />
            <h3 className="text-2xl font-extrabold mb-2 text-white">
              Media & Press Inquiries
            </h3>
            <p className="text-sm text-[#c5d7d1] mb-6">
              For journalist inquiries, interview requests with the National Coordinator, or official media accreditation, please contact our Directorate of Media & Public Affairs.
            </p>
            <a
              href="mailto:info@apccares.org"
              className="inline-flex items-center gap-2 bg-[#1e4544] px-6 py-3 text-sm font-extrabold text-white hover:bg-[#123333] transition-colors cursor-pointer rounded-[80px]"
            >
              Contact Press Team (info@apccares.org)
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
