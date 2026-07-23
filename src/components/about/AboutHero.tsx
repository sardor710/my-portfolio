import { Reveal } from "@/components/Reveal";

export function AboutHero() {
  return (
    <section className="mx-auto max-w-7xl px-8 pb-16 pt-40 lg:px-16">
      <Reveal>
        <h1 className="d-display max-w-3xl text-[42px] leading-[1.05] sm:text-[64px]">
          О компании Moret Flowers
        </h1>
        <p className="mt-8 max-w-xl font-serif text-lg leading-relaxed text-ink/80">
          Наши цветочные композиции превосходят обыденное, добавляя особую нотку
          волшебства в день вашей свадьбы.
        </p>
      </Reveal>
    </section>
  );
}
