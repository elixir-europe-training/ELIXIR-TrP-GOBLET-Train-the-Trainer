## Challenges Index

A single source of truth for every Challenge slug in use across the ELIXIR-GOBLET Train-the-Trainer materials.

**Why this file exists:** Challenge slugs are meant to stay stable even when slides get reordered, moved between sessions, or renumbered. This index is the one place where the slug, the slide it currently lives on, and the handbook section that documents it are all recorded together - so nobody accidentally reuses a slug, and anyone reordering slides knows which tag to carry over.

### How to use this file

- **Adding a new Challenge?** Check this table first to make sure you're not duplicating an existing slug or question. Then add a new row here.
- **Reordering or moving a slide that contains a Challenge?** Update only the "Current slide" column below - the slug itself never changes.
- **Challenge has a surprise/twist mechanism (e.g. a reveal that only works if learners don't see it coming)?** Don't write the mechanism out in plain text - future readers of this public handbook may be future participants. Instead, make the "For trainers running this session" tip collapsible (`???` instead of `!!!`), and note in its title that it contains the answer. See `challenge_short_term_memory_span` for a worked example.
- **Tagging a slide's notes:** add a single line near the top of the slide's notes, e.g.:

  ```
  🔖 slug: challenge_define_learning
  ```

- **Slug naming convention:** lowercase, underscore-separated, `challenge_` prefix, short (3-5 words), descriptive of the question's topic rather than its exact wording (so small rewordings of the question don't force a slug change). This slug is also used directly as the Liquid variable name in the corresponding admonition (see `how_to_contribute.md`) - so it must stay a valid Liquid identifier (letters, numbers, underscores only).

### A note on file structure

Session 1 has now been merged into a single handbook file, `session_1.md` - the separate per-section drafting files are superseded. Future sessions (2, 3, 4) will likely go through the same draft-then-merge process; when that happens, update the "Location" column below the same way this one was updated: point each Challenge at `sessionN.md#slug` once that session's merge is done.

### Index

| Slug | Question / prompt | Current slide | Location |
|---|---|---|---|
| `challenge_how_you_learn` | How do you learn something new? | Slide 2 | [session_1.md](session_1.md#challenge_how_you_learn) |
| `challenge_define_learning` | How would you define "learning"? | Slide 5 | [session_1.md](session_1.md#challenge_define_learning) |
| `challenge_why_learning_matters` | Why is learning about learning relevant for an instructor? | Slide 9 | [session_1.md](session_1.md#challenge_why_learning_matters) |
| `challenge_short_term_memory_span` | How short is your short-term memory? (two-round letter-recall exercise) | Slides 25-38 | [session_1.md](session_1.md#challenge_short_term_memory_span) |
| `challenge_avoid_overload` | How could you avoid overloading learners' working memory? | Slides 47-48 | [session_1.md](session_1.md#challenge_avoid_overload) |
| `challenge_mental_model_reflection` | How has your mental model changed since the first exercise? | Slides 65-66 | [session_1.md](session_1.md#challenge_mental_model_reflection) |
| `challenge_write_lo_for_your_course` | Write a Learning Outcome for one of your own courses (optional) | Slide 80 | [session_1.md](session_1.md#challenge_write_lo_for_your_course) |
| `challenge_reassess_action_verb` | Re-assess the quality of an action verb | Slide 90 | [session_1.md](session_1.md#challenge_reassess_action_verb) |
| `challenge_current_planning_practice` | How do you currently plan and design a training session or course? | Slides 5-6 | [session_2.md](session_2.md#challenge_current_planning_practice) |
| `challenge_define_los_yourself` | What are Learning Outcomes? (write it in your own words) | Slides 9-10 | [session_2.md](session_2.md#challenge_define_los_yourself) |
| `challenge_draft_a_syllabus` | Draft a Syllabus for a 3-minute lesson | Slide 27 | [session_2.md](session_2.md#challenge_draft_a_syllabus) |
| `challenge_add_les_to_syllabus` | Add Learning Experiences to your Syllabus | Slide 31 | [session_2.md](session_2.md#challenge_add_les_to_syllabus) |
| `challenge_draw_concept_map` | Draw a Concept Map for your mini-lesson | Slide 43 | [session_2.md](session_2.md#challenge_draw_concept_map) |
| `challenge_share_concept_map` | Share the Concept Map with a partner | Slide 50 | [session_2.md](session_2.md#challenge_share_concept_map) |
| `challenge_produce_mini_training_content` | Produce the content and training material for your mini-lesson | Slide 60 | [session_2.md](session_2.md#challenge_produce_mini_training_content) |
| `challenge_deliver_mini_training` | Deliver mini-training | Slide 62 | [session_2.md](session_2.md#challenge_deliver_mini_training) |
| `challenge_reflect_on_initial_los` | Self-reflect on your initial LOs | Slide 68 | [session_2.md](session_2.md#challenge_reflect_on_initial_los) |
| `challenge_effective_training_and_trainer` | What makes training effective? What makes a good trainer? | Slide 5 | [session_3.md](session_3.md#challenge_effective_training_and_trainer) |
| `challenge_reflect_goblet_skills` | Reflect on your skills as a trainer (GOBLET matrix) | Slide 9 | [session_3.md](session_3.md#challenge_reflect_goblet_skills) |
| `challenge_reflect_mazur_interview` | Reflect on Mazur's interview | Slides 12-13 | [session_3.md](session_3.md#challenge_reflect_mazur_interview) |
| `challenge_classify_active_learning_strategies` | Evaluate strategies for active learning (Practiced/Known/Unknown) | Slides 34-35 | [session_3.md](session_3.md#challenge_classify_active_learning_strategies) |
| `challenge_link_practices_los_blooms` | Link teaching practices, Learning Outcomes, and Bloom's levels | Slide 38 | [session_3.md](session_3.md#challenge_link_practices_los_blooms) |
| `challenge_recall_motivating_experience` | Recall a motivating learning experience | Slide 40 | [session_3.md](session_3.md#challenge_recall_motivating_experience) |
| `challenge_recall_demotivating_experience` | Recall a demotivating learning experience (optional) | Slide 65 | [session_3.md](session_3.md#challenge_recall_demotivating_experience) |
| `challenge_motivation_strategies` | Strategies to improve motivation | Slides 67-68 | [session_3.md](session_3.md#challenge_motivation_strategies) |
| `challenge_diagnostic_assessment` | Diagnostic Assessment - collecting info on prior knowledge | Slide 17 | [session_4.md](session_4.md#challenge_diagnostic_assessment) |
| `challenge_formative_assessment_info` | Formative Assessment - goals, mental models, frequent mistakes | Slide 28 | [session_4.md](session_4.md#challenge_formative_assessment_info) |
| `challenge_mcq_mental_model` | Multiple Choice Questions and mental models | Slide 29 | [session_4.md](session_4.md#challenge_mcq_mental_model) |
| `challenge_integrate_formative_assessment` | Integrating formative assessment results into your course | Slide 38 | [session_4.md](session_4.md#challenge_integrate_formative_assessment) |
| `challenge_formative_assessment_frequency` | How frequent should formative assessment be? | Slide 39 | [session_4.md](session_4.md#challenge_formative_assessment_frequency) |
| `challenge_apply_principle_strategy` | Applying a Principle and a Strategy (bonus closing session) | Slide 60 | [session_4.md](session_4.md#challenge_apply_principle_strategy) |

*(Add new rows below as we draft further sessions of the handbook.)*
