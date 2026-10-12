import Link from "next/link";
import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="relative z-[60]">
          <span className="block text-base tracking-[0.18em] md:text-lg">
            ATELIER NOMA
          </span>

          <span className="mt-1 block text-[8px] tracking-[0.16em] text-[var(--muted-foreground)] sm:text-[9px] sm:tracking-[0.2em]">
            ARCHITECTURE INTÉRIEURE · DÉCORATION
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-6 lg:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="relative z-[110] flex h-11 w-11 items-center justify-center">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
