const STEPS = [
  { label: "Medical student", sub: "Where the journey begins" },
  { label: "Recruitment", sub: "First placement" },
  { label: "Consulting", sub: "Structure & strategy" },
  { label: "Staffing", sub: "Build your team" },
  { label: "Management", sub: "Run the clinic" },
  { label: "Virtual Care", sub: "Scale your reach" },
  { label: "Real Estate", sub: "Invest & grow" },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="section relative overflow-hidden bg-navy-800 text-white">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-20">
        <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-teal-500/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-ocean-500/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">
            The Nexus advantage
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            A lifecycle relationship, not a one-time transaction
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Clients progress through multiple services within the ecosystem — creating
            long-term partnerships and recurring value at every stage.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s.label}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-teal-400/40 hover:bg-white/[0.08]"
            >
              <span className="brand-text-gradient text-2xl font-extrabold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-lg font-semibold">{s.label}</p>
              <p className="mt-0.5 text-sm text-white/60">{s.sub}</p>
            </li>
          ))}
          <li className="relative flex flex-col justify-center rounded-2xl border border-teal-400/30 bg-teal-500/10 p-5">
            <p className="text-lg font-semibold text-teal-300">One trusted brand</p>
            <p className="mt-0.5 text-sm text-white/70">
              Every step, supported by Nexus MedXperts.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
