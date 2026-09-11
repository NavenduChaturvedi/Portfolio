import Image from "next/image";

type ProjectThumbProps = {
  variant: number;
  /** Real screenshot of the live deploy — takes over from the CSS mock. */
  screenshot?: string;
  alt?: string;
};

/**
 * Project thumbnail. Renders a real screenshot when one is provided;
 * otherwise falls back to an abstract site mock drawn in CSS (used for
 * repos with no deployed demo to screenshot — see Price Tracker).
 */
export default function ProjectThumb({
  variant,
  screenshot,
  alt = "",
}: ProjectThumbProps) {
  if (screenshot) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden border border-line transition-opacity duration-300 group-hover:opacity-85">
        <Image
          src={screenshot}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  const dark = variant === 0 || variant === 3;

  return (
    <div
      aria-hidden
      className={`relative aspect-[4/3] w-full overflow-hidden border border-line transition-opacity duration-300 group-hover:opacity-85 ${
        dark ? "bg-ink" : variant === 1 ? "bg-line" : "bg-cream"
      }`}
    >
      {/* browser chrome */}
      <div
        className={`flex h-4 items-center gap-1 px-2 ${dark ? "bg-cream/10" : "bg-ink/5"}`}
      >
        {[0, 1, 2].map((d) => (
          <span
            key={d}
            className={`h-1 w-1 rounded-full ${dark ? "bg-cream/30" : "bg-ink/20"}`}
          />
        ))}
      </div>

      <div className="flex h-[calc(100%-1rem)] flex-col justify-center gap-2 p-4">
        {variant === 0 && (
          <>
            <span className="block h-4 w-3/5 bg-cream/85" />
            <span className="block h-4 w-2/5 bg-cream/85" />
            <span className="mt-2 block h-2 w-4/5 bg-cream/25" />
            <span className="mt-3 block h-4 w-16 bg-rust" />
          </>
        )}
        {variant === 1 && (
          <>
            <span className="mx-auto block h-14 w-14 rounded-full bg-ink/25" />
            <span className="mx-auto mt-2 block h-3 w-1/2 bg-ink/30" />
            <span className="mx-auto block h-2 w-2/3 bg-ink/15" />
          </>
        )}
        {variant === 2 && (
          <>
            <span className="block h-3 w-1/3 bg-ink/30" />
            <div className="mt-2 flex gap-2">
              <div className="flex-1 space-y-1">
                {[0, 1, 2, 3].map((l) => (
                  <span key={l} className="block h-1.5 w-full bg-ink/12" />
                ))}
              </div>
              <span className="h-12 w-12 shrink-0 bg-ink/70" />
            </div>
          </>
        )}
        {variant === 3 && (
          <>
            <span className="block h-3.5 w-3/4 bg-rust" />
            <span className="block h-3.5 w-1/2 bg-cream/85" />
            <span className="mt-2 block h-2 w-3/5 bg-cream/25" />
            <span className="mt-1 block h-8 w-8 rounded-full bg-cream/15" />
          </>
        )}
      </div>
    </div>
  );
}
