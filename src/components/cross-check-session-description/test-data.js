const initialValues = {
  id: "xcheck-1",
  title: "rss2020Q3react-songbird",
  author: "viktorsipach",
  state: "draft",
  taskTitle: "Task 1",
  crossCheckSessionPeriod: [
    "2020-07-08",
    "2020-07-14"
  ],
  coefficient: 0.2,
  discardMinScore: true,
  discardMaxScore: true,
  minReviewsAmount: 1,
  desiredReviewsAmount: 2,
  attendees: [
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
}

export default initialValues;
