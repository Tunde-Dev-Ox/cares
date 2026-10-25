import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { HeroPattern } from "@/app/components/hero-pattern";
import { wings } from "@/app/staticData";

export const metadata: Metadata = {
    title: "Our Wings | APC Cares | Community Programmes & Grassroots Support",
    description:
        "Explore the ten specialised APC Cares Wings and the programmes powering grassroots support, community engagement, and local development across Nigeria.",
    alternates: {
        canonical: "/wings",
    },
};

export default function WingsPage() {
    return (
        <main className="overflow-x-hidden bg-[#f7f8f3]">
            <section className="bg-[#0e2726] text-white relative">
                <HeroPattern />
                <div className="mx-auto grid max-w-310 gap-10 px-6 py-14 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                    <div className="max-w-195">
                        <span className="mb-4 block w-12 h-1 bg-[#de232b]" />
                        <p className="mb-4 text-[0.75rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
                            How we are organised
                        </p>
                        <h1 className="text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[0.94] text-white">
                            Our Wings
                        </h1>
                        <p className="mt-7 max-w-170 text-[1.05rem] leading-[1.8] text-[#d5e3de]">
                            CARES delivers its work through ten specialised Wings. Each Wing has its own lead, programmes, and partners, and all report to the National Steering Committee.
                        </p>
                    </div>
                    <p className="border-l-2 border-[#de232b] py-1 pl-5 text-sm font-bold uppercase leading-relaxed tracking-widest text-white md:max-w-45">
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
                <ol className="mx-auto grid max-w-310 grid-cols-2 px-6 sm:grid-cols-3 lg:grid-cols-5">
                    {wings.map((wing, index) => (
                        <li key={wing.id} className="border-b border-r border-[#c9d8d1] last:border-r-0">
                            <a
                                href={`#${wing.id}`}
                                className="group flex min-h-15.5 items-center gap-3 px-3 py-3 text-sm font-bold text-[#1e4544] transition-colors hover:bg-white focus-visible:bg-white sm:px-4"
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

            <section className="mx-auto max-w-310 px-6 pb-8 pt-8 md:pt-12">
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
                            <h2 className="max-w-100 text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold leading-[1.05] text-[#1e4544]">
                                {wing.title}
                            </h2>
                            <p className="mt-4 max-w-110 text-[0.96rem] leading-[1.75] text-[#60736d]">
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
                            <div className="mt-2">
                                <Link href={`/wings/${wing.id}`} className="inline-flex items-center gap-2 mt-2 font-semibold text-[#1e4544]">
                                    Learn more  <HiArrowRight />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </section>

            <section className="border-t border-[#c9d8d1] bg-[#eaf1ed]">
                <div className="mx-auto flex max-w-310 flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-180 text-base leading-[1.75] text-[#60736d] ">
                        Each Wing works with community members and partners, with coordination and accountability through the National Steering Committee.
                    </p>
                    <Link
                        href="/become-a-member"
                        className="group inline-flex w-fit items-center gap-3 pb-2 text-sm font-extrabold uppercase tracking-wide text-[#1e4544] transition-colors"
                    >
                        Become a member
                        <HiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
