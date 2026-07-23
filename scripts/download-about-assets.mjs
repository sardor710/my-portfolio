// Downloads About-page team images. Run: node scripts/download-about-assets.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const BASE = "https://dahliaflorals.com/wp-content/uploads";
const assets = [];
// image1-5 → 2019/05, image6-9 → 2020/04
for (const [dir, nums] of [["2019/05", [1, 2, 3, 4, 5]], ["2020/04", [6, 7, 8, 9]]]) {
  for (const n of nums) {
    assets.push([`${BASE}/${dir}/image${n}.jpg`, `images/about/image${n}.jpg`]);
    assets.push([`${BASE}/${dir}/image${n}@2x.jpg`, `images/about/image${n}@2x.jpg`]);
  }
}

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

let ok = 0, fail = 0;
for (let i = 0; i < assets.length; i += 4) {
  const results = await Promise.all(assets.slice(i, i + 4).map(download));
  for (const r of results) {
    if (r.ok) { ok++; console.log(`  ok  ${r.local} (${r.bytes}b)`); }
    else { fail++; console.log(`FAIL  ${r.url} :: ${r.status || r.err}`); }
  }
}
console.log(`\nDone: ${ok} ok, ${fail} failed, ${assets.length} total`);
