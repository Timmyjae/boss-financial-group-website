# BOSS Financial Group Website — Revised Version 1 Plan

## 1. Confirmed architecture (Netlify-compatible)
TanStack Start (React + TypeScript + Tailwind) is kept. Netlify is TanStack Start's official deployment partner and runs its pages, server functions and server routes on Netlify Functions ([1](https://docs.netlify.com/build/frameworks/framework-setup-guides/tanstack-start/), [3](https://tanstack.com/partners/netlify)). No simpler stack is needed.

Confirmed version: this project uses **TanStack Start 1.168.60** (with TanStack Router 1.170 and Vite 8). That is newer than 1.132.0, so the official Netlify method applies.

Netlify configuration (added and tested in Milestone 1):
- Install `@netlify/vite-plugin-tanstack-start` and add `netlify()` to `vite.config.ts`.
- The Lovable build setup normally adds its own Cloudflare server packaging. For Netlify builds only (detected by Netlify's `NETLIFY` build variable), that packaging is switched off and `netlify()` is used instead. The Lovable preview keeps working unchanged. This prevents two deployment plugins from conflicting.
- `netlify.toml`: build command `vite build` (run as `npm run build`), publish directory `dist/client`, Node 20+. There is no `_redirects` catch-all rule.
- Pages, server functions and server routes become Netlify Functions automatically.
- Milestone 1 exit test: a real Netlify deploy from GitHub of the actual project, with the Home page loading and a small test server function (a "health check" that returns the server time) answering on the live Netlify URL. If the test fails, the configuration is fixed before Milestone 2 starts.

How the backend keeps working on Netlify:
- The contact form calls a server function. That function saves the enquiry to Lovable Cloud using the public (publishable) Cloud URL and key, under an "insert only" security rule. No admin key leaves Lovable.
- The same function sends the notification email using a secret API key that only the server can read.

Netlify environment variables (set under Functions + Builds scope; a redeploy is needed after any change):
| Variable | Purpose | Secret? |
|---|---|---|
| VITE_SUPABASE_URL | Lovable Cloud address | No |
| VITE_SUPABASE_PUBLISHABLE_KEY | Lovable Cloud public key | No |
| RESEND_API_KEY | Email sending | Yes |
| NOTIFY_TO_EMAIL | Address that receives enquiries | No |
| NOTIFY_FROM_EMAIL | Sender address | No |
| SUPABASE_SERVICE_ROLE_KEY | Lets only the server update notification status | Yes |
The same secrets are stored in Lovable for the preview.

## 2. Pages (four only)
```text
/          Home      hero, intro, Four Square, 3-stage method, 7 services, Why BOSS, leadership preview, testimonials, CTA
/about     About     story, approach, leadership, Four Square, CTA
/services  Services  intro + 7 service sections (Home cards link to each) + CTA
/contact   Contact   invitation, form, phone, email, address
```
Shared menu (mobile menu, "Let's Talk" button) and footer.

## 3. Company content (preserved exactly)
- Methodology: only the three original stages — Vision to Plan, Plan to Market, Market to Growth. The separate four-step approach is removed; the About "approach" section uses these three stages.
- Financial Four Square Model: Protection, Reserves, Assets, Exit Strategy.
- Seven services, taken from the current website only.
- Leadership: Brent White with his existing photo. Suzanne Q. White gets a text-only profile card (initials monogram, name, title, verified bio). The card has an empty photo slot, so adding an approved photo later is a one-line change.
- Testimonials: the four genuine quotes, wording preserved, credited as "Client Testimonial".
- Contact details checked against the live site before use.

## 4. Visual design
Navy palette from the brief (deep navy, midnight navy, white, soft ivory, sparing champagne gold, charcoal/slate text). Playfair Display headings with a refined sans body font. Real company photography first, then realistic professional business photos. Editorial layout, restrained animation, designed for phone, tablet and desktop.

## 5. Contact database (Lovable Cloud)
Table `contact_submissions`:
| Column | Type | Notes |
|---|---|---|
| id | UUID | primary key |
| full_name | text | required |
| email | text | required |
| subject | text | optional |
| message | text | required |
| created_at | timestamp | automatic |
| notification_status | text | `pending`, `sent`, `failed` or `not_configured`; default `pending`; limited to these values |
| notification_sent_at | timestamp | set only when the email provider accepts the message |

Access rules:
- The public website can only **insert**, and only with `notification_status = 'pending'` and no `notification_sent_at`. Visitors cannot read, edit or delete records.
- Only trusted server code can update the notification fields. This uses the Lovable Cloud server key, stored as a server-only secret (`SUPABASE_SERVICE_ROLE_KEY`) in Lovable and Netlify. It is never sent to the browser and is used only inside the contact server function, after the enquiry is saved. No public update rule or callable function exists.
- Saved enquiries and their notification status are visible in the Cloud tab.
- Validation and length limits on the server, a hidden spam trap field, and a disabled button while sending.

## 6. Email notification — recommended setup
Recommendation: **Resend** (external email service with a free tier). It needs only an account and an API key, and is the simplest option that works on Netlify without extra infrastructure. Lovable's built-in email is not used because it needs DNS access to a domain.

| Requirement | Testing phase | Production |
|---|---|---|
| Domain DNS access | Not needed | Needed only to send to info@theinsboss.com (see below) |
| External provider | Resend | Resend |
| API key / secret | RESEND_API_KEY | Same |
| Verified recipient | The Resend account's own email | info@theinsboss.com |

Safe testing approach: one group member creates a Resend account. Without a verified domain, Resend only sends to that account's own email address, using its test sender. We set NOTIFY_TO_EMAIL to that address and prove that real notifications arrive.

For production, the client either (a) verifies theinsboss.com in Resend (a few DNS records), or (b) creates the Resend account with info@theinsboss.com. Then NOTIFY_TO_EMAIL is switched to the business address. No code change is needed.

Honesty rules:
- The visitor sees success once the enquiry is saved. The page never says an email was sent.
- After the email attempt, the server records `sent` (with `notification_sent_at`), `failed` or `not_configured` on the saved enquiry.

## 7. Scope guard
No logins, portals, payments, booking, calculators, CRM or other extras.

## 8. Dependencies needed from you
1. Resend account + API key (and the recipient email used for testing).
2. A Netlify account linked to the GitHub repository.
3. GitHub connection (in Lovable: Connectors → GitHub).
4. Optional: logo file, approved Suzanne White photo, confirmed bios.
5. Production only: the client's DNS access or info@theinsboss.com mailbox (section 6).

## 9. Milestones (one at a time, review after each)
1. Design system, shared menu/footer, Home page, Netlify plugin config, and a successful live Netlify deploy with a working test server function.
2. About page.
3. Services page.
4. Contact page (form design and validation).
5. Lovable Cloud table and security rules, saving enquiries, Resend notification; test with real data and check the Cloud tab and inbox.
6. SEO (unique titles and descriptions, social tags, favicon), accessibility, responsive refinements.
7. GitHub sync check, final Netlify deployment with environment variables, full QA: links, form on live Netlify, mobile/tablet/desktop.

## Technical details
- Components: SiteHeader, SiteFooter, Button variants, ServiceCard, CtaSection, LeaderProfile (optional `photo` prop), Testimonial, ContactForm.
- `submitContact` createServerFn: zod validation, honeypot check; insert via a per-request publishable client (RLS: anon INSERT only, WITH CHECK notification_status = 'pending' AND notification_sent_at IS NULL; GRANT INSERT to anon, no SELECT/UPDATE/DELETE grants or policies). The insert returns the id through a server-generated UUID (no anon SELECT needed). Notification update uses supabaseAdmin loaded inside the handler (service_role only). CHECK constraint on notification_status. Resend is called with fetch, without an SDK.
- vite.config.ts: `nitro: process.env.NETLIFY ? false : undefined`, `plugins: process.env.NETLIFY ? [netlify()] : []`.
- Per-route head() metadata; images stored as Lovable assets, lazy-loaded below the fold.
