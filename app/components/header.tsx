"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { HiArrowRight, HiChevronDown } from "react-icons/hi2";
import { captureEvent } from "@/lib/posthog";
import type { WingNavigationItem } from "@/lib/contentful";

const links = [
  { href: "/about", label: "About" },
  { href: "/our-mandate", label: "Our Mandate" },
  // { href: "/media-room", label: "Media Room" },
  { href: "/become-a-member", label: "Become a Member" },
];

export function Header({ wings }: { wings: WingNavigationItem[] }) {
  const [open, setOpen] = useState(false);
  const [wingsOpen, setWingsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const trackedElement = target.closest<HTMLElement>("[data-analytics-event]");
      if (!trackedElement) {
        return;
      }

      const payload = trackedElement.dataset.analyticsPayload
        ? JSON.parse(trackedElement.dataset.analyticsPayload)
        : {};
      captureEvent(trackedElement.dataset.analyticsEvent || "cta_click", payload);

      if (trackedElement.dataset.analyticsCloseMenu === "true") {
        setOpen(false);
        setWingsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f7f8f3] bg-opacity-90 backdrop-blur-sm shadow-md">
      <div className="mx-auto flex max-w-310 items-center justify-between px-6 py-3">
        <Link href="/" aria-label="APC CARES home" className="flex items-center gap-2 shrink-0 w-30">
          <Image
            src="/logo.png"
            alt="APC CARES logo"
            width={60}
            height={60}
            className="object-contain"
            loading="eager"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
          {links.slice(0, 1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-analytics-event="nav_click"
              data-analytics-payload={JSON.stringify({ nav_label: l.label, href: l.href, nav_location: "header" })}
              className="group relative inline-block py-2 text-[0.85rem] font-bold tracking-wide text-[#1e4544] transition-colors duration-200 hover:bg-zinc-300 px-2 rounded-full"
            >
              {l.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#de232b] transition-transform duration-300 ease-out group-focus-visible:scale-x-100 motion-reduce:transition-none"
              />
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              aria-expanded={wingsOpen}
              aria-controls="header-wings-menu"
              onClick={() => setWingsOpen((isOpen) => !isOpen)}
              data-analytics-event="nav_click"
              data-analytics-payload={JSON.stringify({ nav_label: "Our Wings", href: "/wings", nav_location: "header" })}
              className="inline-flex items-center gap-1 rounded-full px-2 py-2 text-[0.85rem] font-bold tracking-wide text-[#1e4544] transition-colors duration-200 hover:bg-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e4544] cursor-pointer"
            >
              Our Wings
              <HiChevronDown aria-hidden="true" size={18} className={`transition-transform ${wingsOpen ? "rotate-180" : ""}`} />
            </button>
            {wingsOpen && (
              <div
                id="header-wings-menu"
                className="absolute left-0 top-full z-50 mt-2 grid w-72 gap-1 rounded-md border border-[#c9d8d1] bg-[#f7f8f3] p-2 shadow-lg"
              >
                {wings.map((wing) => (
                  <Link
                    key={wing.slug}
                    href={`/wings/${wing.slug}`}
                    data-analytics-event="nav_click"
                    data-analytics-payload={JSON.stringify({ nav_label: wing.title, wing_slug: wing.slug, href: `/wings/${wing.slug}`, nav_location: "header_wings_dropdown" })}
                    className="rounded-sm px-3 py-2 text-sm font-semibold text-[#1e4544] transition-colors hover:bg-[#eaf1ed] hover:text-[#de232b] focus-visible:bg-[#eaf1ed] focus-visible:outline-none"
                  >
                     {wing.title.charAt(0).toUpperCase() + wing.title.slice(1)} wing
                  </Link>
                ))}
              </div>
            )}
          </div>
          {links.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-analytics-event="nav_click"
              data-analytics-payload={JSON.stringify({ nav_label: l.label, href: l.href, nav_location: "header" })}
              className="group relative inline-block py-2 text-[0.85rem] font-bold tracking-wide text-[#1e4544] transition-colors duration-200 hover:bg-zinc-300 px-2 rounded-full"
            >
              {l.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#de232b] transition-transform duration-300 ease-out group-focus-visible:scale-x-100 motion-reduce:transition-none"
              />
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          data-analytics-event="cta_click"
          data-analytics-payload={JSON.stringify({ cta: "header_contact", href: "/contact", source: "header" })}
          className="hidden md:inline-flex items-center gap-3 bg-[#1e4544] text-white text-[0.85rem] font-extrabold tracking-wider px-5 py-3 transition-all duration-200 hover:bg-[#123333] hover:-translate-y-0.5 rounded-[80px]"
        >
          Partner with us <span aria-hidden="true"><HiArrowRight size={20} className="text-white" /></span>
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-[#1e4544]"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#c9d8d1]/60 bg-[#f7f8f3] px-6 py-5 flex flex-col gap-5 -z-50">
          {links.slice(0, 1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-analytics-event="nav_click"
              data-analytics-payload={JSON.stringify({ nav_label: l.label, href: l.href, nav_location: "header_mobile" })}
              data-analytics-close-menu="true"
              className="group relative w-fit py-1 text-[0.9rem] font-bold text-[#1e4544] tracking-wide transition-colors duration-200 hover:text-[#de232b] focus-visible:text-[#de232b]"
            >
              {l.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#de232b] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
              />
            </Link>
          ))}
          <div>
            <button
              type="button"
              aria-expanded={wingsOpen}
              aria-controls="mobile-header-wings-menu"
              onClick={() => setWingsOpen((isOpen) => !isOpen)}
              data-analytics-event="nav_click"
              data-analytics-payload={JSON.stringify({ nav_label: "Our Wings", href: "/wings", nav_location: "header_mobile" })}
              className="inline-flex items-center gap-2 py-1 text-[0.9rem] font-bold tracking-wide text-[#1e4544]"
            >
              Our Wings
              <HiChevronDown aria-hidden="true" className={`transition-transform ${wingsOpen ? "rotate-180" : ""}`} />
            </button>
            {wingsOpen && (
              <div id="mobile-header-wings-menu" className="mt-2 flex flex-col gap-2 border-l-2 border-[#c9d8d1] pl-4">
                {wings.map((wing) => (
                  <Link
                    key={wing.slug}
                    href={`/wings/${wing.slug}`}
                    data-analytics-event="nav_click"
                    data-analytics-payload={JSON.stringify({ nav_label: wing.title, wing_slug: wing.slug, href: `/wings/${wing.slug}`, nav_location: "header_wings_dropdown_mobile" })}
                    data-analytics-close-menu="true"
                    className="w-fit py-1 text-sm font-semibold text-[#1e4544] hover:text-[#de232b] focus-visible:text-[#de232b]"
                  >
                    {wing.title.charAt(0).toUpperCase() + wing.title.slice(1)} wing
                  </Link>
                ))}
              </div>
            )}
          </div>
          {links.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-analytics-event="nav_click"
              data-analytics-payload={JSON.stringify({ nav_label: l.label, href: l.href, nav_location: "header_mobile" })}
              data-analytics-close-menu="true"
              className="group relative w-fit py-1 text-[0.9rem] font-bold text-[#1e4544] tracking-wide transition-colors duration-200 hover:text-[#de232b] focus-visible:text-[#de232b]"
            >
              {l.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#de232b] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
              />
            </Link>
          ))}
          <Link
            href="/contact"
            data-analytics-event="cta_click"
            data-analytics-payload={JSON.stringify({ cta: "header_contact_mobile", href: "/contact", source: "header_mobile" })}
            data-analytics-close-menu="true"
            className="inline-flex items-center justify-center gap-3 bg-[#1e4544] text-white text-[0.82rem] font-extrabold tracking-wider px-5 py-3 mt-2 rounded-[80px]"
          >
            Partner with us <span aria-hidden="true">
              <HiArrowRight />
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
