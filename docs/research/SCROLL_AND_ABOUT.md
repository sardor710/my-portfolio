# Homepage scroll mechanics (corrected) + About page

## Homepage — TRUE section order & scroll behavior
Page uses `position: sticky` pinned panels (NO Lenis/GSAP smooth-scroll lib). `.page-container` ~11500px.

1. **home-video** (hero): `.home-video-box` is `position: sticky; top:0` (full viewport). The video stays PINNED while `.home-video-content` ("Flowers are happy things" heading) scrolls up over it. → make hero video sticky.
2. **home-slides** ("Breathtaking Floral Decor to Adorn the Day of Your Dreams"): `.home-slides-text` is **sticky** (pinned left panel); `.home-slides-images` is a column of **3 images** (`slides-1a-desktop`, `slides-2-desktop`, `slides-3-desktop`, 740×920) that scroll past. The caption under the heading **swaps per slide** (3 captions). Transient skew-on-scroll-velocity gives images a tilted look. **THIS is "how images change during scroll."**
   - Caption 1: "By working with only the freshest, most exquisite flowers…charm and elegance."
   - Caption 2: "Simple and modern. Dramatic and extravagant. Romantic and airy. Whichever style suits your fancy…fairytale."
   - Caption 3: "Never settle for less than extravagant…say 'I Do.'"
3. **home-weddings** ("A Day to Remember"): LIGHT section. Heading + "Floral Decor You'll Never Forget. We don't simply 'arrange flowers.'…" + big `weddings.jpg` (1480×900 kissing couple) + "View Gallery". (My old clone wrongly made this a DARK slideshow.)
4. **home-awards** ("The Dahlia Difference"): heading + word-fade paragraph + Louis Vuitton/Cartier copy + awards (the-knot, wedding-wire).
5. **home-testimonials**: dark, image + 2 quotes.
6. **home-events** ("A Delicate Touch of Dahlia"): gallery carousel + John Lennon quote.
7. footer.

### Fixes applied to clone
- Swap order: Breathtaking(slides) BEFORE DayToRemember(weddings).
- BreathtakingSection → sticky text + 3 scrolling slide images + scroll-driven caption swap.
- DayToRemember → light two-column with `weddings.jpg`, not a dark slideshow.
- Hero video → sticky pin.

## About page (/about/) — `container-about` has `about-dark` theme
1. **AboutHero** (light): "About Dahlia Floral & Event Design" + "Our floral arrangements exceed the ordinary…".
2. **Dark band**: "Flowers are our passion…" paragraph (white on dark).
3. **Every detail matters**: huge white heading overlaid on a B&W image + "We work with you throughout every step…" paragraph (dark bg).
4. **Dahlia's Team**: heading + horizontally-scrolling strip of team/behind-the-scenes photos (`image1`–`image9`) + "Our wonderful team is prepared…".
5. **AboutQuote** (light): "To me, flowers are happiness" — Stefano Gabbana.
6. **Footer** (shared).

Assets: `image1`–`image5` in uploads/2019/05, `image6`–`image9` in uploads/2020/04 (+ @2x). weddings.jpg already downloaded.
