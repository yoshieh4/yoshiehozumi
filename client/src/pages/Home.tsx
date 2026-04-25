import { Link } from "wouter";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 pb-24">
      <ul className="flex flex-col gap-20 md:gap-28 mt-8">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <Link
              href={`/${p.slug}`}
              className="block group"
            >
              <div className="aspect-video w-full overflow-hidden bg-neutral-100 relative">
                {p.thumbnail.src ? (
                  p.thumbnail.type === "image" ? (
                    <img
                      src={p.thumbnail.src}
                      alt={p.thumbnail.alt ?? p.title}
                      loading={i < 2 ? "eager" : "lazy"}
                      className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
                    />
                  ) : (
                    <video
                      src={p.thumbnail.src}
                      poster={p.thumbnail.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  )
                ) : null}
              </div>
              <div className="mt-4">
                <h2 className="text-xl md:text-2xl font-medium">
                  {p.title}
                </h2>
                {p.description && (
                  <p className="mt-1 text-sm md:text-base text-neutral-600 max-w-2xl">
                    {p.description}
                  </p>
                )}
                {p.awards && p.awards.length > 0 && (
                  <p className="mt-2 text-xs md:text-sm italic text-neutral-500">
                    {p.awards.join(" · ")}
                  </p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
