import { images } from "./images";

export type GallerySection = {
  label: string;
  images: string[];
};

export type Project = {
  id: string;
  title: string;
  location: string;
  category: string;
  summary: string;
  image: string;
  heroImage?: string;
  gallery?: string[];
  gallerySections?: GallerySection[];
  body?: string;
};

export function projectHasPhotos(project: Project) {
  return Boolean(project.gallery?.length || project.gallerySections?.length);
}

export const wellingboroughGallery = [
  "/images/wellingborough/01-foundations.jpg",
  "/images/wellingborough/02-groundworks.jpg",
  "/images/wellingborough/03-foundations-alt.jpg",
  "/images/wellingborough/04-flats-street.jpg",
  "/images/wellingborough/05-flats-scaffold.jpg",
  "/images/wellingborough/06-roof-trusses.jpg",
] as const;

export const projects: Project[] = [
  {
    id: "flats-wellingborough",
    title: "17 Flats Development",
    location: "Wellingborough",
    category: "Residential",
    summary:
      "Groundworks through to the flats going up — 17 units in Wellingborough. Foundations, brickwork and the roof going on.",
    image: images.projects.flatsWellingborough,
    heroImage: images.projects.flatsWellingboroughHero,
    gallery: [...wellingboroughGallery],
    body: "Site photos from the 17-flat scheme in Wellingborough. Groundworks first — foundations, formwork and plant on the plot — then the brick flats going up with the timber roof on.",
  },
  {
    id: "caravan-pads-pevensey",
    title: "150 Pads — Pevensey Bay",
    location: "Pevensey Bay, Eastbourne",
    category: "Leisure",
    summary:
      "150 pads on a holiday home park — from the groundworks going in through to the park as it stands now.",
    image: images.projects.caravanPads,
    heroImage: images.projects.caravanPadsHero,
    gallerySections: [
      {
        label: "The start",
        images: [
          "/images/pevensey/01-start-pads.jpg",
          "/images/pevensey/02-start-excavator.jpg",
          "/images/pevensey/03-start-plant.jpg",
          "/images/pevensey/04-start-poured.jpg",
          "/images/pevensey/05-start-wide.jpg",
        ],
      },
      {
        label: "How it is now",
        images: [
          "/images/pevensey/06-now-park.jpg",
          "/images/pevensey/07-now-wide.jpg",
          "/images/pevensey/08-now-homes.jpg",
          "/images/pevensey/09-now-pads.jpg",
        ],
      },
    ],
    body: "Holiday home park at Pevensey Bay. Groundworks first — pads, plant and the plot taking shape — then the same site with the homes on and the roads in.",
  },
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

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}
