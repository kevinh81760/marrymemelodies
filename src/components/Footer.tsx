import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-beige)]">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <nav className="flex flex-wrap justify-center gap-8 font-body text-[11px] tracking-[2px] text-[var(--color-nav)]">
          <Link href="#home" className="hover:text-[var(--color-dark)] transition-colors">
            HOME
          </Link>
          <Link href="#about" className="hover:text-[var(--color-dark)] transition-colors">
            ABOUT
          </Link>
          <Link href="#faq" className="hover:text-[var(--color-dark)] transition-colors">
            FAQ
          </Link>
          <Link href="#contact" className="hover:text-[var(--color-dark)] transition-colors">
            CONTACT
          </Link>
        </nav>
        <p className="mt-4 text-center font-heading text-[12px] tracking-[1px] text-[var(--color-gray)]">
          &copy; {new Date().getFullYear()} Marry Me Melodies
        </p>
      </div>
    </footer>
  );
}
