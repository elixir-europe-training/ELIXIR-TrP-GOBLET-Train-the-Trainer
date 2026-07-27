# ELIXIR-GOBLET Train-the-Trainer (TtT) handbook

To be updated with the handbook doi[![DOI](https://zenodo.org/badge/564252010.svg)](https://zenodo.org/badge/latestdoi/564252010)


This handbook contains the core lessons of the ELIXIR-GOBLET Train-the-Trainer course. It contains as well several links to complementary lessons, and any other information related to the TtT courses.





## Template used to generate this handbook

This handbook was generated using the ELIXIR Lesson template available here: 
https://elixir-europe-training.github.io/ELIXIR-TrP-LessonTemplateInstructions-MkDocs/

> Geert van Geest, Elin Kronander, Jose Alejandro Romero Herrera, Nadja Žlender, & Alexia Cardona. (2023). 
> The ELIXIR Training Lesson Template - Developing Training Together (v1.0.0-alpha). Zenodo. 
> https://doi.org/10.5281/zenodo.7913092


## If working locally

This website is generated with [Jekyll](https://jekyllrb.com/), using the [ELIXIR toolkit theme](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme).

Install a recent Ruby (>= 2.7) and bundler, then from the repository root:

```bash
bundle install
bundle exec jekyll serve
```

Check it out with your browser at [http://localhost:4000/](http://localhost:4000/).

## Admonitions

Callout boxes ("admonitions") are added to a page with the `admonition.html` include. Content is passed in via `{% capture %}` since it needs to run through Markdown first:

```liquid
{% capture admonition_1 %}
Some **markdown** content here.
{% endcapture %}
{% include admonition.html type="tip" title="For trainers running this session" content=admonition_1 %}
```

`content` variable names (`admonition_1`, `admonition_2`, ...) only need to be unique within a single page.

### Types

There's a standard range of six types, each with its own color and default icon:

| type        | use it for                                  | color               | default icon                 |
|-------------|----------------------------------------------|---------------------|-------------------------------|
| `tip`       | practical advice, e.g. for trainers running the session | green (success)     | `fa-solid fa-lightbulb`         |
| `question`  | a challenge/exercise posed to participants  | teal (primary)      | `fa-solid fa-circle-question`   |
| `overview`  | a summary or orientation block              | cyan (info)         | `fa-solid fa-compass`           |
| `note`      | general side information                    | grey (secondary)    | `fa-solid fa-note-sticky`       |
| `warning`   | something to be careful about               | amber (warning)     | `fa-solid fa-triangle-exclamation` |
| `important` | critical information that must not be missed | red (danger)        | `fa-solid fa-circle-exclamation` |

Colors are defined in `_sass/_custom_classes.scss` (`.admonition-<type>`), and default icons in `_data/admonition_icons.yml`.

### Icons

Every admonition gets its type's default icon automatically. To use a different icon, pass any [Font Awesome](https://fontawesome.com/search?ic=free) class string via `icon`:

```liquid
{% include admonition.html type="tip" title="Pro tip" content=admonition_1 icon="fa-solid fa-star" %}
```

### Collapsible admonitions

Add `collapsible=true` to only show the title until the reader clicks it. Add `open=true` as well to have it expanded by default:

```liquid
{% include admonition.html type="tip" title="For trainers running this session" content=admonition_1 collapsible=true %}
```

## Acknowledgements

This website is built on the [ELIXIR toolkit theme](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme), a Jekyll theme maintained by ELIXIR Belgium for ELIXIR documentation and training websites.

The session card layout and navigation on the home page were adapted from the "module types" pattern used in [ELIXIR-ELITMa](https://github.com/elixir-europe-training/ELIXIR-ELITMa), the ELIXIR Training Programme in Management.