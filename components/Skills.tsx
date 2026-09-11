import SectionHeading from "@/components/SectionHeading";

const skills = [
  "Frontend Development",
  "TypeScript / React",
  "Python / FastAPI",
  "Automation & Scraping",
  "SQL & Databases",
  "API Integration",
];

/* PLACEHOLDER: capability blurbs. */
const features = [
  {
    title: "User-Centered Design",
    body: "Focus on creating seamless and meaningful user experiences.",
    icon: (
      <path d="M3 4h18v12H3zM8 20h8M12 16v4" />
    ),
  },
  {
    title: "Clean & Modern Code",
    body: "High-quality, scalable, and performant development.",
    icon: <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />,
  },
  {
    title: "Fully Responsive",
    body: "Websites that look and work perfectly on any device.",
    icon: <path d="M4 3h10v18H4zM18 8h2v13h-2" />,
  },
  {
    title: "Performance Driven",
    body: "Speed, SEO, and best practices built into every project.",
    icon: <path d="M3 12 21 3l-9 18-2-7-7-2Z" />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-[92rem] px-6 py-16 lg:px-10 lg:py-20"
    >
      <div className="grid gap-12 border-t border-line pt-10 lg:grid-cols-[1.05fr_0.95fr_1fr] lg:gap-14">
        {/* Skill list — a dot bullet in front of each name, no bars or
            invented percentages. */}
        <div>
          <SectionHeading top="Skills &" bottom="Expertise" />
          <ul className="mt-8 space-y-3.5">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-3.5">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-rust"
                />
                <span className="font-body text-sm text-ink">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pull quote */}
        <blockquote className="border-l border-line pl-8 lg:pl-10">
          <span
            aria-hidden
            className="block font-serif text-[4.5rem] leading-[0.6] text-rust/45"
          >
            &ldquo;
          </span>
          <p className="mt-4 font-serif text-[clamp(1.2rem,1.9vw,1.7rem)] leading-[1.45] text-ink">
            Good work is the kind that works &mdash; no roadmap slides, no
            &lsquo;coming soon,&rsquo; just a demo link that doesn&apos;t break
            when someone actually clicks it.
          </p>
        </blockquote>

        {/* Capability list */}
        <ul className="space-y-6 border-l border-line pl-8 lg:pl-10">
          {features.map((feature) => (
            <li key={feature.title} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rust">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="h-4 w-4 text-cream"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {feature.icon}
                </svg>
              </span>
              <div>
                <h3 className="label text-ink">{feature.title}</h3>
                <p className="mt-1.5 font-body text-xs leading-relaxed text-muted">
                  {feature.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
