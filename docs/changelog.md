# Changelog

Major changes to TCSE by version. Maintenance releases that do not change search functionality may be omitted.

## v13

Version 13 adds a layer of *typed abstraction* to Advanced Search: noun chunks are no longer just placeholders, but slots you can constrain and cross-reference. See [Advanced Search Query Syntax](searching-for-words/advanced-search-query-syntax.md) for full details.

- **Typed noun-chunk slots** (v13.1.0) — `_{COND}` constrains a chunk by its head (root) token: `_{pron}` matches chunks headed by a pronoun, `_{-pron}` its exact complement. Example: `[give|send|tell] _{pron} _` retrieves ditransitives with pronominal recipients.
- **Entity-typed chunk conditions** (v13.2.0) — `_{%PERSON}` matches a chunk headed by a PERSON entity; types combine with `|` (`_{%PERSON|%ORG}`) and mix with other conditions (`_{pron|%PERSON}` for "a human referent").
- **Lemma echo** (v13.3.0, extended in v13.4.0) — Bind a slot's lemma with `:N` and refer to it later with `=N`, so that cross-slot identity becomes a single query: `{noun:1} [after] _{=1}` retrieves *study after study*, and `{adv:1} [and] {=1&adv}` retrieves *over and over*.
- **Chunk-head lemma conditions** (v13.5.0) — `_{[life]}` matches chunks whose root lemma is *life*, so cognate objects come out directly: `[live]{verb} _{[life]}`.
- **Chunk-head lemma disjunction** (v13.6.0) — the lemma condition accepts alternatives: `_{[part|role]}` matches chunks headed by *part* or *role*, so `[do|play|take]{verb} _{[part|role]}` covers light-verb pairs in one query. `_{-[part|role]}` matches chunks headed by neither.

## v11–v12

### User Interface

- **Multilingual UI** — Interface available in English, Japanese (日本語), Chinese (中文), and Korean (한국어). Use the language buttons on any page to switch.
- **Streamlined search workflow** — The RESET button has been removed. You can now start a new search at any time by simply entering a query and clicking SEARCH, just like a regular search engine.

### New Search Features

- **KWIC concordance view** — Toggle between list and KWIC (Key Word In Context) display modes for linguistic analysis
- **Named entity (NER) search** — Use `%PERSON`, `%ORG`, `%GPE`, `%DATE`, etc. in Advanced Search to find named entities
- **Collocation analysis** — MI, t-score, and DP statistics with lemma-based grouping in Collocation mode
- **Collocation network** — Interactive force-directed graph visualization of word co-occurrence relationships
- **Export search results** — Download token search results as TSV (ZIP) or JSON with context, linguistic annotations, and translations for research use

### Collocation & Visualization

- **NER-enhanced n-grams** — Named entities replaced with `%TYPE` labels (e.g., `%PERSON said`, `in %GPE`) for entity-aware frequency analysis
- **Network zoom slider** — Zoom control (50%–200%) replaces scroll-based zooming for more precise graph navigation
- **Text highlight default off** — Keywords and discourse markers highlighting is now off by default for a cleaner transcript view

### Construction & Data

- **Construction category filter** — Patterns categorized into Phrasal Verb, Idiom, Grammatical, Collocation, Discourse, and NER Pattern, with filter UI
- **1,167 construction patterns** — Including pseudo-cleft, resultative, NER patterns, adjective-subjectivity constructions, and other linguistic structures
- **6,419 TED Talks** — Over 1,100 new talks added since v10
