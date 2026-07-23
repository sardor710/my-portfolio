import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function DayToRemember() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 py-24 md:grid-cols-2 md:gap-16 lg:px-16">
      {/* Copy */}
      <Reveal className="order-2 md:order-1">
        <h2 className="d-display text-[46px] leading-[1.02] sm:text-[58px]">
          День, который запомнится
        </h2>
        <p className="mt-8 max-w-md font-serif text-lg leading-relaxed text-ink/80">
          Цветочный декор, который вы никогда не забудете. Мы не просто
          «расставляем цветы». Подобно художнику, наносящему каждый мазок на холст
          с мыслью, заботой и точностью, мы располагаем каждый цветок так же —
          создавая потрясающие цветочные произведения искусства, которые усиливают
          романтику и атмосферу вашей свадьбы.
        </p>
        <a
          href="#delicate"
          className="mt-10 inline-flex border border-ink px-9 py-3 font-serif text-sm uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Смотреть галерею
        </a>
      </Reveal>

      {/* Kissing-couple image (tilted) */}
      <Reveal className="order-1 md:order-2" delay={120}>
        <div
          className="relative aspect-[4/5] w-full overflow-hidden shadow-xl"
          style={{ clipPath: "polygon(0 2%, 100% 0, 100% 98%, 0 100%)" }}
        >
          <Image
            src="/images/weddings.jpg"
            alt="Молодожёны с букетом"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
