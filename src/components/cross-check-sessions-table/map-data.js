const mapData = (databaseData) => {
  const {
    id,
    title,
    author,
    state,
    taskTitle,
    coefficient,
    crossCheckSessionPeriod,
  } = databaseData;
  return {
    key: id,
    id,
    title,
    author,
    state,
    taskTitle,
    coefficient,
    startDate: crossCheckSessionPeriod[0],
    endDate: crossCheckSessionPeriod[1],
  };
};

export default mapData;
