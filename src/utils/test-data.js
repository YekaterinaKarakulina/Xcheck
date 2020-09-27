import moment from 'moment';

const xCheckFormValuesDraft = {
  author: "yekaterinakarakulina",
  coefficient: "0.1",
  crossCheckSessionPeriod: [
    moment("2020-09-10", "YYYY-MM-DD"),
    moment("2020-09-20", "YYYY-MM-DD")
  ],
  desiredReviewsAmount: "4",
  discardMinScore: true,
  discardMaxScore: false,
  minReviewsAmount: "1",
  taskTitle: "Task 3",
  title: "Some title",
  draft: true
}
  
const xCheckFormValuesActive = {
  author: "yekaterinakarakulina",
  coefficient: "0.1",
  crossCheckSessionPeriod: [
    moment("2020-09-10", "YYYY-MM-DD"),
    moment("2020-09-20", "YYYY-MM-DD")
  ],
  desiredReviewsAmount: "4",
  discardMinScore: true,
  discardMaxScore: false,
  minReviewsAmount: "1",
  taskTitle: "Task 3",
  title: "Some title",
  draft: false
}
  
const xCheckObject = {
  author: "yekaterinakarakulina",
  coefficient: 0.1,
  crossCheckSessionPeriod: [
    moment("2020-09-10", "YYYY-MM-DD"),
    moment("2020-09-20", "YYYY-MM-DD")
  ],
  desiredReviewsAmount: 4,
  discardMinScore: true,
  discardMaxScore: false,
  minReviewsAmount: 1,
  taskTitle: "Task 3",
  title: "Some title",
  attendees: [],
}

const reviewRequestFormValuesRequired = {
  author: "yekaterinakarakulina",
  linkToDemo: "some link to Demo",
  linkToPR: "some link to PR",
  taskTitle: "Task 3"
}

const reviewRequestFormValues = {
  author: "yekaterinakarakulina",
  crossCheckSessionTitle: "xcheck-4",
  hasChoiceCrossCheckSession: true,
  linkToDemo: "some link to Demo",
  linkToPR: "some link to PR",
  taskTitle: "Task 3"
}

const reviewRequestExpectedObject = {
  author: "yekaterinakarakulina",
  crossCheckSessionId: "xcheck-4",
  id: "9ff4b103-2645-4fa7-9882-25efb5c17c5d",
  linkToDemo: "some link to Demo",
  linkToPR: "some link to PR",
  selfGrade: {},
  state: "draft",
  taskTitle: "Task 3"
}

const selfCheckFormValues = {
  "task-2-bp1": "10",
  "task-2-bp1_comment": "some comment",
  "task-2-ep1": "5",
  "task-2-fp1": "-2",
  "task-2-fp1_comment": "eslint errors"
}

const checkFormValues = {
  "comment_task-3-bp1": "Great!",
  "comment_task-3-fp1": "1 linter error!",
  "performans-group-task-3-bp1": "100%",
  "task-3-bp1": "10",
  "task-3-ep1": "13",
  "task-3-fp1": "-1"
}

