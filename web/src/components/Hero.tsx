import { Mark } from "./Mark";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient brand backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute -left-32 top-24 h-[28rem] w-[28rem] rounded-full bg-ocean-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--navy-800) 1px, transparent 1px), linear-gradient(90deg, var(--navy-800) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:pt-24 md:pb-24">
        <div className="animate-fade-up mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-600 backdrop-blur">
            <Mark className="h-4 w-4" />
            Canada&apos;s healthcare ecosystem
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-800 sm:text-5xl md:text-6xl">
            One trusted partner for every stage of a{" "}
            <span className="brand-text-gradient">healthcare career</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            Nexus MedXperts connects healthcare professionals, clinics, investors, and
            patients — with end-to-end solutions from graduation to retirement, all under
            one roof.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-full bg-navy-800 px-7 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-navy-800/15 transition-transform hover:-translate-y-0.5 hover:bg-navy-700 sm:w-auto"
            >
              Talk to an advisor
            </a>
            <a
              href="#divisions"
              className="w-full rounded-full border border-border bg-white px-7 py-3.5 text-center text-base font-semibold text-navy-800 transition-colors hover:border-teal-500 hover:text-teal-600 sm:w-auto"
            >
              Explore our divisions
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">
            Recruitment · Consulting · Staffing · Management · Virtual Care · Real Estate
          </p>
        </div>
      </div>
    </section>
  );
}
