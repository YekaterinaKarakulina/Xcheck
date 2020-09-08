const mapData = (databaseData) => {
  const { id, title, author, state, taskId, coefficient, startDate, endDate } = databaseData;
  return {
    key: id,
    id,
    title,
    author,
    state,
    taskId,
    coefficient,
    startDate,
    endDate,
  };
};

export default mapData;
