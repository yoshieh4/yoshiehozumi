import { Link, useRoute } from "wouter";
import { getProject } from "@/data/projects";

export default function Project() {
  const [, params] = useRoute("/:slug");
  const slug = params?.slug;
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-24 text-center">
        <p className="text-neutral-600">Page not found.</p>
        <Link href="/" className="underline mt-4 inline-block">
          Back to work
        </Link>
      </div>
    );
  }

  const hero = project.hero ?? project.thumbnail;

  return (
    <article className="max-w-5xl mx-auto px-6 md:px-10 pb-24">
      <header className="mb-8">
        <h1 className="text-2xl md:text-4xl font-medium">{project.title}</h1>
        {project.client && (
          <p className="mt-2 text-neutral-600">{project.client}</p>
        )}
      </header>

      {hero && (
        <div className="w-full aspect-video overflow-hidden bg-neutral-100 mb-10">
          {hero.type === "image" ? (
            <img
              src={hero.src}
              alt={hero.alt ?? project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={hero.src}
              poster={hero.poster}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-full object-cover"
            />
          )}
        </div>
      )}

      <div className="max-w-2xl text-base md:text-lg leading-relaxed">
        <p>{project.description}</p>
        {project.awards && project.awards.length > 0 && (
          <ul className="mt-6 space-y-1 text-sm italic text-neutral-600">
            {project.awards.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        )}
      </div>

      {project.body && project.body.length > 0 && (
        <div className="mt-12 space-y-8">
          {project.body.map((m, i) =>
            m.type === "image" ? (
              <img key={i} src={m.src} alt={m.alt ?? ""} className="w-full" />
            ) : (
              <video
                key={i}
                src={m.src}
                poster={m.poster}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full"
              />
            ),
          )}
        </div>
      )}

      {project.credits && project.credits.length > 0 && (
        <div className="mt-16 text-sm text-neutral-600 grid grid-cols-1 md:grid-cols-2 gap-y-2">
          {project.credits.map((c, i) => (
            <div key={i}>
              <span className="font-medium">{c.role}</span> — {c.name}
            </div>
          ))}
        </div>
      )}

      <div className="mt-16">
        <Link href="/" className="underline text-sm">
          ← Back to work
        </Link>
      </div>
    </article>
  );
}
