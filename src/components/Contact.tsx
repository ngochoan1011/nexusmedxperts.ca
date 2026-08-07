"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions";

const INTERESTS = [
  "Recruitment",
  "Consulting",
  "Staffing",
  "Management",
  "Virtual Care",
  "Real Estate",
  "General Inquiry",
];

const initial: ContactState = { ok: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-teal-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-500/20 transition-all hover:-translate-y-0.5 hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

const field =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy-800 outline-none transition-colors placeholder:text-muted/70 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20";

export function Contact() {
  const [state, formAction] = useActionState(submitContact, initial);

  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-xl shadow-navy-800/5">
          <div className="grid lg:grid-cols-5">
            {/* Left: pitch */}
            <div className="relative flex flex-col justify-center bg-navy-800 p-8 text-white sm:p-10 lg:col-span-2">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-500/20 blur-3xl" />
              <h2 className="text-3xl font-bold tracking-tight">Let&apos;s build your next chapter</h2>
              <p className="mt-4 text-white/70">
                Tell us where you are in your journey — recruitment, a new clinic, or your
                first medical office. A Nexus MedXperts advisor will reach out.
              </p>
              <dl className="mt-8 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-teal-400">✉</span>
                  <a href="mailto:hello@nexusmedxperts.ca" className="text-white/90 hover:text-teal-300">
                    hello@nexusmedxperts.ca
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-teal-400">◍</span>
                  <span className="text-white/90">Ontario, Canada</span>
                </div>
              </dl>
            </div>

            {/* Right: form */}
            <div className="p-8 sm:p-10 lg:col-span-3">
              <form action={formAction} className="space-y-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-800">
                      Full name <span className="text-teal-500">*</span>
                    </label>
                    <input id="name" name="name" required placeholder="Dr. Jane Doe" className={field} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-800">
                      Email <span className="text-teal-500">*</span>
                    </label>
                    <input id="email" name="email" type="email" required placeholder="jane@clinic.ca" className={field} />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-800">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" placeholder="(416) 000-0000" className={field} />
                  </div>
                  <div>
                    <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-navy-800">
                      I&apos;m interested in
                    </label>
                    <select id="interest" name="interest" defaultValue="General Inquiry" className={field}>
                      {INTERESTS.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">
                    How can we help?
                  </label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us a little about your goals…" className={field} />
                </div>

                <SubmitButton />

                {state.message && (
                  <p
                    role="status"
                    className={`rounded-xl px-4 py-3 text-sm font-medium ${
                      state.ok
                        ? "bg-teal-500/10 text-teal-700"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {state.message}
                  </p>
                )}

                <p className="text-xs text-muted">
                  By submitting, you agree to be contacted by Nexus MedXperts. We respect
                  your privacy and never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
