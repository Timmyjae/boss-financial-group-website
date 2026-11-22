import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-navy-foreground/10 bg-navy text-navy-foreground">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="BOSS Financial Group home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="text-[0.95rem] text-navy-foreground/80 transition-colors hover:text-gold data-[status=active]:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="gold" size="default">
            <Link to="/contact">Let's Talk</Link>
          </Button>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-navy-foreground/10 md:hidden">
          <div className="container-page flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="border-b border-navy-foreground/10 py-4 font-serif text-xl data-[status=active]:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="gold" size="xl" className="mt-6">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Let's Talk
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
