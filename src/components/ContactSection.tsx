"use client";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-beige)] px-12 py-[80px] max-w-[1600px] mx-auto"
    >
      <h2 className="font-heading text-[52px] tracking-[2px] text-[var(--color-dark)] text-center mb-4">
        Contact
      </h2>
      <p className="font-body text-[16px] text-[var(--color-gray)] text-center max-w-[500px] mx-auto mb-12">
        Tell us about your day. We’d love to hear your story and help you choose the perfect songs.
      </p>

      <form
        className="max-w-[560px] mx-auto flex flex-col gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-name"
            className="font-body text-[12px] tracking-[1px] text-[var(--color-nav)]"
          >
            NAME
          </label>
          <input
            id="contact-name"
            type="text"
            className="w-full border-b border-[var(--color-border-accent)] bg-transparent py-3 font-body text-[16px] text-[var(--color-dark)] placeholder:text-[var(--color-gray)] focus:outline-none focus:border-[var(--color-dark)] transition-colors"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-email"
            className="font-body text-[12px] tracking-[1px] text-[var(--color-nav)]"
          >
            EMAIL
          </label>
          <input
            id="contact-email"
            type="email"
            className="w-full border-b border-[var(--color-border-accent)] bg-transparent py-3 font-body text-[16px] text-[var(--color-dark)] placeholder:text-[var(--color-gray)] focus:outline-none focus:border-[var(--color-dark)] transition-colors"
            placeholder="you@example.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-message"
            className="font-body text-[12px] tracking-[1px] text-[var(--color-nav)]"
          >
            MESSAGE
          </label>
          <textarea
            id="contact-message"
            rows={4}
            className="w-full border-b border-[var(--color-border-accent)] bg-transparent py-3 font-body text-[16px] text-[var(--color-dark)] placeholder:text-[var(--color-gray)] focus:outline-none focus:border-[var(--color-dark)] transition-colors resize-none"
            placeholder="Your wedding date, venue, and what you’re imagining…"
          />
        </div>
        <button
          type="submit"
          className="mt-4 self-start rounded-full bg-[var(--color-darker)] px-[40px] py-[18px] font-body text-[14px] tracking-[1px] text-[var(--color-white)] hover:opacity-90 transition-opacity"
        >
          Send message
        </button>
      </form>
    </section>
  );
}
