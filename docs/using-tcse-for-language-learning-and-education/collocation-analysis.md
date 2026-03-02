# Collocation analysis

TCSE provides collocation analysis to help you discover which words frequently co-occur with your search term. This is valuable for understanding natural word combinations and improving vocabulary knowledge.

## How to access

1. Click on **N-gram** to switch to N-gram mode
2. Enter a search word
3. Click on the **Colloc 2** or **Colloc 3** tab

- **Colloc 2**: Shows 2-word collocations (bigrams containing your search term)
- **Colloc 3**: Shows 3-word collocations (trigrams containing your search term)

![Colloc 2 and Colloc 3 tabs in N-gram mode](images/10.png)

## Sort options

You can sort collocation results by different statistical measures:

| Measure | Description |
| :--- | :--- |
| **MI** (Mutual Information) | Measures how strongly two words are associated. Higher values indicate stronger, often more specific collocations. |
| **t-score** | Balances association strength with frequency. Tends to highlight frequent, reliable collocations. |
| **Freq** (Frequency) | Simple co-occurrence frequency count. |
| **DP** (Delta P) | Directional association measure. Shows how much more likely word B is given word A, compared to its overall probability. |

![Collocation results sorted by MI score](images/11.png)

## Tips

- MI scores tend to highlight rare but strongly associated pairs
- t-scores are better for finding common, reliable collocations useful for learners
- Try different sort options to get different perspectives on word combinations
- Click on any collocation to search for its instances in the transcript corpus
