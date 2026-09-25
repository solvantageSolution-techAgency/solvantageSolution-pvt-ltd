import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";

export default function ServicesPage() {
  return (
    <section className="container-iv  section-pad pt-28">
      <p className="eyebrow text-[9px]">Our services</p>

      <h1 className="display pt-3 text-5xl font-bold sm:text-6xl border">
        Everything
        <br />
        you need.
      </h1>

      <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {services.map((s) => (
          <Link
            href={`/services/${s.slug}`}
            key={s.slug}
            className="group grid gap-4 py-6 md:grid-cols-[60px_1fr_1fr_auto] md:items-center"
          >
            <span className="text-xs font-bold text-[var(--accent-2)]">
              {s.number}
            </span>

            <h2 className="display text-2xl font-bold">
              {s.title}
            </h2>

            <p className="max-w-sm text-xs leading-5 text-[var(--muted)]">
              {s.description}
            </p>

            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}