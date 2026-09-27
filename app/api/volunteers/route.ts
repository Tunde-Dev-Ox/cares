import {
  errorResponse,
  isRateLimited,
  isSameOrigin,
  readJson,
  saveSubmission,
  successResponse,
  volunteerSubmissionSchema,
} from "@/lib/forms";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return errorResponse("Invalid request origin.", 403);
  }

  if (isRateLimited(request)) {
    return errorResponse("Too many submissions. Please try again later.", 429);
  }

  const parsedBody = await readJson(request);
  if ("error" in parsedBody) {
    return errorResponse(parsedBody.error ?? "Invalid submission.", 400);
  }

  const result = volunteerSubmissionSchema.safeParse(parsedBody.data);
  if (!result.success) {
    return errorResponse("Please check the submitted fields.", 400);
  }

  if (result.data.website) {
    return successResponse();
  }

  const payload = Object.fromEntries(
    Object.entries(result.data).filter(([key]) => key !== "website"),
  );

  try {
    await saveSubmission("volunteer", payload);
    return successResponse();
  } catch {
    return errorResponse("The registration could not be saved. Please try again.", 503);
  }
}
