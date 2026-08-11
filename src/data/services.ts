import { images } from "./images";

export type ServiceCategory = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  highlights: string[];
  image: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "groundworks",
    title: "Groundworks & Excavation",
    slug: "groundworks-excavation",
    summary:
      "Full groundworks packages — dig, formation and site prep ready for the build.",
    description:
      "From first break of ground through to a clean, construction-ready platform. Bulk dig, foundations formation and enabling works for residential, commercial and industrial schemes.",
    highlights: [
      "Bulk excavation & site strip",
      "Formation for foundations",
      "Plant & operator package",
    ],
    image: images.services.excavation,
  },
  {
    id: "drainage",
    title: "Drainage Solutions",
    slug: "drainage-solutions",
    summary:
      "Foul, surface and stormwater drainage designed to protect the site long-term.",
    description:
      "Drainage that actually works. We install foul and surface water systems, manage stormwater and put erosion control in place so your site stays compliant and buildable.",
    highlights: [
      "Foul & surface water",
      "Stormwater management",
      "Erosion control measures",
    ],
    image: images.services.drainage,
  },
  {
    id: "concrete",
    title: "Concrete Works",
    slug: "concrete-works",
    summary:
      "Footings, slabs, bases and structural concrete — formed and poured properly.",
    description:
      "Robust concrete works for foundations, ground-bearing slabs, pads and bases. Careful setting-out, quality materials and finishes you can build on.",
    highlights: [
      "Footings & pads",
      "Ground-bearing slabs",
      "Structural bases & yards",
    ],
    image: images.services.foundations,
  },
  {
    id: "roads",
    title: "Road & Paving",
    slug: "road-paving",
    summary:
      "Roads, sewers and hardstanding for housing schemes and commercial sites.",
    description:
      "Road formation, paving and hardstanding as part of a coordinated groundworks package — including the drainage and levels that keep access working for years.",
    highlights: [
      "Road formation & carriageways",
      "Hardstanding & yards",
      "Housing scheme infrastructure",
    ],
    image: images.services.grading,
  },
  {
    id: "civil",
    title: "Civil Engineering & Site Works",
    slug: "civil-engineering-site-works",
    summary:
      "Enabling works, utilities, earthworks and full site packages under one team.",
    description:
      "Civil engineering and site works that pull the whole package together — earthworks, trenching, utilities, land clearing and enabling so the programme keeps moving.",
    highlights: [
      "Earthworks & stabilisation",
      "Utilities & trenching",
      "Full enabling packages",
    ],
    image: images.services.earthwork,
  },
  {
    id: "trenching",
    title: "Trenching & Utilities",
    slug: "trenching-utilities",
    summary:
      "Clean trenches and underground utilities installed safe and on programme.",
    description:
      "Precise trenching for water, sewer, power and telecoms, plus utility installation done to industry standards with safety first.",
    highlights: [
      "Service trenches",
      "Water & sewer installs",
      "Ducts & conduits",
    ],
    image: images.services.trenching,
  },
];

export const featuredServices = serviceCategories.slice(0, 5);
