// Generated from data/laws.yaml by scripts/generate.mjs. Do not edit by hand.

export type Locale = 'en' | 'ja';

export interface Counter {
  name: string;
  note?: string;
}

export interface LawText {
  title: string;
  concept: string;
  mechanism: string;
  counter: Counter;
  guideline: string;
  source: string;
}

export interface Credit {
  author: string | null;
  license: string;
  page: string | null;
}

/** Who or what the law is pictured by: a portrait, a company mark, or a
 *  monogram seal when there is no free image. */
export interface Figure {
  kind: 'person' | 'scene' | 'company' | 'none';
  name: string | null;
  monogram: string;
  image: string | null;
  logo: string | null;
  credit: Credit | null;
}

export interface Law {
  slug: string;
  number: number;
  tag: string;
  sourceUrl: string;
  seeAlso: string[];
  figure: Figure;
  en: LawText;
  ja: LawText;
}

export interface Tag {
  key: string;
  en: string;
  ja: string;
}

export interface Situation {
  key: string;
  en: string;
  ja: string;
  laws: string[];
}

export const tags: Tag[] = [
  {
    "key": "decision",
    "en": "Decision",
    "ja": "意思決定"
  },
  {
    "key": "cognition",
    "en": "Cognition",
    "ja": "認知"
  },
  {
    "key": "estimation",
    "en": "Estimation",
    "ja": "見積り"
  },
  {
    "key": "systems",
    "en": "Systems",
    "ja": "システム"
  },
  {
    "key": "distributed-systems",
    "en": "Distributed Systems",
    "ja": "分散システム"
  },
  {
    "key": "performance",
    "en": "Performance",
    "ja": "性能"
  },
  {
    "key": "maintainability",
    "en": "Maintainability",
    "ja": "保守性"
  },
  {
    "key": "safety",
    "en": "Safety",
    "ja": "安全工学"
  },
  {
    "key": "security",
    "en": "Security",
    "ja": "セキュリティ"
  },
  {
    "key": "organization",
    "en": "Organization",
    "ja": "組織"
  },
  {
    "key": "incentives",
    "en": "Incentives",
    "ja": "インセンティブ"
  },
  {
    "key": "interaction",
    "en": "Interaction",
    "ja": "ヒューマンインタフェース"
  },
  {
    "key": "operations",
    "en": "Operations",
    "ja": "運用"
  }
];

export const situations: Situation[] = [
  {
    "key": "estimates-slip",
    "en": "Estimates keep slipping",
    "ja": "見積りが毎回ずれる",
    "laws": [
      "hofstadters-law",
      "ninety-ninety-rule",
      "parkinsons-law",
      "brooks-law",
      "fixed-time-variable-scope"
    ]
  },
  {
    "key": "team-growing",
    "en": "The team is growing",
    "ja": "チームが大きくなってきた",
    "laws": [
      "brooks-law",
      "dunbars-number",
      "ringelmann-effect",
      "conways-law",
      "bystander-effect",
      "context-not-control",
      "churn-rule"
    ]
  },
  {
    "key": "metric-gamed",
    "en": "A metric is being gamed",
    "ja": "指標が数字合わせになっている",
    "laws": [
      "goodharts-law",
      "cobra-effect",
      "shirky-principle"
    ]
  },
  {
    "key": "cannot-decide",
    "en": "The decision is stuck",
    "ja": "決めきれない",
    "laws": [
      "type-1-vs-type-2-decisions",
      "disagree-and-commit",
      "law-of-triviality",
      "sunk-cost-fallacy"
    ]
  },
  {
    "key": "after-incident",
    "en": "After an incident",
    "ja": "障害が起きた後",
    "laws": [
      "blameless-postmortem",
      "swiss-cheese-model",
      "normalization-of-deviance",
      "normal-accident-theory",
      "hanlons-razor",
      "ironies-of-automation",
      "five-whys",
      "mechanisms-not-good-intentions"
    ]
  },
  {
    "key": "reliability-vs-speed",
    "en": "Reliability versus shipping speed",
    "ja": "信頼性と開発速度がぶつかる",
    "laws": [
      "error-budget",
      "toil",
      "normalization-of-deviance",
      "murphys-law",
      "you-build-it-you-run-it",
      "andon",
      "chaos-engineering"
    ]
  },
  {
    "key": "too-slow",
    "en": "Something is too slow",
    "ja": "何かが遅い",
    "laws": [
      "amdahls-law",
      "theory-of-constraints",
      "premature-optimization",
      "tail-at-scale",
      "littles-law"
    ]
  },
  {
    "key": "legacy-code",
    "en": "Deleting or rewriting old code",
    "ja": "古いコードを消す・作り直す",
    "laws": [
      "chestertons-fence",
      "second-system-effect",
      "galls-law",
      "hyrums-law",
      "eaglesons-law",
      "boy-scout-rule",
      "strangler-fig",
      "beyonce-rule"
    ]
  },
  {
    "key": "designing-interface",
    "en": "Designing an API or interface",
    "ja": "API やインタフェースを設計する",
    "laws": [
      "hyrums-law",
      "postels-law",
      "principle-of-least-astonishment",
      "leaky-abstractions",
      "teslers-law",
      "beyonce-rule"
    ]
  },
  {
    "key": "new-product",
    "en": "Starting something new",
    "ja": "新しいものを作り始める",
    "laws": [
      "working-backwards",
      "yagni",
      "galls-law",
      "worse-is-better",
      "kiss-principle",
      "xy-problem"
    ]
  },
  {
    "key": "choosing-tech",
    "en": "Choosing a technology",
    "ja": "技術を選ぶ",
    "laws": [
      "lindy-effect",
      "cargo-cult-engineering",
      "amaras-law",
      "survivorship-bias",
      "choose-boring-technology"
    ]
  },
  {
    "key": "distributed",
    "en": "Building a distributed system",
    "ja": "分散システムを組む",
    "laws": [
      "fallacies-of-distributed-computing",
      "cap-theorem",
      "two-generals-problem",
      "tail-at-scale",
      "static-stability",
      "avoid-fallback",
      "constant-work",
      "chaos-engineering"
    ]
  },
  {
    "key": "access-control",
    "en": "Designing permissions and secrets",
    "ja": "権限と秘密を設計する",
    "laws": [
      "principle-of-least-privilege",
      "kerckhoffs-principle"
    ]
  }
];

