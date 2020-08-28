const mapData = (databaseData) => {
  const { id, author, state, taskId, coefficient, startDate, endDate } = databaseData;
  return {
    key: id,
    title: id,
    author,
    state,
    task: taskId,
    coefficient,
    startDate,
    endDate,
  };
};

export default mapData;
