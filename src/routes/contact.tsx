import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { company, contactPage } from "@/content/site";
import { contactSchema, submitContact, type ContactInput } from "@/lib/contact-schema";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: contactPage.title },
      { name: "description", content: contactPage.description },
      { property: "og:title", content: contactPage.title },
      { property: "og:description", content: contactPage.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

type Result = "saved" | "not_connected" | null;

function Field({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-sm font-semibold text-navy">
        {label} {required ? <span className="text-gold" aria-hidden="true">*</span> : <span className="font-normal text-muted-foreground">(optional)</span>}
      </Label>
      {children}
      {error && <p id={`${id}-error`} role="alert" className="text-sm text-destructive">{error}</p>}
    </div>
  );
}

function ContactPage() {
  const [result, setResult] = useState<Result>(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: ContactInput) => {
    const res = await submitContact(values);
    if (res.status === "saved") reset();
    setResult(res.status);
  };

  const a = (name: keyof ContactInput) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <>
      <section className="bg-navy-gradient text-navy-foreground">
        <div className="container-page py-20 md:py-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="eyebrow">{contactPage.eyebrow}</p>
            <h1 className="mt-6 text-[2.4rem] leading-[1.1] md:text-6xl">{contactPage.heading}</h1>
            <p className="mt-7 text-lg text-navy-muted">{contactPage.intro}</p>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-20">
          <div className="border border-border bg-background p-6 sm:p-10">
            <h2 className="text-3xl text-navy">{contactPage.formTitle}</h2>
            {result ? (
              <div role="status" className="mt-8 flex gap-4 border-l-2 border-gold pl-6">
                {result === "saved" ? <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-gold" aria-hidden="true" /> : <AlertCircle className="mt-1 h-6 w-6 shrink-0 text-gold" aria-hidden="true" />}
                <div>
                  <p className="font-serif text-xl text-navy">{result === "saved" ? contactPage.savedTitle : contactPage.notConnectedTitle}</p>
                  <p className="mt-2 text-muted-foreground">{result === "saved" ? contactPage.savedBody : contactPage.notConnectedBody}</p>
                  <Button variant="outline-navy" className="mt-6" onClick={() => setResult(null)}>{contactPage.again}</Button>
                </div>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field id="name" label="Full Name" required error={errors.name?.message}>
                    <Input id="name" autoComplete="name" maxLength={100} {...a("name")} {...register("name")} />
                  </Field>
                  <Field id="email" label="Email Address" required error={errors.email?.message}>
                    <Input id="email" type="email" autoComplete="email" maxLength={255} {...a("email")} {...register("email")} />
                  </Field>
                </div>
                <Field id="subject" label="Subject" error={errors.subject?.message}>
                  <Input id="subject" maxLength={150} {...a("subject")} {...register("subject")} />
                </Field>
                <Field id="message" label="Message" required error={errors.message?.message}>
                  <Textarea id="message" rows={6} maxLength={2000} {...a("message")} {...register("message")} />
                </Field>
                <div>
                  <Button type="submit" variant="gold" size="xl" disabled={isSubmitting}>
                    {isSubmitting ? (<><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />{contactPage.sending}</>) : contactPage.submit}
                  </Button>
                </div>
              </form>
            )}
          </div>

          <aside aria-labelledby="contact-details">
            <span className="gold-rule" />
            <h2 id="contact-details" className="mt-6 text-3xl text-navy">{contactPage.detailsTitle}</h2>
            <address className="mt-8 grid gap-7 not-italic text-muted-foreground">
              <p className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" /><span>{company.address.line1}<br />{company.address.line2}, {company.address.country}</span></p>
              <p className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" /><a href={company.phoneHref} className="text-navy hover:text-gold">{company.phone}</a></p>
              <p className="flex gap-4"><Mail className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" /><a href={`mailto:${company.email}`} className="break-all text-navy hover:text-gold">{company.email}</a></p>
            </address>
          </aside>
        </div>
      </section>
    </>
  );
}
