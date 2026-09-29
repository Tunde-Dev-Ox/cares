import posthog from "posthog-js";

export function initPostHog() {
  if (typeof window === "undefined") {
    return;
  }

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

  if (!key || !key.trim()) {
    return;
  }

  if (!(posthog as typeof posthog & { __loaded?: boolean }).__loaded) {
    posthog.init(key, {
      api_host: host,
      capture_pageview: false,
      capture_pageleave: true,
      autocapture: true,
      disable_session_recording: false,
      loaded: () => {
        posthog.capture("posthog_loaded");
      },
    });
  }
}

export function captureEvent(
  eventName: string,
  properties: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key || !key.trim()) {
    return;
  }

  posthog.capture(eventName, {
    ...properties,
    env: process.env.NODE_ENV ?? "development",
  });
}