export const laws: Law[] = [
  {
    "slug": "type-1-vs-type-2-decisions",
    "number": 1,
    "tag": "decision",
    "sourceUrl": "https://www.sec.gov/Archives/edgar/data/1018724/000119312516530910/d168744dex991.htm",
    "seeAlso": [
      "sunk-cost-fallacy",
      "parkinsons-law",
      "disagree-and-commit"
    ],
    "figure": {
      "kind": "company",
      "name": "Amazon",
      "monogram": "A",
      "image": null,
      "logo": "/figures/type-1-vs-type-2-decisions.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); Amazon is a trademark of Amazon.com, Inc.",
        "page": "https://commons.wikimedia.org/wiki/File:Amazon_2024.svg"
      }
    },
    "en": {
      "title": "Type 1 vs Type 2 Decisions",
      "concept": "Teams spend the caution meant for irreversible decisions on ones they could easily undo.",
      "mechanism": "The brain instinctively treats all failures as threats to survival, demanding excessive caution for reversible decisions (Two-way doors). This causes \"Analysis Paralysis.\"",
      "counter": {
        "name": "The \"One-Way Door\" Filter"
      },
      "guideline": "If a decision is easily reversible (two-way door), ship within 24 hours to gain data. Only spend days/weeks on \"one-way doors\" (e.g., core database schema, security protocols).",
      "source": "Jeff Bezos, *2015 Letter to Shareholders* (Amazon.com, Inc., filed April 2016) — the letter that introduced the \"Type 1 / Type 2 decisions\" framing. The 1997 letter is the \"Day 1\" letter and does not contain it."
    },
    "ja": {
      "title": "意思決定の可逆性",
      "concept": "やり直せる決定にまで、やり直せない決定と同じ慎重さを払ってしまう。",
      "mechanism": "脳は生存本能的に「すべての失敗」を脅威と見なし、すぐに戻せる決定（双方向のドア）に対しても過剰な慎重さを求めてしまう。これが「分析麻痺」の正体。",
      "counter": {
        "name": "「一方向のドア」フィルター"
      },
      "guideline": "容易にやり直しができる決定なら、24時間以内に実行してデータを得よ。数日・数週間かけるのは、やり直し不能な決定（DBスキーマの根幹、セキュリティ等）のみにせよ。",
      "source": "Jeff Bezos『2015 年 株主への手紙』（Amazon.com, Inc.、2016 年 4 月提出）——\"Type 1 / Type 2 decisions\" の初出。1997 年の手紙は「Day 1」の手紙であり、この枠組みは含まれていない。"
    }
  },
  {
    "slug": "normalization-of-deviance",
    "number": 2,
    "tag": "safety",
    "sourceUrl": "https://en.wikipedia.org/wiki/Normalization_of_deviance",
    "seeAlso": [
      "swiss-cheese-model",
      "normal-accident-theory",
      "boy-scout-rule",
      "normalcy-bias",
      "broken-windows-theory",
      "blameless-postmortem",
      "error-budget",
      "andon"
    ],
    "figure": {
      "kind": "person",
      "name": "Diane Vaughan",
      "monogram": "DV",
      "image": null,
      "logo": null,
      "credit": null
    },
    "en": {
      "title": "Normalization of Deviance",
      "concept": "A broken rule that causes no immediate harm quietly becomes the new normal.",
      "mechanism": "When a minor rule is broken (e.g., skipping a test) and no immediate disaster occurs, the brain re-classifies this \"deviance\" as \"normal.\" This is how catastrophic failures begin.",
      "counter": {
        "name": "Broken Windows Theory"
      },
      "guideline": "If you see a \"hack\" or a bypassed alert, do not say \"it worked before.\" Either fix it immediately or document it as high-priority technical debt.",
      "source": "Diane Vaughan, *The Challenger Launch Decision* (1996) — coined while analyzing the NASA Challenger disaster."
    },
    "ja": {
      "title": "逸脱の常態化",
      "concept": "破っても何も起きなかったルール違反は、いつの間にか当たり前になる。",
      "mechanism": "小さなルール違反（テストのスキップ等）をしても即座に大惨事が起きない場合、脳はその「逸脱」を「正常」なものとして再定義する。これが破滅的な失敗の始まり。",
      "counter": {
        "name": "割れ窓理論"
      },
      "guideline": "「以前も大丈夫だった」を理由に調査を省略するな。その場しのぎの「ハック」を見つけたら、即座に修正するか、高優先度の技術負債として記録せよ。",
      "source": "Diane Vaughan, *The Challenger Launch Decision* (1996) — NASA チャレンジャー号事故の分析から提唱された概念。"
    }
  },
  {
    "slug": "chestertons-fence",
    "number": 3,
    "tag": "systems",
    "sourceUrl": "https://www.chesterton.org/taking-a-fence-down/",
    "seeAlso": [
      "eaglesons-law",
      "yagni"
    ],
    "figure": {
      "kind": "person",
      "name": "G. K. Chesterton",
      "monogram": "GC",
      "image": "/figures/chestertons-fence.webp",
      "logo": null,
      "credit": {
        "author": "Ernest Herbert Mills",
        "license": "Public domain",
        "page": "https://commons.wikimedia.org/wiki/File:Gilbert_Chesterton.jpg"
      }
    },
    "en": {
      "title": "Chesterton's Fence",
      "concept": "Code or rules whose origin you don't know look like clutter, which makes them tempting to delete.",
      "mechanism": "We view legacy code/processes as \"clutter\" because we lack the context of their origin. The ego jumps to \"simplify\" by deleting what it doesn't understand.",
      "counter": {
        "name": "Time-Boxed Archaeology",
        "note": "taken absolutely the rule removes nothing ever, because the reason is sometimes gone with the person who had it"
      },
      "guideline": "You are forbidden from removing a \"fence\" (code/rule) until you can explain why it was put there — but put a deadline on the search. When it expires, take the fence down behind a flag, with a rollback ready, and watch what complains.",
      "source": "G. K. Chesterton, *The Thing* (1929) — the original parable of the fence in the road."
    },
    "ja": {
      "title": "チェスタトンの柵",
      "concept": "経緯を知らないコードやルールは無駄に見え、理由も知らずに消したくなる。",
      "mechanism": "背景文脈を知らない古いコードやプロセスを「無駄」に見誤る。エゴは理解できないものを「単純化」という名目で削除したがる。",
      "counter": {
        "name": "期限を切った考古学",
        "note": "この規則を絶対に適用すれば何ひとつ削除できなくなる。理由を知っていた人と一緒に、理由そのものが去っていることもある"
      },
      "guideline": "その「柵（コード/ルール）」がなぜそこに立てられたのかを説明できるようになるまで壊してはならない——ただし、その調査には期限を切れ。期限が切れたら、ロールバックを用意してフラグの裏で外し、何が苦情を上げるかを見よ。",
      "source": "G. K. Chesterton, *The Thing* (1929) — 道に立つ柵の寓話の原典。"
    }
  },
  {
    "slug": "normalcy-bias",
    "number": 4,
    "tag": "cognition",
    "sourceUrl": "https://en.wikipedia.org/wiki/Normalcy_bias",
    "seeAlso": [
      "murphys-law",
      "normalization-of-deviance",
      "occams-razor"
    ],
    "figure": {
      "kind": "person",
      "name": "Amanda Ripley",
      "monogram": "AR",
      "image": "/figures/normalcy-bias.webp",
      "logo": null,
      "credit": {
        "author": "Thatcher Cook for PopTech",
        "license": "CC BY-SA 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Amanda_Ripley_-_PopTech_2012.jpg"
      }
    },
    "en": {
      "title": "Normalcy Bias",
      "concept": "Faced with a real anomaly, people reach for the familiar, harmless explanation.",
      "mechanism": "In the face of a true anomaly, the brain defaults to the most \"frequent\" explanation to save energy. \"It's probably just a transient network error,\" we say as the database corrupts.",
      "counter": {
        "name": "Pre-mortem / Red Teaming"
      },
      "guideline": "When an error occurs, ask: \"If this were the start of a total system collapse, what would the next 10 minutes look like?\" If that scares you, investigate now.",
      "source": "Disaster psychology literature; widely surveyed in Amanda Ripley, *The Unthinkable* (2008)."
    },
    "ja": {
      "title": "正常性バイアス",
      "concept": "本物の異常を前にしても、人はいつもの無害な説明に飛びつく。",
      "mechanism": "真の異常に直面しても、脳はエネルギー節約のため「いつものパターン」で解釈しようとする。DBが壊れ始めていても「一時的なネットワークの瞬断だろう」と片付けてしまう。",
      "counter": {
        "name": "プレモータム / レッドチーミング"
      },
      "guideline": "異常が起きたとき、「これがシステム全壊の始まりだとしたら、次の10分で何が起きるか？」を問え。その答えが恐ろしいなら、今すぐ調査せよ。",
      "source": "災害心理学の文献群。Amanda Ripley, *The Unthinkable* (2008) で総説されている。"
    }
  },
  {
    "slug": "law-of-triviality",
    "number": 5,
    "tag": "organization",
    "sourceUrl": "https://en.wikipedia.org/wiki/Law_of_triviality",
    "seeAlso": [
      "parkinsons-law",
      "disagree-and-commit",
      "code-health-standard"
    ],
    "figure": {
      "kind": "person",
      "name": "C. Northcote Parkinson",
      "monogram": "CP",
      "image": "/figures/law-of-triviality.webp",
      "logo": null,
      "credit": {
        "author": "Wim van Rossem for Anefo",
        "license": "CC BY-SA 3.0 NL",
        "page": "https://commons.wikimedia.org/wiki/File:Cyril_Northcote_Parkinson_1961.jpg"
      }
    },
    "en": {
      "title": "Law of Triviality",
      "concept": "Discussion goes to the parts everyone understands, not the parts that matter.",
      "mechanism": "People provide more feedback on simple things (naming variables) than complex things (distributed consensus) because everyone understands the simple things, creating a false sense of value.",
      "counter": {
        "name": "Core Value Focus"
      },
      "guideline": "If a PR review spends 80% of comments on style/naming, approve immediately and move the discussion to an automated linter config.",
      "source": "C. Northcote Parkinson, *Parkinson's Law and Other Studies in Administration* (Houghton Mifflin, 1957), in the chapter \"High Finance, or the Point of Vanishing Interest\" — the original bike-shed committee parable. Published in the UK as *Parkinson's Law: The Pursuit of Progress* (John Murray, 1958)."
    },
    "ja": {
      "title": "パーキンソンの凡俗法則",
      "concept": "議論は重要な部分ではなく、誰でも口を出せる簡単な部分に集中する。",
      "mechanism": "人は複雑なこと（分散合意）より、単純なこと（変数名）に多くのフィードバックをする。誰でも理解できるため、意見を言うことで偽の貢献感を得やすいため。",
      "counter": {
        "name": "コア・バリューへの集中"
      },
      "guideline": "PRレビューのコメントの8割がスタイルや命名に集中しているなら、即座に承認し、議論をリンターの設定自動化に移せ。",
      "source": "C. Northcote Parkinson『Parkinson's Law and Other Studies in Administration』(Houghton Mifflin, 1957) 所収「High Finance, or the Point of Vanishing Interest」——自転車置き場の委員会の寓話の初出。英国版は『Parkinson's Law: The Pursuit of Progress』(John Murray, 1958)。"
    }
  },
  {
    "slug": "galls-law",
    "number": 6,
    "tag": "systems",
    "sourceUrl": "https://en.wikipedia.org/wiki/John_Gall_(author)",
    "seeAlso": [
      "worse-is-better",
      "yagni",
      "second-system-effect",
      "strangler-fig"
    ],
    "figure": {
      "kind": "scene",
      "name": "Wright Flyer, first flight, 1903",
      "monogram": "GS",
      "image": "/figures/galls-law.webp",
      "logo": null,
      "credit": {
        "author": "John T. Daniels (Library of Congress)",
        "license": "Public domain",
        "page": "https://commons.wikimedia.org/wiki/File:First_flight2.jpg"
      }
    },
    "en": {
      "title": "Gall's Law",
      "concept": "Complex systems that work usually grew from simple systems that worked; designed ones rarely do.",
      "mechanism": "We believe we can \"architect\" a complex system from scratch. We can't. Complex systems are too chaotic to be designed top-down.",
      "counter": {
        "name": "The MVP (Minimum Viable Product)"
      },
      "guideline": "A complex system that works is invariably found to have evolved from a simple system that worked. Start with a working \"Hello World\" and evolve.",
      "source": "John Gall, *Systemantics: How Systems Really Work and How They Fail* (1975)."
    },
    "ja": {
      "title": "ガルの法則",
      "concept": "動く複雑なシステムは、たいてい動く単純なシステムから育ったものだ。最初から設計したものが動くことはまれだ。",
      "mechanism": "複雑なシステムをゼロから「設計」できるという妄想。実際には、複雑系は混沌すぎてトップダウンでは設計できない。",
      "counter": {
        "name": "MVP (実用最小限の製品)"
      },
      "guideline": "機能している複雑なシステムは、例外なく「機能していた単純なシステム」から進化したものである。まずは動作する最小単位から始めよ。",
      "source": "John Gall, *Systemantics: How Systems Really Work and How They Fail* (1975)。"
    }
  },
  {
    "slug": "conways-law",
    "number": 7,
    "tag": "organization",
    "sourceUrl": "https://www.melconway.com/Home/Committees_Paper.html",
    "seeAlso": [
      "dunbars-number",
      "brooks-law",
      "single-responsibility-principle",
      "you-build-it-you-run-it",
      "context-not-control"
    ],
    "figure": {
      "kind": "person",
      "name": "Melvin E. Conway",
      "monogram": "MC",
      "image": null,
      "logo": null,
      "credit": null
    },
    "en": {
      "title": "Conway's Law",
      "concept": "Systems end up shaped like the communication paths of the teams that build them.",
      "mechanism": "The software architecture is a map of the organizational chart. If two teams don't talk, their services won't integrate smoothly.",
      "counter": {
        "name": "Inverse Conway Maneuver"
      },
      "guideline": "If you want a modular architecture, create modular, independent teams first. Do not fight the org chart with code.",
      "source": "Melvin E. Conway, *How Do Committees Invent?* (Datamation, April 1968)."
    },
    "ja": {
      "title": "コンウェイの法則",
      "concept": "システムの構造は、作るチーム同士の意思疎通の形に似てくる。",
      "mechanism": "ソフトウェアの構造は、組織図の写し鏡になる。2つのチームが会話しなければ、そのサービス間の統合もスムーズにはいかない。",
      "counter": {
        "name": "逆コンウェイ戦略"
      },
      "guideline": "モジュール化されたアーキテクチャが欲しいなら、先にチームを独立したモジュールとして再編せよ。組織構造とコードで戦うな。",
      "source": "Melvin E. Conway, *How Do Committees Invent?* (Datamation, 1968 年 4 月号)。"
    }
  },
  {
    "slug": "hyrums-law",
    "number": 8,
    "tag": "systems",
    "sourceUrl": "https://www.hyrumslaw.com/",
    "seeAlso": [
      "postels-law",
      "principle-of-least-astonishment",
      "beyonce-rule",
      "churn-rule"
    ],
    "figure": {
      "kind": "person",
      "name": "Hyrum Wright",
      "monogram": "HW",
      "image": null,
      "logo": null,
      "credit": null
    },
    "en": {
      "title": "Hyrum's Law",
      "concept": "With enough users, every observable behavior of a system, bugs included, is depended on.",
      "mechanism": "With a sufficient number of users, every observable behavior of your system (even bugs) will be depended on by someone.",
      "counter": {
        "name": "Deliberate Variance",
        "note": "if every observable behaviour were sacred nothing could ever change, so vary what you never promised — randomised iteration order, planned outages — and the dependency never forms"
      },
      "guideline": "\"Internal\" doesn't exist once you have users. Version and feature-flag what you promise; deliberately vary what you do not, so nobody can build on it in the first place.",
      "source": "Hyrum Wright, *hyrumslaw.com*; canonicalized in *Software Engineering at Google* (Winters, Manshreck, Wright, 2020)."
    },
    "ja": {
      "title": "ハイラムの法則",
      "concept": "利用者が十分に多ければ、バグも含めた観測可能な挙動すべてに誰かが依存する。",
      "mechanism": "ユーザー数が十分に増えれば、システムの観測可能なあらゆる挙動（バグさえも）は、誰かの依存対象になる。",
      "counter": {
        "name": "意図的なゆらぎ",
        "note": "観測可能な挙動すべてを不可侵とすれば何も変えられなくなる。約束していない部分は意図的に揺らせ——反復順序のランダム化、計画的な停止——そうすれば依存はそもそも生まれない"
      },
      "guideline": "ユーザーがいる限り「内部実装」は存在しない。約束した部分はバージョニングと機能フラグで守り、約束していない部分は意図的に揺らして、そもそも依存させるな。",
      "source": "Hyrum Wright, *hyrumslaw.com*; *Software Engineering at Google* (Winters, Manshreck, Wright, 2020) で正式化。"
    }
  },
  {
    "slug": "brooks-law",
    "number": 9,
    "tag": "organization",
    "sourceUrl": "https://en.wikipedia.org/wiki/Brooks%27s_law",
    "seeAlso": [
      "conways-law",
      "dunbars-number",
      "second-system-effect",
      "metcalfes-law"
    ],
    "figure": {
      "kind": "person",
      "name": "Fred Brooks",
      "monogram": "FB",
      "image": "/figures/brooks-law.webp",
      "logo": null,
      "credit": {
        "author": "SD&M (www.sdm.de)",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:Fred_Brooks_(cropped_square).jpg"
      }
    },
    "en": {
      "title": "Brooks' Law",
      "concept": "Adding people to a late project tends to make it later, because ramp-up and coordination cost more than they add.",
      "mechanism": "Adding people to a late project increases communication overhead quadratically (n(n-1)/2 communication channels for n people). New people take more time from veterans than they contribute.",
      "counter": {
        "name": "Scope Cutting"
      },
      "guideline": "If a project is late, do not add people. Remove features or push the date.",
      "source": "Fred Brooks, *The Mythical Man-Month* (1975, anniversary edition 1995)."
    },
    "ja": {
      "title": "ブルックスの法則",
      "concept": "遅れたプロジェクトに人を足すと、立ち上がりと調整のコストが寄与を上回り、かえって遅れがちだ。",
      "mechanism": "遅れているプロジェクトに人を追加すると、調整コストが二次関数的に増大する（n 人で n(n-1)/2 本の通信路）。新人はベテランの手を止めるため、貢献よりも損失が上回る。",
      "counter": {
        "name": "スコープ削減"
      },
      "guideline": "プロジェクトが遅れているなら、人を増やすな。機能を削るか、期限を延ばせ。",
      "source": "Fred Brooks, *人月の神話 (The Mythical Man-Month)* (1975, 20 周年記念版 1995)。"
    }
  },
  {
    "slug": "xy-problem",
    "number": 10,
    "tag": "cognition",
    "sourceUrl": "https://xyproblem.info/",
    "seeAlso": [
      "curse-of-knowledge",
      "working-backwards",
      "five-whys"
    ],
    "figure": {
      "kind": "person",
      "name": "Eric S. Raymond",
      "monogram": "ER",
      "image": "/figures/xy-problem.webp",
      "logo": null,
      "credit": {
        "author": "jerone2 (Flickr); derivative by Bilby",
        "license": "CC BY-SA 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Eric_S_Raymond_portrait.jpg"
      }
    },
    "en": {
      "title": "XY Problem",
      "concept": "People ask for help with their attempted fix instead of the problem they actually have.",
      "mechanism": "A user/engineer gets stuck on a solution (Y) and asks for help with it, forgetting that the original problem (X) might have a much simpler solution.",
      "counter": {
        "name": "Five Whys"
      },
      "guideline": "When someone asks \"How do I do Y?\", always reply \"What are you trying to achieve with Y?\"",
      "source": "Folklore from the Perl IRC and sysadmin communities; canonical write-up at *xyproblem.info*."
    },
    "ja": {
      "title": "XY問題",
      "concept": "人は本当の問題ではなく、自分が思いついた解決策について助けを求める。",
      "mechanism": "ユーザーやエンジニアが解決策（Y）で詰まったとき、その方法を質問してしまうが、本来の目的（X）にはもっと簡単な解決策があることが多い。",
      "counter": {
        "name": "なぜなぜ分析"
      },
      "guideline": "誰かが「どうやってYをすればいいか？」と聞いてきたら、常に「Yで何を達成したいのか？」と問い返せ。",
      "source": "Perl IRC やシステム管理者コミュニティ発の口承。標準的な解説は *xyproblem.info*。"
    }
  },
  {
    "slug": "postels-law",
    "number": 11,
    "tag": "distributed-systems",
    "sourceUrl": "https://www.rfc-editor.org/rfc/rfc761",
    "seeAlso": [
      "hyrums-law",
      "fallacies-of-distributed-computing"
    ],
    "figure": {
      "kind": "person",
      "name": "Jon Postel",
      "monogram": "JP",
      "image": "/figures/postels-law.webp",
      "logo": null,
      "credit": {
        "author": "Carl Malamud",
        "license": "CC BY 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Jon_Postel_sitting_in_office_(cropped).jpg"
      }
    },
    "en": {
      "title": "Postel's Law",
      "concept": "Systems that assume every peer follows the spec exactly tend to be brittle against the first one that doesn't.",
      "mechanism": "In a distributed system, assuming everyone follows the spec perfectly leads to brittle failures.",
      "counter": {
        "name": "Fail-Fast (Internal only)"
      },
      "guideline": "Be conservative in what you send (strict compliance) and liberal in what you accept (handle messy inputs gracefully).",
      "source": "Jon Postel, *RFC 761* (DoD Standard TCP, January 1980) §2.10 — \"be conservative in what you do, be liberal in what you accept from others\". The same guidance appears in *RFC 760* (IP) §3.2 in different words, and verbatim again in *RFC 793* (1981)."
    },
    "ja": {
      "title": "ポステルの法則",
      "concept": "相手が仕様どおりに動く前提のシステムは、最初の逸脱にもろくなりがちだ。",
      "mechanism": "分散システムで全員が仕様を完璧に守ると想定すると、脆い失敗を招く。",
      "counter": {
        "name": "フェイルファスト (内部エラー限定)"
      },
      "guideline": "自分が送るものには厳格に（仕様準拠）、受け取るものには寛容に（不完全な入力も優雅に処理）。",
      "source": "Jon Postel『RFC 761』(DoD Standard TCP, 1980年1月) §2.10——\"be conservative in what you do, be liberal in what you accept from others\"。同じ趣旨は『RFC 760』(IP) §3.2 に別の言い回しで、『RFC 793』(1981) に同文で再掲される。"
    }
  },
  {
    "slug": "hanlons-razor",
    "number": 12,
    "tag": "organization",
    "sourceUrl": "https://en.wikipedia.org/wiki/Hanlon%27s_razor",
    "seeAlso": [
      "bystander-effect",
      "occams-razor",
      "blameless-postmortem"
    ],
    "figure": {
      "kind": "person",
      "name": "Robert A. Heinlein",
      "monogram": "RH",
      "image": "/figures/hanlons-razor.webp",
      "logo": null,
      "credit": {
        "author": "Photographer unknown, published by Doubleday",
        "license": "Public domain",
        "page": "https://commons.wikimedia.org/wiki/File:Robert_A._Heinlein_(Doubleday_photo)_(retouched).jpg"
      }
    },
    "en": {
      "title": "Hanlon's Razor",
      "concept": "We read malice into delays and bugs that are better explained by fatigue or missing context.",
      "mechanism": "We take bugs/delays personally, assuming \"malice\" or \"sabotage\" when it's usually just lack of sleep or missing context.",
      "counter": {
        "name": "Psychological Safety"
      },
      "guideline": "Never attribute to malice that which is adequately explained by stupidity or lack of context. Focus on the system, not the person.",
      "source": "Robert J. Hanlon, contributed to *Murphy's Law Book Two* (Arthur Bloch, 1980)."
    },
    "ja": {
      "title": "ハンロンの剃刀",
      "concept": "疲労や文脈不足で説明がつく遅れやバグに、人は悪意を読み取ってしまう。",
      "mechanism": "バグや遅延を「悪意」や「嫌がらせ」と受け取ってしまう。実際には、単なる睡眠不足やコンテキストの欠如であることがほとんど。",
      "counter": {
        "name": "心理的安全性"
      },
      "guideline": "無能（知識不足や文脈欠如）で説明がつくことに、決して悪意を見出すな。人ではなくシステムをデバッグせよ。",
      "source": "Robert J. Hanlon が *Murphy's Law Book Two* (Arthur Bloch 編, 1980) に寄稿した格言。"
    }
  },
  {
    "slug": "hofstadters-law",
    "number": 13,
    "tag": "estimation",
    "sourceUrl": "https://en.wikipedia.org/wiki/Hofstadter%27s_law",
    "seeAlso": [
      "ninety-ninety-rule",
      "parkinsons-law",
      "fixed-time-variable-scope"
    ],
    "figure": {
      "kind": "person",
      "name": "Douglas Hofstadter",
      "monogram": "DH",
      "image": "/figures/hofstadters-law.webp",
      "logo": null,
      "credit": {
        "author": "null0",
        "license": "CC BY-SA 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Douglas_Hofstadter,_Stanford_2006_(crop).jpg"
      }
    },
    "en": {
      "title": "Hofstadter's Law",
      "concept": "Work takes longer than estimated, even when the estimate already allows for that.",
      "mechanism": "\"It always takes longer than you expect, even when you take into account Hofstadter's Law.\" The brain cannot visualize unknown unknowns.",
      "counter": {
        "name": "Evidence-Based Scheduling"
      },
      "guideline": "Double your most conservative estimate, then add 20%. And expect to be wrong.",
      "source": "Douglas Hofstadter, *Gödel, Escher, Bach: an Eternal Golden Braid* (1979)."
    },
    "ja": {
      "title": "ホフスタッターの法則",
      "concept": "作業は見積りより長くかかる。それを織り込んで見積もってもなお長くかかる。",
      "mechanism": "「この法則を考慮に入れたとしても、常に予想以上の時間がかかる」。脳は「未知の未知」を可視化できない。",
      "counter": {
        "name": "実績ベースのスケジューリング"
      },
      "guideline": "最も慎重な見積もりを2倍し、さらに20%加えよ。それでもなお、外れることを覚悟せよ。",
      "source": "Douglas Hofstadter, *ゲーデル、エッシャー、バッハ — あるいは不思議の環 (Gödel, Escher, Bach)* (1979)。"
    }
  },
  {
    "slug": "goodharts-law",
    "number": 14,
    "tag": "incentives",
    "sourceUrl": "https://en.wikipedia.org/wiki/Goodhart%27s_law",
    "seeAlso": [
      "cobra-effect",
      "shirky-principle",
      "error-budget",
      "mechanisms-not-good-intentions"
    ],
    "figure": {
      "kind": "person",
      "name": "Charles Goodhart",
      "monogram": "CG",
      "image": "/figures/goodharts-law.webp",
      "logo": null,
      "credit": {
        "author": "Jamesfranklingresham",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:Charles_Goodhart_delives_the_2012_Long_Finance_conference_keynote_speech.JPG"
      }
    },
    "en": {
      "title": "Goodhart's Law",
      "concept": "A number stops measuring well once people are rewarded for moving it.",
      "mechanism": "When a measure becomes a target, it ceases to be a good measure. If you reward \"number of commits,\" people will make tiny, useless commits.",
      "counter": {
        "name": "Balanced Scorecards"
      },
      "guideline": "Never use a single metric to judge performance. Observe the system's output, not its proxies.",
      "source": "Charles Goodhart, *Problems of Monetary Management* (1975); reformulated by Marilyn Strathern (1997)."
    },
    "ja": {
      "title": "グッドハートの法則",
      "concept": "数字を動かすことに報酬がつくと、その数字は実態を測らなくなる。",
      "mechanism": "ある指標が目標になると、それは良い指標ではなくなる。「コミット数」で評価すれば、人々は意味のない小さなコミットを量産する。",
      "counter": {
        "name": "バランスト・スコアカード"
      },
      "guideline": "単一の指標でパフォーマンスを判断するな。システムの「出力」そのものを観察し、その代用指標（プロキシ）に固執するな。",
      "source": "Charles Goodhart, *Problems of Monetary Management* (1975); 現代によく引用される定式化は Marilyn Strathern (1997) による。"
    }
  },
  {
    "slug": "lindy-effect",
    "number": 15,
    "tag": "systems",
    "sourceUrl": "https://en.wikipedia.org/wiki/Lindy_effect",
    "seeAlso": [
      "worse-is-better",
      "amaras-law",
      "choose-boring-technology"
    ],
    "figure": {
      "kind": "person",
      "name": "Nassim Nicholas Taleb",
      "monogram": "NT",
      "image": "/figures/lindy-effect.webp",
      "logo": null,
      "credit": {
        "author": "Eirik Solheim / NRKbeta",
        "license": "CC BY-SA 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Nassim_Nicholas_Taleb_DLD_2009-012_(cropped).jpg"
      }
    },
    "en": {
      "title": "Lindy Effect",
      "concept": "For ideas and software, the longer something has survived, the longer it is likely to last.",
      "mechanism": "For non-perishable things like ideas or software, the longer they have survived, the longer they are likely to survive.",
      "counter": {
        "name": "Hype Cycle Analysis"
      },
      "guideline": "If you need a stable system for 10 years, choose a technology that has already been around for 10 years (e.g., PostgreSQL over a new NoSQL).",
      "source": "Coined by Albert Goldman (*New Republic*, 1964); formalized by Benoit Mandelbrot and popularized by Nassim Taleb, *Antifragile* (2012)."
    },
    "ja": {
      "title": "リンディ効果",
      "concept": "アイデアやソフトウェアは、長く生き残ったものほどこの先も長く残る可能性が高い。",
      "mechanism": "アイデアやソフトウェアのような非腐敗的なものは、長く生き残ってきたものほど、今後も長く生き残る可能性が高い。",
      "counter": {
        "name": "ハイプサイクル分析"
      },
      "guideline": "今後10年安定させたいなら、既に10年以上存在している技術（例：新しいNoSQLよりPostgreSQL）を選べ。",
      "source": "Albert Goldman 命名 (*New Republic*, 1964); Benoit Mandelbrot が形式化し、Nassim Taleb *Antifragile* (2012) で普及。"
    }
  },
  {
    "slug": "sunk-cost-fallacy",
    "number": 16,
    "tag": "decision",
    "sourceUrl": "https://doi.org/10.1016/0749-5978(85)90049-4",
    "seeAlso": [
      "type-1-vs-type-2-decisions",
      "fixed-time-variable-scope"
    ],
    "figure": {
      "kind": "person",
      "name": "Richard H. Thaler",
      "monogram": "RT",
      "image": "/figures/sunk-cost-fallacy.webp",
      "logo": null,
      "credit": {
        "author": "Chatham House",
        "license": "CC BY 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Richard_Thaler_Chatham.jpg"
      }
    },
    "en": {
      "title": "Sunk Cost Fallacy",
      "concept": "Teams keep funding a failing project because of what they have already spent on it.",
      "mechanism": "We continue investing in a failing tech stack/project because \"we've already spent so much on it.\" The brain hates admitting a loss.",
      "counter": {
        "name": "Zero-Based Budgeting"
      },
      "guideline": "Ask: \"If we started today with zero investment, would we choose this path?\" If no, kill it.",
      "source": "Hal R. Arkes & Catherine Blumer, *The Psychology of Sunk Cost* (Organizational Behavior and Human Decision Processes, 1985)."
    },
    "ja": {
      "title": "サンクコストの誤謬",
      "concept": "すでに注ぎ込んだ分が惜しくて、失敗しているプロジェクトに投資し続ける。",
      "mechanism": "「既に多額の投資をしたから」という理由で、失敗している技術やプロジェクトに投資し続けてしまう。脳は負けを認めるのを嫌う。",
      "counter": {
        "name": "ゼロベース予算"
      },
      "guideline": "「もし今日、ゼロから始めるとしたら、この道を選ぶか？」と問え。答えがNOなら、今すぐ捨てろ。",
      "source": "Hal R. Arkes & Catherine Blumer, *The Psychology of Sunk Cost* (Organizational Behavior and Human Decision Processes, 1985)。"
    }
  },
  {
    "slug": "cargo-cult-engineering",
    "number": 17,
    "tag": "cognition",
    "sourceUrl": "https://calteches.library.caltech.edu/51/2/CargoCult.htm",
    "seeAlso": [
      "survivorship-bias",
      "the-bitter-lesson"
    ],
    "figure": {
      "kind": "person",
      "name": "Richard Feynman",
      "monogram": "RF",
      "image": "/figures/cargo-cult-engineering.webp",
      "logo": null,
      "credit": {
        "author": "Tamiko Thiel",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:RichardFeynman-PaineMansionWoods1984_copyrightTamikoThiel_bw.jpg"
      }
    },
    "en": {
      "title": "Cargo Cult Engineering",
      "concept": "Teams copy another company's practices without the conditions that made them work.",
      "mechanism": "Copying the practices of successful companies (e.g., \"The Spotify Model\") without understanding *why* they worked there, hoping for the same results.",
      "counter": {
        "name": "First Principles Thinking"
      },
      "guideline": "Do not adopt a tool/process because Google uses it. Adopt it because you have the exact problem Google had at that scale.",
      "source": "Richard P. Feynman, *Cargo Cult Science* (Caltech commencement address, 1974)."
    },
    "ja": {
      "title": "カーゴ・カルト・エンジニアリング",
      "concept": "うまくいった理由を理解しないまま、他社のやり方の形だけを真似る。",
      "mechanism": "成功企業の慣行（例：Spotifyモデル）を、なぜそれが機能したか理解せずに真似る。同じ結果が得られると盲信する罠。",
      "counter": {
        "name": "第一原理思考"
      },
      "guideline": "Googleが使っているからという理由で導入するな。そのスケールにおけるGoogleと同じ問題が自分たちにあるから、導入せよ。",
      "source": "Richard P. Feynman, *Cargo Cult Science* (Caltech 卒業式講演, 1974)。"
    }
  },
  {
    "slug": "amdahls-law",
    "number": 18,
    "tag": "performance",
    "sourceUrl": "https://doi.org/10.1145/1465482.1465560",
    "seeAlso": [
      "gustafsons-law",
      "premature-optimization",
      "theory-of-constraints"
    ],
    "figure": {
      "kind": "person",
      "name": "Gene Amdahl",
      "monogram": "GA",
      "image": "/figures/amdahls-law.webp",
      "logo": null,
      "credit": {
        "author": "Perry Kivolowitz",
        "license": "CC BY 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:Amdahl_march_13_2008.jpg"
      }
    },
    "en": {
      "title": "Amdahl's Law",
      "concept": "Speeding up one part of a system barely helps when the bottleneck is somewhere else.",
      "mechanism": "Optimizing a small part of a system has no impact if the bottleneck is elsewhere.",
      "counter": {
        "name": "Theory of Constraints"
      },
      "guideline": "Find the 1% of the code that takes 90% of the time. Only optimize that. Ignore the rest.",
      "source": "Gene Amdahl, *Validity of the Single Processor Approach to Achieving Large Scale Computing Capabilities* (AFIPS, 1967)."
    },
    "ja": {
      "title": "アムダールの法則",
      "concept": "ボトルネックが別の場所にあれば、一部を速くしても全体はほとんど速くならない。",
      "mechanism": "ボトルネックが他にある場合、システムの一部をいくら最適化しても全体の性能には影響しない。",
      "counter": {
        "name": "制約理論"
      },
      "guideline": "実行時間の90%を占める1%のコードを見つけ、そこだけを最適化せよ。それ以外は無視してよい。",
      "source": "Gene Amdahl, *Validity of the Single Processor Approach to Achieving Large Scale Computing Capabilities* (AFIPS, 1967)。"
    }
  },
  {
    "slug": "leaky-abstractions",
    "number": 19,
    "tag": "systems",
    "sourceUrl": "https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/",
    "seeAlso": [
      "teslers-law",
      "law-of-demeter"
    ],
    "figure": {
      "kind": "person",
      "name": "Joel Spolsky",
      "monogram": "JS",
      "image": "/figures/leaky-abstractions.webp",
      "logo": null,
      "credit": {
        "author": "Katie Chan",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File:Joel_Spolsky_2014-06-18_(cropped).jpg"
      }
    },
    "en": {
      "title": "Law of Leaky Abstractions",
      "concept": "Every non-trivial abstraction eventually exposes the details it was meant to hide.",
      "mechanism": "All non-trivial abstractions, to some degree, leak. You can't use SQL without understanding how indexes work eventually.",
      "counter": {
        "name": "T-Shaped Skills"
      },
      "guideline": "Use abstractions to move fast, but ensure at least one person on the team understands the layer beneath it.",
      "source": "Joel Spolsky, *The Law of Leaky Abstractions* (Joel on Software, 2002)."
    },
    "ja": {
      "title": "リーキー・アブストラクション",
      "concept": "込み入った抽象化はいずれ、隠したはずの下の層の詳細を露出させる。",
      "mechanism": "あらゆる非自明な抽象化は、ある程度「漏れる」。インデックスの仕組みを知らずにSQLを使い続けることはできない。",
      "counter": {
        "name": "T型スキル"
      },
      "guideline": "抽象化を利用して加速せよ。ただし、チーム内に少なくとも一人は、その下の層で何が起きているか理解している人間を置け。",
      "source": "Joel Spolsky, *The Law of Leaky Abstractions* (Joel on Software, 2002)。"
    }
  },
  {
    "slug": "pareto-principle",
    "number": 20,
    "tag": "decision",
    "sourceUrl": "https://en.wikipedia.org/wiki/Pareto_principle",
    "seeAlso": [
      "premature-optimization"
    ],
    "figure": {
      "kind": "person",
      "name": "Vilfredo Pareto",
      "monogram": "VP",
      "image": "/figures/pareto-principle.webp",
      "logo": null,
      "credit": {
        "author": "Unknown author",
        "license": "Public domain",
        "page": "https://commons.wikimedia.org/wiki/File:Vilfredo_Pareto_1870s2.jpg"
      }
    },
    "en": {
      "title": "Pareto Principle",
      "concept": "Most of the effect comes from a small share of the causes, such as bugs in a few modules.",
      "mechanism": "80% of bugs come from 20% of the code. 80% of value comes from 20% of the features.",
      "counter": {
        "name": "Ruthless Prioritization"
      },
      "guideline": "Identify the \"Critical 20%\" and give it 100% of your quality focus.",
      "source": "Vilfredo Pareto, *Cours d'Économie Politique* (1896); applied to quality engineering by Joseph M. Juran (*Quality Control Handbook*, 1951)."
    },
    "ja": {
      "title": "パレートの法則",
      "concept": "結果の大半は、少数の原因から生まれる。バグの多くは一部のコードに集中する。",
      "mechanism": "バグの80%はコードの20%に起因する。価値の80%は機能の20%から生まれる。",
      "counter": {
        "name": "非情な優先順位付け"
      },
      "guideline": "「重要な20%」を特定し、品質管理のリソースの100%をそこに集中させよ。",
      "source": "Vilfredo Pareto, *Cours d'Économie Politique* (1896); 品質工学への応用は Joseph M. Juran, *Quality Control Handbook* (1951)。"
    }
  },
  {
    "slug": "survivorship-bias",
    "number": 21,
    "tag": "cognition",
    "sourceUrl": "https://en.wikipedia.org/wiki/Survivorship_bias",
    "seeAlso": [
      "cargo-cult-engineering",
      "amaras-law"
    ],
    "figure": {
      "kind": "person",
      "name": "Abraham Wald",
      "monogram": "AW",
      "image": "/figures/survivorship-bias.webp",
      "logo": null,
      "credit": {
        "author": "Unknown",
        "license": "Public domain in the US",
        "page": "https://en.wikipedia.org/wiki/File:Abraham_Wald_in_his_youth.jpg_(enwiki-local,_not_Commons)"
      }
    },
    "en": {
      "title": "Survivorship Bias",
      "concept": "Conclusions drawn only from successes ignore the failures that used the same strategy.",
      "mechanism": "We study only the successes that survived and draw conclusions from them, ignoring the silent graveyard of failures that used the same strategy. The data we see is fundamentally skewed.",
      "counter": {
        "name": "Failure Studies / Post-mortem Culture"
      },
      "guideline": "Before adopting a strategy because \"Company X succeeded with it,\" research how many companies failed using the same approach. The dead don't write blog posts.",
      "source": "Abraham Wald, *A Method of Estimating Plane Vulnerability* (SRG Memo, 1943) — the WWII bomber-armor analysis."
    },
    "ja": {
      "title": "生存者バイアス",
      "concept": "成功例だけから結論を出すと、同じやり方で失敗した例が見えなくなる。",
      "mechanism": "生き残った成功事例だけを研究し、そこから結論を導いてしまう。同じ戦略を採って消えていった無数の失敗は、データとして見えない。本質的に偏った情報で意思決定している。",
      "counter": {
        "name": "失敗学 / ポストモーテム文化"
      },
      "guideline": "「X社がこの方法で成功した」を根拠にする前に、同じ方法で失敗した企業を調べよ。死者はブログ記事を書かない。",
      "source": "Abraham Wald, *A Method of Estimating Plane Vulnerability* (SRG メモ, 1943) — 第二次大戦時の爆撃機装甲分析。"
    }
  },
  {
    "slug": "kernighans-law",
    "number": 22,
    "tag": "maintainability",
    "sourceUrl": "https://en.wikipedia.org/wiki/The_Elements_of_Programming_Style",
    "seeAlso": [
      "eaglesons-law",
      "kiss-principle"
    ],
    "figure": {
      "kind": "person",
      "name": "Brian Kernighan",
      "monogram": "BK",
      "image": "/figures/kernighans-law.webp",
      "logo": null,
      "credit": {
        "author": "Jw12321",
        "license": "CC0",
        "page": "https://commons.wikimedia.org/wiki/File:Brian_Kernighan_at_VCF_East_2.jpg"
      }
    },
    "en": {
      "title": "Kernighan's Law",
      "concept": "Debugging is harder than writing, so code written at your cleverest is beyond your debugging.",
      "mechanism": "\"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.\"",
      "counter": {
        "name": "KISS (Keep It Simple, Stupid)"
      },
      "guideline": "Code \"cleverness\" is a liability, not an asset. Write code that your future self, sleep-deprived at 3 AM, can still understand in 6 months.",
      "source": "Brian W. Kernighan & P. J. Plauger, *The Elements of Programming Style*, 2nd ed. (1978)."
    },
    "ja": {
      "title": "カーニハンの法則",
      "concept": "デバッグは書くより難しい。最大限に凝ったコードは、自分ではデバッグできない。",
      "mechanism": "「デバッグは、コードを書くときの2倍の知性を要する。したがって、自分の知力の限界まで賢いコードを書いた時点で、そのコードをデバッグする知性が定義上、足りなくなる。」",
      "counter": {
        "name": "KISS (Keep It Simple, Stupid)"
      },
      "guideline": "コードの「賢さ」は資産ではなく負債である。6ヶ月後の、午前3時に睡眠不足の自分がまだ理解できるコードを書け。",
      "source": "Brian W. Kernighan & P. J. Plauger, *The Elements of Programming Style*, 第 2 版 (1978)。"
    }
  },
  {
    "slug": "cobra-effect",
    "number": 23,
    "tag": "incentives",
    "sourceUrl": "https://en.wikipedia.org/wiki/Perverse_incentive",
    "seeAlso": [
      "goodharts-law",
      "jevons-paradox"
    ],
    "figure": {
      "kind": "scene",
      "name": "Indian cobra (Naja naja)",
      "monogram": "CE",
      "image": "/figures/cobra-effect.webp",
      "logo": null,
      "credit": {
        "author": "Pavan Kumar N (Simplypavi)",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:Indian_Cobra,_crop.jpg"
      }
    },
    "en": {
      "title": "Cobra Effect",
      "concept": "An incentive meant to reduce a problem rewards people for producing more of it.",
      "mechanism": "A solution designed to fix a problem creates a worse problem. In colonial India, a bounty on cobras led people to breed cobras for the reward. When the bounty was cancelled, breeders released their stock, making the problem worse.",
      "counter": {
        "name": "Second-Order Effects Analysis / System Dynamics"
      },
      "guideline": "For every incentive you create, ask: \"If someone wanted to game this, how would they?\" If you can find a way, the design is wrong.",
      "source": "Horst Siebert, *Der Kobra-Effekt: Wie man Irrwege der Wirtschaftspolitik vermeidet* (2001)."
    },
    "ja": {
      "title": "コブラ効果",
      "concept": "問題を減らすための報酬が、問題を増やす行動に報いてしまう。",
      "mechanism": "問題を解決するための施策が、かえって問題を悪化させる。英領インドでコブラ駆除のため懸賞金をかけたら、人々がコブラを養殖し始めた。懸賞金を廃止すると養殖コブラが放流され、さらに事態が悪化した。",
      "counter": {
        "name": "二次効果分析 / システムダイナミクス"
      },
      "guideline": "あらゆるインセンティブに対し「これを悪用するならどうする？」を問え。悪用方法が見つかるなら、設計が間違っている。",
      "source": "Horst Siebert, *Der Kobra-Effekt: Wie man Irrwege der Wirtschaftspolitik vermeidet* (2001)。"
    }
  },
  {
    "slug": "dunbars-number",
    "number": 24,
    "tag": "organization",
    "sourceUrl": "https://doi.org/10.1016/0047-2484(92)90081-J",
    "seeAlso": [
      "conways-law",
      "brooks-law",
      "millers-law",
      "metcalfes-law",
      "ringelmann-effect"
    ],
    "figure": {
      "kind": "person",
      "name": "Robin Dunbar",
      "monogram": "RD",
      "image": "/figures/dunbars-number.webp",
      "logo": null,
      "credit": {
        "author": "Festival della Scienza from Genova",
        "license": "CC BY-SA 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Robin_Dunbar_(6293027302).jpg"
      }
    },
    "en": {
      "title": "Dunbar's Number",
      "concept": "People keep only about 150 stable relationships. Engineers extrapolate: past shared context, added headcount goes to coordination.",
      "mechanism": "Humans can maintain approximately 150 stable social relationships. Dunbar's result is about neocortex size and group size across primates — it is not about work teams. What engineering extrapolates from it is a separate argument: communication channels grow as n(n-1)/2, so past the size where everyone can still hold everyone else's context, added people go into coordination rather than output.",
      "counter": {
        "name": "Two-Pizza Rule / Team Topologies"
      },
      "guideline": "When a team exceeds 7±2 people, split it. If \"information-sharing meetings\" start multiplying, that's the symptom of exceeding the cognitive limit.",
      "source": "Robin I. M. Dunbar, *Neocortex size as a constraint on group size in primates* (Journal of Human Evolution, 1992). The smaller team-size figures usually quoted alongside it — 7±2, the two-pizza rule — are folklore rather than Dunbar's finding."
    },
    "ja": {
      "title": "ダンバー数",
      "concept": "人が安定して保てる関係は150人ほどだ。工学ではそこから、文脈を共有できる規模を超えると増員は調整に消える、と推し量る。",
      "mechanism": "人間が安定した社会関係を維持できる認知限界は約150人。ダンバーの結果は霊長類全般における新皮質サイズと群れの大きさの関係についてであって、仕事のチームについてではない。エンジニアリングがそこから外挿しているのは別の議論だ——コミュニケーション経路は n(n-1)/2 で増えるので、全員が全員の文脈をまだ保持できる規模を超えた時点から、増えた人員は成果ではなく調整に消える。",
      "counter": {
        "name": "ツー・ピザ・ルール / チームトポロジー"
      },
      "guideline": "チームが7±2人を超えたら分割を検討せよ。「情報共有ミーティング」が増殖し始めたら、認知限界を超えた兆候である。",
      "source": "Robin I. M. Dunbar, *Neocortex size as a constraint on group size in primates* (Journal of Human Evolution, 1992)。併せて引かれる小さいチーム規模の数字——7±2、ツー・ピザ・ルール——はダンバーの知見ではなく、通俗的な外挿である。"
    }
  },
  {
    "slug": "worse-is-better",
    "number": 25,
    "tag": "systems",
    "sourceUrl": "https://www.dreamsongs.com/RiseOfWorseIsBetter.html",
    "seeAlso": [
      "galls-law",
      "lindy-effect",
      "second-system-effect"
    ],
    "figure": {
      "kind": "person",
      "name": "Richard P. Gabriel",
      "monogram": "RG",
      "image": null,
      "logo": null,
      "credit": null
    },
    "en": {
      "title": "Worse is Better",
      "concept": "A simpler design that is easy to build and adopt tends to beat a more correct but complex one.",
      "mechanism": "A simpler, \"inferior\" design that is easy to implement and adopt will beat a theoretically \"correct\" but complex design in the real world. Unix beat Lisp. HTTP beat CORBA.",
      "counter": {
        "name": "The Right Thing / Perfectionism"
      },
      "guideline": "A solution that is 80% correct and ships today will outperform a 100% correct solution that ships next year. Optimize for adoption, not elegance.",
      "source": "Richard P. Gabriel, *Lisp: Good News, Bad News, How to Win Big* (1991) — the \"Worse is Better\" essay."
    },
    "ja": {
      "title": "劣っている方が勝つ",
      "concept": "作りやすく広めやすい単純な設計は、正しいが複雑な設計に勝ちやすい。",
      "mechanism": "理論的に「正しい」が複雑な設計よりも、単純で「不完全」だが実装と採用が容易な設計の方が、現実世界では勝利する。UnixはLispに勝ち、HTTPはCORBAに勝った。",
      "counter": {
        "name": "The Right Thing / 完璧主義"
      },
      "guideline": "80%正しくて今日リリースできるものは、100%正しくて来年リリースされるものに勝つ。優雅さではなく普及を最適化せよ。",
      "source": "Richard P. Gabriel, *Lisp: Good News, Bad News, How to Win Big* (1991) — \"Worse is Better\" のエッセイ。"
    }
  },
  {
    "slug": "cunninghams-law",
    "number": 26,
    "tag": "organization",
    "sourceUrl": "https://meta.wikimedia.org/wiki/Cunningham%27s_Law",
    "seeAlso": [
      "linus-law"
    ],
    "figure": {
      "kind": "person",
      "name": "Ward Cunningham",
      "monogram": "WC",
      "image": "/figures/cunninghams-law.webp",
      "logo": null,
      "credit": {
        "author": "Carrigg Photography for the Wikimedia Foundation",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:Ward_Cunningham_-_Commons-1_(cropped).jpg"
      }
    },
    "en": {
      "title": "Cunningham's Law",
      "concept": "People are quicker to correct a wrong answer than to answer a question.",
      "mechanism": "\"The best way to get the right answer on the internet is not to ask a question; it's to post the wrong answer.\" People are more motivated to correct mistakes than to answer questions.",
      "counter": {
        "name": "Socratic Method"
      },
      "guideline": "When documentation is missing, post your best guess of how something works. The person who knows the truth will appear to correct you far faster than if you had asked directly.",
      "source": "Attributed to Ward Cunningham (inventor of the wiki) by Steven McGeady; named in this form on Wikipedia (~2010)."
    },
    "ja": {
      "title": "カニンガムの法則",
      "concept": "人は質問に答えるより、間違った答えを訂正するほうに熱心だ。",
      "mechanism": "「インターネットで正しい答えを得る最良の方法は、質問することではなく、間違った答えを投稿することだ。」人は質問に答えるよりも、間違いを訂正する動機の方が強い。",
      "counter": {
        "name": "ソクラテス式問答"
      },
      "guideline": "ドキュメントがないシステムについて「これはXをやっているのだと思う」と書け。真実を知る人間が沈黙を破って訂正してくれる確率は、単に「これは何？」と聞くより遥かに高い。",
      "source": "Ward Cunningham (wiki の発明者) に Steven McGeady が帰属、Wikipedia 上でこの名称で定着 (~2010)。"
    }
  },
  {
    "slug": "bystander-effect",
    "number": 27,
    "tag": "organization",
    "sourceUrl": "https://doi.org/10.1037/h0025589",
    "seeAlso": [
      "hanlons-razor",
      "ringelmann-effect",
      "blameless-postmortem"
    ],
    "figure": {
      "kind": "person",
      "name": "John M. Darley",
      "monogram": "JD",
      "image": null,
      "logo": null,
      "credit": null
    },
    "en": {
      "title": "Bystander Effect",
      "concept": "The more people who see a problem, the less likely any one of them is to act on it.",
      "mechanism": "In an emergency, the more people who are present, the less likely any single person is to take action. \"Someone else will handle it.\" In engineering, a page sent to a group channel often means nobody responds.",
      "counter": {
        "name": "Explicit Role Assignment / Incident Commander"
      },
      "guideline": "Never say \"Can someone look at this?\" Instead, say \"@name, you are investigating this.\" Assign a single, named owner for every incident.",
      "source": "John M. Darley & Bibb Latané, *Bystander Intervention in Emergencies: Diffusion of Responsibility* (JPSP, 1968)."
    },
    "ja": {
      "title": "傍観者効果",
      "concept": "問題を目にする人が多いほど、一人ひとりが自分から動く可能性は下がる。",
      "mechanism": "緊急事態において、居合わせる人数が多いほど、個々人が行動を起こす可能性は低くなる。「誰かが対応するだろう」と全員が思い、結果誰も対応しない。エンジニアリングでは、グループチャンネルへのアラートは往々にして無視される。",
      "counter": {
        "name": "明示的な役割割り当て / インシデントコマンダー制"
      },
      "guideline": "「誰か見てますか？」とは決して言うな。「@名前、あなたがこれを調査してください」と名指しで依頼せよ。すべてのインシデントに、名前のある単一のオーナーを割り当てよ。",
      "source": "John M. Darley & Bibb Latané, *Bystander Intervention in Emergencies: Diffusion of Responsibility* (Journal of Personality and Social Psychology, 1968)。"
    }
  },
  {
    "slug": "murphys-law",
    "number": 28,
    "tag": "safety",
    "sourceUrl": "https://en.wikipedia.org/wiki/Murphy%27s_law",
    "seeAlso": [
      "normalcy-bias",
      "fallacies-of-distributed-computing",
      "chaos-engineering"
    ],
    "figure": {
      "kind": "person",
      "name": "John Paul Stapp",
      "monogram": "JS",
      "image": "/figures/murphys-law.webp",
      "logo": null,
      "credit": {
        "author": "U.S. Air Force",
        "license": "Public domain (US government work)",
        "page": "https://commons.wikimedia.org/wiki/File:John_Stapp.triddle.jpg"
      }
    },
    "en": {
      "title": "Murphy's Law",
      "concept": "Given enough time and traffic, a failure mode that can happen eventually will.",
      "mechanism": "\"Anything that can go wrong, will go wrong.\" Given enough time, traffic, or unexpected input, every latent failure mode eventually fires. Engineers who design only for the happy path build systems that are one network blip away from collapse.",
      "counter": {
        "name": "Defensive Design / Chaos Engineering"
      },
      "guideline": "Treat every external dependency, retry, and timeout as something that *will* fail in production. Build the failure path before the success path.",
      "source": "Capt. Edward A. Murphy Jr., USAF Project MX981 (1949); popularized by Maj. John Paul Stapp."
    },
    "ja": {
      "title": "マーフィーの法則",
      "concept": "時間と負荷が十分にあれば、起こりうる故障はいずれ起きる。",
      "mechanism": "「うまくいかない可能性があることは、必ずうまくいかない。」十分な時間・トラフィック・想定外の入力さえあれば、潜在的な失敗モードはいずれ必ず発火する。ハッピーパスだけを設計したシステムは、ネットワークの一瞬の揺れで崩れる。",
      "counter": {
        "name": "防御的設計 / カオスエンジニアリング"
      },
      "guideline": "外部依存・リトライ・タイムアウトはすべて、本番でいつか必ず失敗するものとして扱え。成功パスより先に失敗パスを設計せよ。",
      "source": "Capt. Edward A. Murphy Jr. (USAF MX981 計画, 1949); Maj. John Paul Stapp により普及。"
    }
  },
  {
    "slug": "boy-scout-rule",
    "number": 29,
    "tag": "maintainability",
    "sourceUrl": "https://www.oreilly.com/library/view/97-things-every/9780596809515/ch08.html",
    "seeAlso": [
      "normalization-of-deviance",
      "broken-windows-theory",
      "code-health-standard"
    ],
    "figure": {
      "kind": "person",
      "name": "Robert C. Martin",
      "monogram": "RM",
      "image": "/figures/boy-scout-rule.webp",
      "logo": null,
      "credit": {
        "author": "Angelacleancoder",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File:Robert_C._Martin_surrounded_by_computers_(cropped).jpg"
      }
    },
    "en": {
      "title": "Boy Scout Rule",
      "concept": "Code decays because cleanup tends to be deferred to a refactor that rarely happens.",
      "mechanism": "Codebases decay because cleanup is always \"someone else's job.\" Each engineer absorbs the entropy hit but defers the fix to a future refactor that never lands. The graph trends down.",
      "counter": {
        "name": "One Reason Per Diff",
        "note": "cleanup riding along with a behaviour change hides the change, and a pull request that also renames forty things is one nobody reviews"
      },
      "guideline": "Always leave the code cleaner than you found it, and keep the cleanup small enough to read inside the same diff — a one-line rename, a clearer comment, a deleted dead branch. Anything bigger gets its own commit.",
      "source": "Robert C. Martin, *The Boy Scout Rule*, in Kevlin Henney (ed.), *97 Things Every Programmer Should Know* (O'Reilly, 2010) — adapting Baden-Powell's \"leave this world a little better than you found it\". Also stated in *Clean Code* (2008)."
    },
    "ja": {
      "title": "ボーイスカウトの規則",
      "concept": "掃除はめったに来ないリファクタリングに先送りされがちで、コードは劣化していく。",
      "mechanism": "クリーンアップは常に「誰か別の人の仕事」になりがちで、コードベースは劣化していく。各エンジニアはエントロピー増加の影響だけ受けて、修正は「いつかのリファクタ」に先送りされ、それは結局来ない。",
      "counter": {
        "name": "1つの差分に1つの理由",
        "note": "振る舞いの変更に清掃が相乗りすると変更そのものが隠れる。ついでに40箇所リネームした PR は、誰にもレビューされない"
      },
      "guideline": "コードを来たときよりきれいにして去れ。ただし清掃は、同じ差分の中で読み切れる大きさに留めよ——1行のリネーム、より明確なコメント、デッドコードの削除。それより大きいものは独立したコミットにせよ。",
      "source": "Robert C. Martin『The Boy Scout Rule』(Kevlin Henney 編『97 Things Every Programmer Should Know』O'Reilly, 2010 所収)——ベーデン＝パウエルの「この世界を来たときより少しだけ良くして去れ」の翻案。『Clean Code』(2008) にも記述がある。"
    }
  },
  {
    "slug": "teslers-law",
    "number": 30,
    "tag": "systems",
    "sourceUrl": "https://en.wikipedia.org/wiki/Law_of_conservation_of_complexity",
    "seeAlso": [
      "leaky-abstractions",
      "ashbys-law"
    ],
    "figure": {
      "kind": "person",
      "name": "Larry Tesler",
      "monogram": "LT",
      "image": "/figures/teslers-law.webp",
      "logo": null,
      "credit": {
        "author": "Yahoo! Blog from Sunnyvale, California, USA",
        "license": "CC BY 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Larry_Tesler_Smiles_at_Whisper.jpeg"
      }
    },
    "en": {
      "title": "Tesler's Law",
      "concept": "A system's inherent complexity can't be removed, only moved to someone else.",
      "mechanism": "Every system has an irreducible amount of complexity that cannot be removed — only relocated. Hide it from the user and it lands on the developer. Hide it from the developer and it lands on the operator. Hide it from the operator and it lands on the customer at 3 AM.",
      "counter": {
        "name": "Honest Layering / Explicit Tradeoffs"
      },
      "guideline": "When a \"simple API\" feels too clean, ask: who absorbed the complexity I just removed? If you can't name them, you didn't simplify — you displaced.",
      "source": "Larry Tesler, while at Xerox PARC / Apple (~1984); cited as the \"Law of Conservation of Complexity.\""
    },
    "ja": {
      "title": "テスラーの複雑性保存則",
      "concept": "システムに本来備わる複雑さは消せない。誰か別の人に移るだけだ。",
      "mechanism": "あらゆるシステムには取り除けない本質的複雑性があり、それは消えるのではなく**移動する**だけだ。ユーザーから隠せば開発者へ、開発者から隠せば運用者へ、運用者から隠せば午前 3 時の顧客の手元に着地する。",
      "counter": {
        "name": "誠実なレイヤリング / 明示的なトレードオフ"
      },
      "guideline": "「シンプルな API」が綺麗すぎると感じたら問え——いま自分が消した複雑性を、誰が吸収したのか? 答えられないなら、簡素化したのではなく**転嫁**しただけだ。",
      "source": "Larry Tesler (Xerox PARC / Apple 在籍時, ~1984) が \"Law of Conservation of Complexity\" として提示。"
    }
  },
  {
    "slug": "dunning-kruger-effect",
    "number": 31,
    "tag": "cognition",
    "sourceUrl": "https://doi.org/10.1037/0022-3514.77.6.1121",
    "seeAlso": [
      "curse-of-knowledge",
      "peter-principle"
    ],
    "figure": {
      "kind": "person",
      "name": "David Dunning",
      "monogram": "DD",
      "image": "/figures/dunning-kruger-effect.webp",
      "logo": null,
      "credit": {
        "author": "Karl Withakay",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File:David_Dunning_at_LiliCon_2026.jpg"
      }
    },
    "en": {
      "title": "Dunning-Kruger Effect",
      "concept": "People who are least skilled at something tend to overrate their ability the most.",
      "mechanism": "Lacking expertise in a domain also means lacking the meta-skill required to recognize one's own incompetence. In the original study the bottom quartile scored around the 12th percentile and placed themselves near the 60th. Top performers *under*-rated themselves, because they assumed others found the task as easy as they did.",
      "counter": {
        "name": "Calibrated Confidence",
        "note": "the effect is contested — much of the classic pattern is reproduced by regression to the mean in noisy self-assessment, so treat overconfidence as a prompt to check the record rather than as a diagnosis"
      },
      "guideline": "When someone declares a hard problem \"easy,\" check their domain history before trusting the estimate. During scoping, pair confident newcomers with quiet veterans and weight the quiet voice.",
      "source": "Justin Kruger & David Dunning, *Unskilled and Unaware of It* (JPSP, 1999)."
    },
    "ja": {
      "title": "ダニング・クルーガー効果",
      "concept": "ある分野に疎い人ほど、自分の能力を過大評価しがちだ。",
      "mechanism": "ある分野で専門性を欠くということは、「自分の無能さを認識するために必要なメタ的スキル」も同時に欠くということ。元の研究では、下位四分位の被験者は実際には12パーセンタイル程度でありながら、自己評価を60パーセンタイル付近に置いた。逆に上位の被験者は、他人にも同じくらい簡単なはずだと仮定して自分を過小評価した。",
      "counter": {
        "name": "較正された自信",
        "note": "この効果には異論がある——古典的なパターンの多くは、ノイズの多い自己評価の平均への回帰でも再現できる。だから過信は「診断」ではなく「実績を確認せよという合図」として扱え"
      },
      "guideline": "誰かが難問を「簡単」と断言したら、その見積もりを信じる前に、その分野での実績を確認せよ。スコーピングの場面では、自信ある新参者と寡黙な熟達者をペアにし、寡黙な側の声を重く扱え。",
      "source": "Justin Kruger & David Dunning, *Unskilled and Unaware of It* (Journal of Personality and Social Psychology, 1999)。"
    }
  },
  {
    "slug": "curse-of-knowledge",
    "number": 32,
    "tag": "cognition",
    "sourceUrl": "https://doi.org/10.1086/261651",
    "seeAlso": [
      "xy-problem",
      "dunning-kruger-effect",
      "principle-of-least-astonishment",
      "context-not-control"
    ],
    "figure": {
      "kind": "person",
      "name": "George Loewenstein",
      "monogram": "GL",
      "image": "/figures/curse-of-knowledge.webp",
      "logo": null,
      "credit": {
        "author": "Me Judice (MeJudice)",
        "license": "CC BY 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:George_Loewenstein_(2012).jpg"
      }
    },
    "en": {
      "title": "Curse of Knowledge",
      "concept": "Once you know something, you can't easily imagine what it's like not to know it.",
      "mechanism": "Once you know a thing, you cannot easily imagine not knowing it. Engineers write docs, error messages, and APIs that are obvious to themselves and opaque to the next person who has to use them.",
      "counter": {
        "name": "User Testing / Onboarding Buddies / Documentation Reviewers Outside the Author's Team"
      },
      "guideline": "Before shipping documentation or a public API, have someone who has never touched the system attempt the task while you watch silently. Their confusion points exactly at the assumptions you forgot to spell out.",
      "source": "Colin Camerer, George Loewenstein & Martin Weber, *The Curse of Knowledge in Economic Settings: An Experimental Analysis* (Journal of Political Economy, 1989)."
    },
    "ja": {
      "title": "知識の呪い",
      "concept": "一度知ってしまうと、知らなかったときの感覚を想像できなくなる。",
      "mechanism": "一度ある事を知ってしまうと、「それを知らなかった状態」を容易には想像できなくなる。エンジニアはドキュメント、エラーメッセージ、API を、自分にとっては自明で、次に使う人にとっては不透明な状態で書いてしまう。",
      "counter": {
        "name": "ユーザーテスト / オンボーディングバディ / 著者のチーム外のドキュメントレビュアー"
      },
      "guideline": "ドキュメントや公開 API を出荷する前に、システムを一度も触ったことのない人にそのタスクをやらせ、自分は黙って観察せよ。彼らの混乱は、自分が言語化し忘れた前提を正確に指している。",
      "source": "Colin Camerer, George Loewenstein & Martin Weber, *The Curse of Knowledge in Economic Settings: An Experimental Analysis* (Journal of Political Economy, 1989)。"
    }
  },
  {
    "slug": "swiss-cheese-model",
    "number": 33,
    "tag": "safety",
    "sourceUrl": "https://en.wikipedia.org/wiki/Swiss_cheese_model",
    "seeAlso": [
      "normalization-of-deviance",
      "normal-accident-theory",
      "blameless-postmortem",
      "five-whys"
    ],
    "figure": {
      "kind": "scene",
      "name": "Emmentaler cheese block",
      "monogram": "SC",
      "image": "/figures/swiss-cheese-model.webp",
      "logo": null,
      "credit": {
        "author": "Dieter Seeger",
        "license": "CC BY-SA 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Emmentaler_aoc_block.jpg"
      }
    },
    "en": {
      "title": "Swiss Cheese Model",
      "concept": "Every safeguard has holes; accidents happen when the holes in several layers line up.",
      "mechanism": "Every protective layer (review, test, alert, runbook, rollback) has holes. Accidents happen when holes across multiple independent layers happen to align. No single layer can ever be perfect, so resilience comes from layers that fail in independent ways.",
      "counter": {
        "name": "Defense in Depth / Independent Controls / Hole-Audit at Post-Mortem"
      },
      "guideline": "During an incident review, do not stop at \"the one thing that failed.\" Enumerate every layer that should have caught the failure and ask why each hole was open at exactly that moment. The fix is rarely a single layer; it's plugging the cheapest two.",
      "source": "James Reason, *Human Error* (Cambridge University Press, 1990)."
    },
    "ja": {
      "title": "スイスチーズモデル",
      "concept": "どの防御層にも穴がある。事故は複数の層の穴がそろったときに起きる。",
      "mechanism": "すべての保護層（レビュー、テスト、アラート、ランブック、ロールバック）には穴がある。事故は、独立した複数層の穴が偶然一直線に並んだ瞬間に発生する。単一の層を完璧にすることはできないので、独立した形で失敗する複数層に依存するしかない。",
      "counter": {
        "name": "多層防御 / 独立した統制 / ポストモーテムでの「穴の監査」"
      },
      "guideline": "インシデントレビューにおいて、「失敗した一つのもの」で止まってはならない。本来それを捉えるはずだった全層を列挙し、なぜ同じ瞬間にすべての穴が開いていたのかを問え。修正対象は単一層ではなく、最も安価に塞げる二層が答えになる。",
      "source": "James Reason, *Human Error* (Cambridge University Press, 1990)。"
    }
  },
  {
    "slug": "premature-optimization",
    "number": 34,
    "tag": "performance",
    "sourceUrl": "https://doi.org/10.1145/356635.356640",
    "seeAlso": [
      "amdahls-law",
      "pareto-principle"
    ],
    "figure": {
      "kind": "person",
      "name": "Donald Knuth",
      "monogram": "DK",
      "image": "/figures/premature-optimization.webp",
      "logo": null,
      "credit": {
        "author": "Alex Handy",
        "license": "CC BY-SA 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Donald_Ervin_Knuth_(cropped).jpg"
      }
    },
    "en": {
      "title": "Premature Optimization",
      "concept": "Optimizing before measuring spends effort on code that isn't the bottleneck.",
      "mechanism": "\"Premature optimization is the root of all evil.\" Optimizing code before measurement proves it matters wastes engineering hours, adds complexity, and obstructs the eventual real optimization by entangling hot and cold paths.",
      "counter": {
        "name": "Profile First / Make It Work, Make It Right, Make It Fast (in that order)"
      },
      "guideline": "Write the obvious code first. Only optimize hot paths that a profiler proves are bottlenecks. Leave the other 97% of the code simple — that's where the next maintainer will live.",
      "source": "Donald E. Knuth, *Structured Programming with go to Statements* (Computing Surveys, 1974)."
    },
    "ja": {
      "title": "早すぎる最適化",
      "concept": "計測する前に最適化すると、ボトルネックでない箇所に工数を使ってしまう。",
      "mechanism": "「早すぎる最適化はあらゆる悪の根源である。」計測が必要性を示す前にコードを最適化すると、エンジニアの時間を浪費するだけでなく、ホットパスとコールドパスを絡め取って、本当に必要となる最適化を阻む複雑性を残してしまう。",
      "counter": {
        "name": "プロファイル優先 / Make It Work, Make It Right, Make It Fast (この順序で)"
      },
      "guideline": "まず素直なコードを書け。プロファイラがボトルネックと証明したホットパスのみを最適化せよ。残り 97% のクリティカルでないコードは単純なまま保て——次のメンテナーが住むのはそこである。",
      "source": "Donald E. Knuth, *Structured Programming with go to Statements* (Computing Surveys, 1974)。"
    }
  },
  {
    "slug": "linus-law",
    "number": 35,
    "tag": "maintainability",
    "sourceUrl": "https://web.archive.org/web/2024/http://www.catb.org/~esr/writings/cathedral-bazaar/cathedral-bazaar/",
    "seeAlso": [
      "cunninghams-law"
    ],
    "figure": {
      "kind": "person",
      "name": "Linus Torvalds",
      "monogram": "LT",
      "image": "/figures/linus-law.webp",
      "logo": null,
      "credit": {
        "author": "Krd (photo); Von Sprat (crop)",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File:LinuxCon_Europe_Linus_Torvalds_03_(cropped).jpg"
      }
    },
    "en": {
      "title": "Linus's Law",
      "concept": "A bug that stumps one person is often obvious to someone else looking at the same code.",
      "mechanism": "\"Given enough eyeballs, all bugs are shallow.\" A defect that looks impossible to one person often becomes trivial when many independent perspectives are applied to it — provided the code is actually visible to those perspectives.",
      "counter": {
        "name": "Open Source / Rotated Reviewers / Bug Bounties / Internal Code Discoverability"
      },
      "guideline": "If the same class of bug keeps slipping through, the fix is not more careful review by the same people — it is exposing the code to more, differently-shaped eyes. Rotate reviewers, open up internal libraries, run bug bounties.",
      "source": "Eric S. Raymond, *The Cathedral and the Bazaar* (1999) — named for Linus Torvalds."
    },
    "ja": {
      "title": "リーナスの法則",
      "concept": "一人では見つからないバグも、同じコードを見る別の人にはあっさり分かることが多い。",
      "mechanism": "「十分な目玉があれば、あらゆるバグは浅い。」一人の目には不可能に見える欠陥も、独立した多くの視点が当たれば自明になる——ただし、コードが実際にその視点に対して可視であることが前提。",
      "counter": {
        "name": "オープンソース / レビュアーのローテーション / バグバウンティ / 社内コードの発見可能性"
      },
      "guideline": "ある型のバグが何度もすり抜けるなら、解決策は「同じ人による、より慎重なレビュー」ではない。形の違う多くの目にコードを晒せ。レビュアーをローテーションし、内部ライブラリを公開し、バウンティを開け。",
      "source": "Eric S. Raymond, *The Cathedral and the Bazaar* (1999) — Linus Torvalds に因んで命名。"
    }
  },
  {
    "slug": "cap-theorem",
    "number": 36,
    "tag": "distributed-systems",
    "sourceUrl": "https://doi.org/10.1145/564585.564601",
    "seeAlso": [
      "two-generals-problem",
      "fallacies-of-distributed-computing"
    ],
    "figure": {
      "kind": "person",
      "name": "Eric Brewer",
      "monogram": "EB",
      "image": "/figures/cap-theorem.webp",
      "logo": null,
      "credit": {
        "author": "Vera de Kok",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File:TNW_Con_EU15_-_Eric_Brewer_(scientist)-2.jpg"
      }
    },
    "en": {
      "title": "CAP Theorem",
      "concept": "During a network partition, a data store must give up either consistency or availability.",
      "mechanism": "A networked data store cannot simultaneously guarantee **C**onsistency, **A**vailability, and **P**artition tolerance. Because network partitions are not optional in the real world, the live choice is really between consistency and availability *at the moment a partition happens*.",
      "counter": {
        "name": "PACELC / Tunable Consistency"
      },
      "guideline": "Decide *before* an outage whether each operation prefers consistency or availability. The partition will happen; the only question is what your system does when it does.",
      "source": "Eric Brewer, *Towards Robust Distributed Systems* (PODC keynote, 2000); proved by Seth Gilbert & Nancy Lynch (*SIGACT News*, 2002)."
    },
    "ja": {
      "title": "CAP定理",
      "concept": "ネットワーク分断が起きたら、データストアは一貫性か可用性のどちらかを捨てる。",
      "mechanism": "ネットワーク化されたデータストアは、**一貫性 (C)**・**可用性 (A)**・**分断耐性 (P)** を同時には保証できない。現実世界でネットワーク分断は不可避なので、実際に選べるのは*分断が起きたその瞬間*の「一貫性か可用性か」である。",
      "counter": {
        "name": "PACELC / 調整可能な一貫性"
      },
      "guideline": "障害が起きる*前*に、各操作が一貫性と可用性のどちらを優先するか決めておけ。分断は必ず起きる。問われるのは「起きた時にシステムが何をするか」だけだ。",
      "source": "Eric Brewer, *Towards Robust Distributed Systems* (PODC 基調講演, 2000); Seth Gilbert & Nancy Lynch が証明 (*SIGACT News*, 2002)。"
    }
  },
  {
    "slug": "littles-law",
    "number": 37,
    "tag": "performance",
    "sourceUrl": "https://doi.org/10.1287/opre.9.3.383",
    "seeAlso": [
      "tail-at-scale",
      "theory-of-constraints"
    ],
    "figure": {
      "kind": "scene",
      "name": "Checkout queue at a food store",
      "monogram": "LS",
      "image": "/figures/littles-law.webp",
      "logo": null,
      "credit": {
        "author": "David Shankbone",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:Waiting_in_line_at_a_food_store.JPG"
      }
    },
    "en": {
      "title": "Little's Law",
      "concept": "In a stable system, the average number of items inside equals arrival rate times average time spent.",
      "mechanism": "In any stable system, the average number of items in the system (L) equals the average arrival rate (λ) times the average time each item spends in it (W): **L = λW**. It holds regardless of arrival distribution or service discipline.",
      "counter": {
        "name": "Backpressure / Admission Control"
      },
      "guideline": "To cut latency (W) without adding capacity, cut work-in-progress (L). Cap concurrent requests — a shorter queue is faster than a faster server.",
      "source": "John D. C. Little, *A Proof for the Queuing Formula L = λW* (Operations Research, 1961)."
    },
    "ja": {
      "title": "リトルの法則",
      "concept": "安定した系では、系の中にある件数の平均は、到着率と平均滞在時間の積に等しい。",
      "mechanism": "安定したシステムでは、系内の平均項目数 (L) は平均到着率 (λ) と平均滞留時間 (W) の積に等しい: **L = λW**。到着分布やサービス規律に依らず成り立つ。",
      "counter": {
        "name": "バックプレッシャ / 流入制御"
      },
      "guideline": "容量 (capacity) を増やさずにレイテンシ (W) を下げたいなら、仕掛り (L) を減らせ。同時リクエスト数に上限を設けよ——短い行列は、速いサーバより速い。",
      "source": "John D. C. Little, *A Proof for the Queuing Formula L = λW* (Operations Research, 1961)。"
    }
  },
  {
    "slug": "two-generals-problem",
    "number": 38,
    "tag": "distributed-systems",
    "sourceUrl": "https://en.wikipedia.org/wiki/Two_Generals%27_Problem",
    "seeAlso": [
      "cap-theorem"
    ],
    "figure": {
      "kind": "person",
      "name": "Jim Gray",
      "monogram": "JG",
      "image": "/figures/two-generals-problem.webp",
      "logo": null,
      "credit": {
        "author": "Microsoft Research",
        "license": "CC BY-SA 3.0 US",
        "page": "https://commons.wikimedia.org/wiki/File:Jim_Gray_Computing_in_the_21st_Century_2006.jpg"
      }
    },
    "en": {
      "title": "Two Generals Problem",
      "concept": "Over an unreliable channel, two parties can never be certain they have agreed.",
      "mechanism": "Two parties communicating over an unreliable channel can never be *certain* they have reached agreement — every message needs an acknowledgment, which itself needs an acknowledgment, forever. No fixed number of messages yields common knowledge.",
      "counter": {
        "name": "Idempotency / Eventual Consistency / Acknowledged Retries"
      },
      "guideline": "Never assume \"I sent it, so they got it.\" Make every cross-network action safely retryable and idempotent, and reconcile state instead of trusting a single round-trip.",
      "source": "E. A. Akkoyunlu, K. Ekanadham & R. V. Huber (1975); framed as a database problem by Jim Gray, *Notes on Data Base Operating Systems* (1978)."
    },
    "ja": {
      "title": "二人の将軍問題",
      "concept": "信頼できない通信路では、二者は合意できたと確信することができない。",
      "mechanism": "不確実な通信路で通信する二者は、合意に達したと*確信*することが決してできない——あらゆるメッセージは確認応答を必要とし、その応答自体もまた応答を必要とし、永遠に終わらない。いかなる固定回数のやり取りも共有知識をもたらさない。",
      "counter": {
        "name": "べき等性 / 結果整合性 / 確認付き再送"
      },
      "guideline": "「送ったから届いた」と決して仮定するな。ネットワークを跨ぐ操作はすべて再送安全かつべき等に設計し、一往復を信じる代わりに状態を突き合わせて整合させよ。",
      "source": "E. A. Akkoyunlu, K. Ekanadham & R. V. Huber (1975); Jim Gray が *Notes on Data Base Operating Systems* (1978) でデータベースの問題として定式化。"
    }
  },
  {
    "slug": "peter-principle",
    "number": 39,
    "tag": "organization",
    "sourceUrl": "https://en.wikipedia.org/wiki/Peter_principle",
    "seeAlso": [
      "dunning-kruger-effect",
      "shirky-principle"
    ],
    "figure": {
      "kind": "person",
      "name": "Laurence J. Peter",
      "monogram": "LP",
      "image": "/figures/peter-principle.webp",
      "logo": null,
      "credit": {
        "author": "Larry Bessel",
        "license": "CC BY 4.0",
        "page": "https://commons.wikimedia.org/wiki/File:Laurence_J._Peter,_1975.jpg"
      }
    },
    "en": {
      "title": "Peter Principle",
      "concept": "People tend to get promoted until they reach a role they are bad at, and stay there.",
      "mechanism": "In a hierarchy, people are promoted on performance in their *current* role, not the one above. So everyone tends to rise until they reach a role they are bad at — and there they stay. Competence is promoted away; incompetence accumulates.",
      "counter": {
        "name": "Dual Career Ladders / Role-Specific Evaluation"
      },
      "guideline": "Do not promote your best engineer into management as a reward — it removes a great engineer and risks creating a poor manager. Offer a technical ladder, and evaluate candidates for the role above, not the one they already mastered.",
      "source": "Laurence J. Peter & Raymond Hull, *The Peter Principle* (1969)."
    },
    "ja": {
      "title": "ピーターの法則",
      "concept": "人は苦手な役職にたどり着くまで昇進し、そこにとどまりがちだ。",
      "mechanism": "階層組織では、人は*一つ上*の職務ではなく*現職*の成績で昇進する。だから誰もが、自分の不得手な職位に達するまで昇り続け、そこで留まる。有能は昇進によって失われ、無能が堆積していく。",
      "counter": {
        "name": "複線型キャリアパス / 職務別の評価"
      },
      "guideline": "最高のエンジニアを褒美にマネジメントへ昇進させるな——優れたエンジニアを一人失い、かつ貧弱なマネージャーを一人生むリスクがある。技術職の梯子を用意し、すでに習熟した職務ではなく「一つ上の職務」への適性で候補者を評価せよ。",
      "source": "Laurence J. Peter & Raymond Hull, *The Peter Principle* (1969)。"
    }
  },
  {
    "slug": "parkinsons-law",
    "number": 40,
    "tag": "organization",
    "sourceUrl": "https://www.economist.com/news/1955/11/19/parkinsons-law",
    "seeAlso": [
      "type-1-vs-type-2-decisions",
      "law-of-triviality",
      "hofstadters-law",
      "fixed-time-variable-scope"
    ],
    "figure": {
      "kind": "person",
      "name": "C. Northcote Parkinson",
      "monogram": "CP",
      "image": "/figures/parkinsons-law.webp",
      "logo": null,
      "credit": {
        "author": "Wim van Rossem for Anefo",
        "license": "CC BY-SA 3.0 NL",
        "page": "https://commons.wikimedia.org/wiki/File:Cyril_Northcote_Parkinson_1961.jpg"
      }
    },
    "en": {
      "title": "Parkinson's Law",
      "concept": "Work expands to fill the time available for it.",
      "mechanism": "\"Work expands so as to fill the time available for its completion.\" Give a task a week and it takes a week; the same task with a two-day deadline ships in two days. Slack is consumed, not banked.",
      "counter": {
        "name": "Timeboxing"
      },
      "guideline": "Set deliberately short timeboxes for open-ended work and review at the deadline. A tight box forces the scoping decisions an open one defers forever.",
      "source": "C. Northcote Parkinson, *Parkinson's Law* (The Economist, 19 November 1955); expanded into *Parkinson's Law and Other Studies in Administration* (Houghton Mifflin, 1957)."
    },
    "ja": {
      "title": "パーキンソンの法則",
      "concept": "仕事は、完了までに使える時間をすべて使い切るまで膨らむ。",
      "mechanism": "「仕事は、それを完了するために与えられた時間を満たすまで膨張する。」一週間与えれば一週間かかり、同じ作業も締切が二日なら二日で片付く。緩衝 (slack) は貯蓄されず、消費される。",
      "counter": {
        "name": "タイムボックス"
      },
      "guideline": "終わりの見えない作業には意図的に短いタイムボックスを切り、締切の時点で見直せ。きつい箱は、緩い箱が永遠に先送りしてしまうスコープ判断を強制する。",
      "source": "C. Northcote Parkinson『Parkinson's Law』(The Economist, 1955年11月19日)。『Parkinson's Law and Other Studies in Administration』(Houghton Mifflin, 1957) に発展した。"
    }
  },
  {
    "slug": "wirths-law",
    "number": 41,
    "tag": "performance",
    "sourceUrl": "https://doi.org/10.1109/2.348001",
    "seeAlso": [
      "jevons-paradox",
      "moores-law"
    ],
    "figure": {
      "kind": "person",
      "name": "Niklaus Wirth",
      "monogram": "NW",
      "image": "/figures/wirths-law.webp",
      "logo": null,
      "credit": {
        "author": "Tyomitch",
        "license": "Copyrighted free use",
        "page": "https://commons.wikimedia.org/wiki/File:Niklaus_Wirth,_UrGU.jpg"
      }
    },
    "en": {
      "title": "Wirth's Law",
      "concept": "Software gets slower faster than hardware gets faster.",
      "mechanism": "\"Software is getting slower more rapidly than hardware is becoming faster.\" Each hardware gain is absorbed by added abstraction layers, features, and carelessness, so user-perceived speed stays flat or worsens.",
      "counter": {
        "name": "Performance Budgets / Lean Software"
      },
      "guideline": "Treat the speed a faster machine buys you as a budget to protect, not a license to spend. Set a performance budget and fail the build when a release regresses against it.",
      "source": "Niklaus Wirth, *A Plea for Lean Software* (IEEE Computer, 1995)."
    },
    "ja": {
      "title": "ヴィルトの法則",
      "concept": "ソフトウェアが遅くなる速さは、ハードウェアが速くなる速さを上回る。",
      "mechanism": "「ソフトウェアはハードウェアが速くなるよりも速く遅くなっている。」ハードの利得はそのたびに、追加された抽象層・機能・不注意によって吸収され、ユーザーが体感する速度は横ばいか悪化する。",
      "counter": {
        "name": "パフォーマンスバジェット / リーンなソフトウェア"
      },
      "guideline": "速いマシンが買ってくれた速度を、「使ってよい許可」ではなく「守るべき予算」とみなせ。性能予算を設け、リリースがそれを割り込んだらビルドを失敗させよ。",
      "source": "Niklaus Wirth, *A Plea for Lean Software* (IEEE Computer, 1995)。"
    }
  },
  {
    "slug": "ninety-ninety-rule",
    "number": 42,
    "tag": "estimation",
    "sourceUrl": "https://en.wikipedia.org/wiki/Ninety%E2%80%93ninety_rule",
    "seeAlso": [
      "hofstadters-law",
      "strangler-fig"
    ],
    "figure": {
      "kind": "scene",
      "name": "Bell Laboratories, Murray Hill / New Providence, NJ",
      "monogram": "NR",
      "image": "/figures/ninety-ninety-rule.webp",
      "logo": null,
      "credit": {
        "author": "Ken Lund",
        "license": "CC BY-SA 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Bell_Laboratories_at_New_Providence,_New_Jersey_(7235324892)_(cropped).jpg"
      }
    },
    "en": {
      "title": "Ninety-Ninety Rule",
      "concept": "The last 10% of the work tends to take as long as the first 90% did.",
      "mechanism": "\"The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.\" The visible work hides a second, equally large body of integration, edge cases, and polish.",
      "counter": {
        "name": "Demo on Real Data / Hard Definition of Done"
      },
      "guideline": "When something looks \"almost done,\" assume an entire second project remains: the last-10% of hardening, edge cases, and integration. Schedule it explicitly instead of treating it as a rounding error.",
      "source": "Tom Cargill (Bell Labs); popularized by Jon Bentley, *Programming Pearls* (CACM, 1985)."
    },
    "ja": {
      "title": "90対90の法則",
      "concept": "残り1割の作業に、最初の9割と同じくらいの時間がかかりがちだ。",
      "mechanism": "「最初の90%のコードが、開発時間の最初の90%を占める。残り10%のコードが、もう90%を占める。」目に見える作業は、同じ大きさの統合・エッジケース・仕上げという第二の塊を隠している。",
      "counter": {
        "name": "本番相当データでのデモ / 厳格な完了の定義"
      },
      "guideline": "「ほぼ完成」に見えたら、もう一つ丸ごとプロジェクトが残ると思え——最後の10%、すなわち堅牢化・エッジケース・統合。端数として無視せず、明示的にスケジュールに積め。",
      "source": "Tom Cargill (Bell Labs); Jon Bentley が *Programming Pearls* (CACM, 1985) で広めた。"
    }
  },
  {
    "slug": "eaglesons-law",
    "number": 43,
    "tag": "maintainability",
    "sourceUrl": "https://wiki.c2.com/?EaglesonsLaw",
    "seeAlso": [
      "chestertons-fence",
      "kernighans-law"
    ],
    "figure": {
      "kind": "scene",
      "name": "Punched-card program deck (c.1969)",
      "monogram": "ES",
      "image": "/figures/eaglesons-law.webp",
      "logo": null,
      "credit": {
        "author": "Arnold Reinhold",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:Punched_card_program_deck.agr.jpg"
      }
    },
    "en": {
      "title": "Eagleson's Law",
      "concept": "Your own code that you haven't read in six months might as well be someone else's.",
      "mechanism": "\"Any code of your own that you haven't looked at for six months might as well have been written by someone else.\" Your mental model of the code evaporates far faster than the code does; context is not stored in the source.",
      "counter": {
        "name": "ADRs / Self-Explaining Code / Code Comments on the \"Why\""
      },
      "guideline": "Write code and commit messages for the stranger you will become in six months. If a decision is not obvious from the code, record the *why* in a comment or an ADR — not just in your head.",
      "source": "Programming folklore attributed to Peter Eagleson; a long-circulated adage among the catalogued \"laws of software development.\""
    },
    "ja": {
      "title": "イーグルソンの法則",
      "concept": "半年見ていない自分のコードは、他人が書いたコードも同然だ。",
      "mechanism": "「半年見ていない自分のコードは、他人が書いたも同然である。」コードそのものより遥かに速く、頭の中のメンタルモデルは蒸発する。文脈はソースには保存されない。",
      "counter": {
        "name": "ADR / 自己説明的なコード / 「なぜ」を記すコメント"
      },
      "guideline": "半年後に他人と化す自分のために、コードとコミットメッセージを書け。コードから自明でない判断は、その「なぜ」をコメントか ADR に残せ——頭の中だけに留めるな。",
      "source": "Peter Eagleson に帰される、プログラミングの口伝。カタログ化された「ソフトウェア開発の法則」群の一つとして長く流布。"
    }
  },
  {
    "slug": "hicks-law",
    "number": 44,
    "tag": "interaction",
    "sourceUrl": "https://doi.org/10.1080/17470215208416600",
    "seeAlso": [
      "millers-law",
      "fitts-law"
    ],
    "figure": {
      "kind": "person",
      "name": "Ray Hyman",
      "monogram": "RH",
      "image": "/figures/hicks-law.webp",
      "logo": null,
      "credit": {
        "author": "Rouven Schäfer",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:Rayhyman.jpg"
      }
    },
    "en": {
      "title": "Hick's Law",
      "concept": "The more options people are given, the longer they take to choose one.",
      "mechanism": "The time to make a decision grows logarithmically with the number of choices: **T = b·log₂(n+1)**. More options do not just add visual clutter — they measurably slow every user down.",
      "counter": {
        "name": "Progressive Disclosure / Sensible Defaults"
      },
      "guideline": "Cut the number of choices on any screen or API surface to the few that matter; push the rest behind defaults and progressive disclosure. Fewer doors, faster decisions.",
      "source": "William E. Hick (1952) and Ray Hyman (1953) — the \"Hick–Hyman Law.\""
    },
    "ja": {
      "title": "ヒックの法則",
      "concept": "選択肢が増えるほど、人は一つを選ぶのに時間がかかる。",
      "mechanism": "決定にかかる時間は選択肢の数の対数で増える: **T = b·log₂(n+1)**。選択肢の増加は見た目を散らかすだけでなく、すべてのユーザーを計測可能なほど遅くする。",
      "counter": {
        "name": "段階的開示 / 妥当な既定値"
      },
      "guideline": "画面や API 表面の選択肢を、効くものだけに絞れ。残りは既定値と段階的開示の裏へ押しやれ。ドアが少ないほど、決定は速い。",
      "source": "William E. Hick (1952) と Ray Hyman (1953) — 「ヒック・ハイマンの法則」。"
    }
  },
  {
    "slug": "fitts-law",
    "number": 45,
    "tag": "interaction",
    "sourceUrl": "https://doi.org/10.1037/h0055392",
    "seeAlso": [
      "hicks-law"
    ],
    "figure": {
      "kind": "person",
      "name": "Paul M. Fitts",
      "monogram": "PF",
      "image": "/figures/fitts-law.webp",
      "logo": null,
      "credit": {
        "author": "University of Michigan News and Information Services (© Regents of the University of Michigan), via Bentley Historical Library",
        "license": "CC BY 4.0",
        "page": "https://quod.lib.umich.edu/b/bhl/x-hs15404/hs15404"
      }
    },
    "en": {
      "title": "Fitts's Law",
      "concept": "Small, distant targets take longer to hit and get missed more often.",
      "mechanism": "The time to move to a target depends on its distance and size: distant, small targets are slow and error-prone; near, large targets are fast. Pointing is a physical act with a measurable cost.",
      "counter": {
        "name": "Edges & Corners / Sizing by Frequency"
      },
      "guideline": "Make frequent or destructive actions big and easy to hit; make rare or dangerous ones small and far. Screen edges and corners are effectively infinite targets — put primary actions there.",
      "source": "Paul M. Fitts, *The Information Capacity of the Human Motor System in Controlling the Amplitude of Movement* (Journal of Experimental Psychology, 1954)."
    },
    "ja": {
      "title": "フィッツの法則",
      "concept": "小さく遠いターゲットほど、押すのに時間がかかり、押し間違えも増える。",
      "mechanism": "標的へ移動する時間は、その距離と大きさで決まる。遠く小さい標的は遅く誤りやすく、近く大きい標的は速い。ポインティングは計測可能なコストを持つ物理的行為である。",
      "counter": {
        "name": "端と角の活用 / 頻度に応じたサイズ設計"
      },
      "guideline": "頻用する操作や破壊的な操作は大きく当てやすく、稀な操作や危険な操作は小さく遠くに。画面の端と角は実質無限大の的である——主要な操作はそこに置け。",
      "source": "Paul M. Fitts, *The Information Capacity of the Human Motor System in Controlling the Amplitude of Movement* (Journal of Experimental Psychology, 1954)。"
    }
  },
  {
    "slug": "millers-law",
    "number": 46,
    "tag": "cognition",
    "sourceUrl": "https://doi.org/10.1037/h0043158",
    "seeAlso": [
      "dunbars-number",
      "hicks-law"
    ],
    "figure": {
      "kind": "scene",
      "name": "Rotary telephone dial (seven-digit phone numbers)",
      "monogram": "MS",
      "image": "/figures/millers-law.webp",
      "logo": null,
      "credit": {
        "author": "RHaworth (en.wikipedia)",
        "license": "Public domain",
        "page": "https://commons.wikimedia.org/wiki/File:04c093_rotary_dial_abc.jpg"
      }
    },
    "en": {
      "title": "Miller's Law",
      "concept": "Working memory holds only a handful of chunks (Miller said about seven; later estimates are lower).",
      "mechanism": "\"The Magical Number Seven, Plus or Minus Two\" — human working memory holds only about seven chunks at once. Cross that limit and recall collapses; the brain drops items rather than slowing down.",
      "counter": {
        "name": "Chunking / Information Hiding"
      },
      "guideline": "Group related items into a handful of named chunks — phone-number style — wherever a person must hold state in their head: function arguments, form fields, menu groups, on-call steps.",
      "source": "George A. Miller, *The Magical Number Seven, Plus or Minus Two* (Psychological Review, 1956)."
    },
    "ja": {
      "title": "ミラーの法則",
      "concept": "作業記憶に保てるのは数個のまとまりだけだ（Miller は7前後とし、後の研究はもっと少ないとする）。",
      "mechanism": "「マジカルナンバー 7 ± 2」——人間の作業記憶が一度に保持できるのは約7チャンクのみ。その限界を超えると想起は崩壊する。脳は速度を落とすのではなく、項目を捨てる。",
      "counter": {
        "name": "チャンク化 / 情報隠蔽"
      },
      "guideline": "人が頭の中で状態を保持しなければならない場所——関数の引数・フォーム項目・メニュー群・オンコール手順——では、関連する項目を電話番号のように少数の名前付きチャンクへまとめよ。",
      "source": "George A. Miller, *The Magical Number Seven, Plus or Minus Two* (Psychological Review, 1956)。"
    }
  },
  {
    "slug": "fallacies-of-distributed-computing",
    "number": 47,
    "tag": "distributed-systems",
    "sourceUrl": "https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing",
    "seeAlso": [
      "postels-law",
      "murphys-law",
      "cap-theorem",
      "static-stability",
      "chaos-engineering"
    ],
    "figure": {
      "kind": "person",
      "name": "James Gosling",
      "monogram": "JG",
      "image": "/figures/fallacies-of-distributed-computing.webp",
      "logo": null,
      "credit": {
        "author": "Peter Campbell",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File:James_Gosling_2008.jpg"
      }
    },
    "en": {
      "title": "Fallacies of Distributed Computing",
      "concept": "Networked code quietly assumes eight things about the network that are false in production.",
      "mechanism": "Newcomers to distributed systems silently assume the network is reliable, latency is zero, bandwidth is infinite, the network is secure, topology is stable, there is one administrator, transport cost is zero, and the network is homogeneous. Every one of these eight assumptions fails in production.",
      "counter": {
        "name": "Design for Failure",
        "note": "without gold-plating against impossible modes"
      },
      "guideline": "Before shipping any cross-process call, name which of the eight assumptions you are relying on and add an explicit timeout, retry, and failure path for each.",
      "source": "L. Peter Deutsch (fallacies 5–7, 1994) and James Gosling (the 8th, ~1997), building on earlier work at Sun Microsystems."
    },
    "ja": {
      "title": "分散コンピューティングの誤謬",
      "concept": "ネットワーク越しのコードは、本番では成り立たない8つの前提を暗に置いている。",
      "mechanism": "分散システムに不慣れな者は、ネットワークは信頼でき、遅延はゼロ、帯域は無限、通信は安全、構成は不変、管理者は一人、転送コストはゼロ、ネットワークは均質だと暗黙に仮定する。この8つの仮定はすべて本番で崩れる。",
      "counter": {
        "name": "失敗前提の設計",
        "note": "起こり得ない故障への過剰武装は避けつつ"
      },
      "guideline": "プロセス間呼び出しを出す前に、8つの仮定のどれに依存しているかを明示し、各々に明示的なタイムアウト・リトライ・失敗経路を与えよ。",
      "source": "L. Peter Deutsch（誤謬 5〜7、1994年）と James Gosling（8つ目、1997年頃）——Sun Microsystems での先行研究に基づく。"
    }
  },
  {
    "slug": "ironies-of-automation",
    "number": 48,
    "tag": "safety",
    "sourceUrl": "https://doi.org/10.1016/0005-1098(83)90046-8",
    "seeAlso": [
      "normal-accident-theory",
      "toil",
      "avoid-fallback"
    ],
    "figure": {
      "kind": "scene",
      "name": "Nuclear power plant control room",
      "monogram": "IA",
      "image": "/figures/ironies-of-automation.webp",
      "logo": null,
      "credit": {
        "author": "Nuclear Regulatory Commission from US",
        "license": "CC BY 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Nuclear_power_plant_control_room_(15856397259).jpg"
      }
    },
    "en": {
      "title": "Ironies of Automation",
      "concept": "Automation leaves people only the hardest cases, after their skills have faded from disuse.",
      "mechanism": "Automating the routine parts of a task leaves the human only the rarest, hardest exceptions — while their manual skill and situational awareness atrophy from disuse, precisely at the moment a failing automated system hands control back to them.",
      "counter": {
        "name": "Human-in-the-Loop Drills",
        "note": "better teaming, not less automation"
      },
      "guideline": "Keep operators sharp with regular game-days and hands-on drills, and design handoffs so a human takes over with context, not cold.",
      "source": "Lisanne Bainbridge, *Ironies of Automation* (Automatica, 1983)."
    },
    "ja": {
      "title": "自動化の皮肉",
      "concept": "自動化は人に最も難しい例外だけを残し、その対応に要る腕は使わないうちに鈍る。",
      "mechanism": "作業の定型部分を自動化すると、人間には最も稀で難しい例外だけが残る——しかも使わぬ間に手作業の技能と状況認識は衰える。破綻した自動システムが制御を人へ返すのは、まさにその瞬間である。",
      "counter": {
        "name": "人間参加型の訓練",
        "note": "自動化を減らすのではなく、協働を良くする"
      },
      "guideline": "定期的なゲームデーと実地訓練で運用者の勘を保て。引き継ぎは、文脈なく冷えた状態でなく、状況を保持したまま人が引き取れるよう設計せよ。",
      "source": "Lisanne Bainbridge, *Ironies of Automation* (Automatica, 1983)。"
    }
  },
  {
    "slug": "principle-of-least-privilege",
    "number": 49,
    "tag": "security",
    "sourceUrl": "https://web.mit.edu/Saltzer/www/publications/protection/",
    "seeAlso": [
      "kerckhoffs-principle"
    ],
    "figure": {
      "kind": "scene",
      "name": "Keys",
      "monogram": "PL",
      "image": "/figures/principle-of-least-privilege.webp",
      "logo": null,
      "credit": {
        "author": "Cindy Shebley",
        "license": "CC BY 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Four_Skeleton_Keys_on_a_blue_background_(51865175725).jpg"
      }
    },
    "en": {
      "title": "Principle of Least Privilege",
      "concept": "Every permission a component doesn't need widens the damage when something goes wrong.",
      "mechanism": "Every component granted more authority than it strictly needs enlarges the blast radius of any bug, compromise, or accident, and multiplies the interactions an auditor must reason about.",
      "counter": {
        "name": "Psychological Acceptability",
        "note": "over-restriction that users route around defeats itself"
      },
      "guideline": "Default every process, service account, and token to deny, then add only the minimal scopes the job provably needs; re-audit the grants whenever the job changes.",
      "source": "Jerome Saltzer & Michael Schroeder, *The Protection of Information in Computer Systems* (Proceedings of the IEEE, 1975)."
    },
    "ja": {
      "title": "最小権限の原則",
      "concept": "不要な権限を持つ部品ほど、問題が起きたときの被害範囲が広がる。",
      "mechanism": "厳密に必要な以上の権限を与えられた要素は、あらゆるバグ・侵害・事故の被害範囲を広げ、監査者が考慮すべき相互作用を増やす。",
      "counter": {
        "name": "心理的受容性",
        "note": "利用者が回避してしまうほどの過剰な制限は、自らを敗北させる"
      },
      "guideline": "すべてのプロセス・サービスアカウント・トークンを既定で拒否とし、職務が証明できる最小限の権限だけを加えよ。職務が変わるたびに権限を再監査せよ。",
      "source": "Jerome Saltzer & Michael Schroeder, *The Protection of Information in Computer Systems* (Proceedings of the IEEE, 1975)。"
    }
  },
  {
    "slug": "kerckhoffs-principle",
    "number": 50,
    "tag": "security",
    "sourceUrl": "https://en.wikipedia.org/wiki/Kerckhoffs%27s_principle",
    "seeAlso": [
      "principle-of-least-privilege"
    ],
    "figure": {
      "kind": "person",
      "name": "Auguste Kerckhoffs",
      "monogram": "AK",
      "image": "/figures/kerckhoffs-principle.webp",
      "logo": null,
      "credit": {
        "author": "Unknown author",
        "license": "Public domain",
        "page": "https://commons.wikimedia.org/wiki/File:Auguste_Kerckhoffs.jpg"
      }
    },
    "en": {
      "title": "Kerckhoffs's Principle",
      "concept": "A system that is secure only while its design stays secret is not secure.",
      "mechanism": "A cryptosystem should remain secure even if everything about it except the key is public. Secrecy of the algorithm is brittle: mechanisms leak, get reverse-engineered, and get reused across systems.",
      "counter": {
        "name": "Defense in Depth",
        "note": "obscurity may be one thin extra layer, never the foundation"
      },
      "guideline": "Assume the attacker has your source and design. Put all of the secret in rotatable keys, and never rely on a hidden algorithm to protect anything.",
      "source": "Auguste Kerckhoffs, *La cryptographie militaire* (Journal des sciences militaires, 1883)."
    },
    "ja": {
      "title": "ケルクホフスの原理",
      "concept": "設計が秘密である間だけ安全なシステムは、安全ではない。",
      "mechanism": "暗号方式は、鍵以外のすべてが公開されても安全であるべきだ。アルゴリズムの秘匿は脆い——仕組みは漏れ、解析され、他システムで使い回される。",
      "counter": {
        "name": "多層防御",
        "note": "秘匿は薄い一層としてなら許されるが、決して土台にはならない"
      },
      "guideline": "攻撃者は自分のソースと設計をすべて握っていると仮定せよ。秘密はすべて交換可能な鍵に置き、隠したアルゴリズムに防御を頼るな。",
      "source": "Auguste Kerckhoffs, *La cryptographie militaire* (Journal des sciences militaires, 1883)。"
    }
  },
  {
    "slug": "gustafsons-law",
    "number": 51,
    "tag": "performance",
    "sourceUrl": "https://doi.org/10.1145/42411.42415",
    "seeAlso": [
      "amdahls-law",
      "moores-law"
    ],
    "figure": {
      "kind": "person",
      "name": "John Gustafson",
      "monogram": "JG",
      "image": "/figures/gustafsons-law.webp",
      "logo": null,
      "credit": {
        "author": "Davisourus at English Wikipedia",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:John_L_Gustafson_CEO.jpg"
      }
    },
    "en": {
      "title": "Gustafson's Law",
      "concept": "When the problem grows with the machine, parallel speedup keeps growing nearly linearly.",
      "mechanism": "For a fixed time budget, a larger machine lets you solve a proportionally larger problem, so the serial fraction shrinks with scale and speedup grows near-linearly — the optimistic counterpart to Amdahl's fixed-workload pessimism.",
      "counter": {
        "name": "Amdahl's Law",
        "note": "for a fixed-size workload, the serial fraction still hard-caps speedup"
      },
      "guideline": "Before justifying more cores, ask whether the problem size grows with the hardware. If the workload is fixed, reason with Amdahl; if it scales, Gustafson applies.",
      "source": "John L. Gustafson, *Reevaluating Amdahl's Law* (Communications of the ACM, 1988)."
    },
    "ja": {
      "title": "グスタフソンの法則",
      "concept": "問題の規模が計算機とともに大きくなるなら、並列化の効果はほぼ比例して伸びる。",
      "mechanism": "時間の予算を固定すれば、大きな計算機はそれに比例して大きな問題を解ける。ゆえに規模とともに逐次部分の割合は縮み、速度向上はほぼ線形に伸びる——固定作業量を前提とするアムダールの悲観に対する、楽観的な対の視点である。",
      "counter": {
        "name": "アムダールの法則",
        "note": "固定サイズの作業量では、逐次部分が依然として速度向上を頭打ちにする"
      },
      "guideline": "コア増設を正当化する前に、問題規模がハードウェアとともに大きくなるかを問え。作業量が固定ならアムダールで考え、規模とともに増えるならグスタフソンが効く。",
      "source": "John L. Gustafson, *Reevaluating Amdahl's Law* (Communications of the ACM, 1988)。"
    }
  },
  {
    "slug": "tail-at-scale",
    "number": 52,
    "tag": "distributed-systems",
    "sourceUrl": "https://doi.org/10.1145/2408776.2408794",
    "seeAlso": [
      "littles-law",
      "error-budget"
    ],
    "figure": {
      "kind": "person",
      "name": "Jeffrey Dean",
      "monogram": "JD",
      "image": "/figures/tail-at-scale.webp",
      "logo": null,
      "credit": {
        "author": "Cmichel67",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File:Jeff_Dean_in_2025_x.jpg"
      }
    },
    "en": {
      "title": "The Tail at Scale",
      "concept": "When one request fans out to many servers, the slowest one sets the response time.",
      "mechanism": "In a service that fans out to many components, rare per-node slowness (GC pauses, contention, a failing disk) is near-certain to hit some node on every request. So tail latency (p99, p99.9) governs the user experience even when medians look healthy.",
      "counter": {
        "name": "Redundancy Has a Price",
        "note": "hedged and tied requests add load; don't chase the tail where the median is what users feel"
      },
      "guideline": "Set SLOs on p99/p99.9, not the mean, and deploy tail-tolerance — hedged requests, micro-partitioning — instead of trying to make every node uniformly fast.",
      "source": "Jeffrey Dean & Luiz André Barroso, *The Tail at Scale* (Communications of the ACM, 2013)."
    },
    "ja": {
      "title": "スケールの裾野",
      "concept": "一つのリクエストが多数のサーバに分かれると、最も遅いサーバが応答時間を決める。",
      "mechanism": "多数の要素へ扇状に処理を広げるサービスでは、ノード単位の稀な遅延（GC 停止・競合・不良ディスク）がほぼ毎リクエストどこかのノードで発生する。ゆえに中央値が健全に見えても、裾野のレイテンシ（p99・p99.9）が体感を支配する。",
      "counter": {
        "name": "冗長化には代償がある",
        "note": "ヘッジドリクエストや連動リクエストは負荷を増やす。中央値が体感を決める場面で裾野を追うな"
      },
      "guideline": "平均ではなく p99／p99.9 で SLO を引け。すべてのノードを均一に速くしようとするより、ヘッジドリクエストやマイクロ分割といった裾野耐性の技法を導入せよ。",
      "source": "Jeffrey Dean & Luiz André Barroso, *The Tail at Scale* (Communications of the ACM, 2013)。"
    }
  },
  {
    "slug": "ashbys-law",
    "number": 53,
    "tag": "systems",
    "sourceUrl": "https://en.wikipedia.org/wiki/Variety_(cybernetics)",
    "seeAlso": [
      "teslers-law",
      "normal-accident-theory",
      "kiss-principle"
    ],
    "figure": {
      "kind": "person",
      "name": "W. Ross Ashby",
      "monogram": "WA",
      "image": "/figures/ashbys-law.webp",
      "logo": null,
      "credit": {
        "author": "Unknown author",
        "license": "Public domain",
        "page": "https://commons.wikimedia.org/wiki/File:W._Ross_Ashby_(1948).jpg"
      }
    },
    "en": {
      "title": "Ashby's Law of Requisite Variety",
      "concept": "A controller can only handle a system if it can respond to as many states as the system has.",
      "mechanism": "A controller can regulate a system only if it can match the variety of states that system can produce. Under-powered control simply cannot cope with a sufficiently rich environment.",
      "counter": {
        "name": "Constrain the Environment",
        "note": "excess control variety is itself cost and complexity"
      },
      "guideline": "When incidents keep escaping your alerts and runbooks, either add matching response capability or deliberately shrink the system's state space: fewer configurations, stricter inputs.",
      "source": "W. Ross Ashby, *An Introduction to Cybernetics* (Chapman & Hall, 1956)."
    },
    "ja": {
      "title": "アシュビーの必要多様性の法則",
      "concept": "制御側は、対象がとりうる状態と同じだけの対応を持たないと制御できない。",
      "mechanism": "制御装置が系を調整できるのは、その系が生み出しうる状態の多様性に匹敵できる場合のみである。力不足の制御は、十分に豊かな環境にはそもそも対処できない。",
      "counter": {
        "name": "環境そのものを制約する",
        "note": "制御側の過剰な多様性は、それ自体がコストと複雑さである"
      },
      "guideline": "障害がアラートや手順書を繰り返しすり抜けるなら、対応能力を多様性に見合うまで増やすか、設定を減らし入力を厳しくして系の状態空間を意図的に縮めよ。",
      "source": "W. Ross Ashby, *An Introduction to Cybernetics* (Chapman & Hall, 1956)。"
    }
  },
  {
    "slug": "law-of-demeter",
    "number": 54,
    "tag": "maintainability",
    "sourceUrl": "https://doi.org/10.1109/52.35588",
    "seeAlso": [
      "leaky-abstractions",
      "dry-principle",
      "single-responsibility-principle"
    ],
    "figure": {
      "kind": "scene",
      "name": "Head of the goddess Demeter (Dion, 4th c. BC)",
      "monogram": "LD",
      "image": "/figures/law-of-demeter.webp",
      "logo": null,
      "credit": {
        "author": "Ophelia2 (Wikimedia Commons user); sculptor anonymous",
        "license": "Public domain",
        "page": "https://commons.wikimedia.org/wiki/File:Head_of_the_Goddess_Demeter.JPG"
      }
    },
    "en": {
      "title": "Law of Demeter",
      "concept": "Code that reaches through other objects' internals breaks when anything in the chain changes.",
      "mechanism": "An object that reaches through other objects' internals (`a.getB().getC().doThing()`) couples itself to the entire dependency chain, so a change anywhere along that chain ripples back and breaks it.",
      "counter": {
        "name": "Pragmatism over Dogma",
        "note": "strict application breeds forwarding and wrapper bloat"
      },
      "guideline": "Only call methods on your direct collaborators, your arguments, objects you create, and your own fields. If you are chaining getters, add a method to the object that owns the data.",
      "source": "Karl Lieberherr & Ian Holland, *Assuring Good Style for Object-Oriented Programs* (IEEE Software, 1989)."
    },
    "ja": {
      "title": "デメテルの法則",
      "concept": "他のオブジェクトの内部をたどるコードは、その連鎖のどこが変わっても壊れる。",
      "mechanism": "他オブジェクトの内部を辿って呼び出すコード（`a.getB().getC().doThing()`）は、依存の連鎖全体に自らを結びつける。ゆえにその連鎖のどこかの変更が波及して壊れる。",
      "counter": {
        "name": "教条より実用",
        "note": "厳格な適用は転送メソッドとラッパーの肥大を招く"
      },
      "guideline": "呼んでよいのは、直接の協力者・引数・自分が生成したもの・自分のフィールドのメソッドだけ。getter を数珠つなぎにしているなら、データを持つオブジェクト側にメソッドを足せ。",
      "source": "Karl Lieberherr & Ian Holland, *Assuring Good Style for Object-Oriented Programs* (IEEE Software, 1989)。"
    }
  },
  {
    "slug": "jevons-paradox",
    "number": 55,
    "tag": "incentives",
    "sourceUrl": "https://en.wikipedia.org/wiki/Jevons_paradox",
    "seeAlso": [
      "cobra-effect",
      "wirths-law"
    ],
    "figure": {
      "kind": "person",
      "name": "William Stanley Jevons",
      "monogram": "WJ",
      "image": "/figures/jevons-paradox.webp",
      "logo": null,
      "credit": {
        "author": "Unknown (via University of Manchester Libraries)",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File:William_Stanley_Jevons_portrait_extract.jpg"
      }
    },
    "en": {
      "title": "Jevons Paradox",
      "concept": "Making a resource cheaper to use can increase how much of it is used in total.",
      "mechanism": "Making a resource cheaper to use per unit lowers its effective price and can raise total consumption instead of lowering it — the efficiency gain is spent on more usage rather than banked as savings.",
      "counter": {
        "name": "Cap the Rebound",
        "note": "pair efficiency with a quota, cap, or price signal to actually capture the savings"
      },
      "guideline": "When you make something cheaper — compute, storage, an internal API — expect demand to balloon; provision and budget for the rebound instead of assuming a net reduction.",
      "source": "William Stanley Jevons, *The Coal Question* (1865)."
    },
    "ja": {
      "title": "ジェヴォンズのパラドックス",
      "concept": "資源を安く使えるようにすると、かえって総使用量が増えることがある。",
      "mechanism": "資源の単位あたり利用を安くすると実効価格が下がり、総消費はむしろ増えうる——効率化で浮いた分は、節約として貯まらず、さらなる利用に費やされる。",
      "counter": {
        "name": "反動に上限を設ける",
        "note": "効率化には割当・上限・価格シグナルを組み合わせ、節約を実際に回収せよ"
      },
      "guideline": "計算資源・ストレージ・社内 API など何かを安くしたら、需要が膨らむと見込め。純減を前提にせず、反動を織り込んで容量と予算を確保せよ。",
      "source": "William Stanley Jevons, *The Coal Question* (1865)。"
    }
  },
  {
    "slug": "normal-accident-theory",
    "number": 56,
    "tag": "safety",
    "sourceUrl": "https://en.wikipedia.org/wiki/Normal_Accidents",
    "seeAlso": [
      "normalization-of-deviance",
      "swiss-cheese-model",
      "ironies-of-automation",
      "ashbys-law",
      "five-whys"
    ],
    "figure": {
      "kind": "scene",
      "name": "Three Mile Island Nuclear Generating Station",
      "monogram": "NA",
      "image": "/figures/normal-accident-theory.webp",
      "logo": null,
      "credit": {
        "author": "United States Department of Energy",
        "license": "Public domain (US government work)",
        "page": "https://commons.wikimedia.org/wiki/File:Three_Mile_Island_(color)-2.jpg"
      }
    },
    "en": {
      "title": "Normal Accident Theory",
      "concept": "In complex, tightly coupled systems, accidents are built into the structure.",
      "mechanism": "In systems that are both interactively complex and tightly coupled, small independent failures interact in ways no designer anticipated and propagate faster than operators can intervene — so accidents become a property of the structure, not bad luck.",
      "counter": {
        "name": "High-Reliability Organizations",
        "note": "culture, slack, and decoupling measurably beat fatalism"
      },
      "guideline": "Reduce coupling — add buffers, timeouts, bulkheads, and circuit breakers — and cut complexity before adding more safety interlocks, which themselves add interactions.",
      "source": "Charles Perrow, *Normal Accidents: Living with High-Risk Technologies* (Basic Books, 1984)."
    },
    "ja": {
      "title": "通常事故理論",
      "concept": "複雑で密に結合したシステムでは、事故は構造そのものから生じる。",
      "mechanism": "相互作用的に複雑で、かつ密結合な系では、独立した小さな故障が設計者の予見しない形で相互作用し、運用者が介入するより速く伝播する——ゆえに事故は不運ではなく、構造の性質となる。",
      "counter": {
        "name": "高信頼性組織（HRO）",
        "note": "文化・余裕・疎結合は、宿命論に測定可能な形で勝る"
      },
      "guideline": "バッファ・タイムアウト・隔壁・サーキットブレーカで結合を緩め、複雑さを削れ。安全連動装置を足すのはその後だ——連動装置自体もまた相互作用を増やす。",
      "source": "Charles Perrow, *Normal Accidents: Living with High-Risk Technologies* (Basic Books, 1984)。"
    }
  },
  {
    "slug": "broken-windows-theory",
    "number": 57,
    "tag": "safety",
    "sourceUrl": "https://www.theatlantic.com/magazine/archive/1982/03/broken-windows/304465/",
    "seeAlso": [
      "normalization-of-deviance",
      "boy-scout-rule",
      "code-health-standard"
    ],
    "figure": {
      "kind": "scene",
      "name": "Broken window",
      "monogram": "BW",
      "image": "/figures/broken-windows-theory.webp",
      "logo": null,
      "credit": {
        "author": "Tomas Castelazo",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:Broken_window_large.jpg"
      }
    },
    "en": {
      "title": "Broken Windows Theory",
      "concept": "Visible disorder left unrepaired can signal that standards are optional, inviting more.",
      "mechanism": "An unrepaired broken window signals that nobody is watching, which lowers the cost of the next violation. In a codebase, one tolerated hack, one skipped test and one permanently silenced alert together announce that the standard is optional.",
      "counter": {
        "name": "Repair Is Not Free",
        "note": "attention spent on paint is attention not spent on the foundation, and the criminological evidence for the original claim is contested"
      },
      "guideline": "Repair the first visible defect in a file you are already touching, and give every tolerated exception an owner and a date. Do not open a refactor for a window you are not standing next to.",
      "source": "James Q. Wilson & George L. Kelling, *Broken Windows* (The Atlantic, March 1982)."
    },
    "ja": {
      "title": "割れ窓理論",
      "concept": "放置された小さな乱れは、基準は守らなくてよいという合図になり、さらに乱れを呼びやすい。",
      "mechanism": "割れたまま放置された窓は「誰も見ていない」という信号になり、次の違反のコストを下げる。コードベースでも、見逃された一つのハック、飛ばされた一つのテスト、恒久的に黙らされた一つのアラートが揃って「この基準は守らなくてよい」と宣言する。",
      "counter": {
        "name": "修繕もタダではない",
        "note": "塗装に注ぐ注意は土台に注がれない注意であり、そもそも元の犯罪学的主張の実証には強い異論がある"
      },
      "guideline": "いま触っているファイルにある、最初の目に見える欠陥を直せ。黙認する例外にはすべて担当者と期限を付けよ。自分がいま立っていない場所の窓を直すためにリファクタを起こすな。",
      "source": "James Q. Wilson & George L. Kelling『Broken Windows』(The Atlantic, 1982年3月号)。"
    }
  },
  {
    "slug": "yagni",
    "number": 58,
    "tag": "maintainability",
    "sourceUrl": "https://ronjeffries.com/xprog/articles/practices/pracnotneed/",
    "seeAlso": [
      "chestertons-fence",
      "galls-law",
      "working-backwards"
    ],
    "figure": {
      "kind": "person",
      "name": "Ron Jeffries",
      "monogram": "RJ",
      "image": "/figures/yagni.webp",
      "logo": null,
      "credit": {
        "author": "Michael Hüttermann (original uploader, German Wikipedia)",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:Ron_Jeffries.jpg"
      }
    },
    "en": {
      "title": "YAGNI",
      "concept": "Code built for imagined future needs costs time now and rarely fits the need that arrives.",
      "mechanism": "Speculative generality is paid for three times: writing the abstraction, carrying it while it is unused, and unpicking it when the anticipated requirement finally arrives in a different shape. Predictions about future requirements are usually wrong in exactly the details the abstraction fixed.",
      "counter": {
        "name": "Chesterton's Fence",
        "note": "YAGNI licenses you not to build something; it never licenses you to delete something whose purpose you have not established"
      },
      "guideline": "Implement the case you actually have. When you feel the pull to generalise, name the second concrete case first — if you cannot, you do not have a pattern, you have a guess.",
      "source": "Ron Jeffries, Extreme Programming practice notes; named \"You Aren't Gonna Need It\" and popularised in Kent Beck, *Extreme Programming Explained* (1999)."
    },
    "ja": {
      "title": "YAGNI",
      "concept": "想像した将来のために書いたコードは、今の工数を食い、実際の要件に合うこともまれだ。",
      "mechanism": "推測に基づく一般化は3回支払わされる。抽象を書くとき、使われないまま抱え続けるとき、そして予期した要件が違う形で実際に来て解きほぐすとき。将来要件の予測は、たいてい「その抽象が固定してしまった細部」で外れる。",
      "counter": {
        "name": "チェスタトンの柵",
        "note": "YAGNI が許すのは「作らないこと」だけであり、目的を確かめていないものを「消すこと」まで許してはいない"
      },
      "guideline": "実際に手元にあるケースだけを実装せよ。一般化したくなったら、まず2つ目の具体的なケースを名指しせよ。名指しできないなら、それはパターンではなく当て推量だ。",
      "source": "Ron Jeffries による Extreme Programming の実践ノート。\"You Aren't Gonna Need It\" として命名され、Kent Beck『Extreme Programming Explained』(1999) で広まった。"
    }
  },
  {
    "slug": "kiss-principle",
    "number": 59,
    "tag": "maintainability",
    "sourceUrl": "https://en.wikipedia.org/wiki/KISS_principle",
    "seeAlso": [
      "kernighans-law",
      "ashbys-law",
      "choose-boring-technology"
    ],
    "figure": {
      "kind": "person",
      "name": "Kelly Johnson",
      "monogram": "KJ",
      "image": "/figures/kiss-principle.webp",
      "logo": null,
      "credit": {
        "author": "CIA",
        "license": "Public domain",
        "page": "https://commons.wikimedia.org/wiki/File:ClarenceLeonardKellyJohnson.jpg"
      }
    },
    "en": {
      "title": "KISS Principle",
      "concept": "A system has to be simple enough for an ordinary person to fix under bad conditions.",
      "mechanism": "\"Keep it simple, stupid\" came out of aircraft design, where the requirement was that a jet be repairable by an average mechanic in a field with basic tools. The test was never elegance — it was whether an ordinary person could fix it in the worst circumstances the thing would actually meet.",
      "counter": {
        "name": "Ashby's Law of Requisite Variety",
        "note": "a system simpler than the problem it has to regulate cannot cope with it, and simplicity below that floor is displaced complexity rather than less of it"
      },
      "guideline": "Judge a design by who can repair it at 3 AM, not by how it reads in review. If the on-call engineer needs the author on the call, it is not simple — it is familiar to one person.",
      "source": "Attributed to Kelly Johnson at Lockheed's Skunk Works (c. 1960), as a field-maintainability requirement for combat aircraft."
    },
    "ja": {
      "title": "KISS の原則",
      "concept": "システムは、普通の人が悪条件の中でも直せる程度に単純である必要がある。",
      "mechanism": "\"Keep it simple, stupid\" は航空機設計から出た言葉で、要件は「平均的な整備兵が、基本的な工具だけで、野戦で直せること」だった。基準は優雅さではなく、その機体が実際に遭遇する最悪の状況で、普通の人間が直せるかどうかだった。",
      "counter": {
        "name": "アシュビーの必要多様性の法則",
        "note": "制御すべき問題より単純な系はその問題に対処できない。その下限を割った単純さは、複雑さの削減ではなく移動である"
      },
      "guideline": "設計はレビューでの読みやすさではなく、「午前3時に誰が直せるか」で評価せよ。オンコール担当が作者を呼ばないと直せないなら、それは単純なのではなく、一人にとって馴染みがあるだけだ。",
      "source": "Lockheed Skunk Works の Kelly Johnson に帰される (1960年頃)。戦闘機の野戦整備性の要求として。"
    }
  },
  {
    "slug": "dry-principle",
    "number": 60,
    "tag": "maintainability",
    "sourceUrl": "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
    "seeAlso": [
      "law-of-demeter",
      "single-responsibility-principle"
    ],
    "figure": {
      "kind": "person",
      "name": "Andy Hunt",
      "monogram": "AH",
      "image": "/figures/dry-principle.webp",
      "logo": null,
      "credit": {
        "author": "Kittie Rue",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:Andy_Hunt_programmer.jpg"
      }
    },
    "en": {
      "title": "DRY Principle",
      "concept": "Knowledge kept in two places drifts apart, because nothing makes the copies change together.",
      "mechanism": "Duplicated knowledge drifts, because nothing forces the copies to change together. The cost is not the extra characters — it is that some future editor fixes one copy and ships a system that now quietly contradicts itself.",
      "counter": {
        "name": "Duplication Is Cheaper Than the Wrong Abstraction",
        "note": "two blocks that merely look alike today will fight each other the moment they need to diverge"
      },
      "guideline": "Deduplicate knowledge, not text. Before merging two similar blocks, ask whether they change for the same reason and at the request of the same person; if not, leave them apart.",
      "source": "Andrew Hunt & David Thomas, *The Pragmatic Programmer* (Addison-Wesley, 1999) — \"every piece of knowledge must have a single, unambiguous, authoritative representation within a system.\""
    },
    "ja": {
      "title": "DRY 原則",
      "concept": "同じ知識を二か所に置くと、一緒に変わる保証がないので食い違っていく。",
      "mechanism": "重複した知識は必ずずれていく。コピー同士を一緒に変えることを強制するものが何もないからだ。コストは余分な文字数ではない。将来の誰かが片方だけを直し、自分自身と静かに矛盾するシステムを出荷してしまうことだ。",
      "counter": {
        "name": "誤った抽象より重複のほうが安い",
        "note": "今は似ているだけの2つのブロックは、分岐が必要になった瞬間に互いを縛り合う"
      },
      "guideline": "重複を排除するのはテキストではなく知識だ。似た2つのブロックを統合する前に、「同じ理由で、同じ人の要求によって変わるか」を問え。違うなら分けたままにせよ。",
      "source": "Andrew Hunt & David Thomas『The Pragmatic Programmer』(Addison-Wesley, 1999)——「あらゆる知識は、システムの中で単一かつ明確で権威ある表現を持たねばならない」。"
    }
  },
  {
    "slug": "theory-of-constraints",
    "number": 61,
    "tag": "performance",
    "sourceUrl": "https://en.wikipedia.org/wiki/Theory_of_constraints",
    "seeAlso": [
      "amdahls-law",
      "littles-law"
    ],
    "figure": {
      "kind": "person",
      "name": "Eliyahu M. Goldratt",
      "monogram": "EG",
      "image": "/figures/theory-of-constraints.webp",
      "logo": null,
      "credit": {
        "author": "Francois-Xavier Dugres",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File:Goldratt%2BAmstrong.jpg"
      }
    },
    "en": {
      "title": "Theory of Constraints",
      "concept": "A system's throughput is set by its single tightest bottleneck.",
      "mechanism": "Every chain has one weakest link. Improvement anywhere else raises local efficiency while total throughput stays flat — and often makes things worse, because the faster upstream stage simply piles more work in front of the real bottleneck.",
      "counter": {
        "name": "The Constraint Moves",
        "note": "relieve one and another takes its place, so a process permanently optimised around yesterday's bottleneck starves at the new one"
      },
      "guideline": "Find the constraint, exploit it fully before you buy capacity, and subordinate every other stage to it. Then measure again — you have just created a different bottleneck somewhere else.",
      "source": "Eliyahu M. Goldratt & Jeff Cox, *The Goal: A Process of Ongoing Improvement* (North River Press, 1984)."
    },
    "ja": {
      "title": "制約理論",
      "concept": "システムの処理量は、最も詰まっている一か所で決まる。",
      "mechanism": "鎖には必ず最も弱い環が一つある。それ以外のどこを改善しても、局所的な効率は上がるが全体のスループットは動かない。むしろ悪化することが多い——速くなった上流工程が、本当のボトルネックの前により多くの仕掛品を積み上げるからだ。",
      "counter": {
        "name": "制約は移動する",
        "note": "一つを緩めれば別のものが制約になる。昨日のボトルネックに合わせて恒久的に最適化された工程は、新しい制約のところで飢える"
      },
      "guideline": "制約を特定し、能力を買い足す前にまず徹底的に使い切り、他の全工程をそれに従属させよ。そのうえで測り直せ。あなたはたった今、別の場所に新しいボトルネックを作ったところだ。",
      "source": "Eliyahu M. Goldratt & Jeff Cox『The Goal: A Process of Ongoing Improvement』(North River Press, 1984)。"
    }
  },
  {
    "slug": "occams-razor",
    "number": 62,
    "tag": "cognition",
    "sourceUrl": "https://en.wikipedia.org/wiki/Occam%27s_razor",
    "seeAlso": [
      "normalcy-bias",
      "hanlons-razor"
    ],
    "figure": {
      "kind": "person",
      "name": "William of Ockham",
      "monogram": "WO",
      "image": "/figures/occams-razor.webp",
      "logo": null,
      "credit": {
        "author": "Moscarlop",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:William_of_Ockham.png"
      }
    },
    "en": {
      "title": "Occam's Razor",
      "concept": "The explanation that needs the fewest unverified assumptions is usually the right one.",
      "mechanism": "Under incident pressure the mind reaches for the interesting hypothesis — a kernel bug, a bad disk, an attacker. The explanation requiring the fewest unverified assumptions is almost always the deploy that went out twenty minutes ago.",
      "counter": {
        "name": "Hickam's Dictum",
        "note": "a system can carry several independent faults at once, and the simplest story that fits the symptoms is not automatically the true one"
      },
      "guideline": "Rank your hypotheses by how many unverified assumptions each needs, and test the cheapest first. Ask \"what changed?\" before \"what is broken?\"",
      "source": "Attributed to William of Ockham (c. 1287–1347); the shaving metaphor and the formula *entia non sunt multiplicanda praeter necessitatem* are both later glosses on his principle of parsimony."
    },
    "ja": {
      "title": "オッカムの剃刀",
      "concept": "検証されていない仮定が最も少ない説明が、たいてい正しい。",
      "mechanism": "インシデントの圧力下では、思考は面白い仮説に手を伸ばす——カーネルのバグ、壊れたディスク、攻撃者。だが未検証の仮定を最も必要としない説明は、ほぼ常に「20分前に出たデプロイ」である。",
      "counter": {
        "name": "ヒッカムの格言",
        "note": "系は複数の独立した障害を同時に抱えうる。症状に合う最も単純な物語が、自動的に真実になるわけではない"
      },
      "guideline": "仮説を「未検証の仮定がいくつ必要か」で並べ、最も安いものから検証せよ。「何が壊れたか」の前に「何が変わったか」を問え。",
      "source": "オッカムのウィリアム (1287頃–1347) に帰される。「剃刀」の比喩も、定式 *entia non sunt multiplicanda praeter necessitatem* も、彼の倹約の原理に対する後世の注釈である。"
    }
  },
  {
    "slug": "single-responsibility-principle",
    "number": 63,
    "tag": "maintainability",
    "sourceUrl": "https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html",
    "seeAlso": [
      "dry-principle",
      "law-of-demeter",
      "conways-law"
    ],
    "figure": {
      "kind": "person",
      "name": "Robert C. Martin",
      "monogram": "RM",
      "image": "/figures/single-responsibility-principle.webp",
      "logo": null,
      "credit": {
        "author": "Angelacleancoder",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File:Robert_C._Martin_surrounded_by_computers_(cropped).jpg"
      }
    },
    "en": {
      "title": "Single Responsibility Principle",
      "concept": "A module serving two groups gets conflicting change requests from both.",
      "mechanism": "When one module serves two audiences, their change requests arrive on different schedules and collide in the same file. Coupling is not really about calls between modules — it is about who is entitled to force you to edit them.",
      "counter": {
        "name": "Premature Decomposition",
        "note": "splitting by imagined responsibilities produces a scatter of one-method classes and moves all the complexity into the wiring between them"
      },
      "guideline": "Define responsibility by who asks for the change, not by what the code does. If two different people can each demand an edit to the same module, split it along that line and nowhere else.",
      "source": "Robert C. Martin, *Agile Software Development: Principles, Patterns, and Practices* (2002); sharpened to \"a module should be responsible to one, and only one, actor\" in *The Single Responsibility Principle* (The Clean Code Blog, 8 May 2014), which is what this links to, and restated in *Clean Architecture* (2017)."
    },
    "ja": {
      "title": "単一責任の原則",
      "concept": "二つの利用者に仕えるモジュールには、両方から食い違う変更要求が届く。",
      "mechanism": "一つのモジュールが二つの利用者集団に仕える場合、彼らの変更要求は異なるスケジュールで届き、同じファイルの上で衝突する。結合とは本当はモジュール間の呼び出しの話ではない——「誰があなたにそのモジュールの編集を強制できるか」の話だ。",
      "counter": {
        "name": "早すぎる分解",
        "note": "想像上の責務で分割すると、メソッド1個のクラスが散乱し、複雑さがすべてその間の配線に移るだけになる"
      },
      "guideline": "責務は「コードが何をするか」ではなく「誰が変更を要求してくるか」で定義せよ。同じモジュールに対して別々の人物がそれぞれ編集を要求できるなら、その線でだけ分割せよ。",
      "source": "Robert C. Martin『Agile Software Development: Principles, Patterns, and Practices』(2002)。『The Single Responsibility Principle』(The Clean Code Blog, 2014年5月8日、本項のリンク先) で「モジュールはただ一人のアクターに対して責任を負う」と鋭くされ、『Clean Architecture』(2017) で再掲された。"
    }
  },
  {
    "slug": "principle-of-least-astonishment",
    "number": 64,
    "tag": "interaction",
    "sourceUrl": "https://en.wikipedia.org/wiki/Principle_of_least_astonishment",
    "seeAlso": [
      "hyrums-law",
      "curse-of-knowledge"
    ],
    "figure": {
      "kind": "person",
      "name": "Mike Cowlishaw",
      "monogram": "MC",
      "image": "/figures/principle-of-least-astonishment.webp",
      "logo": null,
      "credit": {
        "author": "Mfc (Mike Cowlishaw)",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:Mike_Cowlishaw_2005.jpg"
      }
    },
    "en": {
      "title": "Principle of Least Astonishment",
      "concept": "Behavior that surprises users costs more than behavior that is slightly worse but expected.",
      "mechanism": "Users arrive with a model assembled from every similar thing they have used. A behaviour that is defensible but surprising costs more than a behaviour that is slightly worse but predicted, because the surprise is paid again by every user, every time, forever.",
      "counter": {
        "name": "Astonishment Is Relative",
        "note": "designing only for today's expectations freezes bad conventions in place; sometimes the right move is to surprise everyone once, loudly, with a migration path"
      },
      "guideline": "When two designs are close, take the one that matches the convention your users already know — the flag name, the exit code, the sort order. Spend deliberate surprise only where you can afford to announce it.",
      "source": "Long-standing folklore in language and interface design; stated explicitly in Michael F. Cowlishaw, *The Design of the REXX Language* (IBM Systems Journal, 1984)."
    },
    "ja": {
      "title": "驚き最小の原則",
      "concept": "利用者を驚かせる挙動は、少し劣っても予想どおりの挙動より高くつく。",
      "mechanism": "利用者は、これまで使ってきた似たものすべてから組み立てたモデルを持ってやって来る。「筋は通っているが意外な」振る舞いは、「わずかに劣るが予想どおりの」振る舞いより高くつく。驚きは全利用者が、毎回、永久に支払い続けるからだ。",
      "counter": {
        "name": "驚きは相対的である",
        "note": "今日の期待だけに合わせた設計は、悪い慣習をその場に凍結する。ときには移行手順を添えて、一度だけ大きく驚かせるのが正しい"
      },
      "guideline": "2つの設計が拮抗したら、利用者がすでに知っている慣習に合うほうを取れ——フラグ名、終了コード、並び順。意図的な驚きは、告知するコストを払える場所にだけ使え。",
      "source": "言語・インタフェース設計の古くからの言い伝え。Michael F. Cowlishaw『The Design of the REXX Language』(IBM Systems Journal, 1984) に明示的な記述がある。"
    }
  },
  {
    "slug": "second-system-effect",
    "number": 65,
    "tag": "systems",
    "sourceUrl": "https://en.wikipedia.org/wiki/Second-system_effect",
    "seeAlso": [
      "brooks-law",
      "galls-law",
      "worse-is-better",
      "strangler-fig"
    ],
    "figure": {
      "kind": "person",
      "name": "Fred Brooks",
      "monogram": "FB",
      "image": "/figures/second-system-effect.webp",
      "logo": null,
      "credit": {
        "author": "SD&M (www.sdm.de)",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:Fred_Brooks_(cropped_square).jpg"
      }
    },
    "en": {
      "title": "Second-System Effect",
      "concept": "After a first success, designers tend to pack the ideas they deferred into the second system.",
      "mechanism": "The first system is built cautiously, by someone unsure of the ground. Its success converts that caution into confidence, and every idea deferred the first time is loaded into the rewrite at once. The result is over-general, late, and frequently never ships at all.",
      "counter": {
        "name": "Gall's Law",
        "note": "the answer is not to freeze the first system but to grow it — a rewrite that ships in slices is not a second system"
      },
      "guideline": "When rewriting, carry forward the constraints and not just the wish list. Cut the deferred features to the two that actually blocked users, and replace the original one piece at a time.",
      "source": "Fred Brooks, *The Mythical Man-Month* (Addison-Wesley, 1975), chapter 5."
    },
    "ja": {
      "title": "セカンドシステム症候群",
      "concept": "最初の成功のあと、設計者は先送りしたアイデアを二作目に詰め込みがちだ。",
      "mechanism": "1番目のシステムは、地面の固さを測りかねている者によって慎重に作られる。その成功が慎重さを自信に変え、1回目に見送ったアイデアがすべて一度に書き直しへ流し込まれる。結果は過剰に汎用的で、遅れ、そして多くの場合そもそも出荷されない。",
      "counter": {
        "name": "ガルの法則",
        "note": "答えは1番目のシステムを凍結することではなく、育てることだ。分割して出荷される書き直しは「2番目のシステム」ではない"
      },
      "guideline": "書き直すときは、願望リストだけでなく制約も引き継げ。見送っていた機能は「実際に利用者を止めていた2つ」まで削り、元のシステムを一つずつ置き換えよ。",
      "source": "Fred Brooks『人月の神話』(Addison-Wesley, 1975) 第5章。"
    }
  },
  {
    "slug": "moores-law",
    "number": 66,
    "tag": "performance",
    "sourceUrl": "https://en.wikipedia.org/wiki/Moore%27s_law",
    "seeAlso": [
      "wirths-law",
      "gustafsons-law",
      "the-bitter-lesson"
    ],
    "figure": {
      "kind": "person",
      "name": "Gordon Moore",
      "monogram": "GM",
      "image": "/figures/moores-law.webp",
      "logo": null,
      "credit": {
        "author": "Intel Free Press",
        "license": "CC BY-SA 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Gordon_Moore_1978_(cropped).png"
      }
    },
    "en": {
      "title": "Moore's Law",
      "concept": "The number of transistors on a chip at lowest cost per part doubles about every two years.",
      "mechanism": "Moore's observation was economic rather than physical: the component count giving the lowest cost per component doubles about every two years. It held for half a century and quietly underwrote every plan that assumed hardware would rescue it — but single-thread performance stopped following it once Dennard scaling ended around 2005.",
      "counter": {
        "name": "Wirth's Law",
        "note": "the gains get spent rather than banked, and clock speed stopped rising long before transistor counts did"
      },
      "guideline": "Do not budget for the hardware bailing out a design. If the workload is single-threaded and latency-bound, next year's machine will not save it — you have to parallelise it or do less work.",
      "source": "Gordon E. Moore, *Cramming More Components onto Integrated Circuits* (Electronics, 19 April 1965), which projected a doubling every year; Moore revised it to every two years in *Progress in Digital Integrated Electronics* (IEDM, 1975)."
    },
    "ja": {
      "title": "ムーアの法則",
      "concept": "部品単価が最も安くなるチップのトランジスタ数は、約2年ごとに倍になる。",
      "mechanism": "ムーアの観察は物理ではなく経済のものだった——部品あたりコストが最小になる集積度が、およそ2年で倍になる。これが半世紀成立し、「ハードがいずれ救ってくれる」という前提のあらゆる計画を静かに支えた。だが2005年頃にデナードスケーリングが終わってから、シングルスレッド性能はこの曲線から外れている。",
      "counter": {
        "name": "ヴィルトの法則",
        "note": "得られた余力は貯金されず消費される。しかもクロック速度はトランジスタ数よりずっと早く頭打ちになった"
      },
      "guideline": "ハードウェアが設計を救ってくれる前提で予算を組むな。ワークロードがシングルスレッドかつレイテンシ律速なら、来年のマシンは助けにならない。並列化するか、やる仕事を減らすかだ。",
      "source": "Gordon E. Moore『Cramming More Components onto Integrated Circuits』(Electronics, 1965年4月19日) は毎年の倍増を予測した。2年ごとへの修正は『Progress in Digital Integrated Electronics』(IEDM, 1975)。"
    }
  },
  {
    "slug": "amaras-law",
    "number": 67,
    "tag": "estimation",
    "sourceUrl": "https://en.wikipedia.org/wiki/Roy_Amara",
    "seeAlso": [
      "survivorship-bias",
      "lindy-effect"
    ],
    "figure": {
      "kind": "person",
      "name": "Roy Amara",
      "monogram": "RA",
      "image": "/figures/amaras-law.webp",
      "logo": null,
      "credit": {
        "author": "Rochester Institute of Technology",
        "license": "Public domain",
        "page": "https://commons.wikimedia.org/wiki/File:Roy_Amara,_RIT_NandE_Vol12Num31_1980_Sep25_Complete.jpg"
      }
    },
    "en": {
      "title": "Amara's Law",
      "concept": "New technology is overrated in its first years and underrated over a decade.",
      "mechanism": "A new technology is judged on a demo, which flatters it, and then adopted against an installed base, which resists it — so the first two years disappoint. The same compounding that made the early forecast wrong then runs for a decade in the other direction, and the ten-year forecast turns out to be wrong too, this time low.",
      "counter": {
        "name": "Some Things Simply Do Not Arrive",
        "note": "survivorship makes the law look inevitable, because the technologies that never got a long run are not the ones quoted back at us"
      },
      "guideline": "Discount two-year forecasts about a new technology and take ten-year ones seriously — but plan around the version that actually ships, not the one in the demo.",
      "source": "Roy Amara, president of the Institute for the Future; attributed and circulated from the 1970s onward."
    },
    "ja": {
      "title": "アマラの法則",
      "concept": "新しい技術は、最初の数年は過大評価され、十年単位では過小評価される。",
      "mechanism": "新技術はデモで評価され——デモは技術を実際より良く見せる——そして既存の設備の上に導入される。既存設備は抵抗する。だから最初の2年は期待外れになる。その後、初期予測を外させたのと同じ複利が10年間逆方向に働き、10年予測もまた外れる。今度は過小に。",
      "counter": {
        "name": "そもそも来ないものもある",
        "note": "生存者バイアスがこの法則を必然に見せている。長期を迎えられなかった技術は、あとから引用されないからだ"
      },
      "guideline": "新技術についての2年予測は割り引き、10年予測は真に受けよ。ただし計画はデモ版ではなく、実際に出荷される版を前提に立てよ。",
      "source": "Institute for the Future 会長 Roy Amara に帰される。1970年代以降に流布した言葉。"
    }
  },
  {
    "slug": "the-bitter-lesson",
    "number": 68,
    "tag": "systems",
    "sourceUrl": "https://web.archive.org/web/2024/http://www.incompleteideas.net/IncIdeas/BitterLesson.html",
    "seeAlso": [
      "cargo-cult-engineering",
      "moores-law"
    ],
    "figure": {
      "kind": "person",
      "name": "Richard S. Sutton",
      "monogram": "RS",
      "image": "/figures/the-bitter-lesson.webp",
      "logo": null,
      "credit": {
        "author": "Xuthoria",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File:SD_2025_-_Richard_Sutton_01_(cropped).jpg"
      }
    },
    "en": {
      "title": "The Bitter Lesson",
      "concept": "In AI, general methods that scale with compute have, in the long run, beaten hand-coded human knowledge.",
      "mechanism": "Across seven decades of AI research the approaches that won were search and learning scaled with available computation, not the ones that encoded human insight about the domain. Built-in knowledge helps in the short run and becomes the ceiling in the long run, because unlike computation it does not get cheaper every year.",
      "counter": {
        "name": "Compute Is Not Free",
        "note": "inside a fixed budget domain knowledge is often the only lever you have, and the lesson describes the trajectory of a field rather than the right move this quarter"
      },
      "guideline": "When choosing between encoding what you know and building something that learns from more data or more compute, ask which one improves on its own when the budget doubles. Bet on that one for anything with a multi-year horizon.",
      "source": "Richard S. Sutton, *The Bitter Lesson* (13 March 2019)."
    },
    "ja": {
      "title": "苦い教訓",
      "concept": "AIでは長い目で見ると、計算量とともに伸びる汎用手法が、人が作り込んだ知識に勝ってきた。",
      "mechanism": "AI研究の70年を通じて勝ったのは、利用可能な計算量とともにスケールする探索と学習であり、その領域についての人間の洞察を埋め込んだ手法ではなかった。作り込まれた知識は短期では効き、長期では天井になる。計算資源と違って、毎年安くならないからだ。",
      "counter": {
        "name": "計算資源はタダではない",
        "note": "固定予算の内側では領域知識が唯一使えるレバーであることも多い。この教訓は分野の軌跡を述べたものであって、今四半期の正解ではない"
      },
      "guideline": "「知っていることを埋め込む」か「より多くのデータや計算から学ぶものを作る」かで迷ったら、予算が倍になったとき勝手に良くなるのはどちらかを問え。数年単位の話なら、そちらに賭けよ。",
      "source": "Richard S. Sutton『The Bitter Lesson』(2019年3月13日)。"
    }
  },
  {
    "slug": "metcalfes-law",
    "number": 69,
    "tag": "systems",
    "sourceUrl": "https://en.wikipedia.org/wiki/Metcalfe%27s_law",
    "seeAlso": [
      "dunbars-number",
      "brooks-law"
    ],
    "figure": {
      "kind": "person",
      "name": "Robert Metcalfe",
      "monogram": "RM",
      "image": "/figures/metcalfes-law.webp",
      "logo": null,
      "credit": {
        "author": "Andreu Veà, WiWiW.org",
        "license": "CC BY-SA 3.0",
        "page": "https://commons.wikimedia.org/wiki/File:With_Bob_Metcalfe_(cropped).jpg"
      }
    },
    "en": {
      "title": "Metcalfe's Law",
      "concept": "Each new node adds value to every existing one, so a network's value outgrows its size.",
      "mechanism": "A network of n nodes has n(n−1)/2 possible connections, so its value was claimed to scale with n². The exponent is disputed — n log n fits real networks better — but the shape holds: each new node adds value to every existing node, which is why networks tip rather than grow smoothly.",
      "counter": {
        "name": "The Same Quadratic Is a Cost",
        "note": "connections are an asset between users and a liability between colleagues; Brooks' Law is Metcalfe's Law with the sign flipped"
      },
      "guideline": "For a product whose value comes from other users, spend early effort on the smallest network that is already useful to its own members, not on features. For a team, do the opposite and cut connections.",
      "source": "Attributed to Robert Metcalfe (c. 1980); the n log n critique is Bob Briscoe, Andrew Odlyzko & Benjamin Tilly, *Metcalfe's Law is Wrong* (IEEE Spectrum, July 2006)."
    },
    "ja": {
      "title": "メトカーフの法則",
      "concept": "ノードが一つ増えるたびに既存の全ノードの価値が上がり、価値は規模より速く増える。",
      "mechanism": "n ノードのネットワークには n(n−1)/2 通りの接続がありうるため、価値は n² に比例すると主張された。指数には異論があり——実在のネットワークには n log n のほうがよく当てはまる——だが形は変わらない。新しいノードは既存の全ノードに価値を足す。だからネットワークは滑らかに成長せず、ある点で一気に傾く。",
      "counter": {
        "name": "同じ二次関数はコストでもある",
        "note": "接続は利用者どうしでは資産だが、同僚どうしでは負債になる。ブルックスの法則はメトカーフの法則の符号を反転させたものだ"
      },
      "guideline": "価値が他の利用者から生まれるプロダクトでは、初期の労力を機能ではなく「その参加者にとってすでに有用な最小のネットワーク」に注げ。チームでは逆に、接続を削れ。",
      "source": "Robert Metcalfe に帰される (1980年頃)。n log n による批判は Bob Briscoe, Andrew Odlyzko & Benjamin Tilly『Metcalfe's Law is Wrong』(IEEE Spectrum, 2006年7月)。"
    }
  },
  {
    "slug": "ringelmann-effect",
    "number": 70,
    "tag": "organization",
    "sourceUrl": "https://en.wikipedia.org/wiki/Ringelmann_effect",
    "seeAlso": [
      "bystander-effect",
      "dunbars-number"
    ],
    "figure": {
      "kind": "scene",
      "name": "Tug of war, 1900 Paris Olympics",
      "monogram": "RE",
      "image": "/figures/ringelmann-effect.webp",
      "logo": null,
      "credit": {
        "author": "Unknown photographer (source: International Olympic Committee website)",
        "license": "Public domain",
        "page": "https://commons.wikimedia.org/wiki/File:Tug_of_war.jpg"
      }
    },
    "en": {
      "title": "Ringelmann Effect",
      "concept": "Each person contributes less as a group grows, most of all when no one can see who did what.",
      "mechanism": "Ringelmann had men pull a rope alone and in teams, and measured the force. Each additional person contributed less than they had alone — partly coordination loss, partly reduced individual effort once the contribution stopped being separable. It shows up wherever output is pooled and nobody can see who produced which part.",
      "counter": {
        "name": "Separable Contribution",
        "note": "the effect is a property of how the work is measured rather than of the people; make the individual contribution legible and most of it disappears"
      },
      "guideline": "Give every workstream one named owner and a visible output. If you cannot say who produced which part of a result, expect the group to produce less than the sum of its members.",
      "source": "Maximilien Ringelmann, *Recherches sur les moteurs animés: Travail de l'homme* (Annales de l'Institut National Agronomique, 1913)."
    },
    "ja": {
      "title": "リンゲルマン効果",
      "concept": "集団が大きくなるほど一人あたりの貢献は減る。誰の成果か見えないと特にそうだ。",
      "mechanism": "リンゲルマンは、綱を一人で引かせた場合とチームで引かせた場合の力を測った。人を増やすたび、一人あたりの寄与は単独時より小さくなった。一部は協調のロスだが、一部は「寄与が分離できなくなった途端に落ちる個人の努力」である。成果が合算され、誰がどの部分を出したか見えない場所ならどこでも起きる。",
      "counter": {
        "name": "寄与を分離可能にする",
        "note": "この効果は人間の性質ではなく仕事の測り方の性質だ。個人の寄与を可視化すれば、その大半は消える"
      },
      "guideline": "すべての作業の流れに、名前の付いた担当者一人と、目に見える成果物を与えよ。成果のどの部分を誰が出したか言えないなら、その集団は構成員の総和より少ない成果しか出さないと考えよ。",
      "source": "Maximilien Ringelmann『Recherches sur les moteurs animés: Travail de l'homme』(Annales de l'Institut National Agronomique, 1913)。"
    }
  },
  {
    "slug": "shirky-principle",
    "number": 71,
    "tag": "incentives",
    "sourceUrl": "https://kk.org/thetechnium/the-shirky-prin/",
    "seeAlso": [
      "goodharts-law",
      "peter-principle"
    ],
    "figure": {
      "kind": "person",
      "name": "Clay Shirky",
      "monogram": "CS",
      "image": "/figures/shirky-principle.webp",
      "logo": null,
      "credit": {
        "author": "James Duncan Davidson from Portland, USA",
        "license": "CC BY 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Etech05_Clay2_(cropped).jpg"
      }
    },
    "en": {
      "title": "Shirky Principle",
      "concept": "Institutions tend to keep alive the problem they exist to solve.",
      "mechanism": "An organisation built to solve a problem draws its budget, headcount and status from that problem persisting. Nobody has to be cynical for this to work: the incentives simply never point at making the team unnecessary, so over time the solution quietly becomes an argument for the problem.",
      "counter": {
        "name": "Some Problems Are Permanent",
        "note": "treating every long-lived team as self-serving destroys the ones doing necessary maintenance, which is invisible precisely when it is working"
      },
      "guideline": "For any team or tool created to fix something, write down what \"fixed\" looks like and when you will check. A platform team that cannot describe its own obsolescence is optimising for its own survival.",
      "source": "Clay Shirky, named and quoted in Kevin Kelly, *The Shirky Principle* (The Technium, 2010)."
    },
    "ja": {
      "title": "シャーキーの原理",
      "concept": "組織は、自分たちが存在する理由である問題を残そうとする。",
      "mechanism": "ある問題を解くために作られた組織は、その問題が存続することから予算・人員・地位を得る。これが働くのに誰かが冷笑的である必要はない。インセンティブが「自分のチームを不要にすること」を決して指さないだけだ。時間が経つと、解決策は静かに問題の存続理由へと変わる。",
      "counter": {
        "name": "永続する問題も実在する",
        "note": "長命なチームをすべて自己保存的だと見なせば、必要な保守をしているチームを壊す。保守はうまくいっているときほど見えない"
      },
      "guideline": "何かを直すために作ったチームやツールには、「直った状態」がどう見えるか、いつそれを確認するかを書き出せ。自らの不要化を説明できないプラットフォームチームは、自らの生存を最適化している。",
      "source": "Clay Shirky の言。Kevin Kelly『The Shirky Principle』(The Technium, 2010) で命名・引用された。"
    }
  },
  {
    "slug": "error-budget",
    "number": 72,
    "tag": "operations",
    "sourceUrl": "https://sre.google/sre-book/embracing-risk/",
    "seeAlso": [
      "goodharts-law",
      "tail-at-scale",
      "toil",
      "normalization-of-deviance",
      "andon"
    ],
    "figure": {
      "kind": "company",
      "name": "Google",
      "monogram": "G",
      "image": null,
      "logo": "/figures/error-budget.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); Google is a trademark of Google LLC",
        "page": "https://commons.wikimedia.org/wiki/File:Google_Favicon_2025.svg"
      }
    },
    "en": {
      "title": "Error Budget",
      "concept": "An SLO below 100% leaves a measurable allowance of failure, and that allowance can be spent.",
      "mechanism": "Product teams are judged on velocity and operations teams on reliability, so every release becomes a negotiation decided by whoever argues harder. Past a point users cannot tell the difference (someone on a 99%-reliable phone cannot tell 99.99% from 99.999%), but the last fraction costs the most and blocks the most change. Once the target is explicit, the gap between it and perfect is a budget: 99.9% over 30 days is about 43 minutes of failure, and both sides can see how much of it is left.",
      "counter": {
        "name": "Normalization of Deviance",
        "note": "a standing allowance for failure teaches a team that each failure is routine; the outage that should have alarmed people gets logged against the budget and never investigated"
      },
      "guideline": "Agree on the SLO and the policy before the incident, not during it: while budget remains, ship; when it is spent, freeze feature releases and put the time into reliability until it recovers. Keep data loss and security outside the budget entirely.",
      "source": "Marc Alvidrez, \"Embracing Risk\" (with \"Motivation for Error Budgets\" by Mark Roth), in Beyer, Jones, Petoff & Murphy (eds.), *Site Reliability Engineering* (O'Reilly, 2016), ch. 3 — where the error budget is defined and \"100% is probably never the right reliability target\" is argued."
    },
    "ja": {
      "title": "エラーバジェット",
      "concept": "100% 未満の SLO は許容できる失敗の量を決める。その量は使ってよい予算だ。",
      "mechanism": "プロダクト開発は速度で、運用は信頼性で評価される。だからリリースのたびに交渉になり、声の大きい側が勝つ。ある水準を超えると利用者は違いに気づかない（信頼性 99% のスマートフォンを使う人には 99.99% と 99.999% の差は分からない）のに、最後のわずかな差にいちばんコストがかかり、いちばん変更を止める。目標を明示すれば、目標と完璧の差が予算になる。30 日で 99.9% なら失敗に使えるのは約 43 分で、残りがいくらかを両者が同じ数字で見られる。",
      "counter": {
        "name": "逸脱の常態化",
        "note": "失敗を許す枠があると、失敗は日常だとチームが学ぶ。本来なら驚くべき障害も予算から差し引かれるだけで、調べられなくなる"
      },
      "guideline": "SLO と予算を使い切ったときの方針は、障害の最中ではなく事前に合意せよ。予算が残っていればリリースし、使い切ったら機能リリースを止めて回復するまで信頼性に時間を使え。データ消失とセキュリティは予算の外に置け。",
      "source": "Marc Alvidrez「Embracing Risk」（「Motivation for Error Budgets」節は Mark Roth）、Beyer, Jones, Petoff & Murphy 編『Site Reliability Engineering』(O'Reilly, 2016) 第 3 章。エラーバジェットの定義と「100% がふさわしい信頼性目標であることはおそらくない」という主張の出典。"
    }
  },
  {
    "slug": "toil",
    "number": 73,
    "tag": "operations",
    "sourceUrl": "https://sre.google/sre-book/eliminating-toil/",
    "seeAlso": [
      "ironies-of-automation",
      "error-budget",
      "you-build-it-you-run-it",
      "churn-rule"
    ],
    "figure": {
      "kind": "company",
      "name": "Google",
      "monogram": "G",
      "image": null,
      "logo": "/figures/toil.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); Google is a trademark of Google LLC",
        "page": "https://commons.wikimedia.org/wiki/File:Google_Favicon_2025.svg"
      }
    },
    "en": {
      "title": "Toil",
      "concept": "Manual, repetitive operational work grows with the service and, left unchecked, crowds out engineering.",
      "mechanism": "Toil is work that is manual, repetitive, automatable, interrupt-driven, leaves the system no better than it found it, and scales linearly with traffic or users. Each instance is small and urgent, so it always beats project work in the moment. Because it grows with the service and engineering time does not, a team that never pushes back ends up doing nothing else.",
      "counter": {
        "name": "Ironies of Automation",
        "note": "automating a task removes the practice people needed to handle it when the automation fails, and some automation costs more to build and keep alive than the toil it replaces"
      },
      "guideline": "Measure the share of each person's time spent on toil and set a ceiling (Google uses 50%). When a task comes back a third time (a rule of thumb, not the book's), file it as engineering work; when it scales with users, treat it as a defect rather than a chore.",
      "source": "Vivek Rau, \"Eliminating Toil\", in Beyer, Jones, Petoff & Murphy (eds.), *Site Reliability Engineering* (O'Reilly, 2016), ch. 5 — the definition of toil and the 50% cap."
    },
    "ja": {
      "title": "トイル",
      "concept": "手作業の繰り返し運用はサービスと一緒に増え、放っておけば開発の時間を食い尽くす。",
      "mechanism": "トイルとは、手作業で、繰り返され、自動化でき、割り込みでやって来て、終えてもシステムが良くならず、トラフィックや利用者数に比例して増える作業だ。一件ずつは小さく急ぎなので、その場では必ずプロジェクト作業に勝つ。サービスとともに増えるのに開発の時間は増えないので、押し返さないチームは最後にはそれしかしなくなる。",
      "counter": {
        "name": "自動化の皮肉",
        "note": "作業を自動化すると、自動化が壊れたときに対処するための練習の機会が消える。作って維持するコストが、置き換えるトイルより高くつく自動化もある"
      },
      "guideline": "一人ひとりの時間のうちトイルが占める割合を測り、上限を決めよ（Google は 50%）。同じ作業が三度目に来たら（本書ではなく経験則だ）開発タスクとして起票せよ。利用者数に比例して増える作業は、雑用ではなく欠陥として扱え。",
      "source": "Vivek Rau「Eliminating Toil」、Beyer, Jones, Petoff & Murphy 編『Site Reliability Engineering』(O'Reilly, 2016) 第 5 章。トイルの定義と 50% 上限の出典。"
    }
  },
  {
    "slug": "blameless-postmortem",
    "number": 74,
    "tag": "operations",
    "sourceUrl": "https://www.etsy.com/codeascraft/blameless-postmortems",
    "seeAlso": [
      "swiss-cheese-model",
      "normalization-of-deviance",
      "hanlons-razor",
      "bystander-effect",
      "mechanisms-not-good-intentions",
      "five-whys"
    ],
    "figure": {
      "kind": "company",
      "name": "Etsy",
      "monogram": "E",
      "image": null,
      "logo": "/figures/blameless-postmortem.png",
      "credit": {
        "author": null,
        "license": "Etsy is a trademark of Etsy, Inc.; shown to identify the source",
        "page": "https://apps.apple.com/us/app/etsy-shop-from-real-people/id477128284"
      }
    },
    "en": {
      "title": "Blameless Postmortem",
      "concept": "Punishing the person nearest a failure teaches people to hide what they did.",
      "mechanism": "The people closest to an incident hold the only accurate account of what they saw, what they believed and why the action made sense at the time. If telling that story can cost them, they tell a shorter one, and the organisation loses the information it needs to fix the conditions that made the mistake easy. The error repeats with someone else's name on it. Blameless is not consequence-free: a just culture still separates an honest mistake inside a bad system from knowingly disregarding a risk.",
      "counter": {
        "name": "Diffused Ownership",
        "note": "when nobody is answerable, the action items have no owner and quietly expire; some teams name a person accountable for the fix precisely because blamelessness leaves no one holding it"
      },
      "guideline": "Write the postmortem as a timeline of what people saw and why each action made sense then, and end with changes to the system, not to a person, each with one named owner and a date. Ban \"human error\" as a root cause; ask what made the error easy to make.",
      "source": "John Allspaw, *Blameless PostMortems and a Just Culture* (Code as Craft, Etsy, 2012); the practice is codified in Lunney & Lueder, \"Postmortem Culture\", *Site Reliability Engineering* (O'Reilly, 2016), ch. 15."
    },
    "ja": {
      "title": "非難なきポストモーテム",
      "concept": "障害のいちばん近くにいた人を罰すると、人は自分のしたことを隠すようになる。",
      "mechanism": "障害の現場にいた人だけが、何を見て、何を信じ、なぜその操作がその時点で妥当に思えたかを正確に語れる。語ることで不利益を被るなら、その人は話を短くする。すると組織は、ミスを起こしやすくしていた条件を直すための情報を失う。同じ誤りが、別の人の名前で繰り返される。非難しないことは、何をしても責任を問わないことではない。公正な文化は、悪い仕組みの中での正直なミスと、リスクを承知で無視したこととを区別する。",
      "counter": {
        "name": "責任の拡散",
        "note": "誰も責任を負わないと、対策項目に持ち主がいなくなり、いつの間にか立ち消える。だから責めないことと引き換えに、修正の担当者だけは名指しするチームもある"
      },
      "guideline": "ポストモーテムは、各人が何を見て、なぜその操作がその時点で妥当だったかの時系列として書き、人ではなく仕組みの変更で締めくくれ。変更ごとに担当者を一人名指しし、期日を付けよ。根本原因に「ヒューマンエラー」と書くことを禁じ、何がその誤りを起こしやすくしたかを問え。",
      "source": "John Allspaw『Blameless PostMortems and a Just Culture』(Code as Craft, Etsy, 2012)。実践としては Lunney & Lueder「Postmortem Culture」『Site Reliability Engineering』(O'Reilly, 2016) 第 15 章にまとめられている。"
    }
  },
  {
    "slug": "working-backwards",
    "number": 75,
    "tag": "decision",
    "sourceUrl": "https://www.allthingsdistributed.com/2006/11/working_backwards.html",
    "seeAlso": [
      "xy-problem",
      "yagni"
    ],
    "figure": {
      "kind": "company",
      "name": "Amazon",
      "monogram": "A",
      "image": null,
      "logo": "/figures/working-backwards.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); Amazon is a trademark of Amazon.com, Inc.",
        "page": "https://commons.wikimedia.org/wiki/File:Amazon_2024.svg"
      }
    },
    "en": {
      "title": "Working Backwards",
      "concept": "Teams that start from a solution often build things no customer needed; starting from the announcement exposes that early.",
      "mechanism": "Engineers start from what they can build and look for customers afterwards. A press release written before any code forces the team to state who the customer is, what problem they have and why existing options fail, in words the customer would use. If that page is hard to write, the product is unclear, and rewriting a page is far cheaper than rewriting the product.",
      "counter": {
        "name": "Build to Learn",
        "note": "when customers cannot judge an idea on paper (a new platform, an infrastructure change, something with no precedent) a cheap prototype tells you more than a polished press release"
      },
      "guideline": "Before a project starts, write a one-page press release and an FAQ for the customer, and review them as a team. If you cannot name the customer and their problem in the first paragraph, do not start building.",
      "source": "Werner Vogels, *Working Backwards* (All Things Distributed, 2006) — Amazon's CTO describing the press-release-first process; Ian McAllister's Quora answer \"What is Amazon's approach to product development and product management?\" is the source of \"if the press release is hard to write, the product is probably going to suck\"; Colin Bryar & Bill Carr, *Working Backwards* (St. Martin's Press, 2021) — the PR/FAQ process in full."
    },
    "ja": {
      "title": "ワーキング・バックワーズ",
      "concept": "解決策から始めると、誰も必要としないものを作ることが多い。発表文から始めれば早く気づける。",
      "mechanism": "エンジニアは作れるものから考え始め、顧客は後から探しがちだ。コードを書く前にプレスリリースを書くと、誰が顧客で、どんな問題を抱え、既存の手段がなぜ駄目なのかを、顧客自身の言葉で書かざるを得なくなる。その一枚が書きにくいなら、製品の輪郭がぼやけている。紙一枚を書き直すほうが、製品を作り直すよりずっと安い。",
      "counter": {
        "name": "作って学ぶ",
        "note": "顧客が紙の上では判断できないもの（新しいプラットフォーム、基盤の変更、前例のないもの）では、磨いたプレスリリースより安い試作品のほうが多くを教えてくれる"
      },
      "guideline": "プロジェクトを始める前に、顧客向けの一枚のプレスリリースと FAQ を書き、チームでレビューせよ。最初の段落で顧客とその問題を言えないなら、作り始めるな。",
      "source": "Werner Vogels『Working Backwards』(All Things Distributed, 2006)。Amazon の CTO がプレスリリースから書き始める手順を説明したもの。「プレスリリースが書きにくいなら、その製品はたぶんひどい」は Ian McAllister の Quora の回答「What is Amazon's approach to product development and product management?」から。PR/FAQ の全体像は Colin Bryar & Bill Carr『Working Backwards』(St. Martin's Press, 2021)。"
    }
  },
  {
    "slug": "disagree-and-commit",
    "number": 76,
    "tag": "decision",
    "sourceUrl": "https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders",
    "seeAlso": [
      "type-1-vs-type-2-decisions",
      "law-of-triviality"
    ],
    "figure": {
      "kind": "company",
      "name": "Amazon",
      "monogram": "A",
      "image": null,
      "logo": "/figures/disagree-and-commit.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); Amazon is a trademark of Amazon.com, Inc.",
        "page": "https://commons.wikimedia.org/wiki/File:Amazon_2024.svg"
      }
    },
    "en": {
      "title": "Disagree and Commit",
      "concept": "Waiting for everyone to agree is often slower than committing and correcting course if the call turns out wrong.",
      "mechanism": "When a group needs consensus, the decision moves at the speed of its most persistent skeptic, and late in the debate the answer often cannot be known anyway. A dissenter who keeps arguing can also half-execute the choice they lost, which makes the outcome worse whichever option was right. Separating \"do you agree\" from \"will you commit\" lets the disagreement be stated fully and the work still go ahead at full effort.",
      "counter": {
        "name": "Groupthink",
        "note": "a culture that prizes commitment teaches people to stop objecting early, and silent compliance hides the dissent that would have caught the error"
      },
      "guideline": "State your disagreement once, in full, with your reasons. Then say \"I disagree and commit\" and execute as if it were your idea. If you are the senior person, do it too: back the team's call instead of making them convince you. For an irreversible decision, or one with a safety or ethical risk, do not commit quietly: escalate.",
      "source": "Jeff Bezos, *2016 Letter to Shareholders* (Amazon.com, Inc., 2017) — \"use the phrase 'disagree and commit'\", with the Amazon Studios example. The phrase predates Amazon: Karen Southwick, *High Noon* (1999), records Scott McNealy using it at Sun Microsystems, and it is also attributed to Intel."
    },
    "ja": {
      "title": "反対してもコミットする",
      "concept": "全員の同意を待つより、決めて実行し、誤りなら軌道修正するほうが速いことが多い。",
      "mechanism": "合意を求める集団では、決定は最も粘る懐疑派の速度でしか進まない。しかも議論の終盤では、正解は分からないことが多い。議論に負けた反対者が、決まった方針を半端にしか実行しないこともあり、どちらが正しかったにせよ結果を悪くする。「同意するか」と「コミットするか」を分ければ、反対は全部言い切ったうえで、実行は全力で進められる。",
      "counter": {
        "name": "集団浅慮",
        "note": "コミットを重んじる文化では、人は早々に反対をやめることを覚える。黙って従えば、誤りを見つけたはずの異論が表に出なくなる"
      },
      "guideline": "反対意見は一度、理由とともに全部言え。そのうえで「反対だがコミットする」と宣言し、自分の案だったかのように実行せよ。立場が上の人も同じことをせよ。チームに自分を説得させるのではなく、チームの判断を支えよ。ただし取り返しのつかない決定や、安全・倫理上のリスクがある決定では、黙ってコミットせずエスカレーションせよ。",
      "source": "Jeff Bezos『2016 年 株主への手紙』（Amazon.com, Inc.、2017 年）。\"use the phrase 'disagree and commit'\" と Amazon Studios の例。語句自体は Amazon 以前からある。Karen Southwick『High Noon』(1999) は Sun Microsystems の Scott McNealy がこの語を使っていたと記しており、Intel 発祥とする説もある。"
    }
  },
  {
    "slug": "you-build-it-you-run-it",
    "number": 77,
    "tag": "operations",
    "sourceUrl": "https://queue.acm.org/detail.cfm?id=1142065",
    "seeAlso": [
      "conways-law",
      "toil",
      "mechanisms-not-good-intentions"
    ],
    "figure": {
      "kind": "company",
      "name": "Amazon",
      "monogram": "A",
      "image": null,
      "logo": "/figures/you-build-it-you-run-it.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); Amazon is a trademark of Amazon.com, Inc.",
        "page": "https://commons.wikimedia.org/wiki/File:Amazon_2024.svg"
      }
    },
    "en": {
      "title": "You Build It, You Run It",
      "concept": "When the team that writes a service also operates it, the cost of every operational weakness lands on the people who can fix it.",
      "mechanism": "When software is thrown over a wall to a separate operations team, the people who take the page and face the angry customer are not the people who can change the code, so the fix arrives late or as a workaround. Developers who are paged for their own service learn which shortcuts hurt, and design for failure because they are the ones who will be woken up. Running it also puts them in daily contact with customers, which shortens the path from a complaint to a change. The incentive only works when the ownership is real: the team has to be able to change what it is paged for.",
      "counter": {
        "name": "Developer Cognitive Load",
        "note": "owning the whole cycle widens what each developer must know and the priorities they juggle every week; without shared tooling and an on-call rotation it ends in burnout, and Netflix, which runs the model, steers people who want depth over breadth into other roles"
      },
      "guideline": "Put the team that ships a service on its pager, and give it the authority and the deploy rights to fix what pages it. Pair that with a paved road (shared deploy, observability and alerting tooling) and a rotation, so no one person is on call for everything. Do not apply it to a team that cannot change the thing it is woken up for; that hands over the pager, not the ownership.",
      "source": "Jim Gray, \"A Conversation with Werner Vogels\", *ACM Queue* 4(4) (2006) — Amazon's CTO on why every service team runs what it builds: \"You build it, you run it.\" The trade-off is from Philip Fisher-Ogden, Greg Burrell & Dianne Marsh, *Full Cycle Developers at Netflix — Operate What You Build* (Netflix Technology Blog, 2018)."
    },
    "ja": {
      "title": "作った者が運用する",
      "concept": "サービスを作るチームが運用も担えば、運用上の弱点のコストは、それを直せる人のところに落ちる。",
      "mechanism": "ソフトウェアを壁の向こうの運用チームに投げ渡すと、呼び出しを受けて怒った顧客に向き合う人と、コードを変えられる人が別々になる。だから修正は遅れるか、回避策で終わる。自分のサービスで呼び出される開発者は、どの手抜きが痛いかを身をもって知り、夜中に起こされるのが自分なので障害を前提に設計する。運用していれば顧客とも日々接するので、苦情から変更までの距離も縮まる。ただしこの動機づけが働くのは、所有が本物のときだけだ。呼び出される原因を、チーム自身が変えられなければならない。",
      "counter": {
        "name": "開発者の認知負荷",
        "note": "全サイクルを持つと、開発者一人が知るべきことと毎週抱える優先事項が増える。共通の道具と当番制がなければ燃え尽きに行き着く。このモデルを採る Netflix も、幅より深さを求める人には別の役割を用意している"
      },
      "guideline": "サービスを出荷したチームをそのサービスの呼び出し当番に就け、呼び出しの原因を直す権限とデプロイ権限も渡せ。デプロイ、可観測性、アラートの共通基盤（舗装された道）と当番制を組み合わせ、一人が全部を抱えないようにせよ。呼び出される対象を自分で変えられないチームには適用するな。それは所有ではなく、呼び出しだけを押し付けている。",
      "source": "Jim Gray「A Conversation with Werner Vogels」『ACM Queue』4(4) (2006)。Amazon の CTO が、各サービスチームが作ったものを自分で運用する理由を語ったインタビューで、\"You build it, you run it.\" の出典。トレードオフは Philip Fisher-Ogden, Greg Burrell & Dianne Marsh『Full Cycle Developers at Netflix — Operate What You Build』(Netflix Technology Blog, 2018) から。"
    }
  },
  {
    "slug": "static-stability",
    "number": 78,
    "tag": "distributed-systems",
    "sourceUrl": "https://builder.aws.com/content/3K9SiqiJ369TGkkGzqPM95BuYWI/static-stability-using-availability-zones",
    "seeAlso": [
      "avoid-fallback",
      "constant-work",
      "fallacies-of-distributed-computing"
    ],
    "figure": {
      "kind": "company",
      "name": "Amazon Web Services",
      "monogram": "AW",
      "image": null,
      "logo": "/figures/static-stability.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); AWS is a trademark of Amazon.com, Inc.",
        "page": "https://commons.wikimedia.org/wiki/File:Amazon_Web_Services_2025.svg"
      }
    },
    "en": {
      "title": "Static Stability",
      "concept": "A system that has to take new action to survive a failure depends on that action succeeding at the moment things are going wrong.",
      "mechanism": "Recovering from a failure usually means doing something the system does not do in normal operation: launching replacement instances, calling a control plane, changing routes. Control planes are more complex than data planes and are the parts most likely to misbehave when the wider system is impaired, so recovery leans on whatever is weakest during the event. A statically stable design keeps working when a dependency is impaired, because the capacity and state it needs are already in place. AWS runs zonal services across three Availability Zones overprovisioned by 50 percent, so losing one leaves the other two able to carry the load without launching anything.",
      "counter": {
        "name": "Cost of Idle Capacity",
        "note": "capacity held for a failure that rarely happens is paid for every day, and scaling to demand is cheaper wherever a slow recovery is acceptable; the source itself concedes that keeping zones independent adds complexity"
      },
      "guideline": "List what your service must do to recover from losing a zone or a dependency. For every step that calls a control plane or launches something, decide whether to have it in place beforehand instead: spare capacity in every zone, the last good configuration cached locally, serving that continues while the control plane is down. Reserve this for paths whose failure you cannot afford; elsewhere, scale on demand.",
      "source": "Becky Weiss & Mike Furr, *Static stability using Availability Zones* (Amazon Builders' Library, 2019) — \"In a statically stable design, the overall system keeps working even when a dependency becomes impaired\", with EC2's control-plane/data-plane split and the 50 percent overprovisioning across three zones."
    },
    "ja": {
      "title": "静的安定性",
      "concept": "障害を乗り切るために新しい動作を必要とするシステムは、まさに状況が悪いときにその動作が成功することに賭けている。",
      "mechanism": "障害からの復旧には、普段はしないことが伴うのが普通だ。代わりのインスタンスを起動する、コントロールプレーンを呼ぶ、経路を切り替える。コントロールプレーンはデータプレーンより複雑で、システム全体が傷んでいるときにこそおかしくなりやすい。つまり復旧は、障害の最中にいちばん弱い部分に寄りかかる。静的に安定した設計では、依存先が劣化してもシステム全体は動き続ける。必要な容量と状態があらかじめそろっているからだ。AWS はゾーン単位のサービスを 3 つのアベイラビリティーゾーンに 50% の余剰を持たせて動かし、1 つを失っても残り 2 つが何も起動せずに負荷を引き受けられるようにしている。",
      "counter": {
        "name": "遊休容量のコスト",
        "note": "まれにしか起きない障害のための容量は、毎日支払うことになる。復旧が遅くても許される場所では、需要に合わせて伸縮させるほうが安い。ゾーンを互いに独立させれば複雑さが増すことは、出典自身も認めている"
      },
      "guideline": "ゾーンや依存先を一つ失ったとき、サービスが復旧のために何をしなければならないかを書き出せ。コントロールプレーンを呼ぶ手順、何かを起動する手順のそれぞれについて、代わりに事前に用意しておけないかを決めよ。全ゾーンに予備の容量を置く、最後に正常だった設定を手元にキャッシュする、コントロールプレーンが落ちても配信を続ける。これは失敗が許されない経路に限れ。それ以外は需要に応じて伸縮させよ。",
      "source": "Becky Weiss & Mike Furr『Static stability using Availability Zones』(Amazon Builders' Library, 2019)。\"In a statically stable design, the overall system keeps working even when a dependency becomes impaired\" という定義、EC2 のコントロールプレーンとデータプレーンの区別、3 ゾーンでの 50% の余剰の出典。"
    }
  },
  {
    "slug": "avoid-fallback",
    "number": 79,
    "tag": "distributed-systems",
    "sourceUrl": "https://builder.aws.com/content/3EuS9Sakq7L3VLQIF3qzfMfke1Y/avoiding-fallback-in-distributed-systems",
    "seeAlso": [
      "static-stability",
      "constant-work",
      "ironies-of-automation",
      "chaos-engineering"
    ],
    "figure": {
      "kind": "company",
      "name": "Amazon Web Services",
      "monogram": "AW",
      "image": null,
      "logo": "/figures/avoid-fallback.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); AWS is a trademark of Amazon.com, Inc.",
        "page": "https://commons.wikimedia.org/wiki/File:Amazon_Web_Services_2025.svg"
      }
    },
    "en": {
      "title": "Avoid Fallback",
      "concept": "A fallback path runs only after something has already failed, so the least-tested code in the system runs under the worst conditions.",
      "mechanism": "Fallback code sits idle in normal operation, so its bugs, its capacity limits and its stale data go unnoticed until it is needed. It then switches on in the middle of an outage, when load is unusual and other parts are degraded, and adds a new mode to a system that is already behaving strangely. A fallback to a cache or a secondary service can also move load onto something never sized for it, widening a partial failure. Amazon's conclusion is that the effort is usually better spent making the primary path more available.",
      "counter": {
        "name": "Graceful Degradation",
        "note": "returning a reduced answer beats returning an error when the reduced path runs all the time, as when a recommendations panel falls back to a static list it serves anyway; the danger is the path that never runs, not degradation itself"
      },
      "guideline": "Before adding a fallback, ask whether the same effort would make the primary path more available: push data to the caller ahead of time instead of pulling it at request time, add redundancy. If you keep a fallback, run it in production continuously, not only on failure, and treat its output as an equally valid source. Delete fallback paths nobody has exercised.",
      "source": "Jacob Gabrielson, *Avoiding fallback in distributed systems* (Amazon Builders' Library, 2019) — \"At Amazon, we avoid fallback in our systems because it's difficult to prove and its effectiveness is hard to test.\""
    },
    "ja": {
      "title": "フォールバックを避ける",
      "concept": "フォールバック経路は何かがすでに壊れたあとでしか動かない。だから、システムでいちばん試されていないコードが最悪の条件で走る。",
      "mechanism": "フォールバックのコードは平常時には眠っているので、そのバグも、容量の限界も、古くなったデータも、必要になるまで誰も気づかない。そして障害の最中、負荷がいつもと違い、ほかの部分も劣化しているときに動き出し、すでにおかしな振る舞いをしているシステムに新しいモードを一つ足す。キャッシュや予備のサービスへのフォールバックは、その負荷を想定していない場所に負荷を移し、部分的な障害を広げることもある。Amazon の結論は、その労力は主経路の可用性を上げるほうに使うべきだというものだ。",
      "counter": {
        "name": "グレースフル・デグラデーション",
        "note": "縮退した経路が常に動いているなら、エラーを返すより縮退した答えを返すほうがよい。おすすめ欄が普段から出している固定リストに切り替える場合などだ。危ないのは縮退そのものではなく、普段一度も動かない経路だ"
      },
      "guideline": "フォールバックを足す前に、同じ労力で主経路の可用性を上げられないかを問え。リクエストのたびに取りに行くのではなく事前に呼び出し側へデータを押し込む、冗長化する、といった手だ。フォールバックを残すなら、障害時だけでなく本番で常に動かし、その出力を主経路と同等に正当なデータ源として扱え。誰も動かしたことのないフォールバック経路は消せ。",
      "source": "Jacob Gabrielson『Avoiding fallback in distributed systems』(Amazon Builders' Library, 2019)。\"At Amazon, we avoid fallback in our systems because it's difficult to prove and its effectiveness is hard to test.\" の出典。"
    }
  },
  {
    "slug": "constant-work",
    "number": 80,
    "tag": "distributed-systems",
    "sourceUrl": "https://builder.aws.com/content/3F05oqNtNUWxHJ5r6L6I2HrH4rI/reliability-constant-work-and-a-good-cup-of-coffee",
    "seeAlso": [
      "static-stability",
      "avoid-fallback"
    ],
    "figure": {
      "kind": "company",
      "name": "Amazon Web Services",
      "monogram": "AW",
      "image": null,
      "logo": "/figures/constant-work.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); AWS is a trademark of Amazon.com, Inc.",
        "page": "https://commons.wikimedia.org/wiki/File:Amazon_Web_Services_2025.svg"
      }
    },
    "en": {
      "title": "Constant Work",
      "concept": "A system whose work grows with load or failure has a behaviour it only shows under stress, and that is where it breaks.",
      "mechanism": "Most systems do more work as conditions get worse: more retries, more changes to propagate, more health transitions to process. That extra work arrives when the system has the least headroom, and the code that handles it is the code that runs least often. A constant-work design does the same amount regardless: Route 53's health checkers send a fixed-size table of every status on a schedule, and Network Load Balancer nodes reload their full configuration from S3 every few seconds even when nothing has changed. A surge of failures produces no extra work, so there is no overload mode to discover in production.",
      "counter": {
        "name": "Elasticity",
        "note": "doing the full work every cycle wastes resources when little has changed; for configuration and health status the cost is negligible, but for a web fleet the savings from scaling with load usually win over running peak capacity all day"
      },
      "guideline": "For control loops that propagate configuration or health, send the whole state on a fixed schedule instead of deltas on change, and size the payload for the maximum, not the typical case. Keep the amount of work independent of how many things changed. Use it where the work is small; for request-serving capacity, scale with load and design the overload case explicitly.",
      "source": "Colm MacCárthaigh, *Reliability, constant work, and a good cup of coffee* (Amazon Builders' Library, 2021) — the coffee-urn analogy, the Route 53 health-check and Network Load Balancer configuration examples, and the admission that physical constant work \"usually come[s] at the cost of waste.\""
    },
    "ja": {
      "title": "一定の作業量",
      "concept": "負荷や障害に応じて仕事が増えるシステムには、負荷がかかったときにしか現れない振る舞いがあり、壊れるのはそこだ。",
      "mechanism": "多くのシステムは、状況が悪くなるほど仕事が増える。再試行が増え、伝播すべき変更が増え、処理すべきヘルス状態の遷移が増える。その追加の仕事は余力がいちばん少ないときにやって来て、それを処理するのはいちばん動いていないコードだ。一定の作業量で動く設計は、状況にかかわらず同じだけ仕事をする。Route 53 のヘルスチェッカーは全ステータスを収めた固定長の表を決まった間隔で送り、Network Load Balancer のノードは何も変わっていなくても数秒ごとに S3 から設定全体を読み込み直す。障害が一斉に起きても仕事は増えないので、本番で初めて出会う過負荷モードがない。",
      "counter": {
        "name": "伸縮性",
        "note": "毎回すべての仕事をすれば、ほとんど何も変わっていないときに資源を無駄にする。設定やヘルス状態の伝播ならコストは無視できるが、Web サーバー群では、ピーク容量を一日中動かすより負荷に合わせて伸縮させる節約のほうがたいてい勝つ"
      },
      "guideline": "設定やヘルス状態を伝播する制御ループでは、変更のたびに差分を送るのではなく、決まった間隔で状態全体を送れ。ペイロードは平均ではなく最大に合わせて設計せよ。仕事の量を、変わったものの数に依存させるな。これは仕事が小さい場所で使え。リクエストを処理する容量は負荷に応じて伸縮させ、過負荷時の振る舞いを明示的に設計せよ。",
      "source": "Colm MacCárthaigh『Reliability, constant work, and a good cup of coffee』(Amazon Builders' Library, 2021)。コーヒーアーンのたとえ、Route 53 のヘルスチェックと Network Load Balancer の設定配布の例、物理的な一定作業は \"usually come at the cost of waste\" という認めの出典。"
    }
  },
  {
    "slug": "mechanisms-not-good-intentions",
    "number": 81,
    "tag": "organization",
    "sourceUrl": "https://aws.amazon.com/blogs/enterprise-strategy/strategy-is-a-winding-road-mechanisms-keep-you-on-track/",
    "seeAlso": [
      "blameless-postmortem",
      "goodharts-law",
      "you-build-it-you-run-it",
      "context-not-control"
    ],
    "figure": {
      "kind": "company",
      "name": "Amazon",
      "monogram": "A",
      "image": null,
      "logo": "/figures/mechanisms-not-good-intentions.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); Amazon is a trademark of Amazon.com, Inc.",
        "page": "https://commons.wikimedia.org/wiki/File:Amazon_2024.svg"
      }
    },
    "en": {
      "title": "Mechanisms, Not Good Intentions",
      "concept": "Asking people to try harder after a failure changes little, because the failure happened to people who were already trying.",
      "mechanism": "Most mistakes are made by people who meant well and knew the rule, so telling them again adds nothing they lacked. Attention is finite and fades, so a fix that depends on someone remembering holds for a few weeks before the same error comes back. What changes behaviour is a mechanism: a tool, its actual adoption, and inspection that checks whether it works. A checklist nobody reads is not a mechanism; a gate that blocks the merge is.",
      "counter": {
        "name": "Resist Proxies",
        "note": "a mechanism can harden into the goal; once following the process is what gets judged, people defend a bad outcome by saying they followed it, and nobody asks whether the process still serves the result"
      },
      "guideline": "When a postmortem action item says \"be more careful\", \"remind the team\" or \"double-check\", replace it with a change that works without anyone remembering: a CI check, a safe default, a field that cannot be skipped. Give each one an owner and a date to inspect whether it is used and whether it worked. Retire mechanisms that no longer change outcomes.",
      "source": "An internal Amazon saying, not a published Bezos text. Gregor Hohpe, *Strategy Is a Winding Road. Mechanisms Keep You on Track.* (AWS Enterprise Strategy blog, 2021) records \"At Amazon we have a common saying: 'Good intentions don't work—mechanisms do'\" and defines a mechanism as tools, adoption and inspection; attributions of the line to Jeff Bezos are secondhand. The counter-force is from Jeff Bezos, *2016 Letter to Shareholders* (Amazon.com, Inc., 2017): \"The process is not the thing.\""
    },
    "ja": {
      "title": "善意ではなく仕組み",
      "concept": "失敗のあとで「もっと気をつけろ」と求めても、ほとんど何も変わらない。失敗した人は、もともと気をつけていたからだ。",
      "mechanism": "ミスの多くは、善意があり、ルールも知っている人が起こす。だからもう一度言い聞かせても、その人に欠けていたものは何も足されない。注意力は有限で、時間とともに薄れる。誰かが覚えていることに頼る対策は数週間はもつが、やがて同じ誤りが戻ってくる。行動を変えるのは仕組みだ。道具と、その道具が実際に使われていることと、それが機能しているかを確かめる点検の三つがそろったものを指す。誰も読まないチェックリストは仕組みではない。マージを止めるゲートは仕組みだ。",
      "counter": {
        "name": "代理指標に抗う",
        "note": "仕組みは、それ自体が目的に固まりうる。プロセスに従ったかどうかで評価されるようになると、人は悪い結果を「プロセスどおりにやった」と弁護し、そのプロセスがまだ結果の役に立っているかを誰も問わなくなる"
      },
      "guideline": "ポストモーテムの対策項目が「注意する」「チームに周知する」「ダブルチェックする」なら、誰も覚えていなくても働く変更に置き換えよ。CI のチェック、安全な既定値、飛ばせない入力欄などだ。それぞれに担当者と、使われているか、効いたかを点検する期日を付けよ。もう結果を変えていない仕組みは廃止せよ。",
      "source": "Amazon 社内の言い回しで、Bezos の公表文書が出典ではない。Gregor Hohpe『Strategy Is a Winding Road. Mechanisms Keep You on Track.』(AWS Enterprise Strategy blog, 2021) が \"At Amazon we have a common saying: 'Good intentions don't work—mechanisms do'\" と記録し、仕組みを道具・採用・点検からなるものと定義している。Jeff Bezos の言葉とする説は二次資料による。対抗する力は Jeff Bezos『2016 年 株主への手紙』（Amazon.com, Inc.、2017 年）の \"The process is not the thing.\" から。"
    }
  },
  {
    "slug": "andon",
    "number": 82,
    "tag": "operations",
    "sourceUrl": "https://global.toyota/en/company/vision-and-philosophy/production-system/",
    "seeAlso": [
      "normalization-of-deviance",
      "error-budget",
      "five-whys"
    ],
    "figure": {
      "kind": "company",
      "name": "Toyota",
      "monogram": "T",
      "image": null,
      "logo": "/figures/andon.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); Toyota is a trademark of Toyota Motor Corporation",
        "page": "https://commons.wikimedia.org/wiki/File:Toyota_Symbol.svg"
      }
    },
    "en": {
      "title": "Andon (Stop the Line)",
      "concept": "Letting anyone who sees an abnormality stop the line keeps a defect from travelling downstream, where it costs more to find and fix.",
      "mechanism": "A defect caught where it is made has one cause and an obvious fix; the same defect found three stations later is buried under work built on top of it, and the person who could explain it has moved on. Pressure to keep the line moving makes each worker discount what they saw and assume someone downstream will catch it. Toyota's jidoka moved the decision into the station: first a loom that stopped itself when a thread broke, later a cord any operator can pull to halt the line and light the andon board. The stop is not the point; it forces the abnormality to be examined while the evidence is still fresh.",
      "counter": {
        "name": "Alarm Fatigue",
        "note": "when the stop signal fires often or falsely, people learn to route around it, and throughput pressure turns every pull of the cord into a cost someone has to justify"
      },
      "guideline": "Make a red main-branch build, a failed canary or a breached SLO halt further merges or deploys for everyone, and let anyone pull that cord without asking permission. Keep the trigger narrow enough that it rarely fires falsely, and treat a stop that nobody investigates as a defect in the cord, not in the person who pulled it.",
      "source": "Toyota Motor Corporation, *Toyota Production System* (official page, global.toyota) — jidoka, the andon board and the stop cord any operator can pull, traced to Sakichi Toyoda's 1896 power loom that stopped when a weft thread broke; the page credits Taiichi Ohno (1912–1990) with building the system's foundation."
    },
    "ja": {
      "title": "アンドン（ラインを止める）",
      "concept": "異常に気づいた誰もがラインを止められれば、欠陥は下流に流れず、見つけるのも直すのも高くつく前に捕まる。",
      "mechanism": "欠陥は、作られたその場で捕まえれば原因は一つで、直し方も明らかだ。三工程先で見つかった同じ欠陥は、その上に積まれた作業の下に埋もれ、事情を説明できた人はもう別の仕事をしている。ラインを動かし続けろという圧力があると、作業者は自分が見たものを軽く見積もり、下流の誰かが気づくだろうと考える。トヨタの自働化は、この判断を工程の中に移した。最初は糸が切れると自ら止まる織機、のちにはどの作業者も引けばラインを止めてアンドンを点灯させられる紐だ。止めること自体が目的なのではない。証拠が新しいうちに、異常を調べざるを得なくすることが目的だ。",
      "counter": {
        "name": "アラーム疲れ",
        "note": "停止の合図が頻繁に、あるいは誤って鳴ると、人はそれを迂回することを覚える。スループットへの圧力がかかると、紐を引くたびに誰かがその代償を説明させられるようになる"
      },
      "guideline": "main ブランチのビルドが赤い、カナリアが失敗した、SLO を割った、といったときには、全員のマージやデプロイが止まるようにせよ。その紐は誰でも許可なく引けるようにせよ。誤発火がめったに起きない程度に条件を絞り、止めたのに誰も調べない停止は、引いた人ではなく紐の側の欠陥として扱え。",
      "source": "トヨタ自動車「トヨタ生産方式」（global.toyota の公式ページ）。自働化、アンドン（異常表示盤）、どの作業者も引ける停止紐の出典。その源流を、緯糸が切れると止まる豊田佐吉の動力織機（1896 年）に求めている。同ページは大野耐一（1912–1990）がこの方式の基礎を築いたとしている。"
    }
  },
  {
    "slug": "five-whys",
    "number": 83,
    "tag": "operations",
    "sourceUrl": "https://www.routledge.com/Toyota-Production-System-Beyond-Large-Scale-Production/Ohno/p/book/9780915299140",
    "seeAlso": [
      "swiss-cheese-model",
      "normal-accident-theory",
      "blameless-postmortem",
      "andon",
      "xy-problem"
    ],
    "figure": {
      "kind": "person",
      "name": "Taiichi Ohno",
      "monogram": "TO",
      "image": "/figures/five-whys.webp",
      "logo": null,
      "credit": {
        "author": "Toyota Motor Corporation company history editorial committee",
        "license": "Public domain in Japan",
        "page": "https://commons.wikimedia.org/wiki/File:Ohno-Taiichi-1.jpg"
      }
    },
    "en": {
      "title": "Five Whys",
      "concept": "The first answer to \"why did this fail\" is usually a symptom, and fixing a symptom leaves the cause in place to fail again.",
      "mechanism": "Investigations stop at the first cause that someone could plausibly have prevented, because it closes the ticket and names an action. That cause is usually the one nearest in time (a bad config push, a full disk), and fixing it removes this instance without touching whatever produced it. Asking why again of each answer walks the chain back to a condition (a missing check, a process nobody owns) whose fix prevents a whole class of failures. Five is a rule of thumb, not a required depth.",
      "counter": {
        "name": "Swiss Cheese Model",
        "note": "a single chain of whys picks one path through an accident that had several, the analyst's choice at each step decides which root cause comes out, and in complex systems there is often no single root to find"
      },
      "guideline": "In the postmortem, keep asking why of each answer until you reach something the team can change that would have stopped the chain, and give that change an owner. Branch whenever an answer has more than one cause, and never stop at a person: \"the engineer made a mistake\" is a cue to ask why the mistake was easy to make.",
      "source": "Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production* (Productivity Press, 1988; originally 『トヨタ生産方式』, Diamond, 1978), ch. 2 \"Evolution of the Toyota Production System\", section \"Repeating Why Five Times\" — the method as the basis of Toyota's approach to problems."
    },
    "ja": {
      "title": "なぜなぜ五回",
      "concept": "「なぜ失敗したか」への最初の答えはたいてい症状であり、症状だけを直せば原因は残って、また同じ失敗を起こす。",
      "mechanism": "調査は、誰かが防げたはずだと言える最初の原因で止まりがちだ。そこで止めればチケットを閉じられ、対策も一つ書けるからだ。その原因はたいてい時間的にいちばん近いもの（誤った設定の投入、ディスクの枯渇）で、直してもこの一件が消えるだけで、それを生んだものには手が付かない。答えのそれぞれに対してもう一度なぜと問えば、連鎖をさかのぼって、直せば同じ種類の失敗をまとめて防げる条件（欠けていたチェック、持ち主のいないプロセス）に行き着く。五回は目安であって、必要な深さではない。",
      "counter": {
        "name": "スイスチーズモデル",
        "note": "一本のなぜの連鎖は、複数の経路があった事故から一本だけを選び出す。各段で分析者が何を選ぶかで、出てくる根本原因が変わる。複雑なシステムでは、そもそも単一の根本原因など存在しないことが多い"
      },
      "guideline": "ポストモーテムでは、答えのそれぞれになぜを問い続け、チームが変えられて、変えていれば連鎖を断てたものに行き着くまで進め。その変更には担当者を付けよ。一つの答えに原因が複数あるなら枝分かれさせ、人で止めるな。「エンジニアがミスをした」は、なぜそのミスが起こしやすかったかを問う合図だ。",
      "source": "大野耐一『トヨタ生産方式：脱規模の経営をめざして』（ダイヤモンド社、1978 年）。英訳 *Toyota Production System: Beyond Large-Scale Production* (Productivity Press, 1988) 第 2 章「Evolution of the Toyota Production System」の節「Repeating Why Five Times」。トヨタの問題解決の基本としての「なぜを五回繰り返す」の出典。"
    }
  },
  {
    "slug": "chaos-engineering",
    "number": 84,
    "tag": "operations",
    "sourceUrl": "https://principlesofchaos.org/",
    "seeAlso": [
      "murphys-law",
      "fallacies-of-distributed-computing",
      "avoid-fallback"
    ],
    "figure": {
      "kind": "company",
      "name": "Netflix",
      "monogram": "N",
      "image": null,
      "logo": "/figures/chaos-engineering.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); Netflix is a trademark of Netflix, Inc.",
        "page": "https://commons.wikimedia.org/wiki/File:Netflix_2016_N_logo.svg"
      }
    },
    "en": {
      "title": "Chaos Engineering",
      "concept": "Resilience that has never been exercised is a hypothesis, and production will test it whether or not you schedule the test.",
      "mechanism": "Failover paths, retries and redundancy run only when something breaks, so they decay between failures: a config drifts, a dependency is added, a timeout changes, and nobody notices until the real outage. Staging cannot reproduce production's traffic, data and coupling, so a test there says little about the system people actually use. Injecting failure on purpose, in production, against a stated hypothesis about steady-state behaviour, makes those weaknesses show up on a weekday afternoon with engineers watching instead of at 3 a.m. Netflix built Chaos Monkey early in its move to AWS to kill instances at random, so every service had to survive losing one.",
      "counter": {
        "name": "Minimize Blast Radius",
        "note": "experimenting in production can hurt real customers, and an experiment on a system already known to be fragile only confirms what you knew; fix it first, then start with the smallest scope that can show a result"
      },
      "guideline": "Pick one dependency, write down what steady state should look like while it is down, and take it away in production during working hours with an abort switch and someone watching. Start with a small slice of traffic, widen only after the system holds, and do not experiment on a service you already expect to fall over.",
      "source": "*Principles of Chaos Engineering* (principlesofchaos.org, last updated March 2019) — the definition, the steady-state hypothesis, running experiments in production and minimizing blast radius; Netflix Technology Blog, *5 Lessons We've Learned Using AWS* (2010) — the introduction of Chaos Monkey."
    },
    "ja": {
      "title": "カオスエンジニアリング",
      "concept": "一度も試されていない耐障害性は仮説にすぎない。予定を組もうと組むまいと、本番がいずれそれを試す。",
      "mechanism": "フェイルオーバー、リトライ、冗長構成は、何かが壊れたときにしか動かない。だから障害と障害の間に劣化する。設定がずれ、依存が増え、タイムアウトが変わっても、本物の障害が来るまで誰も気づかない。ステージングは本番のトラフィックもデータも結合も再現できないので、そこでの試験は人が実際に使うシステムについてほとんど何も語らない。定常状態についての仮説を立てたうえで本番に意図的に障害を注入すれば、弱点は深夜 3 時ではなく、エンジニアが見ている平日の午後に表に出る。Netflix は AWS への移行初期に、インスタンスを無作為に落とす Chaos Monkey を作り、どのサービスも一台失っても生き残るよう求めた。",
      "counter": {
        "name": "影響範囲の最小化",
        "note": "本番での実験は実際の顧客を傷つけうる。もろいと分かっているシステムで実験しても分かっていたことを確かめるだけだ。まず直し、結果が見える最小の範囲から始めるべきだ"
      },
      "guideline": "依存先を一つ選び、それが落ちている間の定常状態がどうあるべきかを書き出し、業務時間中に中止スイッチと見張り役を用意したうえで、本番でそれを取り除け。小さなトラフィックの一部から始め、システムが持ちこたえてから範囲を広げよ。倒れると分かっているサービスでは実験するな。",
      "source": "『Principles of Chaos Engineering』（principlesofchaos.org、2019 年 3 月最終更新）。定義、定常状態の仮説、本番での実験、影響範囲の最小化の出典。Netflix Technology Blog「5 Lessons We've Learned Using AWS」(2010) は Chaos Monkey を初めて紹介した記事。"
    }
  },
  {
    "slug": "context-not-control",
    "number": 85,
    "tag": "organization",
    "sourceUrl": "https://jobs.netflix.com/culture",
    "seeAlso": [
      "conways-law",
      "mechanisms-not-good-intentions",
      "curse-of-knowledge"
    ],
    "figure": {
      "kind": "company",
      "name": "Netflix",
      "monogram": "N",
      "image": null,
      "logo": "/figures/context-not-control.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); Netflix is a trademark of Netflix, Inc.",
        "page": "https://commons.wikimedia.org/wiki/File:Netflix_2016_N_logo.svg"
      }
    },
    "en": {
      "title": "Context, Not Control",
      "concept": "Rules and approvals scale worse than shared understanding; people given the reasons behind a goal make better local decisions than people given a procedure.",
      "mechanism": "A rule encodes someone's judgement about the cases they could foresee, so it fails on the ones they could not, and every approval step sends a decision to a person with less detail than the one asking. As a company grows, each incident adds a rule and rules accumulate faster than anyone removes them, until people follow the procedure instead of thinking about the outcome. When managers spend their effort on the why (the goal, the constraints, what good looks like), the people closest to the work can decide quickly and still pull in the same direction. Netflix calls the result \"highly aligned and loosely coupled\".",
      "counter": {
        "name": "Guardrails",
        "note": "some failures (a leaked credential, a compliance breach, an irreversible deletion) cost too much to leave to judgement, and context does nothing for a newcomer who has not absorbed it yet"
      },
      "guideline": "When a team makes a call you would have made differently, ask what context they were missing before you write a rule, and fix the context first. Keep hard controls (approval gates, enforced policy) for decisions that are irreversible, unethical or a material risk, and record why each one exists so it can be removed when the reason goes away.",
      "source": "Netflix, *Netflix Culture Memo* (jobs.netflix.com) — \"context not control\", \"highly aligned and loosely coupled\", and keeping rules to a minimum to avoid the process creep that comes with growth."
    },
    "ja": {
      "title": "統制ではなく文脈を",
      "concept": "ルールと承認は、共有された理解ほどにはスケールしない。手順を渡された人より、目標の背景を渡された人のほうが、現場でよい判断をする。",
      "mechanism": "ルールは、書いた人が予見できた場面についての判断を固めたものだ。だから予見できなかった場面では外れる。承認の一段一段は、判断を、頼む側より細部を知らない人へ送る。会社が大きくなると、障害のたびにルールが一つ増え、減るより速く積み上がり、やがて人は結果ではなく手順のほうを考えるようになる。管理者が力を「なぜ」（目標、制約、何がよい状態か）に注げば、仕事にいちばん近い人がすばやく決め、しかも同じ方向に進める。Netflix はこの状態を「高度に整合し、疎に結合した」と呼ぶ。",
      "counter": {
        "name": "ガードレール",
        "note": "一部の失敗（認証情報の漏洩、コンプライアンス違反、取り消せない削除）は判断に任せるには高くつきすぎる。文脈をまだ吸収していない新人には、文脈は役に立たない"
      },
      "guideline": "チームが自分なら違う判断をしただろう決定をしたら、ルールを書く前に、彼らに欠けていた文脈は何かを問い、まず文脈を直せ。強い統制（承認ゲート、強制されるポリシー）は、取り返しのつかない決定、倫理に反する決定、重大なリスクを伴う決定に限れ。それぞれがなぜ存在するかを書き残し、理由が消えたら外せるようにせよ。",
      "source": "Netflix『Netflix Culture Memo』（jobs.netflix.com）。「context not control」、「highly aligned and loosely coupled」、成長に伴うプロセスの肥大を避けるためにルールを最小限に保つという方針の出典。"
    }
  },
  {
    "slug": "code-health-standard",
    "number": 86,
    "tag": "maintainability",
    "sourceUrl": "https://google.github.io/eng-practices/review/reviewer/standard.html",
    "seeAlso": [
      "boy-scout-rule",
      "broken-windows-theory",
      "law-of-triviality"
    ],
    "figure": {
      "kind": "company",
      "name": "Google",
      "monogram": "G",
      "image": null,
      "logo": "/figures/code-health-standard.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); Google is a trademark of Google LLC",
        "page": "https://commons.wikimedia.org/wiki/File:Google_Favicon_2025.svg"
      }
    },
    "en": {
      "title": "Approve What Improves Code Health",
      "concept": "Holding every change to a standard of perfect makes review slow, and slow review leaves the codebase worse, not better.",
      "mechanism": "There is no perfect code, only better code, so a reviewer who waits for perfect is holding out for a bar nobody reaches while the change sits. Authors respond by batching work into large changes that get reviewed less carefully, or by not touching the code that needs it, and the improvement the change carried never lands. A bar of net improvement keeps each merge moving the codebase in the right direction, while still letting the reviewer refuse anything that makes it worse.",
      "counter": {
        "name": "Broken Windows Theory",
        "note": "a reviewer who waves each small flaw through because the change is a net improvement can still leave a codebase full of tolerated flaws, each one making the next easier to accept"
      },
      "guideline": "Approve a change once it definitely leaves the code healthier than before, even if you would have written it differently. Prefix polish with \"Nit:\" so the author can skip it, and block only on what makes the code worse: never approve a change that degrades overall code health.",
      "source": "Google, \"The Standard of Code Review\", *Google Engineering Practices Documentation* (2019) — \"favor approving a CL once it is in a state where it definitely improves the overall code health\", \"there is no such thing as 'perfect' code—there is only better code\", and \"Nit:\" for optional comments."
    },
    "ja": {
      "title": "コードの健全性を上げるなら承認する",
      "concept": "すべての変更に完璧を求めるとレビューが遅くなり、遅いレビューはコードベースを良くするどころか悪くする。",
      "mechanism": "完璧なコードは存在せず、より良いコードがあるだけだ。完璧を待つレビュアーは誰も届かない基準を掲げ、その間変更は止まる。作者は作業をまとめて大きな変更にし、そのぶんレビューは粗くなる。あるいは直すべきコードに手を出さなくなり、変更が運んでいたはずの改善は結局入らない。正味で良くなるかを基準にすれば、マージのたびにコードベースは正しい方向へ進み、しかもレビュアーは悪くする変更を拒める。",
      "counter": {
        "name": "割れ窓理論",
        "note": "正味では改善だからと小さな欠点を一つずつ通していくと、許された欠点だらけのコードベースが残り、一つ通すたびに次を通しやすくなる"
      },
      "guideline": "変更が以前よりコードを確実に健全にするなら、自分なら違う書き方をしたとしても承認せよ。磨き込みの指摘には「Nit:」を付けて作者が見送れるようにし、ブロックするのはコードを悪くする点だけにせよ。全体としてのコードの健全性を下げる変更は決して承認するな。",
      "source": "Google「The Standard of Code Review」『Google Engineering Practices Documentation』(2019)。「全体としてのコードの健全性を確実に改善する状態になったら承認を優先せよ」、「『完璧な』コードというものはない。より良いコードがあるだけだ」、任意の指摘に付ける「Nit:」の出典。"
    }
  },
  {
    "slug": "beyonce-rule",
    "number": 87,
    "tag": "maintainability",
    "sourceUrl": "https://abseil.io/resources/swe-book/html/ch11.html",
    "seeAlso": [
      "hyrums-law",
      "churn-rule"
    ],
    "figure": {
      "kind": "company",
      "name": "Google",
      "monogram": "G",
      "image": null,
      "logo": "/figures/beyonce-rule.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); Google is a trademark of Google LLC",
        "page": "https://commons.wikimedia.org/wiki/File:Google_Favicon_2025.svg"
      }
    },
    "en": {
      "title": "Beyoncé Rule",
      "concept": "Behavior that no test checks is behavior nobody changing shared code is obliged to preserve.",
      "mechanism": "A team changing infrastructure that the whole codebase uses cannot read every caller, so the only contract it can check at scale is the test suite. Whatever the suite does not exercise is invisible to them and changes without warning, not through carelessness but because nothing told them it mattered. The rule turns that blind spot into an assignment of responsibility: if an unrelated change passes all your tests and still breaks your product, the fix and the missing test are yours. It is only fair where a pervasive CI system runs everyone's tests against everyone's changes.",
      "counter": {
        "name": "Churn Rule",
        "note": "a test-shaped contract tells the changer what it broke, not that breaking it was free; the team making the change still owes its users the migration"
      },
      "guideline": "Write a test for every behavior your product relies on in a shared library or dependency, and make sure it runs in the CI that gates other people's changes. When something breaks and no test caught it, add that test before closing the incident. If you own the shared code, say up front that tests are the contract, and do not invoke the rule unless your changes actually run consumers' tests.",
      "source": "Adam Bender, \"Testing Overview\", in Winters, Manshreck & Wright, *Software Engineering at Google* (O'Reilly, 2020), ch. 11 — \"If you liked it, then you shoulda put a test on it\", invoked by infrastructure teams making changes across the entire codebase."
    },
    "ja": {
      "title": "ビヨンセ・ルール",
      "concept": "テストで確かめていない挙動は、共有コードを変える側が守る義務を負わない。",
      "mechanism": "コードベース全体が使う基盤を変えるチームは、呼び出し側をすべて読むことはできない。規模が大きくなると、確かめられる契約はテストスイートしかない。スイートが確かめていない挙動は変更する側から見えず、予告なく変わる。不注意だからではなく、それが大事だと知らせるものが何もないからだ。このルールは、その死角を責任の割り当てに変える。無関係な変更が自分たちのテストを全部通したのに製品が壊れたなら、修正も足りなかったテストも自分たちの仕事だ。これが公平に成り立つのは、誰の変更に対しても全員のテストを走らせる CI が行き渡っている場合に限られる。",
      "counter": {
        "name": "チャーンルール",
        "note": "テストの形をした契約は、変更する側に何を壊したかを教えるだけで、壊してよかったことにはならない。変更するチームは利用者への移行作業をなお負う"
      },
      "guideline": "共有ライブラリや依存先に頼っている挙動には、すべてテストを書け。そしてそのテストが、他人の変更を止める CI の中で走るようにせよ。テストが捉えられずに壊れたら、障害を閉じる前にそのテストを足せ。共有コードを持つ側なら、テストが契約だと先に宣言せよ。ただし自分の変更で利用者のテストを実際に走らせていないなら、このルールを持ち出すな。",
      "source": "Adam Bender「Testing Overview」、Winters, Manshreck & Wright『Software Engineering at Google』(O'Reilly, 2020) 第 11 章。\"If you liked it, then you shoulda put a test on it\" と、コードベース全体に変更をかける基盤チームがこのルールを使うことの出典。"
    }
  },
  {
    "slug": "churn-rule",
    "number": 88,
    "tag": "organization",
    "sourceUrl": "https://abseil.io/resources/swe-book/html/ch01.html",
    "seeAlso": [
      "beyonce-rule",
      "hyrums-law",
      "toil"
    ],
    "figure": {
      "kind": "company",
      "name": "Google",
      "monogram": "G",
      "image": null,
      "logo": "/figures/churn-rule.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); Google is a trademark of Google LLC",
        "page": "https://commons.wikimedia.org/wiki/File:Google_Favicon_2025.svg"
      }
    },
    "en": {
      "title": "Churn Rule",
      "concept": "When the team that changes shared infrastructure can push the migration onto its users, the cost of the change multiplies by the number of users.",
      "mechanism": "Each consuming team meets the change cold: it ramps up on a problem it has never seen, solves its own instance and throws the knowledge away. Across hundreds of teams that is hundreds of shallow learning curves, and dependent projects spend progressively more effort just keeping up. The team that made the change never sees the bill, so nothing pushes it to change less often or make changes cheaper. Requiring the changer to do the migration puts the cost where the decision is made, and a few experts who learn the problem once can apply it everywhere.",
      "counter": {
        "name": "Code Ownership",
        "note": "people who change a codebase they do not live in miss its local reasons, so a central migration still needs the owning team's review, and some changes only its owners can make safely"
      },
      "guideline": "If you own a library, service or platform, budget the migration as part of the change: move the callers yourself, or change in place in a backward-compatible way. Do not ship a deprecation notice and a deadline as the migration plan. Invest in the tooling that makes cross-codebase changes cheap, and send each change to the owning team for review instead of landing it unseen.",
      "source": "Titus Winters, \"What Is Software Engineering?\", in Winters, Manshreck & Wright, *Software Engineering at Google* (O'Reilly, 2020), ch. 1 — the 2012 \"Churn Rule\": \"infrastructure teams must do the work to move their internal users to new versions themselves or do the update in place, in backward-compatible fashion.\""
    },
    "ja": {
      "title": "チャーンルール",
      "concept": "共有基盤を変えるチームが移行作業を利用者に押しつけられると、変更のコストは利用者の数だけ膨らむ。",
      "mechanism": "利用側のチームはどれも、初めて見る問題にゼロから取りかかり、自分の分だけ片づけて、得た知識を捨てる。チームが何百もあれば、浅い学習が何百回も繰り返され、依存するプロジェクトは追従するだけで年々多くの手間を取られる。変更したチームにはその請求書が届かないので、変更を減らしたり安くしたりする理由がない。移行を変更する側の仕事と決めれば、コストは決定を下した場所に戻り、一度問題を深く学んだ少数の専門家がそれをすべての箇所に適用できる。",
      "counter": {
        "name": "コードオーナーシップ",
        "note": "普段住んでいないコードを変える人は、そのコードにある固有の事情を見落とす。だから集中して行う移行でもオーナーチームのレビューは要るし、オーナーにしか安全にできない変更もある"
      },
      "guideline": "ライブラリやサービス、プラットフォームを持つ側なら、移行作業を変更の一部として見積もれ。呼び出し側は自分で移すか、後方互換を保ったままその場で変えよ。非推奨の告知と期限だけを移行計画として出すな。コードベースをまたぐ変更を安くする道具に投資し、変更はそれぞれ黙って入れずにオーナーチームのレビューに回せ。",
      "source": "Titus Winters「What Is Software Engineering?」、Winters, Manshreck & Wright『Software Engineering at Google』(O'Reilly, 2020) 第 1 章。2012 年に定めた「Churn Rule」(\"infrastructure teams must do the work to move their internal users to new versions themselves or do the update in place, in backward-compatible fashion\") の出典。"
    }
  },
  {
    "slug": "fixed-time-variable-scope",
    "number": 89,
    "tag": "estimation",
    "sourceUrl": "https://basecamp.com/shapeup/1.2-chapter-03",
    "seeAlso": [
      "parkinsons-law",
      "hofstadters-law",
      "sunk-cost-fallacy"
    ],
    "figure": {
      "kind": "company",
      "name": "37signals",
      "monogram": "3",
      "image": null,
      "logo": "/figures/fixed-time-variable-scope.svg",
      "credit": {
        "author": null,
        "license": "Public domain (text logo); 37signals is a trademark of 37signals LLC",
        "page": "https://commons.wikimedia.org/wiki/File:37signals_logo.svg"
      }
    },
    "en": {
      "title": "Fixed Time, Variable Scope",
      "concept": "When scope is fixed and time is not, a project grows to fill what it is given; fixing the time instead forces it to choose what matters.",
      "mechanism": "An estimate starts from a design and ends with a number, and the number is wrong in the same direction every time because the unknowns only surface once the work is under way. When the date slips, the scope stays, since every item already has an advocate and asking for more time feels cheaper than cutting something. Fixing the time first (what *Shape Up* calls the appetite) turns the question from \"how long will this take\" into \"what is the best version we can ship in this much time\", so cutting scope becomes the normal move rather than an admission of failure. An overrun project that keeps getting extensions is the same force again, now fed by sunk cost.",
      "counter": {
        "name": "Quality as the Hidden Variable",
        "note": "under a fixed date a team that cannot or will not cut scope cuts tests, review and error handling instead, and some work (a protocol, a compliance requirement) has a floor below which no slice is worth shipping"
      },
      "guideline": "Before the work starts, decide how much time it is worth, not how long it will take, and shape the scope to fit. When the time runs out, stop by default: ship what is done if it stands on its own, otherwise reshape it and decide afresh whether to bet on it again; do not quietly extend. Cut features, never tests or review, and do not fix the time on work that cannot be sliced below a coherent minimum.",
      "source": "Ryan Singer, *Shape Up* (Basecamp, 2019), ch. 3 \"Set Boundaries\" — the appetite and \"fixed time, variable scope\"; ch. 8 \"The Betting Table\" — the circuit breaker: \"by default the project doesn't get an extension\". Earlier, 37signals, *Getting Real* (2006), \"Fix Time and Budget, Flex Scope\": \"Never throw more time or money at a problem, just scale back the scope.\""
    },
    "ja": {
      "title": "時間を固定し、範囲を変える",
      "concept": "範囲を固定して時間を固定しないと、仕事は与えられた時間いっぱいまで膨らむ。時間を固定すれば、何が大事かを選ばざるを得なくなる。",
      "mechanism": "見積りは設計から始まって数字で終わる。そしてその数字は毎回同じ方向に外れる。未知のことは作業が進んでから初めて表に出るからだ。期日がずれても範囲は残る。どの項目にも推す人がいて、何かを削るより時間を延ばすほうが安く感じられる。先に時間を固定すると（『Shape Up』はこれを「アペタイト」と呼ぶ）、問いは「どれだけかかるか」から「この時間で出せる最良の版は何か」に変わり、範囲を削ることが失敗の告白ではなく普通の判断になる。超過したプロジェクトに延長を重ねるのも同じ力で、そこにサンクコストが燃料を足している。",
      "counter": {
        "name": "隠れた変数としての品質",
        "note": "期日が固定されても範囲を削れない、あるいは削らないチームは、代わりにテストやレビュー、エラー処理を削る。また、プロトコルやコンプライアンス要件のように、それ以下に切っては出す意味のない下限がある仕事もある"
      },
      "guideline": "作業を始める前に、どれだけかかるかではなく、どれだけの時間をかける価値があるかを決め、範囲をそれに合わせて形にせよ。時間が尽きたら原則として止めよ。できた部分が単独で成り立つなら出し、そうでなければ形を作り直して、もう一度賭けるかを改めて決めよ。黙って延長するな。削るのは機能であって、テストやレビューではない。筋の通った最小単位より細かく切れない仕事には、時間を固定するな。",
      "source": "Ryan Singer『Shape Up』(Basecamp, 2019) 第 3 章「Set Boundaries」。アペタイトと \"fixed time, variable scope\" の出典。第 8 章「The Betting Table」のサーキットブレーカー (\"by default the project doesn't get an extension\")。先行して 37signals『Getting Real』(2006)「Fix Time and Budget, Flex Scope」(\"Never throw more time or money at a problem, just scale back the scope\")。"
    }
  },
  {
    "slug": "strangler-fig",
    "number": 90,
    "tag": "maintainability",
    "sourceUrl": "https://martinfowler.com/bliki/StranglerFigApplication.html",
    "seeAlso": [
      "second-system-effect",
      "galls-law",
      "ninety-ninety-rule"
    ],
    "figure": {
      "kind": "person",
      "name": "Martin Fowler",
      "monogram": "MF",
      "image": "/figures/strangler-fig.webp",
      "logo": null,
      "credit": {
        "author": "Ade Oshineye",
        "license": "CC BY 2.0",
        "page": "https://commons.wikimedia.org/wiki/File:Martin_Fowler_(2008).jpg"
      }
    },
    "en": {
      "title": "Strangler Fig",
      "concept": "Replacing a live system piece by piece around its edges succeeds far more often than replacing it all at once.",
      "mechanism": "A complete rewrite has to reproduce years of behavior nobody wrote down, while users keep needing features the old system must still deliver, so the target moves while the new system is not yet usable. Nothing reaches production until the end, so the risk and the value both land on a cutover day that often never comes. Routing one capability at a time to new code keeps each step small enough to verify and roll back, and each step starts paying back as soon as it lands. The price is transitional architecture: interception layers and adapters built to be thrown away.",
      "counter": {
        "name": "The Unfinished Migration",
        "note": "the easy routes move first, the tangled core of the old system never does, and the organisation ends up running and paying for two systems indefinitely"
      },
      "guideline": "Put an interception point (a proxy, router or facade) in front of the legacy system and move one slice of behavior behind it at a time, starting with one that delivers value on its own. Define \"done\" at the start, track the share of traffic still on the old path, and budget deleting the old code and the transitional layer as part of the project, not as cleanup for later.",
      "source": "Martin Fowler, *Strangler Fig Application* (martinfowler.com; originally \"Strangler Application\", 2004; rewritten 2024) — the fig metaphor and the case that the reduced risk and earlier value of gradual modernization outweigh the cost of transitional architecture."
    },
    "ja": {
      "title": "ストラングラーフィグ",
      "concept": "稼働中のシステムは、一度に置き換えるより、周縁から少しずつ置き換えるほうがはるかに成功しやすい。",
      "mechanism": "全面的な書き直しは、誰も書き残していない何年分もの挙動を再現しなければならない。その間も利用者は新しい機能を必要とし、それは古いシステムに足すしかないので、新システムが使えるようになる前に目標が動いていく。最後まで本番に何も出ないので、リスクも価値も切り替え日に一度に来る。そしてその日は来ないことが多い。機能を一つずつ新しいコードへ回せば、一歩ごとに検証も切り戻しもできる大きさに収まり、出したそばから元が取れ始める。代償は移行用のアーキテクチャだ。捨てる前提で作る振り分け層やアダプタである。",
      "counter": {
        "name": "終わらない移行",
        "note": "簡単な経路から移り、古いシステムの絡み合った中核はいつまでも移らない。組織は二つのシステムを運用し、その費用を払い続けることになる"
      },
      "guideline": "レガシーシステムの前に振り分け点（プロキシ、ルーター、ファサード）を置き、その裏へ挙動を一切れずつ移せ。最初はそれ単独で価値を生む一切れを選べ。「完了」の定義を最初に決め、古い経路に残るトラフィックの割合を追い、古いコードと移行用の層を消す作業は後片づけではなくプロジェクトの一部として見積もれ。",
      "source": "Martin Fowler『Strangler Fig Application』(martinfowler.com。原題「Strangler Application」、2004 年。2024 年に書き直し)。絞め殺しのイチジクのたとえと、段階的な刷新ではリスクの低さと早く得られる価値が移行用アーキテクチャのコストを上回るという主張の出典。"
    }
  },
  {
    "slug": "choose-boring-technology",
    "number": 91,
    "tag": "decision",
    "sourceUrl": "https://mcfunley.com/choose-boring-technology",
    "seeAlso": [
      "kiss-principle",
      "lindy-effect"
    ],
    "figure": {
      "kind": "person",
      "name": "Dan McKinley",
      "monogram": "DM",
      "image": "/figures/choose-boring-technology.webp",
      "logo": null,
      "credit": {
        "author": "Michael Holloway",
        "license": "CC BY-SA 4.0",
        "page": "https://commons.wikimedia.org/wiki/File:Dan_McKinley_-_Wikimedia_Dev_Summit_2018.png"
      }
    },
    "en": {
      "title": "Choose Boring Technology",
      "concept": "Every unfamiliar technology a team adopts brings unknown failure modes and a permanent operating cost, and a team can afford only a few of them.",
      "mechanism": "Most of a technology's cost is paid after launch: keeping a system working reliably for years costs far more than the convenience it bought while building. With a mature tool the failure modes are well understood because someone has already hit them; with a new one the unknown unknowns are larger, and the team discovers them in production. Each addition is also one more thing to monitor, hire for and keep patched, and that cost stays after the novelty wears off. So novelty is a budget, not a free choice: McKinley gives every company about three innovation tokens.",
      "counter": {
        "name": "Fitness for Purpose",
        "note": "boring is not the same as never new; when the existing stack genuinely cannot do the job, forcing it costs more than a token, and a stack that never moves becomes the legacy nobody wants to work on"
      },
      "guideline": "Before adding a language, datastore or framework, write down what it would take to do the job with what you already run and why that falls short, and make the decision with everyone who will operate it, not inside one team. Spend new technology only where it sets the product apart. When you do adopt something, plan to retire what it replaces.",
      "source": "Dan McKinley, *Choose Boring Technology* (mcfunley.com, 2015) — \"every company gets about three innovation tokens\", drawn from his years at Etsy."
    },
    "ja": {
      "title": "退屈な技術を選べ",
      "concept": "不慣れな技術を採り入れるたびに、未知の故障モードと恒久的な運用コストが付いてくる。チームが抱えられる数は多くない。",
      "mechanism": "技術のコストの大半はリリース後に払う。システムを何年も安定して動かし続けるコストは、作る段階で得た便利さよりはるかに大きい。成熟した道具は誰かがすでに踏んでいるので故障の仕方がよく分かっているが、新しい道具は「知らないことすら知らない」領域が広く、チームはそれを本番で見つけることになる。一つ増えるたびに監視し、採用し、パッチを当て続ける対象も増え、目新しさが消えてもそのコストは残る。だから新しさは自由に選べるものではなく予算だ。McKinley は、どの会社にもイノベーショントークンはおよそ三枚しかないとする。",
      "counter": {
        "name": "目的への適合",
        "note": "退屈とは、新しいものを決して入れないことではない。今の技術スタックでは本当に仕事ができないなら、無理に使うほうがトークン一枚より高くつく。まったく動かないスタックは、誰も触りたがらないレガシーになる"
      },
      "guideline": "言語、データストア、フレームワークを足す前に、今動かしているもので同じ仕事をするには何が要り、なぜ足りないのかを書き出せ。そして一つのチームの中ではなく、それを運用することになる全員で決めよ。新しい技術は、製品を他と分ける場所にだけ使え。何かを採り入れるなら、それが置き換えるものを廃止する計画も立てよ。",
      "source": "Dan McKinley『Choose Boring Technology』(mcfunley.com, 2015)。\"every company gets about three innovation tokens\" の出典。Etsy 在籍時の経験に基づく。"
    }
  }
];

export const lawBySlug: ReadonlyMap<string, Law> = new Map(
  laws.map((law) => [law.slug, law])
);
