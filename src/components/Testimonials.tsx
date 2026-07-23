import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { QuoteMark } from "@/components/icons";

const QUOTES = [
  "С того момента, как я вошла в двери Dahlia, я была почти уверена, что приняла правильное решение. Я была так впечатлена их работой и профессионализмом, что наняла их сразу же! Лучшее решение в жизни!!",
  "Словами не передать, насколько замечательна команда Dahlia Floral & Events. С первого визита в Dahlia они поняли моё видение и создали свадьбу моей мечты. Центральные композиции, букеты подружек невесты, бутоньерки и оформление за нашим столом для молодожёнов — всё было таким, о чём я всегда мечтала, и даже больше. Мои гости до сих пор говорят о том, как красиво всё выглядело! Я однозначно рекомендую Dahlia Floral & Events для вашего большого дня!!",
];

export function Testimonials() {
  return (
    <section className="relative bg-ink pb-24 pt-0 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-16 px-8 md:grid-cols-2 lg:px-16">
        {/* Image overlaps from the previous (white) section */}
        <div className="relative -mt-24 md:-mt-32">
          <Image
            src="/images/testimonials-image.jpg"
            alt="Невеста с букетом"
            width={760}
            height={1000}
            className="h-auto w-full max-w-md object-cover"
          />
        </div>

        {/* Quotes */}
        <div className="flex flex-col justify-center gap-14 pt-12 md:pt-40">
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i * 120}>
              <QuoteMark className="mb-6 h-7 w-9 text-white" />
              <p className="font-serif text-lg leading-relaxed text-white/90">{q}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
