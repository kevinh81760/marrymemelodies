export function CornerBorders({ position }: { position: "top" | "bottom" }) {
  const isTop = position === "top";
  return (
    <div className="relative w-full h-0">
      <div
        className={`absolute left-[40px] w-[1px] h-[60px] bg-[var(--color-border-accent)] ${
          isTop ? "top-[20px]" : "bottom-[20px]"
        }`}
      />
      <div
        className={`absolute left-[40px] w-[60px] h-[1px] bg-[var(--color-border-accent)] ${
          isTop ? "top-[20px]" : "bottom-[20px]"
        }`}
      />
      <div
        className={`absolute right-[40px] w-[1px] h-[60px] bg-[var(--color-border-accent)] ${
          isTop ? "top-[20px]" : "bottom-[20px]"
        }`}
      />
      <div
        className={`absolute right-[40px] w-[60px] h-[1px] bg-[var(--color-border-accent)] ${
          isTop ? "top-[20px]" : "bottom-[20px]"
        }`}
      />
    </div>
  );
}
