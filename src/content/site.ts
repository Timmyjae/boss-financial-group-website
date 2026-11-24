// Single source of truth for BOSS Financial Group copy. Text is drawn from theinsboss.com and
// lightly edited for clarity only — do not add claims, credentials or services not on that site.

export const company = {
  name: "BOSS Financial Group",
  longName: "Business Owner Solution Strategies",
  tagline:
    "Business owners deserve more than disconnected financial products. We bring seasoned business planning professionals together around one coordinated strategy.",
  phone: "+1 214 995 8853",
  phoneHref: "tel:+12149958853",
  email: "info@theinsboss.com",
  address: {
    line1: "5 Cowboys Way, Suite 300",
    line2: "Frisco, Texas 75035",
    country: "USA",
  },
} as const;

export const stages = [
  {
    title: "Vision to Plan",
    body: "We begin with an in-depth business valuation and financial product analysis, then deliver a detailed report — up to 110 pages — outlining the issues your business may face.",
  },
  {
    title: "Plan to Market",
    body: "We review your product solutions against today's marketplace, so you know your coverage and financial products are current and working as hard as they should.",
  },
  {
    title: "Market to Growth",
    body: "We help redirect losses and put those dollars back to work for your business — aiming for strong protection, growth potential and long-term wealth creation.",
  },
] as const;

export const pillars = [
  {
    title: "Protection",
    body: "The insurance that safeguards your business, your people and your property from the risks you face every day.",
  },
  {
    title: "Reserves",
    body: "The cash and liquidity your business keeps on hand to stay steady through change and opportunity.",
  },
  {
    title: "Assets",
    body: "What your business owns and builds over time — and how those assets are positioned to grow.",
  },
  {
    title: "Exit Strategy",
    body: "A clear plan for the day you transition out of the business, prepared well before you need it.",
  },
] as const;

export const fourSquareIntro =
  "By placing your business insurance and financial products on our Financial Four Square Model, we offer a side-by-side view of your current position — evaluated and presented in a simple, easy-to-understand way.";

export type Service = {
  slug: string;
  title: string;
  division: string;
  summary: string;
};

export const services: Service[] = [
  {
    slug: "business-valuation",
    title: "Business Valuation",
    division: "BOSS Economics Group",
    summary:
      "An in-depth look at what your business is worth today — the starting point for every coordinated plan.",
  },
  {
    slug: "executive-strategy",
    title: "Executive Strategy",
    division: "BOSS Economics Group",
    summary:
      "Planning for the owners and key leaders who drive the business, aligned with the company's wider goals.",
  },
  {
    slug: "property-casualty",
    title: "Property & Casualty Insurance",
    division: "BOSS Insurance Group",
    summary:
      "We learn how your operation really works, analyse the risks you face, and build a plan with carefully chosen carriers.",
  },
  {
    slug: "employee-benefits",
    title: "Employee Benefits",
    division: "BOSS Benefits",
    summary: "Benefits programmes that support your team and fit within your overall business plan.",
  },
  {
    slug: "cost-segregation",
    title: "Cost Segregation",
    division: "BOSS Economics Group",
    summary:
      "A detailed review of business property, coordinated with your advisors as part of your financial strategy.",
  },
  {
    slug: "retirement-planning",
    title: "Retirement Planning",
    division: "BOSS Economics Group",
    summary: "Planning for life after the business, built into the same strategy as today's decisions.",
  },
  {
    slug: "exit-planning",
    title: "Exit Planning",
    division: "BOSS Economics Group",
    summary:
      "Preparing for ownership transition early, so the exit is part of the plan from the beginning.",
  },
];

export type Leader = {
  name: string;
  title: string;
  /** Set to an imported image URL once an approved photo exists. */
  photo?: string;
  photoAlt?: string;
  quote?: string;
  /** Area of focus, shown on the About page. */
  focus?: string;
  /** Verified biography only — leave unset until the client confirms one. */
  bio?: string;
};

export const testimonials = [
  "Working with Suzanne has been a real pleasure. Their work is second to none. Doing business with this group, I always know the work is done correctly.",
  "I literally was paying more for insurance premiums than I was bringing home. Strategy and products truly make a difference. Highly recommend.",
  "This is an amazing team. I was able to see where my money was going and why. I was able to redirect my cash flow in a direction that directly has a positive impact on my business.",
  "My business insurance program has never run more smoothly.",
] as const;

export const testimonialAttribution = "Client Testimonial";

// About page copy — from theinsboss.com "About us" and "BOSS Financial Group History" pages.
export const about = {
  intro:
    "Business Owner Solution Strategies was formed because too few experts were working on financial solutions for business owners. Business owners have to be experts in the business and services they provide. They need someone working for them.",
  collaboration:
    "Our team works together to put in place an insurance and financial plan that moves toward a complete business financial planning solution. If you were to climb a mountain, you would need a set of tools. Coming down the mountain may take a different set. We make sure your bags are packed correctly, so the climb and the descent are as effective as possible. You have to plan for today, tomorrow and the exit, all within the same plan.",
  founderQuote: {
    text: "We wanted to create a place where people get the opportunity to grow as individuals with the benefits of an organization. I think we have done just that.",
    by: "Brent White",
  },
  purpose:
    "Decisions that business owners make today about insurance and financial services are often made without clear direction and organization. We believe in making decisions with a clear purpose.",
  history: [
    {
      title: "The Four Pillars were created",
      body: "The Four Pillar concept began as a one-page snapshot of Protection, Assets, Reserves and Exit Strategy. The model was done entirely on paper.",
    },
    {
      title: "BOSS was formed",
      body: "Brent and Suzanne White left corporate America to create a new culture for advisors to work at high levels with business owners.",
    },
    {
      title: "Financial Four Square evolved",
      body: "Over the course of three years, version 1 of Financial Four Square was created, and the company found its clear direction.",
    },
    {
      title: "The BOSS family was born",
      body: "Four divisions of BOSS Financial Group were created: BOSS Insurance Group, BOSS Economics Group, BOSS Benefits and BOSS IMO.",
    },
  ],
  teamMotto: "Together Everyone Achieves More.",
} as const;
