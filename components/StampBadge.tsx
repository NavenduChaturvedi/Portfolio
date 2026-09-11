/** Circular "open for work" stamp — curved text on an arc, drawn inline. */
export default function StampBadge() {
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label="Open for new projects, available worldwide"
      className="h-[4.5rem] w-[4.5rem] lg:h-28 lg:w-28"
    >
      <defs>
        <path
          id="stamp-arc"
          d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0"
          fill="none"
        />
      </defs>
      <circle
        cx="60"
        cy="60"
        r="59"
        fill="var(--color-cream)"
        stroke="var(--color-ink)"
        strokeOpacity="0.16"
      />
      <text
        fontFamily="var(--font-body)"
        fontSize="7"
        letterSpacing="1.5"
        fill="var(--color-muted)"
      >
        <textPath href="#stamp-arc" startOffset="0%">
          AVAILABLE WORLDWIDE · AVAILABLE WORLDWIDE ·
        </textPath>
      </text>
      {["OPEN", "FOR NEW", "PROJECTS"].map((line, i) => (
        <text
          key={line}
          x="60"
          y={53 + i * 11}
          textAnchor="middle"
          fontFamily="var(--font-body)"
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="0.3"
          fill="var(--color-rust)"
        >
          {line}
        </text>
      ))}
    </svg>
  );
}
