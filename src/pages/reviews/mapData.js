const mapData = (databaseData) => {
  const { id, author, state, taskTitle } = databaseData;
  const grade = databaseData.grade.total;

  return {
    key: id,
    title: id,
    author,
    state,
    taskTitle,
    grade,
  };
};

export default mapData;
