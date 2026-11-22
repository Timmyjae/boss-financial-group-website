import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/site";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      to="/services"
      hash={service.slug}
      className="group flex h-full flex-col border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-card"
    >
      <div className="flex items-start justify-between">
        <span className="font-serif text-sm text-gold">{String(index + 1).padStart(2, "0")}</span>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-gold" />
      </div>
      <h3 className="mt-8 text-[1.4rem] text-navy">{service.title}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {service.division}
      </p>
      <p className="mt-4 text-[0.98rem] text-muted-foreground">{service.summary}</p>
    </Link>
  );
}
