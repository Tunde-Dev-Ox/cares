"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";

const links = [
  { href: "/about", label: "About" },
  { href: "/our-mandate", label: "Our Mandate" },
  { href: "/media-room", label: "Media Room" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#c9d8d1]/60 bg-[#f7f8f3]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" aria-label="APC CARES home" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="APC CARES logo"
            width={60}
            height={60}
            className="object-contain"
            loading="eager"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.82rem] font-bold tracking-wide text-[#60736d] uppercase transition-colors duration-200 hover:text-[#de232b]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/get-involved"
          className="hidden md:inline-flex items-center gap-3 bg-[#1e4544] text-white text-[0.78rem] font-extrabold uppercase tracking-wider px-5 py-3 transition-all duration-200 hover:bg-[#123333] hover:-translate-y-0.5"
        >
          Join the movement <span aria-hidden="true"><HiArrowRight size={24} className="text-white"/></span>
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-[#1e4544]"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-[#c9d8d1]/60 bg-[#f7f8f3] px-6 py-5 flex flex-col gap-5 -z-50">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[0.9rem] font-bold text-[#1e4544] tracking-wide uppercase"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/get-involved"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-3 bg-[#1e4544] text-white text-[0.82rem] font-extrabold uppercase tracking-wider px-5 py-3 mt-2"
          >
            Join the movement <span aria-hidden="true">
              <HiArrowRight />
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
