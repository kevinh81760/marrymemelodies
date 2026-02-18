import Image from "next/image";
import Link from "next/link";

export function AboutJenny() {
  return (
    <section
      id="about"
      className="flex items-center gap-[80px] bg-[var(--color-sage)] px-[120px] py-[80px] min-h-[960px]"
    >
      <div className="relative w-[380px] h-[500px] shrink-0 overflow-hidden">
        <Image
          src="/jheadshot.png"
          alt="Jenny Ha"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-8 rounded-[15px]">
        <h2 className="font-heading text-[52px] leading-[1.1] text-[var(--color-darker)]">
          Meet Jenny Ha
        </h2>
        <p className="font-body text-[16px] leading-[1.7] text-[var(--color-dark)]">
          With a voice that blends warmth and elegance, Jenny Ha has been
          captivating audiences at weddings and private events for over a
          decade. Her soulful performances bring a deeply personal touch to
          every celebration, creating unforgettable moments for couples and
          their guests.
        </p>
        <Link
          href="#about"
          className="inline-flex items-center self-start rounded-full bg-[var(--color-darker)] px-[40px] py-[18px] font-body text-[14px] tracking-[1px] text-[var(--color-white)] hover:opacity-90 transition-opacity"
        >
          More about Jenny &nbsp;&rarr;
        </Link>
      </div>
    </section>
  );
}
