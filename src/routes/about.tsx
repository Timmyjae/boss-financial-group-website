import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/section-heading";
import { LeaderProfile } from "@/components/site/leader-profile";
import { CtaSection } from "@/components/site/cta-section";
import { leaders } from "@/components/site/leaders";
import { about, company, fourSquareIntro, pillars, stages } from "@/content/site";
import analysisPhoto from "@/assets/analysis.webp";

const title = "About BOSS Financial Group | Business Owner Solution Strategies";
const description =
  "The story, approach and leadership behind BOSS Financial Group, a team of business planning professionals working for business owners.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Page introduction */}
      <section className="bg-navy-gradient text-navy-foreground">
        <div className="container-page py-20 md:py-28">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow">About {company.name}</p>
            <h1 className="mt-6 text-[2.4rem] leading-[1.1] md:text-6xl">
              Expert collaboration, <span className="italic text-gold">working for you.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-navy-muted">{about.intro}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background">
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Our story" title="A new culture for advisors and business owners." intro={about.purpose} />
            <figure className="mt-10 border-l-2 border-gold pl-6">
              <blockquote className="font-serif text-xl italic leading-relaxed text-navy md:text-2xl">
                “{about.founderQuote.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                {about.founderQuote.by}
              </figcaption>
            </figure>
          </div>
          <ol className="space-y-10">
            {about.history.map((h, i) => (
              <li key={h.title} className="grid grid-cols-[3rem_1fr] gap-4">
                <span className="font-serif text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div className="border-b border-border pb-8">
                  <h3 className="text-2xl text-navy">{h.title}</h3>
                  <p className="mt-2 text-muted-foreground">{h.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-ivory">
        <div className="container-page py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <img
              src={analysisPhoto}
              alt="Hands reviewing a financial chart during a planning meeting"
              loading="lazy"
              width={1200}
              height={800}
              className="aspect-[3/2] w-full object-cover"
            />
            <div>
              <SectionHeading eyebrow="Our approach" title="Plan for today, tomorrow and the exit." />
              <p className="mt-6 text-lg text-muted-foreground">{about.collaboration}</p>
            </div>
          </div>
          <ol className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
            {stages.map((s, i) => (
              <li key={s.title} className="bg-card p-8 md:p-10">
                <span className="font-serif text-sm text-gold">Stage {i + 1}</span>
                <h3 className="mt-4 text-2xl text-navy">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Four Square */}
      <section className="bg-navy-gradient text-navy-foreground">
        <div className="container-page py-20 md:py-28">
          <SectionHeading
            tone="dark"
            eyebrow="The Financial Four Square Model"
            title="One page. Your whole position."
            intro={fourSquareIntro}
          />
          <div className="mt-14 grid gap-px border border-gold/30 bg-gold/30 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div key={p.title} className="bg-navy p-8">
                <span className="font-serif text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-2xl">{p.title}</h3>
                <p className="mt-3 text-navy-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-background">
        <div className="container-page py-20 md:py-28">
          <SectionHeading eyebrow="Leadership" title="The people behind the plan." intro={about.teamMotto} />
          <div className="mt-14 grid max-w-4xl gap-12 sm:grid-cols-2">
            {leaders.map((l) => (
              <LeaderProfile key={l.name} leader={l} detailed />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
