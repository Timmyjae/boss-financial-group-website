import { testimonialAttribution } from "@/content/site";

export function TestimonialCard({ quote }: { quote: string }) {
  return (
    <figure className="flex h-full flex-col justify-between border-t border-gold/60 pt-8">
      <blockquote className="font-serif text-xl leading-snug text-navy-foreground md:text-[1.35rem]">
        “{quote}”
      </blockquote>
      <figcaption className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-navy-muted">
        {testimonialAttribution}
      </figcaption>
    </figure>
  );
}
