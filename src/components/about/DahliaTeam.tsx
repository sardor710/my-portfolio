import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const TEAM = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `/images/about/image${n}@2x.jpg`);

export function DahliaTeam() {
  return (
    <section className="py-24">
      {/* Horizontal scrolling strip of team / behind-the-scenes photos */}
      <div className="no-scrollbar flex gap-4 overflow-x-auto px-8 pb-10 lg:px-16">
        {TEAM.map((src, i) => (
          <div
            key={src}
            className="relative aspect-[3/4] w-[280px] shrink-0 overflow-hidden bg-muted sm:w-[340px]"
          >
            <Image
              src={src}
              alt={`Команда Dahlia за работой ${i + 1}`}
              fill
              sizes="340px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <Reveal className="max-w-2xl pt-8">
          <h2 className="d-display text-[46px] leading-[1.02] sm:text-[58px]">
            Команда Dahlia
          </h2>
          <p className="mt-8 max-w-xl font-serif text-lg leading-relaxed text-ink/80">
            Наша замечательная команда готова помочь вам даже с самым сложным
            цветочным проектом для любого случая. Наша миссия — не только оправдать
            все ожидания наших ценных клиентов, но и превзойти их. Ваше
            удовлетворение — наш личный успех.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
