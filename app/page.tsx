import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import { StatsBand } from "@/app/components/stats-band";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { DonationAccount } from "@/app/components/donation-account";
import { TrackLink } from "@/components/track-link";
import { pillars, programs } from "./staticData";


export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0e2726] py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/nextbuildr/image/upload/hero_vykhcm.webp"
            alt="Community members gathered at a grassroots empowerment event"
            fill
            className="object-cover object-center transition-transform duration-1000 scale-100 hover:scale-105"
            sizes="100vw"
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0d2524]/75 via-[#0d2524]/55 to-[#0d2524]/20" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-310 px-6">
          <div className="max-w-175">
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[0.95] tracking-[-0.06em] text-white">
              Bringing renewed hope to every community.
            </h1>
            <p className="mt-6 text-[1.1rem] leading-[1.75] text-[#d3e3dc] max-w-125">
              APC CARES brings grassroots support, citizen engagement, and
              empowerment closer to the communities that make Nigeria strong.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <TrackLink
                href="/become-a-member"
                eventName="cta_click"
                eventProperties={{ cta: "home_volunteer", source: "homepage_hero" }}
                className="group inline-flex items-center gap-2 bg-[#1e4544] px-8 py-3 text-[0.88rem] font-extrabold tracking-wider text-white transition-all duration-300 hover:bg-[#123333] hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-black/30 rounded-[80px]"
              >
                Become a member <HiArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </TrackLink>
              <TrackLink
                href="/wings"
                eventName="cta_click"
                eventProperties={{ cta: "home_explore_wings", source: "homepage_hero" }}
                className="inline-flex items-center gap-2 border border-white/70 px-8 py-2 text-[0.88rem] font-extrabold tracking-wider text-white backdrop-blur-xs transition-all duration-300 hover:bg-white hover:text-[#1e4544] hover:-translate-y-1 hover:shadow-lg rounded-[80px]"
              >
                Explore our wings <HiArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      <ScrollReveal>
        <section className="mx-auto max-w-310 px-6 py-20 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <h2 className="text-[clamp(2rem,4vw,3.7rem)] font-extrabold leading-none tracking-[-0.06em] text-[#1e4544] max-w-160">
            Making participation practical, local, and possible.
          </h2>
          <div className="md:max-w-120">
            <p className="text-[1.05rem] font-medium leading-[1.75] text-[#60736d] max-w-120">
              APC CARES is an officially recognized support group established to translate
              the policies and promises of the All Progressives Congress into visible,
              measurable change at the community level. <br /><br />We mobilize grassroots energy, foster
              civic engagement, and connect citizens across the federation with meaningful
              pathways to empowerment, resources, and sustainable growth.<br /><br />We are a people-first platform, working to ensure that every Nigerian has the opportunity to participate in the country&apos;s progress and prosperity.
            </p>
            <br />
            <p className="mt-4 md:mt-0">
              <TrackLink
                href="/about"
                eventName="cta_click"
                eventProperties={{ cta: "home_view_wings", source: "homepage_intro" }}
                className="inline-flex items-center gap-2 text-[#1e4544] font-bold underline hover:no-underline"
              >
                Learn more <HiArrowRight size={20} />
              </TrackLink>
            </p>
          </div>
        </section>
      </ScrollReveal>

      <section className="bg-[#1e4544] px-6 py-20">
        <div className="mx-auto max-w-310">
          <ScrollReveal>
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-none tracking-[-0.06em] text-white max-w-120">
                What brings us together
              </h2>
              <p className="text-[#c5d7d1] leading-[1.75] max-w-85">
                Our work is guided by a belief: stronger communities are built
                when people have the information, support, and opportunity to take
                part.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-px md:grid-cols-3">
            {pillars.map(({ num, title, body }, idx) => (
              <ScrollReveal key={num} delay={idx * 120}>
                <article className="group bg-[#285956] p-8 min-h-65 flex flex-col transition-all duration-300 hover:bg-[#2f6460] hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="text-[4rem] font-extrabold text-white tracking-wider transition-transform duration-300 group-hover:scale-105 origin-left">
                    {num}
                  </span>
                  <h3 className="mt-auto mb-2.5 text-[1.35rem] font-extrabold tracking-tight leading-[1.1] text-white">
                    {title}
                  </h3>
                  <p className="text-[0.88rem] leading-[1.65] text-[#c5d7d1]">{body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-310 px-6 py-20">
        <ScrollReveal>
          <p className="mb-3 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#de232b]">
            Thematic Scope
          </p>
          <h2 className="mb-12 text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-none tracking-[-0.06em] text-[#1e4544] max-w-150">
            Six pillars of community impact
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ iconSrc, color, label, desc }, idx) => (
            <ScrollReveal key={label} delay={(idx % 3) * 100}>
              <div
                className="group bg-[#eaf1ed] p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:bg-white"
                style={{ borderTop: `4px solid ${color}` }}
              >
                <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src={iconSrc}
                    alt={`${label} icon`}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[1.15rem] font-extrabold tracking-tight text-[#1e4544]">{label}</h3>
                <p className="text-[0.88rem] leading-[1.65] text-[#60736d]">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-[#eaf1ed] px-6 py-20 overflow-hidden">
        <ScrollReveal>
          <div className="mx-auto max-w-225 flex flex-col-reverse items-center gap-10 md:flex-row-reverse md:gap-16">
            <div className="shrink-0 overflow-hidden rounded-xl shadow-md group">
              <Image
                src="https://res.cloudinary.com/nextbuildr/image/upload/f_webp/q_auto:good/dpr_auto/who-we-are_j10p18.avif"
                alt="APC CARES — Community Access to Resources & Empowerment Services"
                width={400}
                height={400}
                className="object-contain h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <p className="mb-3 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#de232b]">
                Who we are
              </p>
              <h2 className="mb-5 text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold leading-[1.05] tracking-tight text-[#1e4544] max-w-135">
                An officially APC-approved grassroots support group
              </h2>
              <p className="text-[1rem] leading-[1.8] text-[#60736d] max-w-135">
                APC CARES exists to close the distance between the corridors of
                party leadership and the everyday realities of Nigerians in
                cities, towns, and villages across the federation — serving as a
                trusted, accountable channel through which resources, opportunities,
                and empowerment reach the people who need them most.
              </p>
              <TrackLink
                href="/about"
                eventName="cta_click"
                eventProperties={{ cta: "home_about_profile", source: "homepage_about" }}
                className="group mt-8 inline-flex items-center gap-3 text-[0.88rem] font-extrabold uppercase tracking-wider text-[#1e4544] transition-colors duration-200"
              >
                Read our full profile <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </TrackLink>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <DonationAccount />

      <section className="relative overflow-hidden min-h-100 flex items-center px-6 py-16 group">
        <Image
          src="https://res.cloudinary.com/nextbuildr/image/upload/f_webp/q_auto:good/dpr_auto/children_ogvn7s.avif"
          alt="People united together in community"
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#123333]/60 transition-opacity duration-500 group-hover:bg-[#123333]/55" />
        <div className="absolute left-0 inset-y-0 w-2 bg-[#de232b]" />

        <div className="relative z-10 mx-auto max-w-310 w-full">
          <ScrollReveal>
            <p className="mb-4 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#5cc3e6]">
              Get Involved
            </p>
            <h2 className="mb-5 text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.06em] text-white max-w-175">
              Be a part of the movement
            </h2>
            <p className="mb-10 text-[1.05rem] leading-[1.8] text-[#c5d7d1] max-w-125">
              Whether you are a community leader, youth advocate, professional,
              or concerned citizen — there is a place for you in CARES.
            </p>
            <div className="flex flex-wrap gap-4">
              <TrackLink
                href="/become-a-member"
                eventName="cta_click"
                eventProperties={{ cta: "home_get_involved", source: "homepage_cta" }}
                className="group inline-flex items-center gap-4 bg-[#1e4544] px-8 py-2 text-[0.88rem] font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#123333] hover:-translate-y-1 hover:shadow-lg rounded-[80px]"
              >
                Join today <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </TrackLink>
              <TrackLink
                href="/about"
                eventName="cta_click"
                eventProperties={{ cta: "home_learn_more", source: "homepage_cta" }}
                className="inline-flex items-center gap-4 border border-white/40 px-8 py-2 text-[0.88rem] font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-1 rounded-[80px]"
              >
                Learn more
              </TrackLink>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
