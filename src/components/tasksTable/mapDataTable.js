const mapDataTable = (databaseData) => {
  const { author, title, status, taskId, description } = databaseData;
  return {
    key: taskId,
    author,
    title,
    status,
    taskId,
    description,
  };
};

export default mapDataTable;
