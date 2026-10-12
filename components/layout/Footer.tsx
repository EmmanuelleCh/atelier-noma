import Link from "next/link";
import Container from "@/components/ui/Container";

const footerLinks = {
  studio: [
    { label: "Le studio", href: "/studio" },
    { label: "Prestations", href: "/prestations" },
    { label: "Réalisations", href: "/realisations" },
  ],
  information: [
    { label: "Contact", href: "/contact" },
    { label: "Mentions légales", href: "/legal" },
    { label: "Confidentialité", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block">
              <span className="block text-lg tracking-[0.18em]">
                ATELIER NOMA
              </span>
              <span className="mt-1 block text-[9px] tracking-[0.2em] text-[var(--muted-foreground)]">
                ARCHITECTURE INTÉRIEURE · DÉCORATION
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted-foreground)]">
              Des intérieurs singuliers, pensés autour de vos envies, de vos
              usages et de la beauté du quotidien.
            </p>

            <p className="mt-4 text-xs text-[var(--muted-foreground)]">
              Bordeaux et ses environs
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em]">
              Découvrir
            </h2>

            <ul className="mt-5 space-y-3">
              {footerLinks.studio.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em]">
              Informations
            </h2>

            <ul className="mt-5 space-y-3">
              {footerLinks.information.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-3 border border-[var(--border)] px-4 py-3 text-sm transition-colors hover:border-[var(--foreground)]"
            >
              Parlons de votre projet
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Atelier Noma</p>
          <p>Un intérieur, une histoire.</p>
        </div>
      </Container>
    </footer>
  );
}
