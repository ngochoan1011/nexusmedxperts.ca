const GOALS = [
  { value: "500+", label: "Healthcare placements per year", div: "Recruitment" },
  { value: "1,000+", label: "Physicians advised", div: "Consulting" },
  { value: "300+", label: "Active healthcare professionals", div: "Staffing" },
  { value: "100+", label: "Clinics under management", div: "Management" },
  { value: "50,000+", label: "Patient visits annually", div: "Virtual Care" },
  { value: "#1", label: "Brokerage for healthcare pros in Ontario", div: "Real Estate" },
];

export function Goals() {
  return (
    <section id="goals" className="section">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Five-year goals · 2026–2031
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
            Ambition, measured in outcomes
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GOALS.map((g) => (
            <div
              key={g.div}
              className="rounded-2xl border border-border bg-gradient-to-b from-white to-surface p-8 text-center shadow-sm"
            >
              <p className="brand-text-gradient text-5xl font-extrabold tracking-tight">
                {g.value}
              </p>
              <p className="mt-3 text-base font-medium text-navy-800">{g.label}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-teal-600">
                {g.div}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
