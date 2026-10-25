"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { HiUserGroup, HiArrowRight } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import { ScrollReveal } from "@/app/components/scroll-reveal";
import { TeamMember, teamMembersData } from "../staticData";


export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMember(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMember]);

  return (
    <section className="mx-auto max-w-310 px-6 py-24">
      <ScrollReveal>
        <div className="mb-16 text-center max-w-170 mx-auto">
          <span className="mb-3 block w-10 h-1 bg-[#de232b] mx-auto" />
          <p className="mb-2 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
            Leadership & Structure
          </p>
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold tracking-tighter text-[#1e4544] leading-tight">
            Guided by experience, driven by purpose
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.7] text-[#60736d]">
            Meet the executive leadership coordinating APC CARES operations, policy implementation, and grassroots mobilization across Nigeria.
          </p>
        </div>
      </ScrollReveal>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembersData.map((member, idx) => (
          <ScrollReveal key={member.id} delay={idx * 100}>
            <div
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedMember(member);
                }
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 w-full mb-2 overflow-hidden rounded-xl bg-[#eaf1ed]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                {/* Hover overlay badge */}
                <div className="absolute inset-0 bg-[#1e4544]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 bg-white text-[#1e4544] px-4 py-2 rounded-full text-[0.8rem] font-extrabold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    View Full Profile <HiArrowRight />
                  </span>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-extrabold text-[#3c4342] tracking-tight transition-colors duration-200">
                {member.name}
              </h3>
              <p className="text-[0.82rem] font-semibold text-zinc-500 mb-1">
                {member.role}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {selectedMember && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/65 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
            onClick={() => setSelectedMember(null)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            {/* Drawer Container */}
            <div className="w-screen max-w-xl bg-white shadow-2xl overflow-y-auto flex flex-col justify-between animate-slide-left">
              {/* Header with Photo & Close Button */}
              <div>
                <div className="relative h-72 w-full bg-[#0e2726]">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover object-top opacity-90"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0e2726] via-[#0e2726]/40 to-transparent" />

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-all cursor-pointer hover:bg-zinc-800"
                    aria-label="Close profile drawer"
                  >
                    <HiX className="text-xl" />
                  </button>

                  {/* Header Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h2 className="text-3xl font-extrabold leading-tight text-white">
                      {selectedMember.name}
                    </h2>
                    <p className="text-[0.9rem] font-bold text-[#5cc3e6]">
                      {selectedMember.role}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 md:p-8 space-y-6">

                  {/* Extended Biography */}
                  <div>
                    <h4 className="text-[0.75rem] font-extrabold uppercase tracking-[0.16em] text-[#de232b] mb-2">
                      Executive Biography
                    </h4>
                    <div className="text-[0.95rem] leading-[1.75] text-[#60736d]">
                      <ReactMarkdown
                        remarkPlugins={[remarkBreaks]}
                        components={{
                          h2: ({ children }) => (
                            <h5 className="mt-6 text-sm font-extrabold uppercase tracking-[0.12em] text-[#1e4544] first:mt-0">
                              {children}
                            </h5>
                          ),
                          h3: ({ children }) => (
                            <h5 className="mt-5 text-sm font-extrabold uppercase tracking-[0.12em] text-[#1e4544] first:mt-0">
                              {children}
                            </h5>
                          ),
                          p: ({ children }) => (
                            <p className="mb-4 last:mb-0">{children}</p>
                          ),
                          strong: ({ children }) => (
                            <strong className="font-extrabold text-[#1e4544]">{children}</strong>
                          ),
                          em: ({ children }) => (
                            <em className="italic text-[#1e4544]">{children}</em>
                          ),
                          ul: ({ children }) => (
                            <ul className="mb-4 list-disc space-y-2 pl-5 last:mb-0">
                              {children}
                            </ul>
                          ),
                          ol: ({ children }) => (
                            <ol className="mb-4 list-decimal space-y-2 pl-5 last:mb-0">
                              {children}
                            </ol>
                          ),
                        }}
                      >
                        {selectedMember.extendedBio.trim().replace(/^\s+/gm, "")}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-[#c9d8d1]/60 bg-[#f7f8f3] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#60736d]">
                  <HiUserGroup className="text-[#1e4544] text-lg" /> APC CARES National Executive
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="bg-[#1e4544] px-6 py-3 text-[0.82rem] font-extrabold text-white transition-all hover:bg-[#123333] cursor-pointer"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
