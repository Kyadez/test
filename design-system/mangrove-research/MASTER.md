# Design System: Mangrove & Gastropod Research (MASTER)

Source of truth for the team. Built with the UI UX Pro Max approach, adapted to our
own green palette. If a page needs something different, note it in
`design-system/mangrove-research/pages/<page>.md` and say why.

## Direction
- **Subject:** mangrove ecosystems and gastropod biodiversity, Masbate.
- **Audience:** judges, teachers, classmates, community.
- **Jobs of the site:** let people search a gastropod, see its impact, and read an AI-simplified explanation.
- **One memorable element:** the species result card with its Low/High impact badge.
  Everything else stays quiet. Do not add more decoration.

## Colors (CSS variables live at the top of `styles.css`)
| Role | Name | Hex |
|---|---|---|
| Primary / header / footer / buttons | Deep mangrove | `#174c35` |
| Page background | Leaf mist | `#f5f8f4` |
| Text | Ink | `#26352c` |
| Hero background | Tide pool | `#e0eee3` |
| Alternate section | Pale tide | `#edf4ee` |
| Secondary text | Muted ink | `#4a5d52` |
| Hero water / mud / shell | Brackish / Mud / Shell | `#bcd9c8` / `#d6c9a6` / `#ece0bd` |

All text pairs are 5.9:1 or better. Input borders use `#7a9585` (3.25:1, passes for UI parts).

## Typography
- Headings: **Crimson Pro** 600 (serif)
- Body: **Atkinson Hyperlegible** 400/700 (made for readability)
- Body 17px, line-height 1.65, max line length 62ch, left-aligned.

## Rules
1. Left-align text. No centered paragraphs.
2. One primary button per view. Secondary buttons use the outline style.
3. Icons are SVG only. No emojis as icons.
4. Every clickable thing: visible focus ring, 44px minimum tap height.
5. Every input has a real `<label>`. Placeholders are not labels.
6. Motion only in response to a click or tap. Respect `prefers-reduced-motion`.
7. Charts and the map must have a text alternative (table or list) beside them.
8. Do not rely on color alone to carry meaning in charts.
9. Copy: plain words, sentence case, buttons say what they do ("Analyze data").

## Avoid
Glassmorphism, neon colors, purple-pink gradients, identical cards everywhere,
ALL-CAPS labels, numbered markers on content that is not a sequence.

## Pre-delivery checklist (run before every demo)
- [ ] Looks right at 375, 768, 1024, 1440 px, with no sideways scrolling
- [ ] Tab key reaches everything, in order, with a visible focus ring
- [ ] Text contrast 4.5:1 or better
- [ ] Reduced motion respected
- [ ] Charts have a text alternative
- [ ] No placeholder text left ("PlaceHolder") and fill in every N/A

## Visual direction (v7): Organic Biophilic + Bento
Chosen with the skill's `style` search after the first version felt bland.
- Hero, header and footer use deep mangrove `#0f3a29`. Shell gold `#e9b872` is the accent and is used on dark areas only.
- Content sits on rounded tiles (20px radius, soft green shadow) in a bento layout. Tiles vary in size and tint (deep, tide, sand, white).
- Level colors: Low `#4f8f73`, Medium `#b7791f`, High `#174c35`. Color is always paired with the words Low / Medium / High.
- The search tool lives in the hero as a floating white card.
- Motion: hero text rises on load, tiles fade in on scroll. Both are switched off under `prefers-reduced-motion`.
- No illustrations or decorative drawings.

## Page structure (v8)
Three separate parts, in this order: 1) Intro to gastropods (`#home`), 2) Data center (`#data`), 3) About our research (`#about`, last).
Divisions between the parts are straight, square edges (no rounded section corners). Rounded corners are only for tiles and cards inside a part.
The "How to read impact" explanation was removed: the badge, gauge and labels are clear on their own.
All fill-out fields (Location, Habitat, Organisms, Research team, School) read N/A until the group fills them in.
