// Project content. Edit titles, descriptions, awards, and media here.
// Each `slug` becomes the route: /<slug>

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt?: string;
};

export type Project = {
  slug: string;
  title: string;
  client?: string;
  year?: string;
  description: string;
  awards?: string[];
  thumbnail: ProjectMedia;
  hero?: ProjectMedia;
  body?: ProjectMedia[];
  credits?: { role: string; name: string }[];
};

export const projects: Project[] = [
  {
    slug: "thewaitingroom",
    title: "Privacy: The Waiting Room",
    client: "Apple",
    description:
      "A campaign exploring health data privacy on iPhone.",
    awards: [
      "D&AD — Graphite & Wood Pencils",
      "One Show — Silver & 2× Bronze",
    ],
    thumbnail: {
      type: "image",
      src: "/projects/thewaitingroom.gif",
      alt: "The Waiting Room",
    },
  },
  {
    slug: "verticalcinema",
    title: "Vertical Cinema: Shot on iPhone",
    client: "Apple",
    description:
      "A film celebrating the history of cinema, shot vertically on iPhone.",
    awards: [
      "Cannes Lions — Grand Prix, Gold, Silver, Bronze",
    ],
    thumbnail: {
      type: "image",
      src: "/projects/verticalcinema-poster.jpg",
      alt: "Vertical Cinema",
    },
  },
  {
    slug: "election",
    title: "iPad Air: Election",
    client: "Apple",
    description:
      "High schoolers put iPad through its paces in a mock election.",
    thumbnail: {
      type: "image",
      src: "/projects/election.gif",
      alt: "iPad Air: Election",
    },
  },
  {
    slug: "shotoniphone",
    title: "Shot on iPhone",
    client: "Apple",
    description:
      "Selected contributions to the long-running Shot on iPhone campaign.",
    thumbnail: {
      type: "image",
      src: "/projects/theweeknd.gif",
      alt: "Shot on iPhone",
    },
  },
  {
    slug: "startup",
    title: "Startup: 45 Years of Apple Sounds",
    client: "Apple",
    description:
      "An audio composition assembled from 45 years of Apple sounds, made for the Apple keynote.",
    thumbnail: {
      type: "image",
      src: "/projects/startup.gif",
      alt: "Startup",
    },
  },
  {
    slug: "guided-tour",
    title: "The Can't Decide Guide",
    client: "Apple",
    description:
      "A nine-minute guide to choosing the right iPhone — reaching 1.25M views a day.",
    thumbnail: {
      type: "image",
      src: "/projects/guided-tour.gif",
      alt: "The Can't Decide Guide",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
