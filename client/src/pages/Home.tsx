import { Link } from "wouter";
import { projects, type Project } from "@/data/projects";
import { AppleLogo } from "@/components/AppleLogo";

export default function Home() {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-14">
      {projects.map((p, i) => (
        <ProjectRow key={p.slug} project={p} eager={i < 2} />
      ))}
    </div>
  );
}

function ProjectRow({ project, eager }: { project: Project; eager: boolean }) {
  return (
    <article className="border-b border-[var(--color-rule)]">
      <Link
        href={`/${project.slug}`}
        className="block py-10 md:py-14 lg:py-16 hover:opacity-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-[5fr_8fr] gap-y-8 md:gap-x-10 lg:gap-x-14">
          <div className="flex flex-col">
            <h2 className="leading-[1.15] text-[28px] md:text-[30px] lg:text-[34px] text-[var(--color-ink)] font-normal">
              {project.series && (
                <span className="flex items-center gap-2 underline underline-offset-[5px] decoration-[1.5px]">
                  {project.appleLogo && (
                    <AppleLogo
                      size={24}
                      className="-mt-1 inline-block shrink-0"
                    />
                  )}
                  <span>{project.series}</span>
                </span>
              )}
              <span className="block underline underline-offset-[5px] decoration-[1.5px]">
                {project.title}
              </span>
            </h2>

            <p className="mt-7 md:mt-10 text-[15px] md:text-[16px] leading-[1.5] text-[var(--color-ink)] max-w-md">
              {project.description}
            </p>

            {project.awards && project.awards.length > 0 && (
              <ul className="mt-5 space-y-1 text-[13px] md:text-[14px] leading-[1.45] text-[var(--color-ink-muted)]">
                {project.awards.map((a, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span aria-hidden className="select-none">✷</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="w-full">
            {project.thumbnail.src ? (
              project.thumbnail.type === "image" ? (
                <img
                  src={project.thumbnail.src}
                  alt={project.thumbnail.alt ?? project.title}
                  loading={eager ? "eager" : "lazy"}
                  className="w-full h-auto block"
                />
              ) : (
                <video
                  src={project.thumbnail.src}
                  poster={project.thumbnail.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto block"
                />
              )
            ) : (
              <div className="w-full aspect-video bg-neutral-100" />
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
