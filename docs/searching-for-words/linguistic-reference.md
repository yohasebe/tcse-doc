# Linguistic Reference

All transcript data in TCSE is annotated using [spaCy](https://spacy.io/) 3.8 (`en_core_web_lg`). This page provides a comprehensive reference for all linguistic annotation categories used in TCSE's Advanced Search.

!!! tip "Quick links"
    - [Universal POS Tags](#universal-pos-tags)
    - [Fine-Grained Tags (Penn Treebank)](#fine-grained-tags-penn-treebank)
    - [Dependency Labels](#dependency-labels)
    - [Morphological Features](#morphological-features)
    - [Named Entity Types](#named-entity-types)
    - [Advanced Search Syntax Summary](#advanced-search-syntax-summary)

---

## Universal POS Tags

Coarse-grained part-of-speech categories based on [Universal Dependencies](https://universaldependencies.org/u/pos/). Used in Advanced Search with `{pos}` notation (e.g., `help{verb}`, `[be]{aux}`).

**Shorthand aliases** are available for frequently used tags — for example, `{v}` can be used instead of `{verb}`.

| Tag | Part of Speech | Search | Aliases | Type | Examples |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `ADJ` | Adjective | `{adj}` | `{a}`, `{j}`, `{jj}` | Open | *big, old, green, first* |
| `ADV` | Adverb | `{adv}` | `{r}`, `{rb}` | Open | *very, well, exactly, tomorrow* |
| `INTJ` | Interjection | `{intj}` | | Open | *hello, ouch, bravo* |
| `NOUN` | Noun | `{noun}` | `{n}`, `{nn}` | Open | *people, time, world, way* |
| `PROPN` | Proper noun | `{propn}` | | Open | *Mary, John, London, NATO* |
| `VERB` | Verb | `{verb}` | `{v}`, `{vb}` | Open | *run, eat, go, think, help* |
| `ADP` | Adposition | `{adp}` | `{p}` | Closed | *in, to, during, of, with* |
| `AUX` | Auxiliary | `{aux}` | | Closed | *has, is, will, should, must* |
| `CCONJ` | Coordinating conjunction | `{cconj}` | `{c}` | Closed | *and, or, but* |
| `DET` | Determiner | `{det}` | `{dt}` | Closed | *the, a, this, which, all* |
| `NUM` | Numeral | `{num}` | | Closed | *one, two, three* |
| `PART` | Particle | `{part}` | | Closed | *'s, not, to* |
| `PRON` | Pronoun | `{pron}` | `{pr}` | Closed | *I, it, you, we, they* |
| `SCONJ` | Subordinating conjunction | `{sconj}` | | Closed | *that, if, while, because* |
| `PUNCT` | Punctuation | `{punct}` | | Other | *. , ; : ! ?* |
| `SYM` | Symbol | `{sym}` | | Other | *$, %, &sect;* |
| `X` | Other | `{x}` | | Other | *foreign words, typos* |
| `SPACE` | Space | `{space}` | | Other | *whitespace tokens* |

---

## Fine-Grained Tags (Penn Treebank)

Detailed POS tags following the [Penn Treebank tagset](https://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html). Searchable with `{@tag}` notation (e.g., `{@VBG}` for gerunds/present participles).

### Nouns

| Tag | Description | Examples |
| :--- | :--- | :--- |
| `NN` | Noun, singular or mass | *dog, music, education* |
| `NNS` | Noun, plural | *dogs, children, ideas* |
| `NNP` | Proper noun, singular | *London, Obama, Google* |
| `NNPS` | Proper noun, plural | *Americans, Alps* |

### Verbs

| Tag | Description | Examples |
| :--- | :--- | :--- |
| `VB` | Verb, base form | *go, eat, run* |
| `VBD` | Verb, past tense | *went, ate, ran* |
| `VBG` | Verb, gerund / present participle | *going, eating, running* |
| `VBN` | Verb, past participle | *gone, eaten, taken* |
| `VBP` | Verb, non-3rd person singular present | *go, eat, run* |
| `VBZ` | Verb, 3rd person singular present | *goes, eats, runs* |
| `MD` | Modal | *can, could, may, might, will, would, shall, should, must* |

### Adjectives

| Tag | Description | Examples |
| :--- | :--- | :--- |
| `JJ` | Adjective | *big, green, incomprehensible* |
| `JJR` | Adjective, comparative | *bigger, better, faster* |
| `JJS` | Adjective, superlative | *biggest, best, fastest* |
| `AFX` | Affix (hyphenated adjective part) | *e.g., "anti" in "anti-war"* |

### Adverbs

| Tag | Description | Examples |
| :--- | :--- | :--- |
| `RB` | Adverb | *very, well, quickly, never* |
| `RBR` | Adverb, comparative | *faster, better, more* |
| `RBS` | Adverb, superlative | *fastest, best, most* |
| `WRB` | Wh-adverb | *where, when, why, how* |

### Pronouns & Determiners

| Tag | Description | Examples |
| :--- | :--- | :--- |
| `PRP` | Personal pronoun | *I, you, he, she, it, we, they* |
| `PRP$` | Possessive pronoun | *my, your, his, her, its, our, their* |
| `WP` | Wh-pronoun | *who, what, whom* |
| `WP$` | Possessive wh-pronoun | *whose* |
| `WDT` | Wh-determiner | *which, that, what* |
| `DT` | Determiner | *the, a, an, this, that, these* |
| `PDT` | Predeterminer | *all, both, half* |
| `EX` | Existential *there* | *there (is/are)* |

### Other

| Tag | Description | Examples |
| :--- | :--- | :--- |
| `IN` | Preposition or subordinating conjunction | *in, of, by, that, if, because* |
| `CC` | Coordinating conjunction | *and, or, but, nor, yet* |
| `CD` | Cardinal number | *one, 2, 1,000* |
| `TO` | to | *to (go), to (the store)* |
| `POS` | Possessive ending | *'s, '* |
| `RP` | Particle | *up, off, out, in (phrasal verbs)* |
| `UH` | Interjection | *oh, well, um, uh* |
| `FW` | Foreign word | *de, la, von* |
| `LS` | List item marker | *1., 2., a., b.* |
| `SYM` | Symbol | *$, %, +, =* |
| `HYPH` | Hyphen | *-* |
| `NFP` | Superfluous punctuation | *..., --* |
| `XX` | Unknown | *unanalyzable tokens* |
| `ADD` | Email or URL | *user@example.com* |
| `_SP` | Space | *whitespace* |

---

## Dependency Labels

Syntactic dependency relations showing how words relate to each other in a sentence. Searchable with `{@label}` notation (e.g., `{@nsubj}` for nominal subjects).

!!! note
    The `{@...}` notation searches both fine-grained tags and dependency labels simultaneously. For example, `{@VBG}` matches gerunds (tag) while `{@nsubj}` matches nominal subjects (dependency).

### Core Arguments

| Label | Description | Example |
| :--- | :--- | :--- |
| `nsubj` | Nominal subject | ***She** runs.* |
| `nsubjpass` | Nominal subject (passive) | ***It** was built.* |
| `dobj` | Direct object | *I see **you**.* |
| `dative` | Dative (indirect object) | *Give **me** a book.* |
| `attr` | Attribute | *She is **a teacher**.* |
| `agent` | Agent (passive by-phrase) | *Built **by engineers**.* |
| `expl` | Expletive | ***There** is a problem.* |

### Clausal Arguments

| Label | Description | Example |
| :--- | :--- | :--- |
| `csubj` | Clausal subject | ***What she said** is true.* |
| `csubjpass` | Clausal subject (passive) | ***That he came** was unexpected.* |
| `ccomp` | Clausal complement | *I think **he left**.* |
| `xcomp` | Open clausal complement | *I want **to go**.* |
| `acomp` | Adjectival complement | *She looks **happy**.* |
| `oprd` | Object predicate | *I consider him **smart**.* |

### Modifiers

| Label | Description | Example |
| :--- | :--- | :--- |
| `amod` | Adjectival modifier | *a **big** house* |
| `advmod` | Adverbial modifier | *run **quickly*** |
| `nummod` | Numeric modifier | ***three** cats* |
| `nmod` | Nominal modifier | *a cup of **coffee*** |
| `npadvmod` | Noun phrase as adverbial modifier | ***yesterday**, **this way*** |
| `quantmod` | Quantifier modifier | *about **200*** |
| `appos` | Appositional modifier | *Sam, **my brother*** |
| `acl` | Adjectival/relative clause | *the man **who came*** |
| `relcl` | Relative clause modifier | *the book **I read*** |
| `advcl` | Adverbial clause modifier | ***If it rains**, I stay.* |
| `neg` | Negation modifier | *I do **not** agree.* |
| `det` | Determiner | ***the** book* |
| `predet` | Predeterminer | ***all** the people* |
| `poss` | Possession modifier | ***my** book* |

### Prepositional & Case

| Label | Description | Example |
| :--- | :--- | :--- |
| `prep` | Prepositional modifier | *go **to** school* |
| `pobj` | Object of preposition | *in the **house*** |
| `pcomp` | Complement of preposition | *instead of **going*** |
| `case` | Case marking | *John **'s** book* |

### Coordination & Connectors

| Label | Description | Example |
| :--- | :--- | :--- |
| `conj` | Conjunct | *cats and **dogs*** |
| `cc` | Coordinating conjunction | *cats **and** dogs* |
| `preconj` | Pre-correlative conjunction | ***either** A or B* |
| `mark` | Marker (subordinating conjunction) | ***because** it rained* |

### Verbal

| Label | Description | Example |
| :--- | :--- | :--- |
| `aux` | Auxiliary | *I **have** eaten.* |
| `auxpass` | Passive auxiliary | *It **was** built.* |
| `compound` | Compound | ***New** York, **ice** cream* |
| `prt` | Particle (phrasal verb) | *give **up**, turn **off*** |

### Other

| Label | Description | Example |
| :--- | :--- | :--- |
| `ROOT` | Root of the sentence | *She **runs** fast.* |
| `punct` | Punctuation | *Hello**,** world**.*** |
| `parataxis` | Parataxis (loosely joined clause) | *He said — **I agree**.* |
| `intj` | Interjection | ***Well**, I think...* |
| `dep` | Unclassified dependent | *(catch-all)* |
| `meta` | Meta modifier | *structural markup* |

---

## Morphological Features

Grammatical properties of individual tokens. Searchable with `{#feature}` notation using partial matching (e.g., `{#past}` matches any token containing "Past" in its morphological annotation).

| Feature | Values | Search example | Description |
| :--- | :--- | :--- | :--- |
| `VerbForm` | Fin, Ger, Inf, Part | `{#ger}`, `{#inf}` | Finite, gerund, infinitive, participle |
| `Tense` | Past, Pres | `{#past}`, `{#pres}` | Past or present tense |
| `Aspect` | Perf, Prog | `{#perf}`, `{#prog}` | Perfect or progressive aspect |
| `Mood` | Ind | `{#ind}` | Indicative mood |
| `VerbType` | Mod | `{#mod}` | Modal verb |
| `Number` | Sing, Plur | `{#sing}`, `{#plur}` | Singular or plural |
| `Person` | 1, 2, 3 | `{#person: 3}` | 1st, 2nd, or 3rd person |
| `Case` | Acc, Nom | `{#nom}`, `{#acc}` | Nominative or accusative case |
| `Gender` | Fem, Masc, Neut | `{#fem}`, `{#masc}` | Grammatical gender (pronouns) |
| `Degree` | Pos, Cmp, Sup | `{#cmp}`, `{#sup}` | Positive, comparative, superlative |
| `Definite` | Def, Ind | `{#def}`, `{#ind}` | Definite or indefinite article |
| `PronType` | Art, Dem, Ind, Prs, Rel | `{#dem}`, `{#rel}` | Article, demonstrative, indefinite, personal, relative |
| `Poss` | Yes | `{#poss}` | Possessive |
| `Reflex` | Yes | `{#reflex}` | Reflexive pronoun |
| `Polarity` | Neg | `{#neg}` | Negative polarity (*not*) |
| `NumType` | Card, Mult, Ord | `{#ord}` | Cardinal, multiplicative, ordinal |
| `Foreign` | Yes | `{#foreign}` | Foreign word |
| `ConjType` | Cmp | `{#conjtype}` | Comparative conjunction (*than*) |

!!! note "Passive voice"
    spaCy's `en_core_web_lg` model does not annotate passive voice in the morphological features for English. Use dependency labels instead: `{@auxpass}` (passive auxiliary) or `{@nsubjpass}` (passive nominal subject).

---

## Named Entity Types

Named entities recognized by spaCy's NER model. Searchable with `%TYPE` notation (e.g., `%PERSON`, `say %ORG`). See also [Named Entity Search](named-entity-search.md).

| Type | Description | Examples |
| :--- | :--- | :--- |
| `PERSON` | People, including fictional | *Obama, Einstein, Hamlet* |
| `ORG` | Organizations, companies, agencies | *Google, the UN, NASA* |
| `GPE` | Countries, cities, states | *France, New York, California* |
| `LOC` | Non-GPE locations: mountains, bodies of water | *the Alps, the Pacific, Antarctica* |
| `FAC` | Facilities: buildings, airports, highways | *the Eiffel Tower, JFK Airport* |
| `NORP` | Nationalities, religious/political groups | *American, Buddhist, Republican* |
| `DATE` | Absolute or relative dates/periods | *tomorrow, last year, 2024* |
| `TIME` | Times shorter than a day | *3 o'clock, this morning* |
| `MONEY` | Monetary values | *$5, 2 million euros* |
| `PERCENT` | Percentages | *fifty percent, 10%* |
| `QUANTITY` | Measurements: weight, distance, etc. | *5 kg, 2 miles, 100 degrees* |
| `CARDINAL` | Numerals not covered by other types | *five, hundred, 42* |
| `ORDINAL` | Ordinal numbers | *first, 42nd, third* |
| `EVENT` | Named events | *World War II, the Olympics* |
| `WORK_OF_ART` | Titles of works | *Hamlet, Mona Lisa* |
| `PRODUCT` | Products, vehicles, foods | *iPhone, Boeing 747* |
| `LAW` | Named documents of law | *the Magna Carta, GDPR* |
| `LANGUAGE` | Named languages | *English, Mandarin, Arabic* |

---

## Advanced Search Syntax Summary

Quick reference for all search notation available in Advanced Search mode. For detailed usage and examples, see [Advanced Search Query Syntax](advanced-search-query-syntax.md).

| Syntax | Description | Example |
| :--- | :--- | :--- |
| `word` | Surface form search | `help` |
| `[lemma]` | Lemma (base form) search | `[be]` → am, is, are, was, were, been, being |
| `['s]` | Literal surface match | `['s]` → 's (possessive/contraction) |
| `word{pos}` | Surface + POS filter | `help{verb}`, `help{noun}` |
| `[lemma]{pos}` | Lemma + POS filter | `[help]{noun}` |
| `{pos}` | POS-only search | `{propn}` (any proper noun) |
| `{@tag_or_dep}` | Fine-grained tag or dependency | `{@VBG}` (gerund), `{@nsubj}` (subject) |
| `{#morph}` | Morphological feature | `{#past}` (past tense), `{#plur}` (plural) |
| `{-pos}` | Negative POS filter | `{-verb}` (not a verb) |
| `-word` | Negative word match | `-the` |
| `a\|b` | OR alternatives | `help\|assist` |
| `+prefix` | Prefix match | `+un` → un..., under..., until... |
| `{}` or `*` | Wildcard (one or more words) | `[make] {} {noun}` |
| `-_` | Wildcard (exactly one word) | `to -_ surprise` |
| `_` | Noun chunk placeholder | `[give] _ _` |
| `^` | Start of segment | `^ however` |
| `%TYPE` | Named entity search | `%PERSON`, `say %ORG` |
