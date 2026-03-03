# 統語情報を確認する

検索結果のセグメントテキストをクリックすると、統語情報パネルが開きます。

TCSEの全トランスクリプトデータは [spaCy](https://spacy.io/) 3.8（`en_core_web_lg`）による言語解析のアノテーションが付与されています。各トークンについて以下の情報が利用可能です：

| フィールド | 説明 |
| :--- | :--- |
| **Surface** | テキストに出現するそのままの語形 |
| **Lemma** | 語の基本形（辞書形） |
| **POS** | 品詞タグ（粗い分類: NOUN, VERB, ADJ 等） |
| **Tag** | 詳細品詞タグ（NN, VBZ, JJ 等） |
| **Dep** | 統語的依存関係（nsubj, dobj, prep 等） |
| **Morph** | 形態素情報（Number, Tense, Voice 等） |
| **Entity** | 固有表現タイプ（該当する場合: PERSON, ORG, GPE 等） |
| **Noun Chunk** | そのトークンが名詞チャンクの一部かどうか |
| **Frequency** | コーパス内での語の出現頻度 |

![クリック位置](images/12.png)

![統語情報パネル](images/13.png)
