const mapDataTable = (databaseData) => {
  const { author, title, status, taskId, description } = databaseData;
  return {
    author,
    title,
    status,
    taskId,
    description,
  };
};

export default mapDataTable;
