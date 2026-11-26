import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/site/cta-section";
import { services, servicesPage, serviceDetails } from "@/content/site";
import teamPhoto from "@/assets/team-collaboration.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: servicesPage.title },
      { name: "description", content: servicesPage.description },
      { property: "og:title", content: servicesPage.title },
      { property: "og:description", content: servicesPage.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={teamPhoto} alt="" width={1200} height={800} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/85" aria-hidden="true" />
        <div className="container-page relative py-20 md:py-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="eyebrow">{servicesPage.eyebrow}</p>
            <h1 className="mt-6 text-[2.4rem] leading-[1.1] md:text-6xl">{servicesPage.heading}</h1>
            <p className="mt-7 text-lg text-navy-muted">{servicesPage.intro}</p>
          </div>
        </div>
      </section>

      <div id="service-navigation" className="container-page scroll-mt-28 py-16 md:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-20">
          <nav aria-label={servicesPage.navigation} className="lg:sticky lg:top-32">
            <p className="eyebrow">{servicesPage.navigation}</p>
            <ul className="mt-6 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-1">
              {services.map((service, index) => (
                <li key={service.slug} className="border-b border-border">
                  <Link to="/services" hash={service.slug} className="group flex items-start gap-3 py-4 text-sm font-semibold text-navy hover:text-gold">
                    <span className="font-serif text-gold">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex-1">{service.title}</span>
                    <ArrowDown className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-gold" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            {services.map((service, index) => {
              const details = serviceDetails[service.slug];
              if (!details) return null;
              return (
                <section key={service.slug} id={service.slug} className="scroll-mt-28 border-b border-border pb-14 pt-14 first:pt-0 md:pb-16 md:pt-16">
                  <p className="eyebrow">{String(index + 1).padStart(2, "0")} / {service.division}</p>
                  <h2 className="mt-4 text-3xl text-navy md:text-[2.75rem]">{service.title}</h2>
                  <div className="mt-6 space-y-5 text-lg text-muted-foreground">
                    {details.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <ul className="mt-8 grid gap-4 border-l-2 border-gold pl-6 text-muted-foreground">
                    {details.focus.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="mt-9 flex flex-wrap items-center gap-6">
                    <Button asChild variant="outline-navy" size="lg">
                      <Link to="/contact">{servicesPage.discuss}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                    </Button>
                    <Link to="/services" hash="service-navigation" className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 hover:text-gold hover:underline">
                      <ArrowUp className="h-4 w-4" aria-hidden="true" />{servicesPage.backToTop}
                    </Link>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
