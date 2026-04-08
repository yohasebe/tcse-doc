# TCSE Documentation

![TCSE Logo](images/tcse-logo.png){ width="600" }

This is a user guide for [TED Corpus Search Engine](https://yohasebe.com/tcse) (TCSE).

TCSE is a search engine specializing in exploring transcripts of TED Talks. It has been created for educational and scientific purposes. TCSE uses data provided by TED under the Creative Commons BY-NC-ND license, but it is **not** an official service of TED.

## Current Version

- **Version**: 12.2.0
- **Talks**: 6,419 TED Talks
- **Languages**: 34 translation languages
- **NLP Engine**: spaCy 3.8 (`en_core_web_lg`)
- **Last Updated**: March 9, 2026

## Recent Updates (v11–v12)

### User Interface

- **Multilingual UI** — Interface available in English, Japanese (日本語), Chinese (中文), and Korean (한국어). Use the language buttons on any page to switch.
- **Streamlined search workflow** — The RESET button has been removed. You can now start a new search at any time by simply entering a query and clicking SEARCH, just like a regular search engine.

### New Search Features

- **KWIC concordance view** — Toggle between list and KWIC (Key Word In Context) display modes for linguistic analysis
- **Named entity (NER) search** — Use `%PERSON`, `%ORG`, `%GPE`, `%DATE`, etc. in Advanced Search to find named entities
- **Collocation analysis** — MI, t-score, and DP statistics with lemma-based grouping in Collocation mode
- **Collocation network** — Interactive force-directed graph visualization of word co-occurrence relationships

### Collocation & Visualization

- **NER-enhanced n-grams** — Named entities replaced with `%TYPE` labels (e.g., `%PERSON said`, `in %GPE`) for entity-aware frequency analysis
- **Network zoom slider** — Zoom control (50%–200%) replaces scroll-based zooming for more precise graph navigation
- **Text highlight default off** — Keywords and discourse markers highlighting is now off by default for a cleaner transcript view

### Construction & Data

- **Construction category filter** — Patterns categorized into Phrasal Verb, Idiom, Grammatical, Collocation, Discourse, and NER Pattern, with filter UI
- **1,160 construction patterns** — Including pseudo-cleft, resultative, NER patterns, adjective-subjectivity constructions, and other linguistic structures
- **6,419 TED Talks** — Over 1,100 new talks added since v10

## Features

- **Full-text search** across all TED Talk transcripts
- **Advanced linguistic search** with POS tags, lemmas, dependency relations, morphological features, and named entities
- **KWIC concordance view** for linguistic analysis
- **Collocation mode** — N-gram frequency (1-gram to 4-gram), collocation statistics, and network visualization
- **Construction search** for 1,160 grammatical patterns (idioms, phrasal verbs, etc.)
- **34 translation languages** with cross-language search
- **Multilingual UI** — English, Japanese, Chinese, and Korean
- **HTML5 video player** with segment-level playback and study mode
- **Text highlighting** for keywords (TF-IDF) and discourse markers

## Developer

TCSE and this documentation are developed and maintained by [Yoichiro Hasebe](https://yohasebe.com) (`yohasebe@gmail.com`)
