const initialStateEmpty = [];

const initialStateFull = {
    isModalVisible: false,
    currentReviewRequest: {},
};
  
const reviewRequest = {
    "id": "rev-req-4",
    "author": "viktorsipach",
    "taskTitle": "Task 3",
    "state": "readyToXCheck",
    "selfGrade": {
      "task-3-bp1": {
        "score": 20,
        "comment": "Well done!"
      },
      "task-3-ep1": {
        "score": 15,
        "comment": "Some things are done, some are not"
      },
      "task-3-fp1": {
        "score": 0,
        "comment": "No ticket today"
      }
    },
    "linkToDemo": "#",
    "linkToPR": "#",
    "crossCheckSessionId": "xcheck-3"
};

const reviewRequests = [
    {
    "id": "rev-req-2",
    "author": "KatiaR",
    "taskTitle": "Task 2",
    "state": "draft",
    "selfGrade": {},
    "linkToDemo": "#",
    "linkToPR": "#",
    "crossCheckSessionId": "xcheck-3"
  },
  {
    "id": "rev-req-3",
    "author": "KatiaR",
    "taskTitle": "Task 3",
    "state": "draft",
    "selfGrade": {},
    "linkToDemo": "#",
    "linkToPR": "#",
    "crossCheckSessionId": "xcheck-3"
  }
]

export { 
    initialStateEmpty, 
    initialStateFull, 
    reviewRequest,
    reviewRequests
  };