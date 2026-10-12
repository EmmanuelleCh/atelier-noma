import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

export const metadata = {
  title: "Le studio | Atelier Noma",
  description:
    "Découvrez l'approche, les valeurs et la méthode de travail d'Atelier Noma, studio d'architecture intérieure à Bordeaux.",
};

const values = [
  {
    number: "01",
    title: "L'écoute avant tout",
    description:
      "Chaque projet commence par une conversation. Comprendre vos habitudes, vos envies et vos contraintes nous permet d'imaginer un intérieur qui vous ressemble vraiment.",
  },
  {
    number: "02",
    title: "La beauté du quotidien",
    description:
      "Un intérieur réussi ne se résume pas à une belle image. Il doit être agréable à vivre, pratique au quotidien et capable d'évoluer avec vous.",
  },
  {
    number: "03",
    title: "Le sens du détail",
    description:
      "L'harmonie naît souvent des détails : une matière, une texture, une lumière ou un contraste qui donne toute sa personnalité à un espace.",
  },
];

const steps = [
  {
    number: "01",
    title: "La rencontre",
    description:
      "Nous échangeons sur vos besoins, votre budget, vos inspirations et les contraintes de votre espace.",
  },
  {
    number: "02",
    title: "La conception",
    description:
      "Nous construisons une proposition cohérente autour des volumes, des matières, des couleurs et des usages.",
  },
  {
    number: "03",
    title: "La concrétisation",
    description:
      "Nous précisons les choix retenus et les prochaines étapes pour donner vie au projet selon la mission définie ensemble.",
  },
];

export default function StudioPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
            Le studio
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            Créer des lieux qui ont une âme.
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)] md:text-base">
            Nous croyons que les espaces dans lesquels nous vivons influencent
            notre façon de nous sentir, de travailler et de partager des
            moments. Notre rôle est d'imaginer des intérieurs sensibles,
            fonctionnels et durables.
          </p>
        </Container>
      </section>

      <section className="border-y border-[var(--border)]">
        <Container className="grid gap-10 py-12 md:grid-cols-2 md:items-center md:gap-16 md:py-20">
          <div className="relative min-h-[350px] md:min-h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
              alt="Intérieur lumineux aux matières naturelles"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Notre philosophie
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
              Un intérieur ne devrait jamais ressembler à un autre.
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted-foreground)]">
              <p>
                Atelier Noma est né d'une conviction simple : les plus beaux
                espaces sont ceux qui racontent quelque chose de leurs
                occupants.
              </p>

              <p>
                Nous imaginons chaque projet à partir d'une page presque
                blanche. Vos habitudes, vos goûts, la lumière et l'architecture
                existante deviennent les points de départ d'une réflexion sur
                mesure.
              </p>

              <p>
                Notre approche privilégie les matières naturelles, les lignes
                justes et les choix réfléchis plutôt que les tendances
                éphémères.
              </p>
            </div>

            <p className="mt-8 font-serif text-xl italic">
              Des espaces singuliers, pensés pour durer.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Nos engagements
            </p>

            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
              Ce qui guide chaque projet.
            </h2>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {values.map((value) => (
              <article
                key={value.number}
                className="border-t border-[var(--border)] pt-5"
              >
                <p className="font-serif text-2xl text-[var(--muted-foreground)]">
                  {value.number}
                </p>

                <h3 className="mt-5 font-serif text-2xl">{value.title}</h3>

                <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--muted)] py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              Notre méthode
            </p>

            <h2 className="mt-4 font-serif text-3xl md:text-5xl">
              Du premier échange au projet concret.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[var(--muted-foreground)]">
              Un cadre clair permet de prendre les bonnes décisions et d'avancer
              sereinement, étape par étape.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="border-t border-[var(--border)] pt-5"
              >
                <p className="text-xs tracking-[0.2em] text-[var(--muted-foreground)]">
                  ÉTAPE {step.number}
                </p>

                <h3 className="mt-4 font-serif text-2xl">{step.title}</h3>

                <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl md:text-5xl">
              Faisons connaissance.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[var(--muted-foreground)]">
              Vous avez un lieu à transformer ou une idée à explorer ? Le
              premier pas est simplement d'en parler.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-4 bg-[var(--primary)] px-6 py-4 text-sm text-white transition-opacity hover:opacity-80"
            >
              Rencontrons-nous →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
