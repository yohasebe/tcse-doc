# Export search results

!!! info "Beta feature"
    This feature is in beta. It is available on the TCSE website, but the interface and data fields may change based on user feedback. Feedback is welcome.

You can export token search results as structured data files for use in linguistic research, statistical analysis, or further processing.

## How to export

1. Perform a token search (regular, advanced, or translation search)
2. When results are displayed, click **TSV** or **JSON** in the button bar above the results
3. The **currently visible page** (up to 200 hits) will be downloaded
4. To export additional pages, navigate with **Prev**/**Next** and click export again

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
  "metadata": { "export_format_version": 2, "query": "...", "total_hits": 1234, ... },
  "data": [ { "talk_id": 1, "match": "...", ... }, ... ]
}
```

This format is best for processing with **Python**, **R**, or other programming languages.

## Export format version and compatibility

The JSON `metadata` object and the ZIP's `metadata.json` include `export_format_version`. Version **2** corrects two fields without changing search results or their order:

- `context_before_1` is the immediately preceding segment; `context_before_2` is two segments before the hit. The same numbering applies to `translation_context_before_1` and `translation_context_before_2`. Missing context at the beginning of a talk is an empty string. In expanded-segment mode, these fields refer to expanded segments.
- When a translation language is selected, `translation_lang` is a language-code string, such as `"ja"`, in both JSON and TSV. English-only exports omit translation fields.

Exports without `export_format_version` use the legacy, unversioned format. In those files, the two `context_before_*` fields were reversed, as were the two `translation_context_before_*` fields. The `translation_lang` field contained an object in JSON and a Ruby hash representation in TSV. When combining old and new exports, check the version and normalize these fields, or export the results again. The `context_after_*` and `translation_context_after_*` fields have not changed.

## Data fields

Each exported hit includes:

| Field | Description |
| :--- | :--- |
| talk_id | Talk ID number |
| talk_title | Title of the TED Talk |
| speaker | Speaker name |
| year | Year the talk was recorded, taken from its recording date. This is not the year the talk was published. |
| video_type | Talk type (e.g., "TED Stage Talk", "TEDx Talk", "TED-Ed Original") |
| talk_duration | Total talk duration in seconds |
| talk_url | URL to the talk on ted.com |
| segment_id | ID of the unit that matched. In Segment mode this is a segment ID; in Sentence mode it is a sentence ID, which comes from a different table. The field name is the same in both cases, and the metadata does not record which mode was used, so keep a note of the mode alongside the file. |
| match | Matched word/phrase (search query for regular search; actual surface form for advanced search) |
| segment_text | Full segment text containing the match |
| segment_position | Position in talk (e.g., "42/187") |
| start_time | Segment start time in seconds |
| duration | Segment duration in seconds |
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
| translation_lang | Translation language code as a string (e.g., `"ja"`) |
| translation_segment | Translated text of the matching segment |
| translation_context_before_1 | Translation of one segment before |
| translation_context_before_2 | Translation of two segments before |
| translation_context_after_1 | Translation of one segment after |
| translation_context_after_2 | Translation of two segments after |

## Pagination and export scope

Each export downloads the **currently visible page** of search results (up to 200 hits, matching the regular pagination size). This design has several benefits:

- **Reproducibility**: The same page always produces the same data (when randomize is off). You can share exact data with collaborators.
- **WYSIWYG**: You export exactly what you see on the screen.
- **Full corpus access**: To retrieve all hits for a query, navigate through pages (Prev/Next) and export each one. The `page` and `total_pages` fields in the metadata track your progress.

The metadata includes:

- `total_hits`: Total number of hits for the query
- `exported_count`: Hits in this page (≤ 200)
- `page`: Current page number
- `total_pages`: Total number of pages
- `randomized`: Whether results are in random order (true if the Randomize checkbox is on)
- `export_format_version`, `search_mode`, `license` and `exported_at`

### What the metadata does not record

An exported file does not carry everything needed to run the same search again. It does not record:

- the search unit (Segment or Sentence)
- the translation language, if one was selected
- which video types were included
- the random seed, when Randomize is on
- the application version and the date of the corpus snapshot

Two exports made from different settings can therefore look alike. When an export matters for a publication or for sharing, record these settings with the file, together with the date you ran the search. The version and corpus size are shown under [Current version](../index.md#current-version).

A short **5-second cooldown** applies between consecutive exports to prevent accidental double-clicks. The TSV/JSON buttons show a countdown tooltip on hover and automatically re-enable when the timer reaches zero.

## License

Exported data includes TED Talk transcripts used under the **Creative Commons BY-NC-ND 4.0** license. The metadata file includes a license notice. Exported data is intended for **research and educational purposes only**.

!!! tip "Tips"
    - To export all results, navigate through pages and export each one. Filenames include the page number (e.g., `tcse_export_20260411_p3.zip`).
    - The `segment_position` field helps analyze where in a talk a pattern tends to occur
    - Combine Advanced Search annotations (POS, lemma, dep) with context for detailed discourse analysis
    - For comprehensive corpus-level statistics, use the N-gram and Collocation tabs instead of exporting
