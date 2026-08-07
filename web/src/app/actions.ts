"use server";

import { getServiceSupabase } from "@/lib/supabase/server";

export type ContactState = {
  ok: boolean;
  message: string;
};

const DIVISIONS = [
  "Recruitment",
  "Consulting",
  "Staffing",
  "Management",
  "Virtual Care",
  "Real Estate",
  "General Inquiry",
];

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot — bots fill hidden fields, humans don't.
  if ((formData.get("company_website") as string)?.trim()) {
    return { ok: true, message: "Thanks — we'll be in touch shortly." };
  }

  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim() || null;
  const interest = (formData.get("interest") as string)?.trim() || "General Inquiry";
  const message = (formData.get("message") as string)?.trim() || null;

  if (!name || name.length < 2) {
    return { ok: false, message: "Please enter your name." };
  }
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email ?? "");
  if (!emailOk) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (!DIVISIONS.includes(interest)) {
    return { ok: false, message: "Please choose a valid area of interest." };
  }

  const supabase = getServiceSupabase();
  if (!supabase) {
    // No backend configured yet — don't lose the lead silently.
    return {
      ok: false,
      message:
        "Our form isn't connected yet. Please email us at hello@nexusmedxperts.ca.",
    };
  }

  const { error } = await supabase.from("leads").insert({
    name,
    email,
    phone,
    interest,
    message,
    source: "landing",
  });

  if (error) {
    return {
      ok: false,
      message: "Something went wrong. Please try again or email hello@nexusmedxperts.ca.",
    };
  }

  return { ok: true, message: "Thank you — a Nexus MedXperts advisor will reach out soon." };
}
