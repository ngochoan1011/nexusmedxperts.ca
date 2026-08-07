# Nexus MedXperts — Website

Landing page for **nexusmedxperts.ca** — Canada's one-stop healthcare business
ecosystem.

**Stack:** Next.js 16 (App Router, TypeScript) · Tailwind CSS v4 · Supabase · Vercel

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase keys
npm run dev
```

Open http://localhost:3000. The site renders fully without Supabase configured —
the contact form only needs it to persist leads (otherwise it shows an email
fallback).

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run [`supabase/schema.sql`](supabase/schema.sql) to create
   the `leads` table (RLS enabled; writes go through the service role).
3. Copy **Project Settings → API** values into `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only — never expose client-side)

## Deploy to Vercel

1. Push this repo and import the `web/` directory as a Vercel project
   (Framework preset: **Next.js**).
2. Add the three environment variables above in **Vercel → Settings →
   Environment Variables**.
3. Add the domain **nexusmedxperts.ca** under **Settings → Domains** and point
   DNS as instructed by Vercel.

## Structure

```
src/
  app/
    layout.tsx      SEO metadata, fonts
    page.tsx        Section composition
    actions.ts      submitContact server action (lead capture)
    globals.css     Brand tokens & design system
  components/       Header, Hero, Divisions, Ecosystem, Advantage, Goals, Contact, Footer, Mark
  lib/supabase/     Server Supabase client
public/brand/       Logo assets
supabase/schema.sql Database schema
```

Branding reference: [`../docs/branding.md`](../docs/branding.md).
