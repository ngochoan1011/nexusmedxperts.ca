const LIFECYCLE = [
  "Career placement",
  "Contract negotiation",
  "Professional corporation setup",
  "Staffing solutions",
  "Clinic management",
  "Virtual care",
  "Home buying",
  "Medical office acquisition",
  "Real estate investment",
  "Financial & business planning",
];

export function Advantage() {
  return (
    <section id="advantage" className="section bg-surface">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Competitive advantage
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
              A complete lifecycle solution — not a single service
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Unlike traditional firms that specialize in only one area, Nexus MedXperts
              brings recruitment, consulting, staffing, clinic management, virtual care,
              and real estate together under one trusted brand. The result: recurring
              value, stronger loyalty, and a partner for every stage of your career.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {LIFECYCLE.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-navy-800 shadow-sm"
              >
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full brand-gradient text-white">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
