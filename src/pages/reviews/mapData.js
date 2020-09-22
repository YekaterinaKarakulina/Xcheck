const mapData = (databaseData) => {
  const { id, author, state, taskTitle, requestor } = databaseData;
  const grade = databaseData.grade.total;

  return {
    key: id,
    title: id,
    author,
    state,
    taskTitle,
    grade,
    requestor,
  };
};

export default mapData;
