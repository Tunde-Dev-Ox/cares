"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { captureEvent, initPostHog } from "@/lib/posthog";

export function PostHogProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initPostHog();
  }, []);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const url = searchParams?.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;

    captureEvent("$pageview", {
      $current_url: url,
      page_path: pathname,
    });
  }, [pathname, searchParams]);

  return null;
}
