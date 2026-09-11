const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-[92rem] items-center justify-between gap-4 px-6 lg:px-10">
        <a href="#top" className="label rounded-sm text-ink">
          <span className="sm:hidden">Navendu</span>
          <span className="hidden sm:inline">Navendu Chaturvedi</span>
        </a>

        <ul className="flex items-center gap-4 sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative inline-block py-1 font-body text-[0.78rem] tracking-wide text-muted transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-rust after:transition-transform after:duration-300 hover:text-rust hover:after:scale-x-100 focus-visible:text-rust"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
