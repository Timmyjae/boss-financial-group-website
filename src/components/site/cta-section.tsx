import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { company } from "@/content/site";

export function CtaSection({
  title = "Let's build a plan around your business.",
  body = "Whether you are a business owner or a referral partner, we would welcome a conversation about where your business is today and where you want it to go.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-navy-gradient text-navy-foreground">
      <div className="container-page flex flex-col items-start gap-10 py-20 md:flex-row md:items-end md:justify-between md:py-24">
        <div className="max-w-2xl">
          <span className="gold-rule" />
          <h2 className="mt-6 text-3xl md:text-5xl">{title}</h2>
          <p className="mt-5 text-lg text-navy-muted">{body}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row">
          <Button asChild variant="gold" size="xl">
            <Link to="/contact">Start a Conversation</Link>
          </Button>
          <Button asChild variant="outline-light" size="xl">
            <a href={company.phoneHref}>Call {company.phone}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
