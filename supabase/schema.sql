-- Nexus MedXperts — landing page lead capture
-- Run in the Supabase SQL editor (Project → SQL → New query).

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  phone       text,
  interest    text not null default 'General Inquiry',
  message     text,
  source      text not null default 'landing'
);

-- Enable Row Level Security. Inserts happen via the service role key
-- (server action), which bypasses RLS — so no public insert policy is needed.
-- With RLS on and no policies, the anon/public key cannot read or write.
alter table public.leads enable row level security;

create index if not exists leads_created_at_idx on public.leads (created_at desc);
