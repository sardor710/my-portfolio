import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-20 md:grid-cols-2 lg:grid-cols-4 lg:px-16">
        {/* Logo */}
        <div>
          <Image
            src="/images/logo-footer.svg"
            alt="Dahlia Floral & Event Design"
            width={200}
            height={120}
            className="h-24 w-auto"
          />
        </div>

        {/* Address + hours */}
        <div className="font-serif text-[15px] leading-relaxed text-white/85">
          <p className="underline decoration-white/30 underline-offset-4">
            5 Lanza Avenue
            <br />
            Garfield, New Jersey 07026
          </p>
          <div className="mt-6 space-y-1 text-white/70">
            <p>Вт – Сб / 9:00 – 17:00</p>
            <p>Вт – Чт / вечерние консультации</p>
            <p>Вс – Пн / выходной</p>
          </div>
        </div>

        {/* Contact */}
        <div className="font-serif text-[15px] leading-relaxed text-white/85">
          <p className="font-semibold">Эл. почта</p>
          <a
            href="mailto:info@dahliaflorals.com"
            className="text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white"
          >
            info@dahliaflorals.com
          </a>
          <p className="mt-6 font-semibold">Телефон</p>
          <a
            href="tel:+19737720219"
            className="text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white"
          >
            +1 973. 772. 0219
          </a>
        </div>

        {/* Social ratings */}
        <div className="space-y-6 font-serif text-[15px] text-white/85">
          <div>
            <p className="font-semibold">WeddingWire</p>
            <p className="text-white/60">
              Рейтинг: 5.0 из 5.0 /{" "}
              <span className="underline decoration-white/30 underline-offset-4">
                179 отзывов
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold">The Knot</p>
            <p className="text-white/60">
              Рейтинг: 5.0 из 5.0 /{" "}
              <span className="underline decoration-white/30 underline-offset-4">
                151 отзыв
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold">Instagram</p>
            <p className="underline decoration-white/30 underline-offset-4 text-white/60">
              10 000+ подписчиков
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 pb-10 lg:px-16">
        <p className="font-serif text-xs text-white/45">
          © 2024 Dahlia Floral &amp; Event Design. Все права защищены. Дизайн и
          код: <span className="font-semibold text-white/70">Taktic Studio</span>
        </p>
      </div>
    </footer>
  );
}
