<img src="../website/public/banner.jpg" alt="Hammurabi — Laws Every Engineer Should Know" width="100%" />

各法則に「対抗力」「現場の指針」「一次資料の出典」を添えた、エンジニアリングの法典。

[![stars](https://img.shields.io/github/stars/kanywst/hammurabi?style=for-the-badge&color=1d47b8&labelColor=17181a)](https://github.com/kanywst/hammurabi/stargazers)
[![laws](https://img.shields.io/badge/%E6%B3%95%E5%89%87-91-1d47b8?style=for-the-badge&labelColor=17181a)](#法典)
[![site](https://img.shields.io/badge/%E6%B3%95%E5%85%B8%E3%82%92%E8%AA%AD%E3%82%80-1d47b8?style=for-the-badge&labelColor=17181a)](https://kanywst.github.io/hammurabi/ja/)
[![license](https://img.shields.io/badge/content-CC%20BY--SA%204.0-5c5f64?style=for-the-badge&labelColor=17181a)](../LICENSE)

[English](../README.md) • **日本語**

---

## Hammurabi とは？

複雑性が増し続ける現代において、エンジニアリングの最大のボトルネックは「コード」ではなく、**「不確実な状況下での意思決定」** です。

Hammurabi は、**認知心理学**・**安全工学**・**システム設計**から選び抜いたエンジニアリング法則の法典です。人類最古の成文法典に因んで名付けました。法則が「覚えておくもの」から「引用できるもの」に変わった、その最初の瞬間に因んでいます。

法則集の多くは「解説」で終わります。しかし解説は意思決定ではありません。この法典では、各条文に次の3つが必ず付きます。

- **対抗力 (Counter)** — その法則が独断に硬直するのを止める原理。ここにある法則はすべて、適用しすぎれば害を生みます。対抗力はその境界線です。フェイルファストのないポステルの法則は、破損データを黙って飲み込むシステムを生みます。心理的受容性のない最小権限は、利用者に迂回される統制を生みます。
- **現場の指針 (Guideline)** — 明日から実行できること。観察ではなく、命令形で書かれています。
- **一次資料の出典 (Source)** — その考えが実際に現れた論文・書籍・書簡・RFC。それを要約したブログ記事ではありません。全条文にリンクが付いているので、信じる前に確かめられます。

## 条文の読み方

すべての条文は、同じ5つの部分を同じ順序で持ちます。

| 部分 | 答えている問い |
| --- | --- |
| **概念** | この力は一言で言うと何か？ |
| **メカニズム** | なぜそれが起きるのか。多くはソフトウェアではなく、人間かシステムの性質に関する事実。 |
| **対立概念** | 何がそれを独断から守るのか？ |
| **判断の指針** | 月曜日に何をすればいいのか？ |
| **出典** | それは実際どこから来たのか。どう検証するのか。 |

`§` 番号は表示用の安定したラベルで、ファイル内の順序から機械的に割り当てられます。条文の恒久的な identity は **slug** であり、ウェブサイトのパーマリンクはこれを使います。前後に条文が追加されても slug は変わりません。

## 法典

<!-- CODEX:START -->

<!-- Generated from data/laws.yaml by scripts/generate.mjs. Do not edit by hand. -->

**状況から引く**

- **見積りが毎回ずれる:** [ホフスタッターの法則 (Hofstadter's Law)](#ホフスタッターの法則-hofstadters-law) · [90対90の法則 (Ninety-Ninety Rule)](#90対90の法則-ninety-ninety-rule) · [パーキンソンの法則 (Parkinson's Law)](#パーキンソンの法則-parkinsons-law) · [ブルックスの法則 (Brooks' Law)](#ブルックスの法則-brooks-law) · [時間を固定し、スコープを変える (Fixed Time, Variable Scope)](#時間を固定しスコープを変える-fixed-time-variable-scope)
- **チームが大きくなってきた:** [ブルックスの法則 (Brooks' Law)](#ブルックスの法則-brooks-law) · [ダンバー数 (Dunbar's Number)](#ダンバー数-dunbars-number) · [リンゲルマン効果 (Ringelmann Effect)](#リンゲルマン効果-ringelmann-effect) · [コンウェイの法則 (Conway's Law)](#コンウェイの法則-conways-law) · [傍観者効果 (Bystander Effect)](#傍観者効果-bystander-effect) · [統制ではなく文脈を (Context, Not Control)](#統制ではなく文脈を-context-not-control)
- **指標が数字合わせになっている:** [グッドハートの法則 (Goodhart's Law)](#グッドハートの法則-goodharts-law) · [コブラ効果 (Cobra Effect)](#コブラ効果-cobra-effect) · [シャーキーの原理 (Shirky Principle)](#シャーキーの原理-shirky-principle)
- **決めきれない:** [タイプ 1／タイプ 2 の意思決定 (Type 1 vs Type 2 Decisions)](#タイプ-1タイプ-2-の意思決定-type-1-vs-type-2-decisions) · [反対してもコミットする (Disagree and Commit)](#反対してもコミットする-disagree-and-commit) · [パーキンソンの凡俗法則 (Law of Triviality)](#パーキンソンの凡俗法則-law-of-triviality) · [サンクコストの誤謬 (Sunk Cost Fallacy)](#サンクコストの誤謬-sunk-cost-fallacy)
- **障害が起きた後:** [非難なきポストモーテム (Blameless Postmortem)](#非難なきポストモーテム-blameless-postmortem) · [スイスチーズモデル (Swiss Cheese Model)](#スイスチーズモデル-swiss-cheese-model) · [逸脱の常態化 (Normalization of Deviance)](#逸脱の常態化-normalization-of-deviance) · [通常事故理論 (Normal Accident Theory)](#通常事故理論-normal-accident-theory) · [ハンロンの剃刀 (Hanlon's Razor)](#ハンロンの剃刀-hanlons-razor) · [自動化の皮肉 (Ironies of Automation)](#自動化の皮肉-ironies-of-automation) · [なぜなぜ分析 (Five Whys)](#なぜなぜ分析-five-whys) · [善意ではなく仕組み (Mechanisms, Not Good Intentions)](#善意ではなく仕組み-mechanisms-not-good-intentions)
- **信頼性と開発速度がぶつかる:** [エラーバジェット (Error Budget)](#エラーバジェット-error-budget) · [トイル (Toil)](#トイル-toil) · [逸脱の常態化 (Normalization of Deviance)](#逸脱の常態化-normalization-of-deviance) · [マーフィーの法則 (Murphy's Law)](#マーフィーの法則-murphys-law) · [作った者が運用する (You Build It, You Run It)](#作った者が運用する-you-build-it-you-run-it) · [アンドン（ラインを止める） (Andon (Stop the Line))](#アンドンラインを止める-andon-stop-the-line) · [カオスエンジニアリング (Chaos Engineering)](#カオスエンジニアリング-chaos-engineering)
- **何かが遅い:** [アムダールの法則 (Amdahl's Law)](#アムダールの法則-amdahls-law) · [制約理論 (Theory of Constraints)](#制約理論-theory-of-constraints) · [早すぎる最適化 (Premature Optimization)](#早すぎる最適化-premature-optimization) · [スケールの裾野 (The Tail at Scale)](#スケールの裾野-the-tail-at-scale) · [リトルの法則 (Little's Law)](#リトルの法則-littles-law)
- **古いコードを消す・作り直す:** [チェスタトンの柵 (Chesterton's Fence)](#チェスタトンの柵-chestertons-fence) · [セカンドシステム症候群 (Second-System Effect)](#セカンドシステム症候群-second-system-effect) · [ガルの法則 (Gall's Law)](#ガルの法則-galls-law) · [ハイラムの法則 (Hyrum's Law)](#ハイラムの法則-hyrums-law) · [イーグルソンの法則 (Eagleson's Law)](#イーグルソンの法則-eaglesons-law) · [ボーイスカウトの規則 (Boy Scout Rule)](#ボーイスカウトの規則-boy-scout-rule) · [ストラングラーフィグ (Strangler Fig)](#ストラングラーフィグ-strangler-fig) · [ビヨンセ・ルール (Beyoncé Rule)](#ビヨンセルール-beyoncé-rule) · [チャーンルール (Churn Rule)](#チャーンルール-churn-rule)
- **API やインタフェースを設計する:** [ハイラムの法則 (Hyrum's Law)](#ハイラムの法則-hyrums-law) · [ポステルの法則 (Postel's Law)](#ポステルの法則-postels-law) · [驚き最小の原則 (Principle of Least Astonishment)](#驚き最小の原則-principle-of-least-astonishment) · [リーキー・アブストラクション (Law of Leaky Abstractions)](#リーキーアブストラクション-law-of-leaky-abstractions) · [テスラーの複雑性保存則 (Tesler's Law)](#テスラーの複雑性保存則-teslers-law) · [ビヨンセ・ルール (Beyoncé Rule)](#ビヨンセルール-beyoncé-rule)
- **新しいものを作り始める:** [ワーキング・バックワーズ (Working Backwards)](#ワーキングバックワーズ-working-backwards) · [YAGNI (YAGNI)](#yagni-yagni) · [ガルの法則 (Gall's Law)](#ガルの法則-galls-law) · [劣っている方が勝つ (Worse is Better)](#劣っている方が勝つ-worse-is-better) · [KISS の原則 (KISS Principle)](#kiss-の原則-kiss-principle) · [XY問題 (XY Problem)](#xy問題-xy-problem)
- **技術を選ぶ:** [リンディ効果 (Lindy Effect)](#リンディ効果-lindy-effect) · [カーゴ・カルト・エンジニアリング (Cargo Cult Engineering)](#カーゴカルトエンジニアリング-cargo-cult-engineering) · [アマラの法則 (Amara's Law)](#アマラの法則-amaras-law) · [生存者バイアス (Survivorship Bias)](#生存者バイアス-survivorship-bias) · [退屈な技術を選べ (Choose Boring Technology)](#退屈な技術を選べ-choose-boring-technology)
- **分散システムを組む:** [分散コンピューティングの誤謬 (Fallacies of Distributed Computing)](#分散コンピューティングの誤謬-fallacies-of-distributed-computing) · [CAP定理 (CAP Theorem)](#cap定理-cap-theorem) · [二人の将軍問題 (Two Generals Problem)](#二人の将軍問題-two-generals-problem) · [スケールの裾野 (The Tail at Scale)](#スケールの裾野-the-tail-at-scale) · [静的安定性 (Static Stability)](#静的安定性-static-stability) · [フォールバックを避ける (Avoid Fallback)](#フォールバックを避ける-avoid-fallback) · [一定の作業量 (Constant Work)](#一定の作業量-constant-work) · [カオスエンジニアリング (Chaos Engineering)](#カオスエンジニアリング-chaos-engineering)
- **権限と秘密を設計する:** [最小権限の原則 (Principle of Least Privilege)](#最小権限の原則-principle-of-least-privilege) · [ケルクホフスの原理 (Kerckhoffs's Principle)](#ケルクホフスの原理-kerckhoffss-principle)

**すべての法則**

| § | 法則 | カテゴリ | 核心 |
| --- | --- | --- | --- |
| `01` | [タイプ 1／タイプ 2 の意思決定 (Type 1 vs Type 2 Decisions)](#タイプ-1タイプ-2-の意思決定-type-1-vs-type-2-decisions) | 意思決定 | やり直せる決定にまで、やり直せない決定と同じ慎重さを払ってしまう。 |
| `02` | [逸脱の常態化 (Normalization of Deviance)](#逸脱の常態化-normalization-of-deviance) | 安全工学 | 破っても何も起きなかったルール違反は、いつの間にか当たり前になる。 |
| `03` | [チェスタトンの柵 (Chesterton's Fence)](#チェスタトンの柵-chestertons-fence) | システム | 経緯を知らないコードやルールは無駄に見え、理由も知らずに消したくなる。 |
| `04` | [正常性バイアス (Normalcy Bias)](#正常性バイアス-normalcy-bias) | 認知 | 本物の異常を前にしても、人はいつもの無害な説明に飛びつく。 |
| `05` | [パーキンソンの凡俗法則 (Law of Triviality)](#パーキンソンの凡俗法則-law-of-triviality) | 組織 | 議論は重要な部分ではなく、誰でも口を出せる簡単な部分に集中する。 |
| `06` | [ガルの法則 (Gall's Law)](#ガルの法則-galls-law) | システム | 動く複雑なシステムは、たいてい動く単純なシステムから育ったものだ。最初から設計したものが動くことはまれだ。 |
| `07` | [コンウェイの法則 (Conway's Law)](#コンウェイの法則-conways-law) | 組織 | システムの構造は、作るチーム同士の意思疎通の形に似てくる。 |
| `08` | [ハイラムの法則 (Hyrum's Law)](#ハイラムの法則-hyrums-law) | システム | 利用者が十分に多ければ、バグも含めた観測可能な挙動すべてに誰かが依存する。 |
| `09` | [ブルックスの法則 (Brooks' Law)](#ブルックスの法則-brooks-law) | 組織 | 遅れたプロジェクトに人を足すと、立ち上がりと調整のコストが寄与を上回り、かえって遅れがちだ。 |
| `10` | [XY問題 (XY Problem)](#xy問題-xy-problem) | 認知 | 人は本当の問題ではなく、自分が思いついた解決策について助けを求める。 |
| `11` | [ポステルの法則 (Postel's Law)](#ポステルの法則-postels-law) | 分散システム | 相手が仕様どおりに動く前提のシステムは、最初の逸脱にもろくなりがちだ。 |
| `12` | [ハンロンの剃刀 (Hanlon's Razor)](#ハンロンの剃刀-hanlons-razor) | 組織 | 疲労や文脈不足で説明がつく遅れやバグに、人は悪意を読み取ってしまう。 |
| `13` | [ホフスタッターの法則 (Hofstadter's Law)](#ホフスタッターの法則-hofstadters-law) | 見積り | 作業は見積りより長くかかる。それを織り込んで見積もってもなお長くかかる。 |
| `14` | [グッドハートの法則 (Goodhart's Law)](#グッドハートの法則-goodharts-law) | インセンティブ | 数字を動かすことに報酬がつくと、その数字は実態を測らなくなる。 |
| `15` | [リンディ効果 (Lindy Effect)](#リンディ効果-lindy-effect) | システム | アイデアやソフトウェアは、長く生き残ったものほどこの先も長く残る可能性が高い。 |
| `16` | [サンクコストの誤謬 (Sunk Cost Fallacy)](#サンクコストの誤謬-sunk-cost-fallacy) | 意思決定 | すでに注ぎ込んだ分が惜しくて、失敗しているプロジェクトに投資し続ける。 |
| `17` | [カーゴ・カルト・エンジニアリング (Cargo Cult Engineering)](#カーゴカルトエンジニアリング-cargo-cult-engineering) | 認知 | うまくいった理由を理解しないまま、他社のやり方の形だけを真似る。 |
| `18` | [アムダールの法則 (Amdahl's Law)](#アムダールの法則-amdahls-law) | 性能 | ボトルネックが別の場所にあれば、一部を速くしても全体はほとんど速くならない。 |
| `19` | [リーキー・アブストラクション (Law of Leaky Abstractions)](#リーキーアブストラクション-law-of-leaky-abstractions) | システム | 込み入った抽象化はいずれ、隠したはずの下の層の詳細を露出させる。 |
| `20` | [パレートの法則 (Pareto Principle)](#パレートの法則-pareto-principle) | 意思決定 | 結果の大半は、少数の原因から生まれる。バグの多くは一部のコードに集中する。 |
| `21` | [生存者バイアス (Survivorship Bias)](#生存者バイアス-survivorship-bias) | 認知 | 成功例だけから結論を出すと、同じやり方で失敗した例が見えなくなる。 |
| `22` | [カーニハンの法則 (Kernighan's Law)](#カーニハンの法則-kernighans-law) | 保守性 | デバッグは書くより難しい。最大限に凝ったコードは、自分ではデバッグできない。 |
| `23` | [コブラ効果 (Cobra Effect)](#コブラ効果-cobra-effect) | インセンティブ | 問題を減らすための報酬が、問題を増やす行動に報いてしまう。 |
| `24` | [ダンバー数 (Dunbar's Number)](#ダンバー数-dunbars-number) | 組織 | 人が安定して保てる関係は150人ほどだ。工学ではそこから、文脈を共有できる規模を超えると増員は調整に消える、と推し量る。 |
| `25` | [劣っている方が勝つ (Worse is Better)](#劣っている方が勝つ-worse-is-better) | システム | 作りやすく広めやすい単純な設計は、正しいが複雑な設計に勝ちやすい。 |
| `26` | [カニンガムの法則 (Cunningham's Law)](#カニンガムの法則-cunninghams-law) | 組織 | 人は質問に答えるより、間違った答えを訂正するほうに熱心だ。 |
| `27` | [傍観者効果 (Bystander Effect)](#傍観者効果-bystander-effect) | 組織 | 問題を目にする人が多いほど、一人ひとりが自分から動く可能性は下がる。 |
| `28` | [マーフィーの法則 (Murphy's Law)](#マーフィーの法則-murphys-law) | 安全工学 | 時間と負荷が十分にあれば、起こりうる故障はいずれ起きる。 |
| `29` | [ボーイスカウトの規則 (Boy Scout Rule)](#ボーイスカウトの規則-boy-scout-rule) | 保守性 | 掃除はめったに来ないリファクタリングに先送りされがちで、コードは劣化していく。 |
| `30` | [テスラーの複雑性保存則 (Tesler's Law)](#テスラーの複雑性保存則-teslers-law) | システム | システムに本来備わる複雑さは消せない。誰か別の人に移るだけだ。 |
| `31` | [ダニング・クルーガー効果 (Dunning-Kruger Effect)](#ダニングクルーガー効果-dunning-kruger-effect) | 認知 | ある分野に疎い人ほど、自分の能力を過大評価しがちだ。 |
| `32` | [知識の呪い (Curse of Knowledge)](#知識の呪い-curse-of-knowledge) | 認知 | 一度知ってしまうと、知らなかったときの感覚を想像できなくなる。 |
| `33` | [スイスチーズモデル (Swiss Cheese Model)](#スイスチーズモデル-swiss-cheese-model) | 安全工学 | どの防御層にも穴がある。事故は複数の層の穴がそろったときに起きる。 |
| `34` | [早すぎる最適化 (Premature Optimization)](#早すぎる最適化-premature-optimization) | 性能 | 計測する前に最適化すると、ボトルネックでない箇所に工数を使ってしまう。 |
| `35` | [リーナスの法則 (Linus's Law)](#リーナスの法則-linuss-law) | 保守性 | 一人では見つからないバグも、同じコードを見る別の人にはあっさり分かることが多い。 |
| `36` | [CAP定理 (CAP Theorem)](#cap定理-cap-theorem) | 分散システム | ネットワーク分断が起きたら、データストアは一貫性か可用性のどちらかを捨てる。 |
| `37` | [リトルの法則 (Little's Law)](#リトルの法則-littles-law) | 性能 | 安定した系では、系の中にある件数の平均は、到着率と平均滞在時間の積に等しい。 |
| `38` | [二人の将軍問題 (Two Generals Problem)](#二人の将軍問題-two-generals-problem) | 分散システム | 信頼できない通信路では、二者は合意できたと確信することができない。 |
| `39` | [ピーターの法則 (Peter Principle)](#ピーターの法則-peter-principle) | 組織 | 人は苦手な役職にたどり着くまで昇進し、そこにとどまりがちだ。 |
| `40` | [パーキンソンの法則 (Parkinson's Law)](#パーキンソンの法則-parkinsons-law) | 組織 | 仕事は、完了までに使える時間をすべて使い切るまで膨らむ。 |
| `41` | [ヴィルトの法則 (Wirth's Law)](#ヴィルトの法則-wirths-law) | 性能 | ソフトウェアが遅くなる速さは、ハードウェアが速くなる速さを上回る。 |
| `42` | [90対90の法則 (Ninety-Ninety Rule)](#90対90の法則-ninety-ninety-rule) | 見積り | 残り1割の作業に、最初の9割と同じくらいの時間がかかりがちだ。 |
| `43` | [イーグルソンの法則 (Eagleson's Law)](#イーグルソンの法則-eaglesons-law) | 保守性 | 半年見ていない自分のコードは、他人が書いたコードも同然だ。 |
| `44` | [ヒックの法則 (Hick's Law)](#ヒックの法則-hicks-law) | ヒューマンインタフェース | 選択肢が増えるほど、人は一つを選ぶのに時間がかかる。 |
| `45` | [フィッツの法則 (Fitts's Law)](#フィッツの法則-fittss-law) | ヒューマンインタフェース | 小さく遠いターゲットほど、押すのに時間がかかり、押し間違えも増える。 |
| `46` | [ミラーの法則 (Miller's Law)](#ミラーの法則-millers-law) | 認知 | 作業記憶に保てるのは数個のまとまりだけだ（Miller は7前後とし、後の研究はもっと少ないとする）。 |
| `47` | [分散コンピューティングの誤謬 (Fallacies of Distributed Computing)](#分散コンピューティングの誤謬-fallacies-of-distributed-computing) | 分散システム | ネットワーク越しのコードは、本番では成り立たない8つの前提を暗に置いている。 |
| `48` | [自動化の皮肉 (Ironies of Automation)](#自動化の皮肉-ironies-of-automation) | 安全工学 | 自動化は人に最も難しい例外だけを残し、その対応に要る腕は使わないうちに鈍る。 |
| `49` | [最小権限の原則 (Principle of Least Privilege)](#最小権限の原則-principle-of-least-privilege) | セキュリティ | 不要な権限を持つ部品ほど、問題が起きたときの被害範囲が広がる。 |
| `50` | [ケルクホフスの原理 (Kerckhoffs's Principle)](#ケルクホフスの原理-kerckhoffss-principle) | セキュリティ | 設計が秘密である間だけ安全なシステムは、安全ではない。 |
| `51` | [グスタフソンの法則 (Gustafson's Law)](#グスタフソンの法則-gustafsons-law) | 性能 | 問題の規模が計算機とともに大きくなるなら、並列化の効果はほぼ比例して伸びる。 |
| `52` | [スケールの裾野 (The Tail at Scale)](#スケールの裾野-the-tail-at-scale) | 分散システム | 一つのリクエストが多数のサーバに分かれると、最も遅いサーバが応答時間を決める。 |
| `53` | [アシュビーの必要多様性の法則 (Ashby's Law of Requisite Variety)](#アシュビーの必要多様性の法則-ashbys-law-of-requisite-variety) | システム | 制御側は、対象がとりうる状態と同じだけの対応を持たないと制御できない。 |
| `54` | [デメテルの法則 (Law of Demeter)](#デメテルの法則-law-of-demeter) | 保守性 | 他のオブジェクトの内部をたどるコードは、その連鎖のどこが変わっても壊れる。 |
| `55` | [ジェヴォンズのパラドックス (Jevons Paradox)](#ジェヴォンズのパラドックス-jevons-paradox) | インセンティブ | 資源を安く使えるようにすると、かえって総使用量が増えることがある。 |
| `56` | [通常事故理論 (Normal Accident Theory)](#通常事故理論-normal-accident-theory) | 安全工学 | 複雑で密に結合したシステムでは、事故は構造そのものから生じる。 |
| `57` | [割れ窓理論 (Broken Windows Theory)](#割れ窓理論-broken-windows-theory) | 安全工学 | 放置された小さな乱れは、基準は守らなくてよいという合図になり、さらに乱れを呼びやすい。 |
| `58` | [YAGNI (YAGNI)](#yagni-yagni) | 保守性 | 想像した将来のために書いたコードは、今の工数を食い、実際の要件に合うこともまれだ。 |
| `59` | [KISS の原則 (KISS Principle)](#kiss-の原則-kiss-principle) | 保守性 | システムは、普通の人が悪条件の中でも直せる程度に単純である必要がある。 |
| `60` | [DRY 原則 (DRY Principle)](#dry-原則-dry-principle) | 保守性 | 同じ知識を二か所に置くと、一緒に変わる保証がないので食い違っていく。 |
| `61` | [制約理論 (Theory of Constraints)](#制約理論-theory-of-constraints) | 性能 | システムの処理量は、最も詰まっている一か所で決まる。 |
| `62` | [オッカムの剃刀 (Occam's Razor)](#オッカムの剃刀-occams-razor) | 認知 | 検証されていない仮定が最も少ない説明が、たいてい正しい。 |
| `63` | [単一責任の原則 (Single Responsibility Principle)](#単一責任の原則-single-responsibility-principle) | 保守性 | 二つの利用者に仕えるモジュールには、両方から食い違う変更要求が届く。 |
| `64` | [驚き最小の原則 (Principle of Least Astonishment)](#驚き最小の原則-principle-of-least-astonishment) | ヒューマンインタフェース | 利用者を驚かせる挙動は、少し劣っても予想どおりの挙動より高くつく。 |
| `65` | [セカンドシステム症候群 (Second-System Effect)](#セカンドシステム症候群-second-system-effect) | システム | 最初の成功のあと、設計者は先送りしたアイデアを二作目に詰め込みがちだ。 |
| `66` | [ムーアの法則 (Moore's Law)](#ムーアの法則-moores-law) | 性能 | 部品単価が最も安くなるチップのトランジスタ数は、約2年ごとに倍になる。 |
| `67` | [アマラの法則 (Amara's Law)](#アマラの法則-amaras-law) | 見積り | 新しい技術は、最初の数年は過大評価され、十年単位では過小評価される。 |
| `68` | [苦い教訓 (The Bitter Lesson)](#苦い教訓-the-bitter-lesson) | システム | AIでは長い目で見ると、計算量とともに伸びる汎用手法が、人が作り込んだ知識に勝ってきた。 |
| `69` | [メトカーフの法則 (Metcalfe's Law)](#メトカーフの法則-metcalfes-law) | システム | ノードが一つ増えるたびに既存の全ノードの価値が上がり、価値は規模より速く増える。 |
| `70` | [リンゲルマン効果 (Ringelmann Effect)](#リンゲルマン効果-ringelmann-effect) | 組織 | 集団が大きくなるほど一人あたりの貢献は減る。誰の成果か見えないと特にそうだ。 |
| `71` | [シャーキーの原理 (Shirky Principle)](#シャーキーの原理-shirky-principle) | インセンティブ | 組織は、自分たちが存在する理由である問題を残そうとする。 |
| `72` | [エラーバジェット (Error Budget)](#エラーバジェット-error-budget) | 運用 | 100% 未満の SLO は許容できる失敗の量を決める。その量は使ってよい予算だ。 |
| `73` | [トイル (Toil)](#トイル-toil) | 運用 | 手作業の繰り返し運用はサービスと一緒に増え、放っておけば開発の時間を食い尽くす。 |
| `74` | [非難なきポストモーテム (Blameless Postmortem)](#非難なきポストモーテム-blameless-postmortem) | 運用 | 障害のいちばん近くにいた人を罰すると、人は自分のしたことを隠すようになる。 |
| `75` | [ワーキング・バックワーズ (Working Backwards)](#ワーキングバックワーズ-working-backwards) | 意思決定 | 解決策から始めると、誰も必要としないものを作ることが多い。発表文から始めれば早く気づける。 |
| `76` | [反対してもコミットする (Disagree and Commit)](#反対してもコミットする-disagree-and-commit) | 意思決定 | 全員の同意を待つより、決めて実行し、誤りなら軌道修正するほうが速いことが多い。 |
| `77` | [作った者が運用する (You Build It, You Run It)](#作った者が運用する-you-build-it-you-run-it) | 運用 | サービスを作るチームが運用も担えば、運用上の弱点のコストは、それを直せる人のところに落ちる。 |
| `78` | [静的安定性 (Static Stability)](#静的安定性-static-stability) | 分散システム | 障害を乗り切るために新しい動作を必要とするシステムは、まさに状況が悪いときにその動作が成功することに賭けている。 |
| `79` | [フォールバックを避ける (Avoid Fallback)](#フォールバックを避ける-avoid-fallback) | 分散システム | フォールバック経路は何かがすでに壊れたあとでしか動かない。だから、システムでいちばん試されていないコードが最悪の条件で走る。 |
| `80` | [一定の作業量 (Constant Work)](#一定の作業量-constant-work) | 分散システム | 変更や障害の数に応じて仕事が増えるシステムは、余力がいちばん少ないときにいちばん多くの仕事をする。 |
| `81` | [善意ではなく仕組み (Mechanisms, Not Good Intentions)](#善意ではなく仕組み-mechanisms-not-good-intentions) | 組織 | 失敗のあとで「もっと気をつけろ」と求めても、ほとんど何も変わらない。失敗した人は、もともと気をつけていたからだ。 |
| `82` | [アンドン（ラインを止める） (Andon (Stop the Line))](#アンドンラインを止める-andon-stop-the-line) | 運用 | 異常に気づいた人が誰でもラインを止められれば、欠陥は下流に流れず、見つけるのも直すのも高くつく前に捕まる。 |
| `83` | [なぜなぜ分析 (Five Whys)](#なぜなぜ分析-five-whys) | 運用 | 「なぜ失敗したか」への最初の答えはたいてい症状であり、症状だけを直せば原因は残って、また同じ失敗を起こす。 |
| `84` | [カオスエンジニアリング (Chaos Engineering)](#カオスエンジニアリング-chaos-engineering) | 運用 | 一度も試されていない耐障害性は仮説にすぎない。予定を組もうと組むまいと、本番がいずれそれを試す。 |
| `85` | [統制ではなく文脈を (Context, Not Control)](#統制ではなく文脈を-context-not-control) | 組織 | ルールと承認は、共有された理解ほどにはスケールしない。手順を渡された人より、目標の背景を渡された人のほうが、現場でよい判断をする。 |
| `86` | [コードの健全性を上げるなら承認する (Approve What Improves Code Health)](#コードの健全性を上げるなら承認する-approve-what-improves-code-health) | 保守性 | すべての変更に完璧を求めるとレビューが遅くなり、遅いレビューはコードベースを良くするどころか悪くする。 |
| `87` | [ビヨンセ・ルール (Beyoncé Rule)](#ビヨンセルール-beyoncé-rule) | 保守性 | 共有コードベースでは、どのテストも確かめていない挙動こそが予告なく変わる。 |
| `88` | [チャーンルール (Churn Rule)](#チャーンルール-churn-rule) | 組織 | 共有基盤を変えるチームが移行作業を利用者に押しつけられると、変更のコストは利用者の数だけ膨らむ。 |
| `89` | [時間を固定し、スコープを変える (Fixed Time, Variable Scope)](#時間を固定しスコープを変える-fixed-time-variable-scope) | 見積り | スコープを固定して時間を固定しないと、ずれるのは期日で、スコープは残る。時間を固定すれば、何が大事かを選ばざるを得なくなる。 |
| `90` | [ストラングラーフィグ (Strangler Fig)](#ストラングラーフィグ-strangler-fig) | 保守性 | 稼働中のシステムは、一度に置き換えるより、周縁から少しずつ置き換えるほうがたいてい安全だ。 |
| `91` | [退屈な技術を選べ (Choose Boring Technology)](#退屈な技術を選べ-choose-boring-technology) | 意思決定 | 不慣れな技術を採り入れるたびに、未知の故障モードと恒久的な運用コストが付いてくる。チームが抱えられる数は多くない。 |

### タイプ 1／タイプ 2 の意思決定 (Type 1 vs Type 2 Decisions)

`§ 01` · 意思決定

- **概念:** やり直せる決定にまで、やり直せない決定と同じ慎重さを払ってしまう。
- **メカニズム:** Bezos の手紙が論じているのは組織のことだ。会社は大きくなるにつれ、取り返しのつかない決定（タイプ 1）のための重い手順を、やり直せる決定（タイプ 2）も含めたほとんどの決定に使うようになる。手紙の言葉では、その結果は「遅さ、考えなしのリスク回避、実験の不足、そしてその帰結としての発明の減少」だ。
- **対立概念:** **隠れた一方通行のドア** — やり直せるように見えて実はやり直せない決定は多い（公開 API、ディスクに書いたデータ形式、顧客に告知した価格）。それを速く通すと、取り消せない約束を出荷してしまう。
- **判断の指針:** 議論の場を設ける前に、その決定がどちらの種類かを決めよ。1 スプリント以内に、許容できるコストでやり直せるなら、一人か少人数に今週中に決めさせよ。永続化されたデータ、公開インタフェース、セキュリティ、顧客にすでに約束したことに触れる決定にだけ、完全なレビューを使え。
- **出典:** Jeff Bezos『2015 年 株主への手紙』(Amazon.com, Inc., 2016 年 4 月提出)。"Type 1 / Type 2 decisions" という枠組みの出典。1997 年の手紙は「Day 1」の手紙で、この枠組みは含まれていない。 — [原典 ↗](https://www.sec.gov/Archives/edgar/data/1018724/000119312516530910/d168744dex991.htm)
- **関連:** [サンクコストの誤謬 (Sunk Cost Fallacy)](#サンクコストの誤謬-sunk-cost-fallacy) · [パーキンソンの法則 (Parkinson's Law)](#パーキンソンの法則-parkinsons-law) · [反対してもコミットする (Disagree and Commit)](#反対してもコミットする-disagree-and-commit)

### 逸脱の常態化 (Normalization of Deviance)

`§ 02` · 安全工学

- **概念:** 破っても何も起きなかったルール違反は、いつの間にか当たり前になる。
- **メカニズム:** Vaughan が NASA に見いだしたのは、ルールを破る悪人ではなかった。O リングの侵食が見つかってもシャトルが無事に戻るたびに、技術者はそれを記録し、許容範囲と判断し、次の飛行での「許容範囲」を広げた。どの段階も筋が通っており、承認を経ていた。逸脱は組織の通常の手続きを通って標準になった。だから誰もリスクを取っているとは感じなかった。
- **対立概念:** **エラーバジェット** — 逸脱がすべて前兆とは限らない。一つ残らず調べるチームは出荷が止まり、やがて調査そのものを無視し始める。許容量を合意しておけば、本物の警報が埋もれない。
- **判断の指針:** チェックが失敗したのに出荷するなら、誰が、なぜ決め、いつ見直すかを書き残せ。ポストモーテムでは、過去のどの例外が今回を当たり前に見せたのかを問え。
- **出典:** Diane Vaughan『The Challenger Launch Decision: Risky Technology, Culture, and Deviance at NASA』(University of Chicago Press, 1996、増補版 2016、本項のリンク先)。チャレンジャー号の O リングをめぐる判断の分析から生まれたこの用語の出典。 — [原典 ↗](https://www.press.uchicago.edu/ucp/books/book/chicago/C/bo22781921.html)
- **関連:** [スイスチーズモデル (Swiss Cheese Model)](#スイスチーズモデル-swiss-cheese-model) · [通常事故理論 (Normal Accident Theory)](#通常事故理論-normal-accident-theory) · [ボーイスカウトの規則 (Boy Scout Rule)](#ボーイスカウトの規則-boy-scout-rule) · [正常性バイアス (Normalcy Bias)](#正常性バイアス-normalcy-bias) · [割れ窓理論 (Broken Windows Theory)](#割れ窓理論-broken-windows-theory) · [非難なきポストモーテム (Blameless Postmortem)](#非難なきポストモーテム-blameless-postmortem) · [エラーバジェット (Error Budget)](#エラーバジェット-error-budget) · [アンドン（ラインを止める） (Andon (Stop the Line))](#アンドンラインを止める-andon-stop-the-line)

### チェスタトンの柵 (Chesterton's Fence)

`§ 03` · システム

- **概念:** 経緯を知らないコードやルールは無駄に見え、理由も知らずに消したくなる。
- **メカニズム:** ルールやコードの分岐が記録しているのは問題への答えであって、問題そのものではない。それが防いでいる障害、それが書かれた相手の顧客、それを足した人はファイルにはまず残っていないので、答えは雑音に見える。消すのは安くて一瞬だ。コストは後から、たいてい別の誰かに、元の問題が戻ってきたときに来る。
- **対立概念:** **期限を切った考古学** — この規則を絶対に適用すれば何ひとつ削除できなくなる。理由を知っていた人と一緒に、理由そのものが去っていることもある。
- **判断の指針:** その「柵（コード/ルール）」がなぜそこに立てられたのかを説明できるようになるまで壊してはならない——ただし、その調査には期限を切れ。期限が切れたら、ロールバックを用意してフラグの裏で外し、何が苦情を上げるかを見よ。
- **出典:** G. K. Chesterton『The Thing』(1929)。道に立つ柵の寓話の出典。 — [原典 ↗](https://www.chesterton.org/taking-a-fence-down/)
- **関連:** [イーグルソンの法則 (Eagleson's Law)](#イーグルソンの法則-eaglesons-law) · [YAGNI (YAGNI)](#yagni-yagni)

### 正常性バイアス (Normalcy Bias)

`§ 04` · 認知

- **概念:** 本物の異常を前にしても、人はいつもの無害な説明に飛びつく。
- **メカニズム:** たいていの異常は本当にいつものことなので、いつもの説明はたいてい当たり、人はそれに手を伸ばすことを覚える。本物の緊急事態では、その習慣が遅れになる。人は確証を探し、周りに確かめ、やりかけのことを片付けてから動く。障害対応では、データベースが壊れていく最中に「たぶん一時的なネットワークの瞬断だろう」という形で現れる。
- **対立概念:** **アラーム疲れ** — 異常のたびに崩壊の始まりとして扱えばオンコールが燃え尽き、何でもエスカレーションする人はやがて相手にされなくなる。たいていの異常は本当にいつものことだ。
- **判断の指針:** 異常が起きたとき、「これがシステム全壊の始まりだとしたら、次の 10 分で何が起きるか？」を問え。その答えが恐ろしいなら、今すぐ調査せよ。
- **出典:** 特定の提唱者はいない。避難が遅れる理由を調べた災害研究から生まれた言葉である。Amanda Ripley『The Unthinkable: Who Survives When Disaster Strikes — and Why』(Crown, 2008) が本項の拠り所で、世界貿易センターでの避難の遅れも扱う。広瀬弘忠『人はなぜ逃げおくれるのか ―災害の心理学』(集英社新書, 2004) も同じ現象を扱う。 — [原典 ↗](https://en.wikipedia.org/wiki/Normalcy_bias)
- **関連:** [マーフィーの法則 (Murphy's Law)](#マーフィーの法則-murphys-law) · [逸脱の常態化 (Normalization of Deviance)](#逸脱の常態化-normalization-of-deviance) · [オッカムの剃刀 (Occam's Razor)](#オッカムの剃刀-occams-razor)

### パーキンソンの凡俗法則 (Law of Triviality)

`§ 05` · 組織

- **概念:** 議論は重要な部分ではなく、誰でも口を出せる簡単な部分に集中する。
- **メカニズム:** Parkinson の委員会は、原子炉の計画を数分で承認し、自転車置き場には 45 分かける。自転車置き場なら誰でも思い描けるが、原子炉を判断できるのは一部の人だけだからだ。分かることに口を出すと貢献した気になれる。議論のコストは議題によらず同じなので、注意は最も重要な議題ではなく、最も口を出しやすい議題に流れる。
- **対立概念:** **名前はインタフェースである** — 議論しやすい小さなことが、変えられないことである場合もある。公開 API の名前や設定キーは、議論は安く、リリース後に変えるのは高い。
- **判断の指針:** ツールで決められること（整形、import の順序、lint ルール）は人のレビューから外せ。レビューのやり取りがスタイルばかりになったら打ち切り、変更のうち最もリスクの高い部分について一つ質問せよ。会議では、金額やリスクの最も大きい議題を先頭に置け。
- **出典:** C. Northcote Parkinson『Parkinson's Law and Other Studies in Administration』(Houghton Mifflin, 1957) 所収「High Finance, or the Point of Vanishing Interest」。自転車置き場の委員会の寓話の出典。英国版は『Parkinson's Law: The Pursuit of Progress』(John Murray, 1958)。 — [原典 ↗](https://en.wikipedia.org/wiki/Law_of_triviality)
- **関連:** [パーキンソンの法則 (Parkinson's Law)](#パーキンソンの法則-parkinsons-law) · [反対してもコミットする (Disagree and Commit)](#反対してもコミットする-disagree-and-commit) · [コードの健全性を上げるなら承認する (Approve What Improves Code Health)](#コードの健全性を上げるなら承認する-approve-what-improves-code-health)

### ガルの法則 (Gall's Law)

`§ 06` · システム

- **概念:** 動く複雑なシステムは、たいてい動く単純なシステムから育ったものだ。最初から設計したものが動くことはまれだ。
- **メカニズム:** ゼロから書いた設計は、部品間のあらゆる相互作用を予見しなければならない。だが複雑なシステムの相互作用のほとんどは、動かして初めて分かる。うまく動く単純なシステムは、相互作用がすでに使われることで試されており、そこへの追加は既知のものへの小さな変更で済む。丸ごと設計したシステムは、投資を終えた後で、すべての相互作用を一度に発見しなければならない。
- **対立概念:** **おもちゃから育てられないシステムもある** — 決済の元帳、安全インターロック、独立実装の多いプロトコルは最初の版から正しくなければならない。本番で進化させるとは、誤った版を本物のお金や人に対して動かすことだ。
- **判断の指針:** 本物の仕事を端から端まで一つこなす最小の版を出し、動いたままの状態を保つ段階を踏んで育てよ。書き直しが提案されたら、どの動いているシステムから育てるのかを問え。
- **出典:** John Gall『General Systemantics: An Essay on How Systems Work, and Especially How They Fail』(General Systemantics Press, 1975)。『Systemantics: How Systems Work and Especially How They Fail』(Quadrangle, 1977) として再刊。「うまく動く複雑なシステムは、例外なく、うまく動く単純なシステムから進化したものである」の出典。 — [原典 ↗](https://en.wikipedia.org/wiki/John_Gall_(author))
- **関連:** [劣っている方が勝つ (Worse is Better)](#劣っている方が勝つ-worse-is-better) · [YAGNI (YAGNI)](#yagni-yagni) · [セカンドシステム症候群 (Second-System Effect)](#セカンドシステム症候群-second-system-effect) · [ストラングラーフィグ (Strangler Fig)](#ストラングラーフィグ-strangler-fig)

### コンウェイの法則 (Conway's Law)

`§ 07` · 組織

- **概念:** システムの構造は、作るチーム同士の意思疎通の形に似てくる。
- **メカニズム:** システムのインタフェースは、どれもその両側にいる人たちが合意しなければならない。毎日話す人どうしなら、インタフェースは細かく、頻繁に変えられる。めったに話さない人どうしなら、粗く、形式張り、変えにくくなる。だから作りやすい境界は意思疎通の経路に沿った境界であり、誰が意図しようとしまいと、設計はそこに収束する。
- **対立概念:** **まずモノリス** — チームごとにサービスを持たせれば、分散システムのコストまで持ち込む。組織図がどうであれ、一つのチームが一つのデプロイ単位を持つべき場合もある。
- **判断の指針:** モジュール化されたアーキテクチャが欲しいなら、先にチームを独立したモジュールとして再編せよ。組織構造とコードで戦うな。
- **出典:** Melvin E. Conway『How Do Committees Invent?』(Datamation, 1968 年 4 月号)。 — [原典 ↗](https://www.melconway.com/Home/Committees_Paper.html)
- **関連:** [ダンバー数 (Dunbar's Number)](#ダンバー数-dunbars-number) · [ブルックスの法則 (Brooks' Law)](#ブルックスの法則-brooks-law) · [単一責任の原則 (Single Responsibility Principle)](#単一責任の原則-single-responsibility-principle) · [作った者が運用する (You Build It, You Run It)](#作った者が運用する-you-build-it-you-run-it) · [統制ではなく文脈を (Context, Not Control)](#統制ではなく文脈を-context-not-control)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../assets/diagrams/conways-law-ja-dark.svg">
  <img alt="2つのチーム構造と、それぞれが生むアーキテクチャ" src="../assets/diagrams/conways-law-ja-light.svg">
</picture>

アーキテクチャはコミュニケーション構造の下流にある。紙の上の組織図ではなく、実際に誰が誰と話しているかのほうだ。チームを引き直せば継ぎ目もついてくる。図だけを引き直せば、古い継ぎ目が生えてくる。

### ハイラムの法則 (Hyrum's Law)

`§ 08` · システム

- **概念:** 利用者が十分に多ければ、バグも含めた観測可能な挙動すべてに誰かが依存する。
- **メカニズム:** 契約が述べるのは約束したことで、利用者が見るのは実際に起きることだ。応答の順序、タイミング、エラーメッセージの文面、丸めの細部。どれも観測でき、利用者が十分に多ければ、誰かがそのどれかに依存する。たいていは約束されていなかったとは知らずに。コストを負うのは保守する側で、「安全な」内部変更が顧客を壊したときに初めて依存に気づく。
- **対立概念:** **意図的なゆらぎ** — 観測可能な挙動すべてを不可侵とすれば何も変えられなくなる。約束していない部分は意図的に揺らせ——反復順序のランダム化、計画的な停止——そうすれば依存はそもそも生まれない。
- **判断の指針:** 利用者がいる限り「内部実装」は存在しない。約束した部分はバージョニングと機能フラグで守り、約束していない部分は意図的に揺らして、そもそも依存させるな。
- **出典:** Hyrum Wright『hyrumslaw.com』。『Software Engineering at Google』(Winters, Manshreck, Wright, 2020) で正式化された。 — [原典 ↗](https://www.hyrumslaw.com/)
- **関連:** [ポステルの法則 (Postel's Law)](#ポステルの法則-postels-law) · [驚き最小の原則 (Principle of Least Astonishment)](#驚き最小の原則-principle-of-least-astonishment) · [ビヨンセ・ルール (Beyoncé Rule)](#ビヨンセルール-beyoncé-rule) · [チャーンルール (Churn Rule)](#チャーンルール-churn-rule)

### ブルックスの法則 (Brooks' Law)

`§ 09` · 組織

- **概念:** 遅れたプロジェクトに人を足すと、立ち上がりと調整のコストが寄与を上回り、かえって遅れがちだ。
- **メカニズム:** 遅れているプロジェクトに人を足すと、調整のコストは人数のほぼ二乗で増える（n 人なら n(n-1)/2 本の経路）。新しく入った人はベテランの時間を奪い、しばらくは貢献より損失のほうが大きい。
- **対立概念:** **分割できる仕事** — Brooks 自身、この法則を「とんでもなく単純化すれば」と断って述べている。早い段階で、ほとんど意思疎通なしにきれいに分けられる仕事に人を足せば、速くなる。
- **判断の指針:** プロジェクトが遅れたら、まずスコープを削るか期限を動かせ。人を足すのは、きれいに分けられて、ベテランの日々の手助けなしに始められる仕事に限り、しかも最後の月ではなく早めにせよ。
- **出典:** Fred Brooks『人月の神話 (The Mythical Man-Month)』(Addison-Wesley, 1975、20 周年記念版 1995) 第 2 章。この法則が述べられた箇所の出典。 — [原典 ↗](https://en.wikipedia.org/wiki/Brooks%27s_law)
- **関連:** [コンウェイの法則 (Conway's Law)](#コンウェイの法則-conways-law) · [ダンバー数 (Dunbar's Number)](#ダンバー数-dunbars-number) · [セカンドシステム症候群 (Second-System Effect)](#セカンドシステム症候群-second-system-effect) · [メトカーフの法則 (Metcalfe's Law)](#メトカーフの法則-metcalfes-law)

### XY問題 (XY Problem)

`§ 10` · 認知

- **概念:** 人は本当の問題ではなく、自分が思いついた解決策について助けを求める。
- **メカニズム:** いったん手段を選ぶと、その手段が頭の中で問題そのものになり、人は目的ではなく失敗した一歩について質問する。助ける側には Y しか見えないので Y に答え、別のやり方なら X ごと消えたはずの問題に、双方が一時間を費やす。
- **対立概念:** **聞かれたことに答える** — 質問者が X をすでに検討し尽くし、説明する義理のない理由で Y を必要としていることもある。毎回問い詰めるのは見下した態度であり、分かっている人の足を引っ張る。
- **判断の指針:** 「Y はどうやるのか」と聞かれたら、手短に答えられるなら Y に答え、そのうえで一度だけ何を達成したいのかを聞け。
- **出典:** Perl IRC やシステム管理者コミュニティ発の口承。標準的な解説は『xyproblem.info』。 — [原典 ↗](https://xyproblem.info/)
- **関連:** [知識の呪い (Curse of Knowledge)](#知識の呪い-curse-of-knowledge) · [ワーキング・バックワーズ (Working Backwards)](#ワーキングバックワーズ-working-backwards) · [なぜなぜ分析 (Five Whys)](#なぜなぜ分析-five-whys)

### ポステルの法則 (Postel's Law)

`§ 11` · 分散システム

- **概念:** 相手が仕様どおりに動く前提のシステムは、最初の逸脱にもろくなりがちだ。
- **メカニズム:** 仕様は不完全で、実装は別々の人が別々の時期に書く。少しでも外れた入力を拒む受信側は、仕様を違うふうに読んだ最初の相手で壊れる。厳格な中核だけを送る送信側は、受信側が食い違う余地を最小にする。Postel のこの非対称は、仕様が固まる前の初期インターネットの実装どうしが相互運用する助けになった。
- **対立概念:** **堅牢なプロトコルの維持（RFC 9413）** — 不正な入力を許すと壊れた送信側がそのまま出荷され、受信側はみな同じ寛容さを真似るしかなくなり、事実上のプロトコルが仕様から離れていく。IAB は今では、寛容さが恒久化しないよう仕様を保守し続けることを設計者に求め、不正な入力を黙って受け流すのはほぼ常に誤った対処だとしている。
- **判断の指針:** 送るものは仕様どおりにせよ。受け取る側の小さな逸脱は、文書化しログに残す場合に限って境界で受け入れ、受け入れをやめる期日を決めよ。
- **出典:** Jon Postel『RFC 761』(DoD Standard TCP, 1980 年 1 月) §2.10。"be conservative in what you do, be liberal in what you accept from others" の出典。同じ趣旨は『RFC 760』(IP) §3.2 に別の言い回しで、『RFC 793』(1981) に同文で再掲される。 — [原典 ↗](https://www.rfc-editor.org/rfc/rfc761)
- **関連:** [ハイラムの法則 (Hyrum's Law)](#ハイラムの法則-hyrums-law) · [分散コンピューティングの誤謬 (Fallacies of Distributed Computing)](#分散コンピューティングの誤謬-fallacies-of-distributed-computing)

### ハンロンの剃刀 (Hanlon's Razor)

`§ 12` · 組織

- **概念:** 疲労や文脈不足で説明がつく遅れやバグに、人は悪意を読み取ってしまう。
- **メカニズム:** チームの中で、自分の仕事に影響する人たちの事情はほとんど見えない。見えるのは壊れたビルドで、明け方 4 時に彼らを起こした呼び出しや、彼らが知らされなかった要件は見えない。物語の欠けた部分を「意図」が埋め、最も鮮やかな意図が悪意だ。それに基づいて動けば、直せたはずの文脈の欠落が、人と人との対立に変わる。
- **対立概念:** **侵害を前提にする** — 悪意による失敗もあり、攻撃者は正直なミスに見えることを当てにする。xz utils のバックドア（2024 年）は、親切で辛抱強い貢献者から来た。
- **判断の指針:** 失敗を意図のせいにする前に、その人がその時点で何を見ることができたかを確かめ、欠けていたものを直せ。意図を問題にするのは証拠があるときだけにし、そのときも一対一で行え。
- **出典:** Robert J. Hanlon が『Murphy's Law Book Two』(Arthur Bloch 編, 1980) に寄稿した格言。 — [原典 ↗](https://en.wikipedia.org/wiki/Hanlon%27s_razor)
- **関連:** [傍観者効果 (Bystander Effect)](#傍観者効果-bystander-effect) · [オッカムの剃刀 (Occam's Razor)](#オッカムの剃刀-occams-razor) · [非難なきポストモーテム (Blameless Postmortem)](#非難なきポストモーテム-blameless-postmortem)

### ホフスタッターの法則 (Hofstadter's Law)

`§ 13` · 見積り

- **概念:** 作業は見積りより長くかかる。それを織り込んで見積もってもなお長くかかる。
- **メカニズム:** 「ホフスタッターの法則を考慮に入れても、いつも予想より長くかかる」。見積りは思い描ける手順から組み立てられ、思い描けない手順（統合時の想定外、手戻り、他人待ち）こそが抜け落ちる。それを内側から補正しようとしても同じ理由で失敗する。補正できるのは、すでに想像できる想定外だけだからだ。
- **対立概念:** **パーキンソンの法則** — 見積りに余裕を足しても、その余裕は貯金されない。仕事のほうが膨らんで埋めるので、甘い見積りもきつい見積りと同じくらい遅れる。
- **判断の指針:** 見積りは、今の見た目ではなく、似た過去の作業に実際にかかった時間から出せ。期限が危うくなったとき削るスコープを最初に書いておき、終盤だけでなくマイルストーンごとに見積り直せ。
- **出典:** Douglas Hofstadter『ゲーデル、エッシャー、バッハ — あるいは不思議の環 (Gödel, Escher, Bach)』(Basic Books, 1979)。この法則が述べられた箇所の出典。 — [原典 ↗](https://en.wikipedia.org/wiki/Hofstadter%27s_law)
- **関連:** [90対90の法則 (Ninety-Ninety Rule)](#90対90の法則-ninety-ninety-rule) · [パーキンソンの法則 (Parkinson's Law)](#パーキンソンの法則-parkinsons-law) · [時間を固定し、スコープを変える (Fixed Time, Variable Scope)](#時間を固定しスコープを変える-fixed-time-variable-scope)

### グッドハートの法則 (Goodhart's Law)

`§ 14` · インセンティブ

- **概念:** 数字を動かすことに報酬がつくと、その数字は実態を測らなくなる。
- **メカニズム:** Marilyn Strathern の言い回しでは「ある指標が目標になると、それは良い指標ではなくなる」。数字が役に立つのは、気にかけている実態と一緒に動くからだ。数字に報酬がつくと、人は実態には手を付けずに数字だけを動かす安い方法を見つける。「コミット数」で評価すれば、意味のない小さなコミットが量産される。
- **対立概念:** **バランスト・スコアカード** — それでも数字なしでは舵を取れない。同時には操作しにくい複数の指標を、仕事そのものと並べて読めば、測らないよりも長く信号が保てる。
- **判断の指針:** 単一の指標でパフォーマンスを判断するな。システムの「出力」そのものを観察し、その代用指標（プロキシ）に固執するな。
- **出典:** Charles Goodhart『Problems of Monetary Management: The U.K. Experience』(Papers in Monetary Economics, Reserve Bank of Australia, 1975)。元の法則の出典。よく引用される「指標が目標になると」の言い回しは Marilyn Strathern『'Improving ratings': audit in the British University system』(European Review, 1997) による。 — [原典 ↗](https://en.wikipedia.org/wiki/Goodhart%27s_law)
- **関連:** [コブラ効果 (Cobra Effect)](#コブラ効果-cobra-effect) · [シャーキーの原理 (Shirky Principle)](#シャーキーの原理-shirky-principle) · [エラーバジェット (Error Budget)](#エラーバジェット-error-budget) · [善意ではなく仕組み (Mechanisms, Not Good Intentions)](#善意ではなく仕組み-mechanisms-not-good-intentions)

### リンディ効果 (Lindy Effect)

`§ 15` · システム

- **概念:** アイデアやソフトウェアは、長く生き残ったものほどこの先も長く残る可能性が高い。
- **メカニズム:** 摩耗しないものにとって、生き延びた一年一年は、ほかの選択肢を消してきた試練を通り抜けた証拠だ。ハードウェアの変化、流行、保守者の交代、規模の変化。20 年続いたソフトウェアは、バグが見つかり、エッジケースが文書化され、運用者が育っている。新しい道具はまだ試されていないので、どれほど良く見えても、残りの寿命の見込みは短い。
- **対立概念:** **土台は変わる** — 年齢が示すのは過去の条件の下で生き延びたことだ。ハードウェアや規模や脅威モデルが変われば、長寿の選択肢こそがもう存在しない世界に最適化されていることもある。
- **判断の指針:** 今後 10 年安定させたいなら、すでに 10 年存在してきた技術（例：新しい NoSQL より PostgreSQL）を選べ。
- **出典:** Albert Goldman が命名 (New Republic, 1964)。Benoit Mandelbrot が形式化し、Nassim Taleb『Antifragile』(2012) で広まった。 — [原典 ↗](https://en.wikipedia.org/wiki/Lindy_effect)
- **関連:** [劣っている方が勝つ (Worse is Better)](#劣っている方が勝つ-worse-is-better) · [アマラの法則 (Amara's Law)](#アマラの法則-amaras-law) · [退屈な技術を選べ (Choose Boring Technology)](#退屈な技術を選べ-choose-boring-technology)

### サンクコストの誤謬 (Sunk Cost Fallacy)

`§ 16` · 意思決定

- **概念:** すでに注ぎ込んだ分が惜しくて、失敗しているプロジェクトに投資し続ける。
- **メカニズム:** プロジェクトを止めると、使ったお金は「投資」から「損失」に変わり、誰かがその損失を公に引き受けなければならない。続ければその告白は先送りされ、正しかったと証明される可能性も生き残る。Arkes と Blumer は、自分で劇場のチケットを買う人にもこの効果を見つけた。定価で買った人は、割引で買った人より多く観劇に足を運んだ。
- **対立概念:** **J カーブ** — 価値あるプロジェクトの多くは途中がいちばん悪く見える。最初の谷で何でも打ち切るチームは何も完成させない。過去の投資は判断材料にならないが、完成までの残りのコストは小さいかもしれない。
- **判断の指針:** 「もし今日、ゼロから始めるとしたら、この道を選ぶか？」と問え。答えが NO なら、やめよ。
- **出典:** Hal R. Arkes & Catherine Blumer『The Psychology of Sunk Cost』(Organizational Behavior and Human Decision Processes, 1985)。 — [原典 ↗](https://doi.org/10.1016/0749-5978(85)90049-4)
- **関連:** [タイプ 1／タイプ 2 の意思決定 (Type 1 vs Type 2 Decisions)](#タイプ-1タイプ-2-の意思決定-type-1-vs-type-2-decisions) · [時間を固定し、スコープを変える (Fixed Time, Variable Scope)](#時間を固定しスコープを変える-fixed-time-variable-scope)

### カーゴ・カルト・エンジニアリング (Cargo Cult Engineering)

`§ 17` · 認知

- **概念:** うまくいった理由を理解しないまま、他社のやり方の形だけを真似る。
- **メカニズム:** やり方は目に見えるが、それをうまくいかせた条件は見えない。他社のプロセスや道具やチームの組み方は、規模、人、抱えていた問題といった元を取らせた条件抜きで「何をしているか」として公開される。だから真似しても形が再現されるだけで、条件は再現されない。Feynman が描いた島の人々は滑走路と管制小屋と木製のヘッドフォンを作ったが、飛行機は降りてこなかった。
- **対立概念:** **実績あるやり方** — すべてを第一原理から導くと、他人が苦労して得た教訓を捨てることになる。うまくいくと広く知られたやり方を真似るほうが、作り直すよりたいてい安い。
- **判断の指針:** Googleが使っているからという理由で導入するな。そのスケールにおけるGoogleと同じ問題が自分たちにあるから、導入せよ。
- **出典:** Richard P. Feynman『Cargo Cult Science』(Caltech 卒業式講演, 1974)。 — [原典 ↗](https://calteches.library.caltech.edu/51/2/CargoCult.htm)
- **関連:** [生存者バイアス (Survivorship Bias)](#生存者バイアス-survivorship-bias) · [苦い教訓 (The Bitter Lesson)](#苦い教訓-the-bitter-lesson)

### アムダールの法則 (Amdahl's Law)

`§ 18` · 性能

- **概念:** ボトルネックが別の場所にあれば、一部を速くしても全体はほとんど速くならない。
- **メカニズム:** 仕事のうち割合 s が並列化も高速化もできないなら、残りをどれだけ改善しても、全体は 1/s 倍より速くならない。逐次部分が 5% なら、プロセッサを無限に足しても最大 20 倍だ。並列化できる部分への労力は効果が逓減し、上限は逐次部分が決める。
- **対立概念:** **グスタフソンの法則** — 問題の規模が計算機とともに大きくなるなら、逐次部分の割合は縮み、速度向上は伸び続ける。
- **判断の指針:** 実行時間の90%を占める1%のコードを見つけ、そこだけを最適化せよ。それ以外は無視してよい。
- **出典:** Gene Amdahl『Validity of the Single Processor Approach to Achieving Large Scale Computing Capabilities』(AFIPS, 1967)。 — [原典 ↗](https://doi.org/10.1145/1465482.1465560)
- **関連:** [グスタフソンの法則 (Gustafson's Law)](#グスタフソンの法則-gustafsons-law) · [早すぎる最適化 (Premature Optimization)](#早すぎる最適化-premature-optimization) · [制約理論 (Theory of Constraints)](#制約理論-theory-of-constraints)

### リーキー・アブストラクション (Law of Leaky Abstractions)

`§ 19` · システム

- **概念:** 込み入った抽象化はいずれ、隠したはずの下の層の詳細を露出させる。
- **メカニズム:** 抽象化は、下の層がおとなしく振る舞うと仮定して詳細を隠す。だが下の層がおとなしいのはたいていの場合でしかない。TCP はケーブルが切れるまでパケットの喪失を隠し、SQL はインデックスの欠落でクエリが数ミリ秒から数分になるまでアクセス経路を隠す。仮定が崩れると、問題は隠していた層の言葉で現れ、それを読めるのはその層を理解している人だけだ。
- **対立概念:** **情報隠蔽** — 抽象化の利用者のほとんどは漏れに出会わない。下に何があるかをほとんどの人が学ばずに済むことこそが層の価値だ（Parnas, 1972）。
- **判断の指針:** 抽象化を利用して加速せよ。ただし、チーム内に少なくとも一人は、その下の層で何が起きているか理解している人間を置け。
- **出典:** Joel Spolsky『The Law of Leaky Abstractions』(Joel on Software, 2002)。 — [原典 ↗](https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/)
- **関連:** [テスラーの複雑性保存則 (Tesler's Law)](#テスラーの複雑性保存則-teslers-law) · [デメテルの法則 (Law of Demeter)](#デメテルの法則-law-of-demeter)

### パレートの法則 (Pareto Principle)

`§ 20` · 意思決定

- **概念:** 結果の大半は、少数の原因から生まれる。バグの多くは一部のコードに集中する。
- **メカニズム:** 原因が均等に散らばることはめったにない。Pareto はイタリアの土地所有でそれに気づき、Juran は品質管理に一般化して「重要な少数と些細な多数」と呼んだ。ソフトウェアでも、欠陥や負荷、問い合わせは一部のモジュール、エンドポイント、顧客に集中しやすい。比率がちょうど 80 対 20 になることはまれだが、偏りはたいてい大きく、均等に手をかけるより順位を付けたほうが効く。
- **対立概念:** **ロングテール** — 小さな原因も数が多ければ、少数の大きな原因を合計で上回ることがある。可用性やセキュリティでは、後回しにしたまれな経路から障害や侵害が来る。
- **判断の指針:** 品質改善を始める前に、直近の四半期の欠陥やインシデントの件数でモジュールを並べ、上から手を付けよ。順位は四半期ごとに付け直せ。重要な少数は入れ替わる。
- **出典:** Vilfredo Pareto『Cours d'Économie Politique』(1896)。品質工学への応用は Joseph M. Juran『Quality Control Handbook』(1951)。 — [原典 ↗](https://en.wikipedia.org/wiki/Pareto_principle)
- **関連:** [早すぎる最適化 (Premature Optimization)](#早すぎる最適化-premature-optimization)

### 生存者バイアス (Survivorship Bias)

`§ 21` · 認知

- **概念:** 成功例だけから結論を出すと、同じやり方で失敗した例が見えなくなる。
- **メカニズム:** 成功談が見つけやすいのは、成功した側がまだ残っていて語れるからだ。同じやり方で失敗したプロジェクトは、ブログ記事も講演も事例研究も残さない。生き残ったものから作った標本は、どれも生き残りやすさの方向に偏る。Wald の爆撃機が典型例だ。帰還した機体が示していたのは被弾しても戻れる場所であり、装甲が要るのは帰還機に穴がなかった場所だった。
- **対立概念:** **成功から学ぶ（Safety-II）** — 失敗だけを調べると、なぜ普段はうまくいくのかを見落とす。たいていの場合、同じ雑なやり方が成功しており、それもまた証拠だ。
- **判断の指針:** 「X社がこの方法で成功した」を根拠にする前に、同じ方法で失敗した企業を調べよ。死者はブログ記事を書かない。
- **出典:** Abraham Wald『A Method of Estimating Plane Vulnerability Based on Damage of Survivors』(Statistical Research Group, Columbia University, 1943、Center for Naval Analyses が 1980 年に再刊)。第二次大戦時の爆撃機の装甲分析の出典。 — [原典 ↗](https://en.wikipedia.org/wiki/Survivorship_bias)
- **関連:** [カーゴ・カルト・エンジニアリング (Cargo Cult Engineering)](#カーゴカルトエンジニアリング-cargo-cult-engineering) · [アマラの法則 (Amara's Law)](#アマラの法則-amaras-law)

### カーニハンの法則 (Kernighan's Law)

`§ 22` · 保守性

- **概念:** デバッグは書くより難しい。最大限に凝ったコードは、自分ではデバッグできない。
- **メカニズム:** Kernighan と Plauger の原文はこうだ。「デバッグがそもそもプログラムを書くことの 2 倍難しいのは誰でも知っている。だから、書くときに精一杯賢く書いたら、いったいどうやってデバッグするのか」。書くときは設計全体が頭に入っている。デバッグは症状から始まり、たいてい数か月後に、ときには別の人が、コードだけからその文脈を組み立て直す。書く手間を縮めた技巧はどれも、その組み立て直しを長くする。
- **対立概念:** **抽象化のてこ** — 凝った版が、短くて正しい版であることもある。うまく選んだデータ構造やライブラリは、「単純な」手書きのループが抱えたままの種類のバグを丸ごと消す。
- **判断の指針:** レビューでは、次のオンコール担当が作者なしでそのコードを説明できるかを問え。残す価値のある技巧なら、名前を付け、解説へのリンクを置き、振る舞いを固定するテストを足せ。
- **出典:** Brian W. Kernighan & P. J. Plauger『The Elements of Programming Style』第 2 版 (McGraw-Hill, 1978) 第 2 章。原文の出典。「定義上、デバッグするだけの賢さが足りない」という形は後世の言い換えである。 — [原典 ↗](https://en.wikipedia.org/wiki/The_Elements_of_Programming_Style)
- **関連:** [イーグルソンの法則 (Eagleson's Law)](#イーグルソンの法則-eaglesons-law) · [KISS の原則 (KISS Principle)](#kiss-の原則-kiss-principle)

### コブラ効果 (Cobra Effect)

`§ 23` · インセンティブ

- **概念:** 問題を減らすための報酬が、問題を増やす行動に報いてしまう。
- **メカニズム:** 報奨金が支払われるのは問題の「証拠」に対してであり、問題が消えたことに対してではない。そして証拠は、成果よりたいてい安く作れる。Siebert はこの効果を、英領インドのデリーでコブラに懸賞金をかけたら養殖が始まったという逸話から名付けたが、この逸話に記録上の裏付けはない。記録に残る例は 1902 年のハノイだ。フランス当局がネズミの尻尾に報奨金を出すと、人々は尻尾だけ切ってネズミを放して繁殖させ、市外では養殖まで始まった。報奨金が終わると、それが生んだ「在庫」が放たれ、問題は前より大きくなる。
- **対立概念:** **インセンティブはたいてい効く** — 報奨金や目標の多くは、意図した方向に行動を動かす。悪用されうるからと成果に報いなければ、問題に誰もお金を払わないままになる。
- **判断の指針:** インセンティブを作るたびに、問題を直さずに報酬を得る方法を問え。可能なら証拠ではなく成果に支払い、終わらせ方を先に決めよ。
- **出典:** Horst Siebert『Der Kobra-Effekt: Wie man Irrwege der Wirtschaftspolitik vermeidet』(DVA, 2001)。この効果の命名の出典。記録に残るハノイの例は Michael G. Vann『Of Rats, Rice, and Race: The Great Hanoi Rat Massacre』(French Colonial History, 2003) による。 — [原典 ↗](https://en.wikipedia.org/wiki/Perverse_incentive)
- **関連:** [グッドハートの法則 (Goodhart's Law)](#グッドハートの法則-goodharts-law) · [ジェヴォンズのパラドックス (Jevons Paradox)](#ジェヴォンズのパラドックス-jevons-paradox)

### ダンバー数 (Dunbar's Number)

`§ 24` · 組織

- **概念:** 人が安定して保てる関係は150人ほどだ。工学ではそこから、文脈を共有できる規模を超えると増員は調整に消える、と推し量る。
- **メカニズム:** 人間が安定した社会関係を維持できる認知限界は約150人。ダンバーの結果は霊長類全般における新皮質サイズと群れの大きさの関係についてであって、仕事のチームについてではない。エンジニアリングがそこから外挿しているのは別の議論だ——コミュニケーション経路は n(n-1)/2 で増えるので、全員が全員の文脈をまだ保持できる規模を超えた時点から、増えた人員は成果ではなく調整に消える。
- **対立概念:** **インタフェースによる協調** — 部品間のインタフェースが十分に安定していて、ほとんどの人が互いの文脈を必要としないなら、大きな集団でも一貫したシステムを出せる（Linux カーネルには数千人の貢献者がいる）。
- **判断の指針:** 数字ではなく症状を見よ。チームの誰もが他の全員の作業を言えなくなったり、状況共有の会議が増え始めたりしたら、システムの継ぎ目に沿ってチームを分けよ。具体的な人数の上限は慣習であって知見ではないと心得よ。
- **出典:** Robin I. M. Dunbar『Neocortex size as a constraint on group size in primates』(Journal of Human Evolution, 1992)。併せて引かれる小さいチーム規模の数字 (7±2、ツー・ピザ・ルール) はダンバーの知見ではなく、通俗的な外挿である。 — [原典 ↗](https://doi.org/10.1016/0047-2484(92)90081-J)
- **関連:** [コンウェイの法則 (Conway's Law)](#コンウェイの法則-conways-law) · [ブルックスの法則 (Brooks' Law)](#ブルックスの法則-brooks-law) · [ミラーの法則 (Miller's Law)](#ミラーの法則-millers-law) · [メトカーフの法則 (Metcalfe's Law)](#メトカーフの法則-metcalfes-law) · [リンゲルマン効果 (Ringelmann Effect)](#リンゲルマン効果-ringelmann-effect)

### 劣っている方が勝つ (Worse is Better)

`§ 25` · システム

- **概念:** 作りやすく広めやすい単純な設計は、正しいが複雑な設計に勝ちやすい。
- **メカニズム:** 理論的に「正しい」が複雑な設計よりも、単純で「不完全」だが実装と採用が容易な設計の方が、現実世界では勝利する。UnixはLispに勝ち、HTTPはCORBAに勝った。
- **対立概念:** **正しいもの（The Right Thing）** — Gabriel 自身が対置した考え方。プロトコル、ファイル形式、セキュリティ境界のように後から変えにくいインタフェースでは、先に出すことより先に正しくすることが効く。
- **判断の指針:** 利用者がその上に何かを作るものは、何年も付き合えるインタフェースを持つ最も単純な版で出せ。実装は単純に保ち、手間はインタフェースにかけよ。
- **出典:** Richard P. Gabriel『Lisp: Good News, Bad News, How to Win Big』(1991)。「Worse is Better」の節の出典。 — [原典 ↗](https://www.dreamsongs.com/RiseOfWorseIsBetter.html)
- **関連:** [ガルの法則 (Gall's Law)](#ガルの法則-galls-law) · [リンディ効果 (Lindy Effect)](#リンディ効果-lindy-effect) · [セカンドシステム症候群 (Second-System Effect)](#セカンドシステム症候群-second-system-effect)

### カニンガムの法則 (Cunningham's Law)

`§ 26` · 組織

- **概念:** 人は質問に答えるより、間違った答えを訂正するほうに熱心だ。
- **メカニズム:** 質問に答えるのは、見知らぬ人を助ける時間があると認めることだ。間違いを正すのは記録を守ることのように感じられ、しかも間違った答えがすでに骨組みを示しているので手間も少ない。だから、自信ありげな誤りには、開かれた質問には来ない返事が来る。この法則自体がその例だ。Cunningham 本人は否定しているが、今も彼の名で出回っている。
- **対立概念:** **誤答は残る** — 訂正が来るとは限らず、その間に誤答は複製され、検索に載る。共有ドキュメントでは、推測は推測だと明記しなければならない。
- **判断の指針:** ドキュメントがないときは、自分の理解を書いて「未確認」と明記し、知っていそうな人に送れ。
- **出典:** Steven McGeady が 2010 年に New York Times のブログに寄せたコメント。1980 年代初めに Ward Cunningham から Usenet について受けた助言として紹介した。Cunningham 本人は「インターネット上で Cunningham の法則として広まることで、自らの誤りを証明している誤引用だ」と否定している。 — [原典 ↗](https://meta.wikimedia.org/wiki/Cunningham%27s_Law)
- **関連:** [リーナスの法則 (Linus's Law)](#リーナスの法則-linuss-law)

### 傍観者効果 (Bystander Effect)

`§ 27` · 組織

- **概念:** 問題を目にする人が多いほど、一人ひとりが自分から動く可能性は下がる。
- **メカニズム:** 緊急事態において、居合わせる人数が多いほど、個々人が行動を起こす可能性は低くなる。「誰かが対応するだろう」と全員が思い、結果誰も対応しない。50 年分の研究をまとめたメタ分析（Fischer ら、Psychological Bulletin、2011 年）は、危険が明白な場面ではこの効果が弱まるとしたが、混み合ったチャンネルへの呼び出しが危険に見えることはまれだ。エンジニアリングでは、グループチャンネルへのアラートは往々にして無視される。
- **対立概念:** **単一障害点** — 毎回一人を名指しすると、その人がボトルネックになり、いなくなれば止まる。担当者は対応を調整する役であって、全部を自分でやる役ではない。
- **判断の指針:** 「誰か見てますか？」とは決して言うな。「@名前、あなたがこれを調査してください」と名指しで依頼せよ。すべてのインシデントに、名前のある単一のオーナーを割り当てよ。
- **出典:** John M. Darley & Bibb Latané『Bystander Intervention in Emergencies: Diffusion of Responsibility』(Journal of Personality and Social Psychology, 1968)。 — [原典 ↗](https://doi.org/10.1037/h0025589)
- **関連:** [ハンロンの剃刀 (Hanlon's Razor)](#ハンロンの剃刀-hanlons-razor) · [リンゲルマン効果 (Ringelmann Effect)](#リンゲルマン効果-ringelmann-effect) · [非難なきポストモーテム (Blameless Postmortem)](#非難なきポストモーテム-blameless-postmortem)

### マーフィーの法則 (Murphy's Law)

`§ 28` · 安全工学

- **概念:** 時間と負荷が十分にあれば、起こりうる故障はいずれ起きる。
- **メカニズム:** よく知られた形は「うまくいかない可能性があることは、必ずうまくいかない」。十分な時間・トラフィック・想定外の入力さえあれば、潜在的な失敗モードはいずれ必ず発火する。ハッピーパスだけを設計したシステムは、ネットワークの一瞬の揺れで崩れる。
- **対立概念:** **リスクの予算化** — 考えうる故障すべてに備えると、故障の一部より高くつく。起こりやすさとコストで故障モードを並べ、安くてまれなものは受け入れよ。
- **判断の指針:** 外部依存・リトライ・タイムアウトはすべて、本番でいつか必ず失敗するものとして扱え。成功パスより先に失敗パスを設計せよ。
- **出典:** Capt. Edward A. Murphy Jr. (USAF MX981 計画, 1949)。Maj. John Paul Stapp により広まった。原文の言い回しについては証言が食い違う。Nick T. Spark『A History of Murphy's Law』(2006) を参照。 — [原典 ↗](https://en.wikipedia.org/wiki/Murphy%27s_law)
- **関連:** [正常性バイアス (Normalcy Bias)](#正常性バイアス-normalcy-bias) · [分散コンピューティングの誤謬 (Fallacies of Distributed Computing)](#分散コンピューティングの誤謬-fallacies-of-distributed-computing) · [カオスエンジニアリング (Chaos Engineering)](#カオスエンジニアリング-chaos-engineering)

### ボーイスカウトの規則 (Boy Scout Rule)

`§ 29` · 保守性

- **概念:** 掃除はめったに来ないリファクタリングに先送りされがちで、コードは劣化していく。
- **メカニズム:** クリーンアップは常に「誰か別の人の仕事」になりがちで、コードベースは劣化していく。各エンジニアはエントロピー増加の影響だけ受けて、修正は「いつかのリファクタ」に先送りされ、それは結局来ない。
- **対立概念:** **1つの差分に1つの理由** — 振る舞いの変更に清掃が相乗りすると変更そのものが隠れる。ついでに40箇所リネームした PR は、誰にもレビューされない。
- **判断の指針:** コードを来たときよりきれいにして去れ。ただし清掃は、同じ差分の中で読み切れる大きさに留めよ——1行のリネーム、より明確なコメント、デッドコードの削除。それより大きいものは独立したコミットにせよ。
- **出典:** Robert C. Martin『The Boy Scout Rule』(Kevlin Henney 編『97 Things Every Programmer Should Know』O'Reilly, 2010 所収)。ベーデン＝パウエルの「この世界を来たときより少しだけ良くして去れ」を翻案した規則の出典。『Clean Code』(2008) にも記述がある。 — [原典 ↗](https://www.oreilly.com/library/view/97-things-every/9780596809515/ch08.html)
- **関連:** [逸脱の常態化 (Normalization of Deviance)](#逸脱の常態化-normalization-of-deviance) · [割れ窓理論 (Broken Windows Theory)](#割れ窓理論-broken-windows-theory) · [コードの健全性を上げるなら承認する (Approve What Improves Code Health)](#コードの健全性を上げるなら承認する-approve-what-improves-code-health)

### テスラーの複雑性保存則 (Tesler's Law)

`§ 30` · システム

- **概念:** システムに本来備わる複雑さは消せない。誰か別の人に移るだけだ。
- **メカニズム:** あらゆるシステムには取り除けない本質的複雑性があり、それは消えるのではなく移動するだけだ。利用者から隠せば開発者へ、開発者から隠せば運用者へ、運用者から隠せば午前 3 時の顧客の手元に着地する。
- **対立概念:** **偶有的な複雑さ** — Brooks は複雑さを本質的なものと偶有的なものに分けた。システムが抱える複雑さの多くは偶有的なもので、それは移すのではなく消せる。
- **判断の指針:** 「シンプルな API」が綺麗すぎると感じたら問え——いま自分が消した複雑性を、誰が吸収したのか？ 答えられないなら、簡素化したのではなく転嫁しただけだ。
- **出典:** Dan Saffer『Designing for Interaction』(New Riders, 2006) 所収の Larry Tesler へのインタビュー。1980 年代半ば、Apple で MacApp を推していた時期に「複雑性保存の法則」を唱えたと本人が語っている。 — [原典 ↗](https://en.wikipedia.org/wiki/Law_of_conservation_of_complexity)
- **関連:** [リーキー・アブストラクション (Law of Leaky Abstractions)](#リーキーアブストラクション-law-of-leaky-abstractions) · [アシュビーの必要多様性の法則 (Ashby's Law of Requisite Variety)](#アシュビーの必要多様性の法則-ashbys-law-of-requisite-variety)

### ダニング・クルーガー効果 (Dunning-Kruger Effect)

`§ 31` · 認知

- **概念:** ある分野に疎い人ほど、自分の能力を過大評価しがちだ。
- **メカニズム:** ある分野で専門性を欠くということは、「自分の無能さを認識するために必要なメタ的スキル」も同時に欠くということ。元の研究では、下位四分位の被験者は実際には12パーセンタイル程度でありながら、自己評価を60パーセンタイル付近に置いた。逆に上位の被験者は、他人にも同じくらい簡単なはずだと仮定して自分を過小評価した。
- **対立概念:** **較正された自信** — この効果には異論がある——古典的なパターンの多くは、ノイズの多い自己評価の平均への回帰でも再現できる。だから過信は「診断」ではなく「実績を確認せよという合図」として扱え。
- **判断の指針:** 誰かが難問を「簡単」と断言したら、その見積りを信じる前に、その分野での実績を確認せよ。スコーピングの場面では、自信ある新参者と寡黙な熟達者をペアにし、寡黙な側の声を重く扱え。
- **出典:** Justin Kruger & David Dunning『Unskilled and Unaware of It』(Journal of Personality and Social Psychology, 1999)。 — [原典 ↗](https://doi.org/10.1037/0022-3514.77.6.1121)
- **関連:** [知識の呪い (Curse of Knowledge)](#知識の呪い-curse-of-knowledge) · [ピーターの法則 (Peter Principle)](#ピーターの法則-peter-principle)

### 知識の呪い (Curse of Knowledge)

`§ 32` · 認知

- **概念:** 一度知ってしまうと、知らなかったときの感覚を想像できなくなる。
- **メカニズム:** 一度ある事を知ってしまうと、「それを知らなかった状態」を容易には想像できなくなる。エンジニアはドキュメント、エラーメッセージ、API を、自分にとっては自明で、次に使う人にとっては不透明な状態で書いてしまう。
- **対立概念:** **読み手に合わせて書く** — 何もかも説明する文書は熟練の読み手を埋もれさせる。午前 3 時の運用者に要るのはチュートリアルではなくコマンドだ。
- **判断の指針:** ドキュメントや公開 API を出荷する前に、システムを一度も触ったことのない人にそのタスクをやらせ、自分は黙って観察せよ。彼らの混乱は、自分が言語化し忘れた前提を正確に指している。
- **出典:** Colin Camerer, George Loewenstein & Martin Weber『The Curse of Knowledge in Economic Settings: An Experimental Analysis』(Journal of Political Economy, 1989)。 — [原典 ↗](https://doi.org/10.1086/261651)
- **関連:** [XY問題 (XY Problem)](#xy問題-xy-problem) · [ダニング・クルーガー効果 (Dunning-Kruger Effect)](#ダニングクルーガー効果-dunning-kruger-effect) · [驚き最小の原則 (Principle of Least Astonishment)](#驚き最小の原則-principle-of-least-astonishment) · [統制ではなく文脈を (Context, Not Control)](#統制ではなく文脈を-context-not-control)

### スイスチーズモデル (Swiss Cheese Model)

`§ 33` · 安全工学

- **概念:** どの防御層にも穴がある。事故は複数の層の穴がそろったときに起きる。
- **メカニズム:** すべての保護層（レビュー、テスト、アラート、ランブック、ロールバック）には穴がある。事故は、独立した複数層の穴が偶然一直線に並んだ瞬間に発生する。単一の層を完璧にすることはできないので、独立した形で失敗する複数層に依存するしかない。
- **対立概念:** **通常事故理論** — 層は独立しておらず、層を足すたびに新たな相互作用が生まれる。ある点を超えると、安全策を足すことは失敗の経路を足すことになる。
- **判断の指針:** インシデントレビューにおいて、「失敗した一つのもの」で止まってはならない。本来それを捉えるはずだった全層を列挙し、なぜ同じ瞬間にすべての穴が開いていたのかを問え。修正が一つの層で済むことはまれだ。層どうしが互いに独立して失敗するようにする変更を優先せよ。
- **出典:** James Reason『Human Error』(Cambridge University Press, 1990) が多層防護のモデルを示した。スイスチーズの図は Reason『Human error: models and management』(BMJ, 2000、本項のリンク先) から。チーズの比喩そのものは Rob Lee によるものだと Larouzée & Le Coze (Safety Science, 2020) が跡づけている。 — [原典 ↗](https://doi.org/10.1136/bmj.320.7237.768)
- **関連:** [逸脱の常態化 (Normalization of Deviance)](#逸脱の常態化-normalization-of-deviance) · [通常事故理論 (Normal Accident Theory)](#通常事故理論-normal-accident-theory) · [非難なきポストモーテム (Blameless Postmortem)](#非難なきポストモーテム-blameless-postmortem) · [なぜなぜ分析 (Five Whys)](#なぜなぜ分析-five-whys)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../assets/diagrams/swiss-cheese-model-ja-dark.svg">
  <img alt="穴のある4つの防護層。穴が一直線に並んだところで事故が起きる" src="../assets/diagrams/swiss-cheese-model-ja-light.svg">
</picture>

どの層にも穴があり、穴は動く。事故とは「ある層が失敗したこと」ではなく、独立した4つの穴がたまたま一直線に並んだ瞬間である。だから対策は、最後に破れた層とは限らない。

### 早すぎる最適化 (Premature Optimization)

`§ 34` · 性能

- **概念:** 計測する前に最適化すると、ボトルネックでない箇所に工数を使ってしまう。
- **メカニズム:** Knuth の原文は「小さな効率のことは、まあ 97% の場面では忘れるべきだ。早すぎる最適化は諸悪の根源である。とはいえ、決定的な 3% での機会は逃すべきではない」。時間がどこで使われているかについての勘はたいてい外れるので、計測前の最適化はホットでないコードに工数を使う。複雑さを増やし、ホットパスとコールドパスを絡ませて、本当に必要な最適化を後からやりにくくする。
- **対立概念:** **性能は設計で決まる** — 性能の一部は初期の設計（データ配置、往復回数、同期か非同期か）で決まり、後からプロファイルしても直せない。そうした決定では、測るものができる前から速さを考えよ。
- **判断の指針:** まず素直なコードを書け。プロファイラがボトルネックと証明したホットパスのみを最適化せよ。残り 97% のクリティカルでないコードは単純なまま保て——次のメンテナーが住むのはそこである。
- **出典:** Donald E. Knuth『Structured Programming with go to Statements』(Computing Surveys, 1974)。 — [原典 ↗](https://doi.org/10.1145/356635.356640)
- **関連:** [アムダールの法則 (Amdahl's Law)](#アムダールの法則-amdahls-law) · [パレートの法則 (Pareto Principle)](#パレートの法則-pareto-principle)

### リーナスの法則 (Linus's Law)

`§ 35` · 保守性

- **概念:** 一人では見つからないバグも、同じコードを見る別の人にはあっさり分かることが多い。
- **メカニズム:** 「十分な目玉があれば、あらゆるバグは浅い。」一人の目には不可能に見える欠陥も、独立した多くの視点が当たれば自明になる。ただし、その人たちが実際にコードを見られることが前提だ。
- **対立概念:** **目は多くても見ていない** — 公開されていることはレビューされていることではない。Heartbleed のバグは 2014 年に公表されるまで 2 年間 OpenSSL の公開ソースにあった。気軽な多くの目より、報酬を受けた少数の専門家の目が要るコードもある。
- **判断の指針:** ある型のバグが何度もすり抜けるなら、解決策は「同じ人による、より慎重なレビュー」ではない。形の違う多くの目にコードを晒せ。レビュアーをローテーションし、内部ライブラリを公開し、バウンティを開け。
- **出典:** Eric S. Raymond『The Cathedral and the Bazaar』(1999)。Linus Torvalds にちなんで名付けられた法則の出典。 — [原典 ↗](https://web.archive.org/web/2024/http://www.catb.org/~esr/writings/cathedral-bazaar/cathedral-bazaar/)
- **関連:** [カニンガムの法則 (Cunningham's Law)](#カニンガムの法則-cunninghams-law)

### CAP定理 (CAP Theorem)

`§ 36` · 分散システム

- **概念:** ネットワーク分断が起きたら、データストアは一貫性か可用性のどちらかを捨てる。
- **メカニズム:** ネットワーク化されたデータストアは、**一貫性 (C)**・**可用性 (A)**・**分断耐性 (P)** を同時には保証できない。現実世界でネットワーク分断は不可避なので、実際に選べるのは*分断が起きたその瞬間*の「一貫性か可用性か」である。
- **対立概念:** **PACELC / 調整可能な一貫性** — 分断はまれだ。毎日払っているのはレイテンシと一貫性のトレードオフだ（Abadi, 2012）。CAP の言葉だけで論じた設計は平常時を無視している。
- **判断の指針:** 障害が起きる*前*に、各操作が一貫性と可用性のどちらを優先するか決めておけ。分断は必ず起きる。問われるのは「起きた時にシステムが何をするか」だけだ。
- **出典:** Eric Brewer『Towards Robust Distributed Systems』(PODC 基調講演, 2000)。Seth Gilbert & Nancy Lynch が証明した (SIGACT News, 2002)。 — [原典 ↗](https://doi.org/10.1145/564585.564601)
- **関連:** [二人の将軍問題 (Two Generals Problem)](#二人の将軍問題-two-generals-problem) · [分散コンピューティングの誤謬 (Fallacies of Distributed Computing)](#分散コンピューティングの誤謬-fallacies-of-distributed-computing)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../assets/diagrams/cap-theorem-ja-dark.svg">
  <img alt="CAP の三角形。分断耐性は選択肢ではなく、実際の選択は残る一辺の上にある" src="../assets/diagrams/cap-theorem-ja-light.svg">
</picture>

この三角形はよく「3つから2つを選ぶ」と描かれるが、それは誤解を招く。分断を断る権利はこちらにはなく、ネットワークが勝手に断ってくる。P は選択ではなく世界の事実である。実際に選べるのは底辺の上の一点だけで、しかもそれを選ぶのは分断の最中ではなく、その前だ。

### リトルの法則 (Little's Law)

`§ 37` · 性能

- **概念:** 安定した系では、系の中にある件数の平均は、到着率と平均滞在時間の積に等しい。
- **メカニズム:** 安定したシステムでは、系内の平均項目数 (L) は平均到着率 (λ) と平均滞留時間 (W) の積に等しい: **L = λW**。到着分布やサービス規律に依らず成り立つ。
- **対立概念:** **稼働率** — 仕掛りを削りすぎると到着の合間にサーバが遊び、スループットが落ちる。断った仕事も、どこかで誰かがやらなければならない。
- **判断の指針:** 容量を増やさずに滞在時間を縮めたいなら、始める仕事を減らせ。仕掛りに上限を設け、上限を超えた分は捨てるか、断るか、後回しにせよ。そうすれば超過分は遅く並ぶのではなく速く断られる。捨てずに上限だけ設けても、行列は測っていない場所に移るだけだ。
- **出典:** John D. C. Little『A Proof for the Queuing Formula L = λW』(Operations Research, 1961)。 — [原典 ↗](https://doi.org/10.1287/opre.9.3.383)
- **関連:** [スケールの裾野 (The Tail at Scale)](#スケールの裾野-the-tail-at-scale) · [制約理論 (Theory of Constraints)](#制約理論-theory-of-constraints)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../assets/diagrams/littles-law-ja-dark.svg">
  <img alt="到着率 λ、系内の item 数 L、滞在時間 W を持つ待ち行列" src="../assets/diagrams/littles-law-ja-light.svg">
</picture>

L = λW は3つの量を縛り合う。ひとつを動かせば必ず別のものが動く。到着率を決めるのは利用者であってこちらではない。残る、実際に握れているレバーはひとつ——仕掛りに上限を掛ければ、レイテンシは算術として落ちる。速いサーバは要らない。

### 二人の将軍問題 (Two Generals Problem)

`§ 38` · 分散システム

- **概念:** 信頼できない通信路では、二者は合意できたと確信することができない。
- **メカニズム:** 不確実な通信路で通信する二者は、合意に達したと確信することが決してできない。あらゆるメッセージは確認応答を必要とし、その応答自体もまた応答を必要とし、永遠に終わらない。何往復しても、共有知識には届かない。
- **対立概念:** **十分な確からしさ** — 確実さは不可能だが、必要になることもまれだ。TCP も決済もあらゆる RPC も、高い確率と後からの突き合わせで動いている。証明を待てば何もできない。
- **判断の指針:** 「送ったから届いた」と決して仮定するな。ネットワークを跨ぐ操作はすべて再送安全かつべき等に設計し、一往復を信じる代わりに状態を突き合わせて整合させよ。
- **出典:** E. A. Akkoyunlu, K. Ekanadham & R. V. Huber『Some Constraints and Tradeoffs in the Design of Network Communications』(SOSP, 1975)。この問題を初めて述べた論文。「二人の将軍問題」と名付け、データベースの問題として定式化したのは Jim Gray『Notes on Data Base Operating Systems』(1978)。 — [原典 ↗](https://doi.org/10.1145/800213.806523)
- **関連:** [CAP定理 (CAP Theorem)](#cap定理-cap-theorem)

### ピーターの法則 (Peter Principle)

`§ 39` · 組織

- **概念:** 人は苦手な役職にたどり着くまで昇進し、そこにとどまりがちだ。
- **メカニズム:** 階層組織では、人は*一つ上*の職務ではなく*現職*の成績で昇進する。だから誰もが、自分の不得手な職位に達するまで昇り続け、そこで留まる。有能は昇進によって失われ、無能が堆積していく。
- **対立概念:** **人は役職に合わせて育つ** — 一つ上の職務ですでに実績がある人だけを昇進させれば、誰もそれを学ぶ機会を得ない。支援と戻り道のある背伸びの役割こそ、良いマネージャーの多くを生んできた。
- **判断の指針:** 最高のエンジニアを褒美にマネジメントへ昇進させるな——優れたエンジニアを一人失い、かつ貧弱なマネージャーを一人生むリスクがある。技術職の梯子を用意し、すでに習熟した職務ではなく「一つ上の職務」への適性で候補者を評価せよ。
- **出典:** Laurence J. Peter & Raymond Hull『The Peter Principle』(1969)。 — [原典 ↗](https://en.wikipedia.org/wiki/Peter_principle)
- **関連:** [ダニング・クルーガー効果 (Dunning-Kruger Effect)](#ダニングクルーガー効果-dunning-kruger-effect) · [シャーキーの原理 (Shirky Principle)](#シャーキーの原理-shirky-principle)

### パーキンソンの法則 (Parkinson's Law)

`§ 40` · 組織

- **概念:** 仕事は、完了までに使える時間をすべて使い切るまで膨らむ。
- **メカニズム:** 「仕事は、それを完了するために与えられた時間を満たすまで膨張する。」一週間与えれば一週間かかり、同じ作業も締切が二日なら二日で片付く。緩衝 (slack) は貯蓄されず、消費される。
- **対立概念:** **余裕** — いつも最短の箱に押し込まれる仕事には、品質を保つための思考、学習、回復の余地がない（DeMarco『Slack』2001 年）。
- **判断の指針:** 終わりの見えない作業には意図的に短いタイムボックスを切り、締切の時点で見直せ。きつい箱は、緩い箱が永遠に先送りしてしまうスコープ判断を強制する。
- **出典:** C. Northcote Parkinson『Parkinson's Law』(The Economist, 1955 年 11 月 19 日)。『Parkinson's Law and Other Studies in Administration』(Houghton Mifflin, 1957) に発展した。 — [原典 ↗](https://www.economist.com/news/1955/11/19/parkinsons-law)
- **関連:** [タイプ 1／タイプ 2 の意思決定 (Type 1 vs Type 2 Decisions)](#タイプ-1タイプ-2-の意思決定-type-1-vs-type-2-decisions) · [パーキンソンの凡俗法則 (Law of Triviality)](#パーキンソンの凡俗法則-law-of-triviality) · [ホフスタッターの法則 (Hofstadter's Law)](#ホフスタッターの法則-hofstadters-law) · [時間を固定し、スコープを変える (Fixed Time, Variable Scope)](#時間を固定しスコープを変える-fixed-time-variable-scope)

### ヴィルトの法則 (Wirth's Law)

`§ 41` · 性能

- **概念:** ソフトウェアが遅くなる速さは、ハードウェアが速くなる速さを上回る。
- **メカニズム:** 「ソフトウェアは、ハードウェアが速くなるよりも速く遅くなっている。」ハードの利得はそのたびに、追加された抽象層・機能・不注意によって吸収され、利用者が体感する速度は横ばいか悪化する。
- **対立概念:** **機械の時間より人の時間** — ハードウェアは安く、エンジニアは高い。「肥大」の多くは、機能を数か月ではなく数週間で出すための抽象化だ。
- **判断の指針:** 速いマシンが買ってくれた速度を、「使ってよい許可」ではなく「守るべき予算」とみなせ。性能予算を設け、リリースがそれを割り込んだらビルドを失敗させよ。
- **出典:** Niklaus Wirth『A Plea for Lean Software』(IEEE Computer, 1995 年 2 月)。Wirth 自身は同僚 Martin Reiser の言葉として「Reiser の法則」の名で引いている。「Wirth の法則」という呼び名は後から付いた。 — [原典 ↗](https://doi.org/10.1109/2.348001)
- **関連:** [ジェヴォンズのパラドックス (Jevons Paradox)](#ジェヴォンズのパラドックス-jevons-paradox) · [ムーアの法則 (Moore's Law)](#ムーアの法則-moores-law)

### 90対90の法則 (Ninety-Ninety Rule)

`§ 42` · 見積り

- **概念:** 残り1割の作業に、最初の9割と同じくらいの時間がかかりがちだ。
- **メカニズム:** 「最初の90%のコードが、開発時間の最初の90%を占める。残り10%のコードが、もう90%を占める。」目に見える作業は、同じ大きさの統合・エッジケース・仕上げという第二の塊を隠している。
- **対立概念:** **出せる程度で十分** — 最後の 1 割はやる価値がないこともある。誰も使わない仕上げや誰も踏まないエッジケースは削れる。難しいのは、どれを削るかを決めることだ。
- **判断の指針:** 「ほぼ完成」に見えたら、もう一つ丸ごとプロジェクトが残ると思え——最後の10%、すなわち堅牢化・エッジケース・統合。端数として無視せず、明示的にスケジュールに積め。
- **出典:** Tom Cargill (Bell Labs)。Jon Bentley が『Programming Pearls』(CACM, 1985) で広めた。 — [原典 ↗](https://en.wikipedia.org/wiki/Ninety%E2%80%93ninety_rule)
- **関連:** [ホフスタッターの法則 (Hofstadter's Law)](#ホフスタッターの法則-hofstadters-law) · [ストラングラーフィグ (Strangler Fig)](#ストラングラーフィグ-strangler-fig)

### イーグルソンの法則 (Eagleson's Law)

`§ 43` · 保守性

- **概念:** 半年見ていない自分のコードは、他人が書いたコードも同然だ。
- **メカニズム:** 「半年見ていない自分のコードは、他人が書いたも同然である。」コードそのものより遥かに速く、頭の中のメンタルモデルは蒸発する。文脈はソースには保存されない。
- **対立概念:** **コメントは腐る** — 確実に最新なのはコードだけだ。保守されないコメントや ADR は自信ありげな嘘になり、ないより悪い。
- **判断の指針:** 半年後に他人と化す自分のために、コードとコミットメッセージを書け。コードから自明でない判断は、その「なぜ」をコメントか ADR に残せ——頭の中だけに留めるな。
- **出典:** Peter Eagleson に帰される、プログラミングの口伝。カタログ化された「ソフトウェア開発の法則」群の一つとして長く流布。 — [原典 ↗](https://wiki.c2.com/?EaglesonsLaw)
- **関連:** [チェスタトンの柵 (Chesterton's Fence)](#チェスタトンの柵-chestertons-fence) · [カーニハンの法則 (Kernighan's Law)](#カーニハンの法則-kernighans-law)

### ヒックの法則 (Hick's Law)

`§ 44` · ヒューマンインタフェース

- **概念:** 選択肢が増えるほど、人は一つを選ぶのに時間がかかる。
- **メカニズム:** 決定にかかる時間は選択肢の数の対数で増える: **T = b·log₂(n+1)**。選択肢の増加は見た目を散らかすだけでなく、すべての利用者を計測可能なほど遅くする。Hick が測ったのは等確率の選択肢から選ぶ場面だ。見慣れたメニューでは人は選ぶのではなく探すので、この法則が最もよく当てはまるのは不慣れな画面である。
- **対立概念:** **熟練者の効率** — 選択肢をメニューや既定値の裏に隠すと、よく使う人のクリック数が増え、機能が見つけにくくなる。熟練者が一度覚えれば済む密な画面は、すかすかの画面より速いことがある。
- **判断の指針:** 画面や API の公開面の選択肢を、効くものだけに絞れ。残りは既定値と段階的開示の裏へ押しやれ。ドアが少ないほど、決定は速い。
- **出典:** William E. Hick (1952) と Ray Hyman (1953)。「ヒック・ハイマンの法則」の出典。 — [原典 ↗](https://doi.org/10.1080/17470215208416600)
- **関連:** [ミラーの法則 (Miller's Law)](#ミラーの法則-millers-law) · [フィッツの法則 (Fitts's Law)](#フィッツの法則-fittss-law)

### フィッツの法則 (Fitts's Law)

`§ 45` · ヒューマンインタフェース

- **概念:** 小さく遠いターゲットほど、押すのに時間がかかり、押し間違えも増える。
- **メカニズム:** 標的へ移動する時間は、その距離と大きさで決まる。遠く小さい標的は遅く誤りやすく、近く大きい標的は速い。ポインティングは計測可能なコストを持つ物理的行為である。
- **対立概念:** **意図的な摩擦** — ボタンを押しやすくする法則は、誤って押しやすくもする。取り消せない操作では、遅く押しにくい的であることこそが狙いだ。
- **判断の指針:** よく使う操作は、大きく、ポインタがすでにある場所の近くに置け。破壊的な操作は小さく、よく使う操作から離し、確認を挟め。画面の端と角は実質的に無限に大きい的なので、主要な操作はそこに置け。
- **出典:** Paul M. Fitts『The Information Capacity of the Human Motor System in Controlling the Amplitude of Movement』(Journal of Experimental Psychology, 1954)。 — [原典 ↗](https://doi.org/10.1037/h0055392)
- **関連:** [ヒックの法則 (Hick's Law)](#ヒックの法則-hicks-law)

### ミラーの法則 (Miller's Law)

`§ 46` · 認知

- **概念:** 作業記憶に保てるのは数個のまとまりだけだ（Miller は7前後とし、後の研究はもっと少ないとする）。
- **メカニズム:** 「マジカルナンバー 7 ± 2」——人間の作業記憶が一度に保持できるのは約7チャンクのみ。その限界を超えると想起は崩壊する。脳は速度を落とすのではなく、項目を捨てる。
- **対立概念:** **まとめすぎ** — まとめるたびに間接参照が一段増える。短い一覧を名前付きのグループに分ければ、人はグループ名まで覚えなければならなくなる。
- **判断の指針:** 人が頭の中で状態を保持しなければならない場所——関数の引数・フォーム項目・メニュー群・オンコール手順——では、関連する項目を電話番号のように少数の名前付きチャンクへまとめよ。
- **出典:** George A. Miller『The Magical Number Seven, Plus or Minus Two』(Psychological Review, 1956)。 — [原典 ↗](https://doi.org/10.1037/h0043158)
- **関連:** [ダンバー数 (Dunbar's Number)](#ダンバー数-dunbars-number) · [ヒックの法則 (Hick's Law)](#ヒックの法則-hicks-law)

### 分散コンピューティングの誤謬 (Fallacies of Distributed Computing)

`§ 47` · 分散システム

- **概念:** ネットワーク越しのコードは、本番では成り立たない8つの前提を暗に置いている。
- **メカニズム:** 分散システムに不慣れな者は、ネットワークは信頼でき、遅延はゼロ、帯域は無限、通信は安全、構成は不変、管理者は一人、転送コストはゼロ、ネットワークは均質だと暗黙に仮定する。この8つの仮定はすべて本番で崩れる。
- **対立概念:** **分散させない** — Fowler の分散オブジェクト設計の第一法則。8 つの誤謬を乗り切る最も安い方法は、そもそも呼び出しをリモートにしないことだ。
- **判断の指針:** プロセス間呼び出しを出す前に、8つの仮定のどれに依存しているかを明示し、各々に明示的なタイムアウト・リトライ・失敗経路を与えよ。
- **出典:** L. Peter Deutsch が 1994 年に Sun Microsystems で 7 つにまとめた。そこには Bill Joy と Lyon (出典では Dave Lyon、Tom Lyon とされることも多い) が同社ですでに挙げていた「Fallacies of Networked Computing」の 4 つが含まれる。8 つ目は 1997 年頃に James Gosling が加えた。Ingrid Van Den Hoogen『Deutsch's Fallacies, 10 Years After』(Java Developer's Journal, 2004) が経緯の出典。解説の定番は Arnon Rotem-Gal-Oz『Fallacies of Distributed Computing Explained』(2006)。 — [原典 ↗](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing)
- **関連:** [ポステルの法則 (Postel's Law)](#ポステルの法則-postels-law) · [マーフィーの法則 (Murphy's Law)](#マーフィーの法則-murphys-law) · [CAP定理 (CAP Theorem)](#cap定理-cap-theorem) · [静的安定性 (Static Stability)](#静的安定性-static-stability) · [カオスエンジニアリング (Chaos Engineering)](#カオスエンジニアリング-chaos-engineering)

### 自動化の皮肉 (Ironies of Automation)

`§ 48` · 安全工学

- **概念:** 自動化は人に最も難しい例外だけを残し、その対応に要る腕は使わないうちに鈍る。
- **メカニズム:** 作業の定型部分を自動化すると、人間には最も稀で難しい例外だけが残る——しかも使わぬ間に手作業の技能と状況認識は衰える。破綻した自動システムが制御を人へ返すのは、まさにその瞬間である。
- **対立概念:** **トイル** — 腕を鈍らせないためだけに定型作業を人にやらせ続けるのは、自動化より高くつき、より多く失敗する。答えは自動化を減らすことではなく訓練だ。
- **判断の指針:** 定期的なゲームデーと実地訓練で運用者の勘を保て。何も知らないまま突然引き継ぐのではなく、状況をつかんだまま引き取れるように引き継ぎを設計せよ。
- **出典:** Lisanne Bainbridge『Ironies of Automation』(Automatica, 1983)。 — [原典 ↗](https://doi.org/10.1016/0005-1098(83)90046-8)
- **関連:** [通常事故理論 (Normal Accident Theory)](#通常事故理論-normal-accident-theory) · [トイル (Toil)](#トイル-toil) · [フォールバックを避ける (Avoid Fallback)](#フォールバックを避ける-avoid-fallback)

### 最小権限の原則 (Principle of Least Privilege)

`§ 49` · セキュリティ

- **概念:** 不要な権限を持つ部品ほど、問題が起きたときの被害範囲が広がる。
- **メカニズム:** 厳密に必要な以上の権限を与えられた要素は、あらゆるバグ・侵害・事故の被害範囲を広げ、監査者が考慮すべき相互作用を増やす。
- **対立概念:** **心理的受容性** — 利用者が回避するほど厳しい制限は、かえって守りを崩す。
- **判断の指針:** すべてのプロセス・サービスアカウント・トークンを既定で拒否とし、職務が証明できる最小限の権限だけを加えよ。職務が変わるたびに権限を再監査せよ。
- **出典:** Jerome Saltzer & Michael Schroeder『The Protection of Information in Computer Systems』(Proceedings of the IEEE, 1975)。 — [原典 ↗](https://web.mit.edu/Saltzer/www/publications/protection/)
- **関連:** [ケルクホフスの原理 (Kerckhoffs's Principle)](#ケルクホフスの原理-kerckhoffss-principle)

### ケルクホフスの原理 (Kerckhoffs's Principle)

`§ 50` · セキュリティ

- **概念:** 設計が秘密である間だけ安全なシステムは、安全ではない。
- **メカニズム:** 暗号方式は、鍵以外のすべてが公開されても安全であるべきだ。アルゴリズムの秘匿は脆い——仕組みは漏れ、解析され、他システムで使い回される。
- **対立概念:** **多層防御** — 秘匿は薄い一層としてなら許されるが、決して土台にはならない。
- **判断の指針:** 攻撃者は自分のソースと設計をすべて握っていると仮定せよ。秘密はすべて交換可能な鍵に置き、隠したアルゴリズムに防御を頼るな。
- **出典:** Auguste Kerckhoffs『La cryptographie militaire』(Journal des sciences militaires, 1883 年 1 月・2 月)。6 つの要件の 2 番目としてこの原理を述べた論文の出典。リンク先に両号のスキャンがある。 — [原典 ↗](https://www.petitcolas.net/kerckhoffs/)
- **関連:** [最小権限の原則 (Principle of Least Privilege)](#最小権限の原則-principle-of-least-privilege)

### グスタフソンの法則 (Gustafson's Law)

`§ 51` · 性能

- **概念:** 問題の規模が計算機とともに大きくなるなら、並列化の効果はほぼ比例して伸びる。
- **メカニズム:** 時間の予算を固定すれば、大きな計算機はそれに比例して大きな問題を解ける。ゆえに規模とともに逐次部分の割合は縮み、速度向上はほぼ線形に伸びる——固定作業量を前提とするアムダールの悲観に対する、楽観的な対の視点である。
- **対立概念:** **アムダールの法則** — 固定サイズの作業量では、逐次部分が依然として速度向上を頭打ちにする。
- **判断の指針:** コア増設を正当化する前に、問題規模がハードウェアとともに大きくなるかを問え。作業量が固定ならアムダールで考え、規模とともに増えるならグスタフソンが効く。
- **出典:** John L. Gustafson『Reevaluating Amdahl's Law』(Communications of the ACM, 1988)。 — [原典 ↗](https://doi.org/10.1145/42411.42415)
- **関連:** [アムダールの法則 (Amdahl's Law)](#アムダールの法則-amdahls-law) · [ムーアの法則 (Moore's Law)](#ムーアの法則-moores-law)

### スケールの裾野 (The Tail at Scale)

`§ 52` · 分散システム

- **概念:** 一つのリクエストが多数のサーバに分かれると、最も遅いサーバが応答時間を決める。
- **メカニズム:** 多数の要素へ扇状に処理を広げるサービスでは、ノード単位の稀な遅延（GC 停止・競合・不良ディスク）がほぼ毎リクエストどこかのノードで発生する。ゆえに中央値が健全に見えても、裾野のレイテンシ（p99・p99.9）が体感を支配する。
- **対立概念:** **冗長化には代償がある** — ヘッジドリクエストや連動リクエストは負荷を増やす。中央値が体感を決める場面で裾野を追うな。
- **判断の指針:** 平均ではなく p99／p99.9 で SLO を引け。すべてのノードを均一に速くしようとするより、ヘッジドリクエストやマイクロ分割といった裾野耐性の技法を導入せよ。
- **出典:** Jeffrey Dean & Luiz André Barroso『The Tail at Scale』(Communications of the ACM, 2013)。 — [原典 ↗](https://doi.org/10.1145/2408776.2408794)
- **関連:** [リトルの法則 (Little's Law)](#リトルの法則-littles-law) · [エラーバジェット (Error Budget)](#エラーバジェット-error-budget)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../assets/diagrams/tail-at-scale-ja-dark.svg">
  <img alt="1リクエストが100枚の葉に扇状展開したとき、少なくとも1枚が遅い確率" src="../assets/diagrams/tail-at-scale-ja-light.svg">
</picture>

100回に1回だけ遅い葉は、単体では見えない。それを100枚に扇状展開すると、同じ葉レベルの p99 が利用者の体感の中央値になる——63%のリクエストが遅れた1枚を待つ。スケールにおける裾野レイテンシは、ノード単体の性質ではなく、扇状展開の算術的な帰結である。

### アシュビーの必要多様性の法則 (Ashby's Law of Requisite Variety)

`§ 53` · システム

- **概念:** 制御側は、対象がとりうる状態と同じだけの対応を持たないと制御できない。
- **メカニズム:** 制御装置が系を調整できるのは、その系が生み出しうる状態の多様性に匹敵できる場合のみである。力不足の制御は、十分に豊かな環境にはそもそも対処できない。
- **対立概念:** **環境そのものを制約する** — 制御側の過剰な多様性は、それ自体がコストと複雑さである。
- **判断の指針:** 障害がアラートや手順書を繰り返しすり抜けるなら、対応能力を多様性に見合うまで増やすか、設定を減らし入力を厳しくして系の状態空間を意図的に縮めよ。
- **出典:** W. Ross Ashby『An Introduction to Cybernetics』(Chapman & Hall, 1956。リンク先のスキャンは同年の Wiley, New York 版) 第 11 章。必要多様性の法則の出典。 — [原典 ↗](https://archive.org/details/introductiontocy00ashb)
- **関連:** [テスラーの複雑性保存則 (Tesler's Law)](#テスラーの複雑性保存則-teslers-law) · [通常事故理論 (Normal Accident Theory)](#通常事故理論-normal-accident-theory) · [KISS の原則 (KISS Principle)](#kiss-の原則-kiss-principle)

### デメテルの法則 (Law of Demeter)

`§ 54` · 保守性

- **概念:** 他のオブジェクトの内部をたどるコードは、その連鎖のどこが変わっても壊れる。
- **メカニズム:** 他オブジェクトの内部を辿って呼び出すコード（`a.getB().getC().doThing()`）は、依存の連鎖全体に自らを結びつける。ゆえにその連鎖のどこかの変更が波及して壊れる。
- **対立概念:** **教条より実用** — 厳格な適用は転送メソッドとラッパーの肥大を招く。
- **判断の指針:** 呼んでよいのは、直接の協力者・引数・自分が生成したもの・自分のフィールドのメソッドだけ。getter を数珠つなぎにしているなら、データを持つオブジェクト側にメソッドを足せ。
- **出典:** Karl Lieberherr & Ian Holland『Assuring Good Style for Object-Oriented Programs』(IEEE Software, 1989)。 — [原典 ↗](https://doi.org/10.1109/52.35588)
- **関連:** [リーキー・アブストラクション (Law of Leaky Abstractions)](#リーキーアブストラクション-law-of-leaky-abstractions) · [DRY 原則 (DRY Principle)](#dry-原則-dry-principle) · [単一責任の原則 (Single Responsibility Principle)](#単一責任の原則-single-responsibility-principle)

### ジェヴォンズのパラドックス (Jevons Paradox)

`§ 55` · インセンティブ

- **概念:** 資源を安く使えるようにすると、かえって総使用量が増えることがある。
- **メカニズム:** 資源の単位あたり利用を安くすると実効価格が下がり、総消費はむしろ増えうる——効率化で浮いた分は、節約として貯まらず、さらなる利用に費やされる。
- **対立概念:** **反動に上限を設ける** — 効率化には割当・上限・価格シグナルを組み合わせ、節約を実際に回収せよ。
- **判断の指針:** 計算資源・ストレージ・社内 API など何かを安くしたら、需要が膨らむと見込め。純減を前提にせず、反動を織り込んで容量と予算を確保せよ。
- **出典:** William Stanley Jevons『The Coal Question』(Macmillan, 1865) 第 7 章。「燃料を経済的に使うことが消費の減少に等しいと考えるのは、まったくの考え違いである」の出典。 — [原典 ↗](https://archive.org/details/in.ernet.dli.2015.224624)
- **関連:** [コブラ効果 (Cobra Effect)](#コブラ効果-cobra-effect) · [ヴィルトの法則 (Wirth's Law)](#ヴィルトの法則-wirths-law)

### 通常事故理論 (Normal Accident Theory)

`§ 56` · 安全工学

- **概念:** 複雑で密に結合したシステムでは、事故は構造そのものから生じる。
- **メカニズム:** 相互作用的に複雑で、かつ密結合な系では、独立した小さな故障が設計者の予見しない形で相互作用し、運用者が介入するより速く伝播する——ゆえに事故は不運ではなく、構造の性質となる。
- **対立概念:** **高信頼性組織（HRO）** — 空母や航空管制のような組織は、冗長性、専門性への敬意、小さな失敗への絶え間ない注意によって、密結合で複雑な系をごく少ない事故で動かしている。
- **判断の指針:** バッファ・タイムアウト・隔壁・サーキットブレーカで結合を緩め、複雑さを削れ。安全連動装置を足すのはその後だ——連動装置自体もまた相互作用を増やす。
- **出典:** Charles Perrow『Normal Accidents: Living with High-Risk Technologies』(Basic Books, 1984)。 — [原典 ↗](https://en.wikipedia.org/wiki/Normal_Accidents)
- **関連:** [逸脱の常態化 (Normalization of Deviance)](#逸脱の常態化-normalization-of-deviance) · [スイスチーズモデル (Swiss Cheese Model)](#スイスチーズモデル-swiss-cheese-model) · [自動化の皮肉 (Ironies of Automation)](#自動化の皮肉-ironies-of-automation) · [アシュビーの必要多様性の法則 (Ashby's Law of Requisite Variety)](#アシュビーの必要多様性の法則-ashbys-law-of-requisite-variety) · [なぜなぜ分析 (Five Whys)](#なぜなぜ分析-five-whys)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../assets/diagrams/normal-accident-theory-ja-dark.svg">
  <img alt="ペローの2軸——相互作用の複雑さと結合度。事故が構造的になる象限を示す" src="../assets/diagrams/normal-accident-theory-ja-light.svg">
</picture>

ペローは系を2軸に置いた。誰も設計せず、誰も間に合わないタイプの事故が出るのは右上の象限だけである。どちらの軸も動かせる——バッファ・タイムアウト・隔壁で疎結合にするか、相互作用そのものを削るか。安全連動装置を足す対策は、横軸を悪い方向に動かす。

### 割れ窓理論 (Broken Windows Theory)

`§ 57` · 安全工学

- **概念:** 放置された小さな乱れは、基準は守らなくてよいという合図になり、さらに乱れを呼びやすい。
- **メカニズム:** 割れたまま放置された窓は「誰も見ていない」という信号になり、次の違反のコストを下げる。コードベースでも、見逃された一つのハック、飛ばされた一つのテスト、恒久的に黙らされた一つのアラートが揃って「この基準は守らなくてよい」と宣言する。
- **対立概念:** **修繕もタダではない** — 塗装に注ぐ注意は土台に注がれない注意であり、そもそも元の犯罪学的主張の実証には強い異論がある。
- **判断の指針:** いま触っているファイルにある、最初の目に見える欠陥を直せ。黙認する例外にはすべて担当者と期限を付けよ。自分がいま立っていない場所の窓を直すためにリファクタを起こすな。
- **出典:** James Q. Wilson & George L. Kelling『Broken Windows』(The Atlantic, 1982 年 3 月号)。 — [原典 ↗](https://www.theatlantic.com/magazine/archive/1982/03/broken-windows/304465/)
- **関連:** [逸脱の常態化 (Normalization of Deviance)](#逸脱の常態化-normalization-of-deviance) · [ボーイスカウトの規則 (Boy Scout Rule)](#ボーイスカウトの規則-boy-scout-rule) · [コードの健全性を上げるなら承認する (Approve What Improves Code Health)](#コードの健全性を上げるなら承認する-approve-what-improves-code-health)

### YAGNI (YAGNI)

`§ 58` · 保守性

- **概念:** 想像した将来のために書いたコードは、今の工数を食い、実際の要件に合うこともまれだ。
- **メカニズム:** 推測に基づく一般化は3回支払わされる。抽象を書くとき、使われないまま抱え続けるとき、そして予期した要件が違う形で実際に来て解きほぐすとき。将来要件の予測は、たいてい「その抽象が固定してしまった細部」で外れる。
- **対立概念:** **チェスタトンの柵** — YAGNI が許すのは「作らないこと」だけであり、目的を確かめていないものを「消すこと」まで許してはいない。
- **判断の指針:** 実際に手元にあるケースだけを実装せよ。一般化したくなったら、まず2つ目の具体的なケースを名指しせよ。名指しできないなら、それはパターンではなく当て推量だ。
- **出典:** Ron Jeffries による Extreme Programming の実践ノート。"You Aren't Gonna Need It" として命名され、Kent Beck『Extreme Programming Explained』(1999) で広まった。 — [原典 ↗](https://ronjeffries.com/xprog/articles/practices/pracnotneed/)
- **関連:** [チェスタトンの柵 (Chesterton's Fence)](#チェスタトンの柵-chestertons-fence) · [ガルの法則 (Gall's Law)](#ガルの法則-galls-law) · [ワーキング・バックワーズ (Working Backwards)](#ワーキングバックワーズ-working-backwards)

### KISS の原則 (KISS Principle)

`§ 59` · 保守性

- **概念:** システムは、普通の人が悪条件の中でも直せる程度に単純である必要がある。
- **メカニズム:** "Keep it simple, stupid" は航空機設計から出た言葉で、要件は「平均的な整備兵が、基本的な工具だけで、野戦で直せること」だった。基準は優雅さではなく、その機体が実際に遭遇する最悪の状況で、普通の人間が直せるかどうかだった。
- **対立概念:** **アシュビーの必要多様性の法則** — 制御すべき問題より単純な系はその問題に対処できない。その下限を割った単純さは、複雑さの削減ではなく移動である。
- **判断の指針:** 設計はレビューでの読みやすさではなく、「午前3時に誰が直せるか」で評価せよ。オンコール担当が作者を呼ばないと直せないなら、それは単純なのではなく、一人にとって馴染みがあるだけだ。
- **出典:** Lockheed Skunk Works の Kelly Johnson に帰される (1960 年頃)。戦闘機の野戦整備性の要求として。 — [原典 ↗](https://en.wikipedia.org/wiki/KISS_principle)
- **関連:** [カーニハンの法則 (Kernighan's Law)](#カーニハンの法則-kernighans-law) · [アシュビーの必要多様性の法則 (Ashby's Law of Requisite Variety)](#アシュビーの必要多様性の法則-ashbys-law-of-requisite-variety) · [退屈な技術を選べ (Choose Boring Technology)](#退屈な技術を選べ-choose-boring-technology)

### DRY 原則 (DRY Principle)

`§ 60` · 保守性

- **概念:** 同じ知識を二か所に置くと、一緒に変わる保証がないので食い違っていく。
- **メカニズム:** 重複した知識は必ずずれていく。コピー同士を一緒に変えることを強制するものが何もないからだ。コストは余分な文字数ではない。将来の誰かが片方だけを直し、自分自身と静かに矛盾するシステムを出荷してしまうことだ。
- **対立概念:** **誤った抽象より重複のほうが安い** — 今は似ているだけの2つのブロックは、分岐が必要になった瞬間に互いを縛り合う。
- **判断の指針:** 重複を排除するのはテキストではなく知識だ。似た2つのブロックを統合する前に、「同じ理由で、同じ人の要求によって変わるか」を問え。違うなら分けたままにせよ。
- **出典:** Andrew Hunt & David Thomas『The Pragmatic Programmer』(Addison-Wesley, 1999)。「あらゆる知識は、システムの中で単一かつ明確で権威ある表現を持たねばならない」の出典。 — [原典 ↗](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)
- **関連:** [デメテルの法則 (Law of Demeter)](#デメテルの法則-law-of-demeter) · [単一責任の原則 (Single Responsibility Principle)](#単一責任の原則-single-responsibility-principle)

### 制約理論 (Theory of Constraints)

`§ 61` · 性能

- **概念:** システムの処理量は、最も詰まっている一か所で決まる。
- **メカニズム:** 鎖には必ず最も弱い環が一つある。それ以外のどこを改善しても、局所的な効率は上がるが全体のスループットは動かない。むしろ悪化することが多い——速くなった上流工程が、本当のボトルネックの前により多くの仕掛品を積み上げるからだ。
- **対立概念:** **制約は移動する** — 一つを緩めれば別のものが制約になる。昨日のボトルネックに合わせて恒久的に最適化された工程は、新しい制約のところで飢える。
- **判断の指針:** 制約を特定し、能力を買い足す前にまず徹底的に使い切り、他の全工程をそれに従属させよ。そのうえで測り直せ。あなたはたった今、別の場所に新しいボトルネックを作ったところだ。
- **出典:** Eliyahu M. Goldratt & Jeff Cox『The Goal: A Process of Ongoing Improvement』(North River Press, 1984)。 — [原典 ↗](https://en.wikipedia.org/wiki/Theory_of_constraints)
- **関連:** [アムダールの法則 (Amdahl's Law)](#アムダールの法則-amdahls-law) · [リトルの法則 (Little's Law)](#リトルの法則-littles-law)

### オッカムの剃刀 (Occam's Razor)

`§ 62` · 認知

- **概念:** 検証されていない仮定が最も少ない説明が、たいてい正しい。
- **メカニズム:** インシデントの圧力下では、思考は面白い仮説に手を伸ばす——カーネルのバグ、壊れたディスク、攻撃者。だが未検証の仮定を最も必要としない説明は、ほぼ常に「20分前に出たデプロイ」である。
- **対立概念:** **ヒッカムの格言** — 系は複数の独立した障害を同時に抱えうる。症状に合う最も単純な物語が、自動的に真実になるわけではない。
- **判断の指針:** 仮説を「未検証の仮定がいくつ必要か」で並べ、最も安いものから検証せよ。「何が壊れたか」の前に「何が変わったか」を問え。
- **出典:** オッカムのウィリアム (1287 年頃–1347) に帰される。「剃刀」の比喩も、定式 *entia non sunt multiplicanda praeter necessitatem* も、彼の倹約の原理に対する後世の注釈である。 — [原典 ↗](https://en.wikipedia.org/wiki/Occam%27s_razor)
- **関連:** [正常性バイアス (Normalcy Bias)](#正常性バイアス-normalcy-bias) · [ハンロンの剃刀 (Hanlon's Razor)](#ハンロンの剃刀-hanlons-razor)

### 単一責任の原則 (Single Responsibility Principle)

`§ 63` · 保守性

- **概念:** 二つの利用者に仕えるモジュールには、両方から食い違う変更要求が届く。
- **メカニズム:** 一つのモジュールが二つの利用者集団に仕える場合、彼らの変更要求は異なるスケジュールで届き、同じファイルの上で衝突する。結合とは本当はモジュール間の呼び出しの話ではない——「誰があなたにそのモジュールの編集を強制できるか」の話だ。
- **対立概念:** **早すぎる分解** — 想像上の責務で分割すると、メソッド1個のクラスが散乱し、複雑さがすべてその間の配線に移るだけになる。
- **判断の指針:** 責務は「コードが何をするか」ではなく「誰が変更を要求してくるか」で定義せよ。同じモジュールに対して別々の人物がそれぞれ編集を要求できるなら、その線でだけ分割せよ。
- **出典:** Robert C. Martin『Agile Software Development: Principles, Patterns, and Practices』(2002)。『The Single Responsibility Principle』(The Clean Code Blog, 2014 年 5 月 8 日、本項のリンク先) で「モジュールはただ一人のアクターに対して責任を負う」と鋭くされ、『Clean Architecture』(2017) で再掲された。 — [原典 ↗](https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html)
- **関連:** [DRY 原則 (DRY Principle)](#dry-原則-dry-principle) · [デメテルの法則 (Law of Demeter)](#デメテルの法則-law-of-demeter) · [コンウェイの法則 (Conway's Law)](#コンウェイの法則-conways-law)

### 驚き最小の原則 (Principle of Least Astonishment)

`§ 64` · ヒューマンインタフェース

- **概念:** 利用者を驚かせる挙動は、少し劣っても予想どおりの挙動より高くつく。
- **メカニズム:** 利用者は、これまで使ってきた似たものすべてから組み立てたモデルを持ってやって来る。「筋は通っているが意外な」振る舞いは、「わずかに劣るが予想どおりの」振る舞いより高くつく。驚きは全利用者が、毎回、永久に支払い続けるからだ。
- **対立概念:** **驚きは相対的である** — 今日の期待だけに合わせた設計は、悪い慣習をその場に凍結する。ときには移行手順を添えて、一度だけ大きく驚かせるのが正しい。
- **判断の指針:** 2つの設計が拮抗したら、利用者がすでに知っている慣習に合うほうを取れ——フラグ名、終了コード、並び順。意図的な驚きは、告知するコストを払える場所にだけ使え。
- **出典:** 言語・インタフェース設計の古くからの言い伝え。Michael F. Cowlishaw『The Design of the REXX Language』(IBM Systems Journal, 1984) に明示的な記述がある。 — [原典 ↗](https://en.wikipedia.org/wiki/Principle_of_least_astonishment)
- **関連:** [ハイラムの法則 (Hyrum's Law)](#ハイラムの法則-hyrums-law) · [知識の呪い (Curse of Knowledge)](#知識の呪い-curse-of-knowledge)

### セカンドシステム症候群 (Second-System Effect)

`§ 65` · システム

- **概念:** 最初の成功のあと、設計者は先送りしたアイデアを二作目に詰め込みがちだ。
- **メカニズム:** 1番目のシステムは、地面の固さを測りかねている者によって慎重に作られる。その成功が慎重さを自信に変え、1回目に見送ったアイデアがすべて一度に書き直しへ流し込まれる。結果は過剰に汎用的で、遅れ、そして多くの場合そもそも出荷されない。
- **対立概念:** **ガルの法則** — 答えは1番目のシステムを凍結することではなく、育てることだ。分割して出荷される書き直しは「2番目のシステム」ではない。
- **判断の指針:** 書き直すときは、願望リストだけでなく制約も引き継げ。見送っていた機能は「実際に利用者を止めていた少数」まで削り、元のシステムを一つずつ置き換えよ。
- **出典:** Fred Brooks『人月の神話』(Addison-Wesley, 1975) 第 5 章。 — [原典 ↗](https://en.wikipedia.org/wiki/Second-system_effect)
- **関連:** [ブルックスの法則 (Brooks' Law)](#ブルックスの法則-brooks-law) · [ガルの法則 (Gall's Law)](#ガルの法則-galls-law) · [劣っている方が勝つ (Worse is Better)](#劣っている方が勝つ-worse-is-better) · [ストラングラーフィグ (Strangler Fig)](#ストラングラーフィグ-strangler-fig)

### ムーアの法則 (Moore's Law)

`§ 66` · 性能

- **概念:** 部品単価が最も安くなるチップのトランジスタ数は、約2年ごとに倍になる。
- **メカニズム:** ムーアの観察は物理ではなく経済のものだった——部品あたりコストが最小になる集積度が、およそ2年で倍になる。これが半世紀成立し、「ハードがいずれ救ってくれる」という前提のあらゆる計画を静かに支えた。だが2005年頃にデナードスケーリングが終わってから、シングルスレッド性能はこの曲線から外れている。
- **対立概念:** **ヴィルトの法則** — 得られた余力は貯金されず消費される。しかもクロック速度はトランジスタ数よりずっと早く頭打ちになった。
- **判断の指針:** ハードウェアが設計を救ってくれる前提で予算を組むな。ワークロードがシングルスレッドかつレイテンシ律速なら、来年のマシンは助けにならない。並列化するか、やる仕事を減らすかだ。
- **出典:** Gordon E. Moore『Cramming More Components onto Integrated Circuits』(Electronics, 1965 年 4 月 19 日、IEEE Solid-State Circuits Society Newsletter 2006 年の再録が本項のリンク先) は毎年の倍増を予測した。2 年ごとへの修正は『Progress in Digital Integrated Electronics』(IEDM, 1975)。 — [原典 ↗](https://doi.org/10.1109/N-SSC.2006.4785860)
- **関連:** [ヴィルトの法則 (Wirth's Law)](#ヴィルトの法則-wirths-law) · [グスタフソンの法則 (Gustafson's Law)](#グスタフソンの法則-gustafsons-law) · [苦い教訓 (The Bitter Lesson)](#苦い教訓-the-bitter-lesson)

### アマラの法則 (Amara's Law)

`§ 67` · 見積り

- **概念:** 新しい技術は、最初の数年は過大評価され、十年単位では過小評価される。
- **メカニズム:** 新技術はデモで評価され——デモは技術を実際より良く見せる——そして既存の設備の上に導入される。既存設備は抵抗する。だから最初の2年は期待外れになる。その後、初期予測を外させたのと同じ複利が10年間逆方向に働き、10年予測もまた外れる。今度は過小に。
- **対立概念:** **そもそも来ないものもある** — 生存者バイアスがこの法則を必然に見せている。長期を迎えられなかった技術は、あとから引用されないからだ。
- **判断の指針:** 新技術についての2年予測は割り引き、10年予測は真に受けよ。ただし計画はデモ版ではなく、実際に出荷される版を前提に立てよ。
- **出典:** Institute for the Future 会長 Roy Amara に帰される。1970 年代以降に流布した言葉。 — [原典 ↗](https://en.wikipedia.org/wiki/Roy_Amara)
- **関連:** [生存者バイアス (Survivorship Bias)](#生存者バイアス-survivorship-bias) · [リンディ効果 (Lindy Effect)](#リンディ効果-lindy-effect)

### 苦い教訓 (The Bitter Lesson)

`§ 68` · システム

- **概念:** AIでは長い目で見ると、計算量とともに伸びる汎用手法が、人が作り込んだ知識に勝ってきた。
- **メカニズム:** AI研究の70年を通じて勝ったのは、利用可能な計算量とともにスケールする探索と学習であり、その領域についての人間の洞察を埋め込んだ手法ではなかった。作り込まれた知識は短期では効き、長期では天井になる。計算資源と違って、毎年安くならないからだ。
- **対立概念:** **計算資源はタダではない** — 固定予算の内側では領域知識が唯一使えるレバーであることも多い。この教訓は分野の軌跡を述べたものであって、今四半期の正解ではない。
- **判断の指針:** 「知っていることを埋め込む」か「より多くのデータや計算から学ぶものを作る」かで迷ったら、予算が倍になったとき勝手に良くなるのはどちらかを問え。数年単位の話なら、そちらに賭けよ。
- **出典:** Richard S. Sutton『The Bitter Lesson』(2019 年 3 月 13 日)。 — [原典 ↗](https://web.archive.org/web/2024/http://www.incompleteideas.net/IncIdeas/BitterLesson.html)
- **関連:** [カーゴ・カルト・エンジニアリング (Cargo Cult Engineering)](#カーゴカルトエンジニアリング-cargo-cult-engineering) · [ムーアの法則 (Moore's Law)](#ムーアの法則-moores-law)

### メトカーフの法則 (Metcalfe's Law)

`§ 69` · システム

- **概念:** ノードが一つ増えるたびに既存の全ノードの価値が上がり、価値は規模より速く増える。
- **メカニズム:** n ノードのネットワークには n(n−1)/2 通りの接続がありうるため、価値は n² に比例すると主張された。指数には異論があり——実在のネットワークには n log n のほうがよく当てはまる——だが形は変わらない。新しいノードは既存の全ノードに価値を足す。だからネットワークは滑らかに成長せず、ある点で一気に傾く。
- **対立概念:** **同じ二次関数はコストでもある** — 接続は利用者どうしでは資産だが、同僚どうしでは負債になる。ブルックスの法則はメトカーフの法則の符号を反転させたものだ。
- **判断の指針:** 価値が他の利用者から生まれるプロダクトでは、初期の労力を機能ではなく「その参加者にとってすでに有用な最小のネットワーク」に注げ。チームでは逆に、接続を削れ。
- **出典:** Robert Metcalfe に帰される (1980 年頃)。n log n による批判は Bob Briscoe, Andrew Odlyzko & Benjamin Tilly『Metcalfe's Law is Wrong』(IEEE Spectrum, 2006 年 7 月)。 — [原典 ↗](https://en.wikipedia.org/wiki/Metcalfe%27s_law)
- **関連:** [ダンバー数 (Dunbar's Number)](#ダンバー数-dunbars-number) · [ブルックスの法則 (Brooks' Law)](#ブルックスの法則-brooks-law)

### リンゲルマン効果 (Ringelmann Effect)

`§ 70` · 組織

- **概念:** 集団が大きくなるほど一人あたりの貢献は減る。誰の成果か見えないと特にそうだ。
- **メカニズム:** リンゲルマンは、綱を一人で引かせた場合とチームで引かせた場合の力を測った。人を増やすたび、一人あたりの寄与は単独時より小さくなった。一部は協調のロスだが、一部は「寄与が分離できなくなった途端に落ちる個人の努力」である。成果が合算され、誰がどの部分を出したか見えない場所ならどこでも起きる。
- **対立概念:** **寄与を分離可能にする** — この効果は人間の性質ではなく仕事の測り方の性質だ。個人の寄与を可視化すれば、その大半は消える。
- **判断の指針:** すべての作業の流れに、名前の付いた担当者一人と、目に見える成果物を与えよ。成果のどの部分を誰が出したか言えないなら、その集団は構成員の総和より少ない成果しか出さないと考えよ。
- **出典:** Maximilien Ringelmann『Recherches sur les moteurs animés: Travail de l'homme』(Annales de l'Institut National Agronomique, 1913)。 — [原典 ↗](https://en.wikipedia.org/wiki/Ringelmann_effect)
- **関連:** [傍観者効果 (Bystander Effect)](#傍観者効果-bystander-effect) · [ダンバー数 (Dunbar's Number)](#ダンバー数-dunbars-number)

### シャーキーの原理 (Shirky Principle)

`§ 71` · インセンティブ

- **概念:** 組織は、自分たちが存在する理由である問題を残そうとする。
- **メカニズム:** ある問題を解くために作られた組織は、その問題が存続することから予算・人員・地位を得る。これが働くのに誰かが冷笑的である必要はない。インセンティブが「自分のチームを不要にすること」を決して指さないだけだ。時間が経つと、解決策は静かに問題の存続理由へと変わる。
- **対立概念:** **永続する問題も実在する** — 長命なチームをすべて自己保存的だと見なせば、必要な保守をしているチームを壊す。保守はうまくいっているときほど見えない。
- **判断の指針:** 何かを直すために作ったチームやツールには、「直った状態」がどう見えるか、いつそれを確認するかを書き出せ。自らの不要化を説明できないプラットフォームチームは、自らの生存を最適化している。
- **出典:** Clay Shirky の言。Kevin Kelly『The Shirky Principle』(The Technium, 2010) で命名・引用された。 — [原典 ↗](https://kk.org/thetechnium/the-shirky-prin/)
- **関連:** [グッドハートの法則 (Goodhart's Law)](#グッドハートの法則-goodharts-law) · [ピーターの法則 (Peter Principle)](#ピーターの法則-peter-principle)

### エラーバジェット (Error Budget)

`§ 72` · 運用

- **概念:** 100% 未満の SLO は許容できる失敗の量を決める。その量は使ってよい予算だ。
- **メカニズム:** プロダクト開発は速度で、運用は信頼性で評価される。だからリリースのたびに交渉になり、声の大きい側が勝つ。ある水準を超えると利用者は違いに気づかない（信頼性 99% のスマートフォンを使う人には 99.99% と 99.999% の差は分からない）のに、最後のわずかな差にいちばんコストがかかり、いちばん変更を止める。目標を明示すれば、目標と完璧の差が予算になる。30 日で 99.9% なら失敗に使えるのは約 43 分で、残りがいくらかを両者が同じ数字で見られる。
- **対立概念:** **逸脱の常態化** — 失敗を許す枠があると、失敗は日常だとチームが学ぶ。本来なら驚くべき障害も予算から差し引かれるだけで、調べられなくなる。
- **判断の指針:** SLO と予算を使い切ったときの方針は、障害の最中ではなく事前に合意せよ。予算が残っていればリリースし、使い切ったら機能リリースを止めて回復するまで信頼性に時間を使え。データ消失とセキュリティは予算の外に置け。
- **出典:** Marc Alvidrez「Embracing Risk」(「Motivation for Error Budgets」節は Mark Roth)、Beyer, Jones, Petoff & Murphy 編『Site Reliability Engineering』(O'Reilly, 2016) 第 3 章。エラーバジェットの定義と「100% がふさわしい信頼性目標であることはおそらくない」という主張の出典。 — [原典 ↗](https://sre.google/sre-book/embracing-risk/)
- **関連:** [グッドハートの法則 (Goodhart's Law)](#グッドハートの法則-goodharts-law) · [スケールの裾野 (The Tail at Scale)](#スケールの裾野-the-tail-at-scale) · [トイル (Toil)](#トイル-toil) · [逸脱の常態化 (Normalization of Deviance)](#逸脱の常態化-normalization-of-deviance) · [アンドン（ラインを止める） (Andon (Stop the Line))](#アンドンラインを止める-andon-stop-the-line)

### トイル (Toil)

`§ 73` · 運用

- **概念:** 手作業の繰り返し運用はサービスと一緒に増え、放っておけば開発の時間を食い尽くす。
- **メカニズム:** トイルとは、手作業で、繰り返され、自動化でき、割り込みでやって来て、終えてもシステムが良くならず、トラフィックや利用者数に比例して増える作業だ。一件ずつは小さく急ぎなので、その場では必ずプロジェクト作業に勝つ。サービスとともに増えるのに開発の時間は増えないので、押し返さないチームは最後にはそれしかしなくなる。
- **対立概念:** **自動化の皮肉** — 作業を自動化すると、自動化が壊れたときに対処するための練習の機会が消える。作って維持するコストが、置き換えるトイルより高くつく自動化もある。
- **判断の指針:** 一人ひとりの時間のうちトイルが占める割合を測り、上限を決めよ（Google は 50%）。同じ作業が三度目に来たら（本書ではなく経験則だ）開発タスクとして起票せよ。利用者数に比例して増える作業は、雑用ではなく欠陥として扱え。
- **出典:** Vivek Rau「Eliminating Toil」、Beyer, Jones, Petoff & Murphy 編『Site Reliability Engineering』(O'Reilly, 2016) 第 5 章。トイルの定義と 50% 上限の出典。 — [原典 ↗](https://sre.google/sre-book/eliminating-toil/)
- **関連:** [自動化の皮肉 (Ironies of Automation)](#自動化の皮肉-ironies-of-automation) · [エラーバジェット (Error Budget)](#エラーバジェット-error-budget) · [作った者が運用する (You Build It, You Run It)](#作った者が運用する-you-build-it-you-run-it) · [チャーンルール (Churn Rule)](#チャーンルール-churn-rule)

### 非難なきポストモーテム (Blameless Postmortem)

`§ 74` · 運用

- **概念:** 障害のいちばん近くにいた人を罰すると、人は自分のしたことを隠すようになる。
- **メカニズム:** 障害の現場にいた人だけが、何を見て、何を信じ、なぜその操作がその時点で妥当に思えたかを正確に語れる。語ることで不利益を被るなら、その人は話を短くする。すると組織は、ミスを起こしやすくしていた条件を直すための情報を失う。同じ誤りが、別の人の名前で繰り返される。非難しないことは、何をしても責任を問わないことではない。公正な文化は、悪い仕組みの中での正直なミスと、リスクを承知で無視したこととを区別する。
- **対立概念:** **責任の拡散** — 誰も責任を負わないと、対策項目に持ち主がいなくなり、いつの間にか立ち消える。だから責めないことと引き換えに、修正の担当者だけは名指しするチームもある。
- **判断の指針:** ポストモーテムは、各人が何を見て、なぜその操作がその時点で妥当だったかの時系列として書き、人ではなく仕組みの変更で締めくくれ。変更ごとに担当者を一人名指しし、期日を付けよ。根本原因に「ヒューマンエラー」と書くことを禁じ、何がその誤りを起こしやすくしたかを問え。
- **出典:** John Allspaw『Blameless PostMortems and a Just Culture』(Code as Craft, Etsy, 2012)。実践としては Lunney & Lueder「Postmortem Culture」『Site Reliability Engineering』(O'Reilly, 2016) 第 15 章にまとめられている。 — [原典 ↗](https://www.etsy.com/codeascraft/blameless-postmortems)
- **関連:** [スイスチーズモデル (Swiss Cheese Model)](#スイスチーズモデル-swiss-cheese-model) · [逸脱の常態化 (Normalization of Deviance)](#逸脱の常態化-normalization-of-deviance) · [ハンロンの剃刀 (Hanlon's Razor)](#ハンロンの剃刀-hanlons-razor) · [傍観者効果 (Bystander Effect)](#傍観者効果-bystander-effect) · [善意ではなく仕組み (Mechanisms, Not Good Intentions)](#善意ではなく仕組み-mechanisms-not-good-intentions) · [なぜなぜ分析 (Five Whys)](#なぜなぜ分析-five-whys)

### ワーキング・バックワーズ (Working Backwards)

`§ 75` · 意思決定

- **概念:** 解決策から始めると、誰も必要としないものを作ることが多い。発表文から始めれば早く気づける。
- **メカニズム:** エンジニアは作れるものから考え始め、顧客は後から探しがちだ。コードを書く前にプレスリリースを書くと、誰が顧客で、どんな問題を抱え、既存の手段がなぜ駄目なのかを、顧客自身の言葉で書かざるを得なくなる。その一枚が書きにくいなら、製品の輪郭がぼやけている。紙一枚を書き直すほうが、製品を作り直すよりずっと安い。
- **対立概念:** **作って学ぶ** — 顧客が紙の上では判断できないもの（新しいプラットフォーム、基盤の変更、前例のないもの）では、磨いたプレスリリースより安い試作品のほうが多くを教えてくれる。
- **判断の指針:** プロジェクトを始める前に、顧客向けの一枚のプレスリリースと FAQ を書き、チームでレビューせよ。最初の段落で顧客とその問題を言えないなら、作り始めるな。
- **出典:** Werner Vogels『Working Backwards』(All Things Distributed, 2006)。Amazon の CTO がプレスリリースから書き始める手順を説明したもの。「プレスリリースが書きにくいなら、その製品はたぶんひどい」は Ian McAllister の Quora の回答「What is Amazon's approach to product development and product management?」から。PR/FAQ の全体像は Colin Bryar & Bill Carr『Working Backwards』(St. Martin's Press, 2021)。 — [原典 ↗](https://www.allthingsdistributed.com/2006/11/working_backwards.html)
- **関連:** [XY問題 (XY Problem)](#xy問題-xy-problem) · [YAGNI (YAGNI)](#yagni-yagni)

### 反対してもコミットする (Disagree and Commit)

`§ 76` · 意思決定

- **概念:** 全員の同意を待つより、決めて実行し、誤りなら軌道修正するほうが速いことが多い。
- **メカニズム:** 合意を求める集団では、決定は最も粘る懐疑派の速度でしか進まない。しかも議論の終盤では、正解は分からないことが多い。議論に負けた反対者が、決まった方針を半端にしか実行しないこともあり、どちらが正しかったにせよ結果を悪くする。「同意するか」と「コミットするか」を分ければ、反対は全部言い切ったうえで、実行は全力で進められる。
- **対立概念:** **集団浅慮** — コミットを重んじる文化では、人は早々に反対をやめることを覚える。黙って従えば、誤りを見つけたはずの異論が表に出なくなる。
- **判断の指針:** 反対意見は一度、理由とともに全部言え。そのうえで「反対だがコミットする」と宣言し、自分の案だったかのように実行せよ。立場が上の人も同じことをせよ。チームに自分を説得させるのではなく、チームの判断を支えよ。ただし取り返しのつかない決定や、安全・倫理上のリスクがある決定では、黙ってコミットせずエスカレーションせよ。
- **出典:** Jeff Bezos『2016 年 株主への手紙』(Amazon.com, Inc., 2017 年)。"use the phrase 'disagree and commit'" と Amazon Studios の例。語句自体は Amazon 以前からある。Karen Southwick『High Noon』(1999) は Sun Microsystems の Scott McNealy がこの語を使っていたと記しており、Intel 発祥とする説もある。 — [原典 ↗](https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders)
- **関連:** [タイプ 1／タイプ 2 の意思決定 (Type 1 vs Type 2 Decisions)](#タイプ-1タイプ-2-の意思決定-type-1-vs-type-2-decisions) · [パーキンソンの凡俗法則 (Law of Triviality)](#パーキンソンの凡俗法則-law-of-triviality)

### 作った者が運用する (You Build It, You Run It)

`§ 77` · 運用

- **概念:** サービスを作るチームが運用も担えば、運用上の弱点のコストは、それを直せる人のところに落ちる。
- **メカニズム:** ソフトウェアを壁の向こうの運用チームに投げ渡すと、呼び出しを受けて怒った顧客に向き合う人と、コードを変えられる人が別々になる。だから修正は遅れるか、回避策で終わる。自分のサービスで呼び出される開発者は、どの手抜きが痛いかを身をもって知り、夜中に起こされるのが自分なので障害を前提に設計する。運用していれば顧客とも日々接するので、苦情から変更までの距離も縮まる。ただしこの動機づけが働くのは、所有が本物のときだけだ。呼び出される原因を、チーム自身が変えられなければならない。
- **対立概念:** **開発者の認知負荷** — 開発から運用までを丸ごと持つと、開発者一人が知るべきことと毎週抱える優先事項が増える。共通の道具とオンコールのローテーションがなければ燃え尽きに行き着く。このモデルを採る Netflix も、幅より深さを求める人には、そうした役割を見つける手助けをするとしている。
- **判断の指針:** サービスをリリースしたチームをそのサービスのオンコールに就け、呼び出しの原因を直す権限とデプロイ権限も渡せ。デプロイ、可観測性、アラートの共通基盤（舗装された道）とオンコールのローテーションを組み合わせ、一人が全部を抱えないようにせよ。呼び出される対象を自分で変えられないチームには適用するな。それでは所有を渡したことにならず、呼び出しを押し付けるだけだ。
- **出典:** Jim Gray「A Conversation with Werner Vogels」『ACM Queue』4(4) (2006)。Amazon の CTO が、各サービスチームが作ったものを自分で運用する理由を語ったインタビューで、"You build it, you run it." の出典。トレードオフは Philip Fisher-Ogden, Greg Burrell & Dianne Marsh『Full Cycle Developers at Netflix — Operate What You Build』(Netflix Technology Blog, 2018) から。 — [原典 ↗](https://queue.acm.org/detail.cfm?id=1142065)
- **関連:** [コンウェイの法則 (Conway's Law)](#コンウェイの法則-conways-law) · [トイル (Toil)](#トイル-toil) · [善意ではなく仕組み (Mechanisms, Not Good Intentions)](#善意ではなく仕組み-mechanisms-not-good-intentions)

### 静的安定性 (Static Stability)

`§ 78` · 分散システム

- **概念:** 障害を乗り切るために新しい動作を必要とするシステムは、まさに状況が悪いときにその動作が成功することに賭けている。
- **メカニズム:** 障害からの復旧には、普段はしないことが伴うのが普通だ。代わりのインスタンスを起動する、コントロールプレーンを呼ぶ、経路を切り替える。コントロールプレーンはデータプレーンより可動部が多く、そのぶん劣化しやすい。つまり復旧は、いちばん必要なときに、弱いほうの半分に寄りかかる。静的に安定した設計では、依存先が劣化してもシステム全体は動き続ける。必要な容量と状態があらかじめそろっているからだ。Amazon はステートレスなサービスを 3 つのアベイラビリティーゾーンに 50% の余剰を持たせて動かし、1 つを失っても残り 2 つが何も起動せずに負荷を引き受けられるようにしている。
- **対立概念:** **遊休容量のコスト** — まれにしか起きない障害のための容量は、毎日支払うことになる。復旧が遅くても許される場所では、需要に合わせて伸縮させるほうが安い。リージョン単位ではなくゾーン単位で作れば複雑さが増すことは、出典自身も認めている。
- **判断の指針:** ゾーンや依存先を一つ失ったとき、サービスが復旧のために何をしなければならないかを書き出せ。コントロールプレーンを呼ぶ手順、何かを起動する手順のそれぞれについて、代わりに事前に用意しておけないかを決めよ。全ゾーンに予備の容量を置く、最後に正常だった設定を手元にキャッシュする、コントロールプレーンが落ちても配信を続ける。これは失敗が許されない経路に限れ。それ以外は需要に応じて伸縮させよ。
- **出典:** Becky Weiss & Mike Furr『Static stability using Availability Zones』(Amazon Builders' Library, 2019)。"In a statically stable design, the overall system keeps working even when a dependency becomes impaired" という定義、EC2 のコントロールプレーンとデータプレーンの区別、3 ゾーンでの 50% の余剰の出典。 — [原典 ↗](https://builder.aws.com/content/3K9SiqiJ369TGkkGzqPM95BuYWI/static-stability-using-availability-zones)
- **関連:** [フォールバックを避ける (Avoid Fallback)](#フォールバックを避ける-avoid-fallback) · [一定の作業量 (Constant Work)](#一定の作業量-constant-work) · [分散コンピューティングの誤謬 (Fallacies of Distributed Computing)](#分散コンピューティングの誤謬-fallacies-of-distributed-computing)

### フォールバックを避ける (Avoid Fallback)

`§ 79` · 分散システム

- **概念:** フォールバック経路は何かがすでに壊れたあとでしか動かない。だから、システムでいちばん試されていないコードが最悪の条件で走る。
- **メカニズム:** フォールバックのコードは平常時には眠っているので、そのバグも、容量の限界も、古くなったデータも、必要になるまで誰も気づかない。そして障害の最中、負荷がいつもと違い、ほかの部分も劣化しているときに動き出し、すでにおかしな振る舞いをしているシステムに新しいモードを一つ足す。キャッシュを迂回してデータベースへ直接向かうフォールバックや、予備のサービスへのフォールバックは、その負荷を想定していない場所に負荷を移し、部分的な障害を広げることがある。Amazon の 2001 年の小売サイト障害はそうして始まった。Amazon の結論は、その労力は主経路の可用性を上げるほうに使うべきだというものだ。
- **対立概念:** **グレースフル・デグラデーション** — 縮退した経路が常に動いているなら、エラーを返すより縮退した答えを返すほうがよい。おすすめ欄が普段から出している固定リストに切り替える場合などだ。危ないのは縮退そのものではなく、普段一度も動かない経路だ。
- **判断の指針:** フォールバックを足す前に、同じ労力で主経路の可用性を上げられないかを問え。リクエストのたびに取りに行くのではなく事前に呼び出し側へデータをプッシュしておく、冗長化する、といった手だ。フォールバックを残すなら、障害時だけでなく本番で常に動かし、その出力を主経路と同等に正当なデータ源として扱え。誰も動かしたことのないフォールバック経路は消せ。
- **出典:** Jacob Gabrielson『Avoiding fallback in distributed systems』(Amazon Builders' Library, 2019)。"At Amazon, we avoid fallback in our systems because it's difficult to prove and its effectiveness is hard to test." の出典。 — [原典 ↗](https://builder.aws.com/content/3EuS9Sakq7L3VLQIF3qzfMfke1Y/avoiding-fallback-in-distributed-systems)
- **関連:** [静的安定性 (Static Stability)](#静的安定性-static-stability) · [一定の作業量 (Constant Work)](#一定の作業量-constant-work) · [自動化の皮肉 (Ironies of Automation)](#自動化の皮肉-ironies-of-automation) · [カオスエンジニアリング (Chaos Engineering)](#カオスエンジニアリング-chaos-engineering)

### 一定の作業量 (Constant Work)

`§ 80` · 分散システム

- **概念:** 変更や障害の数に応じて仕事が増えるシステムは、余力がいちばん少ないときにいちばん多くの仕事をする。
- **メカニズム:** 多くのシステムは、状況が悪くなるほど仕事が増える。再試行が増え、伝播すべき変更が増え、処理すべきヘルス状態の遷移が増える。その追加の仕事は余力がいちばん少ないときにやって来て、それを処理するのは、ふだんいちばん実行されないコードだ。一定の作業量で動く設計は、状況にかかわらず同じだけ仕事をする。Route 53 ではヘルスチェックの集約役が、全ステータスを収めた固定長の表を数秒ごとに DNS サーバーへ送り、Network Load Balancer のノードは何も変わっていなくても数秒ごとに S3 から設定全体を読み込み直す。障害が一斉に起きても仕事は増えないので、本番で初めて出会う過負荷モードがない。
- **対立概念:** **伸縮性** — 毎回すべての仕事をすれば、ほとんど何も変わっていないときに資源を無駄にする。設定やヘルス状態の伝播ならコストは無視できるが、Web サーバー群では、ピーク容量を一日中動かすより負荷に合わせて伸縮させる節約のほうがたいてい勝つ。
- **判断の指針:** 設定やヘルス状態を伝播する制御ループでは、変更のたびに差分を送るのではなく、決まった間隔で状態全体を送れ。ペイロードは平均ではなく最大に合わせて設計せよ。仕事の量を、変わったものの数に依存させるな。これは仕事が小さい場所で使え。リクエストを処理する容量は負荷に応じて伸縮させ、過負荷時の振る舞いを明示的に設計せよ。
- **出典:** Colm MacCárthaigh『Reliability, constant work, and a good cup of coffee』(Amazon Builders' Library, 2021)。コーヒーアーン (大型の給茶器) のたとえ、Route 53 のヘルスチェックと Network Load Balancer の設定配布の例、物理的な一定作業は "usually come at the cost of waste" と認めている箇所の出典。 — [原典 ↗](https://builder.aws.com/content/3F05oqNtNUWxHJ5r6L6I2HrH4rI/reliability-constant-work-and-a-good-cup-of-coffee)
- **関連:** [静的安定性 (Static Stability)](#静的安定性-static-stability) · [フォールバックを避ける (Avoid Fallback)](#フォールバックを避ける-avoid-fallback)

### 善意ではなく仕組み (Mechanisms, Not Good Intentions)

`§ 81` · 組織

- **概念:** 失敗のあとで「もっと気をつけろ」と求めても、ほとんど何も変わらない。失敗した人は、もともと気をつけていたからだ。
- **メカニズム:** ミスの多くは、善意があり、ルールも知っている人が起こす。だからもう一度言い聞かせても、その人に欠けていたものは何も足されない。注意力は有限で、時間とともに薄れる。誰かが覚えていることに頼る対策は、しばしば薄れ、同じ誤りが戻ってくる。行動を変えるのは仕組みだ。道具、その道具が実際に使われていること（採用）、機能しているかを確かめる点検（検査）の三つがそろったものだ。誰も読まないチェックリストは仕組みではない。マージを止めるゲートは仕組みだ。
- **対立概念:** **代理指標に抗う** — 仕組みは、それ自体が目的に固まりうる。プロセスに従ったかどうかで評価されるようになると、人は悪い結果を「プロセスどおりにやった」と弁護し、そのプロセスがまだ結果の役に立っているかを誰も問わなくなる。
- **判断の指針:** ポストモーテムの対策項目が「注意する」「チームに周知する」「ダブルチェックする」なら、誰も覚えていなくても働く変更に置き換えよ。CI のチェック、安全な既定値、飛ばせない入力欄などだ。それぞれに担当者と、使われているか、効いたかを点検する期日を付けよ。もう結果を変えていない仕組みは廃止せよ。
- **出典:** Amazon 社内の言い回しで、Bezos の公表文書が出典ではない。Gregor Hohpe『Strategy Is a Winding Road. Mechanisms Keep You on Track.』(AWS Enterprise Strategy blog, 2021) が "At Amazon we have a common saying: 'Good intentions don't work—mechanisms do'" と記録し、仕組みを道具・採用・点検からなるものと定義している。Jeff Bezos の言葉とする説は二次資料による。対抗する力は Jeff Bezos『2016 年 株主への手紙』(Amazon.com, Inc., 2017 年) の "The process is not the thing." から。 — [原典 ↗](https://aws.amazon.com/blogs/enterprise-strategy/strategy-is-a-winding-road-mechanisms-keep-you-on-track/)
- **関連:** [非難なきポストモーテム (Blameless Postmortem)](#非難なきポストモーテム-blameless-postmortem) · [グッドハートの法則 (Goodhart's Law)](#グッドハートの法則-goodharts-law) · [作った者が運用する (You Build It, You Run It)](#作った者が運用する-you-build-it-you-run-it) · [統制ではなく文脈を (Context, Not Control)](#統制ではなく文脈を-context-not-control)

### アンドン（ラインを止める） (Andon (Stop the Line))

`§ 82` · 運用

- **概念:** 異常に気づいた人が誰でもラインを止められれば、欠陥は下流に流れず、見つけるのも直すのも高くつく前に捕まる。
- **メカニズム:** 欠陥は、作られたその場で捕まえれば原因は一つで、直し方も明らかだ。三工程先で見つかった同じ欠陥は、その上に積まれた作業の下に埋もれ、事情を説明できた人はもう別の仕事をしている。ラインを動かし続けろという圧力があると、作業者は自分が見たものを軽く見積もり、下流の誰かが気づくだろうと考える。トヨタの自働化は、この判断を工程の中に移した。最初は糸が切れると自ら止まる織機、のちにはどの作業者でも引けばラインが止まり、アンドンが点灯する紐だ。止めること自体が目的なのではない。証拠が新しいうちに、異常を調べざるを得なくすることが目的だ。
- **対立概念:** **スループットの圧力** — 止めるたびに産出は減る。スループットで評価されるチームでは、紐を引くことは誰かが説明を求められるコストになり、頻繁に、あるいは誤って止まる紐は人にそれを迂回することを教える。
- **判断の指針:** main ブランチのビルドが赤い、カナリアが失敗した、SLO を割った、といったときには、全員のマージやデプロイが止まるようにせよ。その紐は誰でも許可なく引けるようにせよ。誤発火がめったに起きない程度に条件を絞り、誰も調べない停止は、引いた人ではなく対応の側の欠陥として扱え。
- **出典:** トヨタ自動車『トヨタ生産方式』(global.toyota の公式ページ)。自働化、アンドン (異常表示盤)、どの作業者も引ける停止紐の出典。その源流を、緯糸切断自動停止装置を備えた豊田式汽力織機 (1896 年開発) に求めている。同ページは大野耐一 (1912–1990) がこの方式と、ジャスト・イン・タイムの枠組みを確立したとしている。 — [原典 ↗](https://global.toyota/en/company/vision-and-philosophy/production-system/)
- **関連:** [逸脱の常態化 (Normalization of Deviance)](#逸脱の常態化-normalization-of-deviance) · [エラーバジェット (Error Budget)](#エラーバジェット-error-budget) · [なぜなぜ分析 (Five Whys)](#なぜなぜ分析-five-whys)

### なぜなぜ分析 (Five Whys)

`§ 83` · 運用

- **概念:** 「なぜ失敗したか」への最初の答えはたいてい症状であり、症状だけを直せば原因は残って、また同じ失敗を起こす。
- **メカニズム:** 調査は、誰かが防げたはずだと言える最初の原因で止まりがちだ。そこで止めればチケットを閉じられ、対策も一つ書けるからだ。その原因はたいてい時間的にいちばん近いもの（誤った設定の投入、ディスクの枯渇）で、直してもこの一件が消えるだけで、それを生んだものには手が付かない。答えのそれぞれに対してもう一度なぜと問えば、連鎖をさかのぼって、直せば同じ種類の失敗をまとめて防げる条件（欠けていたチェック、持ち主のいないプロセス）に行き着く。五回は目安であって、必要な深さではない。
- **対立概念:** **スイスチーズモデル** — 一本のなぜの連鎖は、複数の経路があった事故から一本だけを選び出す。各段で分析者が何を選ぶかで、出てくる根本原因が変わる。複雑なシステムでは、そもそも単一の根本原因など存在しないことが多い。
- **判断の指針:** ポストモーテムでは、答えのそれぞれになぜを問い続け、チームが変えられるもので、しかも変えていれば連鎖を断てたはずのものに行き着くまで問い続けよ。その変更には担当者を付けよ。一つの答えに原因が複数あるなら枝分かれさせ、人で止めるな。「エンジニアがミスをした」は、なぜそのミスが起こしやすかったかを問う合図だ。
- **出典:** 大野耐一『トヨタ生産方式：脱規模の経営をめざして』(ダイヤモンド社, 1978 年)。英訳『Toyota Production System: Beyond Large-Scale Production』(Productivity Press, 1988) 第 2 章「Evolution of the Toyota Production System」の節「Repeating Why Five Times」。トヨタの問題解決の基本としての「なぜを五回繰り返す」の出典。 — [原典 ↗](https://www.routledge.com/Toyota-Production-System-Beyond-Large-Scale-Production/Ohno/p/book/9780915299140)
- **関連:** [スイスチーズモデル (Swiss Cheese Model)](#スイスチーズモデル-swiss-cheese-model) · [通常事故理論 (Normal Accident Theory)](#通常事故理論-normal-accident-theory) · [非難なきポストモーテム (Blameless Postmortem)](#非難なきポストモーテム-blameless-postmortem) · [アンドン（ラインを止める） (Andon (Stop the Line))](#アンドンラインを止める-andon-stop-the-line) · [XY問題 (XY Problem)](#xy問題-xy-problem)

### カオスエンジニアリング (Chaos Engineering)

`§ 84` · 運用

- **概念:** 一度も試されていない耐障害性は仮説にすぎない。予定を組もうと組むまいと、本番がいずれそれを試す。
- **メカニズム:** フェイルオーバー、リトライ、冗長構成は、何かが壊れたときにしか動かない。だから障害と障害の間に劣化する。設定がずれ、依存が増え、タイムアウトが変わっても、本物の障害が来るまで誰も気づかない。ステージングは本番のトラフィックもデータも結合も再現できないので、そこでの試験が人が実際に使うシステムについて教えてくれることは、期待するより少ない。定常状態についての仮説を立てたうえで本番に意図的に障害を注入すれば、弱点は深夜 3 時ではなく、エンジニアが見ている平日の午後に表に出る。Netflix は AWS への移行初期に、インスタンスを無作為に落とす Chaos Monkey を作り、どのサービスも一台失っても生き残るよう求めた。
- **対立概念:** **まず害をなさない** — 実際の顧客が頼っているシステムをわざと劣化させれば、その信頼を代償にすることになる。同じ知見の多くは、障害注入テストやゲームデイ、設計レビューでもっと安く得られる。もろいと分かっているシステムで実験しても分かっていたことを確かめるだけなので、まず直せ。
- **判断の指針:** 依存先を一つ選び、それが落ちている間の定常状態がどうあるべきかを書き出し、業務時間中に中止スイッチと見張り役を用意したうえで、本番でそれを取り除け。トラフィックのごく一部から始め、システムが持ちこたえてから範囲を広げよ。倒れると分かっているサービスでは実験するな。
- **出典:** 『Principles of Chaos Engineering』(principlesofchaos.org, 2019 年 3 月最終更新)。定義、定常状態の仮説、本番での実験、影響範囲の最小化の出典。Netflix Technology Blog『5 Lessons We've Learned Using AWS』(2010) は Chaos Monkey を初めて紹介した記事。 — [原典 ↗](https://principlesofchaos.org/)
- **関連:** [マーフィーの法則 (Murphy's Law)](#マーフィーの法則-murphys-law) · [分散コンピューティングの誤謬 (Fallacies of Distributed Computing)](#分散コンピューティングの誤謬-fallacies-of-distributed-computing) · [フォールバックを避ける (Avoid Fallback)](#フォールバックを避ける-avoid-fallback)

### 統制ではなく文脈を (Context, Not Control)

`§ 85` · 組織

- **概念:** ルールと承認は、共有された理解ほどにはスケールしない。手順を渡された人より、目標の背景を渡された人のほうが、現場でよい判断をする。
- **メカニズム:** ルールは、書いた人が予見できた場面についての判断を固めたものだ。だから予見できなかった場面では外れる。承認を一段挟むごとに、判断は、申請する側より細部を知らない人の手に渡る。会社が大きくなると、障害のたびにルールが一つ増え、減るより速く積み上がり、やがて人は手順に従うだけで、結果を考えなくなる。管理者が力を「なぜ」（目標、制約、何がよい状態か）に注げば、仕事にいちばん近い人がすばやく決め、しかも同じ方向に進める。Netflix はこの状態を「高度に整合し、疎に結合した」と呼ぶ。
- **対立概念:** **ガードレール** — 一部の失敗（認証情報の漏洩、コンプライアンス違反、取り消せない削除）は判断に任せるには高くつきすぎる。まだ文脈を身につけていない新人には役に立たない。
- **判断の指針:** 自分なら別の判断をしただろうという決定をチームが下したら、ルールを書く前に、彼らに欠けていた文脈は何かを問い、まず文脈を直せ。強い統制（承認ゲート、強制されるポリシー）は、取り返しのつかない決定、倫理に反する決定、重大なリスクを伴う決定に限れ。それぞれがなぜ存在するかを書き残し、理由が消えたら外せるようにせよ。
- **出典:** Netflix『Netflix Culture Memo』(jobs.netflix.com, 2024 年頃の版)。同じ原則は Reed Hastings & Erin Meyer『No Rules Rules: Netflix and the Culture of Reinvention』(Penguin Press, 2020) にもまとめられている。「context not control」、「highly aligned and loosely coupled」、成長に伴うプロセスの肥大を避けるためにルールを最小限に保つという方針の出典。 — [原典 ↗](https://jobs.netflix.com/culture)
- **関連:** [コンウェイの法則 (Conway's Law)](#コンウェイの法則-conways-law) · [善意ではなく仕組み (Mechanisms, Not Good Intentions)](#善意ではなく仕組み-mechanisms-not-good-intentions) · [知識の呪い (Curse of Knowledge)](#知識の呪い-curse-of-knowledge)

### コードの健全性を上げるなら承認する (Approve What Improves Code Health)

`§ 86` · 保守性

- **概念:** すべての変更に完璧を求めるとレビューが遅くなり、遅いレビューはコードベースを良くするどころか悪くする。
- **メカニズム:** 完璧なコードは存在せず、より良いコードがあるだけだ。完璧を待つレビュアーは誰も届かない基準を掲げ、その間変更は止まる。作者は作業をまとめて大きな変更にし、そのぶんレビューは粗くなる。あるいは直すべきコードに手を出さなくなり、変更が運んでいたはずの改善は結局入らない。正味で良くなるかを基準にすれば、マージのたびにコードベースは正しい方向へ進み、しかもレビュアーは悪くする変更を拒める。
- **対立概念:** **割れ窓理論** — 正味では改善だからと小さな欠点を一つずつ通していくと、許された欠点だらけのコードベースが残り、一つ通すたびに次を通しやすくなる。
- **判断の指針:** 変更が以前よりコードを確実に健全にするなら、自分なら違う書き方をしたとしても承認せよ。磨き込みの指摘には「Nit:」を付けて作者が見送れるようにし、ブロックするのはコードを悪くする点だけにせよ。緊急時を除き、全体としてのコードの健全性を確実に悪くする変更は承認するな。
- **出典:** Google「The Standard of Code Review」『Google Engineering Practices Documentation』(2019)。"favor approving a CL once it is in a state where it definitely improves the overall code health"、"there is no such thing as 'perfect' code—there is only better code"、任意の指摘に付ける「Nit:」の出典。 — [原典 ↗](https://google.github.io/eng-practices/review/reviewer/standard.html)
- **関連:** [ボーイスカウトの規則 (Boy Scout Rule)](#ボーイスカウトの規則-boy-scout-rule) · [割れ窓理論 (Broken Windows Theory)](#割れ窓理論-broken-windows-theory) · [パーキンソンの凡俗法則 (Law of Triviality)](#パーキンソンの凡俗法則-law-of-triviality)

### ビヨンセ・ルール (Beyoncé Rule)

`§ 87` · 保守性

- **概念:** 共有コードベースでは、どのテストも確かめていない挙動こそが予告なく変わる。
- **メカニズム:** コードベース全体が使う基盤を変えるチームは、呼び出し側をすべて読むことはできない。規模が大きくなると、確かめられる契約はテストスイートしかない。スイートが確かめていない挙動は変更する側から見えず、予告なく変わる。不注意だからではなく、それが大事だと知らせるものが何もないからだ。このルールは、その死角を責任の割り当てに変える。無関係な変更が自分たちのテストを全部通したのに製品が壊れたなら、修正も足りなかったテストも自分たちの仕事だ。これが公平に成り立つのは、誰の変更に対しても全員のテストを走らせる CI が行き渡っている場合に限られる。
- **対立概念:** **チャーンルール** — テストの形をした契約は、変更する側に何を壊したかを教えるだけで、壊してよかったことにはならない。変更するチームは利用者への移行作業をなお負う。
- **判断の指針:** 共有ライブラリや依存先に頼っている挙動には、すべてテストを書け。そしてそのテストが、他人の変更を止める CI の中で走るようにせよ。テストが捉えられずに壊れたら、障害を閉じる前にそのテストを足せ。共有コードを持つ側なら、テストが契約だと先に宣言せよ。ただし自分の変更で利用者のテストを実際に走らせていないなら、このルールを持ち出すな。
- **出典:** Adam Bender「Testing Overview」、Winters, Manshreck & Wright『Software Engineering at Google』(O'Reilly, 2020) 第 11 章。"If you liked it, then you shoulda put a test on it" と、コードベース全体に変更をかける基盤チームがこのルールを使うことの出典。 — [原典 ↗](https://abseil.io/resources/swe-book/html/ch11.html)
- **関連:** [ハイラムの法則 (Hyrum's Law)](#ハイラムの法則-hyrums-law) · [チャーンルール (Churn Rule)](#チャーンルール-churn-rule)

### チャーンルール (Churn Rule)

`§ 88` · 組織

- **概念:** 共有基盤を変えるチームが移行作業を利用者に押しつけられると、変更のコストは利用者の数だけ膨らむ。
- **メカニズム:** 利用側のチームはどれも、初めて見る問題にゼロから取りかかり、自分の分だけ片づけて、得た知識を捨てる。チームが何百もあれば、浅い学習が何百回も繰り返され、依存するプロジェクトは追従するだけで年々多くの手間を取られる。変更したチームにはその請求書が届かないので、変更を減らしたり安くしたりする理由がない。移行を変更する側の仕事と決めれば、コストは決定を下した場所に戻り、一度問題を深く学んだ少数の専門家がそれをすべての箇所に適用できる。
- **対立概念:** **コードオーナーシップ** — 普段触っていないコードを変える人は、そのコードにある固有の事情を見落とす。だから中央で一括して行う移行でもオーナーチームのレビューは要るし、オーナーにしか安全にできない変更もある。
- **判断の指針:** ライブラリやサービス、プラットフォームを持つ側なら、移行作業を変更の一部として見積もれ。呼び出し側は自分で移すか、後方互換を保ったままその場で変えよ。非推奨の告知と期限だけを移行計画として出すな。コードベースをまたぐ変更を安くする道具に投資し、変更はそれぞれ黙って入れずにオーナーチームのレビューに回せ。
- **出典:** Titus Winters「What Is Software Engineering?」、Winters, Manshreck & Wright『Software Engineering at Google』(O'Reilly, 2020) 第 1 章。2012 年に定めた「Churn Rule」("infrastructure teams must do the work to move their internal users to new versions themselves or do the update in place, in backward-compatible fashion") の出典。 — [原典 ↗](https://abseil.io/resources/swe-book/html/ch01.html)
- **関連:** [ビヨンセ・ルール (Beyoncé Rule)](#ビヨンセルール-beyoncé-rule) · [ハイラムの法則 (Hyrum's Law)](#ハイラムの法則-hyrums-law) · [トイル (Toil)](#トイル-toil)

### 時間を固定し、スコープを変える (Fixed Time, Variable Scope)

`§ 89` · 見積り

- **概念:** スコープを固定して時間を固定しないと、ずれるのは期日で、スコープは残る。時間を固定すれば、何が大事かを選ばざるを得なくなる。
- **メカニズム:** 見積りは設計から始まって数字で終わる。そしてその数字はたいてい同じ方向に外れる。未知のことは作業が進んでから初めて表に出るからだ。期日がずれてもスコープは残る。どの項目にも推す人がいて、何かを削るより時間を延ばすほうが安く感じられる。先に時間を固定すると（『Shape Up』はこれを「アペタイト」と呼ぶ）、問いは「どれだけかかるか」から「この時間で出せる最良の版は何か」に変わり、スコープを削ることが失敗の告白ではなく普通の判断になる。超過したプロジェクトに延長を重ねるのも同じ力で、そこにサンクコストが拍車をかけている。
- **対立概念:** **隠れた変数としての品質** — 期日が固定されてもスコープを削れない、あるいは削らないチームは、代わりにテストやレビュー、エラー処理を削る。また、プロトコルやコンプライアンス要件のように、それ以下に切っては出す意味のない下限がある仕事もある。
- **判断の指針:** 作業を始める前に、どれだけかかるかではなく、どれだけの時間をかける価値があるかを決め、スコープをそれに合わせて形づくれ。時間が尽きたら原則として止めよ。できた部分が単独で成り立つなら出し、そうでなければ問題の切り方を作り直して、もう一度賭けるかを改めて決めよ。黙って延長するな。削るのは機能であって、テストやレビューではない。筋の通った最小単位より細かく切れない仕事には、時間を固定するな。
- **出典:** Ryan Singer『Shape Up』(Basecamp, 2019) 第 3 章「Set Boundaries」。アペタイトと "fixed time, variable scope" の出典。第 8 章「The Betting Table」のサーキットブレーカー ("by default the project doesn't get an extension")。先行して 37signals『Getting Real』(2006)「Fix Time and Budget, Flex Scope」("Never throw more time or money at a problem, just scale back the scope")。 — [原典 ↗](https://basecamp.com/shapeup/1.2-chapter-03)
- **関連:** [パーキンソンの法則 (Parkinson's Law)](#パーキンソンの法則-parkinsons-law) · [ホフスタッターの法則 (Hofstadter's Law)](#ホフスタッターの法則-hofstadters-law) · [サンクコストの誤謬 (Sunk Cost Fallacy)](#サンクコストの誤謬-sunk-cost-fallacy)

### ストラングラーフィグ (Strangler Fig)

`§ 90` · 保守性

- **概念:** 稼働中のシステムは、一度に置き換えるより、周縁から少しずつ置き換えるほうがたいてい安全だ。
- **メカニズム:** 全面的な書き直しは、誰も書き残していない何年分もの挙動を再現しなければならない。その間も利用者は新しい機能を必要とし、それは古いシステムに足すしかないので、新システムが使えるようになる前に目標が動いていく。最後まで本番に何も出ないので、リスクも価値も切り替え日に一度に来る。そしてその日は来ないことが多い。機能を一つずつ新しいコードへ回せば、一歩ごとに検証も切り戻しもできる大きさに収まり、出したそばから元が取れ始める。代償は移行用のアーキテクチャだ。捨てる前提で作る振り分け層やアダプタである。
- **対立概念:** **一括切り替え** — 古いシステムにきれいな振り分け点を置けないときや、移行用の層が書き直しより高くつくときは、計画した一度の切り替えのほうが、段階的移行のありがちな末路を避けられる。簡単な経路だけが移り、絡み合った中核はいつまでも移らず、組織は二つのシステムを運用し、その費用を払い続ける。
- **判断の指針:** レガシーシステムの前に振り分け点（プロキシ、ルーター、ファサード）を置き、その裏へ挙動を一部分ずつ移せ。最初は、それだけで価値を生む部分を選べ。「完了」の定義を最初に決め、古い経路に残るトラフィックの割合を追い、古いコードと移行用の層を消す作業は後片づけではなくプロジェクトの一部として見積もれ。
- **出典:** Martin Fowler『Strangler Fig Application』(martinfowler.com。原題「Strangler Application」、2004 年。2024 年に書き直し)。絞め殺しのイチジクのたとえと、段階的な刷新ではリスクの低さと早く得られる価値が移行用アーキテクチャのコストを上回るという主張の出典。 — [原典 ↗](https://martinfowler.com/bliki/StranglerFigApplication.html)
- **関連:** [セカンドシステム症候群 (Second-System Effect)](#セカンドシステム症候群-second-system-effect) · [ガルの法則 (Gall's Law)](#ガルの法則-galls-law) · [90対90の法則 (Ninety-Ninety Rule)](#90対90の法則-ninety-ninety-rule)

### 退屈な技術を選べ (Choose Boring Technology)

`§ 91` · 意思決定

- **概念:** 不慣れな技術を採り入れるたびに、未知の故障モードと恒久的な運用コストが付いてくる。チームが抱えられる数は多くない。
- **メカニズム:** 技術のコストの大半はリリース後に払う。システムを何年も安定して動かし続けるコストは、作る段階で得た便利さよりはるかに大きい。成熟した道具は誰かがすでに落とし穴を踏んでいるので、壊れ方がよく分かっているが、新しい道具は「知らないことすら知らない」領域が広く、チームはそれを本番で見つけることになる。一つ増えるたびに、監視し、扱える人を採用し、パッチを当て続けなければならない対象が増え、目新しさが消えてもそのコストは残る。だから新しさは自由に選べるものではなく予算だ。McKinley は、どの会社にもイノベーショントークンはおよそ三枚しかないとする。
- **対立概念:** **目的への適合** — 退屈とは、新しいものを決して入れないことではない。今の技術スタックでは本当に仕事ができないなら、無理に使うほうがトークン一枚より高くつく。まったく動かないスタックは、誰も触りたがらないレガシーになる。
- **判断の指針:** 言語、データストア、フレームワークを足す前に、今動かしているもので同じ仕事をするには何が要り、なぜ足りないのかを書き出せ。そして一つのチームの中ではなく、それを運用することになる全員で決めよ。新しい技術は、製品を他と分ける場所にだけ使え。何かを採り入れるなら、それが置き換えるものを廃止する計画も立てよ。
- **出典:** Dan McKinley『Choose Boring Technology』(mcfunley.com, 2015)。"every company gets about three innovation tokens" の出典。Etsy 在籍時の経験に基づく。 — [原典 ↗](https://mcfunley.com/choose-boring-technology)
- **関連:** [KISS の原則 (KISS Principle)](#kiss-の原則-kiss-principle) · [リンディ効果 (Lindy Effect)](#リンディ効果-lindy-effect)

<!-- CODEX:END -->

## サイト

英語と日本語で、法典を「番号の振られた条文集」として読ませる、石碑のような編集デザインのサイトがあります。

```bash
cd website
npm install
npm run dev
```

`http://localhost:3000` を開いてください。

## コントリビュート

認知科学・安全工学・エンジニアリング史に確かな基盤を持つ法則を歓迎します。訂正はさらに歓迎します——出典の誤りは、このリポジトリに対して最も価値のある issue です。

**編集するファイルは `data/laws.yaml` だけです。** `README.md`・`translations/ja.md`・ウェブサイトのデータモジュールはすべてそこから生成され、内容がずれていると CI が失敗します。詳しい手順は [CONTRIBUTING.md](../CONTRIBUTING.md) を参照してください。

```bash
npm install
npm run validate      # data/laws.yaml の構造検査
npm run generate      # README.md / translations/ja.md / サイトのデータを再生成
npm run check:links   # 全出典 URL が生きているか検証
```

## ライセンス

- **コンテンツ**（`data/`・`README.md`・`translations/` の法典本文）は [CC BY-SA 4.0](../LICENSE)。利用・翻訳・派生は自由です。出典表示と同一ライセンスでの共有をお願いします。
- **コード**（`website/`・`scripts/` 以下）は [MIT](../website/LICENSE)。
