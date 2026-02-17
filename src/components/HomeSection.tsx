const cornerFrame = "border-[var(--color-border-accent)]";

export function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center px-[120px] pt-[34px] pb-[130px] gap-6 h-[900px]"
    >
      <p className="font-heading text-[14px] font-semibold tracking-[1px] text-[var(--color-gray)]">
        California Wedding Vocalists
      </p>

      <div className="relative inline-block px-10 py-6">
        <div
          className={`absolute left-0 top-0 w-6 h-6 border-l-2 border-t-2 ${cornerFrame}`}
          aria-hidden
        />
        <div
          className={`absolute right-0 top-0 w-6 h-6 border-r-2 border-t-2 ${cornerFrame}`}
          aria-hidden
        />
        <div
          className={`absolute left-0 bottom-0 w-6 h-6 border-l-2 border-b-2 ${cornerFrame}`}
          aria-hidden
        />
        <div
          className={`absolute right-0 bottom-0 w-6 h-6 border-r-2 border-b-2 ${cornerFrame}`}
          aria-hidden
        />
        <h1 className="font-heading text-[52px] tracking-[3px] leading-[1.15] text-center text-[var(--color-dark)] max-w-[700px]">
          Singing Your
          <br />
          Love Story
        </h1>
      </div>

      <p className="font-heading text-[14px] font-semibold tracking-[1px] text-[var(--color-gray)]">
        Hopeless Romantic Sisters
      </p>

      {/* Bottom corners aligned to Swiss grid (48px = left-12/right-12, matches navbar) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 max-w-[1600px] mx-auto px-12 pointer-events-none"
        aria-hidden
      >

      </div>
    </section>
  );
}
