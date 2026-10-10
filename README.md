# The Living Lineage of Buli Trulku Rinpoche

A digital sacred biography — a cinematic, scroll-led story of the lineage, life,
teachers, monasteries and legacy of Kyabje Buli Trulku Rinpoche.

Built with **Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Lucide React**.

---

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build && npm run start     # production
npm run typecheck                  # TypeScript check
npm run images                     # list every photograph slot + which are filled
```

Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) to your real domain before deploying,
so social-share links are correct. Fonts (Cormorant Garamond, Inter, Noto Serif
Tibetan) load from Google Fonts, so the site needs an internet connection to show
them as designed.

---

## Adding photographs (the one thing you need to do)

Every photograph slot already has a file path in `data/buliTrulku.ts`.
**Drop a file at that path inside `/public` and refresh — it replaces the placeholder.**
Slots with no file keep the parchment "Photograph coming soon" placeholder, so you
can add images one at a time.

```bash
npm run images
# ✔ /images/lineage/01-phagpa-magapa.jpg
# · /images/lineage/02-tsang-legdup.jpg      (· = still a placeholder)
```

| Where | Path pattern |
|---|---|
| Hero landscape | `public/images/hero/prayer-flags.png` |
| Lineage portraits (1–10) | `public/images/lineage/01-phagpa-magapa.jpg` … `10-khachap-dorji.jpg` |
| His Eminence | `public/images/rinpoche/portrait-main.jpg`, `age-16.jpg`, `enthronement-1960.jpg`, `final-portrait.jpg` |
| Teachers | `public/images/teachers/<name>.jpg` |
| Places | `public/images/places/<name>.jpg` |
| Foundation | `public/images/foundation/logo.png`, `monastery.jpg` |
| Gallery | `public/images/gallery/<category>/01.jpg`, `02.jpg` … |

To use a different file name, change the path in `data/buliTrulku.ts`.
To add a gallery photograph, copy a line in the `gallery` array and set its
`title`, `caption`, `year`, `location` and `credit`.

Every image component accepts `src`, `alt`, `caption`, `year`, `location`, `credit`:

```tsx
<RinpocheImage     src="/images/rinpoche/portrait-main.jpg" alt="…" caption="…" year="…" location="…" credit="…" />
<LineagePortrait   src="/images/lineage/01-phagpa-magapa.jpg" alt="…" />
<MonasteryImage    src="/images/places/zangthi.jpg" alt="…" />
<HistoricalImage   src="/images/gallery/historical/01.jpg" alt="…" />
```

> Note: while slots are empty, the browser console shows one harmless 404 per
> missing photograph. They disappear as you add images.
>
> Next.js serves `/public` files that exist at build time, so after adding photos
> to a production build, rebuild (`npm run build`). In `npm run dev` it is instant.

Never use stock photographs for historical people.

---

## Editing the story

**All wording lives in `data/buliTrulku.ts`** — `lineage`, `lifeEvents`, `teachers`,
`places`, `institutions`, `gallery`, `foundation`, plus the section texts
(`intro`, `present`, `earlyYears`, `recognition`, `dudjom`, `lamaKarpo`, `retreat`,
`yongphula`, `zangthi`, `shedra`, `legacyStats`, `finalMessage`). Change a sentence
there and it updates everywhere, including search.

```
app/                    routes: / · /lineage · /timeline · /teachers · /places · /gallery
components/sections/    Hero, Introduction, LineageTimeline, LineageChapter, PresentIncarnation,
                        EarlyYears, Recognition, DudjomMeeting, LamaKarpo, RetreatYears, Yongphula,
                        Zangthi, ShedraSection, LegacyStats, FoundationSection, FinalMessage,
                        LifeTimeline, TeacherSection, PlaceSection, Gallery, LineageOverview
components/images/      SacredImage (+ RinpocheImage, LineagePortrait, MonasteryImage, HistoricalImage)
components/art/         original SVG artwork: Himalaya scene, prayer flags, motifs, ornaments
components/ui/          Reveal, Parallax, SectionShell, PathDiagram, CountUp …
data/                   content + types
lib/i18n.tsx            language scaffold (EN / Dzongkha)
```

**Colours** are in `tailwind.config.ts` (maroon, gold, ivory/parchment, himalaya blue).
**Section backgrounds** (night → parchment → mist → maroon → gold) are the `tone-*`
classes in `app/globals.css`.

### Dzongkha

The `EN | རྫོང་ཁ` toggle works and sets `<html lang>`. Add Dzongkha strings to the `dz`
object in `lib/i18n.tsx` (missing keys fall back to English). Until then, visitors
who choose རྫོང་ཁ see a polite "translation coming soon" notice. For the long
biography text, add a parallel `data/buliTrulku.dz.ts` and choose it with `useLang()`.

---

## Please verify before launch

The brief was followed closely and **nothing was invented** — no dates, quotes, miracles,
relationships or places beyond what you supplied. Where the supplied text was
inconsistent or unclear, it was preserved as written and is marked `// VERIFY` in
`data/buliTrulku.ts`:

1. **"Choeying" vs "Choeing" Rangdrol** — the source uses both spellings. The site uses *Choeying* throughout.
2. **"Ninth reincarnation" vs Chapter 10** — Khachap Dorji's chapter is numbered 10 but the text calls him the *ninth* reincarnation. Kept exactly as supplied.
3. **"Legdrup of Tsang" vs "Tsang Legdup"** — spelling differs within the source (Chapter 3).
4. **Two monastery names** — *Buli Lhuendrup Choeling* (Chapter 4) and *Buli Wogmin Lhuendrup Choeling* (Chapter 10). Kept both as written; they may be the same place.
5. **Retreat places** — the brief said "three locations" but listed **four** (Phuningla, Aja, Singye Dzong, Drejong). All four are shown. No other retreat details were supplied, so none are given.
6. **Yongphula location** — shown as "Yongphula, Tashigang", inferred from "Lama Karpo of Yongphula, Tashigang".
7. **Lam Kezang** — "Lam Kezang of Mugpa Khar, Yoeselchoeling Monastery" is kept as one phrase; the grouping in the source is ambiguous.
8. **"Age 6"** — no year is given, so none is calculated.
9. **Spelling variants** — Tashigang / Trashigang, Lakhang / Lhakhang are kept as supplied.

Written by the site rather than supplied, so please review: the **introduction** and **closing
paragraph** (no quotation is attributed to Rinpoche), the framing phrase "According to the
lineage account…", and the **Zangthi illustration**, which is a decorative topographic
drawing and **not** a geographic map. Gallery titles ("Portrait 01" …) are neutral
placeholders until real captions are added.

The footer states the site is prepared from the supplied biography and is **not an official
statement** of any monastery or institution. Change this in `site.disclaimer` if you obtain
official authority.

---

## Accessibility

Semantic landmarks and headings, skip link, keyboard-operable navigation, gallery
lightbox (←/→/Esc) and search (Esc), visible gold focus rings, ARIA labels,
alt text on every image slot, and `prefers-reduced-motion` support (parallax and
slide effects are disabled; the page stays fully readable).
