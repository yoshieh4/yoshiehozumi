import { about } from "@/data/about";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 pb-24">
      {about.portrait && (
        <div className="w-full max-w-md mx-auto mb-10">
          <img
            src={about.portrait}
            alt="Yoshie Hozumi"
            className="w-full h-auto"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      )}

      <div className="space-y-5 text-base md:text-lg leading-relaxed">
        {about.bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <hr className="my-10 border-neutral-200" />

      <ul className="space-y-3 text-sm md:text-base">
        {about.awards.map((a) => (
          <li key={a.org}>
            <span className="font-medium">{a.org}:</span>{" "}
            <span className="text-neutral-600">{a.line}</span>
          </li>
        ))}
      </ul>

      <hr className="my-10 border-neutral-200" />

      <div className="text-sm md:text-base space-y-2">
        <p>
          <a href={`mailto:${about.contact}`}>{about.contact}</a>
        </p>
        {about.links.map((l) => (
          <p key={l.href}>
            <a href={l.href} target="_blank" rel="noreferrer">
              {l.label} ↗
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}
