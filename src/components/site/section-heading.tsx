import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-4 text-3xl md:text-[2.75rem] ${tone === "dark" ? "text-navy-foreground" : "text-navy"}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-lg ${tone === "dark" ? "text-navy-muted" : "text-muted-foreground"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
