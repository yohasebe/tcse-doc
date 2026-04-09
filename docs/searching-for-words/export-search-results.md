# Export search results

!!! warning "Coming soon"
    This feature is currently under development and not yet available in the production version of TCSE.

You can export token search results as structured data files for use in linguistic research, statistical analysis, or further processing.

## How to export

1. Perform a token search (regular, advanced, or translation search)
2. When results are displayed, click **TSV** or **JSON** in the button bar above the results

<!-- TODO: Add screenshot after deployment -->

## Export formats

### TSV (ZIP download)

Downloads a ZIP archive containing two files:

- **data.tsv** — Tab-separated values file (UTF-8 with BOM for Excel compatibility). Each row is one search hit with all data fields as columns.
- **metadata.json** — Export metadata including query, total hit count, sampling method, and license information.

This format is best for opening in **Excel**, **Google Sheets**, or other spreadsheet applications.

### JSON (single file download)

Downloads a single JSON file containing both metadata and data in a structured format:

```json
{
  "metadata": { "query": "...", "total_hits": 1234, ... },
  "data": [ { "talk_id": 1, "match": "...", ... }, ... ]
}
```

This format is best for processing with **Python**, **R**, or other programming languages.

## Data fields

Each exported hit includes:

| Field | Description |
| :--- | :--- |
| talk_id | Talk ID number |
| talk_title | Title of the TED Talk |
| speaker | Speaker name |
| year | Year of publication |
| talk_url | URL to the talk on ted.com |
| match | Matched text (HTML tags removed) |
| segment_text | Full segment text containing the match |
| segment_position | Position in talk (e.g., "42/187") |
| context_before_1 | One segment before the match |
| context_before_2 | Two segments before the match |
| context_after_1 | One segment after the match |
| context_after_2 | Two segments after the match |

### Advanced search fields

When using Advanced Search, each hit additionally includes:

| Field | Description |
| :--- | :--- |
| pos | Part of speech of the matched word(s) |
| lemma | Lemma (base form) of the matched word(s) |
| dep | Dependency relation label |

### Translation fields

When a translation language is selected, each hit additionally includes:

| Field | Description |
| :--- | :--- |
| translation_lang | Translation language code |
| translation_segment | Translated text of the matching segment |
| translation_context_before_1 | Translation of one segment before |
| translation_context_before_2 | Translation of two segments before |
| translation_context_after_1 | Translation of one segment after |
| translation_context_after_2 | Translation of two segments after |

## Export limits

- Results up to **500 hits**: all results are exported
- Results over 500 hits: a **random sample** of 500 hits is exported. The total hit count is recorded in the metadata so you know the full population size.
- One export per search — results cannot be downloaded in multiple batches
- A **60-second cooldown** applies between consecutive exports

## License

Exported data includes TED Talk transcripts used under the **Creative Commons BY-NC-ND 4.0** license. The metadata file includes a license notice. Exported data is intended for **research and educational purposes only**.

!!! tip "Tips"
    - Use random sampling to obtain a statistically representative subset of large result sets
    - The segment_position field helps analyze where in a talk a pattern tends to occur
    - Combine Advanced Search annotations (POS, lemma, dep) with context for detailed discourse analysis
    - For comprehensive corpus-level statistics, use the N-gram and Collocation tabs instead of exporting
