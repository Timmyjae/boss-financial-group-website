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

// Services page descriptions adapted from each original service page on theinsboss.com.
// Keep Home card summaries unchanged; detailed copy is used only on the Services page.
export const servicesPage = {
  title: "Services | BOSS Financial Group",
  description: "Explore BOSS Financial Group’s seven coordinated services: valuation, executive strategy, insurance, benefits, cost segregation, retirement and exit planning.",
  eyebrow: "BOSS Financial Group",
  heading: "Our Services",
  intro: "Seven disciplines, one coordinated plan. We bring insurance, financial products and business planning together around the needs of the business owner.",
  navigation: "Our services",
  discuss: "Start a Conversation",
  backToTop: "Back to services",
} as const;

export const serviceDetails: Record<string, { paragraphs: string[]; focus: string[]; source: string }> = {
  "business-valuation": {
    source: "https://theinsboss.com/business-valuation/",
    paragraphs: [
      "Before we know where a business owner is headed, we first need to understand where they are. A business valuation provides a snapshot of the owner’s interest, financial position and operations — the starting point for strategic planning.",
      "Even a successful business can have issues beneath the surface. We use valuation to bring potential problems to light and help owners understand what their company is worth, whether they are planning ahead, considering a sale or evaluating a purchase.",
    ],
    focus: ["Understand your current business value", "Identify issues before planning ahead", "Support ownership and transition decisions"],
  },
  "executive-strategy": {
    source: "https://theinsboss.com/2804-2/",
    paragraphs: [
      "We take an overall process approach to strategy. A product may offer tax advantages but limited liquidity; another may carry more risk. We measure the options and work with you to decide which products fit your wider plan.",
      "Business owners and their teams have individual needs and goals. We tailor plans with those needs in mind, choosing products and procedures that support today’s decisions as well as the eventual exit strategy.",
    ],
    focus: ["Review products, costs and risk", "Balance liquidity with long-term goals", "Align decisions with the overall plan"],
  },
  "property-casualty": {
    source: "https://theinsboss.com/property-casualty/",
    paragraphs: [
      "Understanding how your business operates is an important part of strategy. Rather than asking only for copies of your policies, we look at the details — from protecting client data to who makes the bank deposits — so we can understand the risks you face.",
      "We analyze those risks and build a plan with carefully chosen carriers. Coverage and premiums are reviewed together with the way you pay for insurance, your risk tolerance and the opportunity to redirect losses back into the business.",
    ],
    focus: ["Understand operational risks", "Review coverage and carrier options", "Coordinate premiums with financial strategy"],
  },
  "employee-benefits": {
    source: "https://theinsboss.com/pages/our-services/empolyee-benefits/",
    paragraphs: [
      "We help employers do right by their employees. From group health to voluntary benefits, we review the marketplace and select products that support recruiting, retention and the individual needs of your team.",
      "Our total benefits approach considers medical coverage, health and wellness, income protection and survivor benefits. Flexible enrollment, benefit communication and administrative support help bring those choices into day-to-day operations.",
    ],
    focus: ["Group health and voluntary benefits", "Tailored support for employee needs", "Enrollment and benefit communication"],
  },
  "cost-segregation": {
    source: "https://theinsboss.com/cash-flow/",
    paragraphs: [
      "Cost segregation is a strategic tax planning tool that identifies property components that may qualify for shorter depreciation periods. Accelerating eligible deductions can improve cash flow and free up capital for reinvestment.",
      "An engineering-based study reviews financial and construction documents, property components and their values. The resulting report gives business owners and their CPAs a detailed breakdown to use in tax planning and filings.",
    ],
    focus: ["Review construction, renovation or property purchases", "Identify eligible property components", "Coordinate study findings with your CPA"],
  },
  "retirement-planning": {
    source: "https://theinsboss.com/retirement-planning/",
    paragraphs: [
      "Building a business and stepping away from it require different tools. We plan for the route ahead — including taxes and potential income from a sale — so retirement is considered well before the business owner reaches that point.",
      "Retirement planning also means providing opportunities for employees. Our team helps review whether the company’s retirement plan is appropriate for both its people and its owner, alongside costs, compliance and the wider business strategy.",
    ],
    focus: ["Plan for life after the business", "Review owner and employee retirement needs", "Consider plan costs and compliance"],
  },
  "exit-planning": {
    source: "https://theinsboss.com/exit-strategy/",
    paragraphs: [
      "An exit strategy belongs in the plan from the beginning. Knowing what the transition could look like helps you prepare today, rather than waiting until you are ready to leave the business to gather the tools you need.",
      "We consider the route to that goal, including taxes, potential sale income and risks along the way. Flexible planning allows the business owner to adjust without disrupting day-to-day operations, with the Financial Four Square Model helping show what may lie ahead.",
    ],
    focus: ["Prepare for ownership transition early", "Consider taxes and potential sale income", "Keep the plan flexible as the business changes"],
  },
};
