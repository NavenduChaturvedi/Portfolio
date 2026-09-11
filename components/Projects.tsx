import ArrowLink from "@/components/ArrowLink";
import ProjectThumb from "@/components/ProjectThumb";
import SectionHeading from "@/components/SectionHeading";

/* Real projects, pulled from https://github.com/NavenduChaturvedi (pinned
   repos). `live` is omitted for repos with no deployed demo — the card then
   shows a GitHub link only rather than a dead "#" href.

   `screenshot` files (public/images/projects/) are real captures provided
   directly, not staged or generated. Smartmap's shows the actual signed-in
   dashboard. chess-extension has no `live` URL — it's a local Chrome
   extension, not a hosted site — but does have a real screenshot of its
   Chess.com game-review output. */
const projects = [
  {
    title: "Smartmap",
    tag: null,
    description:
      "Roadmap and task tracker with XP, streaks, and gamified progress tracking for any goal.",
    tech: "React · TypeScript · Tailwind · Supabase",
    live: "https://smartmap-plum.vercel.app",
    repo: "https://github.com/NavenduChaturvedi/Smartmap",
    screenshot: "/images/projects/smartmap.png",
    alt: "The Smartmap dashboard, showing active roadmaps, pending tasks, and XP",
  },
  {
    title: "Financial Assistance Platform",
    tag: "Smart India Hackathon 2026",
    description:
      "Discovers and assesses financial assistance schemes via natural language, voice, and multilingual input.",
    tech: "Vue · FastAPI · PostgreSQL",
    live: "https://sih-ps-92.vercel.app",
    repo: "https://github.com/NavenduChaturvedi/SIH-PS92",
    screenshot: "/images/projects/sih-ps92.png",
    alt: "The Financial Assistance Platform's scheme-matching workspace",
  },
  {
    title: "Job Listing Aggregator",
    tag: null,
    description:
      "CLI and dashboard that scrapes, deduplicates, and exports remote job listings to CSV/JSON.",
    tech: "Python · BeautifulSoup · Pandas",
    live: "https://job-listing-aggregator-qg70.onrender.com",
    repo: "https://github.com/NavenduChaturvedi/Job-listing-aggregator",
    screenshot: "/images/projects/job-listing-aggregator.png",
    alt: "The Job Listing Aggregator's search dashboard",
  },
  {
    title: "Chess Game Review",
    tag: null,
    description:
      "Local Chrome extension that reviews finished Chess.com games with Stockfish 18 (WASM) — move accuracy, blunders, and an evaluation graph.",
    tech: "TypeScript · Stockfish (WASM)",
    live: null,
    repo: "https://github.com/NavenduChaturvedi/chess-extension",
    screenshot: "/images/projects/chess-extension.png",
    alt: "A reviewed Chess.com game showing move accuracy, blunders, and an evaluation graph",
  },
];

const smallLink =
  "relative font-body text-[0.7rem] tracking-wide text-rust after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-rust after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[92rem] px-6 py-16 lg:px-10 lg:py-20"
    >
      <div className="grid items-start gap-6 border-b border-line pb-8 lg:grid-cols-[auto_1fr_auto] lg:gap-12">
        <SectionHeading top="Selected" bottom="Projects" />
        <p className="max-w-xs font-body text-sm leading-relaxed text-muted lg:pt-1">
          A curated selection of recent work showcasing design, development, and
          problem-solving.
        </p>
        <div className="lg:pt-2">
          <ArrowLink href="https://github.com/NavenduChaturvedi?tab=repositories">
            View all projects
          </ArrowLink>
        </div>
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => {
          const primaryHref = project.live ?? project.repo;
          return (
            <article key={project.title}>
              <a
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <ProjectThumb
                  variant={i}
                  screenshot={project.screenshot ?? undefined}
                  alt={project.alt}
                />
              </a>

              <div className="mt-4 flex items-start gap-3">
                <span className="font-serif text-[1.6rem] leading-none text-rust/70">
                  0{i + 1}
                </span>
                <div className="min-w-0">
                  {project.tag && (
                    <p className="font-body text-[0.65rem] font-semibold tracking-[0.1em] text-rust uppercase">
                      {project.tag}
                    </p>
                  )}
                  <h3 className="font-body text-sm font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-body text-xs leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <p className="mt-1.5 font-body text-[0.68rem] tracking-wide text-muted/80">
                    {project.tech}
                  </p>
                  <div className="mt-2.5 flex items-center gap-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={smallLink}
                      >
                        Live
                      </a>
                    )}
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={smallLink}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
