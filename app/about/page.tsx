import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiCheckCircle, HiUserGroup, HiSparkles, HiGlobeAlt, HiShieldCheck } from "react-icons/hi2";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { TeamSection } from "@/app/about/team-section";

export const metadata = {
  title: "About Us | APC CARES — Grassroots Empowerment & Support Group",
  description:
    "Learn about APC CARES (Community Access to Resources & Empowerment Services), an officially recognized APC support group bridging party vision with community impact across Nigeria.",
};

const coreValues = [
  {
    title: "Grounded in People",
    desc: "We listen to local realities and prioritize community voices over top-down assumptions.",
    icon: <HiUserGroup className="text-3xl text-[#1e4544]" />,
  },
  {
    title: "Transparent & Open",
    desc: "We share clear information about programs, resource allocation, and ways citizens can participate.",
    icon: <HiShieldCheck className="text-3xl text-[#1e4544]" />,
  },
  {
    title: "Practical Impact",
    desc: "We move beyond rhetoric to deliver useful support, skills, and direct empowerment pathways.",
    icon: <HiSparkles className="text-3xl text-[#1e4544]" />,
  },
  {
    title: "Nationwide Unity",
    desc: "We build bridges across geopolitical zones, connecting urban centers with rural areas.",
    icon: <HiGlobeAlt className="text-3xl text-[#1e4544]" />,
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-[#f7f8f3]">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0e2726] py-14">
        {/* Background photo overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/36658238/pexels-photo-36658238.jpeg"
            alt="APC CARES Community Members"
            fill
            className="object-cover object-center opacity-90"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e2726] via-[#0e2726]/60 to-[#0e2726]/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1240px] px-6">
          <div className="max-w-[800px]">
            <span className="mb-4 block w-12 h-1 bg-[#de232b]" />
            <p className="mb-4 text-[0.75rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
              About APC CARES
            </p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.8rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-white">
              Closing the gap between party leadership & everyday realities.
            </h1>
            <div className="mt-8 flex flex-wrap gap-4 pt-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[0.8rem] font-bold text-white backdrop-blur-md">
                <HiCheckCircle className="text-[#39a452] text-lg" /> Officially Approved APC Support Group
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[0.8rem] font-bold text-white backdrop-blur-md">
                <HiCheckCircle className="text-[#5cc3e6] text-lg" /> 36 States & 774 LGAs Structure
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION (Dual Card Band) ───────────────────────── */}
      <section className="mx-auto max-w-[1240px] px-6 py-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Mission Card */}
            <div className="relative overflow-hidden bg-[#1e4544] p-8 md:p-12 text-white shadow-xl flex flex-col justify-between border-l-4 border-[#de232b]">
              <div className="absolute right-4 top-4 text-[6rem] font-extrabold opacity-10 text-white select-none">
                01
              </div>
              <div>
                <p className="mb-3 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
                  Our Purpose
                </p>
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white">
                  Our Mission
                </h2>
                <p className="text-[1.05rem] leading-[1.75] text-[#c5d7d1]">
                  To serve as a trusted, accountable channel that translates party vision into practical empowerment — delivering direct access to resources, skills, healthcare, and economic opportunity for Nigerians in cities, towns, and villages across the federation.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-[0.82rem] font-bold text-[#5cc3e6] uppercase tracking-wider">
                <HiCheckCircle className="text-xl" /> Action-Oriented • People-First
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative overflow-hidden bg-[#eaf1ed] p-8 md:p-12 text-[#1e4544] shadow-lg flex flex-col justify-between border-l-4 border-[#39a452]">
              <div className="absolute right-4 top-4 text-[6rem] font-extrabold opacity-10 text-[#1e4544] select-none">
                02
              </div>
              <div>
                <p className="mb-3 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#39a452]">
                  Our Horizon
                </p>
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1e4544]">
                  Our Vision
                </h2>
                <p className="text-[1.05rem] leading-[1.75] text-[#60736d]">
                  To build an interconnected, empowered grassroots network where every citizen — regardless of background — has active representation, meaningful civic pathways, and equal access to national growth opportunities under the Renewed Hope Agenda.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#c9d8d1]/60 flex items-center gap-3 text-[0.82rem] font-bold text-[#1e4544] uppercase tracking-wider">
                <HiCheckCircle className="text-xl text-[#39a452]" /> Inclusive • Sustainable • Verified
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── TEAM SECTION (Interactive Slide-Over Drawer) ───────────────── */}
      <TeamSection />

      {/* ── OPERATING PHILOSOPHY ──────────────────────────────────────── */}
      <section className="bg-[#eaf1ed] py-20 px-6">
        <div className="mx-auto max-w-[1240px]">
          <ScrollReveal>
            <div className="mb-14 text-center max-w-[600px] mx-auto">
              <p className="mb-2 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
                How We Operate
              </p>
              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-extrabold tracking-tight text-[#1e4544]">
                Our core operating principles
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((val, idx) => (
              <ScrollReveal key={val.title} delay={idx * 100}>
                <div className="bg-white p-7 rounded-xl shadow-xs transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-4">{val.icon}</div>
                  <h3 className="text-lg font-extrabold text-[#1e4544] mb-2">{val.title}</h3>
                  <p className="text-[0.86rem] leading-[1.65] text-[#60736d]">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0e2726] py-20 px-6 text-white text-center">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.pexels.com/photos/36972167/pexels-photo-36972167.jpeg"
            alt="APC CARES Community"
            fill
            className="object-cover object-center opacity-80"
            unoptimized
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[760px]">
          <ScrollReveal>
            <span className="mb-4 block w-10 h-1 bg-[#de232b] mx-auto" />
            <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-extrabold leading-[1] tracking-tight mb-6">
              Be a part of the movement for grassroots empowerment.
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-[#c5d7d1] mb-8 max-w-[600px] mx-auto">
              Join thousands of dedicated volunteers, community leaders, and advocates working to bring meaningful opportunity to every ward in Nigeria.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-involved"
                className="group inline-flex items-center gap-3 bg-[#1e4544] px-8 py-4 text-[0.88rem] font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/30"
              >
                Get Involved Now <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link
                href="/our-mandate"
                className="inline-flex items-center gap-3 border border-white/60 px-8 py-4 text-[0.88rem] font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-[#1e4544] hover:-translate-y-1"
              >
                View Our Mandate
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}