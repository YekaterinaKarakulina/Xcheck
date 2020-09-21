const mapData = (databaseData) => {
  const { id, author, state, taskTitle, taskAuthor } = databaseData;
  const grade = databaseData.grade.total;

  return {
    key: id,
    title: id,
    author,
    state,
    taskTitle,
    grade,
    taskAuthor,
  };
};

export default mapData;
