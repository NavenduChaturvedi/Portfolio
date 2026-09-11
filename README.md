# Portfolio

Single-page editorial portfolio. Next.js (App Router) + Tailwind CSS v4.

## Run

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
```

> Don't run `next build` while `next dev` is running — they share `.next` and
> the dev server will start serving stale CSS.

## Design tokens

| Token   | Value     | Use                                    |
| ------- | --------- | -------------------------------------- |
| `cream` | `#F5F1EA` | Page background, warm cream            |
| `ink`   | `#1A1A1A` | Primary text, near-black               |
| `muted` | `#6B6560` | Secondary text, warm grey              |
| `rust`  | `#C1502E` | Accent — links, buttons, icons, fills  |
| `line`  | `#E0D9CE` | Card and section borders               |

`rust` measures 4.19:1 on `cream` — it clears WCAG AA Large but sits just under
AA's 4.5:1 for normal-size body text. `#B54B2B` is the same hue 3% darker and
clears 4.5:1 if that matters.

## Type

Four faces, all via `next/font/google`:

| Role        | Face                 | Used for                          |
| ----------- | -------------------- | --------------------------------- |
| Poster      | Anton                | The oversized `PORTFOLIO` wordmark |
| Serif       | Playfair Display     | Name + all section headings        |
| Body        | Inter                | Copy, labels, small caps           |
| Signature   | Mrs Saint Delafield  | The signature only                 |

## Structure

Hero → About → Projects → Skills → Contact.

The hero is a poster composition: full-measure wordmark, a cut-out portrait
pulled up over it (`lg:-mt-[13vw]`), a solid rust disc behind the figure, a
left-side edge rail, and a circular stamp. The right-side rail and the
Testimonials section from the earlier draft were both removed on feedback —
the right rail read as noise, and there are no real client testimonials yet.

Skills are a plain dot-bulleted list — no percentage bars. Percentages read
as fabricated proficiency claims with nothing behind them, which is exactly
what they were.

Projects, About's body copy, and the Contact links are all real, not
placeholder. Project cards (`components/Projects.tsx`) pull from
https://github.com/NavenduChaturvedi's pinned repos, each with a real
screenshot in `public/images/projects/` (not staged, not a stock photo — see
the file-level comment in Projects.tsx for what each one shows and why one
repo has no `live` link). About and Contact use the bio and handles given
directly. Contact's GitHub/LinkedIn icons are the actual brand marks, not
generic line-icon approximations.

**Portrait sizing gotcha:** the portrait is sized by *height* with `w-auto`, so
its width comes from the `width`/`height` attributes' aspect ratio. Do not size
it by width or with `h-auto` — with a `sizes`/`srcset` image whose source
(928px) is narrower than the advertised candidates, the browser derives layout
width from the chosen candidate's density and silently collapses the image.

Transitions are plain CSS; there is no animation library.

## Placeholders to replace

Search for `PLACEHOLDER` in the source. Most of what was generic earlier is
now real (About, the Skills pull quote, Contact, and the project data), but a
few things are still worth a look:

- `components/Hero.tsx` — the bio line under the wordmark is a shorter,
  separate line from the full About paragraph; check the two don't drift out
  of sync if you edit one
- `components/ProjectThumb.tsx` — the abstract CSS mock is only a fallback now
  (used automatically whenever a project has no `screenshot`); no action
  needed unless you add a project without a demo to screenshot

## Not built

The original design reference has a QR code in its contact block and a
testimonials section. The QR code is skipped — a drawn-on one that doesn't
scan would be fake, and a real one needs a destination URL once this deploys.
Testimonials were removed entirely (see Structure above) rather than filled
with placeholder quotes, since fabricated-looking client reviews are worse
than no reviews.

## Deploying

Not deployed yet. Vercel will detect Next.js and need no extra configuration.
