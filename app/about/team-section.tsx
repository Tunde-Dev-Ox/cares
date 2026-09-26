"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiCheckCircle, HiUserGroup, HiEnvelope, HiMapPin, HiArrowRight } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import { ScrollReveal } from "@/app/components/scroll-reveal";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  extendedBio: string;
}

export const teamMembersData: TeamMember[] = [
  {
    id: "bukunola-odusanwo",
    name: "Dr. Bukunola Odusanwo",
    role: "National Coordinator",
    image: "/bukunola.jpeg",
    extendedBio:
      "Dr. Aliyu O. Bello is a distinguished administrator and policy strategist with nearly two decades of public leadership experience. Having served in key advisory capacities across federal and state governance structures, he leads APC CARES with a clear mandate to connect party vision directly to grassroots impact. He oversees national executive operations, party alignment, and compliance across all 36 state chapters.",
  },
  {
    id: "odebode-joseph",
    name: "Dr. Odebode Joseph",
    role: "Financial Secretary",
    image: "/joseph.jpeg",
    extendedBio:
      `Dr. Odebode Joseph Olusegun is a Nigerian medical doctor, healthcare entrepreneur, and advocate for innovation in healthcare delivery. He serves as Financial Secretary of APC CARES, bringing to the role the discipline, integrity, and organisational leadership he has built across his medical and business career. Dr. Odebode graduated in Medicine from Obafemi Awolowo University (OAU), Ile-Ife, and holds a Master of Advanced Studies (MAS) in Human Nutrition and Health from ETH Zurich, Switzerland. He received specialised training in Laser Medicine in Switzerland, is a certified Laser Safety Officer through UVEX Germany, and is a member of the Swiss Laser Medicine Association. He has further strengthened his leadership and technology expertise with certifications in Leadership in Healthcare from the University of Washington and in AI and Agentic Systems in Healthcare from Johns Hopkins University. He is the Founder and Chief Executive Officer of Healingrays Healthcare Services Ltd, an organisation providing innovative, evidence-based medical services while promoting education and research. Through Healingrays, he is pioneering the development of laser medicine in Nigeria by establishing specialist clinical services, running professional training programmes, and advocating for regulatory frameworks that ensure safe and effective practice.As an entrepreneur who has built and managed a healthcare enterprise, Dr. Odebode understands the importance of sound financial stewardship, transparency, and accountability. He is committed to ensuring that APC CARES resources are managed responsibly and directed toward programmes that deliver real impact in the lives of the communities it serves. His broader vision is to position Nigeria and West Africa as centres of excellence in healthcare and to expand access to quality services for all, a vision that aligns closely with the APC CARES mission of community access and empowerment.`,
  },
  {
    id: "bamidele-paul",
    name: "Dr. Bamidele Paul",
    role: "National Secretary",
    image: "/founder1.jpeg",
    extendedBio:
      `Dr. Bamidele Paul Atiba is a Senior Lecturer, Physician, Public Health Specialist and governance advocate.
With a background spanning clinical medicine, public health leadership, programme planning, quality improvement and monitoring and evaluation, his work has focused on strengthening systems and translating policy into real impact for people.

He serves on the boards of charity organisations within and outside Nigeria dedicated to supporting people and improving community well-being.

A committed progressive and loyal member of the All Progressives Congress family, Dr. Atiba is passionate about good governance, accountable leadership, and building a more inclusive, people-centred democracy in line with the ideals of the APC.`,
  },
  {
    id: "kabiesi-ademola",
    name: "Kábíèsí Adémólá",
    role: "Director of Strategy, Innovation, and Technology",
    image: "/kabiesi.jpeg",
    extendedBio:
      `Kábíèsí Adémólá (Ademola Taofik) is a technology founder, AI innovator, and communications strategist with more than 18 years of experience using technology and media to widen access and empower communities.

As Founder and Chief Technology Officer of Lodum AI Banking, he builds tools that bring financial services to underserved Nigerians through everyday platforms like WhatsApp and Telegram. 

His other ventures, including Open School Africa, Holu AI, and HarePay, focus on digital learning, financial inclusion, and opportunity for young people and small businesses. 

Through the Kabiesi Ademola Centre, he mentors youth, creators, and emerging tech professionals.

He has worked closely with government and community institutions, advising the Department of Petroleum Resources on public communications and creating Ulera Ekiti, a public health awareness program that reached all 16 local government areas of Ekiti State. 

He has also served as production consultant to the Office of the Ooni of Ife on cultural heritage initiatives, and lectured in media arts at Ekiti State University.

At APC CARES, he leads the strategy and technology that help connect Nigerians to the resources, services, and opportunities they need to thrive.`,
  },
  {
    id: "gbolahan-adekoyejo",
    name: "Gbolahan Adekoyejo",
    role: "Member Board of Trustees",
    image: "/gbolahan.jpeg",
    extendedBio:
      `Gbolahan Adekoyejo Magbagbeola is an experienced administrator, educator, and public affairs professional with over three decades of experience spanning education, government, administration, and organizational leadership. He currently serves as Co-Proprietor and Administrator of Potter’s Place Nursery & Primary School, Abeokuta, where he provides strategic leadership, oversees staff development and curriculum implementation, and builds strong relationships with parents, stakeholders, and the wider community. Earlier in his career, Gbolahan served as a Senior Legislative Assistant at the Nigerian National Assembly and as Personal Assistant to the Honourable Minister of State for Education, where he supported legislative, policy, administrative, and stakeholder engagement activities. He holds a Bachelor of Arts degree in French from the University of Ibadan and has received training in leadership, legislative administration, and organizational development. He is also the author of Civic Education for Senior Secondary Schools (Books 1–3).`,
  }
];

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
    <section className="mx-auto max-w-[1240px] px-6 py-24">
      <ScrollReveal>
        <div className="mb-16 text-center max-w-[680px] mx-auto">
          <span className="mb-3 block w-10 h-1 bg-[#de232b] mx-auto" />
          <p className="mb-2 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#de232b]">
            Leadership & Structure
          </p>
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold tracking-[-0.05em] text-[#1e4544] leading-tight">
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
              <p className="text-[0.82rem] font-extrabold text-zinc-700 mb-1">
                {member.role}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ── SIDE DRAWER MODAL ────────────────────────────────────────── */}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2726] via-[#0e2726]/40 to-transparent" />

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
                    <p className="text-[0.95rem] leading-[1.75] text-[#60736d]">
                      {selectedMember.extendedBio}
                    </p>
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
