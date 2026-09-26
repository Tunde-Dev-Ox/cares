import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/our-mandate", label: "Our Mandate" },
  { href: "/media-room", label: "Media Room" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact Secretariat" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[#c9d8d1]">
      {/* Top band */}
      <div className="mx-auto max-w-[1240px] px-6 py-14 grid grid-cols-1 gap-12 md:grid-cols-3">
        {/* Brand column */}
        <div>
          <Link href="/" aria-label="APC CARES home" className="inline-block mb-4">
            <Image
              src="/logo.png"
              alt="APC CARES logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </Link>
          <p className="text-[0.8rem] text-[#60736d] leading-relaxed max-w-[260px]">
            A grassroots-facing support group translating APC policies and
            promises into visible, measurable change at community level.
          </p>
          {/* Social icons */}
          <div className="flex gap-4 mt-5">
            {[
              { icon: <FaXTwitter />, href: "#", label: "Twitter / X" },
              { icon: <FaFacebookF />, href: "#", label: "Facebook" },
              { icon: <FaInstagram />, href: "#", label: "Instagram" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 rounded-sm border border-[#c9d8d1] text-[#60736d] text-sm transition-all duration-200 hover:border-[#1e4544] hover:text-[#1e4544] hover:-translate-y-0.5"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav links column */}
        <div>
          <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-[#de232b] mb-4">
            Navigation
          </p>
          <nav className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[0.82rem] font-bold text-[#60736d] transition-colors duration-200 hover:text-[#de232b]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Tagline / note column */}
        <div className="md:text-right">
          <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-[#de232b] mb-4">
            Our Commitment
          </p>
          <p className="text-[0.82rem] text-[#60736d] leading-relaxed">
            Every CARES programme is tracked from planning through delivery,
            with impact reports made available to APC leadership and the public.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#c9d8d1]">
        <div className="mx-auto max-w-[1240px] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.73rem] text-[#60736d]">
            © {new Date().getFullYear()} APC CARES. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[0.73rem] text-[#60736d] transition-colors duration-200 hover:text-[#de232b]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
