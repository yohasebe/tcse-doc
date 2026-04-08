# Named entity search

TCSE supports searching for named entities recognized by spaCy's NER (Named Entity Recognition) system. Use the `%ENTITY` notation in advanced search mode to find specific types of named entities in TED Talk transcripts. Multi-token entities (e.g. "New York", "United Nations") are matched as a single unit.

## How to use

1. Enter a query using the `%ENTITY` notation (e.g., `%PERSON said`)
2. Check **Advanced Search**
3. Click **SEARCH**

![NER search input](images/11.png)

![NER search results](images/12.png)

## NER patterns in Collocation mode

You can also search for NER patterns in the **Collocation** mode. For example, searching `%PERSON` in 1-gram mode shows the total frequency of person entities across the corpus. Searching in 2-gram or higher modes reveals common patterns involving named entities (e.g., `%PERSON said`, `in %GPE`). Clicking on an n-gram result will automatically open the corresponding advanced search.

## Entity types

TCSE recognizes 18 named entity types:

| Entity Type | Description |
| :--- | :--- |
| `%CARDINAL` | Numerals that do not fall under another type |
| `%DATE` | Absolute or relative dates or periods |
| `%PERSON` | People, including fictional |
| `%GPE` | Countries, cities, states |
| `%ORG` | Companies, agencies, institutions, etc. |
| `%ORDINAL` | "first", "second", etc. |
| `%NORP` | Nationalities or religious or political groups |
| `%LOC` | Non-GPE locations, mountain ranges, bodies of water |
| `%TIME` | Times smaller than a day |
| `%PERCENT` | Percentage, including "%" |
| `%QUANTITY` | Measurements, as of weight or distance |
| `%WORK_OF_ART` | Titles of books, songs, etc. |
| `%MONEY` | Monetary values, including unit |
| `%PRODUCT` | Objects, vehicles, foods, etc. (not services) |
| `%FAC` | Buildings, airports, highways, bridges, etc. |
| `%EVENT` | Named hurricanes, battles, wars, sports events, etc. |
| `%LANGUAGE` | Any named language |
| `%LAW` | Named documents made into laws |

## Examples

| Query | What it finds |
| :--- | :--- |
| `%PERSON` | All person names |
| `%PERSON said` | Person names followed by "said" |
| `in %GPE` | "in" followed by a country/city name |
| `%MONEY` | All monetary expressions |
| `%DATE` | All date expressions |
| `%ORG [be]` | Organization names followed by forms of "be" |
