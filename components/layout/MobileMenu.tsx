"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Fermer le menu lors d'un changement de page
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Bloquer le scroll et gérer la touche Échap
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Bouton hamburger */}
      <button
        type="button"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-sm transition-colors hover:bg-[var(--muted)]"
      >
        <span className="flex w-6 flex-col gap-[6px]">
          <span
            className={`block h-px w-full bg-[var(--foreground)] transition-transform duration-300 ${
              isOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-[var(--foreground)] transition-transform duration-300 ${
              isOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* Fond et panneau du menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[60]">
          {/* Fond opaque derrière le panneau */}
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default bg-[#282823]/35"
          />

          {/* Panneau de navigation */}
          <div
            id="mobile-navigation"
            className="absolute right-0 top-20 flex max-h-[calc(100dvh-5rem)] w-[min(88vw,360px)] flex-col overflow-y-auto border-l border-b border-[var(--border)] bg-[#F7F5F0] px-6 pb-6 pt-5 shadow-2xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                Navigation
              </p>

              <span className="text-[10px] tracking-wider text-[var(--muted-foreground)]">
                ATELIER NOMA
              </span>
            </div>

            <nav aria-label="Navigation mobile" className="flex flex-col">
              {navigation.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(`${item.href}/`));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-[var(--border)] py-4 text-base transition-colors ${
                      isActive
                        ? "font-medium text-[var(--foreground)]"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    <span>{item.label}</span>

                    <span
                      className={`text-xs ${
                        isActive
                          ? "text-[var(--primary)]"
                          : "text-[var(--muted-foreground)]"
                      }`}
                    >
                      ↗
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6">
              <p className="mb-4 text-sm leading-6 text-[var(--muted-foreground)]">
                Imaginons ensemble un intérieur qui vous ressemble.
              </p>
            </div>

            <p className="mt-5 text-[9px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
              Architecture intérieure · Décoration
            </p>
          </div>
        </div>
      )}
    </>
  );
}
