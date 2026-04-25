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
  series?: string;
  title: string;
  appleLogo?: boolean;
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
    series: "Privacy",
    title: "The Waiting Room",
    appleLogo: true,
    description:
      "What if your health data wasn't as private as you thought? Unless you're on an iPhone.",
    awards: [
      "D&AD Graphite & Wood Pencils",
      "One Show Silver & 2x Bronze",
      "ANDYs Gold",
    ],
    thumbnail: {
      type: "image",
      src: "/projects/thewaitingroom.gif",
      alt: "The Waiting Room",
    },
  },
  {
    slug: "verticalcinema",
    series: "Vertical Cinema",
    title: "Shot on iPhone",
    description:
      "A love letter to the history of cinema in the format of our current generation.",
    awards: [
      "D&AD Yellow, Graphite, and 2x Wood Pencils",
      "Cannes Lions Grand Prix, Gold, Silver, and Bronze",
      "One Show 4x Gold, 3x Silver",
      "Webby",
    ],
    thumbnail: {
      type: "image",
      src: "/projects/verticalcinema.webp",
      alt: "Vertical Cinema",
    },
  },
  {
    slug: "election",
    series: "iPad Air",
    title: "Election",
    appleLogo: true,
    description:
      "Exactly how useful can an iPad be? We had a few high schoolers put it to the test.",
    thumbnail: {
      type: "image",
      src: "/projects/election.gif",
      alt: "iPad Air: Election",
    },
  },
  {
    slug: "shotoniphone",
    title: "Shot on iPhone",
    description:
      "A few pieces I contributed to the 'Shot on iPhone' campaign platform.",
    awards: ["Cannes Lions Grand Prix — Shot on iPhone platform"],
    thumbnail: {
      type: "image",
      src: "/projects/theweeknd.gif",
      alt: "Shot on iPhone",
    },
  },
  {
    slug: "startup",
    series: "Startup",
    title: "45 Years of Apple Sounds",
    appleLogo: true,
    description:
      "A bespoke track made out of Apple sounds to open the Keynote event.",
    awards: ["Cannes 2x Silver", "Clio Gold", "One Show Silver"],
    thumbnail: {
      type: "image",
      src: "/projects/startup.gif",
      alt: "Startup: 45 Years of Apple Sounds",
    },
  },
  {
    slug: "guided-tour",
    title: "The Can't Decide Guide",
    description:
      "Every year there is a collection of new iPhones. Which one will you choose?",
    awards: ["This 9 min film gets 1.25M views a day"],
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
