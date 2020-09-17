const mapDataTable = (databaseData) => {
  const { author, title, state, taskId, description } = databaseData;
  return {
    key: taskId,
    author,
    title,
    state,
    taskId,
    description,
  };
};

export default mapDataTable;