const tasks = [
  {
    "taskScore": 100,
    "title": "Task 1",
    "state": "draft",
    "author": "viktorsipach",
    "description": "Task 1 description",
    "items": [
      {
        "id": "task-1-bp1",
        "title": "basic_p1",
        "category": "basic",
        "score": "10",
        "description": "basic_p1 - You need to do some things",
        "mentorCheck": true
      },
      {
        "id": "task-1-bp2",
        "title": "basic_p2",
        "category": "basic",
        "score": "20",
        "description": "basic_p2 - You need to do some things",
        "mentorCheck": false
      },
      {
        "id": "task-1-ep1",
        "title": "extra_p1",
        "category": "extra",
        "score": "30",
        "description": "extra_p1 - You need to do some things",
        "mentorCheck": true
      },
      {
        "id": "task-1-ep2",
        "title": "extra_p2",
        "category": "extra",
        "score": "50",
        "description": "extra_p2 - You need to do some things",
        "mentorCheck": false
      },
      {
        "id": "task-1-fp1",
        "title": "fines_p1",
        "category": "fines",
        "score": "10",
        "description": "fines_p1 - You need to do some things",
        "mentorCheck": true
      },
      {
        "id": "task-1-fp2",
        "title": "fines_p2",
        "category": "fines",
        "score": "10",
        "description": "fines_p2 - You need to do some things",
        "mentorCheck": false
      }
    ],
    "taskId": "task-1",
    "id": "task-1"
  },
  {
    "taskScore": 100,
    "title": "Task 2",
    "state": "closed",
    "author": "KatiaR",
    "description": "Task 2 description",
    "items": [
      {
        "id": "task-2-bp1",
        "title": "basic_p1",
        "category": "basic",
        "score": "10",
        "description": "basic_p1 - You need to do some things",
        "mentorCheck": true
      },
      {
        "id": "task-2-ep1",
        "title": "extra_p1",
        "category": "extra",
        "score": "30",
        "description": "extra_p1 - You need to do some things",
        "mentorCheck": true
      },
      {
        "id": "task-2-fp1",
        "title": "fines_p1",
        "category": "fines",
        "score": "10",
        "description": "fines_p1 - You need to do some things",
        "mentorCheck": true
      }
    ],
    "taskId": "task-2",
    "id": "task-2"
  },
  {
    "taskScore": 100,
    "title": "Task 3",
    "state": "open",
    "author": "YekaterinaKarakulina",
    "description": "Task 3 description",
    "items": [
      {
        "id": "task-3-bp1",
        "title": "basic_p1",
        "category": "basic",
        "score": "10",
        "description": "basic_p1 - You need to do some things",
        "mentorCheck": true
      },
      {
        "id": "task-3-ep1",
        "title": "extra_p1",
        "category": "extra",
        "score": "30",
        "description": "extra_p1 - You need to do some things",
        "mentorCheck": true
      },
      {
        "id": "task-3-fp1",
        "title": "fines_p1",
        "category": "fines",
        "score": "10",
        "description": "fines_p1 - You need to do some things",
        "mentorCheck": true
      }
    ],
    "taskId": "task-3",
    "id": "task-3"
  },
  {
    "taskScore": 100,
    "title": "Task 4",
    "state": "archived",
    "author": "author4",
    "description": "Task 4 description",
    "items": [
      {
        "id": "task-4-bp1",
        "title": "basic_p1",
        "category": "basic",
        "score": "10",
        "description": "basic_p1 - You need to do some things",
        "mentorCheck": true
      },
      {
        "id": "task-4-ep1",
        "title": "extra_p1",
        "category": "extra",
        "score": "30",
        "description": "extra_p1 - You need to do some things",
        "mentorCheck": true
      },
      {
        "id": "task-4-fp1",
        "title": "fines_p1",
        "category": "fines",
        "score": "20",
        "description": "fines_p1 - You need to do some things",
        "mentorCheck": true
      }
    ],
    "taskId": "task-4",
    "id": "task-4"
  }
];

const crossCheckSessions = [
  {
    "id": "xcheck-1",
    "title": "rss2020Q3react-songbird",
    "author": "viktorsipach",
    "state": "draft",
    "taskTitle": "Task 1",
    "crossCheckSessionPeriod": [
      "2020-07-08",
      "2020-07-14"
    ],
    "coefficient": 0.2,
    "discardMinScore": true,
    "discardMaxScore": true,
    "minReviewsAmount": 1,
    "desiredReviewsAmount": 2,
    "attendees": []
  },
  {
    "id": "xcheck-2",
    "title": "rss2020Q3react-xcheck",
    "author": "KatiaR",
    "state": "draft",
    "taskTitle": "Task 2",
    "crossCheckSessionPeriod": [
      "2020-09-15",
      "2020-09-17"
    ],
    "coefficient": 0.7,
    "discardMinScore": true,
    "discardMaxScore": true,
    "minReviewsAmount": 1,
    "desiredReviewsAmount": 2,
    "attendees": []
  },
  {
    "id": "xcheck-3",
    "title": "rss2020Q3react-schedule",
    "author": "YekaterinaKarakulina",
    "state": "closed",
    "taskTitle": "Task 3",
    "crossCheckSessionPeriod": [
      "2020-08-22",
      "2020-09-22"
    ],
    "coefficient": 0.7,
    "discardMinScore": true,
    "discardMaxScore": false,
    "minReviewsAmount": 1,
    "desiredReviewsAmount": 2,
    "attendees": [
      {
        "githubId": "viktorsipach",
        "reviewerOf": [
          "Kipris",
          "Ghuseynova"
        ]
      },
      {
        "githubId": "PavelZaharov1987",
        "reviewerOf": [
          "viktorsipach",
          "Ghuseynova"
        ]
      },
      {
        "githubId": "Ghuseynova",
        "reviewerOf": [
          "Kipris",
          "PavelZaharov1987"
        ]
      },
      {
        "githubId": "Kipris",
        "reviewerOf": [
          "viktorsipach",
          "PavelZaharov1987"
        ]
      }
    ]
  },
  {
    "id": "xcheck-4",
    "title": "rss2020Q3react-someApp",
    "author": "KatiaR",
    "state": "active",
    "taskTitle": "Task 3",
    "crossCheckSessionPeriod": [
      "2020-08-22",
      "2020-09-22"
    ],
    "coefficient": 0.7,
    "discardMinScore": true,
    "discardMaxScore": false,
    "minReviewsAmount": 1,
    "desiredReviewsAmount": 2,
    "attendees": []
  }
]

export { 
  xCheckFormValuesDraft,
  xCheckFormValuesActive,
  xCheckObject,
  reviewRequestFormValuesRequired,
  reviewRequestFormValues,
  reviewRequestExpectedObject,
  selfCheckFormValues,
  checkFormValues,
  tasks,
  crossCheckSessions
}
