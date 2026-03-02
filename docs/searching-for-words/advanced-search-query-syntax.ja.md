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
| 依存関係 / タグ | `{@DEP}` | `{@nsubj}`, `{@passive}` |
| 形態素情報 | `{@MORPH}` | `{@past}`, `{@modal}` |
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

クエリで使用される主な品詞タグ（大文字・小文字は区別しません）：

| タグ | 意味 | タグ | 意味 |
| :--- | :--- | :--- | :--- |
| `{n}` | 名詞 | `{v}` | 動詞 |
| `{adj}` | 形容詞 | `{adv}` | 副詞 |
| `{p}` | 前置詞 | `{dt}` | 限定詞 |
| `{prp}` | 代名詞 | `{conj}` | 接続詞 |
| `{num}` | 数詞 | `{part}` | 小辞 |
| `{intj}` | 間投詞 | `{aux}` | 助動詞 |

## 形態素情報

`{@feature}` を使って形態素的な特徴で検索できます：

| 特徴 | マッチ対象 |
| :--- | :--- |
| `{@passive}` | 受動態の構文 |
| `{@past}` | 過去時制の形式 |
| `{@modal}` | 法助動詞 |

## 固有表現検索

`%ENTITY` 記法で固有表現を検索できます。18種類のエンティティタイプの一覧は[固有表現検索](named-entity-search.md)を参照してください。

| 例 | マッチ対象 |
| :--- | :--- |
| `%PERSON said` | 人名の後に "said" が続くもの |
| `%ORG` | 組織名 |
| `in %GPE` | "in" の後に国名・都市名が続くもの |
| `%DATE` | 日付表現 |

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
| `{@passive}` | 受動態の構文 |
| `{@nsubj} [be]` | 主語名詞の後に "be" の活用形が続くもの |
