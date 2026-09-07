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

Collocation results are **grouped by lemma** (base form). This means that all inflected forms of a word are combined into a single entry. For example, searching for "make" will show:

- *make + mistake* — combining "make a mistake", "makes mistakes", "made a mistake", etc.
- *make + decision* — combining all inflected forms

The frequency shown for each pair is the sum over these forms. Hover over a lemma to see the surface forms that were aggregated. Click on a row to search for all instances using lemma search syntax.

### What the numbers cover

- A surface form enters the group only if it occurs at least 3 times in at least 2 talks. That threshold is applied before grouping, so **Freq** is the sum over the forms that pass it, not over every form.
- **Talks** is the largest talk count among the grouped forms, not the number of distinct talks that contain any of them. It can be lower than that number.
- The list is built by taking the 500 most frequent candidates and ranking those by the measure you choose. It is not the top of the whole corpus by MI, t-score or DP.
- **DP** for a grouped row is the average of the DP values of its surface forms, not DP recalculated on the combined distribution.

## Collocation network

For a visual overview of collocational relationships, use the **Network** tab. See [Collocation Network](collocation-network.md) for details.

!!! tip "Tips"
    - MI scores tend to highlight rare but strongly associated pairs
    - t-scores are better for finding common, reliable collocations useful for learners
    - Try different sort options to get different perspectives on word combinations
    - Click on any collocation to search for its instances in the transcript corpus
    - Hover over a lemma cell to see all surface form variants
