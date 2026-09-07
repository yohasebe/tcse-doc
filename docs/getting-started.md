# Getting started

TCSE searches the transcripts of TED Talks. Every hit keeps its place in the talk, so you can read what comes before and after it, show a translation, and play the video from the moment the words were spoken.

This page is one path through the tool, from a first search to a video. The rest of this guide is arranged by task, so come back to it when you need a particular feature.

## 1. Search for a word

Type a word into the box at the top of [the main page](https://yohasebe.com/tcse/) and click **SEARCH**. Try `technology`.

Each row in the table is one hit: the talk it comes from, where in the talk it occurs, and the text around it with your word marked. Transcripts are divided into **segments**, roughly one screen of subtitles; by default TCSE extends each segment to sentence boundaries so that a hit is easier to read. Results are paginated 200 at a time.

Results appear in a random order by default, so that the first page is not always drawn from the same corner of the corpus. The order is still fixed: the same query with the same seed returns the same rows in the same sequence. To see a different sample, move the **Random seed** slider and search again, or turn **Randomize Result Order** off for the database order. See [Search in transcripts](searching-for-words/search-for-words-in-ted-transcripts.md).

## 2. Open a hit

The icons on each row lead out of the table:

- play the video from that segment — see [Play a segment](playing-video/play-a-segment-of-a-talk.md). The browser may block sound until you click the player once
- read the [full transcript](obtaining-information-about-talks/show-transcripts-in-full-length.md) of the talk
- copy the [segment's URL](using-tcse-for-language-learning-and-education/get-unique-url-of-a-segment.md), which reopens the video at that moment

Each row also carries the talk's ID number and the position of the segment within the talk. Clicking the ID number shows [information about the talk](obtaining-information-about-talks/find-basic-information-about-a-talk.md); the position tells you [where the segment falls](obtaining-information-about-talks/check-location-of-a-segment.md).

## 3. Show a translation

Choose a language from the **Translation** selector and click **SEARCH** again. The translation belongs to the search that produced the rows on screen, so changing the selector alone leaves the current results as they are. After the new search the translated text appears with each hit and on the video. TCSE carries the translations that TED volunteers have contributed, so coverage differs from talk to talk. See [Show translation](searching-for-words/show-translation.md).

## Where to go next

### Teaching and learning

- [Play a segment](playing-video/play-a-segment-of-a-talk.md), [change the speed](using-tcse-for-language-learning-and-education/change-play-speed.md), and [pause after each segment](playing-video/pause-video-after-segment.md) to work through a passage.
- [N-grams](using-tcse-for-language-learning-and-education/n-grams.md) show which sequences of words are common, and [Constructions](using-tcse-for-language-learning-and-education/constructions.md) collects patterns and idioms with examples from the corpus.
- Give students a link that opens the video at one segment: [Segment URL](using-tcse-for-language-learning-and-education/get-unique-url-of-a-segment.md).

### Corpus research

- **Advanced Search** matches by lemma, part of speech and dependency rather than by surface string. `[help]{verb}` finds *help*, *helps*, *helped* and *helping* used as verbs; `[give] _{pron} _` finds *give* with a pronoun and a noun phrase after it. Start at [Advanced search](searching-for-words/search-in-advanced-mode.md) and keep [Query syntax](searching-for-words/advanced-search-query-syntax.md) open beside it.
- [KWIC view](searching-for-words/kwic-concordance-view.md) lines the hits up on the search word.
- [Collocation analysis](using-tcse-for-language-learning-and-education/collocation-analysis.md) and the [collocation network](using-tcse-for-language-learning-and-education/collocation-network.md) show what a word occurs with. Read what each statistic counts before you use it in an argument.
- [Export](searching-for-words/export-search-results.md) writes the page you are looking at to TSV or JSON. Record the settings you used along with the file; the export does not carry all of them.

If you plan to cite TCSE, see [How to cite TCSE](index.md#how-to-cite-tcse). Report the corpus size and version from [Current version](index.md#current-version) and the date you ran the search, not the figures printed in the papers.
