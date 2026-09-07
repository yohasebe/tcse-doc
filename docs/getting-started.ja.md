# はじめの一歩

TCSE は TED Talks のトランスクリプトを検索します。ヒットした箇所はトーク内の位置を保持しているので、前後の文脈を読み、翻訳を表示し、その言葉が話された瞬間から動画を再生できます。

このページは、最初の検索から動画の再生までをひととおりたどる案内です。以降のページは操作ごとに分かれているので、必要な機能があるときに戻ってきてください。

## 1. 語を検索する

[トップページ](https://yohasebe.com/tcse/)上部の入力欄に語を入力し、**SEARCH** をクリックします。まずは `technology` を試してください。

表の各行が1件のヒットです。どのトークのものか、トークのどこに出てくるか、そして検索語を目立たせた前後のテキストが表示されます。トランスクリプトは**セグメント**（字幕1画面分にほぼ相当）に分割されており、既定ではセグメントを文の切れ目まで広げて読みやすくしています。結果は200件ずつのページに分かれます。

結果は既定でランダム順に表示されます。毎回同じトークばかりが上に来ないようにするためです。順序を固定したい場合は、設定パネルの **Randomize Result Order** をオフにしてください。詳しくは[トランスクリプトを検索](searching-for-words/search-for-words-in-ted-transcripts.md)を参照してください。

## 2. ヒットを開く

各行のアイコンから、表の外へ進めます。

- そのセグメントから動画を再生する → [セグメントを再生](playing-video/play-a-segment-of-a-talk.md)
- トークの[全文を読む](obtaining-information-about-talks/show-transcripts-in-full-length.md)
- そのセグメントが[トークのどのあたりか](obtaining-information-about-talks/check-location-of-a-segment.md)を見る
- セグメントを[そこへ戻れるリンク付きで](using-tcse-for-language-learning-and-education/get-unique-url-of-a-segment.md)コピーする

トークのタイトルをクリックすると、[そのトークの情報](obtaining-information-about-talks/find-basic-information-about-a-talk.md)が表示されます。

## 3. 翻訳を表示する

**Translation** セレクタで言語を選ぶと、各ヒットと動画に翻訳が表示されます。翻訳は TED のボランティアによるものなので、収録状況はトークによって異なります。詳しくは[対訳を表示](searching-for-words/show-translation.md)を参照してください。

## 次に読むもの

### 教育・学習で使う

- [セグメントを再生](playing-video/play-a-segment-of-a-talk.md)し、[再生速度を変え](using-tcse-for-language-learning-and-education/change-play-speed.md)、[セグメントごとに一時停止](playing-video/pause-video-after-segment.md)しながら、ひとつの箇所を読み込めます。
- [Nグラム](using-tcse-for-language-learning-and-education/n-grams.md)はよく使われる語の連なりを示し、[構文・熟語](using-tcse-for-language-learning-and-education/constructions.md)はパターンをコーパス中の用例とともに集めています。
- 動画の1セグメントを直接開くリンクを学習者に渡せます → [セグメントURL](using-tcse-for-language-learning-and-education/get-unique-url-of-a-segment.md)

### コーパス研究で使う

- **アドバンスト・サーチ**は、表層の文字列ではなくレンマ・品詞・依存関係で照合します。`[help]{verb}` は動詞として使われた *help* / *helps* / *helped* / *helping* を、`[give] _{pron} _` は *give* の後ろに代名詞と名詞句が続く形を見つけます。[アドバンスト・サーチ](searching-for-words/search-in-advanced-mode.md)から始め、[検索クエリ構文](searching-for-words/advanced-search-query-syntax.md)を手元に開いておくとよいでしょう。
- [KWIC コンコーダンス](searching-for-words/kwic-concordance-view.md)は検索語を揃えて表示します。
- [コロケーション分析](using-tcse-for-language-learning-and-education/collocation-analysis.md)と[コロケーション・ネットワーク](using-tcse-for-language-learning-and-education/collocation-network.md)は、ある語が何と共起するかを示します。各統計値が何を数えているかを確認してから議論に用いてください。
- [検索結果のエクスポート](searching-for-words/export-search-results.md)は、表示中のページを TSV または JSON に書き出します。エクスポートにはすべての設定が含まれるわけではないので、使用した設定をファイルとあわせて記録してください。

TCSE を引用する場合は [TCSEの引用について](index.md#tcse_1) を参照してください。コーパスの規模とバージョンは論文中の数値ではなく[現在のバージョン](index.md#_1)から、あわせて検索を実行した日付を記載してください。
