---
title: 'Software Engineering at Google: Chapter 1 - What Is Software Engineering'
date: '2023-01-xx'
---

## Hyrum's Law

> With a sufficient number of users of an API, it does not matter what you promise in the contract: all observable behaviors of your system will be depended on by somebody.
> 
> (抄訳) 十分な数の API 利用者がいれば、契約で約束した内容は重要ではありません。あなたのシステムの観測可能な動作はすべて、誰かに依存されることになります。

ピンとこなかったけど、ハッシュコンテナの話で理解できた。

> As a result, if you ask any expert “Can I assume a particular output sequence for my hash container?” that expert will presumably say “No.” By and large that is correct, but perhaps simplistic. A more nuanced answer is, “If your code is short-lived, with no changes to your hardware, language runtime, or choice of data structure, such an assumption is fine. If you don’t know how long your code will live, or you cannot promise that nothing you depend upon will ever change, such an assumption is incorrect.”
> 
> (抄訳) 結果として、専門家に「ハッシュコンテナの出力順序は決まっているのですか」と聞くと、おそらく「いいえ」と答えるでしょう。大体においてそれは正しいのですが、単純に答えすぎています。もっとニュアンスを捉えるなら「あなたのコードが短命で、ハードウェアや言語のランタイム、データ構造の選択に変更がなければ、そう仮定して問題ないでしょう。しかし、あなたのコードがいつまで生き続けるか分からない、もしくは、あなたが依存しているものが何も変わらないことを約束できないなら、そのような仮定は正しくありません。"

> Some languages specifically randomize hash ordering between library versions or even between execution of the same program in an attempt to prevent dependencies. But even this still allows for some Hyrum’s Law surprises: there is code that uses hash iteration ordering as an inefficient random-number generator. 
> 
> (抄訳) 言語によっては、依存性を防ぐために、ライブラリのバージョン間や同じプログラムの実行間でさえ、ハッシュの順序を特別にランダム化するものがあります。しかし、これでもまだハイラムの法則のような驚きがあります。ハッシュの繰り返し順序を非効率な乱数発生器として使うコードがあるのです。

(後の方で Software Engineering Versus Programming があるけど)

> We’ve taken to saying, “It’s programming if ‘clever’ is a compliment, but it’s software engineering if ‘clever’ is an accusation.” 

そういうハッシュの振る舞いを賢く利用するようなのはプログラミングであってソフトウェアエンジニアリングではない、という話。

## Scale and Efficiency

> Finally, the most precious asset of a software organization—the codebase itself—also needs to scale. If your build system or version control system scales superlinearly over time, perhaps as a result of growth and increasing changelog history, a point might come at which you simply cannot proceed. Many questions, such as “How long does it take to do a full build?”, “How long does it take to pull a fresh copy of the repository?”, or “How much will it cost to upgrade to a new language version?” aren’t actively monitored and change at a slow pace. They can easily become like the metaphorical boiled frog; it is far too easy for problems to worsen slowly and never manifest as a singular moment of crisis. Only with an organization-wide awareness and commitment to scaling are you likely to keep on top of these issues.
> 
> (抄訳) 最後に、ソフトウェア組織にとって最も貴重な資産であるコードベース自体も、スケールする必要があります。ビルドシステムやバージョン管理システムが、時間の経過とともに超線形 (superlinearly) にスケールしていく場合、おそらく成長や変更履歴の増加の結果として、前に進めなくなる時点が来るかもしれません。例えば「フルビルドにかかる時間は?」「リポジトリの新しいコピーを取得するのにかかる時間は?」「新しい言語バージョンにアップグレードするコストは?」というような問題は、ゆでガエルに例えられるように、徐々に悪化し、危機となる "瞬間" はありません。組織全体でスケーラビリティを意識し、問題に取り組むことで、対処することができるのです。

ここら辺は Google でもそう。

> automation (so that a single human can do more), consolidation/consistency (so that low-level changes have a limited problem scope), and expertise (so that a few humans can do more).
> 
> The more frequently you change your infrastructure, the easier it becomes to do so. 
> 
> 自動化（一人の人間がより多くのことをできるように）、統合/一貫性（低レベルの変更で問題の範囲が限定されるように）、専門性（少数の人間がより多くのことをできるように）です。
> 
> インフラを頻繁に変更すればするほど、その変更は容易になります。
> 

## Trade-offs and Costs

> Efficiency gains from keeping engineers happy, focused, and engaged can easily dominate other factors, simply because focus and productivity are so variable, and a 10-to-20% difference is easy to imagine.
> 
> (抄訳) エンジニアが幸せで、集中し、仕事に打ち込むことで得られる効率性は、他の要因を圧倒します。なぜなら、集中力と生産性は非常に変わりやすく、10～20%の差は簡単に想像できるからです。

そう思われ続けたい。

なお、上は `the health of an organization isn’t just whether there is money in the bank, it’s also whether its members are feeling valued and productive.` からの流れ。

## Example: Markers

マーカーが使いものにならないせいで無駄にしたコストは? 

> Google tends to have unlocked closets full of office supplies, including whiteboard markers, in most work areas.
> 
> (抄訳) Googleでは、ほとんどのオフィスにホワイトボードマーカーを含む、事務用品が詰まった鍵のかかっていないクローゼットがあります。

## Revisiting Decisions, Making Mistakes

> Contrary to some people’s instincts, leaders who admit mistakes are more respected, not less.
> 
> (抄訳) 人々の直感に反して、誤りを認めるリーダーは尊敬されるし、尊敬されないわけではない。
