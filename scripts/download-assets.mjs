// Downloads all Dahlia Florals assets into public/. Run: node scripts/download-assets.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const BASE = "https://dahliaflorals.com";
const U = "/wp-content/uploads";
const M = "/wp-content/themes/dahlia/static/media";

// [remoteUrl, localPath under public/]
const assets = [
  // Logos / brand
  [`${BASE}${M}/logo-header.3bb4aa42.svg`, "images/logo-header.svg"],
  [`${BASE}${M}/logo-header-white.6c45f3ae.svg`, "images/logo-header-white.svg"],
  [`${BASE}${M}/logo-footer.01582e55.svg`, "images/logo-footer.svg"],
  // Awards
  [`${BASE}${M}/awards-the-knot.d4cd762f.svg`, "images/awards-the-knot.svg"],
  [`${BASE}${M}/awards-wedding-wire.36b92de5.svg`, "images/awards-wedding-wire.svg"],
  // Section feature images
  [`${BASE}${M}/weddings.8172204c.jpg`, "images/weddings.jpg"],
  [`${BASE}${M}/testimonials-image.46f907d9.jpg`, "images/testimonials-image.jpg"],
  [`${BASE}${M}/events-bw.12059bdf.jpg`, "images/events-bw.jpg"],
  [`${BASE}${M}/events-color.dca459d2.jpg`, "images/events-color.jpg"],
  // Hero video + poster
  [`${BASE}${M}/video.1179aa62.mp4`, "videos/hero.mp4"],
  [`${BASE}${M}/video.89cfd95b.jpg`, "videos/hero-poster.jpg"],
  // Menu / overlay thumbnails
  [`${BASE}${U}/2019/05/appintments.jpg`, "images/menu/appointments.jpg"],
  [`${BASE}${U}/2019/05/appintments@2x.jpg`, "images/menu/appointments@2x.jpg"],
  [`${BASE}${U}/2019/05/payments.jpg`, "images/menu/payments.jpg"],
  [`${BASE}${U}/2019/05/payments@2x.jpg`, "images/menu/payments@2x.jpg"],
  [`${BASE}${U}/2019/05/checklist.jpg`, "images/menu/checklist.jpg"],
  [`${BASE}${U}/2019/05/checklist@2x.jpg`, "images/menu/checklist@2x.jpg"],
  [`${BASE}${U}/2019/05/about.jpg`, "images/menu/about.jpg"],
  [`${BASE}${U}/2019/05/about@2x.jpg`, "images/menu/about@2x.jpg"],
  [`${BASE}${U}/2019/05/gallery.jpg`, "images/menu/gallery.jpg"],
  [`${BASE}${U}/2019/05/gallery@2x.jpg`, "images/menu/gallery@2x.jpg"],
  [`${BASE}${U}/2019/05/personal.jpg`, "images/menu/personal.jpg"],
  [`${BASE}${U}/2019/05/personal@2x.jpg`, "images/menu/personal@2x.jpg"],
  [`${BASE}${U}/2019/05/ceremony1-1.jpg`, "images/menu/ceremony.jpg"],
  [`${BASE}${U}/2019/05/ceremony1@2x-1.jpg`, "images/menu/ceremony@2x.jpg"],
  [`${BASE}${U}/2019/05/venue.jpg`, "images/menu/venue.jpg"],
  [`${BASE}${U}/2019/05/venue@2x.jpg`, "images/menu/venue@2x.jpg"],
  [`${BASE}${U}/2019/05/team.jpg`, "images/menu/team.jpg"],
  [`${BASE}${U}/2019/05/team@2x.jpg`, "images/menu/team@2x.jpg"],
  [`${BASE}${U}/2019/05/contact-1.jpg`, "images/menu/contact.jpg"],
  [`${BASE}${U}/2019/05/contact@2x-1.jpg`, "images/menu/contact@2x.jpg"],
  // Hero / day-to-remember imagery
  [`${BASE}${U}/2020/04/home-1a.jpg`, "images/home-1a.jpg"],
  [`${BASE}${U}/2020/04/home-1a@2x.jpg`, "images/home-1a@2x.jpg"],
  // Slides (A Day to Remember background slides)
  [`${BASE}${U}/2019/05/slides-1a-desktop.jpg`, "images/slides-1a-desktop.jpg"],
  [`${BASE}${U}/2019/05/slides-1a-desktop@2x.jpg`, "images/slides-1a-desktop@2x.jpg"],
  [`${BASE}${U}/2019/05/slides-2-desktop.jpg`, "images/slides-2-desktop.jpg"],
  [`${BASE}${U}/2019/05/slides-2-desktop@2x.jpg`, "images/slides-2-desktop@2x.jpg"],
  [`${BASE}${U}/2019/05/slides-3-desktop.jpg`, "images/slides-3-desktop.jpg"],
  [`${BASE}${U}/2019/05/slides-3-desktop@2x.jpg`, "images/slides-3-desktop@2x.jpg"],
  // Gallery (Delicate Touch) home1..home11
  ...[
    ["2019/05","home1"],["2019/05","home2"],["2019/05","home3"],["2019/05","home4"],["2019/05","home5"],
    ["2019/09","home7"],["2019/09","home8"],["2019/09","home9"],["2019/09","home10"],["2020/04","home11"],
  ].flatMap(([d,n]) => [
    [`${BASE}${U}/${d}/${n}-gallery.jpg`, `images/gallery/${n}-gallery.jpg`],
    [`${BASE}${U}/${d}/${n}-gallery@2x.jpg`, `images/gallery/${n}-gallery@2x.jpg`],
  ]),
];

async function download([url, local]) {
  try {
    const res = await fetch(url);
    if (!res.ok) return { url, ok: false, status: res.status };
    const buf = Buffer.from(await res.arrayBuffer());
    const out = join("public", local);
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, buf);
    return { url, ok: true, bytes: buf.length, local };
  } catch (e) {
    return { url, ok: false, err: String(e) };
  }
}

async function run() {
  let ok = 0, fail = 0;
  for (let i = 0; i < assets.length; i += 4) {
    const batch = assets.slice(i, i + 4);
    const results = await Promise.all(batch.map(download));
    for (const r of results) {
      if (r.ok) { ok++; console.log(`  ok  ${r.local} (${r.bytes}b)`); }
      else { fail++; console.log(`FAIL  ${r.url} :: ${r.status || r.err}`); }
    }
  }
  console.log(`\nDone: ${ok} ok, ${fail} failed, ${assets.length} total`);
}
run();
