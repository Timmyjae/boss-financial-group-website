export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center border border-gold font-serif text-lg text-gold"
      >
        B
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl tracking-[0.12em]">BOSS</span>
        <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-navy-muted">
          Financial Group
        </span>
      </span>
    </span>
  );
}
