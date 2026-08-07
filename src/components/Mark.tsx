/**
 * Nexus MedXperts "N-ribbon" mark — a simplified, transparent, recolorable
 * interpretation of the logo icon. The full brand logo (with exact gradient)
 * is served from /brand as a raster.
 *
 * `tone` picks a gradient that stays legible on the surface behind it:
 *   brand — teal → ocean → navy, for light backgrounds
 *   light — teal → ocean, for dark backgrounds (navy would disappear)
 *
 * Each tone owns its gradient id so two marks on one page can't collide.
 */
const TONES = {
  brand: {
    id: "nx-mark-brand",
    stops: ["var(--teal-500)", "var(--ocean-500)", "var(--navy-700)"],
  },
  light: {
    id: "nx-mark-light",
    stops: ["var(--teal-400)", "var(--teal-500)", "var(--ocean-500)"],
  },
} as const;

export function Mark({
  className = "",
  tone = "brand",
}: {
  className?: string;
  tone?: keyof typeof TONES;
}) {
  const { id, stops } = TONES[tone];
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Nexus MedXperts">
      <defs>
        <linearGradient id={id} x1="8" y1="12" x2="56" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={stops[0]} />
          <stop offset="0.55" stopColor={stops[1]} />
          <stop offset="1" stopColor={stops[2]} />
        </linearGradient>
      </defs>
      <path
        d="M16 50V22c0-6 5-10 10-8 3 1 4 3 7 8l8 14V14"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 50c8 3 14-1 18-9"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}
