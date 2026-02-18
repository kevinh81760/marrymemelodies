import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-[var(--color-beige)] px-8 pt-5 pb-5">
      <nav className="grid grid-cols-3 items-center w-full max-w-[1600px] mx-auto">
        <ul className="flex items-center justify-start gap-8 font-body text-[11px] tracking-[2px] text-[var(--color-nav)]">
          <li>
            <Link href="#about" className="hover:text-[var(--color-dark)] transition-colors">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="#faq" className="hover:text-[var(--color-dark)] transition-colors">
              FAQ
            </Link>
          </li>
        </ul>

        <Link
          href="#home"
          className="font-heading text-[22px] tracking-[4px] text-[var(--color-dark)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] justify-self-center"
        >
          MARRY ME MELODIES
        </Link>

        <ul className="flex items-center justify-end gap-8 font-body text-[11px] tracking-[2px] text-[var(--color-nav)]">
          <li>
            <Link href="#contact" className="hover:text-[var(--color-dark)] transition-colors">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
