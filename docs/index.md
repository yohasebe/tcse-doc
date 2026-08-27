# TCSE Documentation

![TCSE Logo](images/tcse-logo.png){ width="600" }

This is a user guide for [TED Corpus Search Engine](https://yohasebe.com/tcse) (TCSE).

TCSE is a search engine specializing in exploring transcripts of TED Talks. It has been created for educational and scientific purposes. TCSE uses data provided by TED under the Creative Commons BY-NC-ND license, but it is **not** an official service of TED.

## Current Version

- **Version**: 13.6.1
- **Talks**: 6,419 TED Talks
- **Languages**: 34 translation languages
- **NLP Engine**: spaCy 3.8 (`en_core_web_lg`)
- **Last Updated**: April 10, 2026

## How to Cite TCSE

When you refer to TCSE in published work, please cite the articles below:

> Hasebe, Yoichiro. 2015. Design and implementation of an online corpus of presentation transcripts of TED Talks. *Procedia: Social and Behavioral Sciences* 198(24). 174–182.
>
> 長谷部陽一郎 (Hasebe, Yoichiro). 2018. TED Corpus Search Engine: TED Talks を教育と研究に活用するためのプラットフォーム [TED Corpus Search Engine: A platform for using TED Talks in research and education]. 『英語コーパス研究』(*English Corpus Studies*) 25. 159–172.

!!! note "Reporting the corpus size and version"

    The figures given in those articles describe the system **as it was at the time of writing** — the 2015 article, for instance, reports a corpus of about 1,800 talks. The corpus has grown considerably since then. When you state the size or version of the corpus you used, please take the values from the **Current Version** section above (and note the date on which you ran your queries), rather than repeating the numbers printed in the published papers.

    The same applies to the query syntax: features such as typed noun-chunk slots and lemma echo were introduced in v13 and are not described in the earlier articles. See [Advanced Search Query Syntax](searching-for-words/advanced-search-query-syntax.md) for the current specification.


For the version history, see the [Changelog](changelog.md).

## Features

- **Full-text search** across all TED Talk transcripts
- **Advanced linguistic search** with POS tags, lemmas, dependency relations, morphological features, and named entities
- **Typed noun-chunk slots** — Constrain and cross-reference phrase-level slots (`_{pron}`, `_{%PERSON}`, `_{[life]}`, lemma echo `:N`/`=N`)
- **KWIC concordance view** for linguistic analysis
- **Collocation mode** — N-gram frequency (1-gram to 4-gram), collocation statistics, and network visualization
- **Construction search** for 1,167 grammatical patterns (idioms, phrasal verbs, etc.)
- **34 translation languages** with cross-language search
- **Multilingual UI** — English, Japanese, Chinese, and Korean
- **HTML5 video player** with segment-level playback and study mode
- **Text highlighting** for keywords (TF-IDF) and discourse markers
- **Export search results** as TSV or JSON for research and analysis

## Related blog posts

For articles about TCSE features, updates, and use cases, see the [TCSE tag on the developer's blog](https://yohasebe.com/tags/tcse/).

## Developer

TCSE and this documentation are developed and maintained by [Yoichiro Hasebe](https://yohasebe.com) (`yohasebe@gmail.com`)
