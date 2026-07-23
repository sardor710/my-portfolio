import { Reveal } from "@/components/Reveal";

export function EveryDetailMatters() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        {/* Intro paragraph */}
        <Reveal className="ml-auto max-w-xl pt-24 md:w-1/2 md:pt-32">
          <p className="font-serif text-lg font-medium leading-relaxed text-white/90">
            Цветы — наша страсть, и нам посчастливилось посвятить свою жизнь
            созданию прекрасных цветочных произведений искусства. За годы
            разработки драматичного, изысканного цветочного декора для клиентов
            высокой моды и знаменитостей мы обрели острое чувство детали и
            невероятную способность вкладывать творчество и страсть в каждый
            создаваемый нами декор.
          </p>
        </Reveal>

        {/* B&W image with overlaid heading */}
        <div className="relative mt-20 h-[70vh] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale"
            style={{ backgroundImage: "url(/images/events-bw.jpg)" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="d-display px-6 text-center text-white text-[54px] leading-[0.95] sm:text-[90px] lg:text-[120px]">
              Важна каждая
              <br />
              деталь
            </h2>
          </div>
        </div>

        {/* Detail paragraph */}
        <Reveal className="max-w-xl py-24">
          <p className="font-serif text-lg leading-relaxed text-white/85">
            Мы работаем с вами на каждом этапе процесса. Во время консультации мы
            вникаем в ваши идеи, используя примеры и варианты, которые воплотят
            ваше видение в рамках вашего бюджета. Мы вовлечены на протяжении всего
            процесса — вплоть до бережной доставки каждого элемента на вашу
            площадку. Мы семейный бизнес и подходим к каждому мероприятию с
            честностью, профессионализмом и добротой, потому что нам действительно
            не всё равно — и для нас будет большой честью стать частью вашего
            особенного дня.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
