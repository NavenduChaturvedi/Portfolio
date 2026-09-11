type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
};

/** Small caps label followed by a long rust rule-and-arrow. */
export default function ArrowLink({ href, children }: ArrowLinkProps) {
  return (
    <a href={href} className="group inline-flex items-center gap-3 text-ink">
      <span className="label whitespace-nowrap">{children}</span>
      <svg
        viewBox="0 0 56 8"
        aria-hidden
        className="h-2 w-14 text-rust"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          d="M0 4h50M46 1l4 3-4 3"
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </svg>
    </a>
  );
}
