import { z } from "zod";

const name = z.string().trim().min(2).max(100);
const email = z.string().trim().email().max(254);
const shortText = (max: number) => z.string().trim().max(max);

export const contactSubmissionSchema = z.object({
  name,
  email,
  subject: shortText(160),
  category: z.enum([
    "General Inquiry",
    "Community Needs Request",
    "State & LGA Coordination",
    "Media & Press Inquiry",
    "Partnership & Sponsorship",
  ]),
  message: z.string().trim().min(10).max(5000),
  consent: z.literal(true),
  website: z.string().max(200).optional().default(""),
});

export const volunteerSubmissionSchema = z.object({
  fullName: name,
  email,
  phone: z.string().trim().regex(/^\+?[0-9 ()-]{7,20}$/),
  state: z.string().trim().min(2).max(40),
  lga: shortText(80).pipe(z.string().min(2)),
  ward: shortText(80),
  roleInterest: z.enum([
    "Ward Volunteer Champion",
    "LGA Steering Committee",
    "Youth & Women Ambassador",
    "Healthcare Volunteer",
    "Education & Mentorship",
    "Media & Digital Communications",
  ]),
  message: shortText(2000),
  consent: z.literal(true),
  website: z.string().max(200).optional().default(""),
});

const requestLimit = 5;
const requestWindowMs = 10 * 60 * 1000;
const requestCounts = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "unknown";
}

export function isRateLimited(request: Request) {
  const now = Date.now();
  if (requestCounts.size > 10_000) {
    for (const [key, entry] of requestCounts) {
      if (entry.resetAt <= now) requestCounts.delete(key);
    }
  }

  const key = getClientKey(request);
  const current = requestCounts.get(key);

  if (!current || current.resetAt <= now) {
    requestCounts.set(key, { count: 1, resetAt: now + requestWindowMs });
    return false;
  }

  current.count += 1;
  return current.count > requestLimit;
}

export function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return !origin || origin === new URL(request.url).origin;
}

export async function readJson(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return { error: "JSON content is required." } as const;
  }

  const body = await request.text();
  if (new TextEncoder().encode(body).byteLength > 20_000) {
    return { error: "Submission is too large." } as const;
  }

  try {
    const parsed: unknown = JSON.parse(body);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return { error: "Invalid submission." } as const;
    }
    return { data: parsed } as const;
  } catch {
    return { error: "Invalid submission." } as const;
  }
}

export async function saveSubmission(
  formType: "contact" | "volunteer",
  payload: Record<string, unknown>,
) {
  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Submission storage is not configured.");
  }

  const table = formType === "contact" ? "contact_submissions" : "volunteer_applications";
  const row = formType === "contact"
    ? {
        name: payload.name,
        email: payload.email,
        subject: payload.subject,
        category: payload.category,
        message: payload.message,
        consent_at: new Date().toISOString(),
      }
    : {
        full_name: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        state: payload.state,
        lga: payload.lga,
        ward: payload.ward,
        role_interest: payload.roleInterest,
        message: payload.message,
        consent_at: new Date().toISOString(),
      };

  const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
    signal: AbortSignal.timeout(5000),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Submission storage failed.");
  }
}

export function successResponse() {
  return Response.json(
    { ok: true },
    { status: 201, headers: { "Cache-Control": "no-store" } },
  );
}

export function errorResponse(message: string, status: number) {
  return Response.json(
    { ok: false, error: message },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}
