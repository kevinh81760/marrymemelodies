import Image from "next/image";
import Link from "next/link";

export function AboutEmily() {
  return (
    <section className="flex items-center gap-[80px] bg-[var(--color-beige)] px-[120px] py-[80px] min-h-[960px]">
      <div className="flex flex-1 flex-col gap-8">
        <h2 className="font-heading text-[52px] leading-[1.1] text-[var(--color-darker)]">
          Meet Emily Ha
        </h2>
        <p className="font-body text-[16px] leading-[1.7] text-[var(--color-dark)]">
          Emily Ha brings a vibrant energy and powerhouse vocals to every
          stage she graces. From intimate ceremonies to grand receptions, her
          versatile range and magnetic presence ensure that every note
          resonates with emotion, making your special day truly extraordinary.
        </p>
        <Link
          href="#about"
          className="inline-flex items-center self-start rounded-full bg-[var(--color-darker)] px-[40px] py-[18px] font-body text-[14px] tracking-[1px] text-[var(--color-white)] hover:opacity-90 transition-opacity"
        >
          More about Emily &nbsp;&rarr;
        </Link>
      </div>
      <div className="relative w-[380px] h-[500px] shrink-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1602421574408-024a5513e169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzEzMjMzNTZ8&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Emily Ha"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
