/**
 * Nexus MedXperts "N-ribbon" mark — a simplified, transparent, recolorable
 * interpretation of the logo icon for use on dark surfaces and as an accent.
 * The full brand logo (with exact gradient) is served from /brand as a raster.
 */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Nexus MedXperts">
      <defs>
        <linearGradient id="nx-mark" x1="8" y1="12" x2="56" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--teal-500)" />
          <stop offset="0.55" stopColor="var(--ocean-500)" />
          <stop offset="1" stopColor="var(--navy-700)" />
        </linearGradient>
      </defs>
      <path
        d="M16 50V22c0-6 5-10 10-8 3 1 4 3 7 8l8 14V14"
        fill="none"
        stroke="url(#nx-mark)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 50c8 3 14-1 18-9"
        fill="none"
        stroke="url(#nx-mark)"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}
