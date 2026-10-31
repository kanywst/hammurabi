// UI copy only. The codex itself lives in data/laws.yaml at the repository root
// and reaches the site through the generated module in src/data/laws.ts.
import type { Locale } from '@/data/laws';

export const translations = {
  en: {
    intro: {
      title: 'Hammurabi',
      lede: (count: number) =>
        `${count} engineering laws. Each one says what to do about it, when it stops applying, and where it was first written down.`,
    },
    nav: {
      laws: 'Laws',
      github: 'GitHub',
    },
    ui: {
      metaTitle: 'Hammurabi — Laws Every Engineer Should Know',
      metaDescription:
        'Engineering laws, each with what to do about it, the counter-force that limits it, and its primary source.',
      situationsHeading: 'Start from a situation',
      allHeading: 'All laws',
      filterAll: 'All',
      filterGroupLabel: 'Filter laws by category',
      searchLabel: 'Search the laws',
      searchPlaceholder:
        'Search by name or idea, e.g. “metric” or “late project”',
      random: 'Random law',
      resultsNone: 'No law matches. Try a shorter word, or choose All.',
      count: (shown: number, total: number) =>
        shown === total ? `${total} laws` : `${shown} of ${total} laws`,
      backToTop: 'Back to top',
    },
    law: {
      whatToDo: 'What to do',
      why: 'Why it happens',
      whenNot: 'When it stops applying',
      source: 'Source',
      sourceLink: 'Read the source',
      seeAlso: 'Related laws',
      backToCodex: 'All laws',
      adjacent: 'Previous and next law',
      previous: 'Previous',
      next: 'Next',
      editOnGitHub: 'Suggest a correction on GitHub',
    },
    footer: 'Text licensed CC BY-SA 4.0. Code licensed MIT.',
    switcher: { label: 'Language', other: '日本語' },
    notFound: {
      title: 'No such law',
      body: 'There is no article at this address.',
    },
  },
  ja: {
    intro: {
      title: 'Hammurabi',
      lede: (count: number) =>
        `エンジニアリングの法則 ${count} 本。それぞれに、どう動けばよいか、どこで当てはまらなくなるか、最初にどこで書かれたかを添えた。`,
    },
    nav: {
      laws: '法則一覧',
      github: 'GitHub',
    },
    ui: {
      metaTitle: 'Hammurabi — エンジニアが知るべき法則集',
      metaDescription:
        'エンジニアリングの法則集。各法則に、取るべき行動、それを制限する対抗力、一次資料の出典を添えた。',
      situationsHeading: '状況から引く',
      allHeading: 'すべての法則',
      filterAll: 'すべて',
      filterGroupLabel: 'カテゴリで法則を絞り込む',
      searchLabel: '法則を検索',
      searchPlaceholder: '名前や内容で検索（例: 指標、見積り）',
      random: 'ランダムに開く',
      resultsNone:
        '該当する法則がありません。短い語で探すか、「すべて」を選んでください。',
      count: (shown: number, total: number) =>
        shown === total ? `${total} 件` : `${total} 件中 ${shown} 件`,
      backToTop: 'ページの先頭へ',
    },
    law: {
      whatToDo: 'どう動くか',
      why: 'なぜ起きるか',
      whenNot: '当てはまらなくなるとき',
      source: '出典',
      sourceLink: '原典を読む',
      seeAlso: '関連する法則',
      backToCodex: '法則一覧',
      adjacent: '前後の法則',
      previous: '前へ',
      next: '次へ',
      editOnGitHub: 'GitHub で誤りを指摘する',
    },
    footer: '本文は CC BY-SA 4.0、コードは MIT で提供しています。',
    switcher: { label: '言語', other: 'English' },
    notFound: {
      title: '該当する法則はありません',
      body: 'このアドレスには記事がありません。',
    },
  },
} as const;

export type Copy = (typeof translations)[Locale];
