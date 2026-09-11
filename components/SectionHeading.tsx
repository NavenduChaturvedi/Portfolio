type SectionHeadingProps = {
  /** First line, set in ink. */
  top: string;
  /** Second line, set in the rust accent. */
  bottom: string;
  className?: string;
};

/** Two-tone editorial section heading: ink over rust, serif, uppercase. */
export default function SectionHeading({
  top,
  bottom,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`font-serif text-[clamp(1.8rem,3.6vw,2.9rem)] leading-[0.98] tracking-[0.01em] uppercase ${className}`}
    >
      <span className="block text-ink">{top}</span>
      <span className="block text-rust">{bottom}</span>
    </h2>
  );
}
