const mapData = (databaseData) => {
  const { id, author, state, task } = databaseData;
  return {
    key: id,
    title: id,
    author,
    state,
    task,
  };
};

export default mapData;
