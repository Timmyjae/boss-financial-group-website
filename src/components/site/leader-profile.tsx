import type { Leader } from "@/content/site";

function initials(name: string) {
  return name
    .split(" ")
    .filter((p) => /^[A-Z]/.test(p) && !p.endsWith("."))
    .map((p) => p[0])
    .join("");
}

export function LeaderProfile({ leader }: { leader: Leader }) {
  return (
    <article className="flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
        {leader.photo ? (
          <img
            src={leader.photo}
            alt={leader.photoAlt ?? `Portrait of ${leader.name}`}
            loading="lazy"
            width={640}
            height={800}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-navy-gradient">
            <span className="flex h-28 w-28 items-center justify-center border border-gold font-serif text-4xl text-gold">
              {initials(leader.name)}
            </span>
          </div>
        )}
      </div>
      <h3 className="mt-6 text-2xl text-navy">{leader.name}</h3>
      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-gold">{leader.title}</p>
      {leader.quote && <p className="mt-4 italic text-muted-foreground">“{leader.quote}”</p>}
    </article>
  );
}
