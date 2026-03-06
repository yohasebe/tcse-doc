# アドバンスト・サーチのクエリ構文

TCSEのアドバンスト・サーチでは、言語分析のための豊富なクエリ構文を使用できます。すべてのアノテーションは [spaCy](https://spacy.io/) 3.8（`en_core_web_lg`）によって生成されています。

## 記法

| 目的 | 記法 | 例 |
| :--- | :--- | :--- |
| レンマ（基本形） | `[LEMMA]` | `[be]`, `[help]` |
| 品詞 | `{POS}` | `{n}`, `{v}`, `{adj}` |
| 表層形 + 品詞 | `SURFACE{POS}`（スペースなし） | `help{v}`, `help{-v}` |
| レンマ + 品詞 | `[LEMMA]{POS}`（スペースなし） | `[help]{n}`, `[be]{v}` |
| 否定品詞 | `{-POS}` | `help{-v}`（動詞でない help） |
| 依存関係 / タグ | `{@DEP}` | `{@nsubj}`, `{@auxpass}` |
| 形態素情報 | `{#MORPH}` | `{#past}`, `{#mod}` |
| 固有表現 | `%ENTITY` | `%PERSON`, `%ORG`, `%GPE` |
| 論理和（OR） | `A\|B` | `[news\|paper\|article]` |
| AND条件（否定） | `A&B` | `-word1&word2` |
| セグメント先頭 | `^` | `^ having {v}` |
| 否定マッチ | `-WORD` | `-rid` |
| 前方一致 | `+PREFIX` | `+un {adj}` |
| リテラル表層形 | `['SURFACE']` | `['s]` |
| 名詞チャンク | `_` | `[give] _ _` |
| ワイルドカード（1語） | `-_` | `to -_ surprise` |
| ワイルドカード（複数語） | `*` | `to * surprise` |

### ワイルドカード: `_` vs `-_` vs `*`

| 記法 | マッチ対象 | 使用例 |
| :--- | :--- | :--- |
| `_` | 1つの**名詞チャンク**（複数語にまたがる場合あり） | `[give] _ _` は "give the students a chance" にマッチ |
| `-_` | 任意の**1語** | `to -_ surprise` は "to my surprise", "to our surprise" にマッチ |
| `*` | 0語以上の任意の語（貪欲マッチ） | `to * surprise` は "to his great surprise" にマッチ |

## 品詞タグ

クエリで使用される主な品詞タグ（大文字・小文字は区別しません）。すべての品詞タグ、Fine-Grainedタグ、依存関係ラベル、形態素性の完全なリストは[言語アノテーション リファレンス](linguistic-reference.md)を参照してください。

| タグ | 意味 | タグ | 意味 |
| :--- | :--- | :--- | :--- |
| `{n}` | 名詞 | `{v}` | 動詞 |
| `{adj}` | 形容詞 | `{adv}` | 副詞 |
| `{p}` | 前置詞 | `{dt}` | 限定詞 |
| `{prp}` | 代名詞 | `{conj}` | 接続詞 |
| `{num}` | 数詞 | `{part}` | 小辞 |
| `{intj}` | 間投詞 | `{aux}` | 助動詞 |

## 形態素情報

`{#feature}` を使って形態素的な特徴で検索できます（形態素アノテーションに対する部分一致検索）：

| 特徴 | マッチ対象 |
| :--- | :--- |
| `{#past}` | 過去時制の形式（`Tense: Past`） |
| `{#mod}` | 法助動詞（`VerbType: Mod`） |
| `{#ger}` | 動名詞形（`VerbForm: Ger`） |
| `{#plur}` | 複数形の名詞・代名詞（`Number: Plur`） |

!!! note "受動態について"
    spaCy の `en_core_web_lg` モデルは、英語の受動態を形態素情報としてアノテーションしません。受動態の検索には依存関係ラベルを使用してください：`{@auxpass}`（受動態助動詞）または `{@nsubjpass}`（受動態主語）。

## 固有表現検索

`%ENTITY` 記法で固有表現を検索できます。18種類のエンティティタイプの一覧は[固有表現検索](named-entity-search.md)を参照してください。

| 例 | マッチ対象 |
| :--- | :--- |
| `%PERSON said` | 人名の後に "said" が続くもの |
| `%ORG` | 組織名 |
| `in %GPE` | "in" の後に国名・都市名が続くもの |
| `%DATE` | 日付表現 |

## 縮約形の扱い

TCSEのコーパスはspaCyでトークン化されており、縮約形は別々のトークンに分割されます。例えば *I'm* は *I* + *'m* の2トークンとして格納されています。アドバンスト・サーチでは、入力された縮約形が**自動的に分割**されるため、自然な表記のまま検索できます。

| 入力 | 解釈 | マッチ対象 |
| :--- | :--- | :--- |
| `I'm going` | `I 'm going` | *I'm going to ...* |
| `don't` | `do n't` | *don't, Don't* |
| `let's` | `let 's` | *let's, Let's* |
| `Tom's fine` | `Tom 's fine` | *Tom's fine* |
| `can't [be]` | `ca n't [be]` | *can't be, can't have been* |

縮約形を含む動詞の**すべての活用形**を検索するには、レンマ記法を使用します：

| 入力 | マッチ対象 |
| :--- | :--- |
| `I [be]` | *I am, I'm, I was, I were* |
| `[do] n't` | *don't, doesn't, didn't* |
| `I [have]` | *I have, I've, I had* |
| `I [will]` | *I will, I'll* |

*'s* の曖昧性（*be*、*have*、所有格のいずれか）を解消するには、品詞フィルタを付加します：

| 入力 | マッチ対象 |
| :--- | :--- |
| `it's` | *it's* のすべての用法 |
| `it ['s]{aux}` | *it's* = *it is*（be動詞） |
| `it ['s]{part}` | *its* 所有格 |
| `Tom [be]` | *Tom is, Tom's*（be動詞）, *Tom was* |

!!! note "手動で分割済みの入力"
    すでにスペースで区切って入力した場合（例：`I 'm`）、二重に分割されることはありません。`I'm` と `I 'm` は同じ結果を返します。

## 使用例

| 例 | マッチする表現 |
| :--- | :--- |
| `[excite]` | *excite, excites, excited, exciting* |
| `{n}` | あらゆる名詞（代名詞を除く） |
| `{v}` | あらゆる動詞 |
| `to * surprise` | *to our surprise, to his surprise* 等 |
| `[read] {dt} [news\|paper\|article]` | *they read these articles, reading the paper* 等 |
| `^ having {v}` | *Having started the process, Having said that* 等 |
| `[help]{n}` | an aunt offered financial *help*, we called people for *help* 等 |
| `[help]{v} {p} {v}` | *helped us build*, *help you keep* away 等 |
| `[get] -rid of` | *get outside of, get ahead of, got tired of* 等 |
| `help{-v}` | 名詞としての *help*（動詞ではない） |
| `+un {adj}` | "un" で始まる語の後に形容詞が続くもの |
| `[give] _ _` | 二重目的語の "give"（名詞チャンク2つ） |
| `['s]` | リテラル表層形 "'s" |
| `%PERSON said` | 人名が何かを言った文 |
| `{@auxpass}` | 受動態助動詞（*was* built, *been* given） |
| `{@nsubj} [be]` | 主語名詞の後に "be" の活用形が続くもの |
| `{#past} {#past}` | 過去時制トークンが2つ連続するもの |
