# 言語アノテーション リファレンス

TCSEのすべてのトランスクリプトデータは、[spaCy](https://spacy.io/) 3.8（`en_core_web_lg`）を用いてアノテーションされています。このページでは、TCSEのアドバンスト・サーチで使用されるすべての言語アノテーションカテゴリの完全なリファレンスを提供します。

!!! tip "クイックリンク"
    - [Universal POS タグ](#universal-pos)
    - [Fine-Grained タグ（Penn Treebank）](#fine-grained-penn-treebank)
    - [依存関係ラベル](#dep-labels)
    - [形態素性](#morph-features)
    - [固有表現タイプ](#ner-types)
    - [検索構文サマリー](#search-syntax-summary)

---

## Universal POS タグ

[Universal Dependencies](https://universaldependencies.org/u/pos/) に基づく粗粒度の品詞カテゴリです。アドバンスト・サーチでは `{pos}` 記法で使用します（例：`help{verb}`、`[be]{aux}`）。

よく使うタグには**略称エイリアス**が用意されています。たとえば `{verb}` の代わりに `{v}` が使えます。

| タグ | 品詞 | 検索記法 | エイリアス | 種別 | 例 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `ADJ` | 形容詞 | `{adj}` | `{a}`, `{j}`, `{jj}` | 開放類 | *big, old, green, first* |
| `ADV` | 副詞 | `{adv}` | `{r}`, `{rb}` | 開放類 | *very, well, exactly, tomorrow* |
| `INTJ` | 間投詞 | `{intj}` | | 開放類 | *hello, ouch, bravo* |
| `NOUN` | 名詞 | `{noun}` | `{n}`, `{nn}` | 開放類 | *people, time, world, way* |
| `PROPN` | 固有名詞 | `{propn}` | | 開放類 | *Mary, John, London, NATO* |
| `VERB` | 動詞 | `{verb}` | `{v}`, `{vb}` | 開放類 | *run, eat, go, think, help* |
| `ADP` | 前置詞 | `{adp}` | `{p}` | 閉鎖類 | *in, to, during, of, with* |
| `AUX` | 助動詞 | `{aux}` | | 閉鎖類 | *has, is, will, should, must* |
| `CCONJ` | 等位接続詞 | `{cconj}` | `{c}` | 閉鎖類 | *and, or, but* |
| `DET` | 限定詞 | `{det}` | `{dt}` | 閉鎖類 | *the, a, this, which, all* |
| `NUM` | 数詞 | `{num}` | | 閉鎖類 | *one, two, three* |
| `PART` | 小辞 | `{part}` | | 閉鎖類 | *'s, not, to* |
| `PRON` | 代名詞 | `{pron}` | `{pr}` | 閉鎖類 | *I, it, you, we, they* |
| `SCONJ` | 従位接続詞 | `{sconj}` | | 閉鎖類 | *that, if, while, because* |
| `PUNCT` | 句読点 | `{punct}` | | その他 | *. , ; : ! ?* |
| `SYM` | 記号 | `{sym}` | | その他 | *$, %, &sect;* |
| `X` | その他 | `{x}` | | その他 | *外来語、タイプミス* |
| `SPACE` | 空白 | `{space}` | | その他 | *空白トークン* |

---

## Fine-Grained タグ（Penn Treebank）

[Penn Treebank タグセット](https://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html)に準拠した詳細品詞タグです。`{@tag}` 記法で検索できます（例：`{@VBG}` で動名詞・現在分詞）。

### 名詞

| タグ | 説明 | 例 |
| :--- | :--- | :--- |
| `NN` | 名詞、単数または不可算 | *dog, music, education* |
| `NNS` | 名詞、複数 | *dogs, children, ideas* |
| `NNP` | 固有名詞、単数 | *London, Obama, Google* |
| `NNPS` | 固有名詞、複数 | *Americans, Alps* |

### 動詞

| タグ | 説明 | 例 |
| :--- | :--- | :--- |
| `VB` | 動詞、原形 | *go, eat, run* |
| `VBD` | 動詞、過去形 | *went, ate, ran* |
| `VBG` | 動詞、動名詞・現在分詞 | *going, eating, running* |
| `VBN` | 動詞、過去分詞 | *gone, eaten, taken* |
| `VBP` | 動詞、三人称単数以外の現在形 | *go, eat, run* |
| `VBZ` | 動詞、三人称単数現在形 | *goes, eats, runs* |
| `MD` | 法助動詞 | *can, could, may, might, will, would, shall, should, must* |

### 形容詞

| タグ | 説明 | 例 |
| :--- | :--- | :--- |
| `JJ` | 形容詞 | *big, green, incomprehensible* |
| `JJR` | 形容詞、比較級 | *bigger, better, faster* |
| `JJS` | 形容詞、最上級 | *biggest, best, fastest* |
| `AFX` | 接辞（ハイフン付き形容詞の一部） | *例："anti-war" の "anti"* |

### 副詞

| タグ | 説明 | 例 |
| :--- | :--- | :--- |
| `RB` | 副詞 | *very, well, quickly, never* |
| `RBR` | 副詞、比較級 | *faster, better, more* |
| `RBS` | 副詞、最上級 | *fastest, best, most* |
| `WRB` | Wh副詞 | *where, when, why, how* |

### 代名詞・限定詞

| タグ | 説明 | 例 |
| :--- | :--- | :--- |
| `PRP` | 人称代名詞 | *I, you, he, she, it, we, they* |
| `PRP$` | 所有代名詞 | *my, your, his, her, its, our, their* |
| `WP` | Wh代名詞 | *who, what, whom* |
| `WP$` | 所有Wh代名詞 | *whose* |
| `WDT` | Wh限定詞 | *which, that, what* |
| `DT` | 限定詞 | *the, a, an, this, that, these* |
| `PDT` | 前限定詞 | *all, both, half* |
| `EX` | 存在の *there* | *there (is/are)* |

### その他

| タグ | 説明 | 例 |
| :--- | :--- | :--- |
| `IN` | 前置詞または従位接続詞 | *in, of, by, that, if, because* |
| `CC` | 等位接続詞 | *and, or, but, nor, yet* |
| `CD` | 基数 | *one, 2, 1,000* |
| `TO` | to | *to (go), to (the store)* |
| `POS` | 所有格語尾 | *'s, '* |
| `RP` | 小辞 | *up, off, out, in（句動詞）* |
| `UH` | 間投詞 | *oh, well, um, uh* |
| `FW` | 外来語 | *de, la, von* |
| `LS` | リスト項目マーカー | *1., 2., a., b.* |
| `SYM` | 記号 | *$, %, +, =* |
| `HYPH` | ハイフン | *-* |
| `NFP` | 余分な句読点 | *..., --* |
| `XX` | 不明 | *分析不能なトークン* |
| `ADD` | メールアドレスまたはURL | *user@example.com* |
| `_SP` | 空白 | *空白文字* |

---

## 依存関係ラベル { #dep-labels }

文中の語と語の統語的な依存関係を示すラベルです。`{@label}` 記法で検索できます（例：`{@nsubj}` で主語を検索）。

!!! note
    `{@...}` 記法は、Fine-Grainedタグと依存関係ラベルの両方を同時に検索します。たとえば `{@VBG}` は動名詞（タグ）に、`{@nsubj}` は主語（依存関係）にマッチします。

### 中核項

| ラベル | 説明 | 例 |
| :--- | :--- | :--- |
| `nsubj` | 主語（名詞） | ***She** runs.* |
| `nsubjpass` | 主語（受動態） | ***It** was built.* |
| `dobj` | 直接目的語 | *I see **you**.* |
| `dative` | 与格（間接目的語） | *Give **me** a book.* |
| `attr` | 属性 | *She is **a teacher**.* |
| `agent` | 動作主（受動態のby句） | *Built **by engineers**.* |
| `expl` | 虚辞 | ***There** is a problem.* |

### 節項

| ラベル | 説明 | 例 |
| :--- | :--- | :--- |
| `csubj` | 節主語 | ***What she said** is true.* |
| `csubjpass` | 節主語（受動態） | ***That he came** was unexpected.* |
| `ccomp` | 節補語 | *I think **he left**.* |
| `xcomp` | 開放節補語 | *I want **to go**.* |
| `acomp` | 形容詞補語 | *She looks **happy**.* |
| `oprd` | 目的語述語 | *I consider him **smart**.* |

### 修飾語

| ラベル | 説明 | 例 |
| :--- | :--- | :--- |
| `amod` | 形容詞修飾語 | *a **big** house* |
| `advmod` | 副詞修飾語 | *run **quickly*** |
| `nummod` | 数量修飾語 | ***three** cats* |
| `nmod` | 名詞修飾語 | *a cup of **coffee*** |
| `npadvmod` | 名詞句による副詞的修飾語 | ***yesterday**, **this way*** |
| `quantmod` | 量化修飾語 | *about **200*** |
| `appos` | 同格 | *Sam, **my brother*** |
| `acl` | 形容詞節・関係節 | *the man **who came*** |
| `relcl` | 関係節修飾語 | *the book **I read*** |
| `advcl` | 副詞節修飾語 | ***If it rains**, I stay.* |
| `neg` | 否定修飾語 | *I do **not** agree.* |
| `det` | 限定詞 | ***the** book* |
| `predet` | 前限定詞 | ***all** the people* |
| `poss` | 所有修飾語 | ***my** book* |

### 前置詞・格

| ラベル | 説明 | 例 |
| :--- | :--- | :--- |
| `prep` | 前置詞修飾語 | *go **to** school* |
| `pobj` | 前置詞の目的語 | *in the **house*** |
| `pcomp` | 前置詞の補語 | *instead of **going*** |
| `case` | 格標示 | *John **'s** book* |

### 等位接続・接続

| ラベル | 説明 | 例 |
| :--- | :--- | :--- |
| `conj` | 等位要素 | *cats and **dogs*** |
| `cc` | 等位接続詞 | *cats **and** dogs* |
| `preconj` | 前相関接続詞 | ***either** A or B* |
| `mark` | 標識（従位接続詞） | ***because** it rained* |

### 動詞関連

| ラベル | 説明 | 例 |
| :--- | :--- | :--- |
| `aux` | 助動詞 | *I **have** eaten.* |
| `auxpass` | 受動態助動詞 | *It **was** built.* |
| `compound` | 複合語 | ***New** York, **ice** cream* |
| `prt` | 小辞（句動詞） | *give **up**, turn **off*** |

### その他

| ラベル | 説明 | 例 |
| :--- | :--- | :--- |
| `ROOT` | 文の根 | *She **runs** fast.* |
| `punct` | 句読点 | *Hello**,** world**.*** |
| `parataxis` | 並列構造（ゆるい節接続） | *He said — **I agree**.* |
| `intj` | 間投詞 | ***Well**, I think...* |
| `dep` | 未分類の依存要素 | *（包括的カテゴリ）* |
| `meta` | メタ修飾語 | *構造的マークアップ* |

---

## 形態素性 { #morph-features }

個々のトークンの文法的特性です。`{#feature}` 記法で部分一致検索ができます（例：`{#past}` は形態素アノテーションに "Past" を含むすべてのトークンにマッチ）。

| 素性 | 値 | 検索例 | 説明 |
| :--- | :--- | :--- | :--- |
| `VerbForm` | Fin, Ger, Inf, Part | `{#ger}`, `{#inf}` | 定形、動名詞、不定詞、分詞 |
| `Tense` | Past, Pres | `{#past}`, `{#pres}` | 過去時制、現在時制 |
| `Aspect` | Perf, Prog | `{#perf}`, `{#prog}` | 完了相、進行相 |
| `Mood` | Ind | `{#ind}` | 直説法 |
| `VerbType` | Mod | `{#mod}` | 法助動詞 |
| `Number` | Sing, Plur | `{#sing}`, `{#plur}` | 単数、複数 |
| `Person` | 1, 2, 3 | `{#person: 3}` | 一人称、二人称、三人称 |
| `Case` | Acc, Nom | `{#nom}`, `{#acc}` | 主格、対格 |
| `Gender` | Fem, Masc, Neut | `{#fem}`, `{#masc}` | 文法的性（代名詞） |
| `Degree` | Pos, Cmp, Sup | `{#cmp}`, `{#sup}` | 原級、比較級、最上級 |
| `Definite` | Def, Ind | `{#def}`, `{#ind}` | 定・不定冠詞 |
| `PronType` | Art, Dem, Ind, Prs, Rel | `{#dem}`, `{#rel}` | 冠詞、指示、不定、人称、関係 |
| `Poss` | Yes | `{#poss}` | 所有 |
| `Reflex` | Yes | `{#reflex}` | 再帰代名詞 |
| `Polarity` | Neg | `{#neg}` | 否定極性（*not*） |
| `NumType` | Card, Mult, Ord | `{#ord}` | 基数、倍数、序数 |
| `Foreign` | Yes | `{#foreign}` | 外来語 |
| `ConjType` | Cmp | `{#conjtype}` | 比較接続詞（*than*） |

!!! note "受動態について"
    spaCyの `en_core_web_lg` モデルは、英語の形態素性として受動態をアノテーションしません。受動態を検索するには、依存関係ラベルの `{@auxpass}`（受動態助動詞）や `{@nsubjpass}`（受動態の主語）を使用してください。

---

## 固有表現タイプ { #ner-types }

spaCyのNERモデルが認識する固有表現です。`%TYPE` 記法で検索できます（例：`%PERSON`、`say %ORG`）。詳しくは[固有表現検索](named-entity-search.md)も参照してください。

| タイプ | 説明 | 例 |
| :--- | :--- | :--- |
| `PERSON` | 人物（架空含む） | *Obama, Einstein, Hamlet* |
| `ORG` | 組織、企業、機関 | *Google, the UN, NASA* |
| `GPE` | 国、都市、州 | *France, New York, California* |
| `LOC` | GPE以外の場所：山、水域 | *the Alps, the Pacific, Antarctica* |
| `FAC` | 施設：建物、空港、高速道路 | *the Eiffel Tower, JFK Airport* |
| `NORP` | 国籍、宗教・政治グループ | *American, Buddhist, Republican* |
| `DATE` | 絶対・相対的な日付や期間 | *tomorrow, last year, 2024* |
| `TIME` | 1日より短い時間 | *3 o'clock, this morning* |
| `MONEY` | 金額 | *$5, 2 million euros* |
| `PERCENT` | パーセンテージ | *fifty percent, 10%* |
| `QUANTITY` | 測定値：重量、距離など | *5 kg, 2 miles, 100 degrees* |
| `CARDINAL` | 他のタイプに該当しない数詞 | *five, hundred, 42* |
| `ORDINAL` | 序数 | *first, 42nd, third* |
| `EVENT` | イベント名 | *World War II, the Olympics* |
| `WORK_OF_ART` | 作品名 | *Hamlet, Mona Lisa* |
| `PRODUCT` | 製品、車両、食品 | *iPhone, Boeing 747* |
| `LAW` | 法律名 | *the Magna Carta, GDPR* |
| `LANGUAGE` | 言語名 | *English, Mandarin, Arabic* |

---

## 検索構文サマリー { #search-syntax-summary }

アドバンスト・サーチで使用可能なすべての検索記法のクイックリファレンスです。詳しい使い方と例については[検索クエリ構文](advanced-search-query-syntax.md)を参照してください。

| 構文 | 説明 | 例 |
| :--- | :--- | :--- |
| `word` | 表層形検索 | `help` |
| `[lemma]` | レンマ（基本形）検索 | `[be]` → am, is, are, was, were, been, being |
| `['s]` | リテラル表層形一致 | `['s]` → 's（所有格・短縮形） |
| `word{pos}` | 表層形＋品詞フィルタ | `help{verb}`, `help{noun}` |
| `[lemma]{pos}` | レンマ＋品詞フィルタ | `[help]{noun}` |
| `{pos}` | 品詞のみ検索 | `{propn}`（任意の固有名詞） |
| `{@tag_or_dep}` | Fine-Grainedタグまたは依存関係 | `{@VBG}`（動名詞）, `{@nsubj}`（主語） |
| `{#morph}` | 形態素性 | `{#past}`（過去形）, `{#plur}`（複数形） |
| `{-pos}` | 否定品詞フィルタ | `{-verb}`（動詞でない） |
| `-word` | 否定語一致 | `-the` |
| `a\|b` | OR（選択肢） | `help\|assist` |
| `+prefix` | 前方一致 | `+un` → un..., under..., until... |
| `{}` or `*` | ワイルドカード（1語以上） | `[make] {} {noun}` |
| `-_` | ワイルドカード（1語のみ） | `to -_ surprise` |
| `_` | 名詞チャンクプレースホルダー | `[give] _ _` |
| `^` | セグメント先頭 | `^ however` |
| `%TYPE` | 固有表現検索 | `%PERSON`, `say %ORG` |
