export const siteConfig = {
  name: "LJ Brown UK Ltd",
  shortName: "LJ Brown UK",
  tagline: "Strong Foundations. Built to Last.",
  description:
    "Family-run groundworks and civil engineers based in Towcester. Excavation, drainage, concrete, roads and site works — professional, reliable, built on experience.",
  url: "https://www.ljbrownukltd.co.uk",
  phone: "07719 322825",
  email: "office@ljbrownukltd.co.uk",
  emailAlt: "john@ljbrownukltd.co.uk",
  address: "Unit 7a, Burcote Wood Business Park, Towcester, NN12 8TA",
  serviceAreas: [
    "Towcester",
    "Northampton",
    "Milton Keynes",
    "Wellingborough",
    "Northamptonshire",
    "Surrounding areas",
  ],
  hours: {
    weekdays: "Mon – Fri: 7:00am – 6:00pm",
    saturday: "Sat: 8:00am – 1:00pm",
    sunday: "Sun: Closed",
  },
  stats: {
    yearsExperience: "20+",
    projectsCompleted: "100+",
    focus: "Groundworks",
    coverage: "UK-Wide",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
