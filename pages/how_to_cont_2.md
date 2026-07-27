---
title: How to Contribute
contributors: [Patricia Palagi]
---

## How to Contribute to This Repository

This document collects the conventions we've settled on while building this handbook, so that anyone adding or editing content - including future us - follows the same patterns. It's a living document: update it whenever a new convention gets established, the same way we've been doing throughout this project.

---

### File naming

- Use underscores, not hyphens, in file names: `session_1.md`, `session_2.md`, `session_3.md`, `session_4.md`, `glossary.md`, `challenges_index.md`, `lesson_plan.md`, `how_to_contribute.md`.

### File structure: front matter and headings

Every session file (and, likely, every other page in this repo) starts with a Jekyll front matter block, followed directly by a "Presentation" section linking to the actual slide deck:

```markdown
---
title: Session N - <Session title>
contributors: [Contributor Name]
---

## Presentation

Here you can find the presentation for this session:

<iframe src="<Google Slides preview link>" width="640" height="360" allow="autoplay"></iframe>

The full presentation can be downloaded <a href="<Google Slides edit/download link>">[here]</a>.
```

- The page's H1 title lives in the front matter's `title` field - **not** as a `#` heading in the body. This means the actual body content starts at `##`, not `#`.
- Each session file is then broken into numbered Parts: `## Session N - Part I - <Part title>`, `## Session N - Part II - <Part title>`, etc.
- Right after every Part heading (and after the file's closing Summary heading), add a stable HTML anchor, e.g. `<a name="part-i-introduction-and-learning-outcomes"></a>`. This lets other files link directly to a specific Part.
- Each session file closes with `## Session N - Summary and Key Takeaways`.

### Writing style

- **ASCII only.** No middle dots (`·`), em dashes (`—`), en dashes (`–`), arrows (`→`), checkmark/cross symbols (`✓`/`✗`), curly quotes, or emoji - with one deliberate exception (see the 🔖 note under Challenges below). Use a plain hyphen `-` instead of middle dots and en dashes, ` - ` (spaced hyphen) instead of em dashes, and `->` instead of arrows.
- **Bold the action verb(s)** in every Learning Outcome (e.g. "**Describe** what makes training effective").
- **Paraphrase, don't reproduce, copyrighted source material.** Cite properly using footnotes (`[^1]`, `[^2]`, ...) with full bibliographic references at the end of the relevant Part.
- **Base content on the actual slide deck** - both the on-slide visible text and the speaker notes - not on general background knowledge. Cross-reference secondary sources (e.g. companion guides, the original textbooks a deck cites) only to fill a genuine gap or firm up a citation, and flag explicitly when doing so.
- **Watch for "challenge" the ordinary word vs. "Challenge" the learner activity.** A slide titled something like "Challenge of Course Design" can just mean "a difficulty," not a timed learner activity - only tag genuine, timed, learner-facing activities as Challenges.

### Handling quirks in the source slide decks

- **Duplicate/progressively-revealed slides** (the same content spread across 2-3 near-identical slides) get consolidated into one coherent section in the handbook, not reproduced as literal duplicates.
- **Logistics-only slides** (coffee-break markers like "back at ___h___", "Sharing time! 5 min," pure image-attribution slides) are dropped from the handbook, or folded into the trainer tip of the neighboring Challenge if genuinely relevant.
- **Internal production notes** (TODOs, personal notes like "Bruna note for self...", credit lines like "New activity - Belgium node") are dropped - they're notes for the content team, not trainer- or learner-facing material.
- **Never rely on original slide numbers as stable identifiers** - slides get reordered. The "Current slide" column in `challenges_index.md` is a convenience pointer only, not something to build links or logic on.

### Admonitions

Callout boxes ("admonitions") are added to a page with the `admonition.html` include. Content is passed in via `{% capture %}` rather than as a direct string, since it needs to run through Markdown rendering first:

```liquid
{% capture VARIABLE_NAME %}
Some **markdown** content here.
{% endcapture %}
{% include admonition.html type="tip" title="..." content=VARIABLE_NAME %}
```

`content` variable names only need to be unique *within a single page* - not across the whole repo. That said, this handbook uses its own, more structured naming convention on top of that minimum requirement, for traceability:

- **`type="question"`** - used for Challenges (learner activities). The capture variable name is the Challenge's slug, with hyphens converted to underscores, so it matches the anchor and its row in `challenges_index.md` exactly (e.g. slug `challenge-current-planning-practice` -> variable `challenge_current_planning_practice`).
    - If a single Challenge genuinely needs more than one admonition box (e.g. a two-round exercise), disambiguate with a descriptive suffix: `_round1`/`_round2`, `_part1`/`_part2`, etc. Only do this when the parts are meant to stay visually and functionally separate - if they can be merged into one coherent activity instead, prefer merging (see the Session 3 "Strategies to improve motivation" Challenge for an example of a two-part Challenge that got merged into one).
- **`type="tip"`** - used for trainer-facing facilitation notes ("For trainers running this session"). The capture variable is `tip_1`, `tip_2`, ... `tip_N`, numbered sequentially in document order, **restarting at 1 in each session file**. Treat these as assign-once identifiers: a tip's number doesn't need to change just because something got reordered around it - only genuinely new tips get the next unused number.

#### Types

There's a standard range of six admonition types available, each with its own color and default icon:

| type | use it for | color | default icon |
|---|---|---|---|
| `tip` | practical advice, e.g. for trainers running the session | green (success) | `fa-solid fa-lightbulb` |
| `question` | a challenge/exercise posed to participants | teal (primary) | `fa-solid fa-circle-question` |
| `overview` | a summary or orientation block | cyan (info) | `fa-solid fa-compass` |
| `note` | general side information | grey (secondary) | `fa-solid fa-note-sticky` |
| `warning` | something to be careful about | amber (warning) | `fa-solid fa-triangle-exclamation` |
| `important` | critical information that must not be missed | red (danger) | `fa-solid fa-circle-exclamation` |

Colors are defined in `_sass/_custom_classes.scss` (`.admonition-<type>`), and default icons in `_data/admonition_icons.yml`. **`tip`, `question`, and `important` are currently in use in this handbook** - the remaining three (`overview`, `note`, `warning`) are available if a future need for them comes up, but haven't been assigned a convention here yet. `important` is reserved for genuinely critical, easy-to-miss information (e.g. flagging that a whole section isn't actually part of the session it's nested in) - not for routine trainer facilitation notes, which stay `tip`. Its capture variable follows the same pattern as tips, but with its own prefix: `important_1`, `important_2`, ... numbered sequentially per file, same assign-once rule as `tip_N`.

#### Icons

Every admonition gets its type's default icon automatically. To use a different icon instead, pass any [Font Awesome](https://fontawesome.com/search?ic=free) class string via `icon`:

```liquid
{% include admonition.html type="tip" title="Pro tip" content=admonition_1 icon="fa-solid fa-star" %}
```

#### Collapsible admonitions

Add `collapsible=true` to only show the title until the reader clicks it. Add `open=true` as well to have it expanded by default:

```liquid
{% include admonition.html type="tip" title="For trainers running this session" content=admonition_1 collapsible=true %}
```

This is how the spoiler pattern (see "Challenges: slugs and the index" below) should be implemented: `collapsible=true`, without `open=true`, so the answer stays hidden until a reader deliberately clicks to reveal it.

### Challenges: slugs and the index

- Every Challenge gets a permanent slug: lowercase, hyphenated, `challenge-` prefix, short (3-5 words), describing the *topic* rather than the exact question wording (so small rewordings don't force a slug change).
- Register every Challenge in `challenges_index.md`: slug, question/prompt, current slide, and file location.
- Place an HTML anchor right where the Challenge is introduced: `<a name="challenge-slug-here"></a>`.
- Tag the corresponding slide's notes in the actual slide deck with a single line: `🔖 slug: challenge-slug-here` (this is the one place the 🔖 emoji is intentionally kept, despite the general ASCII-only rule).
- If a Challenge has a surprise/twist mechanism that only works if learners don't see it coming, don't spell the mechanism out in plain text - use a collapsible admonition for the reveal instead: `collapsible=true` (without `open=true`), as described under "Admonitions" above.
- Before adding a new Challenge, check `challenges_index.md` first, to avoid reusing a slug or duplicating an existing one.

### Glossary

- `glossary.md` holds every shared term, alphabetically ordered, each with a stable anchor: `<a name="glossary-term-slug"></a>`.
- Each entry: the term as a heading, a short definition, and a `*First introduced in: [Part Label](session_n.md#anchor)*` line pointing to where it was first defined.
- Link to a glossary term the first time it appears in any file (including reuses across different sessions - e.g. "Teaching Goals," "Bloom's Taxonomy," and "Formative assessment" are all defined once and linked from wherever they reappear).
- Check `glossary.md` before introducing a new term, to avoid redefining something that already has an entry.

### Cross-referencing between files

- Link across files using the pattern `[Session N](session_n.md#anchor)`, pointing either at a Part-level anchor or a Challenge-level anchor.
- Prefer linking back to existing content over repeating it - e.g. Session 3 and 4 link back to specific Principles in Session 1 (P4, P7) rather than re-explaining them from scratch.

### Warm-ups and the lesson plan

- Warm-ups (the 30-minute activity at the start of each course day) live **only** in `lesson_plan.md`, not duplicated inside the session files themselves - this avoids two possibly-inconsistent versions of the same instructions existing in different places.
- `lesson_plan.md` follows the same lesson-plan table format taught in Session 2: `Time | Activity | Description | Materials | LOs | Teaching goal`.
- Dates in `lesson_plan.md` are written as a placeholder, `[DD Month YYYY]`, to be replaced with the actual dates of a given course run.

---

### Open items

A few things we haven't fully settled yet - worth resolving as this repository matures:

- **The "Combining the Four Sessions" bonus content**, currently living inside `session_4.md` under its own heading, may deserve its own separate file, since it has its own dedicated time slot in the schedule and isn't really "Session 4" content.
- **Whether `challenges_index.md` and `lesson_plan.md` need their own Jekyll front matter**, matching the session files (`how_to_contribute.md` now has one) - not yet confirmed.
