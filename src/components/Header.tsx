"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Divisions", href: "#divisions" },
  { label: "Why Nexus", href: "#advantage" },
  { label: "Goals", href: "#goals" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_1px_0_0_var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="flex items-center" aria-label="Nexus MedXperts home">
          <Image
            src="/brand/nexus-medxperts-logo.png"
            alt="Nexus MedXperts"
            width={1400}
            height={390}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-navy-800/80 transition-colors hover:text-teal-600"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-navy-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-navy-700"
          >
            Get in touch
          </a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-navy-800 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy-800 hover:bg-surface"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-navy-800 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
