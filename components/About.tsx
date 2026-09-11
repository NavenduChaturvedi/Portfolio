import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[92rem] px-6 py-16 lg:px-10 lg:py-20"
    >
      <div className="grid gap-8 border-t border-line pt-10 lg:grid-cols-[auto_1fr] lg:gap-16">
        <SectionHeading top="About" bottom="Me" />

        <div className="max-w-2xl">
          <p className="font-body text-sm leading-relaxed text-muted sm:text-base">
            I&apos;m NV &mdash; a Data Science student at IIT Madras who&apos;d
            rather ship something than talk about shipping something. I work
            across Python and TypeScript: FastAPI and automation on the
            backend, React and Tailwind on the front. What I actually enjoy is
            finding one annoying, unglamorous problem and building a small
            tool that kills it completely &mdash; a job aggregator, a price
            tracker with alerts, a gamified roadmap app, a hackathon prototype
            built against a deadline that didn&apos;t care about my sleep
            schedule. No bloated feature lists, no &ldquo;vision decks&rdquo;
            &mdash; just working software and a demo link that proves it.
          </p>
        </div>
      </div>
    </section>
  );
}
