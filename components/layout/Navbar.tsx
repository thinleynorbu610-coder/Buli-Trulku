"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/buliTrulku";
import { useLang, type MessageKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { SearchDialog } from "./SearchDialog";

export function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    const path = href.split("#")[0];
    return path !== "/" && pathname.startsWith(path);
  };

  const LangToggle = (
    <div
      className="flex items-center gap-2 text-[0.72rem] tracking-[0.18em]"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "transition",
          lang === "en" ? "text-gold-light" : "text-ivory/60 hover:text-ivory",
        )}
      >
        EN
      </button>
      <span className="text-gold/50" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setLang("dz")}
        aria-pressed={lang === "dz"}
        lang="dz"
        title="Dzongkha — translation coming soon"
        className={cn(
          "tibetan text-sm tracking-normal transition",
          lang === "dz" ? "text-gold-light" : "text-ivory/60 hover:text-ivory",
        )}
      >
        རྫོང་ཁ
      </button>
    </div>
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          scrolled || menuOpen
            ? "border-b border-gold/20 bg-night/90 py-3 backdrop-blur-md"
            : "bg-gradient-to-b from-night/70 to-transparent py-6",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-6 sm:px-10"
        >
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-[0.34em] text-ivory transition hover:text-gold-light"
            aria-label={`${site.name} — home`}
          >
            {site.shortName}
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "eyebrow relative py-2 text-[0.68rem] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:text-gold-light hover:after:scale-x-100",
                    isActive(item.href)
                      ? "text-gold-light after:scale-x-100"
                      : "text-ivory/80",
                  )}
                >
                  {t(`nav.${item.key}` as MessageKey)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label={t("nav.search")}
              className="text-ivory/80 transition hover:text-gold-light"
            >
              <Search className="h-[1.1rem] w-[1.1rem]" />
            </button>
            <div className="hidden sm:block">{LangToggle}</div>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={t("nav.menu")}
              className="text-ivory lg:hidden"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-gold-light"
        />
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-center bg-night px-10 transition-opacity duration-500 lg:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!menuOpen}
      >
        <ul className="space-y-1">
          {nav.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-gold/15 py-4 font-display text-4xl text-ivory transition hover:text-gold-light"
              >
                {t(`nav.${item.key}` as MessageKey)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 sm:hidden">{LangToggle}</div>
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
