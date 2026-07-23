import { WordFade } from "@/components/Reveal";

export function AboutQuote() {
  return (
    <section className="flex min-h-[55vh] items-center justify-center px-8 py-28 text-center">
      <div className="max-w-3xl">
        <p className="d-display text-[38px] leading-[1.12] sm:text-[58px]">
          <WordFade text="Для меня цветы — это счастье" />
        </p>
        <p className="mt-8 font-serif text-lg text-ink/70">Стефано Габбана</p>
      </div>
    </section>
  );
}
