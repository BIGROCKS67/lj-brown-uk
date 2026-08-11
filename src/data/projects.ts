import { images } from "./images";

export type Project = {
  id: string;
  title: string;
  location: string;
  category: string;
  summary: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "food-factory-wellingborough",
    title: "Food Factory Renovation",
    location: "Wellingborough",
    category: "Commercial",
    summary:
      "Groundworks package supporting the renovation of a working food factory — delivered around live site constraints.",
    image: images.projects.foodFactory,
  },
  {
    id: "caravan-pads-pevensey",
    title: "150+ Caravan Pads",
    location: "Pevensey Bay, Eastbourne",
    category: "Leisure",
    summary:
      "Formation and pads for 150+ caravan plots on a holiday home park — scale, levels and drainage done properly.",
    image: images.projects.caravanPads,
  },
  {
    id: "flats-wellingborough",
    title: "17 Flats Development",
    location: "Wellingborough",
    category: "Residential",
    summary:
      "Groundworks and enabling for a 17-unit residential scheme, setting the platform for the build above.",
    image: images.projects.flatsWellingborough,
  },
  {
    id: "car-wash-northampton",
    title: "New Car Wash Facility",
    location: "St James, Northampton",
    category: "Commercial",
    summary:
      "Site preparation and groundworks for a new car wash facility in Northampton.",
    image: images.projects.carWash,
  },
  {
    id: "new-bradwell-mk",
    title: "26 Dwellings & 8 Flats",
    location: "New Bradwell, Milton Keynes",
    category: "Housing",
    summary:
      "Housing scheme with roads and sewers — full groundworks package for dwellings and flats.",
    image: images.projects.newBradwell,
  },
  {
    id: "monkston-park-mk",
    title: "26 Dwellings with Roads & Sewers",
    location: "Monkston Park, Milton Keynes",
    category: "Housing",
    summary:
      "Residential groundworks including roads and sewer infrastructure across 26 dwellings.",
    image: images.projects.monkston,
  },
  {
    id: "princes-risborough",
    title: "6 Dwellings & Block of 4 Flats",
    location: "Princes Risborough",
    category: "Residential",
    summary:
      "Mixed residential scheme — houses and flats delivered with a clean, coordinated groundworks package.",
    image: images.projects.princesRisborough,
  },
  {
    id: "northampton-flats",
    title: "44 Flats Full Build Contract",
    location: "Northampton",
    category: "Residential",
    summary:
      "Full build contract for 44 flats — major residential delivery from the ground up.",
    image: images.projects.northamptonFlats,
  },
];
