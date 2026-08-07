import type { ReactNode } from "react";

type Division = {
  n: string;
  title: string;
  tagline: string;
  points: string[];
  icon: ReactNode;
};

const S = "1.6";
const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: S,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const DIVISIONS: Division[] = [
  {
    n: "01",
    title: "Recruitment",
    tagline: "Connecting healthcare talent",
    points: [
      "Physician & nurse recruitment",
      "Allied health & executive search",
      "International recruitment",
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Consulting",
    tagline: "Building better healthcare businesses",
    points: [
      "Contract negotiation & tax planning",
      "Professional corporation setup",
      "Clinic setup & expansion strategy",
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M3 3v18h18" />
        <path d="M7 15l4-5 3 3 5-7" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Staffing",
    tagline: "Reliable healthcare workforce",
    points: [
      "Temporary RN, RPN, PSW & MOA",
      "Pharmacists & clinic assistants",
      "Permanent office & billing staff",
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Management",
    tagline: "Complete clinic management",
    points: [
      "HR, payroll & bookkeeping",
      "Compliance, scheduling & EMR support",
      "Billing, credentialing & licensing",
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M12 2a3 3 0 0 0-3 3v1H7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V5a3 3 0 0 0-3-3Z" />
        <path d="M12 11v4M10 13h4" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Virtual Care",
    tagline: "Healthcare without boundaries",
    points: [
      "Virtual family medicine & walk-in",
      "Mental health & specialist referrals",
      "Secure portal & e-prescriptions",
    ],
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
        <path d="M12 8v4M10 10h4" />
      </svg>
    ),
  },
  {
    n: "06",
    title: "Real Estate",
    tagline: "Real Xperts Realty Inc., Brokerage",
    points: [
      "Medical office purchase & leasing",
      "Clinic investment & land acquisition",
      "First Home for Doctors program",
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
];

export function Divisions() {
  return (
    <section id="divisions" className="section bg-surface">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Six divisions, one ecosystem
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
            End-to-end solutions for healthcare professionals
          </h2>
          <p className="mt-4 text-lg text-muted">
            Each division stands on its own — and works together to support you at every
            stage of your career.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIVISIONS.map((d) => (
            <article
              key={d.n}
              className="group relative flex flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-xl hover:shadow-navy-800/5"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 text-navy-700 transition-colors group-hover:bg-navy-800 group-hover:text-white">
                  {d.icon}
                </span>
                <span className="text-sm font-bold tracking-widest text-border transition-colors group-hover:text-teal-500">
                  {d.n}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-navy-800">{d.title}</h3>
              <p className="mt-1 text-sm font-medium text-teal-600">{d.tagline}</p>

              <ul className="mt-4 space-y-2.5">
                {d.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-none text-teal-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
