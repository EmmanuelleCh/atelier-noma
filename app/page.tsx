import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                Des espaces qui vous ressemblent
              </p>

              <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-6xl">
                Architecture intérieure
                <span className="block">et décoration à Bordeaux.</span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[var(--muted-foreground)] md:text-base">
                Atelier Noma est un studio indépendant qui imagine des
                intérieurs sur mesure, entre esthétisme et fonctionnalité. Nous
                accompagnons particuliers et professionnels dans leurs projets
                de vie et de travail.
              </p>

              <Link
                href="/realisations"
                className="mt-8 inline-flex items-center gap-5 bg-[var(--primary)] px-6 py-4 text-sm text-white transition-opacity hover:opacity-80"
              >
                Découvrir nos réalisations
                <span aria-hidden="true">→</span>
              </Link>

              <div className="mt-12 hidden items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)] md:flex">
                <span className="h-12 w-px bg-[var(--foreground)]" />
                Faites défiler pour découvrir
              </div>
            </div>

            <div className="relative min-h-[350px] overflow-hidden md:min-h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90"
                alt="Salon contemporain baigné de lumière naturelle"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />

              <div className="absolute bottom-5 left-5 bg-[var(--background)] px-4 py-3">
                <p className="text-xs tracking-wide">L'art de vivre chez soi</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] py-16 md:py-24">
        <Container>
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                Sélection de projets
              </p>

              <h2 className="mt-3 font-serif text-3xl md:text-5xl">
                Des projets uniques.
              </h2>
            </div>

            <Link
              href="/realisations"
              className="text-sm transition-opacity hover:opacity-60"
            >
              Voir toutes les réalisations →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--muted)]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl">{project.title}</h3>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[var(--muted-foreground)]">
                      {project.category} · {project.type}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-xl transition-transform group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--muted)] py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Un projet en tête ?
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
              Imaginons ensemble votre prochain espace.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[var(--muted-foreground)] md:text-base">
              Chaque projet commence par une conversation. Parlons de vos
              envies, de vos besoins et de votre vision.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-4 border border-[var(--foreground)] px-6 py-4 text-sm transition-colors hover:bg-[var(--foreground)] hover:text-white"
            >
              Parlons de votre projet
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
