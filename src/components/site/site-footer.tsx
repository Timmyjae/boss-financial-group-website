import { Link } from "@tanstack/react-router";
import { company } from "@/content/site";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-navy-muted">
            {company.longName}. Coordinated insurance, financial and business planning for
            business owners.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3 text-[0.95rem]">
            <li><Link to="/" className="text-navy-muted hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="text-navy-muted hover:text-gold">About</Link></li>
            <li><Link to="/services" className="text-navy-muted hover:text-gold">Services</Link></li>
            <li><Link to="/contact" className="text-navy-muted hover:text-gold">Contact</Link></li>
          </ul>
        </nav>
        <div>
          <p className="eyebrow">Get in touch</p>
          <address className="mt-5 space-y-3 text-[0.95rem] not-italic text-navy-muted">
            <p>
              {company.address.line1}
              <br />
              {company.address.line2}, {company.address.country}
            </p>
            <p><a href={company.phoneHref} className="hover:text-gold">{company.phone}</a></p>
            <p><a href={`mailto:${company.email}`} className="hover:text-gold">{company.email}</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="container-page py-6 text-sm text-navy-muted">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
