"use client";

import { useEffect, type ReactNode } from "react";
import { captureEvent } from "@/lib/posthog";

type TrackLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  eventName?: string;
  eventProperties?: Record<string, unknown>;
};

export function TrackLink({
  href,
  children,
  className,
  target,
  rel,
  eventName = "cta_click",
  eventProperties,
}: TrackLinkProps) {
  useEffect(() => {
    const link = document.querySelector<HTMLAnchorElement>(`a[href="${href}"][data-track-link="${eventName}"]`);
    if (!link) {
      return;
    }

    const handleClick = () => {
      const label = typeof children === "string" ? children.trim() : "link";
      captureEvent(eventName, {
        ...eventProperties,
        link_label: label,
        href,
        source: eventProperties?.source ?? "site_navigation",
      });
    };

    link.addEventListener("click", handleClick);
    return () => link.removeEventListener("click", handleClick);
  }, [children, eventName, eventProperties, href]);

  return (
    <a
      href={href}
      data-track-link={eventName}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
