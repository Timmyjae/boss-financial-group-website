# BOSS Financial Group Website Redesign — Version 1 Plan

## 1. What I found on the current site (theinsboss.com)
- Usable images: hero photo, four interior business photos, and a photo of Brent White. No usable photo of Suzanne Q. White was found yet.
- Four genuine testimonials exist, but they show **no customer names**. They will be shown as published (e.g. "Client, BOSS Insurance Group") — no names will be invented.
- Methodology (Vision to Plan / Plan to Market / Market to Growth), the Four Square Model and the seven services will be copied from the live pages and rewritten for clarity only, with no new claims.
- Contact details (Frisco, TX address, phone, info@theinsboss.com) will be checked against the live Contact page before use.

## 2. Pages
```text
/          Home      hero, intro, Four Square, 3-step method, 7 services, Why BOSS, leadership preview, testimonials, CTA
/about     About     story, approach (4 steps), leadership, Four Square, CTA
/services  Services  intro + 7 service sections (each with its own jump link from Home cards) + CTA
/contact   Contact   invitation, form, phone, email, address
```
Shared top menu (with mobile menu and a "Let's Talk" button) and footer on every page. Privacy Policy link only if the existing policy can be reviewed.

## 3. Look and feel
- Colours from the brief: deep navy, midnight navy, white, soft ivory, sparing champagne gold, charcoal and slate text.
- Fonts: Playfair Display for headings; a refined sans for body text (Source Sans 3 or similar, to avoid the generic look of Inter).
- Real photography only: company photos first, then carefully chosen realistic business photos. No invented images of company staff.
- Editorial layouts, generous white space, gentle animations, designed properly for phones and tablets.

## 4. Contact form and Lovable Cloud
- Fields: Full Name*, Email*, Subject (optional), Message*, with validation, loading state, success and error messages, and a disabled button while sending.
- Spam protection: a hidden "honeypot" field, length limits and a short repeat-submission limit.
- Saved to a `contact_submissions` table in Lovable Cloud. Visitors can only add a message — never read, edit or delete. Saved enquiries are visible in the Cloud tab.
- Success is shown only after the message is actually saved.

## 5. Email notifications — needs your input
Lovable Cloud's built-in email requires a sending domain you control (e.g. theinsboss.com, set up with a few DNS records). Options:
1. Built-in email with the company's domain (recommended, needs DNS access).
2. An external service such as Resend (needs an API key stored securely).
Until it is configured, enquiries are still saved, and the site will not claim an email was sent.

## 6. Hosting note
This project is built on a modern framework that is hosted most easily on Lovable itself. Netlify deployment is possible but needs extra adapter setup and may need manual adjustment; GitHub syncing works normally. I recommend Lovable hosting with a custom domain, but will prepare for Netlify if required by your assignment.

## 7. Missing items to supply
- A higher-quality logo file (otherwise a clean text wordmark "BOSS Financial Group").
- An approved photo of Suzanne Q. White.
- Confirmed biographies for both leaders if the live site's text is incomplete.
- Email choice and domain/DNS access (section 5).

## 8. Milestones (one at a time, review after each)
1. Design system, shared menu/footer, Homepage.
2. About page.
3. Services page.
4. Contact page (form UI).
5. Lovable Cloud table, security rules, saving and email notification; test with real data.
6. SEO (titles, descriptions, social tags, favicon), accessibility and mobile refinements.
7. Final testing (links, forms, devices) and deployment preparation.

## Technical details
- TanStack Start (React + TypeScript), Tailwind v4 tokens in styles.css, separate route files per page, per-route head() metadata.
- Reusable components: SiteHeader, SiteFooter, ServiceCard, CtaSection, LeaderProfile, Testimonial, ContactForm.
- Form submit via a server function with zod validation; insert-only RLS for anonymous role; no select/update/delete policies.
- Company images uploaded as Lovable assets (not hot-linked), lazy-loaded below the fold.
