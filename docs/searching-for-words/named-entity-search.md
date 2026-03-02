# Named entity search

TCSE supports searching for named entities recognized by spaCy's NER (Named Entity Recognition) system. Use the `%ENTITY` notation in advanced search mode to find specific types of named entities in TED Talk transcripts.

## How to use

1. Enter a query using the `%ENTITY` notation (e.g., `%PERSON said`)
2. Check **Advanced Search**
3. Click **SEARCH**

![NER search input](images/11.png)

![NER search results](images/12.png)

## Entity types

TCSE recognizes 18 named entity types:

| Entity Type | Description | Count in Corpus |
| :--- | :--- | ---: |
| `%DATE` | Absolute or relative dates or periods | 167,347 |
| `%CARDINAL` | Numerals that do not fall under another type | 96,042 |
| `%PERSON` | People, including fictional | 87,068 |
| `%ORG` | Companies, agencies, institutions, etc. | 80,776 |
| `%GPE` | Countries, cities, states | 61,648 |
| `%NORP` | Nationalities or religious or political groups | 23,859 |
| `%TIME` | Times smaller than a day | 22,649 |
| `%ORDINAL` | "first", "second", etc. | 21,850 |
| `%LOC` | Non-GPE locations, mountain ranges, bodies of water | 21,747 |
| `%PERCENT` | Percentage, including "%" | 20,511 |
| `%QUANTITY` | Measurements, as of weight or distance | 19,442 |
| `%WORK_OF_ART` | Titles of books, songs, etc. | 16,235 |
| `%MONEY` | Monetary values, including unit | 15,118 |
| `%FAC` | Buildings, airports, highways, bridges, etc. | 6,719 |
| `%EVENT` | Named hurricanes, battles, wars, sports events, etc. | 5,928 |
| `%PRODUCT` | Objects, vehicles, foods, etc. (not services) | 4,286 |
| `%LAW` | Named documents made into laws | 2,304 |
| `%LANGUAGE` | Any named language | 1,560 |

## Examples

| Query | What it finds |
| :--- | :--- |
| `%PERSON` | All person names |
| `%PERSON said` | Person names followed by "said" |
| `in %GPE` | "in" followed by a country/city name |
| `%MONEY` | All monetary expressions |
| `%DATE` | All date expressions |
| `%ORG [be]` | Organization names followed by forms of "be" |
