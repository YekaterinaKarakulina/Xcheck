const mapData = (databaseData) => {
  const { id, title, author, state, taskId, coefficient, crossCheckSessionPeriod } = databaseData;
  return {
    key: id,
    id,
    title,
    author,
    state,
    taskId,
    coefficient,
    startDate: crossCheckSessionPeriod[0],
    endDate: crossCheckSessionPeriod[1],
  };
};

export default mapData;
