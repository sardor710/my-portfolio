"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuIcon, CloseIcon } from "@/components/icons";

const RAIL_LINKS = ["Заявка на мероприятие", "Финальный чек-лист", "Запись на приём"];

type MenuLink = { label: string; thumb: string; href?: string; sub?: string[] };

const MENU_LINKS: MenuLink[] = [
  { label: "Главная", thumb: "/images/menu/about.jpg", href: "/" },
  { label: "О нас", thumb: "/images/menu/about.jpg", href: "/about" },
  {
    label: "Галерея",
    thumb: "/images/menu/gallery.jpg",
    sub: ["Персональные", "Церемония", "Декор площадки", "Команда"],
  },
  { label: "Контакты", thumb: "/images/menu/contact.jpg" },
  { label: "Финальный чек-лист", thumb: "/images/menu/checklist.jpg" },
  { label: "Запись на приём", thumb: "/images/menu/appointments.jpg" },
  { label: "Оплата", thumb: "/images/menu/payments.jpg" },
];

const SUB_THUMBS: Record<string, string> = {
  "Персональные": "/images/menu/personal.jpg",
  "Церемония": "/images/menu/ceremony.jpg",
  "Декор площадки": "/images/menu/venue.jpg",
  "Команда": "/images/menu/team.jpg",
};

export function SiteChrome() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [hovered, setHovered] = useState<string>("/images/menu/about.jpg");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ---------- Fixed left rail ---------- */}
      <div
        className={cn(
          "fixed left-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-10 lg:flex",
          menuOpen && "opacity-0 pointer-events-none",
        )}
      >
        {RAIL_LINKS.map((l) => (
          <button key={l} className="d-rail-label hover:opacity-60">
            {l}
          </button>
        ))}
      </div>

      {/* ---------- Sticky header ---------- */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 flex h-16 items-stretch transition-colors duration-500",
          scrolled ? "bg-ink" : "bg-transparent",
        )}
      >
        <button
          aria-label="Открыть меню"
          onClick={() => setMenuOpen(true)}
          className={cn(
            "flex w-16 items-center justify-center transition-colors sm:w-20",
            scrolled ? "text-white" : "text-ink",
          )}
        >
          <MenuIcon className="h-4 w-8" />
        </button>

        <div className="flex flex-1 items-center justify-end pr-6">
          <button
            className={cn(
              "font-display text-[17px] font-semibold tracking-wide transition-all duration-500",
              scrolled ? "text-white opacity-100" : "text-ink opacity-0",
            )}
          >
            Записаться на консультацию
          </button>
        </div>

        {/* White logo panel top-right */}
        <div className="flex w-[120px] items-center justify-center bg-white sm:w-[150px]">
          <Image
            src="/images/logo-header.svg"
            alt="Dahlia Floral & Event Design"
            width={64}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </div>
      </header>

      {/* ---------- Menu overlay ---------- */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex transition-[opacity,visibility] duration-500",
          menuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        {/* Left dark half */}
        <div className="relative flex w-full flex-col justify-center bg-ink px-8 sm:px-16 md:w-1/2">
          <button
            aria-label="Закрыть меню"
            onClick={() => setMenuOpen(false)}
            className="absolute left-6 top-5 flex h-10 w-10 items-center justify-center text-white/80 hover:text-white sm:left-8"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          <nav className="mx-auto w-full max-w-sm">
            {MENU_LINKS.map((link) => (
              <div key={link.label} className="border-b border-white/15">
                {link.href ? (
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHovered(link.thumb)}
                    onClick={() => setMenuOpen(false)}
                    className="flex w-full items-center justify-between py-3 text-left font-display text-2xl font-normal text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    onMouseEnter={() => setHovered(link.thumb)}
                    onClick={() => link.sub && setGalleryOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-3 text-left font-display text-2xl font-normal text-white/90 transition-colors hover:text-white"
                  >
                    {link.label}
                    {link.sub && (
                      <span className="text-xl text-white/60">{galleryOpen ? "–" : "+"}</span>
                    )}
                  </button>
                )}
                {link.sub && (
                  <div
                    className={cn(
                      "overflow-hidden transition-[max-height] duration-500",
                      galleryOpen ? "max-h-60" : "max-h-0",
                    )}
                  >
                    <div className="flex flex-col gap-1 pb-3 pl-4">
                      {link.sub.map((s) => (
                        <button
                          key={s}
                          onMouseEnter={() => setHovered(SUB_THUMBS[s])}
                          className="py-1 text-left font-serif text-base text-white/70 hover:text-white"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right white half with logo + hover preview */}
        <div className="relative hidden w-1/2 items-center justify-center bg-white md:flex">
          <Image
            src="/images/logo-header.svg"
            alt="Dahlia"
            width={150}
            height={90}
            className="absolute right-10 top-8 h-16 w-auto"
          />
          <div className="relative h-[62%] w-[62%] overflow-hidden">
            {[...new Set(Object.values(SUB_THUMBS).concat(MENU_LINKS.map((m) => m.thumb)))].map(
              (src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  fill
                  sizes="40vw"
                  className={cn(
                    "object-cover transition-opacity duration-700",
                    hovered === src ? "opacity-100" : "opacity-0",
                  )}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
