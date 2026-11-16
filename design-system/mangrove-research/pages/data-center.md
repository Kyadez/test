# Page override: Data Center (`#data`)

Only deviations from MASTER.md. Everything else follows MASTER.

## Search
- Visible `<label>` ("Gastropod name") above one search field and a "Search" button. Placeholder is a hint, not the label.
- No-results state must give a next step ("Check the spelling or pick a name from the list"), never a blank or "0 results".
- Suggestions come from a `<datalist>` so keyboard and touch users get the same list.

## Result card
- Impact is shown by words and fill together: High = solid, Medium = light fill, Low = outline. Never color alone.
- "In plain words" explanation comes first. Formula and numbers sit inside a collapsed `<details>` ("Show the formula and numbers").
- Until the AI interpreter is connected, the reason and the formula both read "WIP".
- Result area uses `aria-live="polite"` so screen readers hear new results.

## Not allowed here
- Raw equations or numbers visible by default.
- Invented species names, scores, or formulas.

## Added in v6
- Quick-search chips ("Try: High / Medium / Low") are real `<button>`s with a visible focus ring and 44px height. The impact badge is a plain `<span>`: it shows status, it is not clickable.
- Each result shows a three-segment impact gauge (Low, Medium, High) with text labels and an `aria-label`, so it never relies on color alone.
- A "How to read impact" legend sits under the result. Its descriptions read "WIP" until the group writes them.
- Result card slides in over 0.25s; this is switched off under `prefers-reduced-motion`.
