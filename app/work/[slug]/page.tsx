import { notFound } from "next/navigation";

import { projects } from "../../../data/projects";
import Button from "../../../components/ui/Button";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="container-iv section-pad pt-36">
      {/* Project category */}
      <p className="eyebrow">
        {project.number} / {project.category}
      </p>

      {/* Project title */}
      <h1 className="display mt-4 max-w-5xl text-6xl font-bold sm:text-8xl">
        {project.title}
      </h1>

      {/* Project description */}
      <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
        {project.description}
      </p>

      {/* Project Image */}
      <div
        className="project-image mt-14 min-h-[520px]"
        style={{
          backgroundImage: `url(${project.imageURL})`,
        }}
      />

      {/* Project Information */}
      <div className="mt-10 grid gap-8 border-t border-[var(--line)] pt-8 md:grid-cols-3">
        {/* Result */}
        <div>
          <p className="eyebrow">Result</p>

          <p className="mt-2 font-bold">
            {project.result}
          </p>
        </div>

        {/* Technologies */}
        <div>
          <p className="eyebrow">Technologies</p>

          <p className="mt-2 font-bold">
            {project.tags.join(" · ")}
          </p>
        </div>

        {/* Approach */}
        <div>
          <p className="eyebrow">Approach</p>

          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            Strategy, interface design and a performance-focused build.
          </p>
        </div>
      </div>

      {/* Live Project */}
      {project.liveUrl && project.liveUrl !== "#" && (
        <div className="mt-12 flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium transition-opacity hover:opacity-70"
          >
            View Live Project
          </a>

          
        </div>
      )}

      {/* Contact */}
      <div className="mt-8">
        <Button href="/contact">
          Start a Similar Project
        </Button>
      </div>
    </section>
  );
}