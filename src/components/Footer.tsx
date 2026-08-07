import { Mark } from "./Mark";

const COLUMNS = [
  {
    title: "Divisions",
    links: [
      "Recruitment",
      "Consulting",
      "Staffing",
      "Management",
      "Virtual Care",
      "Real Estate",
    ],
  },
  {
    title: "Company",
    links: ["Ecosystem", "Why Nexus", "Five-Year Goals", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900 text-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Mark className="h-9 w-9" tone="light" />
              <span className="text-xl font-extrabold tracking-tight">
                NEXUS <span className="font-semibold text-teal-400">MED</span>XPERTS
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Canada&apos;s one-stop healthcare business ecosystem — connecting
              professionals, clinics, investors, and patients under one trusted brand.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#divisions" className="text-sm text-white/70 transition-colors hover:text-teal-300">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Nexus MedXperts. All rights reserved.</p>
          <p>Real Xperts Realty Inc., Brokerage · Ontario, Canada</p>
        </div>
      </div>
    </footer>
  );
}
