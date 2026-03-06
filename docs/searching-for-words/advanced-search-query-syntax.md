# Advanced search query syntax

TCSE's advanced search mode supports a rich query syntax for linguistic analysis. All annotations are produced by [spaCy](https://spacy.io/) 3.8 (`en_core_web_lg`).

## Notation

| Purpose | Notation | Example |
| :--- | :--- | :--- |
| Lemma | `[LEMMA]` | `[be]`, `[help]` |
| Part-of-speech | `{POS}` | `{n}`, `{v}`, `{adj}` |
| Surface + POS | `SURFACE{POS}` (no space) | `help{v}`, `help{-v}` |
| Lemma + POS | `[LEMMA]{POS}` (no space) | `[help]{n}`, `[be]{v}` |
| Negative POS | `{-POS}` | `help{-v}` (help that is NOT a verb) |
| Dependency / Tag | `{@DEP}` | `{@nsubj}`, `{@auxpass}` |
| Morphological feature | `{#MORPH}` | `{#past}`, `{#mod}` |
| Named entity | `%ENTITY` | `%PERSON`, `%ORG`, `%GPE` |
| Logical OR | `A\|B` | `[news\|paper\|article]` |
| AND condition (negative) | `A&B` | `-word1&word2` |
| Segment onset | `^` | `^ having {v}` |
| Negative match | `-WORD` | `-rid` |
| Prefix match | `+PREFIX` | `+un {adj}` |
| Literal surface form | `['SURFACE']` | `['s]` |
| Noun chunk placeholder | `_` | `[give] _ _` |
| Wildcard (one word) | `-_` | `to -_ surprise` |
| Wildcard (multiple words) | `*` | `to * surprise` |

### Wildcards: `_` vs `-_` vs `*`

| Notation | Matches | Use case |
| :--- | :--- | :--- |
| `_` | Exactly one **noun chunk** (may span multiple words) | `[give] _ _` matches "give the students a chance" |
| `-_` | Exactly one **word** (any word) | `to -_ surprise` matches "to my surprise", "to our surprise" |
| `*` | Zero or more words (greedy) | `to * surprise` matches "to his great surprise" |

## POS Tags

Common POS tags used in queries (case-insensitive). For the complete list of all POS tags, fine-grained tags, dependency labels, and morphological features, see [Linguistic Reference](linguistic-reference.md).

| Tag | Meaning | Tag | Meaning |
| :--- | :--- | :--- | :--- |
| `{n}` | Noun | `{v}` | Verb |
| `{adj}` | Adjective | `{adv}` | Adverb |
| `{p}` | Adposition (preposition) | `{dt}` | Determiner |
| `{prp}` | Pronoun | `{conj}` | Conjunction |
| `{num}` | Numeral | `{part}` | Particle |
| `{intj}` | Interjection | `{aux}` | Auxiliary |

## Morphological Features

Use `{#feature}` to search by morphological properties (partial matching on the morph annotation):

| Feature | Matches |
| :--- | :--- |
| `{#past}` | Past tense forms (`Tense: Past`) |
| `{#mod}` | Modal verbs (`VerbType: Mod`) |
| `{#ger}` | Gerund forms (`VerbForm: Ger`) |
| `{#plur}` | Plural nouns/pronouns (`Number: Plur`) |

!!! note "Passive voice"
    spaCy's `en_core_web_lg` model does not annotate passive voice in the morphological features for English. Use dependency labels instead: `{@auxpass}` (passive auxiliary) or `{@nsubjpass}` (passive nominal subject).

## Named Entity Search

Use `%ENTITY` notation to search for named entities. See [Named Entity Search](named-entity-search.md) for the full list of 18 entity types.

| Example | Matches |
| :--- | :--- |
| `%PERSON said` | Named persons followed by "said" |
| `%ORG` | Organization names |
| `in %GPE` | "in" followed by a geo-political entity |
| `%DATE` | Date expressions |

## Contractions

TCSE's corpus is tokenized by spaCy, which splits contractions into separate tokens. For example, *I'm* is stored as two tokens: *I* + *'m*. In advanced search, contractions are **automatically split** to match spaCy's tokenization, so you can type them naturally.

| Input | Interpreted as | Matches |
| :--- | :--- | :--- |
| `I'm going` | `I 'm going` | *I'm going to ...* |
| `don't` | `do n't` | *don't, Don't* |
| `let's` | `let 's` | *let's, Let's* |
| `Tom's fine` | `Tom 's fine` | *Tom's fine* |
| `can't [be]` | `ca n't [be]` | *can't be, can't have been* |

To search for **all forms** of a verb including contractions, use lemma notation:

| Input | Matches |
| :--- | :--- |
| `I [be]` | *I am, I'm, I was, I were* |
| `[do] n't` | *don't, doesn't, didn't* |
| `I [have]` | *I have, I've, I had* |
| `I [will]` | *I will, I'll* |

To disambiguate *'s* (which can be *be*, *have*, or possessive), add a POS filter:

| Input | Matches |
| :--- | :--- |
| `it's` | all uses of *it's* |
| `it ['s]{aux}` | *it's* = *it is* (be) |
| `it ['s]{part}` | *its* possessive (*it's* rarely used this way) |
| `Tom [be]` | *Tom is, Tom's* (be), *Tom was* |

!!! note "Already-split input"
    If you already type the contraction with a space (e.g., `I 'm`), TCSE will not double-split it. Both `I'm` and `I 'm` produce the same results.

## Examples

| Example | Possible Matches |
| :--- | :--- |
| `[excite]` | *excite, excites, excited, exciting* |
| `{n}` | nouns of any kind (except for pronouns) |
| `{v}` | verbs of any kind |
| `to * surprise` | *to our surprise, to his surprise,* etc. |
| `[read] {dt} [news\|paper\|article]` | *they read these articles, reading the paper,* etc. |
| `^ having {v}` | *Having started the process, Having said that,* etc. |
| `[help]{n}` | an aunt offered financial *help*, we called people for *help*, etc. |
| `[help]{v} {p} {v}` | *helped us build*, *help you keep* away, etc. |
| `[get] -rid of` | *get outside of, get ahead of, got tired of,* etc. |
| `help{-v}` | *help* as a noun (not a verb) |
| `+un {adj}` | words starting with "un" followed by an adjective |
| `[give] _ _` | ditransitive "give" with two noun chunks |
| `['s]` | the literal surface form "'s" |
| `%PERSON said` | sentences where a named person said something |
| `{@auxpass}` | passive auxiliary verbs (*was* built, *been* given) |
| `{@nsubj} [be]` | nominal subjects followed by forms of "be" |
| `{#past} {#past}` | two consecutive past tense tokens |
