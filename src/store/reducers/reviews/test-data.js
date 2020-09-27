const initialStateEmpty = [];

const reviewsDatabase = [
    {
    "id": "rev-id-1",
    "requestId": "rev-req-1",
    "author": "KatiaR",
    "requestor": "viktorsipach",
    "taskTitle": "Task 1",
    "state": "published",
    "comments": [
        {
        "author": "viktorsipach",
        "avatar": "https://avatars1.githubusercontent.com/u/54073656?v=4",
        "content": "Test saga!"
        },
        {
        "author": "viktorsipach",
        "avatar": "https://avatars1.githubusercontent.com/u/54073656?v=4",
        "content": "Yes!"
        },
        {
        "author": "viktorsipach",
        "avatar": "https://avatars1.githubusercontent.com/u/54073656?v=4",
        "content": "Well done!"
        },
        {
        "author": "viktorsipach",
        "avatar": "https://avatars1.githubusercontent.com/u/54073656?v=4",
        "content": "Good!"
        }
    ],
    "grade": {
        "items": {
        "task-1-bp1": {
            "score": 15,
            "comment": "Well done!"
        },
        "task-1-ep1": {
            "score": 0,
            "comment": "Some things are done, some are not"
        },
        "task-1-fp1": {
            "score": -20,
            "comment": "No ticket today"
        }
        },
        "total": -5
    }
    },
    {
    "id": "rev-id-2",
    "requestId": "rev-req-2",
    "author": "YekaterinaKarakulina",
    "requestor": "viktorsipach",
    "taskTitle": "Task 2",
    "state": "published",
    "comments": [
        {
        "author": "Ghuseynova",
        "avatar": "https://avatars2.githubusercontent.com/u/37036608?v=4",
        "content": "sada"
        },
        {
        "author": "viktorsipach",
        "avatar": "https://avatars1.githubusercontent.com/u/54073656?v=4",
        "content": "Well!"
        },
        {
        "author": "viktorsipach",
        "avatar": "https://avatars1.githubusercontent.com/u/54073656?v=4",
        "content": "Good Job!"
        }
    ],
    "grade": {
        "items": {
        "task-2-bp1": {
            "score": 25,
            "comment": "Well done!"
        },
        "task-2-ep1": {
            "score": 5,
            "comment": "Some things are done, some are not"
        },
        "task-2-fp1": {
            "score": -10,
            "comment": "No ticket today"
        }
        },
        "total": 40
    }
}
];

export { 
  initialStateEmpty, 
  reviewsDatabase,
};