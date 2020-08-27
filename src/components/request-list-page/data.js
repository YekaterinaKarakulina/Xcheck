const request = [
  {
    id: 'rev-req-1',
    crossCheckSessionId: 'rss2020Q3react-xcheck', // may be null if this review is not a part of any session
    author: 'cardamo',
    task: 'virtual keyboard',
    state: 'PUBLISHED', // enum [DRAFT, PUBLISHED, COMPLETED]
    selfGrade: {
      /* embedded `taskScore` object */
    },
    urlTask: '#',
    urlAuthor: '#',
  },
  {
    id: 'rev-req-2',
    crossCheckSessionId: 'rss2020Q3react-xcheck',
    author: 'adamo',
    task: 'english fo kids',
    state: 'COMPLETED',
    selfGrade: {
      /* embedded `taskScore` object */
    },
    urlTask: '#',
    urlAuthor: '#',
  },
  {
    id: 'rev-req-3',
    crossCheckSessionId: 'rss2020Q3react-xcheck',
    author: 'darmamo',
    task: 'movie search',
    state: 'DRAFT',
    selfGrade: {
      /* embedded `taskScore` object */
    },
    urlTask: '#',
    urlAuthor: '#',
  },
  {
    id: 'rev-req-4',
    crossCheckSessionId: 'rss2020Q3react-xcheck',
    author: 'bardamo',
    task: 'songbird',
    state: 'DRAFT',
    selfGrade: {
      /* embedded `taskScore` object */
    },
    urlTask: '#',
    urlAuthor: '#',
  },
];

export default request;
