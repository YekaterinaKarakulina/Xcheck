const initialStateEmpty = {
  reviewRequest: {
    id: 'rev-req-9',
    author: 'viktorsipach',
    taskTitle: 'Task 3',
    state: 'published',
    selfGrade: {
      'task-3-bp1': { score: 20, comment: 'Well done!' },
      'task-3-ep1': { score: 15, comment: 'Some things are done, some are not' },
      'task-3-fp1': { score: 0, comment: 'No ticket today' },
    },
    linkToDemo: '#',
    linkToPR: '#',
    crossCheckSessionId: '',
  },
  scopes: [
    {
      id: 1,
      title: 'Basic Scope',
      items: [
        {
          id: 'task-3-bp1',
          title: 'basic_p1',
          category: 'basic',
          score: '10',
          description: 'basic_p1 - You need to do some things',
          mentorCheck: true,
        },
      ],
    },
    {
      id: 2,
      title: 'Extra Scope',
      items: [
        {
          id: 'task-3-ep1',
          title: 'extra_p1',
          category: 'extra',
          score: '30',
          description: 'extra_p1 - You need to do some things',
          mentorCheck: true,
        },
      ],
    },
    {
      id: 3,
      title: 'Fines',
      items: [
        {
          id: 'task-3-fp1',
          title: 'fines_p1',
          category: 'fines',
          score: '10',
          description: 'fines_p1 - You need to do some things',
          mentorCheck: true,
        },
      ],
    },
  ],
};

const initialStateFilled = {
  reviewRequest: {
    id: 'rev-req-9',
    author: 'viktorsipach',
    taskTitle: 'Task 3',
    state: 'published',
    selfGrade: {},
    linkToDemo: '#',
    linkToPR: '#',
    crossCheckSessionId: '',
  },
  scopes: [
    {
      id: 1,
      title: 'Basic Scope',
      items: [
        {
          id: 'task-3-bp1',
          title: 'basic_p1',
          category: 'basic',
          score: '10',
          description: 'basic_p1 - You need to do some things',
          mentorCheck: true,
        },
      ],
    },
    {
      id: 2,
      title: 'Extra Scope',
      items: [
        {
          id: 'task-3-ep1',
          title: 'extra_p1',
          category: 'extra',
          score: '30',
          description: 'extra_p1 - You need to do some things',
          mentorCheck: true,
        },
      ],
    },
    {
      id: 3,
      title: 'Fines',
      items: [
        {
          id: 'task-3-fp1',
          title: 'fines_p1',
          category: 'fines',
          score: '10',
          description: 'fines_p1 - You need to do some things',
          mentorCheck: true,
        },
      ],
    },
  ],
};

export { initialStateEmpty, initialStateFilled };
