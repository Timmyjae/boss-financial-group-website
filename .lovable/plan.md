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
- The contact form calls a server function. That function saves the enquiry to Lovable Cloud using the public (publishable) Cloud URL and key, under an "insert only" security rule.
- The Lovable Cloud server key (`SUPABASE_SERVICE_ROLE_KEY`) is needed on Netlify for one purpose only: updating the notification fields on the enquiry that was just saved. It is stored only as a Netlify server-side environment variable (Functions scope, marked secret). It never has a `VITE_` prefix, is never in browser code, `netlify.toml`, `.env` or GitHub, and is read only inside that one server step.
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
- Only trusted server code can update the notification fields, using the server key described in section 1. The key is loaded only inside a single helper, `markNotification(id, status)`. That helper updates only `notification_status` and `notification_sent_at` for one id. No public update rule or callable database function exists.

Reliability order (the enquiry is never lost because of email):
1. Validate. Invalid input is rejected with a clear message.
2. Save the enquiry (status `pending`). If the save fails, the visitor sees an error and can try again. This is the only case that is reported as a failure.
3. Try to send the email (10-second timeout). Any provider error, timeout or missing configuration is caught. It never undoes the save or changes the visitor's success message.
4. Record the result: `sent` + time, `failed`, or `not_configured`. If even this update fails, the enquiry stays saved as `pending`, which shows that it needs a follow-up.
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

## 8. External accounts and access (possible blockers)
| Needed | Who | Blocks |
|---|---|---|
| GitHub account, connected in Lovable (Connectors > GitHub) | Group | Milestone 1 |
| Netlify account with access to that GitHub repo | Group | Milestone 1 exit test |
| Permission to set Netlify environment variables, including secrets | Group | Milestones 1 and 7 |
| Resend account + API key; its owner email used as the test inbox | Group | Milestone 5 |
| Lovable Cloud server key copied into Netlify (I will explain where to find it) | Group | Milestone 7 live test |
| Logo, Suzanne White photo, confirmed bios | Client (optional) | Not blocking |
| DNS for theinsboss.com or the info@ mailbox | Client | Only for switching notifications to the business inbox after V1 |

## 9. Milestones (one at a time, review after each)
1. Design system, shared menu/footer, Home page, Netlify plugin config, and a successful live Netlify deploy with a working test server function.
2. About page.
3. Services page.
4. Contact page (form design and validation).
5. Lovable Cloud table and security rules, saving enquiries, Resend notification; test with real data and check the Cloud tab and inbox.
6. SEO (unique titles and descriptions, social tags, favicon), accessibility, responsive refinements.
7. GitHub sync check, final Netlify deployment with environment variables, full QA on the **live Netlify website** (not only the Lovable preview):
   - Submit a real test enquiry on the Netlify URL, then confirm it appears in the Lovable Cloud tab with status `sent` and a sent time.
   - Confirm the notification arrives in the configured test inbox.
   - Failure test: temporarily remove the email key, then confirm the enquiry is still saved with status `not_configured` (or `failed` when an invalid key is used).
   - Check links and the mobile, tablet and desktop layouts.

Mandatory Milestone 1 exit condition: a live Netlify deploy from GitHub with a working server-function health check. Milestone 2 does not start until this passes.

## Technical details
- Components: SiteHeader, SiteFooter, Button variants, ServiceCard, CtaSection, LeaderProfile (optional `photo` prop), Testimonial, ContactForm.
- `submitContact` createServerFn: zod validation, honeypot check; insert via a per-request publishable client (RLS: anon INSERT only, WITH CHECK notification_status = 'pending' AND notification_sent_at IS NULL; GRANT INSERT to anon, no SELECT/UPDATE/DELETE grants or policies). The insert returns the id through a server-generated UUID (no anon SELECT needed). Notification update uses supabaseAdmin loaded inside the handler (service_role only). CHECK constraint on notification_status. Resend is called with fetch, without an SDK.
- vite.config.ts: `nitro: process.env.NETLIFY ? false : undefined`, `plugins: process.env.NETLIFY ? [netlify()] : []`.
- Per-route head() metadata; images stored as Lovable assets, lazy-loaded below the fold.
