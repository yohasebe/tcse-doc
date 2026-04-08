# Collocation Network

The **Network** tab in Collocation mode provides an interactive visualization of word co-occurrence relationships using a force-directed graph. When you search for a word, the Network tab is shown by default if sufficient collocation data is available; otherwise, the display automatically falls back to the 2-gram tab.

## How to access

1. Click on **Collocation** to switch to Collocation mode
2. Enter a search word and click **Search**
3. The **Network** tab is selected by default

![Network tab showing collocation graph](images/17.png)

## Understanding the graph

- **Nodes** represent lemmas (base forms of words). For example, searching for "makes" will show the lemma "make", aggregating all inflected forms (make, makes, made, making).
- **Edges** connect words that frequently co-occur in the corpus. Thicker edges indicate higher MI (Mutual Information) scores.
- **Node size** reflects the word's overall frequency in the corpus.
- **Node color** indicates the part of speech:

| Color | Part of speech |
| :--- | :--- |
| Blue | Noun |
| Red | Verb |
| Green | Adjective |
| Orange | Adverb |
| Gray | Other |

## Controls

### MI threshold

The **MI ≥** buttons (2, 3, 4, 5) control the minimum Mutual Information score required for an edge to be displayed. Higher thresholds show only the strongest collocations. When the default MI ≥ 3 yields fewer than 5 nodes, the system automatically lowers the threshold to MI ≥ 2.

### Max nodes

The **Max nodes** buttons (15, 30, 50) control the maximum number of words displayed in the graph. Fewer nodes produce a cleaner, more focused visualization.

### Spacing

The **Spacing** slider (100–800) adjusts the repulsion force between nodes. Higher values spread nodes apart, reducing label overlap. Lower values produce a more compact graph.

### Zoom

The **Zoom** slider (50%–200%) adjusts the magnification level of the graph. Drag the slider to zoom in or out. The current zoom percentage is displayed next to the slider.

## Interaction

- **Pan**: Drag the background to move the entire graph
- **Drag**: Drag individual nodes to rearrange the layout
- **Hover** over a node to highlight its connections and show MI scores on edges
- **Click center node** (the search word): Navigate to a token search for `[lemma]`, showing all corpus examples
- **Click peripheral node**: Open a modal showing co-occurrence patterns (2–4 grams) between the two words, sorted by frequency. Click a pattern row to search for those specific examples in the corpus

## Filtering criteria

The network applies the following filters to select meaningful collocations:

- **MI threshold**: Minimum Mutual Information score (default ≥ 3, with automatic fallback to ≥ 2)
- **Frequency**: Minimum co-occurrence frequency ≥ 3
- **Talk count**: Minimum number of distinct talks ≥ 3 — a collocation must appear across at least 3 independent TED Talks to be included

The talk count filter leverages the document-level structure of the TED corpus. Since each talk is an independent discourse event by a different speaker, collocations attested across multiple talks provide stronger evidence of genuine linguistic association than those concentrated in a single talk.

### Stop words

The following categories of function words are excluded from the network as collocates (but can still be searched as the center word):

- Articles: *the, a, an*
- Be verbs: *is, was, are, were, be, been, being*
- Prepositions: *of, in, to, for, on, with, at, by, from, about, into, over, after, before, between, through, during*
- Conjunctions: *and, or, but, if, so, than*
- Negation: *not*
- Auxiliaries: *has, have, had, do, does, did, will, would, can, could, may, might, shall, should, must*
- Pronouns: *it, its, this, that, there, their, they, them, he, she, him, her, his, we, our, you, your, who, which, what, how*
- Quantifiers/determiners: *all, some, no, any, each, every, much, many, more, most, such, only*
- Numerals: *one* through *ten*, *first, second, third, last, next*
- High-frequency adverbs: *also, just, even, still, back, up, out, then, too, when, where, here*

Content words (nouns, verbs, adjectives, most adverbs) are **not** excluded, as they may form meaningful discourse-level collocations.

## Lemma-based aggregation

The network uses **lemma-based aggregation**: all inflected forms of a word are merged into a single node. For example:

- "make", "makes", "made", "making" → single node "make"
- "great", "greater", "greatest" → single node "great"

This produces cleaner, more meaningful networks by combining related forms and showing the true strength of collocational relationships across all surface variants.

!!! tip "Tips"
    - Start with a content word (noun, verb, adjective) for the most informative networks
    - Use the Spacing slider to reduce label overlap in dense networks, and the Zoom slider to adjust magnification
    - Click peripheral nodes to explore co-occurrence patterns, then click a pattern to see corpus examples
    - The network complements the Colloc tabs by providing a visual overview of a word's collocational profile
