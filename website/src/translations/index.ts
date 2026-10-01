// UI copy only. The codex itself lives in data/laws.yaml at the repository root
// and reaches the site through the generated module in src/data/laws.ts.
import type { Locale } from '@/data/laws';

export const translations = {
  en: {
    hero: {
      title: 'Hammurabi',
      lede: 'Every law in the Code of Hammurabi is a conditional — šumma awīlum, “if a man…”. So is every law here: if the mechanism holds, then do this, unless the counter-force applies.',
    },
    stele: {
      featured: 'Law of the day',
      another: 'Another law',
      position: (column: string, line: number) =>
        `On the stele: column ${column}, line ${line}`,
    },
    nav: {
      principles: 'The Laws',
      about: 'Epilogue',
      github: 'GitHub',
      menu: 'Menu',
    },
    ui: {
      prologueLabel: 'Prologue',
      prologueQuote:
        '“…to bring about the rule of righteousness in the land, so that the strong should not harm the weak.”',
      prologueQuoteBy: '— The Code of Hammurabi, c. 1754 BCE',
      prologueBody:
        'Hammurabi did not invent justice; he wrote it down, numbered it, and set it in stone where everyone could read the same law. This codex does that for engineering — the recurring forces that govern systems, teams, and decisions, carved as articles so they can be cited, argued, and amended, rather than rediscovered at 3 AM.',
      maxim:
        'Good engineering is not the avoidance of all risk, but the deliberate choice of which risks are worth taking.',
      maximBy: '— The Code',
      epilogueLabel: 'Epilogue',
      epilogueCurse:
        'Let the engineer who tears down a fence without learning why it stands, who turns a measure into a target, or who calls a hard problem easy — inherit the pager at 3 AM.',
      metaTitle: 'Hammurabi — Laws Every Engineer Should Know',
      metaDescription:
        'A codex of engineering laws, each paired with its counter-force, a field guideline, and a primary source. Named for the first written code of laws.',
      filterAll: 'All',
      filterGroupLabel: 'Filter laws by category',
      searchPlaceholder: 'Search the laws',
      resultsNone: 'No law matches. Try a shorter word, or choose All.',
      lawsUnit: 'laws',
      backToTop: 'Back to top',
    },
    law: {
      opIf: 'If',
      opThen: 'Then',
      opUnless: 'Unless',
      source: 'Source',
      sourceLink: 'Go to the source',
      seeAlso: 'See also',
      backToCodex: 'All laws',
      adjacent: 'Previous and next law',
      previous: 'Previous',
      next: 'Next',
      editOnGitHub: 'Improve this article on GitHub',
    },
    footer: '© 2026 Hammurabi. Text licensed CC BY-SA 4.0.',
    switcher: { label: 'Language', other: '日本語' },
    notFound: {
      title: 'No such article',
      body: 'This codex has no article at that address.',
    },
  },
  ja: {
    hero: {
      title: 'Hammurabi',
      lede: 'ハンムラビ法典の条文はすべて条件文である——šumma awīlum、「人が…したならば」。この法典も同じだ。もしその力が働くならば、こうせよ。ただし対抗力が効く場合を除く。',
    },
    stele: {
      featured: '今日の法則',
      another: '別の法則',
      position: (column: string, line: number) =>
        `石碑の第${column}欄 ${line}行`,
    },
    nav: {
      principles: '法則',
      about: '結文',
      github: 'GitHub',
      menu: 'メニュー',
    },
    ui: {
      prologueLabel: '序',
      prologueQuote:
        '「…この地に正義を行き渡らせ、強き者が弱き者を虐げぬように。」',
      prologueQuoteBy: '— ハンムラビ法典、紀元前1754年頃',
      prologueBody:
        'ハンムラビは正義を発明したのではない。それを書き留め、番号を振り、誰もが同じ法を読める石に刻んだ。この法典は同じことをエンジニアリングに対して行う——システム・チーム・意思決定を支配する反復する力を、午前3時に再発見されるのではなく、引用し、議論し、改訂できるよう、条文として刻む。',
      maxim:
        '優れたエンジニアリングとは、すべてのリスクを避けることではない。どのリスクを取る価値があるかを、意図して選ぶことである。',
      maximBy: '— 法典より',
      epilogueLabel: '結',
      epilogueCurse:
        'なぜ柵が立つかを学ばずに引き倒す者、測定を目標へとすり替える者、難問を「簡単だ」と言い切る者——その者に午前3時のページャーを継がせよ。',
      metaTitle: 'Hammurabi — エンジニアが知るべき法則集',
      metaDescription:
        '各法則に「対抗力」「現場の指針」「一次資料の出典」を添えた、エンジニアリングの法典。人類最古の成文法典に因んで名付けました。',
      filterAll: 'すべて',
      filterGroupLabel: 'カテゴリで法則を絞り込む',
      searchPlaceholder: '法則を検索',
      resultsNone:
        '該当する法則がありません。短い語で探すか、「すべて」を選んでください。',
      lawsUnit: '件',
      backToTop: 'トップへ戻る',
    },
    law: {
      opIf: 'もし',
      opThen: 'ならば',
      opUnless: 'ただし',
      source: '出典',
      sourceLink: '原典へ',
      seeAlso: '関連する条文',
      backToCodex: '法則一覧',
      adjacent: '前後の法則',
      previous: '前へ',
      next: '次へ',
      editOnGitHub: 'GitHub でこの条文を改善する',
    },
    footer: '© 2026 Hammurabi. 本文は CC BY-SA 4.0 で提供しています。',
    switcher: { label: '言語', other: 'English' },
    notFound: {
      title: '該当する条文はありません',
      body: 'この法典には、そのアドレスの条文が存在しません。',
    },
  },
} as const;

export type Copy = (typeof translations)[Locale];
