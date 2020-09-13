const tasks = [
  {
    id: 'rss2020Q3react-songbird',
    author: 'author1',
    state: 'DRAFT', // enum [DRAFT, PUBLISHED, ARCHIVED]
    categoriesOrder: ['Basic Scope', 'Extra Scope', 'Fines'],
    items: [
      {
        id: 'basic_p1',
        minScore: 0,
        maxScore: 30,
        category: 'Basic Scope',
        title: 'Вёрстка, дизайн, UI:',
        description:
          'минимальная ширина страницы, при которой приложение отображается корректно – 320 рх',
      },
      {
        id: 'basic_p2',
        minScore: 0,
        maxScore: 30,
        category: 'Basic Scope',
        title: 'Аудиоплеер',
        description: 'кастомный, такой же, как в демо приложения, может отличаться по цвету',
      },
      {
        id: 'extra_p1',
        minScore: 0,
        maxScore: 20,
        category: 'Extra Scope',
        title: 'Звуковая индикация правильного/неправильного ответа',
        description:
          'При выборе правильного или неправильного ответа издаются разные звуковые сигналы',
      },
      {
        id: 'extra_p2',
        minScore: 0,
        maxScore: 10,
        category: 'Extra Scope',
        title:
          'Поздравление с абсолютной победой, если набрано максимально возможное количество баллов',
        description:
          'Здесь можно проявить свою фантазию. Это может быть все, что угодно. Например: картинка, анимация, видео, ссылка на что-то интересное, сертификат знатока птичьих голосов, слоган "теперь ты знаешь кто чирикнул" и т.д',
      },
      {
        id: 'fines_p1',
        minScore: -10,
        maxScore: 0,
        category: 'Fines',
        title: 'App crashes',
        description: 'App causes BSoD!',
      },
      {
        id: 'fines_p2',
        minScore: -20,
        maxScore: 0,
        category: 'Fines',
        title: 'App crashes',
        description: 'App causes BSoD!',
      },
    ],
  },
];

const reviewRequests = [
  {
    id: 'rev-req-1',
    crossCheckSessionId: 'rss2020Q3react-songbird', // may be null if this review is not a part of any session
    author: 'author1',
    task: 'rss2020Q3react-songbird',
    state: 'PUBLISHED', // enum [DRAFT, PUBLISHED, COMPLETED]
    selfGrade: {
      // task: 'rss2020Q3react-songbird',
      // items: {
      //   basic_p1: { score: 30, comment: 'Well done!' },
      //   basic_p2: { score: 30, comment: 'Well done!' },
      //   extra_p1: { score: 15, comment: 'Some things are done, some are not' },
      //   extra_p2: { score: 10, comment: 'Well done' },
      //   fines_p1: { score: 0, comment: 'No ticket today' },
      //   fines_p2: { score: -5, comment: 'No ticket today' },
      // },
    },
  },
];

export { tasks, reviewRequests };
