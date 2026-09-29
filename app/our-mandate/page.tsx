import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiCheckCircle, HiDocumentCheck, HiGlobeAlt, HiShieldCheck, HiUserGroup } from "react-icons/hi2";
import { ScrollReveal } from "@/app/components/scroll-reveal";

export const metadata = {
  title: "Our Mandate | APC CARES — Strategic Roadmap & Focus Areas",
  description:
    "Explore the strategic mandate, 6 thematic pillars, and 774 LGA execution framework of APC CARES, an officially approved APC support group.",
};

const pillarsDetail = [
  {
    iconSrc: "/icons/education.svg",
    color: "#39a452",
    title: "01. Education Access",
    short: "Scholarships, digital literacy, school advocacy & mentorship.",
    details:
      "Mobilizing community educational grants, supporting public school infrastructure improvements, and deploying youth digital literacy centers across local government areas.",
    action: "Target: 100,000 Students & Youth Supported",
  },
  {
    iconSrc: "/icons/health.svg",
    color: "#de232b",
    title: "02. Community Wellbeing",
    short: "Medical outreaches, health insurance enrollment & maternal health.",
    details:
      "Organizing rural medical clinics, facilitating state health insurance enrollment for vulnerable households, and expanding maternal and child wellness initiatives.",
    action: "Target: 500 Free Rural Health Outreaches",
  },
  {
    iconSrc: "/icons/empowerment.svg",
    color: "#5cc3e6",
    title: "03. Economic Empowerment",
    short: "Skills acquisition, micro-grants & cooperative formation.",
    details:
      "Providing vocational skills acquisition, cooperative formation assistance for artisans and market traders, and facilitating seed micro-grants for small enterprises.",
    action: "Target: ₦100M Seed Micro-Grant Allocation",
  },
  {
    iconSrc: "/icons/youth.svg",
    color: "#1e4544",
    title: "04. Human Development",
    short: "Leadership pipelines, female empowerment & mentorship.",
    details:
      "Creating structured leadership development pipelines for young political and civic leaders, while funding market women cooperatives across wards.",
    action: "Target: 36 State Leadership Academies",
  },
  {
    iconSrc: "/icons/infrastructure.svg",
    color: "#de232b",
    title: "05. Infrastructure Advocacy",
    short: "Community advocacy for water, power, roads & public facilities.",
    details:
      "Acting as a direct channel of communication between communities and government agencies to advocate for clean water boreholes, road repairs, and rural electrification.",
    action: "Target: 774 LGA Needs Assessment Audits",
  },
  {
    iconSrc: "/icons/civic.svg",
    color: "#39a452",
    title: "06. Civic Engagement",
    short: "Voter education, town-hall dialogues & grassroots feedback loops.",
    details:
      "Hosting regular ward town halls, promoting active voter education, and creating transparent feedback mechanisms connecting everyday citizens with party leadership.",
    action: "Target: Monthly Ward Town Halls",
  },
];

const frameworkSteps = [
  {
    step: "01",
    title: "National & Zonal Oversight",
    desc: "National Executive Committee aligns strategic directives with 6 geopolitical zonal hubs.",
  },
  {
    step: "02",
    title: "36 State Chapters",
    desc: "State Executive Directors coordinate inter-LGA deployment, government relations, and monitoring.",
  },
  {
    step: "03",
    title: "774 LGA Steering Teams",
    desc: "Local Government Area officers identify high-priority community needs and manage local volunteers.",
  },
  {
    step: "04",
    title: "8,809 Ward Champions",
    desc: "Grassroots ward leaders drive direct outreach, beneficiary verification, and town-hall feedback.",
  },
];

