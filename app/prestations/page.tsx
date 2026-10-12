import Link from "next/link";

import Container from "@/components/ui/Container";
import { services } from "@/data/services";

export const metadata = {
  title: "Prestations | Atelier Noma",
  description:
    "Découvrez les prestations de décoration, rénovation et aménagement intérieur proposées par Atelier Noma à Bordeaux.",
};

export default function PrestationsPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
            Nos expertises
          </p>

          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Des solutions adaptées à votre espace et à votre vie.
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)] md:text-base">
            Chaque projet est différent. Nous vous accompagnons de la première
            réflexion jusqu'aux choix qui donneront à votre intérieur son
            caractère singulier.
          </p>
        </Container>
      </section>

      <section className="border-t border-[var(--border)]">
        <Container>
          <div className="divide-y divide-[var(--border)]">
            {services.map((service) => (
              <article
                key={service.id}
                className="grid gap-6 py-10 md:grid-cols-[100px_1fr_1fr] md:gap-10 md:py-14"
              >
                <p className="font-serif text-3xl text-[var(--muted-foreground)]">
                  {service.number}
                </p>

                <div>
                  <h2 className="font-serif text-2xl md:text-3xl">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                    {service.description}
                  </p>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider">
                    Idéal pour
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                    {service.idealFor}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider">
                    Ce qui est inclus
                  </p>

                  <ul className="mt-4 space-y-3">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm leading-6 text-[var(--muted-foreground)]"
                      >
                        <span aria-hidden="true">—</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?service=${service.id}`}
                    className="mt-6 inline-flex items-center gap-3 text-sm underline underline-offset-4 transition-opacity hover:opacity-60"
                  >
                    Parlons de ce service
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--muted)] py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Votre projet
            </p>

            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Vous avez une idée en tête ?
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
              Faisons le point sur vos besoins, vos contraintes et vos envies.
              Le premier échange permettra d'imaginer la suite ensemble.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-4 bg-[var(--primary)] px-6 py-4 text-sm text-white transition-opacity hover:opacity-80"
            >
              Parlons de votre projet →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
