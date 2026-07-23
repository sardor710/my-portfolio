import { WordFade } from "@/components/Reveal";

export function LoveQuote() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-8 py-28 text-center">
      <div className="max-w-3xl">
        <p className="d-display text-[34px] leading-[1.15] sm:text-[52px]">
          <WordFade text="Любовь — это цветок, которому нужно дать расцвести" />
        </p>
        <p className="mt-8 font-serif text-lg text-ink/70">Джон Леннон</p>
      </div>
    </section>
  );
}