export default function MandatePage() {
  return (
    <main className="overflow-x-hidden bg-[#f7f8f3]">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0e2726] py-14 md:py-20 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/nextbuildr/image/upload/mandate_mwcxvl.avif"
            alt="APC CARES Mandate Background"
            fill
            className="object-cover opacity-70"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e2726] via-[#0e2726]/50 to-[#0e2726]/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1240px] px-6">
          <div className="max-w-[780px]">
            <span className="mb-4 block w-12 h-1 bg-[#de232b]" />
            <p className="mb-4 text-[0.75rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
              Our Mandate & Strategic Roadmap
            </p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-white">
              Translating party vision into visible, measurable community progress.
            </h1>
          </div>
        </div>
      </section>

      {/* ── 6 THEMATIC PILLARS SECTION ───────────────────────────────── */}
      <section className="mx-auto max-w-[1240px] px-6 py-20">
        <ScrollReveal>
          <div className="mb-14 text-center max-w-[680px] mx-auto">
            <span className="mb-3 block w-10 h-1 bg-[#de232b] mx-auto" />
            <p className="mb-2 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
              Core Focus Areas
            </p>
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold tracking-[-0.05em] text-[#1e4544] leading-tight">
              The 6 thematic pillars of APC CARES
            </h2>
            <p className="mt-4 text-[1rem] leading-[1.7] text-[#60736d]">
              Our strategic intervention roadmap designed to touch every ward, household, and community across Nigeria.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pillarsDetail.map((pillar, idx) => (
            <ScrollReveal key={pillar.title} delay={idx * 100}>
              <div
                className="group bg-white p-8 rounded-2xl border border-[#c9d8d1]/60 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-14 h-14 mb-6 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={pillar.iconSrc}
                      alt={pillar.title}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#1e4544] mb-3">{pillar.title}</h3>
                  <p className="text-[0.92rem] leading-[1.7] text-[#60736d] mb-6">{pillar.details}</p>
                </div>

                <div className="pt-4 border-t border-[#c9d8d1]/50 text-[0.78rem] font-extrabold text-[#1e4544] flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#eaf1ed] rounded-full text-[#1e4544]">{pillar.action}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── EXECUTION FRAMEWORK (774 LGA ROLLOUT) ────────────────────── */}
      <section className="bg-[#1e4544] py-24 text-white">
        <div className="mx-auto max-w-[1240px] px-6">
          <ScrollReveal>
            <div className="mb-16 text-center max-w-[680px] mx-auto">
              <span className="mb-3 block w-10 h-1 bg-[#de232b] mx-auto" />
              <p className="mb-2 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
                Execution Model
              </p>
              <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] font-extrabold tracking-[-0.05em] text-white leading-tight">
                How our 774 LGA deployment works
              </h2>
              <p className="mt-4 text-[1rem] leading-[1.7] text-[#c5d7d1]">
                A disciplined, 4-tier organizational framework ensuring every resource reaches true grassroots beneficiaries without bottlenecks.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {frameworkSteps.map((step, idx) => (
              <ScrollReveal key={step.step} delay={idx * 120}>
                <div className="bg-[#285956] p-8 rounded-xl h-full flex flex-col justify-between transition-all duration-300 hover:bg-[#2f6460] hover:-translate-y-1">
                  <div>
                    <span className="text-4xl font-extrabold text-[#5cc3e6] block mb-4">{step.step}</span>
                    <h3 className="text-lg font-extrabold text-white mb-2">{step.title}</h3>
                    <p className="text-[0.88rem] leading-[1.65] text-[#c5d7d1]">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCOUNTABILITY & AUDIT COMMITMENT ────────────────────────── */}
      <section className="mx-auto max-w-[1240px] px-6 py-20">
        <ScrollReveal>
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#c9d8d1]/60 shadow-md flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-[640px]">
              <span className="mb-3 block w-10 h-1 bg-[#39a452]" />
              <p className="mb-2 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#39a452]">
                Our Commitment
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1e4544] mb-4">
                Strict accountability & verified field audits
              </h2>
              <p className="text-[1rem] leading-[1.75] text-[#60736d]">
                APC CARES operates under a zero-compromise audit policy. Every outreach, scholarship, micro-grant, and clinic project is cataloged with verified beneficiary data and published in quarterly progress reports for party leadership and the general public.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-3">
              <div className="flex items-center gap-3 bg-[#eaf1ed] px-5 py-3 rounded-[80px] text-[0.85rem] font-extrabold text-[#1e4544]">
                <HiShieldCheck className="text-xl text-[#39a452]" /> Verified Beneficiary Database
              </div>
              <div className="flex items-center gap-3 bg-[#eaf1ed] px-5 py-3 rounded-[80px] text-[0.85rem] font-extrabold text-[#1e4544]">
                <HiDocumentCheck className="text-xl text-[#5cc3e6]" /> Quarterly Public Audit Reports
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────── */}
      <section className="bg-[#0e2726] py-20 px-6 text-white text-center relative">
        <div className="absolute inset-0 opacity-40">
                  <Image
                    src="https://res.cloudinary.com/nextbuildr/image/upload/partner_vlaigl.jpg"
                    alt="APC CARES Community"
                    fill
                    className="object-cover object-center opacity-80"
                    unoptimized
                    priority
                  />
                </div>
        <div className="mx-auto max-w-[760px]">
          <ScrollReveal>
            <span className="mb-4 block w-10 h-1 bg-[#de232b] mx-auto" />
            <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-extrabold leading-[1] tracking-tight mb-6">
              Partner with APC CARES in your Local Government Area
            </h2>
            <p className="text-[1.05rem] leading-[1.75] text-[#c5d7d1] mb-8 max-w-[600px] mx-auto">
              Join our network of LGA coordinators, ward volunteer champions, and community partners driving grassroots progress.
            </p>
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-3 bg-[#1e4544] px-8 py-4 text-[0.88rem] font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#123333] hover:-translate-y-1 shadow-lg rounded-[80px]"
            >
              Get Involved Today <HiArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
