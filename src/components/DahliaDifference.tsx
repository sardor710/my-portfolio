import Image from "next/image";
import { Reveal, WordFade } from "@/components/Reveal";

export function DahliaDifference() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-24 md:grid-cols-2 md:gap-16 lg:px-16">
      {/* Left: heading + copy */}
      <div>
        <Reveal>
          <h2 className="d-display text-[46px] leading-[1.02] sm:text-[64px]">
            Особый почерк
            <br />
            Dahlia
          </h2>
        </Reveal>
        <p className="mt-8 max-w-md font-display text-2xl leading-snug">
          <WordFade text="Команда визионеров, которая приветствует новые вызовы и стремится превзойти все ожидания." />
        </p>
        <Reveal>
          <p className="mt-8 max-w-md font-serif text-lg leading-relaxed text-ink/80">
            На протяжении многих лет мы работали с клиентами класса люкс, такими
            как Louis Vuitton и Cartier, разрабатывая и воплощая тематические
            цветочные композиции для особых мероприятий высокого уровня. Этот
            уникальный опыт развил у нашей команды острое чувство детали и
            позволяет наполнять каждую композицию страстью и творчеством.
          </p>
          <a href="#delicate" className="d-link mt-8">
            Dahlia в действии
          </a>
        </Reveal>
      </div>

      {/* Right: awards */}
      <Reveal className="flex flex-col gap-6" delay={120}>
        <p className="font-serif text-lg leading-relaxed text-ink/80">
          Награда Couple’s Choice:
          <br />
          2015, 2016, 2017, 2018, 2019
        </p>

        <div className="flex flex-wrap items-stretch gap-6">
          <div className="flex aspect-square w-44 items-center justify-center bg-ink">
            <Image
              src="/images/awards-the-knot.svg"
              alt="The Knot"
              width={120}
              height={80}
              className="h-16 w-auto brightness-0 invert"
            />
          </div>
          <div className="flex aspect-square w-52 items-center justify-center border border-border bg-white">
            <Image
              src="/images/awards-wedding-wire.svg"
              alt="WeddingWire"
              width={160}
              height={40}
              className="h-6 w-auto"
            />
          </div>
        </div>

        <p className="font-serif text-lg leading-relaxed text-ink/80">
          The Best Of Weddings:
          <br />
          2015, 2016, 2017, 2018, 2019
          <br />
          Зал славы The Knot
        </p>
      </Reveal>
    </section>
  );
}
