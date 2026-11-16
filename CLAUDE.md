# Project notes for AI assistants

Mangrove & Gastropod Research website (school research, Masbate).

## Stack and hosting
- Static site: `index.html`, `styles.css`, `script.js`, `assets/`. No frameworks, no build step.
- Hosted on GitHub Pages, so only static files run there. `Backend/` (Python) does not run on Pages.
- Plain CSS with variables in `:root` of `styles.css`. Do not add Tailwind.

## Design
- Use the **ui-ux-pro-max** skill for any UI work (`.claude/skills/ui-ux-pro-max/`).
- Source of truth: `design-system/mangrove-research/MASTER.md`.
  Check `design-system/mangrove-research/pages/<page>.md` first; a page file overrides MASTER.
- Keep the green palette and the Crimson Pro + Atkinson Hyperlegible fonts. No glassmorphism, no neon.
- Skill search from the project root (`python` on Windows, `python3` on Mac/Linux):
  `python .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain ux`
- Do NOT run the skill with `--persist` unless asked: MASTER.md is hand-edited and it would be overwritten.
- Run the pre-delivery checklist in MASTER.md before handing work back.

## Content rules
- The Data Center is placeholder: entries are High, Medium, Low and every reason is "WIP".
  Do not invent species, formulas, or numbers. Show plain-language explanations first; keep formulas inside a collapsed section.

## Packaging
- When making a zip, name it `REsearch-v<N>.zip` and continue the team's version numbers.
