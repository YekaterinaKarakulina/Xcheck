const mapDataTable = (databaseData) => {
  const { key, author, title, state, taskId, description } = databaseData;
  return {
    key,
    title,
    author,
    state,
    taskId,
    description,
  };
};

export default mapDataTable;
