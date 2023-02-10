---
title: 'Software Engineering at Google: Chapter 3 - Knowledge Sharing'
date: '2023-02-13'
---

> SPOFs can arise out of good intentions: it can be easy to fall into a habit of “Let me take care of that for you.” But this approach optimizes for short-term efficiency (“It’s faster for me to do it”) at the cost of poor long-term scalability (the team never learns how to do whatever it is that needs to be done). 
> 
> SPOFは、善意から発生することもあります。"それは私に任せて "という習慣に陥りがちです。しかし、このアプローチは短期的な効率（「自分がやった方が早い」）を最適化するもので、長期的なスケーラビリティは低くなります（チームは、やるべきことが何であれ、やり方を学べない）。

> Documented knowledge, on the other hand, can better scale not just to the team but to the entire organization. 
> 
> 一方、文書化された知識は、チームだけでなく、組織全体への拡張性に優れています。

とはいえさ。

> So in a magical world in which everything is always perfectly and immediately documented, we wouldn’t need to consult a person any more, right? Not quite. Written knowledge has scaling advantages, but so does targeted human help. 
> 
> では、すべてが常に完璧に、そして即座に文書化される魔法の世界では、もう人に相談する必要はないのだろうか？そうとも言えません。文書化された知識にはスケールメリットがありますが、的を射た人の助けもまた然りです。

そうそう、こっちこっち。

> Tribal and written knowledge complement each other. 
> 
> 部族的な知識と文字による知識は、互いに補完し合っています。

> Feigned surprise is a barrier to psychological safety and makes members of the group afraid of admitting to a lack of knowledge.
>
> 驚きを装うことは心理的安全性の障害となり、グループのメンバーは知識不足を認めることを恐れてしまう。

これは「えっ、Stack がわからないの?」から続いている話 (そういう驚きをさして feigned surprise と言っている)で、塾講師をしていた頃のことを思い出させる。

> Pedantic corrections that tend to be about grandstanding rather than precision.
> 
> 正確さよりも大げさな表現になりがちな、知識をひけらかすような訂正。

これはアンチパターンとして紹介されている。そりゃそうよ。

> If you take away only a single thing from this chapter, it is this: always be learning; always be asking questions.
> 
> この章から得られるものはただひとつ、「常に学び、常に質問すること」です。

はい。

> Embrace not knowing things as an area of opportunity rather than one to fear.
> 
> 知らないことを恐れるのではなく、チャンスとして受け入れる。

> It’s especially critical for those in leadership roles to model this behavior: it’s important not to mistakenly equate “seniority” with “knowing everything.” In fact, the more you know, the more you know you don’t know. Openly asking questions4 or expressing gaps in knowledge reinforces that it’s OK for others to do the same.
> 
> (ラダーにおける) シニアであることと「何でも知っている」ことを同列に扱わないことが重要です。実際、知れば知るほど、知らないことが多くなるものです。質問 をしたり、知識の不足を指摘したりすることで、他の人も同じように質問してよいことがわかります。

> This doesn’t mean that code can’t lack clarity or that existing design patterns can’t be wrong, but engineers have a tendency to reach for “this is bad!” far more quickly than is often warranted, especially for unfamiliar code, languages, or paradigms. 
> 
> しかし、エンジニアは、特に見慣れないコードや言語、パラダイムに対して、しばしば正当化されるよりもずっと早く「これはダメだ！」と結論を出してしまう傾向があるのです。

わかる。

> YAQS (“Yet Another Question System”) is a Google-internal version of a Stack Overflow–like website, making it easy for Googlers to link to existing or work-in-progress code as well as discuss confidential information.
> 
> YAQS（Yet Another Question System）は、Google社内版のStack Overflowのようなサイトで、Googlerが既存のコードや作業中のコードにリンクしたり、機密情報を話し合ったりすることを容易にするものである。

へーそんなものがあるのか。

> Organizational culture is the squishy human thing that many companies treat as an afterthought.
> 
> 組織文化は、多くの企業が後回しにしている、ふにゃふにゃした人間的なものです。

> Knowledge sharing can and should be done with kindness and respect. In tech, tolerance—or worse, reverence—of the “brilliant jerk” is both pervasive and harmful, but being an expert and being kind are not mutually exclusive.
> 
> (この翻訳はぜんぜんだめ) 知識の共有は、親切心と敬意をもって行うことができますし、そうすべきです。しかし、専門家であることと親切であることは相反するものではありません。

> Good culture must be actively nurtured, and encouraging a culture of knowledge sharing requires a commitment to recognizing and rewarding it at a systemic level. 
> 
> 良い文化は積極的に育まれなければならず、知識共有の文化を奨励するには、システムレベルでそれを認識し、報酬を与えるというコミットメントが必要です。

そうですね。

> Static analysis tools augment engineers’ knowledge. 

これはそうだよね、と思うことがある。IDE とかもそうよね。

> They are expected to treat readability as first and foremost a mentoring and cooperative process, not a gatekeeping or adversarial one. 
> 
> 彼らは、Readability を、門番や敵対的なものではなく、まず第一に指導的・協力的なプロセスとして扱うことが期待されています。

> The value of codebase-wide consistency cannot be overstated: even with tens of thousands of engineers writing code over decades, it ensures that code in a given language will look similar across the corpus.
> 
> (翻訳で情報が減ってるぞ...) 何万人ものエンジニアが何十年もかけてコードを書いても、ある言語のコードはコーパス全体で似たようなものになるのです。

> But aspirations aren’t enough. Readability is a controversial program: some engineers complain that it’s an unnecessary bureaucratic hurdle and a poor use of engineer time. Are readability’s trade-offs worthwhile? For the answer, we turned to our trusty Engineering Productivity Research (EPR) team. 
> 
> しかし、志だけでは十分ではありません。Readability は不必要な官僚的ハードルであり、エンジニアの時間を有効に活用できないと不満を漏らすエンジニアもいます。リーダビリティのトレードオフは価値があるのでしょうか？その答えを得るために、私たちは信頼できるエンジニアリング生産性調査（EPR）チームを訪れました。

ERP チームなんてものが存在することが驚きである。

---

以下、Conclusions と TL;DR

> 結論
> 知識は、ある意味でソフトウェアエンジニアリング組織にとって最も重要な（無形の）資本であり、その知識の共有は、組織が変化に直面してレジリエントで冗長なものにするために極めて重要です。オープンで誠実な知識共有を促進する文化は、組織全体に効率的に知識を分配し、組織が長期にわたって拡張することを可能にします。多くの場合、知識の共有を容易にするための投資は、企業の存続期間中に何倍もの配当を得ることができるのです。
> 
> TL;DRs
> 心理的安全性は、知識共有環境を育むための基礎となるものです。
> 
> 小さなことから始める：質問し、書き留める。
> 
> 専門家と文書化された文献の両方から、必要な助けを得ることができるようにする。
> 
> システムレベルでは、自分自身やチーム、組織の枠を超えて専門知識を教え、広げるために時間を割く人を奨励し、報酬を与える。
> 
> 知識共有の文化に力を与えるには、複数の戦略を組み合わせる必要があります。
