import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { HeroPattern } from "@/app/components/hero-pattern";

export const metadata: Metadata = {
  title: "Our Wings | APC CARES | Community Programmes & Grassroots Support",
  description:
    "Explore the ten specialised APC CARES Wings and the programmes powering grassroots support, community engagement, and local development across Nigeria.",
  alternates: {
    canonical: "/wings",
  },
};

const wings = [
  {
    id: "health",
    title: "CARES Health Wing",
    introduction: "Better health, closer to home. The Health Wing brings care and health knowledge to communities that are often far from both.",
    programmes: [
      "Free medical outreaches, screenings, and eye and dental clinics",
      "Support for enrolment in health insurance schemes",
      "Maternal, newborn, and child health awareness",
      "Partnerships with primary healthcare centres and health professionals",
      "Health education on prevention, nutrition, sanitation, and wellbeing",
    ],
  },
  {
    id: "education",
    title: "CARES Education Wing",
    introduction: "Every child in school, every young mind given a chance.",
    programmes: [
      "Scholarships and bursaries for deserving students",
      "Advocacy for better school buildings and learning materials",
      "Digital literacy drives for students, teachers, and adults",
      "Mentorship for students and out-of-school youth",
      "Adult literacy and second-chance learning",
    ],
  },
  {
    id: "economic-empowerment",
    title: "CARES Economic Empowerment Wing",
    introduction: "From skills to income, from income to independence.",
    programmes: [
      "Skills acquisition and vocational training",
      "Micro-grants and start-up support for new businesses",
      "Cooperative formation for traders, artisans, and farmers",
      "Access to finance, including links to government intervention funds",
      "Financial literacy and business management training",
    ],
  },
  {
    id: "infrastructure",
    title: "CARES Infrastructure Wing",
    introduction: "The basics every community deserves: water, power, roads, and public facilities.",
    programmes: [
      "Community needs assessments to identify priority projects",
      "Advocacy to relevant government bodies through proper channels",
      "Monitoring of government and donor projects in communities",
      "Mobilising community self-help and partner-funded projects",
      "Maintenance awareness to protect public facilities",
    ],
  },
  {
    id: "security",
    title: "CARES Security Wing",
    introduction: "Safe communities are the foundation of every other good thing. The Security Wing consults and partners with communities and law enforcement agencies to strengthen community safety.",
    programmes: [
      "Community safety consultations and security needs assessments",
      "Partnerships with the Nigeria Police Force, NSCDC, and other lawful agencies",
      "Support for community policing and neighbourhood watch structures working within the law",
      "Early warning and reporting channels between residents and security agencies",
      "Safety awareness, conflict resolution, and peace-building dialogues",
      "Advocacy for street lighting and other safety infrastructure",
    ],
    note: "The Security Wing does not bear arms or carry out enforcement. It works only through lawful agencies and structures.",
  },
  {
    id: "youth",
    title: "CARES Youth Wing",
    introduction: "Equipping Nigeria's young people to lead.",
    programmes: [
      "Leadership and civic training for young people",
      "Mentorship linking youth with professionals and leaders",
      "Tech, creative, and digital skills programmes",
      "Job readiness, internships, and enterprise support",
      "Sports and cultural activities that build unity",
    ],
  },
  {
    id: "women",
    title: "CARES Women Wing",
    introduction: "When women thrive, families and communities thrive.",
    programmes: [
      "Women's economic empowerment and small business support",
      "Leadership and political participation training",
      "Support for widows and vulnerable women",
      "Awareness on women's health, rights, and safety",
      "Networks and mentorship for women in business and public life",
    ],
  },
  {
    id: "agriculture-food-security",
    title: "CARES Agriculture & Food Security Wing",
    introduction: "Feeding families, growing incomes.",
    programmes: [
      "Links for farmers to inputs, training, and extension services",
      "Support for farmer cooperatives and access to markets",
      "Awareness of government agricultural programmes",
      "Promotion of storage and processing to cut post-harvest losses",
      "Backyard and community farming for household food security",
    ],
  },
  {
    id: "civic-engagement",
    title: "CARES Civic Engagement Wing",
    introduction: "An informed citizen is an empowered citizen.",
    programmes: [
      "Voter education and citizen enlightenment",
      "Town hall meetings and community dialogues",
      "Feedback channels that carry grassroots views back to Party leadership",
      "Awareness of government programmes and how to access them",
    ],
  },
  {
    id: "partnerships-diaspora",
    title: "CARES Partnerships & Diaspora Wing",
    introduction: "Building the alliances that make lasting impact possible.",
    programmes: [
      "Partnerships with corporate sponsors and CSR programmes",
      "Relationships with philanthropic foundations and development partners",
      "Engagement of Nigerians in the diaspora to invest skills and resources at home",
      "Liaison with relevant government ministries, departments, and agencies",
    ],
  },
];

