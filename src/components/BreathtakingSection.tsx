"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    img: "/images/slides-1a-desktop@2x.jpg",
    caption:
      "Работая только с самыми свежими и изысканными цветами, которые выглядят будто только что срезанными, мы создаём впечатляющий цветочный и событийный декор, окутывающий ваш особенный день очарованием и элегантностью.",
  },
  {
    img: "/images/slides-2-desktop@2x.jpg",
    caption:
      "Просто и современно. Драматично и роскошно. Романтично и воздушно. Какой бы стиль вам ни нравился, наша команда Moret соединит своё творчество с вашим видением, чтобы ваш день стал похож на сказку.",
  },
  {
    img: "/images/slides-3-desktop@2x.jpg",
    caption:
      "Не соглашайтесь на меньшее, чем роскошь, в день, который вы будете помнить всю жизнь. Мы обожаем детали: от цветущего декора до романтичного света свечей, от великолепных центральных композиций и не только — мы создадим незабываемую обстановку для вашего «Да, я согласна».",
  },
];

export function BreathtakingSection() {
  const [active, setActive] = useState(0);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Number((entry.target as HTMLElement).dataset.index);
            setActive(i);
          }
        });
      },
      { threshold: 0.55, rootMargin: "-20% 0px -20% 0px" },
    );
    imgRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-y-10 px-8 py-20 md:grid-cols-2 md:gap-x-20 md:py-0 lg:px-16">
      {/* Sticky pinned text panel */}
      <div className="md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center">
        <div className="max-w-md">
          <h2 className="d-display text-[34px] leading-[1.12] sm:text-[42px]">
            Захватывающий цветочный декор, чтобы украсить день вашей мечты
          </h2>
          <div className="relative mt-8 min-h-[190px] md:min-h-[160px]">
            {SLIDES.map((s, i) => (
              <p
                key={i}
                className={cn(
                  "font-serif text-lg leading-relaxed text-ink/80 transition-opacity duration-700 md:absolute md:inset-0",
                  i === active ? "opacity-100" : "md:opacity-0",
                )}
              >
                {s.caption}
              </p>
            ))}
          </div>
          {/* Progress dots */}
          <div className="mt-6 flex gap-2">
            {SLIDES.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-[2px] w-8 transition-colors duration-500",
                  i === active ? "bg-ink" : "bg-ink/20",
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling slide images */}
      <div className="flex flex-col gap-16 md:gap-0 md:py-[18vh]">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            ref={(el) => {
              imgRefs.current[i] = el;
            }}
            data-index={i}
            className="flex md:h-screen md:items-center"
          >
            <div
              className="relative aspect-[3/4] w-full overflow-hidden bg-cover bg-center shadow-xl md:aspect-[4/5]"
              style={{
                backgroundImage: `url(${s.img})`,
                clipPath: "polygon(0 3%, 100% 0, 100% 97%, 0 100%)",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
