import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

import { projects } from "../../data/projects";

export default function WorkPage() {

 
  return (
    <section className="container-iv section-pad pt-36">
      <p className="eyebrow">Selected work</p>

      <h1 className="display mt-4 text-6xl font-bold sm:text-8xl">
        Work that
        <br />
        <span className="text-[var(--accent-2)]">moves.</span>
      </h1>

      <p className="mt-6 max-w-lg text-sm leading-6 text-[var(--muted)]">
        A selection of digital products, business tools and experiences
        I&apos;ve built to solve real-world problems.
      </p>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.slug} className="group">
            {/* Project Image */}
           <Link href={`/work/${p.slug}`}>
  <div
    className={`project-image ${p.imageClass} transition-transform duration-300 group-hover:scale-[1.01]`}
    style={{ backgroundImage: `url(${p.imageURL})` }}
  />
</Link>

            {/* Project Information */}
            <div className="mt-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
                    {p.number} · {p.category}
                  </p>

                  <Link href={`/work/${p.slug}`}>
                    <h2 className="mt-1 font-bold text-xl">
                      {p.title}
                    </h2>
                  </Link>
                </div>

                <Link
                  href={`/work/${p.slug}`}
                  aria-label={`View ${p.title}`}
                  className="shrink-0"
                >
                  <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)]">
                {p.description}
              </p>

              {/* Result / Value */}
              <p className="mt-4 text-sm font-medium">
                {p.result}
              </p>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* External Links */}
              <div className="mt-5 flex gap-4">
                {p.liveUrl && p.liveUrl !== "#" && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium"
                  >
                    Live project
                    <ExternalLink size={13} />
                  </a>
                )}


              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}