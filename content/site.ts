export type SocialLink = {
  label: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ReviewItem = {
  name: string;
  location: string;
  service: string;
  quote: string;
};

export type GalleryProject = {
  title: string;
  service: string;
  city: string;
  summary: string;
  image: string;
  alt: string;
  category:
    | "Repairs"
    | "Replacements"
    | "Flat Roofing"
    | "Gutters"
    | "Storm Response"
    | "Commercial"
    | "Before & After";
  featured?: boolean;
  beforeImage?: string;
  afterImage?: string;
};

export type ServiceItem = {
  slug:
    | "roof-repairs"
    | "roof-replacements-new-roofs"
    | "flat-roofing"
    | "gutters-fascias-soffits"
    | "storm-damage-emergency-roofing"
    | "inspections-free-quote";
  route: string;
  badge: string;
  name: string;
  shortName: string;
  summary: string;
  intro: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
  includes: string[];
  problems: string[];
  reasons: string[];
  process: string[];
  faqs: FaqItem[];
  related: ServiceItem["slug"][];
  ctaTitle: string;
  ctaText: string;
};

export type AdditionalService = {
  name: string;
  summary: string;
};

const roofImages = {
  hero: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg?auto=compress&cs=tinysrgb&w=1600",
  repair: "https://images.pexels.com/photos/9431615/pexels-photo-9431615.jpeg?auto=compress&cs=tinysrgb&w=1600",
  damagedTiles:
    "https://images.pexels.com/photos/15997617/pexels-photo-15997617.jpeg?auto=compress&cs=tinysrgb&w=1600",
  team: "https://images.pexels.com/photos/16164823/pexels-photo-16164823.jpeg?auto=compress&cs=tinysrgb&w=1600",
  roofline:
    "https://images.pexels.com/photos/17485781/pexels-photo-17485781.jpeg?auto=compress&cs=tinysrgb&w=1600",
  closeup:
    "https://images.pexels.com/photos/26754797/pexels-photo-26754797.jpeg?auto=compress&cs=tinysrgb&w=1600",
  gutters:
    "https://images.pexels.com/photos/19685912/pexels-photo-19685912.jpeg?auto=compress&cs=tinysrgb&w=1600",
  commercial:
    "https://images.pexels.com/photos/33825309/pexels-photo-33825309.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

export const siteConfig = {
  siteUrl: "https://roofing-demo.example.com",
  businessName: "Summit Ridge Roofing",
  tagline:
    "Repairs, replacements, and roofing care built around clear advice, tidy workmanship, and dependable local service.",
  phone: "(555) 014-7823",
  email: "hello@summitridgeroofing.example",
  address: "",
  city: "Northbridge",
  region: "the surrounding region",
  serviceAreas: [
    "Northbridge",
    "Oakmere",
    "Riverton",
    "Westhaven",
    "Brookfield",
    "Hillcrest",
  ],
  socialLinks: [] as SocialLink[],
  accent: {
    primary: "#ba4d37",
    secondary: "#d7a25b",
    soft: "#f3dfd7",
    dark: "#10151d",
  },
  heroHighlights: [
    "Roof repairs, replacements, and planned maintenance",
    "Residential and commercial roofing support",
    "Clear written scopes and straightforward recommendations",
  ],
  trustStrip: [
    "Residential and commercial roofing support with a polished local-service presentation",
    "Roof repairs, full replacements, flat roofs, and roofline work handled under one roof",
    "Fast mobile contact options with call and quote actions always easy to find",
  ],
  whyChooseUs: [
    {
      title: "Honest roofing advice",
      text: "Every quote and inspection is framed around the actual condition of the roof, the property type, and the right long-term fix.",
    },
    {
      title: "Workmanship that looks finished",
      text: "The goal is a roofline that performs properly and looks right from the street, not a rushed patch that needs attention again too soon.",
    },
    {
      title: "Communication homeowners appreciate",
      text: "Clients get plain-language updates, photo-led explanations where useful, and a process that stays easy to follow from first call to handover.",
    },
    {
      title: "A polished customer journey",
      text: "The website balances clear information, visible call and quote actions, and a strong visual finish so customers feel confident about making contact.",
    },
  ],
  processSteps: [
    {
      title: "Call or request a quote",
      text: "Share the issue, the property type, and the area you are in so the right next step can be planned quickly.",
    },
    {
      title: "Inspection and scope",
      text: "The roof is assessed, the likely cause is explained clearly, and the recommended scope is set out in practical terms.",
    },
    {
      title: "Roofing work completed",
      text: "Repairs, replacements, or supporting roofline work are carried out with attention to detail, site care, and durable finishes.",
    },
    {
      title: "Final walkthrough and aftercare",
      text: "The completed work is checked, the site is left tidy, and the client knows what has been done and what to expect next.",
    },
  ],
  homeFaqs: [
    {
      question: "How do I know whether my roof needs a repair or a replacement?",
      answer:
        "That depends on the age of the roof, the condition of the covering, how widespread the failure is, and whether underlying components are still sound. A good inspection should explain the difference in plain language.",
    },
    {
      question: "Do you handle both residential and commercial roofing?",
      answer:
        "Yes. Homes, managed properties, and commercial buildings can all be covered when the business offers that range of roofing support.",
    },
    {
      question: "What if I am not sure which roofing service I need yet?",
      answer:
        "That is common. A good roofing company should be able to assess the roof, explain what is actually wrong, and recommend the right next step without making the process feel confusing.",
    },
    {
      question: "Do you offer roof inspections before quoting?",
      answer:
        "Yes. Inspection-led quoting is one of the clearest ways to understand whether the roof needs a repair, replacement, maintenance work, or a wider roofline solution.",
    },
    {
      question: "Do you cover gutters, flat roofs, and storm damage work too?",
      answer:
        "Yes. The service range can cover roof repairs, reroofing, flat roofing, gutters, fascias, soffits, inspections, maintenance, and weather-related roofing issues.",
    },
  ],
  reviews: [
    {
      name: "Homeowner",
      location: "Northbridge",
      service: "Roof repair",
      quote:
        "The communication felt clear from the start, the problem was explained without pressure, and the repair work looked tidy when everything was finished.",
    },
    {
      name: "Property manager",
      location: "Westhaven",
      service: "Flat roofing",
      quote:
        "Useful updates, a practical scope of work, and a team that understood how to keep disruption down while still moving the job along properly.",
    },
    {
      name: "Business owner",
      location: "Riverton",
      service: "Roof replacement",
      quote:
        "Professional to deal with, straightforward on what needed doing, and the finished roof gave the building a much better overall look.",
    },
    {
      name: "Landlord",
      location: "Oakmere",
      service: "Gutters and roofline",
      quote:
        "Easy to book, easy to understand, and the site was left in good order. It felt like a dependable local contractor rather than a hard sell.",
    },
  ] as ReviewItem[],
  galleryProjects: [
    {
      title: "Pitched roof renewal with clean ridge finish",
      service: "Roof replacement",
      city: "Northbridge",
      summary:
        "A full roof refresh focused on weather protection, cleaner lines, and a more confident street-facing finish.",
      image: roofImages.hero,
      alt: "Roofer installing a new pitched roof with neat tile lines",
      category: "Replacements",
      featured: true,
      beforeImage: roofImages.damagedTiles,
      afterImage: roofImages.hero,
    },
    {
      title: "Targeted leak repair around aged roof covering",
      service: "Roof repair",
      city: "Oakmere",
      summary:
        "An inspection-led repair that focused on the failing area without overselling unnecessary replacement work.",
      image: roofImages.repair,
      alt: "Worker carrying out roofing repair work on an existing roof",
      category: "Repairs",
      featured: true,
      beforeImage: roofImages.repair,
      afterImage: roofImages.roofline,
    },
    {
      title: "Low-slope roof upgrade for commercial property",
      service: "Flat roofing",
      city: "Westhaven",
      summary:
        "A practical flat roofing solution designed for reliable drainage, tidy detailing, and straightforward maintenance access.",
      image: roofImages.commercial,
      alt: "Commercial rooftop with clean low-slope roofing lines",
      category: "Flat Roofing",
      featured: true,
    },
    {
      title: "Roofline refresh with gutters and edge detailing",
      service: "Gutters, fascias, and soffits",
      city: "Brookfield",
      summary:
        "Roofline work planned to improve drainage, sharpen the exterior finish, and support the main roofing system.",
      image: roofImages.gutters,
      alt: "Roof gutter and edge detail under a cloudy sky",
      category: "Gutters",
    },
    {
      title: "Storm response visit with urgent roof assessment",
      service: "Storm damage",
      city: "Hillcrest",
      summary:
        "A fast response visit focused on checking exposed areas, making the property safer, and planning follow-on repairs.",
      image: roofImages.team,
      alt: "Roofing workers on a property roof during project work",
      category: "Storm Response",
    },
    {
      title: "Close-up tile matching for a roofing repair",
      service: "Roof repair",
      city: "Riverton",
      summary:
        "A detail-led job where the repair needed to blend into the surrounding roof instead of standing out visually.",
      image: roofImages.closeup,
      alt: "Close-up tiled roof showing roofing material detail",
      category: "Before & After",
    },
  ] as GalleryProject[],
  services: [
    {
      slug: "roof-repairs",
      route: "/roof-repairs",
      badge: "Targeted roofing fixes",
      name: "Roof Repairs",
      shortName: "Repairs",
      summary:
        "Leak tracing, slipped coverings, ridge work, flashing issues, and practical repair scopes for roofs that still have plenty of life left in them.",
      intro:
        "Roof repairs work best when the issue is diagnosed properly and the fix is matched to the age, condition, and construction of the roof. That means looking beyond the obvious symptom and dealing with the area that is actually failing.",
      heroTitle: "Roof repairs in Northbridge planned around the real issue, not guesswork",
      heroDescription:
        "For slipped tiles, persistent leaks, roofline defects, and weather-related wear, the focus is on tidy, lasting repair work that restores confidence in the roof without overselling replacement.",
      image: roofImages.repair,
      includes: [
        "Leak investigation and fault finding",
        "Replacement of damaged tiles, shingles, or roof covering sections",
        "Ridge, verge, flashing, and abutment repairs",
        "Minor storm damage and wind-lift remedial work",
        "Roofline checks where gutters or edge details are contributing to the problem",
      ],
      problems: [
        "Water ingress around valleys, chimneys, or roof penetrations",
        "Slipped, cracked, or weather-worn coverings",
        "Isolated defects that do not yet justify full reroofing",
        "Recurring repair issues caused by poor earlier workmanship",
      ],
      reasons: [
        "Homeowners want a clear answer on whether a repair is still the right option",
        "Property managers need practical repairs that protect occupied buildings",
        "Clients value workmanship that blends into the roof rather than drawing attention to the patch",
      ],
      process: [
        "Inspect the area and confirm the likely source of failure",
        "Explain whether repair, monitoring, or wider replacement makes the most sense",
        "Carry out the agreed roofing work with matching materials where possible",
        "Review the finished area and flag any longer-term maintenance points worth noting",
      ],
      faqs: [
        {
          question: "Can a leaking roof always be repaired without replacing it?",
          answer:
            "Not always. Some roofs are good candidates for targeted repair, while others have defects spread across too many areas. A good inspection should explain that clearly before any work is agreed.",
        },
        {
          question: "What kinds of repair work are usually covered?",
          answer:
            "That often includes slipped coverings, small leak sources, flashing issues, ridge defects, and roofline details that are letting water track into the building envelope.",
        },
      ],
      related: [
        "storm-damage-emergency-roofing",
        "roof-replacements-new-roofs",
        "inspections-free-quote",
      ],
      ctaTitle: "Need a practical roof repair plan?",
      ctaText:
        "Use the quote form to describe the issue, or call directly if the roof needs urgent attention.",
    },
    {
      slug: "roof-replacements-new-roofs",
      route: "/roof-replacements-new-roofs",
      badge: "Full reroofing and new coverings",
      name: "Roof Replacements / New Roofs",
      shortName: "New roofs",
      summary:
        "Full reroofing and new roof installations designed around durable materials, clean detailing, and a finish that suits the property.",
      intro:
        "When repairs stop being cost-effective, a well-planned roof replacement gives the property a cleaner finish, better long-term protection, and a more dependable base for years ahead.",
      heroTitle:
        "New roofs and roof replacements in Northbridge with a cleaner, longer-term finish",
      heroDescription:
        "For aging coverings, repeated repair issues, or major renovation work, the goal is a roof system that looks professional, performs properly, and fits the building it protects.",
      image: roofImages.hero,
      includes: [
        "Full roof strip and replacement planning",
        "Guidance on covering style and finish",
        "Roofline coordination where gutters, fascias, or soffits need updating",
        "Residential reroofing and new roof work for extensions or major upgrades",
        "Commercial roofing renewal where a full replacement is the right call",
      ],
      problems: [
        "A roof has reached the point where repairs are becoming repeated spend",
        "The existing finish no longer protects the building confidently",
        "The property needs a more complete visual and performance upgrade",
        "Renovation or extension work calls for a new roof build rather than patchwork repair",
      ],
      reasons: [
        "Clients want clarity on scope, materials, and how the new roof will look when complete",
        "A quality replacement can improve both weather performance and kerb appeal",
        "Good reroofing avoids the false economy of repeated short-term fixes",
      ],
      process: [
        "Inspect the existing roof and confirm whether replacement is justified",
        "Recommend a suitable new roof scope with finish and roofline details considered together",
        "Schedule the work so access, protection, and handover are planned properly",
        "Complete the installation and leave the property with a sharper overall finish",
      ],
      faqs: [
        {
          question: "How do I know when replacement makes more sense than repair?",
          answer:
            "That usually becomes clear when the roof is deteriorating in multiple areas, repairs are recurring, or the covering has simply reached the stage where a longer-term solution is more sensible.",
        },
        {
          question: "Can roofline items be updated at the same time?",
          answer:
            "Yes. Gutters, fascias, soffits, and related details are often best reviewed alongside a replacement roof so the full exterior line works together properly.",
        },
      ],
      related: [
        "roof-repairs",
        "gutters-fascias-soffits",
        "inspections-free-quote",
      ],
      ctaTitle: "Planning a new roof or full replacement?",
      ctaText:
        "Request a quote to discuss roof condition, finish options, and the right scope for the property.",
    },
    {
      slug: "flat-roofing",
      route: "/flat-roofing",
      badge: "Low-slope roofing systems",
      name: "Flat Roofing",
      shortName: "Flat roofing",
      summary:
        "Flat roofing for extensions, garages, managed buildings, and commercial properties where detailing and drainage matter just as much as the main membrane.",
      intro:
        "Flat roofs demand practical planning. The material choice matters, but so do fall, drainage, upstands, trims, and the details that stop recurring leaks from developing around the edges.",
      heroTitle:
        "Flat roofing in Northbridge for extensions, commercial property, and practical long-term performance",
      heroDescription:
        "Whether the job is a fresh installation, an aging flat roof replacement, or an inspection for recurring leaks, the focus stays on build-up, detailing, and dependable weather protection.",
      image: roofImages.commercial,
      includes: [
        "Flat roof inspections and replacement planning",
        "Low-slope roofing work for residential and commercial buildings",
        "Drainage and edge-detail review",
        "Overlay or replacement guidance depending on roof condition",
        "Repair work where the existing system still has useful life left",
      ],
      problems: [
        "Ponding water and poor runoff",
        "Recurring leaks around edges, trims, or penetrations",
        "Aging flat roofs that have become unreliable",
        "Commercial or extension roofs needing a cleaner long-term solution",
      ],
      reasons: [
        "Clients need flat roof advice that goes beyond the surface covering alone",
        "Commercial and extension roofs often need tidy access-aware planning",
        "A well-executed flat roof should feel neat, deliberate, and easy to maintain",
      ],
      process: [
        "Assess the structure, falls, and visible signs of wear",
        "Recommend repair or replacement based on performance and condition",
        "Carry out the roofing work with close attention to edges, outlets, and detail lines",
        "Review the completed roof so the client understands what has changed and why",
      ],
      faqs: [
        {
          question: "Are flat roofs only for commercial properties?",
          answer:
            "No. Flat roofs are common on extensions, garages, dormers, and many residential structures as well as larger commercial buildings.",
        },
        {
          question: "What causes flat roofs to fail early?",
          answer:
            "Poor detailing, weak drainage planning, and repeated patching without tackling the underlying build-up can all shorten the life of a flat roof.",
        },
      ],
      related: [
        "roof-repairs",
        "storm-damage-emergency-roofing",
        "inspections-free-quote",
      ],
      ctaTitle: "Need a flat roof inspected or replaced?",
      ctaText:
        "Share a few details about the roof and property, and the right next step can be scoped properly.",
    },
    {
      slug: "gutters-fascias-soffits",
      route: "/gutters-fascias-soffits",
      badge: "Roofline finishing and drainage support",
      name: "Gutters / Fascias / Soffits",
      shortName: "Roofline",
      summary:
        "Roofline upgrades that support drainage, sharpen exterior presentation, and help the full roofing system perform the way it should.",
      intro:
        "Good roofline work is more than cosmetic. Gutters, fascias, and soffits all affect how water leaves the roof and how finished the whole property looks once the work is done.",
      heroTitle:
        "Gutters, fascias, and soffits in Northbridge that support the roof and improve the finish",
      heroDescription:
        "From damaged gutter runs to tired roofline detailing, the aim is a neater exterior line, dependable drainage, and work that complements the roof above it.",
      image: roofImages.gutters,
      includes: [
        "Gutter replacement and roofline refresh work",
        "Fascia and soffit coordination with repairs or reroofing",
        "Drainage-focused review of outlets and runs",
        "Roof edge detailing to support a tidy finished look",
        "Residential and managed-property roofline upgrades",
      ],
      problems: [
        "Overflowing or poorly performing gutters",
        "Tired roof edges that let down the whole appearance of the property",
        "Roofline defects contributing to damp or water tracking",
        "Replacement roof projects where the old roofline no longer matches the new finish",
      ],
      reasons: [
        "Clients want the property to look more complete, not just patched",
        "Drainage details have a direct effect on roof performance and wall protection",
        "Roofline work is often the finishing touch that turns a roofing job into a polished result",
      ],
      process: [
        "Review the current roofline and how it is performing during wet weather",
        "Set out what needs replacing, adjusting, or coordinating with roofing work",
        "Install the new roofline components with attention to fit and finish",
        "Check water path, visual alignment, and overall presentation before handover",
      ],
      faqs: [
        {
          question: "Do gutters and roofline items need to be replaced with every new roof?",
          answer:
            "Not always, but they should be reviewed at the same time. If the roofline is tired, misaligned, or affecting drainage, it often makes sense to address it alongside the roofing work.",
        },
        {
          question: "Can poor gutters make a roof problem seem worse?",
          answer:
            "Yes. Overflowing or badly directed water can mimic roof leaks, stain external walls, or create damp-related issues that appear to come from elsewhere.",
        },
      ],
      related: [
        "roof-replacements-new-roofs",
        "roof-repairs",
        "inspections-free-quote",
      ],
      ctaTitle: "Need a cleaner, better-performing roofline?",
      ctaText:
        "Use the quote form to ask about guttering, fascias, soffits, or roofline work alongside wider roofing repairs.",
    },
    {
      slug: "storm-damage-emergency-roofing",
      route: "/storm-damage-emergency-roofing",
      badge: "Urgent weather-related roofing support",
      name: "Storm Damage / Emergency Roofing",
      shortName: "Storm damage",
      summary:
        "Roofing support for wind damage, sudden leaks, exposed sections, and urgent situations where the roof needs prompt assessment and a practical next step.",
      intro:
        "Storm-related roofing issues need calm assessment and a clear plan. The first priority is making the roof safer, limiting further damage, and deciding whether the right answer is an immediate repair, temporary protection, or wider follow-on work.",
      heroTitle:
        "Storm damage and emergency roofing in Northbridge for urgent leaks, exposed coverings, and weather-related faults",
      heroDescription:
        "When the roof has been affected by high winds, driving rain, or sudden failure, the site is set up to drive quick contact and practical next steps without unnecessary friction.",
      image: roofImages.team,
      includes: [
        "Urgent roof checks after storms or heavy weather",
        "Assessment of slipped, lifted, or exposed coverings",
        "Immediate practical measures where a roof needs making safer",
        "Follow-on repair or replacement planning once the condition is clear",
        "Straightforward quote requests for weather-related roofing issues",
      ],
      problems: [
        "Wind-lifted or displaced roof covering",
        "Sudden leaks after heavy rainfall",
        "Visible roofline damage after a storm event",
        "Uncertainty over whether the roof is safe to leave as it is",
      ],
      reasons: [
        "Clients need urgency without panic or vague promises",
        "Weather-related issues often need a staged response instead of one rushed decision",
        "A good roofing company should explain what is urgent now and what can be planned properly next",
      ],
      process: [
        "Confirm the issue and whether the situation appears urgent",
        "Assess the damaged area and identify the most practical immediate response",
        "Carry out agreed remedial or protective work where appropriate",
        "Set out any recommended permanent repair or replacement scope after the immediate risk is controlled",
      ],
      faqs: [
        {
          question: "Should I call straight away after storm damage?",
          answer:
            "If the roof is actively leaking, coverings are visibly displaced, or the property may be exposed to further damage, it makes sense to reach out quickly so the next step can be assessed.",
        },
        {
          question: "Is emergency roofing always a same-day permanent fix?",
          answer:
            "Not always. Sometimes the right first move is to make the roof safer and weather-tight, then return with the right materials and scope for the permanent work.",
        },
      ],
      related: [
        "roof-repairs",
        "roof-replacements-new-roofs",
        "inspections-free-quote",
      ],
      ctaTitle: "Need urgent roofing support?",
      ctaText:
        "Call now for time-sensitive issues or request a quote online if you need a planned inspection after recent bad weather.",
    },
    {
      slug: "inspections-free-quote",
      route: "/inspections-free-quote",
      badge: "Inspection-led quoting",
      name: "Inspections / Free Quote",
      shortName: "Inspections",
      summary:
        "A focused inspection and quote process built to make roofing decisions feel clear, practical, and easy to act on.",
      intro:
        "A strong roofing website should not feel like it jumps straight to a hard sell. Inspections and quotes are where trust is won, because that is where the client finds out what is actually wrong, what the sensible options are, and what the work should involve.",
      heroTitle:
        "Roof inspections and free quote requests in Northbridge with clear next steps from the start",
      heroDescription:
        "Use this page to position the business as practical, approachable, and careful with recommendations whether the issue is a leak, replacement question, storm concern, or roofline defect.",
      image: roofImages.roofline,
      includes: [
        "Inspection-led quote requests for repairs, replacements, and roofline work",
        "Clear information gathering from the contact form",
        "Advice structured around roof condition and property needs",
        "Photo-ready service page content that suits residential and commercial enquiries",
        "A short form designed for mobile conversion and easy follow-up",
      ],
      problems: [
        "Property owners are unsure what type of roofing service they actually need",
        "Past quotes have felt vague or too sales-led",
        "The roof needs a professional view before deciding between repair and replacement",
        "A local business needs a quote page that feels credible rather than generic",
      ],
      reasons: [
        "Inspection-led pages build trust before the first call even happens",
        "Short forms lower friction on mobile without making the enquiry feel flimsy",
        "Clear quote language helps businesses look experienced without inventing exaggerated claims",
      ],
      process: [
        "Submit the short form with contact details and a brief description of the issue",
        "Review the likely service type and plan the right inspection or call-back",
        "Explain the findings and recommended scope clearly",
        "Move forward with repair, replacement, or follow-on work if the quote is approved",
      ],
      faqs: [
        {
          question: "What should I include when requesting a roofing quote?",
          answer:
            "The property location, the type of issue, the roof area involved, and anything you have already noticed such as leaks, slipped coverings, or recurring damp are all useful details.",
        },
        {
          question: "Can I ask for a quote if I am not sure which service applies?",
          answer:
            "Yes. That is exactly what inspection-led quoting is for. The contact form is there to start the conversation even if the fault is not fully diagnosed yet.",
        },
      ],
      related: [
        "roof-repairs",
        "roof-replacements-new-roofs",
        "storm-damage-emergency-roofing",
      ],
      ctaTitle: "Ready to request a roof inspection or quote?",
      ctaText:
        "Share the basics through the short form and make the next step easy for the business and the customer alike.",
    },
  ] as ServiceItem[],
  additionalServices: [
    {
      name: "Residential roofing",
      summary:
        "Pitched roofs, extensions, garage roofs, and general home roofing support.",
    },
    {
      name: "Commercial roofing",
      summary:
        "Roofing scopes for managed sites, business premises, and practical building maintenance.",
    },
    {
      name: "Roof maintenance",
      summary:
        "Condition checks and practical upkeep planning to keep small defects from turning into larger works.",
    },
    {
      name: "Metal roofing",
      summary:
        "Metal roof enquiries and installations where the finish suits the property and specification.",
    },
    {
      name: "Conservatory roofs",
      summary:
        "Upgrade or replacement options where clients want improved comfort and a better finished appearance.",
    },
    {
      name: "Roof windows / skylights",
      summary:
        "Rooflight-related roofing work coordinated as part of repair or replacement projects.",
    },
    {
      name: "Chimney repairs",
      summary:
        "Roof-level remedial work around chimneys, flashings, and adjoining details.",
    },
    {
      name: "Dry fix systems",
      summary:
        "Dry ridge, verge, and associated upgrade options where suited to the roof build and desired finish.",
    },
  ] as AdditionalService[],
  contactHighlights: [
    "Call now for urgent roofing concerns",
    "Use the short quote form for planned inspections and pricing",
    "Easy to localize for either postcode or ZIP-based enquiries",
  ],
} as const;

export const siteNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export const legalNavigation = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Site Policy", href: "/site-policy" },
];

export const siteDescription = `${siteConfig.businessName} provides roof repairs, roof replacements, flat roofing, gutters, and inspection-led roofing services in ${siteConfig.city} and across ${siteConfig.region}.`;

export function getServiceBySlug(slug: ServiceItem["slug"]) {
  const service = siteConfig.services.find((item) => item.slug === slug);

  if (!service) {
    throw new Error(`Unknown service slug: ${slug}`);
  }

  return service;
}

export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
