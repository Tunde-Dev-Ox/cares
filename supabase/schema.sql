create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null default '',
  category text not null,
  message text not null,
  consent_at timestamptz not null,
  created_at timestamptz not null default now()
);

create table if not exists public.member_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  voter_card_id text not null default '',
  email text not null,
  phone text not null,
  state text not null,
  lga text not null,
  ward text not null default '',
  role_interest text not null,
  message text not null default '',
  consent_at timestamptz not null,
  created_at timestamptz not null default now()
);

alter table public.member_applications
  add column if not exists voter_card_id text not null default '';

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

create index if not exists member_applications_created_at_idx
  on public.member_applications (created_at desc);

alter table public.contact_submissions enable row level security;
alter table public.member_applications enable row level security;

revoke all on public.contact_submissions from anon, authenticated;
revoke all on public.member_applications from anon, authenticated;
grant insert on public.contact_submissions to service_role;
grant insert on public.member_applications to service_role;
