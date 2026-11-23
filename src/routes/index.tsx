import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { LeaderProfile } from "@/components/site/leader-profile";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { CtaSection } from "@/components/site/cta-section";
import { leaders } from "@/components/site/leaders";
import { company, fourSquareIntro, pillars, services, stages, testimonials } from "@/content/site";
import heroPhoto from "@/assets/hero-planning.webp";
import teamPhoto from "@/assets/team-collaboration.webp";

const title = "BOSS Financial Group | Strategic Financial Solutions for Business Owners";
const description =
  "BOSS Financial Group brings business planning professionals and financial solutions together for business owners in Frisco, Texas.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

const whyBoss = [
  {
    title: "One coordinated strategy",
    body: "Insurance, benefits, valuation and long-term planning are reviewed together, not as separate products.",
  },
  {
    title: "Seasoned professionals",
    body: "A team of business planning professionals working around the needs of the business owner.",
  },
  {
    title: "A clear picture",
    body: "The Financial Four Square Model shows your current position side by side, in plain terms.",
  },
  {
    title: "Detailed analysis",
    body: "Every engagement starts with an in-depth valuation and a written report of up to 110 pages.",
  },
] as const;

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-gradient text-navy-foreground">
        <div className="container-page grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="animate-fade-up">
            <p className="eyebrow">{company.longName}</p>
            <h1 className="mt-6 text-[2.6rem] leading-[1.08] md:text-6xl lg:text-[4.1rem]">
              Strategic Financial Solutions. <span className="italic text-gold">Built Around Your Business.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-navy-muted">{company.tagline}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="gold" size="xl">
                <Link to="/contact">Start a Conversation</Link>
              </Button>
              <Button asChild variant="outline-light" size="xl">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="absolute -left-4 -top-4 hidden h-full w-full border border-gold/40 lg:block" aria-hidden="true" />
            <img
              src={heroPhoto}
              alt="Business owner reviewing financial plans with an advisor"
              width={1600}
              height={1200}
              fetchPriority="high"
              className="relative aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-background">
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Who we are"
            title={<>Business Owner Solution Strategies</>}
          />
          <div className="space-y-5 text-lg text-muted-foreground">
            <p>
              Most business owners hold insurance, benefits and financial products bought at different
              times, from different providers, for different reasons. Few of them have ever been looked at
              together.
            </p>
            <p>
              BOSS Financial Group brings seasoned business planning professionals together around one
              coordinated strategy, so each decision supports the next and your business is protected,
              positioned to grow and prepared for what comes after.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 pt-2 text-base font-semibold text-navy underline-offset-4 hover:text-gold hover:underline"
            >
              About BOSS Financial Group <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Four Square */}
      <section className="bg-ivory">
        <div className="container-page py-20 md:py-28">
          <SectionHeading eyebrow="The Financial Four Square Model" title="Your whole position, side by side." intro={fourSquareIntro} />
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
            {pillars.map((p, i) => (
              <div key={p.title} className="bg-card p-8 md:p-10">
                <span className="font-serif text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-2xl text-navy md:text-3xl">{p.title}</h3>
                <p className="mt-3 max-w-md text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="bg-navy-gradient text-navy-foreground">
        <div className="container-page py-20 md:py-28">
          <SectionHeading tone="dark" eyebrow="Our process" title="Three stages, one direction." />
          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {stages.map((s, i) => (
              <li key={s.title} className="border-t border-gold/60 pt-8">
                <span className="font-serif text-5xl text-gold/80">{i + 1}</span>
                <h3 className="mt-5 text-2xl">{s.title}</h3>
                <p className="mt-3 text-navy-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background">
        <div className="container-page py-20 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Services" title="Seven disciplines, coordinated." />
            <Button asChild variant="outline-navy" size="xl">
              <Link to="/services">All services</Link>
            </Button>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why BOSS */}
      <section className="bg-ivory">
        <div className="container-page grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
          <img
            src={teamPhoto}
            alt="Advisors working together at a meeting table"
            loading="lazy"
            width={1200}
            height={800}
            className="aspect-[3/2] w-full object-cover"
          />
          <div>
            <SectionHeading eyebrow="Why BOSS" title="We make the hard things seem easy." />
            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              {whyBoss.map((w) => (
                <div key={w.title}>
                  <span className="gold-rule" />
                  <dt className="mt-4 font-serif text-xl text-navy">{w.title}</dt>
                  <dd className="mt-2 text-muted-foreground">{w.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-background">
        <div className="container-page py-20 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Leadership" title="The people behind the plan." />
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-semibold text-navy underline-offset-4 hover:text-gold hover:underline"
            >
              Meet our leadership <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid max-w-4xl gap-12 sm:grid-cols-2">
            {leaders.map((l) => (
              <LeaderProfile key={l.name} leader={l} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy-gradient text-navy-foreground">
        <div className="container-page py-20 md:py-28">
          <SectionHeading tone="dark" eyebrow="Testimonials" title="What our clients say." />
          <div className="mt-14 grid gap-12 md:grid-cols-2">
            {testimonials.map((q) => (
              <TestimonialCard key={q} quote={q} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
