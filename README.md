# APC CARES

A small, static Next.js website for APC CARES, a grassroots support platform
focused on community connection, citizen engagement, and empowerment.

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Routes

- `/` - Home
- `/about` - About APC CARES
- `/our-work` - Focus areas
- `/get-involved` - Supporter and volunteer pathway
- `/style-guide` - Internal visual reference

## Checks

```bash
npm run lint
npm run build
```

## Form API setup

The contact and volunteer forms submit to `/api/contact` and `/api/volunteers`.
They validate payloads on the server, require same-origin requests and consent,
reject honeypot submissions, enforce a request limit, and store accepted
submissions in separate Supabase tables: `contact_submissions` and
`volunteer_applications`.

1. Create a Supabase project.
2. Run [`supabase/schema.sql`](supabase/schema.sql) in the Supabase SQL editor.
3. Copy `.env.example` to `.env.local` and set `SUPABASE_URL` and
	`SUPABASE_SERVICE_ROLE_KEY`.
4. Keep the service-role key server-only. Never prefix it with
	`NEXT_PUBLIC_` or expose it to browser code.

The in-process rate limiter is a fallback for a single instance. Production
deployments with multiple or serverless instances should also apply distributed
rate limiting at the hosting edge or with Redis/Upstash.

Confirm all organisation, Party, programme, contact, and brand claims before
publishing.
