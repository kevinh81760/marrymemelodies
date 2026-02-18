import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-beige)] px-12 py-20 max-w-[1600px] mx-auto"
    >
      <h2 className="font-heading text-[52px] leading-[1.1] text-[var(--color-dark)] text-center mb-12">
        Contact
      </h2>
      <div className="flex flex-col items-center gap-8 max-w-xl mx-auto text-center">
        <p className="font-body text-[16px] leading-[1.7] text-[var(--color-dark)]">
          Ready to bring your love story to life with music? We’d love to hear
          from you.
        </p>
        <Link
          href="mailto:hello@marrymemelodies.com"
          className="inline-flex items-center rounded-full bg-[var(--color-darker)] px-[40px] py-[18px] font-body text-[14px] tracking-[1px] text-[var(--color-white)] hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
