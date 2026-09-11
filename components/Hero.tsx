import Image from "next/image";

import ArrowLink from "@/components/ArrowLink";
import StampBadge from "@/components/StampBadge";

/* Discipline labels running up the left edge. */
const leftRail = ["UI / UX Design", "Web Development"];

function Asterisk() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-3.5 w-3.5 shrink-0 text-rust"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M12 2v20M3.4 7l17.2 10M3.4 17L20.6 7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line pt-20"
    >
      {/* Edge rail — vertical discipline labels, wide screens only.
          Right-side rail (Branding / Digital Experiences) removed per
          feedback — it read as noise with nothing behind it. */}
      <div className="label pointer-events-none absolute inset-y-0 left-2 hidden items-center gap-8 text-muted xl:flex">
        <div className="flex rotate-180 items-center gap-8 [writing-mode:vertical-rl]">
          {leftRail.map((item) => (
            <span key={item} className="flex items-center gap-3">
              <span className="h-8 w-px bg-line" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[92rem] px-6 lg:px-10">
        {/* Top row */}
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Asterisk />
            <span className="label text-ink">Full-Stack Developer</span>
          </div>
          <div className="hidden sm:block">
            <ArrowLink href="#contact">Available for freelance</ArrowLink>
          </div>
        </div>

        {/* Oversized poster wordmark. Sized in vw so it spans the measure. */}
        <h1 className="relative z-0 mt-4 font-poster text-[clamp(3.5rem,20.6vw,19rem)] leading-[0.82] tracking-[-0.015em] text-ink">
          PORTFOLIO
        </h1>

        {/* Lower composition — text left, portrait right, portrait pulled up
            so it overlaps the wordmark the way the reference does.
            mt-10/14 clears the wordmark's descenders before "Hello, I'm"
            starts, and that line is now sized independently of the shared
            `label` utility (which is only 11px) so it reads as its own
            element instead of crowding the wordmark above it. */}
        <div className="mt-10 grid items-end gap-10 lg:mt-14 lg:grid-cols-[1fr_auto] lg:gap-14">
          <div className="pb-12 lg:pb-16">
            <p className="font-body text-sm font-medium tracking-[0.14em] text-muted uppercase">
              Hello, I&apos;m
            </p>

            <p className="mt-3 font-serif text-[clamp(2.6rem,6.2vw,5.2rem)] leading-[0.92] tracking-[-0.01em] text-ink uppercase">
              Navendu Chaturvedi
            </p>

            <p className="mt-4 font-body text-[0.8rem] font-semibold tracking-[0.16em] text-rust uppercase">
              Full-Stack Developer
            </p>

            {/* PLACEHOLDER: personalize this — grounded in your public repos
                (Python/FastAPI backends, TypeScript/React frontends,
                automation & scraping tools) but the voice is still generic. */}
            <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-muted">
              I build full-stack web apps and small, well-scoped tools —
              Python and FastAPI on the backend, TypeScript and React on the
              front end.
            </p>

            <p className="mt-6 font-script text-[2.9rem] leading-none text-ink">
              Navendu Chaturvedi
            </p>
          </div>

          {/* Portrait: terracotta disc behind, cut-out figure in front, and the
              figure's own cropped hem landing on the section rule. */}
          <div className="relative z-10 flex justify-center lg:-mt-[13vw] lg:justify-end">
            <div className="relative w-fit">
              <span
                aria-hidden
                className="absolute bottom-[13%] left-1/2 aspect-square w-[84%] -translate-x-1/2 rounded-full bg-rust"
              />
              {/* PLACEHOLDER: swap in your own headshot at the same path.
                  Height-driven with w-auto so width comes from the intrinsic
                  aspect ratio, never from the chosen srcset candidate. */}
              <Image
                src="/images/headshot.png"
                alt="Portrait of Navendu Chaturvedi"
                width={928}
                height={1152}
                priority
                sizes="(min-width: 1024px) 40vw, 80vw"
                className="relative block h-[clamp(19rem,40vw,34rem)] w-auto object-contain"
              />
              <div className="absolute -left-4 bottom-[26%] lg:-left-10">
                <StampBadge />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
