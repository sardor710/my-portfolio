"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

const GALLERY = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11].map(
  (n) => `/images/gallery/home${n}-gallery@2x.jpg`,
);

export function DelicateTouch() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);
  const next = () => setIndex((i) => (i + 1) % GALLERY.length);

  return (
    <section id="delicate" className="mx-auto max-w-7xl px-8 py-24 lg:px-16">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Carousel */}
        <div className="relative order-2 md:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
            {GALLERY.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`Свадебный декор ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className={`object-cover transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                priority={i === 0}
              />
            ))}
          </div>
          {/* Arrows */}
          <div className="absolute -top-14 right-0 flex">
            <button
              onClick={prev}
              aria-label="Предыдущее фото"
              className="flex h-12 w-12 items-center justify-center border border-border bg-white text-ink transition hover:bg-ink hover:text-white"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Следующее фото"
              className="flex h-12 w-12 items-center justify-center bg-ink text-white transition hover:opacity-80"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Copy */}
        <Reveal className="order-1 md:order-2">
          <h2 className="d-display text-[42px] leading-[1.05] sm:text-[58px]">
            Нежное прикосновение Moret
          </h2>
          <p className="mt-8 max-w-md font-display text-2xl leading-snug text-ink">
            Мы украшаем каждую свадьбу трепетным декором, который создаёт
            идеальную атмосферу для вашего особенного дня.
          </p>
          <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-ink/80">
            От свежих цветочных композиций до потрясающих сервировок при свечах и
            романтичных свадебных букетов — мы добавим наше творческое
            прикосновение Moret, чтобы вы почувствовали себя королевской особой.
          </p>
          <a href="#top" className="d-link mt-10">
            Смотреть галерею
          </a>
        </Reveal>
      </div>
    </section>
  );
}
