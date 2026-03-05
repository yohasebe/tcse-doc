# TCSE Documentation

![TCSE Logo](images/tcse-logo.png){ width="600" }

This is a user guide for [TED Corpus Search Engine](https://yohasebe.com/tcse) (TCSE).

TCSE is a search engine specializing in exploring transcripts of TED Talks. It has been created for educational and scientific purposes. TCSE uses data provided by TED under the Creative Commons BY-NC-ND license, but it is **not** an official service of TED.

## Current Version

- **Version**: 12.0.0
- **Talks**: 6,419 TED Talks
- **Languages**: 34 translation languages
- **NLP Engine**: spaCy 3.8 (`en_core_web_lg`)
- **Last Updated**: February 28, 2026

## Recent Updates (v11–v12)

### New Search Features

- **KWIC concordance view** — Toggle between list and KWIC (Key Word In Context) display modes for linguistic analysis
- **Named entity (NER) search** — Use `%PERSON`, `%ORG`, `%GPE`, `%DATE`, etc. in Advanced Search to find named entities
- **POS tag shorthand aliases** — Use `{v}`, `{n}`, `{a}`, `{r}`, `{pr}`, etc. as shortcuts in Advanced Search
- **Collocation analysis** — MI (Mutual Information) and t-score statistics added to N-gram mode
- **Translation concordance** — Search translation text and view corresponding English segments

### Construction & Data

- **Construction category filter** — Patterns categorized into phrasal verb, idiom, grammatical, discourse, and other, with filter UI
- **New patterns added** — Pseudo-cleft, resultative, and other information structure patterns
- **Database cleanup** — Duplicates and low-frequency patterns removed (1,101 patterns total)
- **6,419 TED Talks** — Over 1,100 new talks added since v10

### UI & Performance

- **Responsive design** — Modernized layout with improved mobile and print support
- **Accessibility improvements** — Better keyboard navigation and screen reader support
- **SQL query optimization** — Database indexing and query performance improvements
- **Documentation migrated** — From GitBook to [GitHub Pages](https://yohasebe.github.io/tcse-doc/)

## Features

- **Full-text search** across all TED Talk transcripts
- **Advanced linguistic search** with POS tags, lemmas, dependency relations, morphological features, and named entities
- **KWIC concordance view** for linguistic analysis
- **N-gram frequency analysis** (1-gram to 4-gram) with collocation statistics
- **Construction search** for 1,101 grammatical patterns (idioms, phrasal verbs, etc.)
- **34 translation languages** with cross-language search
- **HTML5 video player** with segment-level playback and study mode
- **Text highlighting** for keywords (TF-IDF) and discourse markers

## Developer

TCSE and this documentation are developed and maintained by [Yoichiro Hasebe](https://yohasebe.com) (`yohasebe@gmail.com`)