export default function WingsPage() {
  return (
    <main className="overflow-x-hidden bg-[#f7f8f3]">
      <section className="bg-[#0e2726] text-white relative">
         <HeroPattern />
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-14 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-[780px]">
            <span className="mb-4 block w-12 h-1 bg-[#de232b]" />
            <p className="mb-4 text-[0.75rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
              How we are organised
            </p>
            <h1 className="text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[0.94] text-white">
              Our Wings
            </h1>
            <p className="mt-7 max-w-[680px] text-[1.05rem] leading-[1.8] text-[#d5e3de]">
              CARES delivers its work through ten specialised Wings. Each Wing has its own lead, programmes, and partners, and all report to the National Steering Committee.
            </p>
          </div>
          <p className="border-l-2 border-[#de232b] py-1 pl-5 text-sm font-bold uppercase leading-relaxed tracking-[0.1em] text-white md:max-w-[180px]">
            10 focused teams
            <br />
            1 shared purpose
          </p>
        </div>
      </section>

      <nav
        aria-label="Wings on this page"
        className="border-b border-[#c9d8d1] bg-[#eaf1ed]"
      >
        <ol className="mx-auto grid max-w-[1240px] grid-cols-2 px-6 sm:grid-cols-3 lg:grid-cols-5">
          {wings.map((wing, index) => (
            <li key={wing.id} className="border-b border-r border-[#c9d8d1] last:border-r-0">
              <a
                href={`#${wing.id}`}
                className="group flex min-h-[62px] items-center gap-3 px-3 py-3 text-sm font-bold text-[#1e4544] transition-colors hover:bg-white focus-visible:bg-white sm:px-4"
              >
                <span className="font-mono text-[0.7rem] text-[#de232b]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-tight group-hover:text-[#de232b]">
                  {wing.title.replace("CARES ", "")}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section className="mx-auto max-w-[1240px] px-6 pb-8 pt-8 md:pt-12">
        {wings.map((wing, index) => (
          <article
            key={wing.id}
            id={wing.id}
            className="scroll-mt-28 border-b border-[#c9d8d1] py-10 first:pt-6 last:border-b-0 md:grid md:grid-cols-[minmax(260px,0.82fr)_minmax(0,1.18fr)] md:gap-14 md:py-14"
          >
            <div className="mb-7 md:mb-0">
              <p className="mb-4 font-mono text-sm font-bold text-[#de232b]">
                {String(index + 1).padStart(2, "0")}
                <span className="mx-2 text-[#9aaba4]">/</span>
                10
              </p>
              <h2 className="max-w-[470px] text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold leading-[1.05] text-[#1e4544]">
                {wing.title}
              </h2>
              <p className="mt-4 max-w-[440px] text-[0.96rem] leading-[1.75] text-[#60736d]">
                {wing.introduction}
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-[#60736d]">
                Programmes and priorities
              </h3>
              <ul className="divide-y divide-[#dfe7e2] border-y border-[#dfe7e2]">
                {wing.programmes.map((programme) => (
                  <li
                    key={programme}
                    className="flex gap-3 py-3 text-[0.9rem] leading-[1.65] text-[#294a46]"
                  >
                    <span aria-hidden="true" className="mt-[0.72em] h-1.5 w-1.5 shrink-0 bg-[#39a452]" />
                    <span>{programme}</span>
                  </li>
                ))}
              </ul>
              {wing.note && (
                <p className="mt-5 border-l-2 border-[#de232b] bg-[#f0eee8] px-4 py-3 text-sm font-semibold leading-[1.7] text-[#163331]">
                  {wing.note}
                </p>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-[#c9d8d1] bg-[#eaf1ed]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[720px] text-sm leading-[1.75] text-[#60736d]">
            Each Wing works with community members and partners, with coordination and accountability through the National Steering Committee.
          </p>
          <Link
            href="/get-involved"
            className="group inline-flex w-fit items-center gap-3 pb-2 text-sm font-extrabold uppercase tracking-wide text-[#1e4544] transition-colors"
          >
            Get involved
            <HiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
