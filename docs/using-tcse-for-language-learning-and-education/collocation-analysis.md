# Collocation analysis

Collocation analysis shows which words frequently co-occur with your search term.

## How to access

1. Click on **Collocation** to switch to Collocation mode
2. Enter a search word
3. Click on the **Colloc 2** or **Colloc 3** tab

- **Colloc 2**: Shows 2-word collocations (bigrams containing your search term)
- **Colloc 3**: Shows 3-word collocations (trigrams containing your search term)

![Colloc 2 and Colloc 3 tabs in Collocation mode](images/10.png)

## Sort options

You can sort collocation results by different statistical measures:

| Measure | Description |
| :--- | :--- |
| **MI** (Mutual Information) | Measures how strongly two words are associated. Higher values indicate stronger, often more specific collocations. |
| **t-score** | Balances association strength with frequency. Tends to highlight frequent, reliable collocations. |
| **Freq** (Frequency) | Simple co-occurrence frequency count. |
| **DP** (deviation of proportions) | A dispersion measure (Gries 2008) between 0 and 1. It compares how the pair's occurrences are spread over the talks with how long those talks are. A value near 0 means the pair is spread in proportion to talk length; a value near 1 means it is concentrated in a few talks. It does not measure how strongly the two words attract each other. Sorting by DP puts the most concentrated pairs first. |

![Collocation results sorted by MI score](images/11.png)

## Lemma-based grouping

Collocation results are **grouped by lemma** (base form), so the inflected forms of a pair appear as one entry. Searching for *make* in Colloc 2 gives, among others:

- *make + mistake* — combining *make mistakes*, *makes mistakes*, *made mistakes* and *making mistakes*
- *make + decision* — combining the inflected forms of the same two words

The frequency shown for each pair is the sum over those forms. Hover over a lemma to see the surface forms that were aggregated. Click on a row to search for all instances using lemma search syntax.

Colloc 2 counts **adjacent** pairs, so *make a mistake* is not part of *make + mistake*: the article sits between the two words, which puts that phrase in the three-word series behind Colloc 3.

### What the numbers cover

- The rows that are grouped are the corpus's n-gram rows, one per word/lemma/part-of-speech combination, so the same written form can contribute more than one row.
- A row enters the group only if it occurs at least 3 times in at least 2 talks. That threshold is applied before grouping, so **Freq** is the sum over the rows that pass it, not over every row.
- **Talks** is the largest talk count among the grouped rows, not the number of distinct talks that contain any of them. It can be lower than that number.
- The list is built by taking the 500 most frequent candidates, ranking those by the measure you choose, and showing at most 100. It is not the top of the whole corpus by MI, t-score or DP.
- **DP** for a grouped row is the plain mean of the DP values of the grouped rows, not weighted by frequency and not recalculated on the combined distribution.
- Grouping happens after the search term is matched, so entering an inflected form such as *makes* collects the rows that matched *makes*, not every form of *make*. Enter the base form to see them all.

## Collocation network

For a visual overview of collocational relationships, use the **Network** tab. See [Collocation Network](collocation-network.md) for details.

!!! tip "Tips"
    - MI scores tend to highlight rare but strongly associated pairs
    - t-scores are better for finding common, reliable collocations useful for learners
    - Try different sort options to get different perspectives on word combinations
    - Click on any collocation to search for its instances in the transcript corpus
    - Hover over a lemma cell to see all surface form variants
