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
    id: "acrewood-nursery-amersham",
    title: "Acrewood Nursery",
    location: "Amersham",
    category: "Commercial",
    summary:
      "Removed the old parking and replaced it with new — Acrewood Nursery, Amersham.",
    image: images.projects.acrewood,
    heroImage: images.projects.acrewoodHero,
    gallerySections: [
      {
        label: "Old out",
        images: [
          "/images/acrewood/01-old-out.jpg",
          "/images/acrewood/02-on-site.jpg",
        ],
      },
      {
        label: "New in",
        images: [
          "/images/acrewood/03-new-surface.jpg",
          "/images/acrewood/04-finished.jpg",
          "/images/acrewood/05-finished-aerial.jpg",
          "/images/acrewood/06-finished-wide.jpg",
        ],
      },
    ],
    body: "Recent job at Acrewood Nursery in Amersham. Old parking taken out, new surface down and marked up.",
  },
  {
    id: "car-wash-northampton",
    title: "New Car Wash Facility",
    location: "St James, Northampton",
    category: "Commercial",
    summary:
      "Site preparation and groundworks for a new car wash in Northampton — steel and slab going in, then the finished bays.",
    image: images.projects.carWash,
    heroImage: images.projects.carWashHero,
    gallerySections: [
      {
        label: "The build",
        images: [
          "/images/carwash/01-site.jpg",
          "/images/carwash/03-site.jpg",
          "/images/carwash/05-site.jpg",
          "/images/carwash/08-site.jpg",
        ],
      },
      {
        label: "Finished",
        images: [
          "/images/carwash/09-finished-aerial.jpg",
          "/images/carwash/10-finished-bays.jpg",
          "/images/carwash/11-finished-entry.jpg",
          "/images/carwash/12-finished-wide.jpg",
        ],
      },
    ],
    body: "Car wash at St James, Northampton. Groundworks and the steel going up first — then the same site with the bays open and the surfacing in.",
  },
  {
    id: "glebe-farm-kettering",
    title: "New House Foundations",
    location: "Glebe Farm, Kettering",
    category: "Residential",
    summary: "New foundations for a new house at Glebe Farm, Kettering.",
    image: images.projects.glebe,
    heroImage: images.projects.glebeHero,
    gallery: [
      "/images/glebe/01-foundations.jpg",
      "/images/glebe/02-foundations.jpg",
      "/images/glebe/03-foundations.jpg",
      "/images/glebe/04-foundations.jpg",
      "/images/glebe/05-foundations.jpg",
      "/images/glebe/06-foundations.jpg",
      "/images/glebe/07-foundations.jpg",
      "/images/glebe/08-foundations.jpg",
    ],
    body: "New house at Glebe Farm, Kettering — foundations going in on the plot.",
  },
  {
    id: "new-bradwell-mk",
    title: "26 Dwellings & 8 Flats",
    location: "New Bradwell, Milton Keynes",
    category: "Housing",
    summary:
      "Housing scheme with roads and sewers — full groundworks package for dwellings and flats.",
    image: images.projects.newBradwell,
    heroImage: images.projects.newBradwellHero,
    gallery: [
      "/images/bradwell/07-site.jpg",
      "/images/bradwell/06-site.jpg",
      "/images/bradwell/04-site.jpg",
      "/images/bradwell/05-site.jpg",
      "/images/bradwell/03-site.jpg",
      "/images/bradwell/01-site.jpg",
      "/images/bradwell/02-site.jpg",
    ],
    body: "New Bradwell, Milton Keynes — 26 dwellings and 8 flats. Site photos from the groundworks through the houses going up.",
  },
  {
    id: "monkston-park-mk",
    title: "26 Dwellings with Roads & Sewers",
    location: "Monkston Park, Milton Keynes",
    category: "Housing",
    summary:
      "Residential groundworks including roads and sewer infrastructure across 26 dwellings.",
    image: images.projects.monkston,
    heroImage: images.projects.monkstonHero,
    gallery: [
      "/images/monkston/02-site.jpg",
      "/images/monkston/07-site.jpg",
      "/images/monkston/01-site.jpg",
      "/images/monkston/06-site.jpg",
      "/images/monkston/04-site.jpg",
      "/images/monkston/03-site.jpg",
      "/images/monkston/05-site.jpg",
    ],
    body: "Monkston Park, Milton Keynes — 26 dwellings with roads and sewers. Site photos from the scheme as it went up.",
  },
];

/** Real jobs from the old site — no photos from Johno yet, so they stay off the gallery. */
export const alsoDelivered = [
  { title: "Food Factory Renovation", location: "Wellingborough" },
  { title: "6 Dwellings & Block of 4 Flats", location: "Princes Risborough" },
  { title: "44 Flats Full Build Contract", location: "Northampton" },
];

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}
