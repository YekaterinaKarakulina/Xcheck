const reviewsData = [
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
          "total": "50"
        }
    }
]

export default reviewsData;