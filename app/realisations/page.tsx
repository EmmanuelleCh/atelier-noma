import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Nos réalisations | Atelier Noma",
  description:
    "Découvrez les projets d'architecture intérieure et de décoration réalisés par Atelier Noma à Bordeaux.",
};

export default function RealisationsPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
            Notre portfolio
          </p>

          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Des espaces pensés pour être vécus.
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)] md:text-base">
            Chaque lieu possède son histoire. Nous imaginons des intérieurs
            singuliers qui associent matières naturelles, fonctionnalité et sens
            du détail.
          </p>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] py-12 md:py-16">
        <Container>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.id}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--muted)]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-serif text-2xl">{project.title}</h2>

                  <span className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
                    {project.type}
                  </span>
                </div>

                <p className="mt-2 text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
                  {project.category}
                </p>

                <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted-foreground)]">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--muted)] py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl">
              Votre projet sera peut-être le prochain.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
              Parlons de vos envies et imaginons ensemble un espace qui vous
              ressemble.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-4 border border-[var(--foreground)] px-6 py-4 text-sm transition-colors hover:bg-[var(--foreground)] hover:text-white"
            >
              Démarrer un projet →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
