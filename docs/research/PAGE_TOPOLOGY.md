# Dahlia Florals — Page Topology & Behaviors

Target: https://dahliaflorals.com/ (single long-scroll page). Clone is **Russian-localized**.
Build: WordPress + custom React (Taktic Studio), heavy scroll-driven reveal animations, elegant serif.

## Global
- **Fonts:** Original = Chronicle Display (Hoefler serif) everywhere. Substitutes: **Playfair Display** (display/headings, cyrillic) + **Lora** (body/nav/labels, cyrillic).
- **Colors:** ink `#272831` (rgb 39,40,49); white `#ffffff`; dark section bg `#272831`; faded word reveal `rgba(39,40,49,0.18)`.
- **Fixed left rail** (vertical, rotated -90°): Заявка на мероприятие · Финальный чек-лист · Запись на приём. Ink on light sections, adapts.
- **Sticky top header** appears after scrolling past hero: dark `#272831` bar, hamburger (left), "Записаться на консультацию" (right-center), white logo panel (top-right corner, white bg).
- **Menu overlay** (hamburger): split screen — left dark `#272831` half with nav links stacked (Главная, О нас, Галерея [+submenu], Контакты, Финальный чек-лист, Запись на приём, Оплата), each divider-bordered; right white half shows logo top-right + hover thumbnail preview.

## Sections (top → bottom)
1. **Hero** — full viewport. Left: B&W video (`videos/hero.mp4`, autoplay/loop/muted, poster). Right: display text "Цветы / дарят / счастье" (Playfair, per-letter grey→ink reveal). Top-right white logo. "Play/▶" affordance. Left rail visible.
2. **A Day to Remember** (`День, который запомнится`) — dark slide background (slides-*-desktop), big white H2 + paragraph, "Смотреть галерею" button.
3. **Breathtaking / Dreams** — pinned text panel (left): rotating H2 + changing captions; right: stack of **skewed/tilted** wedding photos (home-1a) scrolling past with a slanted parallelogram clip. Scroll-driven.
4. **The Dahlia Difference** (`Особый почерк Dahlia`) — big H2 left; paragraph with **word-by-word fade-in** ("...aspires to exceed all expectations"); right: awards block — "the knot" dark square + WeddingWire white card + award text lines. `weddings.jpg` feature.
5. **Testimonials** — dark `#272831` section. Bride photo (`testimonials-image.jpg`) overlapping into dark band + white serif quote with large `"` mark. Two testimonials.
6. **A Delicate Touch of Dahlia** (`Нежное прикосновение Dahlia`) — H2 + 2 paragraphs + "Смотреть галерею" (right column); gallery **carousel** (home1..home11) with ◄ ► arrows (left/lower); B&W image accent.
7. **Love Quote** — centered Playfair "Любовь — это цветок, которому нужно дать расцвести" with word fade-in; "— Джон Леннон".
8. **Footer** — dark `#272831`. White Dahlia logo (left); address (5 Lanza Avenue, Garfield, NJ 07026) + hours; Email/Telephone; social rating columns (WeddingWire 179 отзывов, The Knot 151 отзыв, Instagram 10 000+ подписчиков); copyright + "Дизайн и код: Taktic Studio".

## Behaviors
- Scroll-reveal fade-up on section entry (IntersectionObserver).
- Header: hidden at scroll 0, slides down / becomes visible past ~1 viewport.
- Hero heading: letters transition grey→ink (stagger).
- Difference & Quote paragraphs: words fade grey→ink as they enter viewport.
- Tilted image stack (section 3): CSS `transform: skewY`/rotate parallelogram, parallax feel.
- Delicate Touch: click-driven carousel (◄ ►) cycling gallery images.
- Responsive: left rail + big display scale down; two-column sections stack on mobile (~768px).

## Assets (public/)
- `videos/hero.mp4` + `videos/hero-poster.jpg`
- `images/logo-header.svg`, `logo-header-white.svg`, `logo-footer.svg`
- `images/awards-the-knot.svg`, `awards-wedding-wire.svg`
- `images/weddings.jpg`, `testimonials-image.jpg`, `events-bw.jpg`, `events-color.jpg`
- `images/home-1a.jpg` (+@2x), `slides-1a/2/3-desktop.jpg` (+@2x)
- `images/gallery/home{1-5,7-11}-gallery.jpg` (+@2x)
- `images/menu/*.jpg` (menu hover thumbs)
