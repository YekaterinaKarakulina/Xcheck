const mapDataTable = (databaseData) => {
  const { key, author, title, state, taskId, description } = databaseData;
  return {
    key,
    author,
    title,
    state,
    taskId,
    description,
  };
};

export default mapDataTable;
