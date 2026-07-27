# Challenges Index

A single source of truth for every Challenge slug in use across the ELIXIR-GOBLET Train-the-Trainer materials.

**Why this file exists:** Challenge slugs are meant to stay stable even when slides get reordered, moved between sessions, or renumbered. This index is the one place where the slug, the slide it currently lives on, and the handbook section that documents it are all recorded together - so nobody accidentally reuses a slug, and anyone reordering slides knows which tag to carry over.

### How to use this file

- **Adding a new Challenge?** Check this table first to make sure you're not duplicating an existing slug or question. Then add a new row here.
- **Reordering or moving a slide that contains a Challenge?** Update only the "Current slide" column below - the slug itself never changes.
- **Challenge has a surprise/twist mechanism (e.g. a reveal that only works if learners don't see it coming)?** Don't write the mechanism out in plain text - future readers of this public handbook may be future participants. Instead, make the "For trainers running this session" tip collapsible (`???` instead of `!!!`), and note in its title that it contains the answer. See `challenge-short-term-memory-span` for a worked example.
- **Tagging a slide's notes:** add a single line near the top of the slide's notes, e.g.:

  ```
  🔖 slug: challenge-define-learning
  ```

- **Slug naming convention:** lowercase, hyphenated, `challenge-` prefix, short (3-5 words), descriptive of the question's topic rather than its exact wording (so small rewordings of the question don't force a slug change).

### A note on file structure

Session 1 has now been merged into a single handbook file, `session-1.md` - the separate per-section drafting files are superseded. Future sessions (2, 3, 4) will likely go through the same draft-then-merge process; when that happens, update the "Location" column below the same way this one was updated: point each Challenge at `sessionN.md#slug` once that session's merge is done.

### Index

| Slug | Question / prompt | Current slide | Location |
|---|---|---|---|
| `challenge-how-you-learn` | How do you learn something new? | Slide 2 | [session-1.md](session-1.md#challenge-how-you-learn) |
| `challenge-define-learning` | How would you define "learning"? | Slide 5 | [session-1.md](session-1.md#challenge-define-learning) |
| `challenge-why-learning-matters` | Why is learning about learning relevant for an instructor? | Slide 9 | [session-1.md](session-1.md#challenge-why-learning-matters) |
| `challenge-short-term-memory-span` | How short is your short-term memory? (two-round letter-recall exercise) | Slides 25-38 | [session-1.md](session-1.md#challenge-short-term-memory-span) |
| `challenge-avoid-overload` | How could you avoid overloading learners' working memory? | Slides 47-48 | [session-1.md](session-1.md#challenge-avoid-overload) |
| `challenge-mental-model-reflection` | How has your mental model changed since the first exercise? | Slides 65-66 | [session-1.md](session-1.md#challenge-mental-model-reflection) |
| `challenge-write-lo-for-your-course` | Write a Learning Outcome for one of your own courses (optional) | Slide 80 | [session-1.md](session-1.md#challenge-write-lo-for-your-course) |
| `challenge-reassess-action-verb` | Re-assess the quality of an action verb | Slide 90 | [session-1.md](session-1.md#challenge-reassess-action-verb) |
| `challenge-current-planning-practice` | How do you currently plan and design a training session or course? | Slides 5-6 | [session-2.md](session-2.md#challenge-current-planning-practice) |
| `challenge-define-los-yourself` | What are Learning Outcomes? (write it in your own words) | Slides 9-10 | [session-2.md](session-2.md#challenge-define-los-yourself) |
| `challenge-draft-a-syllabus` | Draft a Syllabus for a 3-minute lesson | Slide 27 | [session-2.md](session-2.md#challenge-draft-a-syllabus) |
| `challenge-add-les-to-syllabus` | Add Learning Experiences to your Syllabus | Slide 31 | [session-2.md](session-2.md#challenge-add-les-to-syllabus) |
| `challenge-draw-concept-map` | Draw a Concept Map for your mini-lesson | Slide 43 | [session-2.md](session-2.md#challenge-draw-concept-map) |
| `challenge-share-concept-map` | Share the Concept Map with a partner | Slide 50 | [session-2.md](session-2.md#challenge-share-concept-map) |
| `challenge-produce-mini-training-content` | Produce the content and training material for your mini-lesson | Slide 60 | [session-2.md](session-2.md#challenge-produce-mini-training-content) |
| `challenge-deliver-mini-training` | Deliver mini-training | Slide 62 | [session-2.md](session-2.md#challenge-deliver-mini-training) |
| `challenge-reflect-on-initial-los` | Self-reflect on your initial LOs | Slide 68 | [session-2.md](session-2.md#challenge-reflect-on-initial-los) |
| `challenge-effective-training-and-trainer` | What makes training effective? What makes a good trainer? | Slide 5 | [session-3.md](session-3.md#challenge-effective-training-and-trainer) |
| `challenge-reflect-goblet-skills` | Reflect on your skills as a trainer (GOBLET matrix) | Slide 9 | [session-3.md](session-3.md#challenge-reflect-goblet-skills) |
| `challenge-reflect-mazur-interview` | Reflect on Mazur's interview | Slides 12-13 | [session-3.md](session-3.md#challenge-reflect-mazur-interview) |
| `challenge-classify-active-learning-strategies` | Evaluate strategies for active learning (Practiced/Known/Unknown) | Slides 34-35 | [session-3.md](session-3.md#challenge-classify-active-learning-strategies) |
| `challenge-link-practices-los-blooms` | Link teaching practices, Learning Outcomes, and Bloom's levels | Slide 38 | [session-3.md](session-3.md#challenge-link-practices-los-blooms) |
| `challenge-recall-motivating-experience` | Recall a motivating learning experience | Slide 40 | [session-3.md](session-3.md#challenge-recall-motivating-experience) |
| `challenge-recall-demotivating-experience` | Recall a demotivating learning experience (optional) | Slide 65 | [session-3.md](session-3.md#challenge-recall-demotivating-experience) |
| `challenge-motivation-strategies` | Strategies to improve motivation | Slides 67-68 | [session-3.md](session-3.md#challenge-motivation-strategies) |
| `challenge-diagnostic-assessment` | Diagnostic Assessment - collecting info on prior knowledge | Slide 17 | [session-4.md](session-4.md#challenge-diagnostic-assessment) |
| `challenge-formative-assessment-info` | Formative Assessment - goals, mental models, frequent mistakes | Slide 28 | [session-4.md](session-4.md#challenge-formative-assessment-info) |
| `challenge-mcq-mental-model` | Multiple Choice Questions and mental models | Slide 29 | [session-4.md](session-4.md#challenge-mcq-mental-model) |
| `challenge-integrate-formative-assessment` | Integrating formative assessment results into your course | Slide 38 | [session-4.md](session-4.md#challenge-integrate-formative-assessment) |
| `challenge-formative-assessment-frequency` | How frequent should formative assessment be? | Slide 39 | [session-4.md](session-4.md#challenge-formative-assessment-frequency) |
| `challenge-apply-principle-strategy` | Applying a Principle and a Strategy (bonus closing session) | Slide 60 | [session-4.md](session-4.md#challenge-apply-principle-strategy) |

*(Add new rows below as we draft further sessions of the handbook.)*
