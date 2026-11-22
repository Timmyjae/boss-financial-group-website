import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/site/cta-section";

const titles = {
  about: ["About BOSS Financial Group | Our Approach", "How BOSS Financial Group helps business owners coordinate insurance, finances and long-term plans."],
  services: ["Business Planning & Financial Services | BOSS Financial Group", "Business valuation, executive strategy, P&C insurance, benefits, cost segregation, retirement and exit planning."],
  contact: ["Contact BOSS Financial Group | Let's Talk", "Contact BOSS Financial Group in Frisco, Texas to start a conversation about your business."],
} as const;
const [title, description] = titles["contact"];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-page py-24">
          <p className="eyebrow">BOSS Financial Group</p>
          <h1 className="mt-4 text-4xl text-navy md:text-6xl">Contact</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{description}</p>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
